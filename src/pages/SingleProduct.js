import React, { useState } from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import { TextField } from '@mui/material';

const SingleProduct = () => {
  const [orderProduct, setOrderProduct] = useState(0);

  const [review, setReview] = useState({
    name: '',
    email: '',
    title: '',
    rating: '',
    comment: '',
  });

  const changeRating = (newRating) => {
    setReview({...review, rating: newRating});
  };
  return (
    <div className=' mx-11 '>
        <Meta title={'Product Name'} />
        <BreadCrumb title='Product Name' />
        <div className='w-[100%] flex items-start'>
            
        </div>
        {/* description wrapper */}
        <section className='py-5 '>
            <div className='w-[100%] bg-white p-3 '>
              <h4 className='font-bold text-[1.5rem] '>Description</h4>
              <p className='text-[.9rem] text-gray-500 my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus orci, ornare sit amet tortor ac, rutrum cursus turpis. Maecenas pharetra ex at consequat ornare. Sed hendrerit nec mi in aliquam. Aenean a finibus risus, nec pharetra ex. Sed vestibulum efficitur elementum. Vestibulum convallis lobortis enim ac eleifend. Vivamus ligula metus, porta eu velit vel, euismod vulputate orci. Donec imperdiet pulvinar fermentum. Praesent posuere ligula nisl, eu porttitor diam feugiat eu</p>

            </div>

        </section>

        <section className='py-5 bg-white'>
            <div className='w-[100%] p-3 '>
              
              <div className='review-head flex items-center justify-between w-[100%] '>
                <div className=''>
                  <h4 className='font-bold text-[1.5rem] text-gray-600'>Customer Reviews</h4>
                  <div className='flex gap-10 items-center '>
                  <ReactStars count={5} value={4} edit={false} onChange={changeRating} size={24} activeColor="#ffd700"/>  
                    <p className='text-gray-500 font-semibold'>Based on 2 Reviews</p>
                  </div>
                </div>
                <button className='text-blue-500 '>
                  Write a Review
                </button>
              </div>
              <div className='review-form'>
                <h3 className='py-3 text-gray-400 font-bold text-[1.2rem] '>Write A Review</h3>
                <form>
                  <TextField id="outlined-textarea1" label="Name" placeholder='Enter Your Name' sx={{width: '100%', mb: '.6rem' ,border: 'none', outline: 'none', backgroundColor: '#' }} value={review.name}  onChange={(e) => setReview({...review, name: e.target.value})} />
                  <TextField id="outlined-textarea2" label="Email" placeholder='aaa@gmail.com' sx={{width: '100%', mb: '.6rem' ,border: 'none', outline: 'none', backgroundColor: '#' }}  value={review.email}  onChange={(e) => setReview({...review, email: e.target.value})}/>
                  <TextField id="outlined-textarea3" label="Review Title" placeholder='Title' sx={{width: '100%', mb: '.6rem' ,border: 'none', outline: 'none', backgroundColor: '#' }} value={review.title}   onChange={(e) => setReview({...review, title: e.target.value})}/>
                  <p className='pt-2 text-[1rem] text-gray-600 '>Add Your Stars rating</p>
                  <p> <ReactStars count={5} size={24} activeColor="#ffd700" classNames='m-0 ' /></p>
                  
                  <TextField id="outlined-multiline-flexible" multiline rows={5} label="Review Body" placeholder='COMMENT' sx={{width: '100%', mb: '.6rem' ,border: 'none', outline: 'none', backgroundColor: '#' }} value={review.comment} onChange={(e) => setReview({...review, comment: e.target.value})}/>
                  <button type='submit'  className='font-semibold mt-3 px-3 py-1 text-white bg-[#353a41] hover:bg-[#212529] rounded-[1rem] cursor-pointer' >
                    Submit Review
                  </button>
                </form>

              </div>
            </div>

        </section>

        <section>
          <h3 className='text-[1.7rem] leading-[32px] tracking-wide font-bold py-2 '>Our Popular Products</h3>
            <div className='flex items-center gap-8 '>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
        </section>
    </div>
  )
}

export default SingleProduct ;