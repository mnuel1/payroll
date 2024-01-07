import React, { useState } from 'react'
import { Alert, Form, Input, DatePicker, Select, Button } from 'antd';
// import { Signature } from '../Signature/Signature';

const { RangePicker } = DatePicker;

export const BasicInfo = ({handleNext, updateRegisterData}) => {

    const [form] = Form.useForm();


    const handleTinChange = (e) => {
        const inputValue = e.target.value.replace(/[^0-9]/g, '');
        const formattedValue = inputValue.replace(/(\d{3})(?=\d)/g, '$1-');
            
        form.setFieldsValue({
          tin: formattedValue.substring(0, 11), 
        });
    };

    const prefixSelector = (        
        <Select
            style={{
            width: 70,
            }}
            defaultValue="63"
        >
            <Select.Option value="63">+63</Select.Option>            
        </Select>
        
    );

    const onFinish = (fieldsValue) => {
        const values = {
            ...fieldsValue,
            'birthdate': fieldsValue['birthdate'].format('YYYY-MM-DD'),
        };
        
        Object.keys(values).forEach(key => {
            updateRegisterData(key, values[key]);
        });

        handleNext()
    }
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
                    onFinish={onFinish}      
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item style={{marginBottom:20}}>
                        <Form.Item
                            hasFeedback
                            label="Last Name"
                            name="lastname"
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
                            name="middlename"
                            validateTrigger="onBlur"                                
                            style={{ display: 'inline-block', margin:'0 8px'}}
                        >
                            <Input placeholder="Segunda" />
                        </Form.Item>
                        <Form.Item
                            hasFeedback
                            label="First Name"
                            name="firstname"
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
                            name="contact"
                            label="Contact Number"
                            validateTrigger="onBlur"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your contact!',
                                },
                            ]}
                            style={{ display: 'inline-block', margin:'0 8px'}}
                        >
                            <Input
                                addonBefore={prefixSelector}
                                placeholder='Input your contact'
                            />
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
                    </Form.Item>
                    <Form.Item style={{marginBottom:20}}>   
                        <Form.Item
                            hasFeedback
                            label="Birthday"
                            name='birthdate'
                            validateTrigger="onBlur"                                
                            rules={[
                                {
                                    type: 'object',
                                    required: true,
                                    message: 'Birthday is required',
                                }                             
                            ]}
                            style={{ display: 'inline-block',margin:'0 8px'}}   
                        >
                            <DatePicker />
                        </Form.Item>                        
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
                                <Input placeholder="Input street"/>
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
                    {/* <Form.Item
                            hasFeedback
                            label="Signature"
                            name='signature'
                            validateTrigger="onBlur"                                
                            rules={[
                                {
                                    type: 'object',
                                    required: true,
                                    message: 'Birthday is required',
                                }                             
                            ]}
                            style={{ display: 'inline-block',margin:'0 8px'}}   
                        >
                            <Signature />
                    </Form.Item>   */}
                        <Form.Item className='mt-6 mx-2 flex gap-4'>
                            <Button type='primary' className='bg-blue-500' htmlType='submit'>Next</Button>
                        </Form.Item>
                </Form>                   
            </div>
        </>
    );
}