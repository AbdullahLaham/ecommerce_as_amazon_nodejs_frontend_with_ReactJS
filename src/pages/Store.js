import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import ProductCard from '../components/ProductCard'
import Colors from '../components/Colors';
const Store = () => {

  
  const [filter, setFilter] = React.useState('');
  const [grid, setGrid] = useState(4);
  const handleChange = (event) => {
      setFilter(event.target.value);
  };


  return (
    <div className='bg-[#e6e6e6] text-gray-600 px-11 h-[]'>
      <Meta title='Our Store' />      
      <BreadCrumb title='Our Store' />
      <div className='store-wrapper py-5 h-[100%] '>
        <div className='w-[100%] flex  gap-2 h-[100%] '>
          {/* Right section */}
          <div className='w-[20%] '>
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
                  <input type='text' className='p-2 w-[25%] ml-0 bg-gray-200 mx-2 rounded-md border-inherit outline-none' placeholder='From'  />
                  <input type='text' className='p-2 w-[25%]  bg-gray-200 mx-2 rounded-md border-inherit outline-none' placeholder='To'  />
                </div>

                <h5 className='font-[600] text-[1.1rrem] text-gray-800'>Colors</h5>
                <Colors />
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
              <div className='flex items-center border-b border-gray-300 pb-1'>
                <div>
                  <img src='images/watch.jpg' className='h-[100%] object-cover' />
                </div>
                <div>
                  <h6 className='text-red-700 font-bold m-0 text-[.9rem]'>Havels</h6>
                  <p className='font-bold text-[.8rem] ' >Kids Headphones Bulk 10 Peak Multi Colored For...</p>
                  <ReactStars count={5} value={4} edit={false} size={24} activeColor="#ffd700" classNames={'my-0'}/>
                  <p className='text-[.9rem] font-bold text-[#1c1c1b]  '>$100.00</p>
                </div>
              </div>

              <div className='flex items-center border-b border-gray-300 pb-1'>
                <div>
                  <img src='images/watch.jpg' className='h-[100%] object-cover' />
                </div>
                <div>
                  <h6 className='text-red-700 font-bold m-0 text-[.9rem]'>Havels</h6>
                  <p className='font-bold text-[.8rem] ' >Kids Headphones Bulk 10 Peak Multi Colored For...</p>
                  <ReactStars count={5} value={4} edit={false} size={24} activeColor="#ffd700" classNames={'my-0'}/>
                  <p className='text-[.9rem] font-bold text-[#1c1c1b]  '>$100.00</p>
                </div>
              </div>
           
            </div>
          </div>

          {/* left section */}
          <div className='flex-1 px-[10px]  rounded-[10px] '>
            <div className='flex items-center justify-between rounded-[10px] bg-white px-2 mb-2'>
              <div className='flex items-center '>
                <p className='mb-0 font-bold text-lg w-[80px]'>Sort By:</p>


                <FormControl className='focus:border-none' sx={{ m: 1, minWidth: 120, backgroundColor: '', borderRadius: '.2rem', width: "13rem"}} size="small">
                    <InputLabel id="demo-select-small-label"  >
                      <p className='font-semibold'>Filter By</p>
                    </InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={filter}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="manual">Featured</MenuItem>
                        <MenuItem value="best-selling">Best selling</MenuItem>
                        <MenuItem value="title-ascending">Alphabetically, A-Z</MenuItem>
                        <MenuItem value="title-descending">
                          Alphabetically, Z-A
                        </MenuItem>
                        <MenuItem value="price-ascending">Price, low to high</MenuItem>
                        <MenuItem value="price-descending">Price, high to low</MenuItem>
                        <MenuItem value="created-ascending">Date, old to new</MenuItem>
                        <MenuItem value="created-descending">Date, new to old</MenuItem>
                    </Select>
                </FormControl>



              </div>
              <div className='flex items-center gap-5'>
                <p className='text-gray-400 '>21 Products</p>

                <div className='flex items-center gap-2'>
                <div className='p-2 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer transition-all'  onClick={() => setGrid(4)}>
                     <img src='images/gr4.svg' alt='' className='w-[1rem] h-[1rem]  p-[.05rem]  ' />
                  </div>
                  <div className='p-2 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer transition-all' onClick={() => setGrid(3)}>
                    <img src='images/gr.svg' alt='' className='w-[1rem] h-[1rem] p-[.05rem]  ' />
                  </div>
                  
                  <div className='p-2 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer transition-all' onClick={() => setGrid(2)}>
                    <img src='images/gr3.svg' alt='' className='w-[1rem] h-[1rem]   p-[.05rem]  ' />
                  </div>
                  <div className='p-2 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer transition-all' onClick={() => setGrid(1)}>
                    <img src='images/gr2.svg' alt='' className='w-[1rem] h-[1rem]   p-[.05rem]  ' />
                  </div>
                  
                  
                 

                </div>
              </div>
            </div>
            <div className='flex items-center justify-between flex-wrap '>
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
              <ProductCard grid={grid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store;