import React from "react";

import { UilSetting } from "@iconscout/react-unicons";
import { Link, useNavigate } from "react-router-dom";

const NavIcons = () => {
  // navigate
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
        <Link to='../home'>
          <img className='w-[1.5rem] '  src={'/images/home.png'} alt='navicon' />
        </Link>
        <UilSetting className='text-[1.5rem] '  />
        <img  className='w-[1.5rem] ' src={'/images/noti.png'} alt="" />
        <Link to="../chat">
            <img  className='w-[1.5rem] ' src={'/imgages/comment.png'} alt="" />
        </Link>
    </div>
  )
}

export default NavIcons