const expressAsyncHandler = require('express-async-handler');
const connection = require('../connection/connection.js');
const bcrypt = require('bcrypt');
const moment = require('moment-timezone');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();

const Register = expressAsyncHandler(async (req, res) => {
    const {
        tin,        
        firstname,
        middlename,
        lastname,
        birthdate,
        contact,
        address,
        zip_code,
        foreignAddress,
        email,
        password,
        signature,
    } = req.body;

    const createdAt = moment().tz('Asia/Manila').format('YYYY-MM-DD HH:mm:ss');
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    // const signatureData = signature.split(',')[1];
    const signatureData = "signature.split(',')[1];"
    // const decodedSignature = Buffer.from(signatureData, 'base64');
    const decodedSignature = "Buffer.from(signatureData, 'base64');"
    const id = uuidv4();
    const uniqueId = id.replace(/-/g, '').substring(0, 12);

    try {
        const usernameFromEmail = email.split('@')[0];
        const userDatabaseName = `payroll_${usernameFromEmail}`;

        // Start a transaction
        await connection.mainConnection.query('START TRANSACTION');

        // Check if the user already exists
        const userExists = await connection.mainConnection.query(
            'SELECT COUNT(*) as count FROM tbl_user WHERE email_address = ? FOR UPDATE',
            [email]
        );

        if (userExists[0].count > 0) {
            // User already exists, roll back the transaction
            await connection.mainConnection.query('ROLLBACK');
            res.status(400).json({ title: 'User Already Exists', message: 'A user with this email address already exists.' });
            return;
        }

        await connection.mainConnection.query(
            'INSERT INTO tbl_user (user_num, firstname, middlename, lastname, birthdate, contact, tin, registered_address, zip_code, foreign_address, email_address, password, signature, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [uniqueId, firstname, middlename, lastname, birthdate, contact, tin, address, zip_code, foreignAddress, email, hash, decodedSignature, createdAt]
        );
        
        await connection.mainConnection.query(`CREATE DATABASE IF NOT EXISTS ${userDatabaseName}`);
        
        const userDatabasePool = connection.getUserDatabaseConnection(usernameFromEmail);

        if (!userDatabasePool) {
            throw new Error('User-specific database pool not created');
        }

        console.log(`Attempting to create database: ${userDatabaseName}`);
        
        await userDatabasePool.query(`USE ${userDatabaseName}`);

        await userDatabasePool.query(`
            CREATE TABLE IF NOT EXISTS user_data (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_num VARCHAR(255),                
                firstname VARCHAR(255),
                middlename VARCHAR(255),
                lastname VARCHAR(255),
                birthdate DATE,
                contact VARCHAR(13),
                tin VARCHAR(12),
                registered_address VARCHAR(255),
                zip_code VARCHAR(255),
                foreign_address VARCHAR(255),
                email_address VARCHAR(255),
                password VARCHAR(255),
                signature BLOB,
                created_at DATETIME
            )
        `);

        await userDatabasePool.query(
            `INSERT INTO user_data (user_num, firstname, middlename, 
            lastname, birthdate, contact, tin, registered_address, zip_code, foreign_address, 
            email_address, password, signature, created_at) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                uniqueId,                
                firstname,
                middlename,
                lastname,
                birthdate,
                contact,
                tin,
                address,
                zip_code,
                foreignAddress,
                email,
                hash,
                decodedSignature,
                createdAt,
            ]
        );

        // Voucher Table
        await userDatabasePool.query(`
            CREATE TABLE IF NOT EXISTS user_voucher_payroll (
                id INT AUTO_INCREMENT PRIMARY KEY,
                control_no VARCHAR(250) DEFAULT '1000A' NOT NULL,            
                voucher BLOB,
                created_at DATETIME
            )
        `);
    

        console.log(`Database creation successful: ${userDatabaseName}`);
        
        // Commit the transaction
        await connection.mainConnection.query('COMMIT');
        
        res.status(200).json({ title: 'Success', message: 'Registration Successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ title: 'Internal Error', message: error.message });
    }
});

module.exports = Register;
