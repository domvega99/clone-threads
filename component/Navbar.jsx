import React from 'react'
import { HiMiniHome } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { PiArrowSquareOut } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";
const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <div>
        <HiMiniHome size={40} color='gray'/>
      </div>
      <div>
        <LuSearch size={40} color='gray'/>
      </div>
      <div>
        <PiArrowSquareOut size={40} color='gray'/>
      </div>
      <div>
        <AiOutlineHeart size={40} color='gray'/>
      </div>
      <div>
        <HiOutlineUser size={40} color='gray'/>
      </div>
    </div>
  )
}

export default Navbar