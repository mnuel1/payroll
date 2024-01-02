import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';


export const Credentials = ({handleNext, handleBack}) => {
    const [form] = Form.useForm();
    const validatePassword = (_, value) => {
        // Password strength criteria
        const hasUppercase = /[A-Z]/.test(value);
        const hasLowercase = /[a-z]/.test(value);
        const hasNumber = /\d/.test(value);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    
        // Check if password meets all criteria
        if (!(hasUppercase && hasLowercase && hasNumber && hasSpecialChar && value.length >= 8)) {
            return Promise.reject('Please ensure a strong password with lowercase, uppercase, a digit, and a special character (e.g., @#$%).');
        }
    
        return Promise.resolve();
    };
    const onFinish = (values) => {
        console.log(values);
        handleNext()
    }
    return (
        <>
          
                      
            <div className='mt-4 border-gray-300 '>                                
                <Form
                    form={form}
                    name="trigger"   
                    style={{
                        maxWidth: 800,                        
                    }}
                    onFinish={onFinish}
                    layout="vertical"
                    autoComplete="off"
                >                    
                    <Form.Item
                        hasFeedback
                        name="email"
                        label="Email Address"
                        validateTrigger="onBlur"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid email Address!',
                            },
                            {
                                required: true,
                                message: 'Please input your email Address!',
                            },
                        ]}                        
                    >
                        <Input placeholder="delacruz@gmail.com" />
                    </Form.Item>                        
                    <Form.Item
                        hasFeedback
                        label="Password"
                        name="password"
                        validateTrigger="onBlur"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            {
                                min: 8,
                                message: 'There should be at least 8 digits!',
                            },
                            {
                                validator: validatePassword,
                            },
                        ]}                        
                    >
                        <Input placeholder="Input a strong password" />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        label="Confirm Password"
                        name="confirm"
                        dependencies={['password']}
                        validateTrigger="onBlur"
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                            }),
                        ]}                        
                    >
                        <Input placeholder="Repeat your password to confirm it" />
                    </Form.Item>                
                    <Form.Item className='mt-6 flex gap-4'>
                        <Button className='text-black ' onClick={handleBack}> Back</Button>                    
                        <Button type='primary' className='bg-blue-500 ml-4' htmlType='submit'>Next</Button>
                    </Form.Item>
                                            
                </Form>                   
            </div>
        </>
    );
}