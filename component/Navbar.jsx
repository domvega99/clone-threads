import React from 'react'
import { HiMiniHome } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";
import { PiArrowSquareOut } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";
import Link from 'next/link';
const Navbar = () => {
  return (
    <ul className='flex justify-between text-gray-500 '>
      <div className='hover:text-white'>
      <li>
        <Link href="/" className='hover:text-white '>
          <HiMiniHome size={40}/>
        </Link>
      </li>
      </div>
      <li>
        <Link href="/search" className='hover:text-white'>
          <LuSearch size={40} />
        </Link>
      </li>
      <li>
        <Link href="" className='hover:text-white'>
          <PiArrowSquareOut size={40}/>
        </Link>
      </li>
      <li>
        <Link href="" className='hover:text-white'>
          <AiOutlineHeart size={40}/>
        </Link>
      </li>
      <li>
        <Link href="profile" className='hover:text-white'>
          <HiOutlineUser size={40}/>
        </Link>
      </li>
    </ul>
  )
}

export default Navbar