
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
    <main className='bg-black flex justify-center'>
      <div className=' min-h-screen pt-2 relative md:w-2/4'>
        <div className='flex justify-center'>
          <Image src={Logo} className=' w-20' alt="Logo"/>
        </div>
        <div className='mb-20'>
          {posts.map((post) => (  
          <div key={post.id} className='text-white '>
            <div className='flex items-stretch px-5'>
              <div className='pr-5 flex flex-col items-center'>
                <div className='relative h-14 w-14 flex justify-center items-center'>
                  <div className=' bg-white rounded-full h-12 w-12 flex'>
                    <Image src={display} alt='profile' className='rounded-full'></Image>
                  </div>
                  <div className='bg-white absolute right-0 bottom-0 rounded-full p-1 border-2 border-black'>
                      <AiOutlinePlus color='black' size={10}/>
                  </div>
                </div>
                <div className=' h-full border-l rounded-full border-neutral-700 my-2'></div>
                <div className='relative h-14 w-14 flex justify-center items-center'>
                  <div className=' rounded-full h-12 w-12 flex justify-center'>
                    <div className=' bg-blue-400 h-4 w-4 rounded-full absolute bottom-0'></div>
                    <div className=' bg-red-400 h-5 w-5 rounded-full absolute left-0 top-3'></div>
                    <div className=' bg-violet-400 h-7 w-7 rounded-full absolute right-0 top-0'></div>
                  </div>
                </div>
              </div> 
              <div className='pt-1 w-full'>
                <div className=' flex justify-between'>
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
                  <div className=' flex'>
                    <p className=' text-base font-light text-neutral-600'>14 m</p>
                    <p className=' ml-2'> ••• </p>
                  </div>
                </div>
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
                {/* <div className=' mt-2'>
                  <Image src={Mountain} className=' rounded' alt="Mountain"/>
                </div> */}
                <div className='flex my-5 w-32 justify-between'>
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
                <div className=' mb-5'>
                  <p className=' text-sm text-neutral-600'>125 replies • View likes</p>
                </div>
              </div>
            </div>
            <div className=' w-full border border-neutral-600 mb-5 mt-2'></div>
          </div>
          ))}
        </div>
        <div className='fixed w-full bottom-0 px-5 py-3 bg-black text-neutral-500 md:w-2/4'>
          <Navbar/>
        </div>
      </div>
    </main>
  )
}
