import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem, getUserCart, updateCartProductQuantity } from '../features/auth/authSlice';
import { MdDelete } from 'react-icons/md';

const CartCard = ({product}) => {
const [counter, setCounter] = useState(product?.quantity || 1);
  const dispatch = useDispatch();
  const {user, currentCart, updatedCartItem} = useSelector((state) => state.auth) ; 

  const updateQuantity = (data) => {
    dispatch(updateCartProductQuantity(data));
    dispatch(getUserCart())
  }
  useEffect(() => {
    
  }, [])

  // useEffect(() => {
  //   dispatch(updateCartProductQuantity(id: cartId))
  // }, [counter]);
  
  const deleteItem = async (id) => {
    dispatch(deleteCartItem(id));
    dispatch(getUserCart());
  }
  console.log(currentCart, 'eeeeeeeee');


  return (
    <div className='cart-card flex lg:flex-row flex-col items-center justify-between mb-2'>
        <div className='flex items-center  py-1 gap-[5rem] lg:w-[52%] w-[100%]' >
            <img src={product?.productId?.images[0]?.url ? product?.productId?.images[0]?.url : '/images/speaker.jpg'} className='h-[5rem] w-[5rem] object-cover' alt='cart image' />
            <div className='flex flex-col items-start justify-start'>
            <h5 className='text-gray-600 font-bold text-[1rem] w-[3rem]'>{product?.productId?.title.slice(0, 15)} ...</h5>

            </div>
            <div className='cursor-pointer' onClick={() => deleteItem(product?._id)}>
            <MdDelete className='text-gray-600 text-[1.7rem] cursor-pointer hover:bg-gray-600 hover:text-white rounded-md' />
            </div>
        </div>
        {/* <div className='price font-bold text-gray-600'>
            100$
        </div> */}
        <div className='flex items-center  py-1 gap-[5rem] lg:w-[52%] w-[100%] '>
            <div className='price font-bold text-gray-600'>
            <div className='flex items-center justify-start mt-[.9rem] lg, md:mt-0'>
                <p className='p-[.3rem]  flex items-center- justify-center h-[2.5rem]  w-[1.8rem]  cursor-pointer select-none ' onClick={() => {setCounter(counter-1 < 1 ? 1 : counter-1); updateQuantity({id: product?._id, quantity: counter-1 < 1 ? 1 : counter-1})} }>-</p>
                <p className='p-[.3rem] border flex items-center- justify-center h-[2.5rem] w-[2.3rem] border-gray-300 '>{counter ? counter : product?.quantity}</p>
                <p className='p-[.3rem]  flex items-center- justify-center h-[2.5rem] w-[1.8rem]  cursor-pointer select-none ' onClick={() => {setCounter( counter + 1 <= product?.productId?.quantity ? counter + 1 : counter); updateQuantity({id: product?._id, quantity: counter + 1 <= product?.productId?.quantity ? counter + 1 : counter})}}>+</p>
                </div>
            </div>

            <div className='price font-bold text-gray-600'>
            {product?.price * product?.quantity}$
            </div>
        </div>
    </div>
  )
}

export default CartCard