import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
        <section className='min-h-[100vh]'>
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
        <section>
          
        </section>
    </>
  )
}

export default Home;