import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom';


const SpecialProduct = ({ product }) => {
  console.log(product, 'yy');
  
  const [rating, setRating] = useState(0);

  const changeRating = (newRating) => {
    setRating(newRating);
  };


  return (
    <div className='flex items-center justify-start bg-white p-3 min-w-[25rem] mx-[1rem] lg:w-auto'>
        {/* images section */}
        <div>
            <img src={product?.images[0]?.url || 'images/watch.jpg'} className='' alt='product image' />
        </div>

        {/* details section */}
        <div className=''>
          <h5 className='text-red-700 font-semibold  '>{product?.brand}</h5>
          <h6 className='font-bold text-[1rem] '>
            {product?.title}
          </h6>
          <ReactStars count={5} value={product?.totalrating} edit={false} onChange={changeRating} size={24} activeColor="#ffd700"/>
          
          <p className='text-red-500 flex items-center justify-start gap-3 font-bold'>$100 <span className='text-gray-500 line-through'>$75.00</span></p>
          <div className='discount-till flex items-center gap-2 my-4'>
            <p>878 <span className='text-gray-500 font-semibold'>Days</span> </p>
            <div className='time-clock flex items-center gap-2 '>
              <p className='p-4 text-white font-bold  flex items-center justify-center bg-red-400 w-[1rem] h-[1rem] rounded-full '>05</p> : 
              <p className='p-4 text-white font-bold  flex items-center justify-center bg-red-400 w-[1rem] h-[1rem] rounded-full '>20</p> : 
              <p className='p-4 text-white font-bold  flex items-center justify-center bg-red-400 w-[1rem] h-[1rem] rounded-full '>30</p>
            </div>
          </div>
          <p className='text-gray-500 font-semibold'>Products: {product?.quantity}</p>


          <ProgressBar
            completed={product?.quantity / product?.quantity + product?.sold * 100}
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