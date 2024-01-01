import React from 'react'
import { Steps } from 'antd';


export const CustomSteps = ({steps}) => {

    return (
                    
        <Steps
            size="small"
            current={steps}
            direction='horizontal'
            items={[
            {
                title: 'Basic Information'
            },
            {
                title: 'Users Credentials',    
            },
            {
                title: 'Pricing',    
            }
            ]}
        />
        
    )
}