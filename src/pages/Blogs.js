import React from 'react';

import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  return (
    <>
        <Meta title={'Blogs'} />
        <BreadCrumb title="Blogs" />
        <div className='px-11 py-5 bg-[#ebebeb]'>
            <div className='flex gap-2 justify-center m-auto'>
                <div className='w-[23%]'>
                    <div className='mb-3 bg-white py-2 px-3 rounded-lg'>
                        <h3 className='filter-title text-[16px] leading-[20px] font-bold  text-gray-800'>Shop By Categories</h3>
                        <div>
                            <ul className='mt-3 flex flex-col text-[1rem] leading-7'>
                            <li className='text-gray-600 cursor-pointer font-semibold '>Watch</li>
                            <li className='text-gray-600 cursor-pointer font-semibold '>TV</li>
                            <li className='text-gray-600 cursor-pointer font-semibold '>Camera</li>
                            <li className='text-gray-600 cursor-pointer font-semibold '>Laptop</li>
                            </ul>
                        </div> 
                    </div>

                </div>
                <div className='w-[60%] '>
                    <h3></h3>
                    <h5 className='leading-[20px] text-[1.6rem] font-bold pl-1 mb-2 text-gray-400 ' >
                        Our Latest Blogs.
                    </h5>
                    <div className='flex flex-wrap items-center gap-2 '>
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />

                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Blogs;
