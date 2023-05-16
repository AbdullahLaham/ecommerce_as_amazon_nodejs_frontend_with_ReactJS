import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Store = () => {
  return (
    <div className='bg-[#e6e6e6] text-gray-600'>
      <Meta title='Our Store' />      
      <BreadCrumb title='Our Store' />
      <div className='store-wrapper py-5 '>
        <div className='w-[100%] flex items-center justify-start gap-2'>
          {/* Right section */}
          <div className='w-[25%] '>
            <div className='mb-3 bg-white py-2 px-3 '>
              <h3 className='filter-title text-[16px] leading-[20px] font-semibold  text-gray-800'>Shop By Categories</h3>
              <div>
                <ul className='mt-3 flex flex-col text-[1rem] leading-7'>
                  <li className='text-gray-600 cursor-pointer '>Watch</li>
                  <li className='text-gray-600 cursor-pointer '>TV</li>
                  <li className='text-gray-600 cursor-pointer '>Camera</li>
                  <li className='text-gray-600 cursor-pointer '>Laptop</li>
                </ul>
              </div> 
            </div>
            <div className='mb-3 bg-white py-2 px-3 flex flex-col'>
              <h3 className='filter-title leading-[20px] font-bold text-[1.1rem] mb-3  text-gray-800'>Filter By</h3>
              <div>
                <h5 className='font-[600] text-[1.1rem] text-gray-800'>Availability</h5>
                <div>
                  <input type='checkbox' id='input1' className='form-check-input' /> <label className='font-semibold text-[.9rem] ' for='input1' >In Stock</label>
                </div>
                <div>
                  <input type='checkbox' id='input2' className='form-check-input' /> <label className='font-semibold text-[.9rem] ' for='input2' >Out Of Stock</label>
                </div>

                <h5 className='font-[600] text-[1.1rrem] text-gray-800'>Price</h5>
                <div className='flex items-center justify-start '>
                  <input type='text' className='p-2 w-[25%] ml-0 bg-gray-200 mx-2 rounded-l-sm border-inherit outline-none' placeholder='From'  />
                  <input type='text' className='p-2 w-[25%]  bg-gray-200 mx-2 rounded-l-sm border-inherit outline-none' placeholder='To'  />
                </div>

                <h5 className='font-[600] text-[1.1rrem] text-gray-800'>Colors</h5>
                <div className='flex flex-wrap  items-center justify-start '>
                  <p className='w-[1.5rem] h-[1.5rem] m-1 bg-red-500 rounded-full '></p>
                  <p className='w-[1.5rem] h-[1.5rem] m-1 bg-red-500 rounded-full '></p>
                  <p className='w-[1.5rem] h-[1.5rem] m-1 bg-red-500 rounded-full '></p>
                  <p className='w-[1.5rem] h-[1.5rem] m-1 bg-red-500 rounded-full '></p>
                  <p className='w-[1.5rem] h-[1.5rem] m-1 bg-red-500 rounded-full '></p>
                  <p className='w-[1.5rem] h-[1.5rem] m-1 bg-red-500 rounded-full '></p>
                  <p className='w-[1.5rem] h-[1.5rem] m-1 bg-red-500 rounded-full '></p>
                  <p className='w-[1.5rem] h-[1.5rem] m-1 bg-red-500 rounded-full '></p>
                  <p className='w-[1.5rem] h-[1.5rem] m-1 bg-red-500 rounded-full '></p>
                  <p className='w-[1.5rem] h-[1.5rem] m-1 bg-red-500 rounded-full '></p>
                  <p className='w-[1.5rem] h-[1.5rem] m-1 bg-red-500 rounded-full '></p>
                  <p className='w-[1.5rem] h-[1.5rem] m-1 bg-red-500 rounded-full '></p>
                  <p className='w-[1.5rem] h-[1.5rem] m-1 bg-red-500 rounded-full '></p>
                  <p className='w-[1.5rem] h-[1.5rem] m-1 bg-red-500 rounded-full '></p>
                  <p className='w-[1.5rem] h-[1.5rem] m-1 bg-red-500 rounded-full '></p>
                  <p className='w-[1.5rem] h-[1.5rem] m-1 bg-red-500 rounded-full '></p>
                  <p className='w-[1.5rem] h-[1.5rem] m-1 bg-red-500 rounded-full '></p>
                  <p className='w-[1.5rem] h-[1.5rem] m-1 bg-red-500 rounded-full '></p>
                </div>
              </div>
              
              <h5 className='font-[600] text-[1.1rrem] text-gray-800'>Size</h5>
                <div>
                  <input type='checkbox' id='check1' className='form-check-input' /> <label className='font-semibold text-[.9rem] ' for='check1' >S (2)</label>
                </div>
                <div>
                  <input type='checkbox' id='check2' className='form-check-input' /> <label className='font-semibold text-[.9rem] ' for='check2' >M (2)</label>
                </div>
            </div>

            <div className='mb-3 bg-white py-2 px-3 '>
              <h3 className='filter-title text-[16px] leading-[20px] font-semibold '>Product Tags</h3>
              <div className='flex flex-wrap items-center gap-1 mt-3'>
                <div className='py-1 px-3 rounded-[.3rem] bg-slate-300 text-gray-600 font-semibold cursor-pointer'>
                  Headphone
                </div>
                <div className='py-1 px-3 rounded-[.3rem] bg-slate-300 text-gray-600 font-semibold cursor-pointer'>
                  Laptop
                </div>
                <div className='py-1 px-3 rounded-[.3rem] bg-slate-300 text-gray-600 font-semibold cursor-pointer'>
                  Mobile
                </div>
                <div className='py-1 px-3 rounded-[.3rem] bg-slate-300 text-gray-600 font-semibold cursor-pointer'>
                  oppo
                </div>
                <div className='py-1 px-3 rounded-[.3rem] bg-slate-300 text-gray-600 font-semibold cursor-pointer'>
                  Seaker
                </div>
                <div className='py-1 px-3 rounded-[.3rem] bg-slate-300 text-gray-600 font-semibold '>
                  Tablet
                </div>
                <div className='py-1 px-3 rounded-[.3rem] bg-slate-300 text-gray-600 font-semibold '>
                  Vivo
                </div>
                <div className='py-1 px-3 rounded-[.3rem] bg-slate-300 text-gray-600 font-semibold '>
                  Wire
                </div>

              </div>
            </div>

            <div className='mb-3 bg-white py-2 px-3 '>
              <h3 className='filter-title text-[16px] leading-[20px] font-semibold '>Random Product</h3>
              <div className='flex '>
                <div>
                  <img src=''  />
                </div>
                <div>
                  
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store;