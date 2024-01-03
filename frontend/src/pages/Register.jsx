import React, { useState } from 'react'
import { CustomSteps } from '../components/Steps/Steps';
import { BasicInfo, Credentials, Payment } from "../components/Register/index";
import { Button, message } from 'antd';
import { ResultMessage } from '../components/Success/Success';

import axios from 'axios'
import { useNavigate, NavLink } from 'react-router-dom'
export const Register = () => {
    
    const [loading, setLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const error = (message) => {
        messageApi.open({
          type: 'error',
          content: message,
        });
    };
    const [registerData, setRegisterData] = useState({
        firstname: '',
        middlename: '',
        lastname: '',
        contact: '',
        tin: '',
        birthdate: '',
        address: '',
        zip_code:'',
        signature:'',
        email: '',
        password: '',
    });
    
    const navigate = useNavigate();

    const [stepCounter, setStepCounter] = useState(0);
    
    const handleNext = () => { setStepCounter(prevState => prevState + 1) }
    const handleBack = () => { setStepCounter(prevState => prevState - 1) }

    const updateRegisterData = (name, value) => {
        setRegisterData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    
    const handleSubmit = () => {
        try {
            
            const response = axios.post('http://localhost:4000/api/register', registerData);
            if (response.status === 200) {        
                console.log('yo');        
                handleNext()
            } else {
                error(response.message)
            }
        } catch (error) {
            error(error)
        }
    }
        
    function showStep(step){
        switch(step){
            case 0 : 
                return <BasicInfo handleNext={handleNext} updateRegisterData={updateRegisterData}/>
            case 1 : 
                return <Credentials handleNext={handleSubmit} handleBack={handleBack} updateRegisterData={updateRegisterData}/>
            case 2 : 
                return <Payment handleSubmit={handleSubmit} handleBack={handleBack}/>       
            case 3 :
                return <div>
                    <ResultMessage message={'Registered Successfully'} 
                    submesssage={`Congratulations, you have successfully registered your account, you can now use the payroll`}/>

                    <NavLink 
                        to={'/admin'} 
                        className='text-primary font-semibold pl-1'>
                            Okay!
                    </NavLink>
                </div>
            default:
                break;
        }
    }
    return (
        <>
            {contextHolder}
            <div className='w-full min-h-screen flex flex-col px-[1rem]'>
                <div className='flex flex-col items-start mt-24 p-4 mx-0md:mx-12'>
                    <h1 className='text-1xl sm:text-2xl md:text-4xl font-primary text-center'><span className='text-primary font-semibold'>Payroll</span> system</h1>
                    <h1 className='font-secondary text-xs sm:text-sm md:text-md text-gray-500 mt-2'>Sign up to create your account</h1>        
                        
                </div>
                
                <div className='mx-2 md:mx-20 mt-4 p-2 flex items-center justify-center'>
                    <CustomSteps steps={stepCounter}/>
                </div>
                <div className='bg-gray-200 rounded-md p-6 mx-2 md:mx-20 mt-4'>
                    
                    <div className='mt-4'>
                        {showStep(stepCounter)}          
                    </div>
                    <div className='mt-6 mx-2 flex gap-4'>

                        {stepCounter === 2 && <Button type='primary' className='bg-blue-500' 
                            onClick={() => setStepCounter(prevState => prevState + 1)}>Submit</Button>}                                        
                    </div>
                    <div className='mx-2'>
                        <h1 className='font-secondary text-xs sm:text-sm md:text-md text-gray-500 mt-2'>Already have an account? 
                            <NavLink 
                                to={'/sign-in'} 
                                className='text-primary font-semibold pl-1'>
                                    Sign In
                            </NavLink>
                        </h1>
                    </div>    
                </div>                                          
            </div>
        </>
    )
}
