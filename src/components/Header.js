import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {BsSearch} from 'react-icons/bs';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserCart } from '../features/auth/authSlice';
import { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015

import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Autocomplete, TextField } from '@mui/material';


const Header = () => {
    // navigate

    const navigate = useNavigate();

    const [totalAmount, setTotalAmount] = useState(0);
    const [productOptions, setProductOptions] = useState([]);
    const [category, setCategory] = React.useState('');
    const { products }  = useSelector((state) => state?.products);
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();
    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    let total = 0;

    const {user, currentCart} = useSelector((state) => state.auth) ;


    useEffect(() => {
        for (let i = 0; i < currentCart?.length; i++) {
          total += currentCart[i]['price'] * currentCart[i]['quantity'];
          
        }
        setTotalAmount(total)
      }, []);


    useEffect(() => {
        dispatch(getUserCart());
        setProductOptions(products?.map((item, i) => {
            return {
                id: i,
                value: item?._id,
                label: item?.title,
                
            }
        }))
    }, []);

    const handleLogout = async () => {
        localStorage.clear();
        window.location.reload();
    }
  return (
    <>
        <header className='flex items-center justify-between px-[2rem] py-3 bg-[#131921] border-b border-[#3b4149]  shadow-lg shadow-blue-100 text-white min-w-[100%]'>
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
                    <div className=' items-center rounded-md hidden lg:flex'>
                        {/* <Typeahead
                            id="pagination-example"
                            width='100%'
                            style={{width: '100%'}}
                            onPaginate={() => console.log('Results paginated')}
                            options={productOptions}
                            labelKey={'name'}

                            paginate={paginate}
                            
                        /> */}
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={productOptions}
                            onChange={(event, newValue) => {
                                navigate(`/product/${newValue?.value}`);
                                setInputValue(newValue?.label)
                              }}
                              inputValue={inputValue}
                            //   onInputChange={(event, newInputValue) => {
                            //     setInputValue(newInputValue);
                            //   }}
                            sx={{ width: 500, backgroundColor: 'white', height: '2.8rem', borderRadius: '10px'  }}
                            renderInput={(params) => <TextField {...params}  placeholder="Search for Products Here..."/>}
                        />
                        {/* <input type='text' className='p-2 w-[100%] bg-white rounded-l-sm border-inherit outline-none' placeholder='Search Product here....'  /> */}
                        {/* <span className='p-3 h-[3rem] flex bg-yellow-400 rounded-r-sm cursor-pointer active:bg-yellow-500 transition-all'><BsSearch /></span> */}
                    </div>
                    


                </div>
                <div className=' flex items-center justify-between gap-[1.5rem] text-white text-sm'>
                    <div className=''>
                        <Link to='/compare-product' className='gap-2 flex items-center justify-center'>
                            <img className='lg:w-[1rem] lg:h-[1rem] w-[1.5rem] h-[1.5rem]' src='/images/compare.svg' alt='compare' />
                            <p className='hidden lg:block text-[.7rem]'>Compare Products</p>
                        </Link>
                    </div>
                    <div className=''>
                        <Link to='/wishlist' className='gap-2 flex items-center justify-center'>
                            <img className='lg:w-[1rem] lg:h-[1rem] w-[1.5rem] h-[1.5rem]' src='/images/wishlist.svg' alt='wishlist' />
                            <p className='hidden lg:block text-[.7rem]'>Favorite Wishlist</p>
                        </Link>
                    </div>
                    <div className=''>
                        {user?.email ? <Link to='/profile' className='flex gap-1'>
                         {user?.firstname} {user?.lastname}
                        </Link> : <Link to='/login' className='gap-2 flex items-center justify-center'>
                            <img className='w-[1.5rem] h-[1.5rem]' src='/images/user.svg' alt='wishlist' />
                            <p className='hidden lg:block text-[.7rem]'>Log in My Account</p>
                        </Link> }
                    </div>
                    <div className=''>
                        <Link to='/cart' className='flex items-center gap-2'>
                            <img className='' src='/images/cart.svg' alt='cart' />
                            <div className='flex flex-col items-center '>
                                <p className='rounded-md w-[1rem] h-[1.5rem] p-1 bg-white text-black flex items-center justify-center'>{currentCart?.length}</p>
                                <p className='rounded-md h-[1.5rem] p-1 text-white flex items-center justify-center'>$ {totalAmount}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
        
        <header className='py-3 flex items-center gap-2 px-[2rem] bg-[#232f3e] text-white header'>
            <div className='hidden lg:flex'>
                <FormControl className='focus:border-none ' sx={{ m: 1, minWidth: 120, backgroundColor: '#2d3c4e', borderRadius: '.2rem', width: "13rem"}} size="small">
                    <InputLabel id="demo-select-small-label"  >
                        <div className='flex items-center gap-1'>
                            <img src='/images/menu.svg' className='h-[1.5rem]' />
                            <p className='font-semibold text-white'>Shop Categories</p>
                        </div>
                    </InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={category}
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
            <div className='flex items-center justify-between lg:gap-7 gap-3'>
                <NavLink className={'text-white text-[12px] font-bold tracking-widest uppercase '} to='/'>Home</NavLink>
                <NavLink className={'text-white text-[12px] font-bold tracking-widest uppercase '} to='/store'>Our Store</NavLink>    
                <NavLink className={'text-white text-[12px] font-bold tracking-widest uppercase '} to='/blogs'>Blogs</NavLink>    
                <NavLink className={'text-white text-[12px] font-bold tracking-widest uppercase '} to='/contact'>Contact</NavLink>    
                <button className='text-white text-[12px] font-bold tracking-widest uppercase' onClick={() => handleLogout()}>Logout</button>
            </div>        
        </header>
    </>
  )
}

export default Header;
