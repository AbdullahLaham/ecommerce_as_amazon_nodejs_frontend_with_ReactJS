import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <div className='flex flex-col w-[23%] p-2'>
        <div>
          <img src='images/blog-1.jpg' className='w-[100%] rounded-t-[10px] ' />
        </div>
        <div className='mt-[1rem]'>
          <p className='text-gray-400'>20 May, 2023</p>
          <h5 className='font-bold text-[1rem] '>A beautiful sunday morning</h5>
          <p className='leading-[.8rem] text-[.9rem] mt-2 text-gray-600 '>I  wish this great Monday morning brings you hopes and courage to face the problems in your life</p>
          <Link to='' className='mt-3 px-3 py-1 text-white bg-black rounded-[1rem] cursor-pointer '>
            Read More
          </Link>
        </div>

    </div>
  )
}

export default BlogCard;