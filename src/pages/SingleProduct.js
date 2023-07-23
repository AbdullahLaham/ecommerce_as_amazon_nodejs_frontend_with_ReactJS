import React, { useState } from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import { Button, TextField } from '@mui/material';
import ReactImageZoom from 'react-image-zoom';
import Colors from '../components/Colors';
import {IoIosGitCompare, IoMdHeartEmpty} from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getAProduct, rateProduct } from '../features/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/auth/authSlice';

const SingleProduct = () => {
  const [orderProduct, setOrderProduct] = useState(0);
  const {currentProduct, products} = useSelector((state) => state?.products);

  const {user} = useSelector((state) => state.auth) ; 
  const [color, setColor] = useState(null);
  // quantity
  const [counter, setCounter] = useState(1);

  const props = {width: 500, height: 450, zoomWidth: 500, img: currentProduct?.images && currentProduct?.images[0]?.url || "/images/watch2.webp"};
  // console.log(currentProduct, 'trtr')
  const dispatch = useDispatch();
  const {id} = useParams();
  useEffect(() => {
    dispatch(getAProduct(id));
  }, [id]);

  const copyToClipboard = (text) => {
    // console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

 const addProductToCart = async () => {
  dispatch(addToCart({
    userId: user?._id, 
    productId: currentProduct?._id,
    quantity: counter,
    price: currentProduct?.price || 0,
  }));
 }

  const updateQuantity = () => {
    // const newCartComponent = {...product, qty: counter + 1}
    // dispatch({type: UPDATE_CART_ITEM, payload: newCartComponent});
  }
  
  const [review, setReview] = useState({
    prodId: user?._id,
    rating: 0,
    comment: '',
  });

  const productRating = (e) => {
    e.preventDefault()
    dispatch(rateProduct(review))

    setReview({
      prodId: currentProduct?._id,
      rating: 0,
      comment: '',
    })
  }

  const changeRating = (newRating) => {
    setReview({...review, rating: newRating});
  };
  const [selected, setSelected] = useState('1');


  const {currentCart} = useSelector((state) => state?.auth);
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  {currentCart?.map((cart) => {
      if (cart?.productId?._id == currentProduct?._id) {
        setAlreadyAdded(true);
      }
    })}
  return (
    <div className=' mx-11 '>
        <Meta title={'Product Name'} />
        <BreadCrumb title='Product Name' />

        {/* main product wrapper */}
        <section className='w-[100%] flex items-start'>
            <div className='flex justify-center  gap-5 w-[100%]'>
              <div className=' main-product-image max-w-[44%] p-[20px] bg-white rounded-[10px] '>
                <div className='max-w-[100%]'>
                  <ReactImageZoom {...props} />
                  <div className='max-w-[100%] flex items-center mt-5 flex-wrap gap-15 '>
                    
                   {
                    currentProduct?.images?.map((image) => {
                      return (
                        <div className='p-[.7rem] border border-gray-400 w-[15.3rem] h-[10rem] m-1'>
                          <img src={image?.url} className='max-w-[100%] h-[100%]' />

                        </div>
                      )
                    })
                   }
                  </div>
                </div>
                
              </div>

              {/* product details */}
              <div className='w-[45%]'>
                <div className=' w-[100%] bg-white px-[1.5rem] py-[.5rem] '>
                  <h3 className='font-bold text-[1.2rem] text-gray-500 border-b border-gray-50 py-3 '>{currentProduct?.title}</h3>
                  <p className='border-b border-gray-200 py-2 text-gray-700 font-semibold' >$ {currentProduct?.price}</p>
                  <div className='flex items-center gap-6 border-b border-gray-50 py-2'>
                    <ReactStars count={5} value={currentProduct?.totalrating} edit={false} size={24} activeColor="#ffd700"/>
                    <p className='  text-gray-500 font-semibold'>( {currentProduct?.ratings?.length} Reviews )</p>
            
                  </div>

                  <div className='flex items-center gap-2 border-b border-gray-50 py-2'>
                    <h3 className='text-gray-600 font-bold' >Type : </h3>
                    <p className='  text-gray-600 font-semibold'> {currentProduct?.category} </p>
            
                  </div>

                  <div className='flex items-center gap-2 border-b border-gray-50 py-2'>
                    <h3 className='text-gray-600 font-bold' >Brand : </h3>
                    <p className='  text-gray-600 font-semibold'>{currentProduct?.brand}</p>
            
                  </div>

                  <div className='flex flex-col gap-2 border-b border-gray-50 py-2'>
                    <h3 className='text-gray-600 font-bold' >Categories : </h3>
                    <p className='  text-gray-600 font-semibold'> {currentProduct?.category} </p>
            
                  </div>
                  <div className='flex items-center gap-2 border-b border-gray-50 py-2'>
                    <h3 className='text-gray-600 font-bold' >Tags : </h3>
                    <p className='  text-gray-600 font-semibold'>{currentProduct?.tags} </p>
            
                  </div>

                  
                  <div className='flex items-center gap-2 border-b border-gray-50 py-2'>
                    <h3 className='text-gray-600 font-bold' >Availability : </h3>
                    <p className='  text-gray-600 font-semibold'>{currentProduct?.quantity} on Stock</p>
            
                  </div>

                  <div className='flex flex-col gap-2 border-b border-gray-50 py-2'>
                    <h3 className='text-gray-600 font-bold' >Size : </h3>
                    <div className='  text-gray-600 flex items-center gap-2 font-semibold'>
                      <p className={`flex items-center justify-center text-[1.5rem] p-1 ${selected == '1' ? 'border border-gray-600' : ''} cursor-pointer w-[3rem] h-[3rem]`} onClick={() => setSelected('1')}>
                        S

                      </p>
                      <p className={`flex items-center justify-center text-[1.5rem] p-1 ${selected == '2' ? 'border border-gray-600' : ''} cursor-pointer w-[3rem] h-[3rem]`} onClick={() => setSelected('2')}>
                        L

                      </p>
                      <p className={`flex items-center justify-center text-[1.5rem] p-1 ${selected == '3' ? 'border border-gray-600' : ''} cursor-pointer w-[3rem] h-[3rem]`} onClick={() => setSelected('3')}>
                        XL

                      </p>
                      <p className={`flex items-center justify-center text-[1.5rem] p-1 ${selected == '4' ? 'border border-gray-600' : ''} cursor-pointer w-[3rem] h-[3rem]`} onClick={() => setSelected('4')}>
                        XXL

                      </p>
                    </div>
            
                  </div>

                  <div className='flex items-center gap-2 border-b border-gray-50 py-2'>
                    <h3 className='text-gray-600 font-bold' >Color : </h3>
                    <p className='  text-gray-600 font-semibold'><Colors colors={currentProduct?.color} setColor={setColor} /></p>
            
                  </div>


                  <div className='flex items-center gap-2 border-b border-gray-50 py-2'>
                    <h3 className='text-gray-600 font-bold' >Quantity : </h3>
                    <p className='  text-gray-600 font-semibold'>
                    <div className='flex items-center justify-start mt-[.9rem] lg, md:mt-0'>
                      <p className='p-[.3rem]  flex items-center- justify-center h-[2.5rem]  w-[1.8rem]  cursor-pointer select-none ' onClick={() => {setCounter(counter-1 < 1 ? 1 : counter-1); updateQuantity()} }>-</p>
                      <p className='p-[.3rem] border flex items-center- justify-center h-[2.5rem] w-[2.3rem] border-gray-300 '>{counter}</p>
                      <p className='p-[.3rem]  flex items-center- justify-center h-[2.5rem] w-[1.8rem]  cursor-pointer select-none ' onClick={() => {setCounter( counter + 1 <= currentProduct?.quantity ? counter + 1 : counter); updateQuantity()}}>+</p>
                    </div>
                    </p>
            
                  </div>

                  <div className='  text-gray-600 font-semibold flex items-center justify-end w-full gap-3'>
                    {
                      !alreadyAdded == true ? (
                        <button onClick={() => addProductToCart()}  className='font-semibold mt-3 px-3 py-1 text-white bg-[#353a41] hover:bg-[#212529] rounded-[1rem] cursor-pointer '>
                          Add To Cart
                        </button>
                      ) : (
                        <Link to='/cart' onClick={() => addProductToCart()}  className='font-semibold mt-3 px-3 py-1 text-white bg-[#353a41] hover:bg-[#212529] rounded-[1rem] cursor-pointer '>
                          Move To Cart
                        </Link>
                      )
                    }
                    <button  className='font-semibold mt-3 px-3 py-1 bg-[#fda839] hover:bg-[#353a41] hover:text-[#ffc57a] text-[#353a41] rounded-[1rem] cursor-pointer '>
                      Buy It Now
                    </button>
                  </div>
                  <div className='flex items-center gap-3 mt-[1rem]'>
                    <div className='px-2 py-1 border border-gray-100 flex items-center gap-2 text-gray-800 cursor-pointer rounded-md hover:bg-red-500 hover:text-white'>
                      <IoIosGitCompare  className='text-[1rem]  font-semibold  '/>
                      <p className='text-[1rem] font-semibold  '>Add To Wishlist</p>

                    </div>
                    <div className='px-2 py-1 border border-gray-100 flex items-center gap-2 cursor-pointer rounded-md hover:bg-gray-100'>
                      <IoMdHeartEmpty className='text-[1rem] text-gray-800 font-semibold  ' />
                      <p className='text-[1rem]  text-gray-800 font-semibold' >Add To Compare</p>
                      
                    </div>
                  </div>

                  <div className="flex gap-1 flex-col my-2">
                    <h3 className="font-bold ">Shipping & Returns :</h3>
                    <p className="text-gray-500 ">
                      Free shipping and returns available on all orders! <br /> We
                      ship all US domestic orders within
                      <b>5-10 business days!</b>
                    </p>
                  </div>
                  <div className="flex gap-5 items-center my-5">
                    <h3 className="font-bold">Product Link:</h3>
                    <Button variant='outlined'
                      onClick={() => {
                        copyToClipboard(
                          window.location.href
                        );
                      }}
                    >
                      Copy Product Link
                    </Button>
                  </div>

                </div>
              </div>

            </div>
        </section>

        
        {/* description wrapper */}
        <section className='py-5 '>
            <div className='w-[100%] bg-white p-3 '>
              <h4 className='font-bold text-[1.5rem] text-gray-600'>Description</h4>
              <p dangerouslySetInnerHTML = {{__html: currentProduct?.description}} className='text-[.9rem] text-gray-500 my-5'></p>

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
                {orderProduct && 
                (
                  <button className='text-blue-500 '>
                    Write a Review
                  </button>
                )}
              </div>
              <div className='review-form'>
                <h3 className='py-3 text-gray-400 font-bold  '>Write A Review</h3>
                <form onSubmit={productRating} className='mt-[1rem] '>
                  {/* <TextField id="outlined-textarea1" label="Name" placeholder='Enter Your Name' sx={{width: '100%', mb: '.6rem' ,border: 'none', outline: 'none', backgroundColor: '#' }} value={review.name}  onChange={(e) => setReview({...review, name: e.target.value})} />
                  <TextField id="outlined-textarea2" label="Email" placeholder='aaa@gmail.com' sx={{width: '100%', mb: '.6rem' ,border: 'none', outline: 'none', backgroundColor: '#' }}  value={review.email}  onChange={(e) => setReview({...review, email: e.target.value})}/>
                  <TextField id="outlined-textarea3" label="Review Title" placeholder='Title' sx={{width: '100%', mb: '.6rem' ,border: 'none', outline: 'none', backgroundColor: '#' }} value={review.title}   onChange={(e) => setReview({...review, title: e.target.value})}/> */}
                  <p className='pt-2 text-[1rem] text-gray-600 '>Add Your Stars rating</p>
                  <p> <ReactStars count={5} size={24} value={review?.rating} onChange={(rating) => setReview({...review, rating})} activeColor="#ffd700" classNames='m-0 ' /></p>
                  
                  <TextField id="outlined-multiline-flexible" multiline rows={5} label="Review Body" placeholder='COMMENT' sx={{width: '100%', mb: '.6rem' ,border: 'none', outline: 'none', backgroundColor: '#' }} value={review.comment} onChange={(e) => setReview({...review, comment: e.target.value})}/>
                  <button type='submit'  className='font-semibold mt-3 px-3 py-1 text-white bg-[#353a41] hover:bg-[#212529] rounded-[1rem] cursor-pointer' >
                    Submit Review
                  </button>
                </form>

              </div>
              <div className='reviews mt-5'>
                <div className='review border-t border-gray-300 pt-2'>
                  <div className='flex items-center gap-2 my-2'>
                    <p className='font-bold text-[1.2rem] texx-gray-500'>Abdullah</p>
                    <p> <ReactStars count={5} edit={false} value={3} size={24} activeColor="#ffd700" classNames='m-0 ' /></p>
                  </div>
                  <p className='text-[.9rem] text-gray-500 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus orci, ornare sit amet tortor ac, rutrum cursus turpis. Maecenas pharetra ex at consequat ornare. Sed hendrerit nec mi in aliquam. Aenean a finibus risus, nec pharetra ex. Sed vestibulum efficitur elementum. Vestibulum convallis lobortis enim ac eleifend. Vivamus ligula metus, porta eu velit vel, euismod vulputate orci. Donec imperdiet pulvinar fermentum. Praesent posuere ligula nisl, eu porttitor diam feugiat eu</p>
                  </div>

              </div>
            </div>

        </section>

        <section>
            <h4 className='font-bold text-[1.5rem] text-gray-600 my-2'>Our Popular Products</h4>
            <div className='flex items-center gap-2 flex-wrap'>
              {products?.map((product) => {
                if (product?.category == currentProduct?.category || product?.tags == currentProduct?.tags || product?.brand == currentProduct?.brand) {
                  return <ProductCard grid={5} product={product} />
                }
              })}
              
            </div>
        </section>
    </div>
  )
}

export default SingleProduct ;