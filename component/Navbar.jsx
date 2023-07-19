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
      <div className='hover:text-white'>
      <li>
        <Link href="/" className='navbar'>
          <HiMiniHome size={40}/>
        </Link>
      </li>
      </div>
      <li>
        <Link href="/search" className='navbar'>
          <LuSearch size={40} />
        </Link>
      </li>
      <li>
        <Link href="" className='navbar'>
          <PiArrowSquareOut size={40}/>
        </Link>
      </li>
      <li>
        <Link href="activity" className='navbar'>
          <AiOutlineHeart size={40}/>
        </Link>
      </li>
      <li>
        <Link href="profile" className='navbar'>
          <HiOutlineUser size={40}/>
        </Link>
      </li>
    </ul>
  )
}

export default Navbar