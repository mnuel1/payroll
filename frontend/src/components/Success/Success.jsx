import React from 'react';
import { Button, Result } from 'antd';

export const ResultMessage = ({message, submesssage}) => {
    return (
        <Result
            status="success"
            title={message}
            subTitle={submesssage}        
        />

    )
    
};
