import React, { useState } from 'react'
import { CustomSteps } from '../components/Steps/Steps';
import { BasicInfo, Credentials, Payment } from "../components/Register/index";
import { NavLink } from 'react-router-dom'
import { Button } from 'antd';


import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const Register = () => {
    
    const [loading, setLoading] = useState(false);
    const [showStatus, setShowStatus] = useState(false);
    const [statusMessage, setStatusMessage] = useState({
      title: "",
      comment: "",
    })

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

    const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);
    const navigate = useNavigate();

    const [stepCounter, setStepCounter] = useState(0);
    
    const handleNext = () => { setStepCounter(prevState => prevState + 1) }
    const handleBack = () => { setStepCounter(prevState => prevState - 1) }
    
    const handleSubmit = () => {
        
    }
        
    function showStep(step){
        switch(step){
            case 0 : 
                return <BasicInfo handleNext={handleNext}/>
            case 1 : 
                return <Credentials handleNext={handleSubmit} handleBack={handleBack}/>
            case 2 : 
                return <Payment handleSubmit={handleSubmit} handleBack={handleBack}/>       
            default:
                break;
        }
    }
    return (
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
                                    
        {/* {showStatus &&
            <Modal 
                title={statusMessage.title} 
                comment={statusMessage.comment} 
                toggle={
                    () => {
                        setShowStatus(prevState => !prevState);
                        if(isRegistrationComplete){
                            navigate('/sign-in');
                        }
                    }
                }/>
        } */}
        </div>
    )
}
