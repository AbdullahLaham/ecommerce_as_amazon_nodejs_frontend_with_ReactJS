import React, { useEffect } from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import {BsArrowLeft} from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

import { getBlog } from '../features/blog/blogSlice';
const SingleBlog = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlog(id));
    }, [id]);

    const {blogs, currentBlog, isLoading} = useSelector((state) => state?.blog);

    if (isLoading) {
        return <div className='w-[100%] h-[50vh] flex items-center justify-center'>
            <CircularProgress />
        </div>
    }
  return (
    <div>
        <Meta title={currentBlog?.title} />
        <BreadCrumb title="Dynamic Blog Name" />
        <div className='px-11 py-5 bg-[#ebebeb]'>
        <div className='flex gap-2 justify-center m-auto px-11'>
            <div className='flex-1 '>
                <div className='w-[100%] '>
                    <div className='single-blog'>
                        <Link to='/blogs' className='flex items-center justify-start gap-2 text-gray-500 cursor-pointer'><BsArrowLeft /> Go back to Blogs.</Link>
                        <h5 className='leading-[20px] text-[1.6rem] font-bold pl-1 mb-2 text-gray-500 my-3 ' >
                            {currentBlog?.title}.
                        </h5>
                        <img src={currentBlog?.images?.length > 0? currentBlog?.images[0]?.url : '/images/blog-1.jpg'} className='w-[50%] ' alt='blog-image' />
                            <p className='text-[.9rem] text-gray-500 my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus orci, ornare sit amet tortor ac, rutrum cursus turpis. Maecenas pharetra ex at consequat ornare. Sed hendrerit nec mi in aliquam. Aenean a finibus risus, nec pharetra ex. Sed vestibulum efficitur elementum. Vestibulum convallis lobortis enim ac eleifend. Vivamus ligula metus, porta eu velit vel, euismod vulputate orci. Donec imperdiet pulvinar fermentum. Praesent posuere ligula nisl, eu porttitor diam feugiat eu</p>
                        </div>

                </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default SingleBlog;
