import React from 'react'
import { Link } from 'react-router-dom';
import moment, * as moments from 'moment';
const BlogCard = ({ blog }) => {
  return (
    <div className='flex flex-col lg:w-[18rem] p-2'>
        <div>
          <img src={`${blog?.images[0]?.url || 'images/blog-1.jpg'}`} className='w-[100%] rounded-t-[10px] ' />
        </div>
        <div className='mt-[1rem]'>
          <p className='text-gray-400'>{moment(new Date(blog?.createdAt), 'MMMM Do YYYY, h:mm:ss a').fromNow()}</p>
          <h5 className='font-bold text-[1rem] '>{blog?.title}</h5>
          <p className='leading-[.8rem] text-[.9rem] mt-2 text-gray-600 '>{blog?.description.slice(3, blog?.description?.length - 4)}</p>
          <Link to={`/blog-details/${blog?._id}`} className='mt-3 px-3 py-1 text-white bg-black rounded-[1rem] cursor-pointer '>
            Read More
          </Link>
        </div>

    </div>
  )
}

export default BlogCard;