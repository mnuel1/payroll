import React, { useEffect, useState } from 'react'
import { BasicInfo } from '../../../components/Employees/BasicInfo/BasicInfoEmployee';
import { DragDropUpload } from '../../../components/Employees/DragDropUpload/DragDropUpload';
import { Authentication } from '../../../Auth/Authentication';
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Empty, Input } from 'antd';
const { Search } = Input;
import { Link } from 'react-router-dom'
import axios from 'axios'

export const AddEmployee = () => {

    const { isAuthenticated, getUser, logout } = Authentication();

    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        
        if(!isAuthenticated()){
            navigate('/sign-in', { state: { message: "You must login first", from: location.pathname } });
        }        
    },[])
  
    
    return (
        <div className='w-full px-5 md:px-20'>
            
            
            <h1 className='text-4xl text-primary'>Employees</h1>
            
            <div className='mt-20'>
                <span className='text-gray-400 text-sm ml-2
                '>Employees / Employees Management/ <span className='text-blue-500 cursor-pointer'> Add Employee </span></span>
                <h1 className='text-4xl text-primary'>Add Employee</h1>
                    
                <div className='mt-10 ml-4 p-4 border-2 flex gap-10'>
                    
                    <DragDropUpload/>

                    
                    <div className=''>
                        <BasicInfo/>

                    </div>
                </div>

              
                
            </div>
           
        </div>
    )
}
