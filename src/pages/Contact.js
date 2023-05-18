import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { TextField } from '@mui/material'
import {AiOutlineHome, AiOutlinePhone, AiOutlineMail, } from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
const Contact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    comment: '',
  })
  return (
    <div className='bg-gray-200'>
        <Meta title={"Contact Us"} />
        <BreadCrumb title='Contact Us' />
        <div className='w-[100%]'>
        <iframe className='w-[60rem] rounded-lg  mx-auto' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13629.386776379548!2d34.324947085815836!3d31.34941081555976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd91eeb99c57f9%3A0xc75eff6ece2d690!2z2YXYrdi32Kkg2KfZhNin2LrYpyDYp9mE2LTYsdmC2YrYqQ!5e0!3m2!1sar!2s!4v1684337348464!5m2!1sar!2s" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        <div className='w-[100%] flex justify-center mt-10 '>
          <div className='mx-auto flex  w-[72%] justify-start gap-[2.5rem] bg-white px-4 py-3 rounded-lg mb-10'>
            <div className='w-[50%] flex flex-col justify-start'>
              <h3 className='text-[1.5rem] font-semibold text-gray-500 '>Contact</h3>
              <div className='mt-5 '>
                <TextField id="outlined-textarea1" label="Name" sx={{width: '100%', mb: '.6rem' ,border: 'none', outline: 'none', backgroundColor: '#f0f7da' }}   />
                <TextField id="outlined-textarea2" label="Email" sx={{width: '100%', mb: '.6rem' ,border: 'none', outline: 'none', backgroundColor: '#f0f7da' }}   />
                <TextField id="outlined-textarea3" label="Phone Number" sx={{width: '100%', mb: '.6rem' ,border: 'none', outline: 'none', backgroundColor: '#f0f7da' }}   />
                <TextField id="outlined-multiline-flexible" label="Comment" multiline rows={4} sx={{width: '100%', mb: '.6rem' ,border: 'none', outline: 'none', backgroundColor: '#f0f7da' }} />
              </div>
            </div>
            <div className='w-[40%] flex flex-col justify-start'>
              <h3 className='text-[1.5rem] font-semibold text-gray-500 mb-5 '>Get in touch with us</h3>
              <div>
                <ul>
                  <li className='mb-2 flex items-center gap-7 mb-7 '>
                    <AiOutlineHome  className='text-[1.4rem] text-gray-700' />
                    <address className='font-semibold text-gray-500 '>Kanyounis, AL_Balad, AL_Beaa street</address>
                  </li>
                  <li className='mb-2 flex items-center gap-7 mb-7 ' >
                    <AiOutlinePhone  className='text-[1.4rem] text-gray-700' />
                    <address className='font-semibold text-gray-500 '>+972 59 231 1426</address>
                  </li>
                  <li className='mb-2 flex items-center gap-7 mb-7 '>
                    <AiOutlineMail  className='text-[1.4rem] text-gray-700' />
                    <address className='font-semibold text-gray-500 '>abdullah.lahham.js@gmail.com</address>
                  </li>
                  <li className='mb-2 flex items-center gap-7 mb-7 '>
                    <BsInfoCircle  className='text-[1.4rem] text-gray-700' />
                    <address className='font-semibold text-gray-500 '>Satarday - Tuseday 8:30 AM - 4 BM</address>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        </div>
        
    </div>
  )
}

export default Contact