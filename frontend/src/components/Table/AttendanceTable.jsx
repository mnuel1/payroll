import React from 'react';
import { UserAttendanceCalendar } from '../Calendar/Calendar';
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
export const AttendanceTable = () => {
   
    const handleView = (record) => {
        
        console.log('View button clicked:', record);
        
    };
 
    const columns = [
        {
          title: 'Full Name',
          width: 100,
          dataIndex: 'name',
          key: 'name',
          fixed: 'left',
        },
        {
          title: 'Age',
          width: 100,
          dataIndex: 'age',
          key: 'age',
          fixed: 'left',
        },
        {
          title: 'Column 1',
          dataIndex: 'address',
          key: '1',
          width: 150,
        },
        {
          title: 'Column 2',
          dataIndex: 'address',
          key: '2',
          width: 150,
        },
        {
          title: 'Column 3',
          dataIndex: 'address',
          key: '3',
          width: 150,
        },
        {
          title: 'Column 4',
          dataIndex: 'address',
          key: '4',
          width: 150,
        },
        {
          title: 'Column 5',
          dataIndex: 'address',
          key: '5',
          width: 150,
        },
        {
          title: 'Column 6',
          dataIndex: 'address',
          key: '6',
          width: 150,
        },
        {
          title: 'Column 7',
          dataIndex: 'address',
          key: '7',
          width: 150,
        },
        {
          title: 'Column 8',
          dataIndex: 'address',
          key: '8',
          width: 150,
        },
        {
          title: 'Action',
          key: 'operation',
          fixed: 'right',
          width: 100,
          render: () => <a onClick={handleView}>View</a>,
        },
      ];
    return (
        <div>        
            {/* <UserAttendanceCalendar/> */}
            <Table
                rowSelection={{
                    type: 'checkbox',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}      
                scroll={{
                    x: 1500,
                    y: 300,
                }}          
            />
        </div>
    );
};
