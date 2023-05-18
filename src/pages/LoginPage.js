import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className=''>
        <Meta title='Login' />
        {/* <BreadCrumb title='Login' /> */}
        <div className='w-[100%] login-card px-11 flex  items-center justify-center my-10 mb-[6rem]'>
            <div className='flex flex-col justify-start gap-4 bg-white p-5 w-[40%]'>
              <h3 className='text-center my-2 text-[1.3rem] text-gray-800 opacity-[.9]'>Login</h3>
              <div className='flex flex-col items-center gap-3 w-[100%]'>
                <input type='text' className='p-2 w-[100%] bg-[#eeeeee] rounded-l-sm border-inherit outline-none' placeholder='Email'  />
                <input type='text' className='p-2 w-[100%] bg-[#eeeeee] rounded-l-sm border-inherit outline-none' placeholder='Password'  />
              </div>
              <Link to='/forgot-password' className='text-[.85rem] font-semibold -mt-2'>Forgot Your Password</Link>
              <div className='flex items-center justify-center w-full gap-3'>
              <Link to='' className='font-semibold mt-3 px-3 py-1 text-white bg-[#353a41] hover:bg-[#212529] rounded-[1rem] cursor-pointer '>
                Login
              </Link>
              <Link to='/signup' className='font-semibold mt-3 px-3 py-1 bg-[#fda839] hover:bg-[#353a41] hover:text-[#ffc57a] text-[#353a41] rounded-[1rem] cursor-pointer '>
                Sign Up
              </Link>

              </div>
            </div>


        </div>
    </div>
  )
}

export default LoginPage

// bac f5f5f7
// textt 131921 14px 
// round 10px 
// bord transp