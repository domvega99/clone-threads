import React from 'react'
import Navbar from '../../../component/Navbar'
import { LuSearch } from "react-icons/lu";
import { BsCheckLg } from "react-icons/bs";

export async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
      if(!res.ok ) {
        throw new Error('Failed to response')
      }

      return res.json()
  }

const Search = async () => {

    const users = await getData()

  return (
    <main className='bg-black md:flex md:justify-center'>
        <div className='bg-black min-h-screen md:w-2/4 relative mb-10'>
            <div className=' p-5  text-white'>
                <h1 className=' text-3xl font-bold'>Search</h1>
                <div className='mt-5 w-full h-8 rounded-md bg-neutral-500 text-neutral-300 flex items-center px-2'>
                    <LuSearch size={25}/>
                    <input 
                    className='h-8 rounded-md ml-2 w-full bg-neutral-500 outline-none'
                    placeholder='Search'
                    ></input>
                </div>
                {users.map((user) => (
                <div className='flex flex-col' key={user.id}>
                    <div className=' text-white'>
                        <div className='flex mt-4 justify-between' >
                            <div className='flex items-start '>
                                <div className='w-10 h-10 bg-white rounded-full'></div>
                                <div className='flex flex-col ml-5'>
                                    <div className='flex items-center'>
                                        <h1 className=' text-md font-semibold'>{user.name}</h1>
                                        <div className=' bg-sky-400 rounded-full w-4 h-4 flex items-center justify-center ml-1'>
                                            <BsCheckLg size={12} color='black'/>
                                        </div>
                                    </div>
                                    <div>
                                        <p className=' text-neutral-500'>{user.company.name}</p>
                                        <div className='flex items-center'>
                                            <div className='w-4 h-4 rounded-full bg-white mr-2'></div>
                                            <p className='text-sm'>4.3M followers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className=' font-semibold border border-neutral-500 py-1 px-6 rounded-md'>
                                    Follow
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='mt-2 w-10/12 border-t border-neutral-600 md:w-11/12'></div>
                    </div>
                </div>
                ))}
            </div>
            <div className='fixed w-full bottom-0 px-5 py-3 bg-black text-gray-500 md:w-2/4'>
                <Navbar/>
            </div>   
        </div>
        
    </main>
  )
}

export default Search