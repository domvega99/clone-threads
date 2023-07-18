
import Image from 'next/image'
import Navbar from '../../component/Navbar'
import Logo from '../../images/logo.jpg'
import Mountain from '../../images/mountain.jpg'
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { TbMessageCircle } from "react-icons/tb";
import { HiOutlineArrowPath } from "react-icons/hi2";
import { TiLocationArrowOutline } from "react-icons/ti";
import display from '../../images/profile.jpg';
import {profile, posts} from '../database';
import Link from 'next/link';



export default async function Home() {



  return (
    <div className='bg-black flex justify-center'>
      <div className=' min-h-screen pt-2 relative md:w-2/4 w-full mb-20'>
        <div className='flex justify-center'>
          <Image src={Logo} className=' w-20' alt="Logo"/>
        </div>
        {posts.map((post) => (  
        <div className='text-white flex items-start w-full p-5'>
          <div>
            <div className='w-14 h-14 relative flex items-center justify-center'>
              <div className='w-12 h-12 rounded-full bg-white flex'>
                <Image src={display} alt='profile' className='rounded-full'></Image>
              </div>
              <div className='w-6 h-6 rounded-full border-2 border-black bg-white absolute right-0 bottom-0 flex items-center justify-center'>
                <AiOutlinePlus color='black' size={14}/>
              </div>
            </div>
          </div>
          <div className='ml-5 w-full '>
            <div className='flex justify-between'>
              {profile.map((item, id) => (
                <div key={id} className=''>
                  <div className='flex items-center'> 
                    <h1 className=' text-lg'>{item.username}</h1>
                    <div className='w-4 h-4 bg-sky-500 rounded-full ml-1 flex items-center justify-center'>
                      <BsCheckLg size={12} color='black'/>
                    </div>
                  </div>
                  <p className=' text-sm text-neutral-500 font-medium'>{item.name}</p>
                </div> 
              ))}
              <div className=' flex'>
                <p className=' text-base font-light text-neutral-600'>14 m</p>
                <p className=' ml-2'> ••• </p>
              </div>
            </div>
            <div>
              <p className=' text-sm font-light mt-2'>{post.title}</p>
              <p className=' text-sm mt-2'>{post.description}</p>
              <div className='flex text-sm text-sky-600 flex-wrap my-2'>
                {post.language.map((item, id) => (
                  <div key={id} className='mr-2'>
                    @{item.name}
                  </div>
                ))}
              </div>
              <div className='text-xs text-sky-600'>
                {post.github.map((item, id) => (
                  <Link href={item} key={id} className='my-2 flex flex-col'>
                    {item}
                  </Link>
                ))}
              </div>
              <div className='text-xs text-sky-600'>
                {post.links.map((item, id) => (
                  <Link href={item} key={id} className='my-2 flex flex-col'>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
       <div className='fixed w-full bottom-0 px-5 py-3 bg-black text-neutral-500 md:w-2/4'>
          <Navbar/>
        </div>
    </div>
  )
}
