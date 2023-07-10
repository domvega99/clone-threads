import React from 'react'
import { HiMiniHome } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { PiArrowSquareOut } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";
import Link from 'next/link';
const Navbar = () => {
  return (
    <ul className='flex justify-between'>
      <li>
        <Link href="" className=' text-gray-500 hover:text-white'>
          <HiMiniHome size={40}/>
        </Link>
      </li>
      <li>
        <Link href="" className=' text-gray-500 hover:text-white'>
          <LuSearch size={40} />
        </Link>
      </li>
      <li>
        <Link href="" className=' text-gray-500 hover:text-white'>
          <PiArrowSquareOut size={40}/>
        </Link>
      </li>
      <li>
        <Link href="" className=' text-gray-500 hover:text-white'>
          <AiOutlineHeart size={40}/>
        </Link>
      </li>
      <li>
        <Link href="" className=' text-gray-500 hover:text-white'>
          <HiOutlineUser size={40}/>
        </Link>
      </li>
    </ul>
  )
}

export default Navbar