import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'antd';
export const Home = () => {
  return (
    
    <div className='min-h-screen bg-primary grid grid-cols-1 lg:grid-cols-2 w-full'>
        <div className='flex mt-14 mx-4 md:mx-24 justify-center flex-col '>
            <div className='mt-10'>
                <h1 className='text-4xl font-bold sm:text-5xl md:text-6xl text-white'>Manage payroll</h1>
                <h1 className='text-4xl font-bold sm:text-5xl md:text-6xl mt-5 md:mt-7 text-white'>and handle</h1>
                <h1 className='text-4xl font-bold sm:text-5xl md:text-6xl mt-5 md:mt-7 text-white'>employee <span className='rotate-1'>Hiring</span></h1>
            </div>
            <div className='mt-8 max-w-[24rem]'>
                <h4 className='text-md md:text-lg text-gray-300 text-justify'> Streamline your payroll process with our intuitive and easy-to-use 
                software. Handle all your HR needs, from hiring to onboarding, and more.</h4>
            </div>
            <div className='flex flex-col md:flex-row gap-2 md:gap-7 mt-8'>
                <Button type="primary" className=' w-full md:w-36 h-12 text-black bg-white hover:bg-secondary
                font-secondary text-lg'>Get Started!</Button>

                <Button type="text" className='w-full md:w-36 h-12 text-white hover:text-white
                font-secondary text-lg'><span className='underline'> How it Works ?</span></Button>
                
            </div>
            {/* <div className='w-[25rem] mt-8 mx-6 flex gap-7'>
                <div className='w-[8rem] h-[3rem] rounded-md border-2 flex justify-center items-center 
                text-white'>IMG1</div>
                <div className='w-[8rem] h-[3rem] rounded-md border-2 flex justify-center items-center 
                text-white'>IMG2</div>
            </div>
            <div className='w-[25rem] mt-2 mx-6 flex gap-7'>
                <div className='w-[8rem] h-[3rem] rounded-md border-2 flex justify-center items-center 
                text-white'>IMG1</div>
                <div className='w-[8rem] h-[3rem] rounded-md border-2 flex justify-center items-center 
                text-white'>IMG2</div>
            </div> */}
           
        </div>
        <div className='flex justify-center items-center flex-col bg-white'>
            {/* <div className='w-[24rem] h-[24rem] rounded-md border-2 flex justify-center items-center 
                text-black'>IMG1</div> */}
        </div>
    </div>
//   <div className='relative h-screen bg-primary w-full px-[2rem] md:px-[5rem] flex flex-col items-center gap-[3rem] overflow-hidden'>
//     <div className='flex flex-col gap-[2rem] items-center mt-[10rem] md:mt-[10rem]'>
//         <h1 className='text-white text-4xl md:text-5xl text-center lg:text-6xl font-primary font-extrabold z-[5]'>
//             Manage payroll and handle employee  <span className='rotate-1'>hassle</span> free</h1>
//         <h1 className='text-white text-center font-secondary w-[100%] lg:w-[80%] text-sm lg:text-md z-[5]'>
//             Streamline your payroll process with our intuitive and easy-to-use 
//             software. Handle all your HR needs, from hiring to onboarding, and more.</h1>
//         <p className='hidden md:block text-white text-center font-secondary w-[100%] lg:w-[50%] text-xs md:text-sm'>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
//             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
//     </div>
//         <button 
//             className='bg-white px-10 py-2 rounded-md font-secondary font-medium hover:bg-secondary
//             transition-all delay-75 duration-300 ease-in-out transform hover:scale-105 hover:text-white
//             focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-white
//             z-[5] mb-20'>Sign up
//         </button>
//         <div className='absolute inset-0 top-[10rem] left-[7rem] md:top-[10rem] md:left-[20rem] z-[1] rounded-full w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem]
//         bg-gradient-to-r from-primary to-secondary opacity-30
//         '>
//         </div>
//         <div className='absolute inset-0 top-0 left-[-1rem] rounded-full w-[3rem] h-[3rem] md:w-[7rem] md:h-[7rem]
//         bg-gradient-to-r from-primary to-secondary opacity-30
//         '>
//         </div>
//         <div className='absolute inset-0 top-0 left-[-1rem] rounded-full w-[10rem] h-[10rem] md:w-[20rem] md:h-[20rem]
//         bg-gradient-to-r from-primary to-secondary opacity-30
//         '>
//         </div>
//         <div className='absolute bottom-0 right-[-1rem] rounded-full w-[7rem] h-[7rem] md:w-[15rem] md:h-[15rem]
//         bg-gradient-to-r from-primary to-secondary opacity-30
//         '>
//         </div>
//   </div>
  )
}
