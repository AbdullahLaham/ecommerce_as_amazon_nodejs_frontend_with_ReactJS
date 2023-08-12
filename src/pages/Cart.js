import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import CartCard from '../components/CartCard';
import {MdDelete} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteCartItem, getUserCart, resetState, updateCartProductQuantity } from '../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
const Cart = () => {
  
  // const [counter, setCounter] = useState(product?.qty);
  const dispatch = useDispatch();
  const {user, currentCart, isLoading, updatedCartItem, deletedCartItem, newCartItem} = useSelector((state) => state.auth) ; 
  const [totalAmount, setTotalAmount] = useState(0);


  useEffect(() => {
    let total = 0;
    for (let i = 0; i < currentCart?.length; i++) {
      total += currentCart[i]['price'] * currentCart[i]['quantity'];


      setTotalAmount(total)
    }
  }, [currentCart])
  const updateQuantity = (data) => {
    dispatch(updateCartProductQuantity(data))
  }

  useEffect(() => {
    dispatch(getUserCart());
  }, [updatedCartItem, deletedCartItem, newCartItem]);

  // useEffect(() => {
  //   dispatch(updateCartProductQuantity(id: cartId))
  // }, [counter]);

  const deleteItem = async (id) => {
    dispatch(deleteCartItem(id));
    dispatch(getUserCart());
  }
  console.log(currentCart, 'eeeeeeeee');


  if (isLoading) {
    return <div className='w-[100%] h-[50vh] flex items-center justify-center'>
        <CircularProgress />
    </div>
}

  return (
    <div className='mx-20'>
        <Meta title={'Cart'} />
        <BreadCrumb title={'Cart'} />
        <div className='py-2 '>
          <div className='w-[100%] '>
            {/* <div className='cart-heading flex items-center justify-between border-b border-gray-400 pb-3 '>
              <h4 className='text-[#777777] font-bold text-[1rem]'>Product</h4>
              <div className='flex items-center justify-between w-[37%] '>
                <h4 className='text-[#777777] font-bold text-[1rem]'>Price</h4>
                <h4 className='text-[#777777] font-bold text-[1rem]'>Quantity</h4>
                <h4 className='text-[#777777] font-bold text-[1rem]'>Total</h4>
              </div>

            </div> */}

            {currentCart?.map((item) => {
              return (
                <CartCard product={item} />
              )
            })}
            
            

            
            <div className='py-2 flex items-center justify-between'>
              <div className='lg:flex hidden '>
                <Link to='/store' className='font-semibold mt-3 px-3 py-1 bg-[#fda839] hover:bg-[#353a41] hover:text-[#ffc57a] text-[#353a41] rounded-[1rem] cursor-pointer '>Continue Shopping</Link>
              </div>

                  <div className='border border-gray-400 p-2 rounded-md'> 
                    <h2 className='text-gray-600 text-[1.3rem] font-bold'>SubTotal: ${totalAmount}</h2>
                    <h5 className='text-gray-500 text-[1rem] font-semibold'>Taxes and shipping calculated at checkout</h5>
                    <Link to='/checkout' className='font-bold mt-3 px-3 py-1 bg-[#353a41] hover:bg-[#fda839] hover:text-[#353a41] text-white rounded-[1rem] cursor-pointer '>Checkout</Link>
                  </div>

            </div>

          </div>

        </div>

    </div>
  )
}

export default Cart