import React, { useEffect, useState } from 'react'
import ReactStars from "react-rating-stars-component";

import {BsHeart, BsShare, BsEye, BsHandbag} from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../features/product/productSlice';
import { getWishlist } from '../features/auth/authSlice';
const ProductCard = ({grid, product}) => {
    
    const [rating, setRating] = useState(0);
    

    const dispatch = useDispatch();

    const changeRating = (newRating) => {
        setRating(newRating);
    };

      
    const addProductToWishlist = async () => {
        dispatch(addToWishlist(product?._id));
        dispatch(getWishlist())
    }
    
  return (
    <div className={`product-card bg-white ${grid == 3 ? 'flex': ""} mb-2 min-w-[15rem] items-center rounded-md relative product-card gr-${grid} px-2 py-2`}>
        <button onClick={() => addProductToWishlist()} className='cursor-pointer  p-1 rounded-full hover:text-red-500 font-bold absolute top-2 right-[1rem]'>
            <BsHeart className='font-bold' />
        </button>

        <Link to={`/product/${product?._id}`}>
            <div className='product-image max-w-[100%] '>
                <img src={product?.images[0]?.url || '/images/tab1.jpg'}  alt='product image' className='h-[13rem] mx-auto w-[14rem]' />
                <img src='/images/tab1.jpg' alt='product image' className='h-[13rem] mx-auto hidden  object-cover' />
            </div>
            <div className='details'>
                <h6 className='text-red-700 font-semibold '>{product?.brand}</h6>
                <p className='font-bold text-[1.1rem] ' >{product?.title}</p>
                <ReactStars count={5} value={4} edit={false} size={24} activeColor="#ffd700"/>
                <p className='text-[1rem] font-semibold text-[#1c1c1b]  '>$ {product?.price}</p>

            </div>
            <div className='absolute top-[20%] right-[-30px] flex flex-col gap-3 items-start justify-between action-bar'>
                
                
                <Link className='cursor-pointer hover:bg-slate-500 p-1 rounded-full hover:text-white'>
                    <BsShare />
                </Link>
                <Link to={`/product/${product?._id}`} className='cursor-pointer hover:bg-slate-500 p-1 rounded-full hover:text-white'>
                    <BsEye className='' />
                </Link>
                <Link className='cursor-pointer hover:bg-slate-500 p-1 rounded-full hover:text-white'>
                    <BsHandbag className='' />
                </Link>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard;