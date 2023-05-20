import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const ResetPassword = () => {
  const [user, setUser] = useState({
    password: '',
    confirmPassword: '',
  });
  return (
    <div>
      <Meta title='Reset Password ' />
      <BreadCrumb title='Reset Password ' />
      <div className='w-[100%] login-card px-11 flex  items-center justify-center my-10 mb-[6rem]'>
        <div className='flex flex-col justify-start gap-4 bg-white p-5 w-[40%]'>
          <h3 className='text-center my-2 text-[1.3rem] text-gray-800 opacity-[.9]'>Login</h3>
          <div className='flex flex-col items-center gap-3 w-[100%]'>
            <input type='text' name='password' className='p-2 w-[100%] bg-[#eeeeee] rounded-l-sm border-inherit outline-none' placeholder='Password'  value={user?.password} onChange={(e) => setUser({...user, password: e.target.value})} />
            <input type='text' name='confirmpassword' className='p-2 w-[100%] bg-[#eeeeee] rounded-l-sm border-inherit outline-none' placeholder='Confirm Password' value={user?.confirmPassword} onChange={(e) => setUser({...user, confirmPassword: e.target.value})}  />
          </div>
          {/* <Link to='/forgot-password' className='text-[.85rem] font-semibold -mt-2'>Forgot Your Password</Link> */}
          <div className='flex items-center justify-center w-full gap-3'>
          <button to='' className='font-semibold mt-3 px-3 py-1 text-white bg-[#353a41] hover:bg-[#212529] rounded-[1rem] cursor-pointer '>
            Submit
          </button>

          </div>
        </div>


      </div>
    </div>
  )
}

export default ResetPassword