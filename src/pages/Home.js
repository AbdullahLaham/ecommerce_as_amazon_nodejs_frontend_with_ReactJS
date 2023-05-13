import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
const Home = () => {
  return (
    <div className='bg-[#f0f0f0]'>
        <section className=''>
          <div className='flex gap-2 justify-center mx-[.5rem] my-2'>
            <div className='col-l max-w-[50%] '>
              <div className='relative '>
                <img src='images/main-sec.jpg' className='rounded-md w-[40rem] h-[25rem]'/>
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
            <div className='col-r max-w-[45%] flex flex-wrap items-center justify-between h-[100%] '>
            <div className='relative w-[49%] mx-[.1rem] my-[.5rem] mt-0 '>
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
              <div className='relative w-[49%] mx-[.1rem]  my-[.5rem] mt-0'>
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
              <div className='relative w-[49%] mx-[.1rem] mt-[.5rem]'>
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
              <div className='relative w-[49%] mx-[.1rem] mt-[.5rem]'>
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

        </section>
        <section  className='px-11 w-[100%]'>
          <div className='flex items-center justify-center gap-7 py-[2rem]'>
            <div className='flex items-center justify-start gap-[.5rem] w-[18%]'>
              <img src='images/service.png' alt='Services' className='' />
              <div className='flex flex-col items-start justify-start'>
                <h6 className='font-bold text-[1.1rem] '>Free Shipping</h6>
                <p className='text-gray-400'>From all orders over $50</p>
              </div>
            </div>
            <div className='flex items-center justify-start gap-[1rem] w-[18%]'>
              <img src='images/service-02.png' alt='Services' className='' />
              <div className='flex flex-col items-start justify-start'>
                <h6 className='font-bold text-[1.1rem] '>Daily Surprise Offers</h6>
                <p className='text-gray-400'>Save up to 25% off</p>
              </div>
            </div>
            <div className='flex items-center justify-start gap-[1rem] w-[18%]'>
              <img src='images/service-03.png' alt='Services' className='' />
              <div className='flex flex-col items-start justify-start'>
                <h6 className='font-bold text-[1.1rem] '>Support 24/7</h6>
                <p className='text-gray-400'>Shop with an expert</p>
              </div>
            </div>
            <div className='flex items-center justify-start gap-[1rem] w-[18%]'>
              <img src='images/service-04.png' alt='Services' className='' />
              <div className='flex flex-col items-start justify-start'>
                <h6 className='font-bold text-[1.1rem] '>Affordable Prices</h6>
                <p className='text-gray-400'>Get Factory direct price</p>
              </div>
            </div>
            <div className='flex items-center justify-start gap-[1rem] w-[18%]'>
              <img src='images/service-05.png' alt='Services' className='' />
              <div className='flex flex-col items-start justify-start'>
                <h6 className='font-bold text-[1.1rem] '>Secure Payments</h6>
                <p className='text-gray-400'>100% Protected Payments</p>
              </div>
            </div>

          </div>

        </section>
        <section className='w-[100%] '>
          <div className='flex flex-wrap items-center gap-7 py-[2rem] mx-11 bg-white p-11'>

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

            
          </div>
        </section>
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
        <section>
          <div className='flex items-center gap-8 mx-11'>
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
