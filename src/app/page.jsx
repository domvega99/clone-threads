
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




export async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      if(!res.ok ) {
        throw new Error('Failed to response')
      }

      return res.json()
  }

export default async function Home() {

  const data = await getData()


  return (
    <main className='bg-black flex justify-center'>
      <div className=' min-h-screen pt-2 relative md:w-2/4'>
        <div className='flex justify-center'>
          <Image src={Logo} className=' w-20' alt="Logo"/>
        </div>
        {data.map((post) => (  
        <div key={post.id} className='text-white '>
          <div className='flex items-stretch px-5'>
            <div className='pr-5 flex flex-col items-center'>
              <div className='relative h-14 w-14 flex justify-center items-center'>
                <div className=' bg-white rounded-full h-12 w-12 '>
                </div>
                <div className='bg-white absolute right-0 bottom-0 rounded-full p-1 border-2 border-black'>
                    <AiOutlinePlus color='black' size={10}/>
                </div>
              </div>
              <div className=' h-full border-l rounded-full border-neutral-700 my-2'></div>
              <div className='relative h-14 w-14 flex justify-center items-center'>
                <div className=' rounded-full h-12 w-12 flex justify-center'>
                  <div className=' bg-white h-4 w-4 rounded-full absolute bottom-0'></div>
                  <div className=' bg-white h-5 w-5 rounded-full absolute left-0 top-3'></div>
                  <div className=' bg-white h-7 w-7 rounded-full absolute right-0 top-0'></div>
                </div>
              </div>
            </div> 
            <div className='pt-1'>
              <div className=' flex justify-between'>
                <div className='flex items-center'>
                  <h1 className=' text-base font-medium'>dominic</h1>
                  <div className=' bg-sky-600 rounded-full w-4 h-4 flex items-center justify-center ml-1'>
                    <BsCheckLg size={12} color='black'/>
                  </div>
                </div>
                <div className=' flex'>
                  <p className=' text-base font-light text-neutral-600'>14 m</p>
                  <p className=' ml-2'> ••• </p>
                </div>
              </div>
              <p className=' text-sm font-light mt-2'>{post.title}</p>
              <p className=' text-sm font-light mt-2'>{post.body}</p>
              <div className=' mt-2'>
                <Image src={Mountain} className=' rounded' alt="Mountain"/>
              </div>
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
        <div className='sticky bottom-0 px-5 py-3 bg-black text-neutral-500 '>
          <Navbar/>
        </div>
      </div>
    </main>
  )
}
