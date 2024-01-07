import React, {useState} from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };



export const DragDropUpload = () => {   
    const [imageUrl, setImageUrl] = useState();
  
    const props = {
        name: 'file',
        multiple: true,
        showUploadList:false,
        maxCount:1,
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        beforeUpload: (file) => {
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
            if (!isJpgOrPng) {
                message.error('You can only upload JPG/PNG file!');
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                message.error('Image must smaller than 2MB!');
            }
            return (isJpgOrPng && isLt2M) || Upload.LIST_IGNORE;
          },
        onChange(info) {
            const { status } = info.file;
            if (info.file.status === 'uploading') {                
                return;
            }
            if (status === 'done') {
                getBase64(info.file.originFileObj, (url) => {                    
                    setImageUrl(url);
                });
                message.success(`${info.file.name} file uploaded successfully.`);
                
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    return (

        <Dragger {...props} style={{width:'100%', margin:'auto', padding:20}}>
            <p className="ant-upload-drag-icon">
                {imageUrl ? (
                    <img
                    src={imageUrl}
                    alt="avatar"
                    style={{
                        width: '100%',
                        padding:10
                    }}
                    />
                ) : (
                    <>
                        <InboxOutlined />
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Only upload png/jpg image format
                        </p>
                    </>
                )}
            </p>
            
        </Dragger>
 
        
        
    )
};
