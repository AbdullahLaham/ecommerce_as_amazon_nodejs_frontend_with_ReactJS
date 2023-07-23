import React, { useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { getWishlist, resetState } from '../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, deleteFromWishlist } from '../features/product/productSlice';

const Wishlist = () => {
    const dispatch = useDispatch();
    const {products, wishlist, addedToWishlist}  = useSelector((state) => state?.auth);

    const deleteFromWishlist = async (prodId) => {
        dispatch(deleteFromWishlist(prodId));
        dispatch(resetState());
        dispatch(getWishlist());
    }


    useEffect(() => {
        dispatch(getWishlist());
    }, [addedToWishlist]);


  return (
    <div>
        <Meta title='Wishlist' />
        <BreadCrumb title='Wishlist' />
        {wishlist?.length ? (
            <div className='px-11 flex items-center gap-2 flex-wrap'>
        
            {wishlist?.map((item) => {
                return (
                    <div className='relative w-[14rem] min-h-[18rem]  rounded-md p-2 bg-white'>
                        <img src='images/cross.svg' alt='cross' onClick={() => deleteFromWishlist(item?._id)} className='w-[1rem] h-[1rem] cursor-pointer absolute top-5 right-5 ' />
                        <div className=' bg-white mt-[2rem]'>
                            <img src={item?.images[0]?.url || 'images/watch.jpg'} className='w-[15rem] h-[12rem] object-cover m-auto' />
                        </div>
                        <div className='px-2'>
                            <h5 className='title text-[.9rem] leading-[22px] font-semibold my-2 '>
                                {item?.title}
                            </h5>
                            <h5 className='title text-[.9rem] leading-[22px] font my-2 '>
                                {item?.description.slice(3,item?.description.length - 4)}
                            </h5>
                            <p className='font-bold text-[1rem] text-gray-800 my-3'>{item?.price} $ </p>
                        </div>
                    </div>
                )
            })}

        </div>
        ) : (
            <div className='w-[100%] h-[100%] flex items-center justify-center'>
                <p className='text-[1.2rem]'>No Items In The Wishlist</p>
            </div>
        )}
    </div>
  )
}

export default Wishlist