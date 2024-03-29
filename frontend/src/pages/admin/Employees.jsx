import React, { useEffect, useState } from 'react'
import { EmployeeTable } from '../../components/Table/Table';
import { PlusCircleOutlined } from '@ant-design/icons';
import { PayslipForm } from '../../components/PayslipForm/PayslipForm';
import { Authentication } from '../../Auth/Authentication'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Empty, Input } from 'antd';
const { Search } = Input;
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Employees = () => {

    const [showEmployeeInfo, setShowEmployeeInfo] = useState(false)
    const { isAuthenticated, getUser, logout } = Authentication();

    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        
        if(!isAuthenticated()){
            navigate('/sign-in', { state: { message: "You must login first", from: location.pathname } });
        }        
    },[])
    
    
    const onSearch = (value, _e, info) => console.log(info?.source, value);
    return (
        <div className='w-full px-5 md:px-20'>
            
            
            <h1 className='text-4xl text-primary'>Employees</h1>
            
            <div className={`mt-20 grid ${showEmployeeInfo ? 'grid-cols-2' : 'grid-cols-1'} `}>
                <div>              
                    <span className='text-gray-400 text-sm ml-2'>
                        Employees /<span> </span>
                        <span className='text-blue-500 cursor-pointer'> 
                            Employees Management 
                        </span>
                    </span>
                    <h1 className='text-4xl text-primary'>Employee Management</h1>
                        
                    <div className='mt-10 ml-4'>
                        <h1 className='text-md text-primary'>Search Employee</h1>
                        <Search
                            placeholder="Input search text"
                            onSearch={onSearch}
                            enterButton
                            allowClear
                            style={{ width: '20%', backgroundColor: '#1677ff', borderRadius: 6 }}
                        />
                    </div>

                    <div className='mt-10 ml-4'>                        
                        <Link
                            to={'/employees/add'}>                    
                                <Button type='primary' className='bg-blue-500 mb-4 
                                text-primary text-white text-md' icon={<PlusCircleOutlined />}> Add Employee</Button>
                        </Link>
                        <EmployeeTable/>                                                                        
                    </div>
                </div>
                <div className='border-l'>

                </div>
                {/* <PayslipForm done={true}/> */}
            </div>
           
        </div>
    )
}
