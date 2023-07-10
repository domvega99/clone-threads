import React from 'react'
import { HiMiniHome } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { PiArrowSquareOut } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";
const Navbar = () => {
  return (
    <div className='flex justify-between focus:outline-none'>
      <button className='hover:text-white text-white'>
        <HiMiniHome size={40}/>
      </button>
      <button className='hover:text-white'>
        <LuSearch size={40}/>
      </button>
      <button className='hover:text-white'>
        <PiArrowSquareOut size={40}/>
      </button>
      <button className='hover:text-white'>
        <AiOutlineHeart size={40}/>
      </button>
      <button className='hover:text-white'>
        <HiOutlineUser size={40}/>
      </button>
    </div>
  )
}

export default Navbar