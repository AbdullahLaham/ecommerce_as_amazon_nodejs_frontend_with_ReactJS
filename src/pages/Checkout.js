import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Button, MenuItem, Select, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {BsArrowLeftShort} from 'react-icons/bs'
import { useEffect } from 'react';
import { createOrder, getUserCart } from '../features/auth/authSlice';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';

import axios from 'axios';
import API from '../features/MainApi';
const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);
  const {currentCart, user, isLoading, isError, isSuccess, createdOrder} = useSelector((state) => state.auth);
  console.log(currentCart, 'ss')

  useEffect(() => {
    dispatch(getUserCart())
  }, [])

  const handleSubmit = async (values) => { 
    alert(JSON.stringify(formik?.values))
    // dispatch(login(formik.values));
  }
  
  let orderSchema = yup.object().shape({
    country: yup.string().required('Country is Required'),
    firstname: yup.string().required('First Name is Required'),
    lastname: yup.string().required('Last Name is Required'),
    address: yup.string().required('Address is Required'),
    other: yup.string().required('Appartment is Required'),
    city: yup.string().required('City is Required'),
    state: yup.string().required('State is Required'),
    pincode: yup.number().required('Pincode is Required'),
  });
  
  useEffect(() => {
    console.log(user, 'dddddddd');
    if (createdOrder?._id) {
      navigate(`/order/${createdOrder?._id}`)
    }
  }, [user, isLoading, isError, isSuccess, createdOrder]);



  const placeOrder = async () => {
    try {
      dispatch(createOrder({cartItems: currentCart, userId: user?._id, orderData: formik.values, totalPrice : totalAmount}))
    } catch (error) {
      console.log(error.message);
    }

  }

  



  const formik = useFormik({
    initialValues: {
      country: '',
      firstname: '',
      lastname: '',
      address: '',
      other: '',
      city: '',
      state: '',
      pincode: '',
    },
    
    onSubmit: (values) => placeOrder(values),
    validationSchema: orderSchema,
  });

  



  let total = 0;

  useEffect(() => {
    for (let i = 0; i < currentCart?.length; i++) {
      total += currentCart[i]['price'] * currentCart[i]['quantity'];
      
    }
    setTotalAmount(total)
  }, [])

  if (isLoading) {
    return <div className='w-[100%] h-[50vh] flex items-center justify-center'>
        <CircularProgress />
    </div>
}

  return (
    <div className='flex lg:flex-row flex-col fle items-start justify-between  '>
      <div className="row lg:w-[50%] w-[90%] lg:m-[2rem] m-[.8rem]  ">
        <h5 className='text-[1.6rem] font-semibold text-gray-600 '>Abdullah AL-Lahham</h5>

        <h4 className='text-[1.2rem] font-semibold text-gray-600 '>Contact Information</h4>
        <p className='user-details text-[1.1rem] text-gray-500 '>user name</p>
        <h4 className='text-[1.5rem] text-gray-800 mb-[.8rem] '>Shipping Address</h4>
        <form className='flex flex-col gap-[.5rem] justify-between' onSubmit={formik.handleSubmit}>
          <div className='w-[100%]'>
            
            {/* <Select className='selectopt' label='Select Country' placeholder='Select Country' sx={{width: '100%', color:'black'}}>
              <MenuItem>
                Select Country
              </MenuItem>
            </Select> */}
            <Select name='country' value={formik.values.country} onChange={formik.handleChange} className={`mb-2 px-2 rounded-md border outline-none border-gray-400 text-gray-600 w-[100%]`} placeholder='Select Country' >
              <MenuItem className='' disabled selected>Select Country</MenuItem>
              <MenuItem value='palestine'>Palestine</MenuItem>
            </Select>
            <p className='text-[.9rem] mt-0 my-1 text-red-500 font-bold'>{formik.touched.country && formik.errors.country}</p>
          </div>
          <div className='flex items-center justify-between w-[100%] gap-[1rem]'>
            <div className='w-[100%]'>
              <TextField name='firstname' onChange={formik.handleChange} value={formik.values.firstname} className='mb-2 py-2 px-2 rounded-md border outline-none border-gray-400 text-gray-600 w-[100%]' placeholder='First Name' />
            </div>
            <p className='text-[.9rem] mt-0 my-1 text-red-500 font-bold'>{formik.touched.firstname && formik.errors.firstname}</p>
            <div className='w-[100%]'>
            <TextField name='lastname' onChange={formik.handleChange} value={formik.values.lastname} className='mb-2 py-2 px-2 rounded-md border outline-none border-gray-400 text-gray-600 w-[100%]' placeholder='Last Name' />

            <p className='text-[.9rem] mt-0 my-1 text-red-500 font-bold'>{formik.touched.lastname && formik.errors.lastname}</p>
          </div>
          </div>
          <div className='w-[100%]'>
            <TextField name='address' onChange={formik.handleChange} value={formik.values.address} placeholder='Address' className='mb-2 py-2 px-2 rounded-md border outline-none border-gray-400 text-gray-600 w-[100%]' />
            <p className='text-[.9rem] mt-0 my-1 text-red-500 font-bold'>{formik.touched.address && formik.errors.address}</p>
          </div>
          <div className='w-[100%]'>
            <TextField name='other' onChange={formik.handleChange} value={formik.values.other} placeholder='Appartment, Suite, etc' className='mb-2 py-2 px-2 rounded-md border outline-none border-gray-400 text-gray-600 w-[100%]' />
          </div>
          <p className='text-[.9rem] mt-0 my-1 text-red-500 font-bold'>{formik.touched.other && formik.errors.other}</p>
          <div className='flex items-center justify-between w-[100%]'>
            <TextField  name='city' onChange={formik.handleChange} placeholder='City' className='w-[31%] mb-2 py-2 px-2 rounded-md border outline-none border-gray-400 text-gray-600' />
            <p className='text-[.9rem] mt-0 my-1 text-red-500 font-bold'>{formik.touched.city && formik.errors.city}</p>
            <Select name='state' onChange={formik.handleChange} value={formik.values.state} placeholder='' className='w-[31%] mb-2 px-2 rounded-md border outline-none border-gray-400 text-gray-600' >
              <MenuItem disabled selected>Select State</MenuItem>
              <MenuItem value='gaza'>gaza</MenuItem>

            </Select>
            <p className='text-[.9rem] mt-0 my-1 text-red-500 font-bold'>{formik.touched.state && formik.errors.state}</p>

            <TextField name='pincode' onChange={formik.handleChange} value={formik.values.pincode} placeholder='Zipcode' className='w-[31%] mb-2 py-2 px-2 rounded-md border outline-none border-gray-400 text-gray-600' />
            <p className='text-[.9rem] mt-0 my-1 text-red-500 font-bold'>{formik.touched.pincode && formik.errors.pincode}</p>
          </div>

            <div className='w-[100%] flex items-center justify-between mt-[2rem] '>
              <Link to='/cart' className='flex items-center'><BsArrowLeftShort className='text-[1.4rem] ' />Return to Cart</Link>
              {/* <Button type='submit' variant='contained' sx={{borderRadius: '5px', backgroundColor: 'black',}}>Continue to Shipping</Button> */}
              <Button type='submit' variant='contained' sx={{borderRadius: '5px', backgroundColor: 'black',}}>Place Order</Button>
            
            </div>
        </form>

    </div>
    <div className='lg:w-[30%] w-[90%] m-[1rem] mr-[2.9rem]'>
        <div className='cart-products w-[100%] border-b border-gray-200 py-2'>
            {
              currentCart?.map((item) => {
                return (
                  <div className='product  flex justify-start w-[100%] max-w-[100%] my-[2rem]  '>
                    <div className='prod-image h-[100%] w-[25%]  relative'>
                      <img src={item?.productId?.images[0]?.url ? item?.productId?.images[0]?.url : '/images/camera.jpg'} />
                      <p className='w-[1rem] h-[1rem] rounded-full text-white bg-gray-600 p-[.7rem] flex items-center justify-center absolute -top-1 -right-1'>{item?.quantity}</p>
                    </div>
                    <div className='w-[100%] h-[100%] ml-[2.5rem]'>
                      <p className='text-[1.2rem] text-gray-500 '>{item?.productId?.title}</p>
                      <p className='text-[1rem] text-gray-400 '>{item?.productId?.category}</p>
                    </div>
                    <div>
                      <p>{item?.price * item?.quantity}$</p>

                    </div>
                  </div>
                )
              })
            }
        </div>    
        <div className='w-[100%] border-b border-gray-200 py-2'>
            <div className='flex items-center justify-between w-[100%] mb-[.7rem]'>
              <p className='text-gray-600 font-semibold'>Subtotal</p>
              <p>$ {totalAmount}</p>
            </div>
            <div className='flex items-center justify-between w-[100%] mb-[.7rem]'>
              <p className='text-gray-600 font-semibold'>Shipping</p>
              <p>$ {5}</p>
            </div>
        </div>
        <div className='flex items-center justify-between w-[100%] mb-[.7rem] py-[2rem]'>
              <p className='font-semibold'>Total</p>
              <p>$ {totalAmount ? totalAmount + 5 : "0"}</p>
            </div>
    </div>
    </div>
    
  )
}

export default Checkout;


