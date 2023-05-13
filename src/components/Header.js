import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {BsSearch} from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

  return (
    <>
        <header className='flex items-center justify-between px-[2rem] py-3 bg-[#131921] border-b border-[#3b4149]  shadow-lg shadow-blue-100 text-white'>
        <div>
            <p className='mb-0'>Free Shipping over 100$ & Free Returns</p>
        </div>
        <div className='items-center justify-between'>
            <p className='text-end text-md'>Hotline <a className='' href='tel: +972 59 231 1426'>+972 59 231 1426</a></p>
        </div>
        {/* <div>

        </div> */}
        </header>
        <header className='header-upper py-3 bg-[#131921] px-[2rem]'>
            <div className='flex items-center justify-between'>
                <h1 className='text-white text-2xl font-bold '>Abed Store</h1>
                <div className='w-[45%]'>
                    <div className='flex items-center rounded-md'>
                        <input type='text' className='p-2 w-[100%] bg-white rounded-l-sm border-inherit outline-none' placeholder='Search Product here....'  />
                        <span className='p-3  bg-yellow-400 rounded-r-sm cursor-pointer active:bg-yellow-500 transition-all'><BsSearch /></span>
                    </div>


                </div>
                <div className=' flex items-center justify-between gap-10 text-white text-sm'>
                    <div className=''>
                        <Link className='gap-2 flex items-center justify-center'>
                            <img className='w-[35px] h-[35px]' src='images/compare.svg' alt='compare' />
                            <p className=''>Compare <br /> Products</p>
                        </Link>
                    </div>
                    <div className=''>
                        <Link className='gap-2 flex items-center justify-center'>
                            <img className='w-[35px] h-[35px]' src='images/wishlist.svg' alt='wishlist' />
                            <p className=''>Favorite <br /> Wishlist</p>
                        </Link>
                    </div>
                    <div className=''>
                        <Link className='gap-2 flex items-center justify-center'>
                            <img className='w-[35px] h-[35px]' src='images/user.svg' alt='wishlist' />
                            <p className=''>Log in <br /> My Account</p>
                        </Link>
                    </div>
                    <div className=''>
                        <Link className='flex items-center gap-2'>
                            <img className='w-[35px] h-[35px]' src='images/cart.svg' alt='cart' />
                            <div className='flex flex-col '>
                                <p className='rounded-md w-[1.5rem] h-[1.5rem] p-1 bg-white text-black flex items-center justify-center'>0</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
        <header className='py-0 flex items-center gap-2 px-[2rem] bg-[#232f3e] text-white'>
            <div className=''>
                <FormControl className='focus:border-none' sx={{ m: 1, minWidth: 120, backgroundColor: '#2d3c4e', borderRadius: '.2rem', width: "13rem"}} size="small">
                    <InputLabel id="demo-select-small-label"  >
                        <div className='flex items-center gap-1'>
                            <img src='images/menu.svg' className='h-[1.5rem]' />
                            <p className='font-semibold text-white'>Shop Categories</p>
                        </div>
                    </InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='flex items-center justify-between gap-7'>
                <NavLink className={'text-white text-[12px] font-bold tracking-widest uppercase '} to='/'>Home</NavLink>
                <NavLink className={'text-white text-[12px] font-bold tracking-widest uppercase '} to='/'>Our Store</NavLink>    
                <NavLink className={'text-white text-[12px] font-bold tracking-widest uppercase '} to='/blogs'>Blogs</NavLink>    
                <NavLink className={'text-white text-[12px] font-bold tracking-widest uppercase '} to='/contact'>Contact</NavLink>    
            </div>        
        </header>
    </>
  )
}

export default Header;
