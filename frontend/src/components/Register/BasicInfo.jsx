import React, { useState } from 'react'
import { Alert, Form, Input } from 'antd';


export const BasicInfo = ({}) => {
    const [form] = Form.useForm();
    const handleTinChange = (e) => {
        const inputValue = e.target.value.replace(/[^0-9]/g, '');
        const formattedValue = inputValue.replace(/(\d{3})(?=\d)/g, '$1-');
    
        
        form.setFieldsValue({
          tin: formattedValue.substring(0, 11), 
        });
    };
    return (
        <>
          
            <Alert message="Input N/A if not applicable" type="info" />    
          

            <div className='mt-4 border-gray-300 '>                                
                <Form
                    form={form}
                    name="trigger"   
                    style={{
                        maxWidth: 800,                        
                    }}                     
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item style={{marginBottom:20}}>
                        <Form.Item
                            hasFeedback
                            label="Last Name"
                            name="last_name"
                            validateTrigger="onBlur"
                            rules={[
                                {                                    
                                    required: true,
                                    message:'Last Name is required'
                                },
                            ]}
                            style={{ display: 'inline-block', margin:'0 8px'}}
                        >
                            <Input placeholder="Dela Cruz" />
                        </Form.Item>
                        <Form.Item
                            hasFeedback
                            label="Middle Name"
                            name="middle_name"
                            validateTrigger="onBlur"                                
                            style={{ display: 'inline-block', margin:'0 8px'}}
                        >
                            <Input placeholder="Segunda" />
                        </Form.Item>
                        <Form.Item
                            hasFeedback
                            label="First Name"
                            name="first_name"
                            validateTrigger="onBlur"
                            rules={[
                                {
                                    required: true,
                                    message:'First Name is required'
                                },
                            ]}
                            style={{ display: 'inline-block', margin:'0 8px'}}
                        >
                            <Input placeholder="Juan" />
                        </Form.Item>
                    </Form.Item>
                    
                    <Form.Item style={{marginBottom:20}}>                           
                        <Form.Item
                            hasFeedback
                            label="Address"
                            name='address'
                            validateTrigger="onBlur"                                
                            rules={[
                                {
                                required: true,
                                message: 'Province is required',
                                },
                            ]}
                            style={{ display: 'inline-block',margin:'0 8px'}}   
                        >
                                <Input
                                                                    
                                placeholder="Input street"
                            />
                        </Form.Item>
                        <Form.Item
                            name='zip_code'                                
                            hasFeedback
                            label="Zip Code"
                            validateTrigger="onBlur"
                            rules={[
                                {
                                required: true,
                                message: 'Street is required',
                                },
                            ]}
                            style={{ display: 'inline-block', margin:'0 8px'}}
                        >
                            <Input
                                style={{width: '50%'}}
                                placeholder="1000"
                            />
                            </Form.Item>
                        
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        label="TIN ( Taxpayer Identification Number )"
                        name="tin"
                        validateTrigger="onBlur"
                        rules={[
                            {
                                max: 12,                                
                                message: 'TIN cannot be longer than 9 digits'
                            },          
                            {
                                required: true,
                                message: 'TIN is required'
                            }                      
                        ]}
                        style={{ display: 'inline-block', margin:'0 8px'}}
                    >
                        <Input placeholder="000-000-000" onChange={handleTinChange}/>
                    </Form.Item>
                </Form>                   
            </div>
        </>
    );
}