import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup' ;
import { CircularProgress } from '@mui/material';
import { resetState, updateUser } from '../features/auth/authSlice';
import { useFormik } from 'formik';
import { useEffect } from 'react';
const Profile = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {updatedUser} = useSelector((state) => state?.auth)
  const handleSubmit = async (values) => { 
    // alert(JSON.stringify(formik?.values))
    dispatch(updateUser(formik.values));
    dispatch(resetState());
    
    console.log(values);
  }
  
  let userSchema = yup.object().shape({
    firstname: yup.string().required('First Name is Required'),
    lastname: yup.string().required('Last Name is Required'),
    email: yup.string().email('Email Should be Valid').required('Email is Required'),
    mobile: yup.string().required('Mobile Number is Required'),
  });

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      mobile: '',
      email: '',
    },
    
    onSubmit: (values) => handleSubmit(values),
    validationSchema: userSchema,
  });
  
  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)
  useEffect(() => {
    if (updatedUser?.email) {
      navigate('/', {replace: true})
    }
  }, [updatedUser])
  // useEffect(() => {
  //   console.log(user, 'dddddddd');
  //   if (user?.email || isSuccess) {
  //     navigate('/')
  //   }
  // }, [user, isLoading, isError, isSuccess, message]);
  if (isLoading) {
    return <div className='w-[100%] h-[50vh] flex items-center justify-center'>
        <CircularProgress />
    </div>
}
  return (
    <Box sx={{padding: '2rem',}}>
        <form onSubmit={formik.handleSubmit}>
          <Typography variant='h4' sx={{marginBottom: '1rem'}} >Update Profile</Typography>
          <Box sx={{display: 'flex', flexDirection: 'column',  width: '80%', gap: '1rem',}} >
            <TextField placeholder='First Name' name='firstname' onChange={formik.handleChange} />
            <TextField placeholder='Last Name' name='lastname' onChange={formik.handleChange} />
            <TextField placeholder='Email Address' name='email' onChange={formik.handleChange} />
            <TextField placeholder='Mobile Number' name='mobile' onChange={formik.handleChange} />
            <Button type='submit' variant='contained' sx={{width: '10rem'}}>Submit</Button>
          </Box>
        </form>
    </Box>
  )
}

export default Profile