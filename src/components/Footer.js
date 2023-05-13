import React from 'react'
import { Link } from 'react-router-dom';
import {BsFacebook, BsLinkedin, BsGithub, BsYoutube, BsInstagram} from 'react-icons/bs';
const Footer = () => {
  return (
    <>
        <footer className='py-3 bg-[#232f3e] flex items-center justify-center gap-[4rem] w-[100%]'>
          <div className='flex items-center justify-center gap-5 text-white'>
            <img src='images/newsletter.png'  alt='' />
            <h2 className='text-2xl font-semibold  '>SignUp for Newsletter</h2>
          </div>
          <div className='flex items-center rounded-md w-[40%] bg-white'>
            <input type='text' className='p-2 w-[100%] bg-white rounded-l-sm border-inherit outline-none' placeholder='Your Email Address....'  />
            <span className='rounded-r-sm  active:bg-[#171f29] transition-all mr-2 p-1 rounded-md cursor-pointer bg-[#232f3e] text-white text-[.9rem]'>SUBSCRIBE</span>
          </div>
        </footer>
        <footer className='py-3 bg-[#232f3e] flex items-start justify-between px-[5rem] text-white'>
          <div className='flex flex-col items-start'>
            <h4  className='text-[1.2rem] font-bold'>Contact Us</h4>
            <div className='flex flex-col gap-3 items-start'>
              <address>Gaza Strip,
                <br /> Khanyounis
                <br />Pin Code: 131103
              </address>
              <a className='' href='tel: +972 59 231 1426'>+972 59 231 1426</a>
              <a href='mailto:abdullah.lahham.js@gmail.com'>abdullah.lahham.js@gmail.com</a>
              <div className='icons flex items-center justify-start gap-2'>
                <a href='' className='w-[2rem] h-[2rem] bg-slate-700 rounded-full flex items-center justify-center'>
                  <BsFacebook className='fill-white text-xl mx-2 cursor-pointer ' />
                </a>
                <a href='' className='w-[2rem] h-[2rem] bg-slate-700  rounded-full flex items-center justify-center'>
                  <BsGithub className='fill-white text-xl mx-2 cursor-pointer ' />
                </a>
                <a href='' className='w-[2rem] h-[2rem] bg-slate-700 rounded-full flex items-center justify-center'>
                  <BsInstagram className='fill-white text-xl mx-2 cursor-pointer ' />
                </a>
                <a href='' className='w-[2rem] h-[2rem] bg-slate-700  rounded-full flex items-center justify-center'>
                  <BsLinkedin className='fill-white text-xl mx-2 cursor-pointer ' />
                </a>
                <a href='' className='w-[2rem] h-[2rem] bg-slate-700   rounded-full flex items-center justify-center'>
                  <BsYoutube className='fill-white text-xl mx-2 cursor-pointer ' />
                </a>
              </div>
            </div>


          </div>
          <div className=''>
            <h4  className='text-[1.2rem] font-bold' >Information</h4>
            <div className='flex flex-col gap-3 items-start'>
              <Link>Privacy Policy</Link>
              <Link>Refund Policy</Link>
              <Link>Shipping Policy</Link>
              <Link>Terms of Service</Link>
              <Link>Blogs</Link>

            </div>

          </div>
          <div className=''>
            <h4  className='text-[1.2rem] font-bold' >Account</h4>
            <div className='flex flex-col gap-3 items-start'>
              <Link>Search</Link>
              <Link>About Us</Link>
              <Link>Faq</Link>
              <Link>Contact</Link>
              <Link>Size Chart</Link>

            </div>

          </div>
          <div className='flex flex-col gap-3 items-start'>
            <h4 className='text-[1.2rem] font-bold'>Quik Links</h4>
            <div className='flex flex-col gap-3 items-start'>
              <Link>Accessories</Link>
              <Link>Laptops</Link>
              <Link>Headphones</Link>
              <Link>SmartWatches</Link>
              <Link>Tablets</Link>
            </div>

          </div>

        </footer>
        <footer className=' bg-[#232f3e] py-3 flex items-center justify-start '>
          <p className='text-white text-center mb-0 w-[100%] border-t border-[#3b4149]'>
            &copy; {new Date().getFullYear()}; Powerd By Abdullah Allahham
          </p>
        </footer>
    </>
  )
}

export default Footer;
