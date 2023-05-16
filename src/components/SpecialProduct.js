import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom';


const SpecialProduct = () => {
  const [rating, setRating] = useState(0);
  const changeRating = (newRating) => {
    setRating(newRating);
  };
  return (
    <div className='flex items-center justify-start bg-white p-3'>
        {/* images section */}
        <div>
            <img src='images/watch.jpg' className='' alt='product image' />
        </div>

        {/* details section */}
        <div className=''>
          <h5 className='text-red-700 font-semibold  '>Havels</h5>
          <h6 className='font-bold text-[1rem] '>
            Samsung Galaxy Note10+ Mobile Phone; Sim...
          </h6>
          <ReactStars count={5} value={4} edit={false} onChange={changeRating} size={24} activeColor="#ffd700"/>
          
          <p className='text-red-500 flex items-center justify-start gap-3 font-bold'>$100 <span className='text-gray-500 line-through'>$75.00</span></p>
          <div className='discount-till flex items-center gap-2 my-4'>
            <p>878 <span className='text-gray-500 font-semibold'>Days</span> </p>
            <div className='time-clock flex items-center gap-2 '>
              <p className='p-4 text-white font-bold  flex items-center justify-center bg-red-400 w-[1rem] h-[1rem] rounded-full '>05</p> : 
              <p className='p-4 text-white font-bold  flex items-center justify-center bg-red-400 w-[1rem] h-[1rem] rounded-full '>20</p> : 
              <p className='p-4 text-white font-bold  flex items-center justify-center bg-red-400 w-[1rem] h-[1rem] rounded-full '>30</p>
            </div>
          </div>
          <p className='text-gray-500 font-semibold'>Products: 50</p>
          <ProgressBar
            completed={50}
            height='.9rem'

            className="wrapper"
            barContainerClassName="container"
            labelClassName="label"
          />
          <Link className='text-[.9rem] px-6 bg-[#3a3a3a] hover:bg-[#292929] text-yellow-100 font-semibold rounded-[1rem] py-1 my-3'>Add To Cart</Link>

        </div>
    </div>
  )
}

export default SpecialProduct;