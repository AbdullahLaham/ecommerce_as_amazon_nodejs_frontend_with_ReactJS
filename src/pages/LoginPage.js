import React, { useEffect } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../features/auth/authSlice'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup';


const LoginPage = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => { 
    // alert(JSON.stringify(formik?.values))
    dispatch(login(formik.values));
  }
  
  let userSchema = yup.object().shape({
    email: yup.string().email('Email Should be Valid').required('Email is Required'),
    password: yup.string().required('Password is Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    
    onSubmit: (values) => handleSubmit(values),
    validationSchema: userSchema,
  });
  
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth) ;
  
  useEffect(() => {
    console.log(user, 'dddddddd');
    if (user?.email) {
      navigate('/')
    }
  }, [user, isLoading, isError, isSuccess, message]);




  return (
    <div className=''>
        <Meta title='Login' />
        {/* <BreadCrumb title='Login' /> */}
        <div className='w-[100%] login-card px-11 flex  items-center justify-center my-10 mb-[6rem]'>
            <div className='flex flex-col justify-start gap-4 bg-white p-5 w-[40%]'>
              <h3 className='text-center my-2 text-[1.3rem] text-gray-800 opacity-[.9]'>Login</h3>
              <form  onSubmit={formik.handleSubmit} className='flex flex-col items-center gap-3 w-[100%]'>
                <input type='text' name='email' className='p-2 w-[100%] bg-[#eeeeee] rounded-l-sm border-inherit outline-none' placeholder='Email' value={formik.values.email} onChange={formik.handleChange}  />
                <div className='error text-start text-red-500 flex justify-start w-[100%] '>
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
              </div>
                <input type='text' name='password' className='p-2 w-[100%] bg-[#eeeeee] rounded-l-sm border-inherit outline-none' placeholder='Password' value={formik.values.password} onChange={formik.handleChange}  />
                <div className='error text-start text-red-500 flex justify-start w-[100%] '>
                {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
              </div>
              <Link to='/forgot-password' className='text-[.85rem] font-semibold -mt-2'>Forgot Your Password</Link>
              <div className='flex items-center justify-center w-full gap-3'>
                <button to='' className='font-semibold mt-3 px-3 py-1 text-white bg-[#353a41] hover:bg-[#212529] rounded-[1rem] cursor-pointer '>
                  Login
                </button>
                <Link to='/signup' className='font-semibold mt-3 px-3 py-1 bg-[#fda839] hover:bg-[#353a41] hover:text-[#ffc57a] text-[#353a41] rounded-[1rem] cursor-pointer '>
                  Sign Up
                </Link>

              </div>
              </form>
              
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