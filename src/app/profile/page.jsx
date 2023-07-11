import React from 'react'
import { BsGlobe2 } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import Navbar from '../../../component/Navbar';

const Profile = () => {
  return (
    <div className='bg-black'>
      <div className='text-white p-5 relative min-h-screen md:w-2/4'>
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
                <h1 className=' text-3xl font-semibold'>Dominic Anuta Vega</h1>
                <div className='flex my-2'>
                  <p className=' text-md font-medium mr-2'>hellodoomssss</p>
                  <div className=' bg-neutral-600 px-2 rounded-full'>
                    <span className='text-sm text-gray-400'>threads.net</span>
                  </div>
                </div>
              </div>
              <div className='w-20 h-20 bg-white rounded-full'></div>
            </div>
            <p className='mb-2'>Bio</p>
            <div className='flex'>
              <div className='mr-2 flex items-center relative w-8'>
                <div className='w-5 h-5 rounded-full bg-white absolute right-0'></div>
                <div className='w-4 h-4 rounded-full bg-white'></div>
              </div>
              <p className='text-neutral-400'>4 followers</p>
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-5'>
          <button className='border border-neutral-500 px-14 py-2 rounded-xl font-medium'>Edit profile</button>
          <button className='border border-neutral-500 px-14 py-2 rounded-xl font-medium'>Share profile</button>
        </div>
        <div className='mt-10 flex justify-between'>
          <div className=' flex justify-center w-1/2 border-b-2 border-white pb-3 font-semibold'>
            Threads
          </div>
          <div className=' flex justify-center w-1/2 border-b border-neutral-500 text-neutral-500 font-semibold'>
            Replies
          </div>
        </div>
        
      </div>
      <div className='sticky bottom-0 px-5 py-3 bg-black text-gray-500'>
          <Navbar/>
      </div>
    </div>
  )
}

export default Profile