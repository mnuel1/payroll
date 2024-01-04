const mysql = require('mysql');
const util = require('util');
require('dotenv').config();

const mainConnection = mysql.createPool({
    connectionLimit: 10, 
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

const getUserDatabaseConnection = async (username) => {
    const userDatabaseName = `payroll_${username.split('@')[0]}`;
    const pool = mysql.createPool({
        connectionLimit: 10, 
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: userDatabaseName,
    });

    pool.query = await util.promisify(pool.query);

    return pool;
};

mainConnection.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to main database:', err);
    } else {
        console.log('Connected to main database!');
        connection.release();
    }
});

const closeConnections = () => {
    mainConnection.end();
    console.log('Main database connection closed.');
};

process.on('SIGINT', () => {
    closeConnections();
    process.exit();
});

module.exports = { mainConnection, getUserDatabaseConnection, closeConnections };
