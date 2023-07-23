import Meta from '../components/Meta'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../features/auth/authSlice';
const SignupPage = () => {


  // const [user, setUser] = useState({
  //   name: '',
  //   tel: '',
  //   email: '',
  //   password: '',
  // });



  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => { 
    // alert(JSON.stringify(formik?.values))
    dispatch(register(formik.values));
    console.log(values);
  }
  
  let userSchema = yup.object().shape({
    firstname: yup.string().required('First Name is Required'),
    lastname: yup.string().required('Last Name is Required'),
    email: yup.string().email('Email Should be Valid').required('Email is Required'),
    mobile: yup.string().required('Mobile Number is Required'),
    password: yup.string().required('Password is Required'),
  });

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      mobile: '',
      email: '',
      password: '',
    },
    
    onSubmit: (values) => handleSubmit(values),
    validationSchema: userSchema,
  });
  
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)
  
  useEffect(() => {
    console.log(user, 'dddddddd');
    if (user?.email || isSuccess) {
      navigate('/')
    }
  }, [user, isLoading, isError, isSuccess, message]);




return (
    <div className=''>
        <Meta title='SignUp' />
        {/* <BreadCrumb title='Login' /> */}
        <form onSubmit={formik.handleSubmit}  className='w-[100%] login-card px-11 flex  items-center justify-center my-10 mb-[6rem]'>
          <div className='flex flex-col justify-start gap-4 bg-white p-5 w-[100%] lg:w-[40%]'>
            <h3 className='text-center my-2 text-[1.3rem] text-gray-800 opacity-[.9]'>Sign Up</h3>
            <div className='flex flex-col items-center gap-3 w-[100%]'>
              <input type='text' name='firstname' className='p-2 w-[100%] bg-[#eeeeee] rounded-l-sm border-inherit outline-none' placeholder='First Name'  value={formik?.values?.firstname} onChange={formik?.handleChange} />
              <div className='error text-start text-red-500 flex justify-start w-[100%] '>
                {formik.touched.firstname && formik.errors.firstname ? (
                    <div>{formik.errors.firstname}</div>
                  ) : null}
              </div>
              <input type='text' name='lastname' className='p-2 w-[100%] bg-[#eeeeee] rounded-l-sm border-inherit outline-none' placeholder='Last Name'  value={formik?.values?.lastname} onChange={formik?.handleChange} />
              <div className='error text-start text-red-500 flex justify-start w-[100%] '>
                {formik.touched.lastname && formik.errors.lastname ? (
                    <div>{formik.errors.lastname}</div>
                  ) : null}
              </div>
              <input type='text' name='mobile' className='p-2 w-[100%] bg-[#eeeeee] rounded-l-sm border-inherit outline-none' placeholder='Mobile Number' value={formik?.values?.tel} onChange={formik?.handleChange}  />
              <div className='error text-start text-red-500 flex justify-start w-[100%] '>
                {formik.touched.mobile && formik.errors.mobile ? (
                    <div>{formik.errors.mobile}</div>
                  ) : null}
              </div>
              <input type='text' name='email' className='p-2 w-[100%] bg-[#eeeeee] rounded-l-sm border-inherit outline-none' placeholder='Email'  value={formik?.values?.email} onChange={formik?.handleChange} />
              <div className='error text-start text-red-500 flex justify-start w-[100%] '>
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
              </div>
              <input type='text' name='password' className='p-2 w-[100%] bg-[#eeeeee] rounded-l-sm border-inherit outline-none' placeholder='Password' value={formik?.values?.password} onChange={formik?.handleChange}  />
              <div className='error text-start text-red-500 flex justify-start w-[100%] '>
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
              </div>
            </div>
            {/* <Link to='/forgot-password' className='text-[.85rem] font-semibold -mt-2'>Forgot Your Password</Link> */}
            <div className='flex items-center justify-center w-full gap-3'>
            <button type='submit' to='' className='font-semibold mt-3 px-3 py-1 text-white bg-[#353a41] hover:bg-[#212529] rounded-[1rem] cursor-pointer '>
              Sign Up
            </button>
            <Link to='/login' className='font-semibold mt-3 px-3 py-1 bg-[#fda839] hover:bg-[#353a41] hover:text-[#ffc57a] text-[#353a41] rounded-[1rem] cursor-pointer '>
              Login
            </Link>

            </div>
          </div>


        </form>onSubmit={formik.handleSubmit}  
    </div>
  )
}

export default SignupPage