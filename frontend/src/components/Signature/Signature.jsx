import React, {useRef, useState} from 'react'
import Popup from 'reactjs-popup'
import { NavLink } from 'react-router-dom'
import SignaturePad from 'react-signature-canvas'
import { Button } from 'antd'

export const Signature = ({formData, submitForm}) => {
    
    const [imageURL, setImageURL] = useState(null)
    const sigCanvas = useRef({});

    const clear = () => sigCanvas.current.clear(); 
    const save = () => setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));

    const handleSubmit = () => {
        formData(prevState => ({...prevState, signature: prevState.signature = imageURL}))
        submitForm();

    }

    return (
        <div>       
            <div className='flex items-center flex-col justify-center'>
                <Popup 
                    modal 
                    trigger={
                    <button
                        className='bg-primary w-full p-2 rounded-md text-white font-secondary
                        transition-all delay-50 ease-in-out hover:bg-secondary flex items-center justify-center gap-2
                        focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-white'
                    >
                        Open Signature pad
                    </button>
                    }
                    closeOnDocumentClick={false}
                >
                {close => (
                    <div className='bg-white p-4 rounded-md'>
                        <SignaturePad 
                            ref={sigCanvas}
                            canvasProps={{
                                className: "border border-black bg-white mb-4"
                            }}
                        />
                        <Button type='primary' onClick={save} className='bg-primary'> Save</Button>
                        <Button onClick={close} className='text-black ml-2'> Close</Button>
                        <Button danger onClick={clear} className='ml-2'> Clear</Button>

                    </div>  
                )}
                </Popup>           
                <div>
                {imageURL ? (
                    <>                    
                        <img
                            src={imageURL}
                            alt="my signature"
                            className='block mx-0 my-auto border border-gray-300 rounded-xl w-[20rem] mt-2'
                        />
                    </>
                ) : null}
                </div>
            </div>
        </div>
  )
}
