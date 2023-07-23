import React from 'react'

const Colors = ({colors, setColor}) => {
  return (
    <div className='flex flex-wrap  items-center justify-start '>
      {colors?.map((color) => {
        return <div onClick={() => setColor(color?._id)} className='border border-gray-500 mx-1 cursor-pointer rounded-full flex items-center justify-center '>
          <p style={{backgroundColor: color?.title}} className={`w-[1.5rem] h-[1.5rem] m-1  rounded-full`}></p>
        </div>
      })}
      
    </div>
  )
}

export default Colors ;