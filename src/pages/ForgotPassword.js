import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
  return (
    <>
      <Meta title='Forgot Password ' />
      <BreadCrumb title='Forgot Password ' />
      <div className='w-[100%] login-card px-11 flex  items-center justify-center my-10 mb-[6rem]'>
        <div className='flex flex-col justify-start gap-4 bg-white p-5 w-[40%]'>
          <h3 className='text-center my-2 mb-0 text-[1.3rem] text-gray-800 opacity-[.9]'>Reset Your Password</h3>
          <p className='text-center text-[1rem] font-semibold text-gray-500 '>We will send you an Email to reset Your Password</p>
          <div className='flex flex-col items-center gap-3 w-[100%]'>
            <input type='text' className='p-2 w-[100%] bg-[#eeeeee] rounded-l-sm border-inherit outline-none' placeholder='Email'  />
          </div>
          <button type='submit' className='font-semibold mt-4 px-3 py-1 text-white bg-[#353a41] hover:bg-[#212529] rounded-[1rem] cursor-pointer w-[6rem] mx-auto text-center  '>
            Submit
          </button>
          <Link to='' className='font-bold mt-0 px-3 py-1rounded-[1rem] cursor-pointer w-[6rem] mx-auto text-center  '>
            Cancel
          </Link>

        </div>


      </div>
    </>
  )
}

export default ForgotPassword ;