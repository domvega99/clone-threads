"use client"
import React, { useState, useEffect } from 'react'
import { BsGlobe2 } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import Navbar from '../../../component/Navbar';
import display from '../../../images/profile.jpg';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";
import { HiOutlineArrowPath } from "react-icons/hi2";
import { TiLocationArrowOutline } from "react-icons/ti";
import Image from 'next/image';
import Link from 'next/link';
import {profile, threads} from '../../database';

const Profile = () => {  

  return (
    <div className='bg-black md:flex md:justify-center'>
      <div className=' md:w-2/4'>
        <div className='mb-10'>
          {profile.map((user) => (
          <div className='text-white p-5 relative min-h-screen' key={user.id}>
            <div className='flex justify-between'>
              <div>
                <BsGlobe2 size={28}/>
              </div>
              <div className='flex'>
                <div className='mr-5'>
                  <AiOutlineInstagram size={35} />
                </div>
                <div>
                  <BiMenuAltRight size={35}/>
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <div>
                <div className='flex justify-between items-center'>
                  <div>
                    <h1 className='text-2xl md:text-3xl font-semibold'>{user.name}</h1>
                    <div className='flex my-2'>
                      <p className=' text-md font-medium mr-2'>{user.username}</p>
                      <div className=' bg-neutral-600 px-2 rounded-full'>
                        <span className='text-sm text-gray-400'>threads.net</span>
                      </div>
                    </div>
                  </div>
                  <div className='w-20 h-20 bg-white rounded-full flex'>
                    <Image src={display} alt={user.name} className='rounded-full'></Image>
                  </div>
                </div>
                <p className='mb-2'>{user.bio}</p>
                <div className='flex flex-col items-start text-sm text-neutral-500 font-semibold'>
                  <button className='mb-2'>
                    <Link href={user.github}>{user.github}</Link>
                  </button>
                  <button className='mb-2'>
                    <Link href={user.linkedin}>{user.linkedin}</Link>
                  </button>
                </div>
                <div className='flex'>
                  <div className='mr-2 flex items-center relative w-8'>
                    <div className='w-5 h-5 rounded-full bg-violet-500 absolute right-0'></div>
                    <div className='w-4 h-4 rounded-full bg-red-400'></div>
                  </div>
                  <p className='text-neutral-400'>{user.followers} followers</p>
                </div>
              </div>
            </div>
            <div className='flex justify-between mt-5 text-sm'>
              <button className=' text-xs md:text-sm border border-neutral-500 px-10 md:px-14 py-2 rounded-xl font-medium hover:bg-neutral-900'>Edit profile</button>
              <button className=' text-xs md:text-sm border border-neutral-500 px-10 md:px-14 py-2 rounded-xl font-medium hover:bg-neutral-900'>Share profile</button>
            </div>
            <div className='mt-10 flex justify-between'>
              <div className=' flex justify-center w-1/2 border-b-2 border-white pb-3 font-semibold'>
                Threads
              </div>
              <div className=' flex justify-center w-1/2 border-b border-neutral-500 text-neutral-500 font-semibold'>
                Replies
              </div>
            </div>
            {threads.map((thread, id) => (
            <div className='mt-5' key={id}>
              <div className='flex text-md items-stretch'>
                <div className='flex items-center flex-col'>
                  <div className='w-10 h-10 bg-white rounded-full flex'>
                    <Image src={display} alt={user.name} className='rounded-full'></Image>
                  </div>
                  <div className=' border-l border-l-neutral-500 rounded-full my-2 h-full'></div>
                  <div className='w-6 h-6 bg-white rounded-full flex'>
                    <Image src={display} alt={user.name} className='rounded-full'></Image>
                  </div>
                </div>  
                <div className='ml-5'>
                  <h1 className=' text-md'>{thread.title}</h1>
                  <div className='flex flex-col'>
                    <span className=' text-neutral-400 font-semibold text-sm'>{thread.date}</span>
                    <span className=' text-neutral-400 font-semibold text-sm'>{thread.company} ({thread.location})</span>
                  </div>
                  {thread.description.map((item, id) => (
                    <ul key={id}>
                      <li className=' text-sm mt-1 list-disc'>{item.list}</li>
                      <div className=' text-sm mt-1 text-neutral-400'>{item.skills}</div>
                      <div className=' text-xs mt-1 text-red-400 md:text-sm'>{item.link}</div>
                    </ul>
                  ))}
                  <div className='flex mt-10 w-32 justify-between'>
                    <div>
                      <AiOutlineHeart size={25}/>
                    </div>
                    <div>
                      <TbMessageCircle size={25}/>
                    </div>
                    <div>
                      <HiOutlineArrowPath size={25}/>
                    </div>
                    <div>
                      <TiLocationArrowOutline size={25}/>
                    </div>
                  </div>
                </div> 
              </div>
              <div className=' w-full border border-neutral-600 mt-5'></div>
            </div>
            ))} 
          </div>
          ))}
          
        </div>
        <div className='fixed w-full bottom-0 px-5 py-3 bg-black text-gray-500 md:w-2/4'>
            <Navbar/>
        </div>
      </div>
    </div>
  )
}

export default Profile