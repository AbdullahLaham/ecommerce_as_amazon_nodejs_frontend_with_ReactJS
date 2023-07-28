import React, { useState, useEffect } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { useNavigate, useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { resetPassword } from '../features/auth/authSlice';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {token} = useParams();
  console.log(token);
  const handleSubmit = async (values) => { 
    // alert(JSON.stringify(formik?.values))
    dispatch(resetPassword({password: formik.values.password, token}));

  }
  
  let passwordSchema = yup.object().shape({
    password: yup.string().required('Password is Required'),
    confirmPassword: yup.string().required('Email is Required'),
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
      
    },
    
    onSubmit: (values) => handleSubmit(values),
    validationSchema: passwordSchema,
  });
    
  const {user, isLoading} = useSelector((state) => state?.auth)
  
  if (isLoading) {
    return <div className='w-[100%] h-[50vh] flex items-center justify-center'>
        <CircularProgress />
    </div>
}

  return (
    <div>
      <Meta title='Reset Password ' />
      <BreadCrumb title='Reset Password ' />
      <div className='w-[100%] login-card px-11 flex  items-center justify-center my-10 mb-[6rem]'>
        <form onSubmit={formik.handleSubmit} className='flex flex-col justify-start gap-4 bg-white p-5 w-[100%] lg:w-[40%]'>
          <h3 className='text-center my-2 text-[1.3rem] text-gray-800 opacity-[.9]'>Login</h3>
          <div className='flex flex-col items-center gap-3 w-[100%]'>
            <input type='text' name='password' onChange={formik.handleChange} className='p-2 w-[100%] bg-[#eeeeee] rounded-l-sm border-inherit outline-none' placeholder='Password'  value={formik?.values?.password} />
            {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
            <input type='text' name='confirmPassword' onChange={formik.handleChange} className='p-2 w-[100%] bg-[#eeeeee] rounded-l-sm border-inherit outline-none' placeholder='Confirm Password' value={formik?.values?.confirmPassword}  />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div>{formik.errors.confirmPassword}</div>
                  ) : null}
          </div>
          {/* <Link to='/forgot-password' className='text-[.85rem] font-semibold -mt-2'>Forgot Your Password</Link> */}
          <div className='flex items-center justify-center w-full gap-3'>
          <button type='submit' className='font-semibold mt-3 px-3 py-1 text-white bg-[#353a41] hover:bg-[#212529] rounded-[1rem] cursor-pointer '>
            Submit
          </button>

          </div>
        </form>


      </div>
    </div>
  )
}

export default ResetPassword