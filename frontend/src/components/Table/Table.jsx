import React from 'react';
import { Table, Space } from 'antd';

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sydney No. 1 Lake Park',
    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',    
        name: record.name,
    }),
};
export const EmployeeTable = () => {
   
    const handleView = (record) => {
        // Handle the logic to display the data when the "View" button is clicked
        console.log('View button clicked:', record);
        // Add your logic to display the data, e.g., set it in a state
    };
 
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                <a onClick={() => handleView(record)}>View</a>
                <a>Disable</a>
                </Space>
            ),
        },
    ];
    return (
        <div>        
            <Table
                rowSelection={{
                type: 'checkbox',
                ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                
            />
        </div>
    );
};
