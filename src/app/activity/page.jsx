import React from 'react'
import Navbar from '../../../component/Navbar'
import display from '../../../images/profile.jpg';
import Image from 'next/image';
import { skills, profile } from '@/database';
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle } from "react-icons/tb";
import { HiOutlineArrowPath } from "react-icons/hi2";
import { TiLocationArrowOutline } from "react-icons/ti";
import { BsCheckLg } from "react-icons/bs";

const Activity = () => {
  return (
    <div className='relative bg-black md:flex md:justify-center'>
        <div className='bg-black pt-5 pl-5 text-white min-h-screen md:w-2/4 mb-12 md:mb-0'>
            <h1 className=' text-3xl font-bold'>Activity</h1>
            <div className=' flex overflow-x-auto hide-scroll-bar my-5 font-semibold'>
                <button className='bg-white text-black flex-shrink-0 mr-2 py-1 border border-neutral-500 rounded-lg w-32'>All</button>
                <button className='text-neutral-300 flex-shrink-0 mr-2 py-1 border border-neutral-500 rounded-lg w-32 disabled:bg-gray-400' disabled>Replies</button>
                <button className='text-neutral-300 flex-shrink-0 mr-2 py-1 border border-neutral-500 rounded-lg w-32 disabled:bg-gray-400' disabled>Mentions</button>
                <button className='text-neutral-300 flex-shrink-0 mr-5 py-1 border border-neutral-500 rounded-lg w-32 disabled:bg-gray-400' disabled>Verified</button>
            </div>
            <div className='mr-5 flex items-stretch'>
                <div className='flex flex-col items-center'>
                    <div className=' bg-white rounded-full h-12 w-12 flex'>
                        <Image src={display} alt='profile' className='rounded-full'></Image>
                    </div>
                    <div className='border-l border-l-neutral-500 h-full bg-white my-2 rounded-full'></div>
                </div>
                <div className='ml-8 w-full'>
                    {profile.map((item, id) => (
                        <div className='flex flex-col' key={id}>
                            <div className='flex items-center'>
                                <h1 className=' text-base font-medium'>{item.username}</h1>
                                <div className=' bg-sky-600 rounded-full w-4 h-4 flex items-center justify-center ml-1'>
                                <BsCheckLg size={12} color='black'/>
                                </div>
                            </div>
                            <h1 className=' text-sm text-neutral-500'>{item.name}</h1>
                        </div>
                    ))}
                    <div className='mt-2'>
                        {skills.map((skill, id) => (
                            <ul className=' list-disc md:flex md:flex-row md:justify-between' key={id}>
                                <li>{skill.name}</li>
                                <div className='text-sky-400'>{'★'.repeat(skill.rate)} </div>
                            </ul>
                        ))}
                    </div>
                    <div className='flex my-5 w-32 justify-between'>
                        <div className=' text-2xl hover:text-gray-500 hover:text-xl flex justify-center items-center w-8'>
                            <AiOutlineHeart/>
                        </div>
                        <div className=' text-2xl hover:text-gray-500 hover:text-xl flex justify-center items-center w-8'>
                            <TbMessageCircle/>
                        </div>
                        <div className=' text-2xl hover:text-gray-500 hover:text-xl flex justify-center items-center w-8'>
                            <HiOutlineArrowPath/>
                        </div>
                        <div className=' text-2xl hover:text-gray-500 hover:text-xl flex justify-center items-center w-8'>
                            <TiLocationArrowOutline/>
                        </div>
                    </div>
                    <div className=' mb-5'>
                        <p className=' text-sm text-neutral-600 hover:text-gray-500'>125 replies • View likes</p>
                    </div>
                </div> 
            </div>          
        </div>     
        <nav className='fixed w-full bottom-0 px-5 py-3 bg-black text-neutral-500 md:w-2/4'>
            <Navbar/>
        </nav>
    </div>
  )
}

export default Activity