import React from 'react'
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
  const {title} = props;

  return (
    <div className='breadcrumb py-4 '>
        <div className='flex items-center justify-center '>
            <p className='text-center mb-0 '>
                <Link to='/' className='text-black'>
                    Home
                </Link> / <Link to='/store'>
                    {title}
                </Link>

            </p>
        </div>
    </div>
  )
}

export default BreadCrumb