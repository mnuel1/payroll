import React, { useState } from 'react'
import { CustomSteps } from '../components/Steps/Steps';
import { BasicInfo } from '../components/Register/BasicInfo';
import { Credentials } from '../components/Register/Credentials';
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
    const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);
    const navigate = useNavigate();

    const [stepCounter, setStepCounter] = useState(0);
 
    
    function showStep(step){
        switch(step){
            case 0 : 
                return <BasicInfo/>
            case 1 : 
                return <Credentials/>
            case 2 : 
                return null       
            default:
                break;
        }
    }
    return (
        <div className='w-full min-h-screen flex flex-col px-[1rem]'>
            <div className='flex flex-col items-start mt-24 p-4 mx-12'>
                <h1 className='text-1xl sm:text-2xl md:text-4xl font-primary text-center'><span className='text-primary font-semibold'>Payroll</span> system</h1>
                <h1 className='font-secondary text-xs sm:text-sm md:text-md text-gray-500 mt-2'>Sign up to create your account</h1>                
            </div>
            
            <div className='mx-20 mt-4 p-2'>
                <CustomSteps steps={stepCounter}/>
            </div>
            <div className='bg-gray-200 rounded-md p-6 mx-20 mt-4'>
                
                <div className='mt-4'>
                    {showStep(stepCounter)}          
                </div>
                <div className='mt-6 mx-2 flex gap-4'>
                    <Button className='text-black' 
                        onClick={() => setStepCounter(prevState => prevState - 1)}> Back</Button>
                    <Button type='primary' className='bg-blue-500' 
                        onClick={() => setStepCounter(prevState => prevState + 1)}>Next</Button>                    
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
