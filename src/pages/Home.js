import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/product/productSlice';
import { toast } from 'react-toastify';
import { Box } from '@mui/material';

const Home = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);


  const {products} = useSelector((state) => state?.products);

  console.log(products, 'tttttttttt');




  return (
    <div className='bg-[#f0f0f0]'>

      
        <section className=''>
          <div className='flex flex-col lg:flex-row  gap-2 justify-center mx-[.5rem] my-2'>
            <div className='h-[100%] min-w-[100%] w-[100%]  lg:w-[50%] lg:min-w-[50%]  '>
              <div className='relative w-[100%] '>
                <img src='images/main-sec.jpg' className='rounded-md h-[25rem] w-[100%]'/>
                <div className='absolute top-[10%] left-[5%] text-white text-2xl '>
                  <h4 className='text-[#bf4800] text-[1.7rem] font-bold leading-5 my-[12px] uppercase tracking-[.3px]		'>SUPERCHARGED FOR PROS.</h4>
                  <h5 className='leading-[64px] text-[52px] -tracking-[2px] font-bold transform-none' >
                    iPad S13+ Pro.
                  </h5>
                  <p className='leading-[28px] text-[18px] font-bold transform-none'>From $999.00 or $41.62/mo</p>
                  <Link className='text-[.9rem] px-6 bg-[#3a3a3a] hover:bg-[#292929] text-yellow-100 font-semibold rounded-[1rem] '>BUY NOW</Link>

                </div>
              </div>

            </div>
            <div className=' lg:max-w-[45%] lg:w-[45%] w-[100%]  flex items-center justify-between h-[100%]'>
            <div className='flex flex-col gap-[.2rem] justify-between gap-1rem w-[100%] lg:w-[50%] h-[100%] m-[.2rem]'>
              <div className='relative w-[100%]  mx-[.1rem] mt-0 '>
                <img src='images/catbanner-01.jpg' className='rounded-md w-[40rem]'/>
                <div className='absolute top-[10%] left-[5%] text-black text-2xl '>
                  <h4 className='text-[#bf4800] text-[1.1rem] font-bold leading-5 my-[12px] uppercase tracking-[.3px]		'>BEST SALE</h4>
                  <h5 className='leading-[20px] text-[1.3rem] -tracking-[.5px] font-bold transform-none' >
                    iPad S13+ Pro.
                  </h5>
                  <p className='leading-[28px] text-[.9rem] font-bold transform-none'>From $999.00 or $41.62/mo</p>
                  <Link className='text-[.9rem] px-6 bg-[#3a3a3a] hover:bg-[#292929] text-yellow-100 font-semibold rounded-[1rem] '>BUY NOW</Link>

                </div>
              </div>
              <div className='relative w-[100%] mx-[.1rem] mt-0'>
                <img src='images/catbanner-02.jpg' className='rounded-md w-[40rem]'/>
                <div className='absolute top-[10%] left-[5%] text-black text-2xl '>
                  <h4 className='text-[#bf4800] text-[1.1rem] font-bold leading-5 my-[12px] uppercase tracking-[.3px]'>NEW ARRIVAL </h4>
                  <h5 className='leading-[20px] text-[1.3rem] -tracking-[.5px] font-bold transform-none' >
                    iPad S13+ Pro.
                  </h5>
                  <p className='leading-[28px] text-[.9rem] font-bold transform-none'>From $999.00 or $41.62/mo</p>
                  <Link className='text-[.9rem] px-6 bg-[#3a3a3a] hover:bg-[#292929] text-yellow-100 font-semibold rounded-[1rem] '>BUY NOW</Link>

                </div>
              </div>
            </div>



              <div className='flex flex-col gap-[.2rem] justify-between gap-1rem w-[100%] lg:w-[50%] h-[100%] m-[.2rem]'>
                <div className='relative w-[100%] mx-[.1rem]'>
                  <img src='images/catbanner-03.jpg' className='rounded-md w-[40rem]'/>
                  <div className='absolute top-[10%] left-[5%] text-black text-2xl '>
                    <h4 className='text-[#bf4800] text-[1.1rem] font-bold leading-5 my-[12px] uppercase tracking-[.3px]		'>NEW ARRIVAL</h4>
                    <h5 className='leading-[20px] text-[1.3rem] -tracking-[.5px] font-bold transform-none' >
                      iPad S13+ Pro.
                    </h5>
                    <p className='leading-[28px] text-[.9rem] font-bold transform-none'>From $999.00 or $41.62/mo</p>
                    <Link className='text-[.9rem] px-6 bg-[#3a3a3a] hover:bg-[#292929] text-yellow-100 font-semibold rounded-[1rem] '>BUY NOW</Link>

                  </div>
                </div>
                <div className='relative w-[100%] mx-[.1rem]'>
                  <img src='images/catbanner-04.jpg' className='rounded-md w-[40rem]'/>
                  <div className='absolute top-[10%] left-[5%] text-black text-2xl '>
                    <h4 className='text-[#bf4800] text-[1.1rem] font-bold leading-5 my-[12px] uppercase tracking-[.3px]		'>NEW ARRIVAL</h4>
                    <h5 className='leading-[20px] text-[1.3rem] -tracking-[.5px] font-bold transform-none' >
                      iPad S13+ Pro.
                    </h5>
                    <p className='leading-[28px] text-[.9rem] font-bold transform-none'>From $999.00 or $41.62/mo</p>
                    <Link className='text-[.9rem] px-6 bg-[#3a3a3a] hover:bg-[#292929] text-yellow-100 font-semibold rounded-[1rem] '>BUY NOW</Link>

                  </div>
                </div>
              </div>




            
              
              
            </div>

          </div>

        </section>


        <section  className='px-11 w-[100%]'>
          <div className='flex flex-row justify-center py-[2rem]'>
            <div className='flex lg:flex-row flex-col justify-between'>
              <div className='w-[100%] flex items-center justify-start gap-[.5rem] lg:w-[14rem]'>
                <img src='images/service.png' alt='Services' className='' />
                <div className='flex flex-col items-start justify-start'>
                  <h6 className='font-bold text-[1.1rem] '>Free Shipping</h6>
                  <p className='text-gray-400'>From all orders over $50</p>
                </div>
              </div>
              <div className='w-[100%] flex items-center justify-start gap-[1rem] lg:w-[14rem]'>
                <img src='images/service-02.png' alt='Services' className='' />
                <div className='flex flex-col items-start justify-start'>
                  <h6 className='font-bold text-[1.1rem] '>Daily Surprise Offers</h6>
                  <p className='text-gray-400'>Save up to 25% off</p>
                </div>
              </div>
              <div className='w-[100%] flex items-center justify-start gap-[1rem] lg:w-[14rem]'>
                <img src='images/service-03.png' alt='Services' className='' />
                <div className='flex flex-col items-start justify-start'>
                  <h6 className='font-bold text-[1.1rem] '>Support 24/7</h6>
                  <p className='text-gray-400'>Shop with an expert</p>
                </div>
              </div>
            </div>
            <div className='flex lg:flex-row flex-col justify-between'>
              <div className='w-[100%] flex items-center justify-start gap-[1rem] lg:w-[14rem]'>
                <img src='images/service-04.png' alt='Services' className='' />
                <div className='flex flex-col items-start justify-start'>
                  <h6 className='font-bold text-[1.1rem] '>Affordable Prices</h6>
                  <p className='text-gray-400'>Get Factory direct price</p>
                </div>
              </div>
              <div className='w-[100%] flex items-center justify-start gap-[1rem] lg:w-[14rem]'>
                <img src='images/service-05.png' alt='Services' className='' />
                <div className='flex flex-col items-start justify-start'>
                  <h6 className='font-bold text-[1.1rem] '>Secure Payments</h6>
                  <p className='text-gray-400'>100% Protected Payments</p>
                </div>
              </div>
            </div>

          </div>

        </section>


        <section className='w-[100%] '>
          <Box className='flex flex-wrap items-center gap-7 py-[2rem] mx-11 bg-white p-11'>

            <div className='flex items-center gap-3 w-[23%] justify-between border-r border-slate-200 border-b'>
              <div>
                <h6 className='font-bold text-xl'>Music & Gaming</h6>
                <p>10 Items</p>
              </div>
              <img src='images/camera.jpg' alt='camera' />
            </div>

            <div className='flex items-center gap-3 w-[23%] justify-between border-r border-slate-200 border-b'>
              <div>
                <h6 className='font-bold text-xl'>Smart Watches</h6>
                <p>10 Items</p>
              </div>
              <img src='images/watch.jpg' className='w-[7rem]' alt='watch' />
            </div>
            

            <div className='flex items-center gap-3 w-[23%] justify-between border-r border-slate-200 border-b'>
              <div>
                <h6 className='font-bold text-xl'>Smart TV</h6>
                <p>10 Items</p>
              </div>
              <img src='images/tv.jpg' alt='camera' />
            </div>

            <div className='flex items-center gap-3 w-[23%] justify-between border-r border-slate-200 border-b'>
              <div>
                <h6 className='font-bold text-xl'>Headphones</h6>
                <p>10 Items</p>
              </div>
              <img src='images/headphone.jpg' className='w-[7rem]' alt='watch' />
            </div>





            <div className='flex items-center gap-3 w-[23%] justify-between border-r border-slate-200 border-b'>
              <div>
                <h6 className='font-bold text-xl'>Home Appliances</h6>
                <p>10 Items</p>
              </div>
              <img src='images/homeapp.jpg' className='w-[7rem]' alt='watch' />
            </div>

            <div className='flex items-center gap-3 w-[23%] justify-between border-r border-slate-200 border-b'>
              <div>
                <h6 className='font-bold text-xl'>Portable Speaker</h6>
                <p>10 Items</p>
              </div>
              <img src='images/tab1.jpg' className='w-[7rem]' alt='watch' />
            </div>

            <div className='flex items-center gap-3 w-[23%] justify-between border-r border-slate-200 border-b'>
              <div>
                <h6 className='font-bold text-xl'>Tablet</h6>
                <p>10 Items</p>
              </div>
              <img src='images/headphone.jpg' className='w-[7rem]' alt='watch' />
            </div>

            <div className='flex items-center gap-3 w-[23%] justify-between border-r border-slate-200 border-b'>
              <div>
                <h6 className='font-bold text-xl'>Boards</h6>
                <p>10 Items</p>
              </div>
              <img src='images/tab2.jpg' className='w-[7rem]' alt='watch' />
            </div>

            
          </Box>
        </section>


        {/* Featured Collection */}
        <section>
          <h3 className='text-[1.7rem] leading-[32px] tracking-wide font-bold px-11 py-2 '>Featured Collection</h3>
          <div className='flex flex-wrap items-center gap-8 mx-11'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>

        {/* famous products */}
        <section className='py-5 flex items-center mx-11 gap-2'>
          <div className='relative w-[20rem] rounded-[1rem]'>
            <img src='images/famous-1.webp' alt='product' className='object-cover' />
            <div className='card-content absolute top-[13%] left-[7%] font-semibold  text-white'>
              <h5 className='text-[.8rem] text-gray-200 leading-[20px] '>Big Screen</h5>
              <h6 className='text-[1.3rem] '>Smart Watch Series 7</h6>
              <p className='text-[.8rem] text-gray-200'>From $399 $16.62/mo. for 4 months</p>

            </div>
          </div>
          <div className='relative w-[20rem] rounded-[1rem]'>
            <img src='images/famous-2.webp' alt='product' className='object-cover' />
            <div className='card-content absolute top-[13%] left-[7%] font-semibold '>
              <h5 className='text-[.8rem] text-gray-400 leading-[20px] '>Big Screen</h5>
              <h6 className='text-[1.3rem] '>Smart Watch Series 7</h6>
              <p className='text-[.8rem] text-gray-400'>From $399 $16.62/mo. for 4 months</p>

            </div>
          </div>
          <div className='relative w-[20rem] rounded-[1rem]'>
            <img src='images/famous-3.webp' alt='product' className='object-cover' />
            <div className='card-content absolute top-[13%] left-[7%] font-semibold '>
              <h5 className='text-[.8rem] text-gray-400 leading-[20px] '>Big Screen</h5>
              <h6 className='text-[1.3rem] '>Smart Watch Series 7</h6>
              <p className='text-[.8rem] text-gray-400'>From $399 $16.62/mo. for 4 months</p>

            </div>
          </div>
          <div className='relative w-[20rem] rounded-[1rem]'>
            <img src='images/famous-4.webp' alt='product' className='object-cover' />
            <div className='card-content absolute top-[13%] left-[7%] font-semibold '>
              <h5 className='text-[.8rem] text-gray-400 leading-[20px] '>Big Screen</h5>
              <h6 className='text-[1.3rem] '>Smart Watch Series 7</h6>
              <p className='text-[.8rem] text-gray-400'>From $399 $16.62/mo. for 4 months</p>

            </div>
          </div>
        </section>
        {/* Special Wrapper */}
        <section>
          <h3 className='text-[1.7rem] leading-[32px] tracking-wide font-bold px-11 py-2 '>Special Products</h3>
          <div className='px-11'>
            
            <div className='flex lg:flex-row flex-col  items-center justify-start gap-[1rem]'>
              {products?.map((product) => {
                if (product?.tags === 'Special') {
                  return <SpecialProduct product={product} />
                }
              })}
              
            </div>
          </div>
        </section>

        {/* Popular Products Collection */}
        <section>
          <h3 className='text-[1.7rem] leading-[32px] tracking-wide font-bold px-11 py-2 '>Our Popular Products</h3>
          <div className='flex items-center gap-8 mx-11'>
          {/* <div className='flex items-center justify-start gap-[1rem]'>
              {products?.map((product) => {
                if (product?.tags === 'Special') {
                  return <ProductCard product={product} />
                }
              })}
              
            </div> */}
          </div>
        </section>

        {/* Marque Warpper */}
        <section className=''>
          <div className='flex items-center justify-between marquee'>
            <Marquee className=''>
              <div className='mx-4 w-25'>
                <img src='images/brand-01.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-02.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-03.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-04.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-05.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-06.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-07.png' alt='brand' />
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-08.png' alt='brand' />
              </div>
            </Marquee>
          </div>

        </section>
        
        {/* Blog Wrapper */}
        <section>
          <h3 className='text-[1.7rem] leading-[32px] tracking-wide font-bold px-11 py-2 '>Our Latest Blogs</h3>
          <div className='flex flex-wrap items-center gap-8 mx-11'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </section>
    </div>
  )
}

export default Home;
