import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {MdDelete} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { deleteCartItem, getUserCart, resetState, updateCartProductQuantity } from '../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
const Cart = () => {
  
  // const [counter, setCounter] = useState(product?.qty);
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const {user, currentCart} = useSelector((state) => state.auth) ; 
  const [totalAmount, setTotalAmount] = useState(0);

  let total = 0;

  useEffect(() => {
    for (let i = 0; i < currentCart?.length; i++) {
      total += currentCart[i]['price'] * currentCart[i]['quantity'];
      
    }
    setTotalAmount(total)
  }, [])
  const updateQuantity = (data) => {
    dispatch(updateCartProductQuantity(data))
  }

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  // useEffect(() => {
  //   dispatch(updateCartProductQuantity(id: cartId))
  // }, [counter]);

  const deleteItem = async (id) => {
    dispatch(deleteCartItem(id));
    dispatch(resetState());
    dispatch(getUserCart());
  }
  console.log(currentCart, 'eeeeeeeee');



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
                <div className='cart-card flex items-center justify-between mb-2'>
                <div className='flex items-center  px-2 py-1 gap-5 w-[52%]' >
                  <img src={item?.productId?.images[0]?.url ? item?.productId?.images[0]?.url : '/images/speaker.jpg'} className='h-[5rem] w-[5rem] object-cover' alt='cart image' />
                  <div className='flex flex-col items-start justify-start'>
                    <h5 className='text-gray-600 font-bold text-[1rem] w-[3rem]'>{item?.productId?.title}</h5>

                    {/* <div className='flex items-center gap-2 border-b border-gray-100'>
                      <h3 className='text-gray-600 font-semibold' >Size : </h3>
                      <p className='  text-gray-600 font-semibold'>S</p>
              
                    </div> */}

                    {/* <div className='flex items-center gap-2 border-b border-gray-100'>
                      <h3 className='text-gray-600 font-semibold' >Color : </h3>
                      <p style={{backgroundColor: item?.productId?.color?.title}} className='  text-gray-600 font-semibold w-[1.5rem] h-[1.5rem] rounded-full ml-[.2rem]'></p>
              
                    </div> */}

                  </div>
                  <div className='cursor-pointer' onClick={() => deleteItem(item?._id)}>
                    <MdDelete className='text-gray-600 text-[1.7rem] cursor-pointer ml-[6rem] hover:bg-gray-600 hover:text-white rounded-md' />
                  </div>
                </div>
                {/* <div className='price font-bold text-gray-600'>
                  100$
                </div> */}
                <div className='price font-bold text-gray-600'>
                  <div className='flex items-center justify-start mt-[.9rem] lg, md:mt-0'>
                      <p className='p-[.3rem]  flex items-center- justify-center h-[2.5rem]  w-[1.8rem]  cursor-pointer select-none ' onClick={() => {setCounter(counter-1 < 1 ? 1 : counter-1); updateQuantity({id: item?._id, quantity: counter-1 < 1 ? 1 : counter-1})} }>-</p>
                      <p className='p-[.3rem] border flex items-center- justify-center h-[2.5rem] w-[2.3rem] border-gray-300 '>{counter ? counter : item?.quantity}</p>
                      <p className='p-[.3rem]  flex items-center- justify-center h-[2.5rem] w-[1.8rem]  cursor-pointer select-none ' onClick={() => {setCounter( counter + 1 <= item?.productId?.quantity ? counter + 1 : counter); updateQuantity({id: item?._id, quantity: counter + 1 <= item?.productId?.quantity ? counter + 1 : counter})}}>+</p>
                    </div>
                </div>

                <div className='price font-bold text-gray-600'>
                  {item?.price * item?.quantity}$
                </div>
            </div>
              )
            })}
            
            

            
            <div className='py-2 flex items-center justify-between'>
              <div>
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