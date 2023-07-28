import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineHeart} from 'react-icons/ai';
import {BsPlus, BsHeartFill} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
// import product from '../../images/product.webp';
import ReactStars from "react-rating-stars-component";
// import './localStyle.css'
// import save from '../../images/save.png';
import {HiLocationMarker} from 'react-icons/hi';
import {BiShekel} from 'react-icons/bi';

const ProductComp = () => {

    const [selected, setSelected] = useState(false);

    const addProductToCart = () => {

    }
    const addProductToWishist = (id) => {

    }
    // navigate
    const navigate = useNavigate();
    let index = 0;
  return (
    <div className='cursor-initial box w-[14rem] pointer-events-auto shadow-md mx-[.5rem] p-[.5rem] rounded-lg my-[.5rem] shadow-[#00000031]'>

        <div className='flex items-center justify-start w-[100%] '>
            {/* <img src={save} className='w-[1rem]' /> */}
            <p className='font-bold text-gray-500 text-center mr-[24%]'>بلوزة شتوية</p>
        </div>

        <img  src={'product'} className='pointer-events-none rounded-lg' />
        
        <div className='flex items-center justify-between'>
            <div className='flex flex-col justify-center items-center'>
                <p className='flex justify-start'>محلات حمادة الشرفا</p>
                <div className='flex items-center justify-start my-[.4rem]'>
                    <HiLocationMarker className='text-gray-500 ' />
                    <p className='text-[.8rem] -mt-[.6rem]'>غزة_ شارع عمر المختار</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center '>
                <AiOutlineHeart className='text-[1.5rem] text-[#A3A1A1] mb-0' sx={{fill: 'red'}} onClick={() => {addProductToWishist(0); setSelected(true);}} />
                <p className='text-[.5rem] text-[#A3A1A1]'>15</p>
            </div>
        </div>
        <div className='flex items-center justify-between'>
            <button className='bg-[#6B6969] text-white text-[.7rem] p-[.4rem] rounded-lg '>اطلبه الأن</button>
            <div className='flex items-center'>
                <p>80</p>
                <BiShekel />
            </div>
        </div>
    </div>
  )
}

export default ProductComp;


