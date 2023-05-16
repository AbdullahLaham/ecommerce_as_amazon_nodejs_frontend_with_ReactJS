import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";

import {BsHeart, BsShare, BsEye, BsHandbag} from 'react-icons/bs';
import { Link } from 'react-router-dom';
const ProductCard = () => {
    const [rating, setRating] = useState(0);
    const changeRating = (newRating) => {
        setRating(newRating);
      };
  return (
    <div className='bg-white rounded-md relative p-2 product-card'>
        <Link className='cursor-pointer  p-1 rounded-full hover:text-red-500 font-bold absolute right-[1rem]'>
            <BsHeart className='font-bold' />
        </Link>
        <div className='product-image'>
            <img src='images/watch.jpg' alt='product image' className='h-[15rem]' />
            <img src='images/tab1.jpg' alt='product image' className='h-[15rem] hidden  object-cover' />
        </div>
        <div className='details'>
            <h6 className='text-red-700 font-semibold '>Havels</h6>
            <p className='font-bold text-[1.1rem] ' >Kids Headphones Bulk 10 Peak Multi Colored For...</p>
            <ReactStars count={5} value={4} edit={false} onChange={changeRating} size={24} activeColor="#ffd700"/>
            <p className='text-[1rem] font-semibold text-[#1c1c1b]  '>$100.00</p>

        </div>
        <div className='absolute top-[20%] right-[-30px] flex flex-col gap-3 items-start justify-between action-bar'>
            
            
            <Link className='cursor-pointer hover:bg-slate-500 p-1 rounded-full hover:text-white'>
                <BsShare />
            </Link>
            <Link className='cursor-pointer hover:bg-slate-500 p-1 rounded-full hover:text-white'>
                <BsEye className='' />
            </Link>
            <Link className='cursor-pointer hover:bg-slate-500 p-1 rounded-full hover:text-white'>
                <BsHandbag className='' />
            </Link>
        </div>
    </div>
  )
}

export default ProductCard;