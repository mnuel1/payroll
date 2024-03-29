import React,{ useEffect, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

import { BiSolidReceipt } from 'react-icons/bi'
import { MdDashboard, 
        MdOutlinePeopleAlt, 
        MdOutlineReceiptLong, 
        MdOutlineSettings, 
        MdLogout,
        MdArrowDropDown    
    } from "react-icons/md";

import { Authentication } from "../Auth/Authentication"

export const AdminNavbar = () => {

    const {getUser, logout, isAuthenticated} = Authentication();
    const user = getUser();
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [isSubOption, setIsSubOption] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const handleMenu = () => {
        setShowMenu(prevState => !prevState);
    }

    useEffect(() => {
        if(!isAuthenticated()) {
            navigate('/sign-in');
        }
    },[logout])

  return (
    <div className='fixed w-full z-[20] flex items-center justify-between py-4 px-[1rem] md:px-[1rem] font-secondary bg-optional'>
        <h1 className='text-primary text-white text-lg font-bold ml-2 sm:ml-10 md:ml-20'>PAYROLL</h1>
        <div className='flex items-center justify-center gap-5 mr-2 sm:mr-10 md:mr-20'>
            
            {/* <button className={`relative p-2 hover:bg-primary rounded-md transition-all delay-50 ease-in-out
                cursor-pointer group ${showNotifications ? "bg-primary" : "bg-transparent"}`}
                onClick={() => setShowNotifications(prevState => !prevState)}>
                <RiNotification2Fill className={`text-2xl group-hover:text-secondary ${showNotifications ? "text-secondary": "text-white"}`}/>
                <div className='w-3 h-3 bg-red-500 absolute rounded-full top-2 right-2 border-2 border-gray-200'></div>
            </button> */}
            <div className='z-50'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className={`w-7 h-7 ${showMenu ? "text-secondary" : "text-white"} cursor-pointer hover:text-secondary transition-all
                    delay-50 ease-in-out`}
                    onClick={handleMenu}
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                    />
                </svg>
            </div>     
        </div>
        <div className={`${showMenu ? "w-[19rem]" : "w-0"} z-[20] absolute h-screen bg-primary left-0 top-0
        overflow-hidden transition-all delay-50 ease-in-out flex flex-col justify-between py-5`}>
            <div>
                <h1 className='text-center p-5 text-white'>PAYROLL</h1>
            </div>
            <div className='flex flex-col gap-3 mt-20 p-3'>
            <NavLink 
                to="/admin"
                end
                className={({isActive}) => 
                isActive ? 'text-white p-5 bg-optional rounded-md flex items-center gap-3' :
                'text-white hover:bg-optional p-5 flex items-center gap-3 rounded-md transition-all delay-50 ease-in-out'}
                onClick={handleMenu}
            >
                <MdDashboard className='text-xl'/>
                Dashboard
            </NavLink>
            
            <button
                // to=""
                className={`
                ${isSubOption
                    ? 'text-white p-5 bg-optional rounded-md flex items-center gap-3 justify-between'
                    : 'text-white hover:bg-optional p-5 flex items-center gap-3 rounded-md transition-all delay-50 ease-in-out justify-between'}`
                }
                onClick={() => setIsSubOption(prevState => !prevState)}
            >
                <div className='flex gap-3'>
                    <MdOutlinePeopleAlt  className='text-xl' />
                    Employees
                </div>
                
                <MdArrowDropDown className='self-end text-xl'/>
            </button>
            
            
            <div className={`${isSubOption ? 'flex flex-col gap-4 border-b border-blue-800' : 'hidden'}`}>
                <NavLink
                    to="/employees"
                    className={({ isActive }) =>
                    isActive
                        ? 'text-white p-5 bg-optional rounded-md flex items-center gap-3'
                        : 'text-white hover:bg-optional p-5 flex items-center gap-3 rounded-md transition-all delay-50 ease-in-out'
                    }
                    onClick={handleMenu}
                >
                    <BiSolidReceipt className='text-xl' />
                    Employees Informations
                </NavLink>
                <NavLink
                    to="/employees/attendance"
                    className={({ isActive }) =>
                    isActive
                        ? 'text-white p-5 bg-optional rounded-md flex items-center gap-3'
                        : 'text-white hover:bg-optional p-5 flex items-center gap-3 rounded-md transition-all delay-50 ease-in-out'
                    }
                    onClick={handleMenu}
                >
                    <BiSolidReceipt className='text-xl' />
                    Attendance Management
                </NavLink>
                <NavLink
                    to="/employees/salary"
                    className={({ isActive }) =>
                    isActive
                        ? 'text-white p-5 bg-optional rounded-md flex items-center gap-3'
                        : 'text-white hover:bg-optional p-5 flex items-center gap-3 rounded-md transition-all delay-50 ease-in-out'
                    }
                    onClick={handleMenu}
                >
                    <BiSolidReceipt className='text-xl' />
                    Salary Management
                </NavLink>
                <NavLink
                    to="/employees/payslip"
                    className={({ isActive }) =>
                    isActive
                        ? 'text-white p-5 bg-optional rounded-md flex items-center gap-3'
                        : 'text-white hover:bg-optional p-5 flex items-center gap-3 rounded-md transition-all delay-50 ease-in-out'
                    }
                    onClick={handleMenu}
                >
                    <BiSolidReceipt className='text-xl' />
                    Generate Payslip
                </NavLink>
                <NavLink
                    to="/deductions-benefits"
                    className={({ isActive }) =>
                    isActive
                        ? 'text-white p-5 bg-optional rounded-md flex items-center gap-3'
                        : 'text-white hover:bg-optional p-5 flex items-center gap-3 rounded-md transition-all delay-50 ease-in-out'
                    }
                    onClick={handleMenu}
                >
                    <BiSolidReceipt className='text-xl' />
                    Deductions and Benefits
                </NavLink>
                
            </div>
            
            
            
            <NavLink 
                to="billing"
                className={({isActive}) => 
                isActive ? 'text-white p-5 bg-optional rounded-md flex items-center gap-3' :
                'text-white hover:bg-optional p-5 flex items-center gap-3 rounded-md transition-all delay-50 ease-in-out'}
                onClick={handleMenu}
            >
                <MdOutlineReceiptLong  className='text-xl'/>
                Billing
            </NavLink>
            <NavLink 
                to="account"
                className={({isActive}) => 
                isActive ? 'text-white p-5 bg-optional rounded-md flex items-center gap-3' :
                'text-white hover:bg-optional p-5 flex items-center gap-3 rounded-md transition-all delay-50 ease-in-out'}
                onClick={handleMenu}
            >
                <MdOutlineSettings  className='text-xl'/>
                Account Settings
            </NavLink>
          </div>

            <div className='mt-auto p-5'>
            <button 
                onClick={logout}
                className='text-white w-full hover:bg-optional p-5 flex items-center gap-3 rounded-md transition-all delay-50 
                ease-in-out'                
            >
                    <MdLogout className='text-xl'/>
                    Logout
            </button>
            </div>
        </div>
        
    </div>
  )
}


// {showNotifications && 
//     <div className='absolute w-[20rem] h-[35rem] bg-gray-200 p-3 top-[4rem] rounded-md right-[3rem]'>
//         <div className='flex items-center justify-between'>
//             <h1 className='font-primary text-primary'>Notifications</h1>
//             <div className=''>
//                 <IoFilterSharp className='text-xl text-primary'/>
//             </div>
//         </div>
//         <div className='mt-5 rounded-md border flex flex-col gap-2'>
//             <div className='h-[7rem] p-2 bg-gray-300'>
//                 <div className='flex items-center flex-start gap-2'>
//                     {/* <div className='w-7 h-7 bg-primary rounded-full flex items-center justify-center'> */}
//                         {/* <h1 className='text-white'>{user.charAt(0).toUpperCase()}</h1> */}
//                     {/* </div> */}
//                     <div>
//                         {/* <h1 className='font-secondary text-sm'>{user}</h1> */}
//                         <h1 className='text-xs font-secondary'>December 22, 2023 9:35 AM</h1>
//                     </div>
//                 </div>
//                 <div className='mt-5'>
//                     <h1 className='text-sm'>System recommend to change your password to your data safety.</h1>
//                 </div>
//             </div>
//             <div className='h-[7rem] p-2'>
//                 <div className='flex items-center flex-start gap-2'>
//                     {/* <div className='w-7 h-7 bg-primary rounded-full flex items-center justify-center'> */}
//                         {/* <h1 className='text-white'>{user.charAt(0).toUpperCase()}</h1> */}
//                     {/* </div> */}
//                     <div>
//                         {/* <h1 className='font-secondary text-sm'>{user}</h1> */}
//                         <h1 className='text-xs font-secondary'>December 22, 2023 9:35 AM</h1>
//                     </div>
//                 </div>
//                 <div className='mt-5'>
//                     <h1 className='text-sm'>System recommend to change your password to your data safety.</h1>
//                 </div>
//             </div>
            
//         </div>
//     </div>
// }

