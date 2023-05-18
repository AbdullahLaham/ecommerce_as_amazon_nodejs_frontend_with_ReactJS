import React from 'react'
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
  const {title} = props;

  return (
    <div className='breadcrumb py-2 '>
        <div className='flex items-center justify-center py-3'>
            <p className='text-center mb-0 '>
                <Link to='/' className='text-black mb-0 text-[1.1rem]'>
                    Home
                </Link> / <Link to='/store' className='text-black font-bold mb-0 text-[1.1rem]'>
                    {title}
                </Link>

            </p>
        </div>
    </div>
  )
}

export default BreadCrumb