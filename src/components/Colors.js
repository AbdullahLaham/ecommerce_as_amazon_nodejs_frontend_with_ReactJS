import React from 'react'

const Colors = ({color, setColor}) => {
  return (
    <div className=''>
        {color?.title ? 
          <div onClick={() => setColor(color?._id)} className='mr-1 mb-1 border border-gray-500 cursor-pointer rounded-full '>
          <p style={{backgroundColor: color?.title}} className={`w-[1.5rem] h-[1.5rem] m-1  rounded-full`}></p>
        </div> : ''}
        
      
    </div>
  )
}

export default Colors ;