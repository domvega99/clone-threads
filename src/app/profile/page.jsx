import React from 'react'
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
const profile = [
  {
    id: "1",
    name: "Dominic Anuta Vega",
    username: "hellodoomssss",
    bio: "Web Developer / Data Analyst",
    followers: "0",
    github: "https://github.com/domvega99/",
    linkedin: "https://www.linkedin.com/",
  },
];

const threads = [
  {
    id: "1",
    title: "Junior Web Developer, IT Support, Google ads Specialist",
    company: "BOHOL DIGITAL",
    location: "Philippines",
    date: "2020-02 – 2021-04",
    description : [
      {list: "To maintain the software called SuiteCrm. (PHP Code)"},
      {list: "To maintain the website stable, hosting, design and monitor the websites using WordPress (Elementor, Woocommerce)."},
      {list: "To maintain and check the plugin and theme updates every day in Wordpress dashboard."},
      {list: "To set up campaigns, develop keywords and execute a digital marketing strategy in Google Ads to help our client reach their goals."},
      {list: "To maintain database by entering client’s information in CRM."},
    ]
  },
  {
    id: "2",
    title: "IT Support,  Google ads Specialist, Data Analyst",
    company: "BLOOMLOCAL",
    location: "United Kingdom",
    date: "2021-04 – 2023-01",
    description : [
      {list: "To test, maintain, monitor, and update the new software."},
      {list: "To manage campaign and all the tools using in google ads that related to the needs, including landing pages, customer email list, audience, bids, and more."},
      {list: "To ensure the product data and information is current and accurate."},
      {list: "To update the order status in the system and entering orders to inspecting shipments to managing customer satisfaction."},
      {list: "Generate invoices to add the supplier’s bill to the QuickBooks."},
      {list: "Generate reports e.g. Sales, Conversion Data, Google Analytics, Google Sheets."},
    ]
  },
  {
    id: "3",
    title: "Website Development",
    company: "Freelance",
    location: "Philippines",
    date: "",
    description : [
      {list: "Full Stack Web Developer - Modern POS System",
       skills: "(SASS, ReactJs, Firebase, and MUI)",
       link: "https://github.com/domvega99/firstpos/"},
      {list: "Project Front-End Web Developer - Hotel Booking System",
       skills: "(Laravel, ReactJS) ",
       link: "https://github.com/GeminiousDrigon/HotelPMS/"},
      {list: "Junior Wordpress Develoer (Freelance Bloomlocal)",
       skills: "(Wordpress, Elementor, Woocommerce)",
       link: "https://bloomlocal.international/ and https://bloomlocal.com/"},
    ]
  },
]

const Profile = () => {
  
  return (
    <div className='bg-black md:flex md:justify-center'>
      <div className=' md:w-2/4'>
        <div className=''>
          {profile.map((user) => (
          <div className='text-white p-5 relative min-h-screen'>
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
            <div className='mt-5' key={user.id}>
              <div>
                <div className='flex justify-between items-center'>
                  <div>
                    <h1 className=' text-3xl font-semibold'>{user.name}</h1>
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
            <div className='flex justify-between mt-5'>
              <button className='border border-neutral-500 px-14 py-2 rounded-xl font-medium hover:bg-neutral-900'>Edit profile</button>
              <button className='border border-neutral-500 px-14 py-2 rounded-xl font-medium hover:bg-neutral-900'>Share profile</button>
            </div>
            <div className='mt-10 flex justify-between'>
              <div className=' flex justify-center w-1/2 border-b-2 border-white pb-3 font-semibold'>
                Threads
              </div>
              <div className=' flex justify-center w-1/2 border-b border-neutral-500 text-neutral-500 font-semibold'>
                Replies
              </div>
            </div>
            {threads.map((thread) => (
            <div className='mt-5'>
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
                      <div className=' text-sm mt-1 text-red-400'>{item.link}</div>
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
        <div className='sticky bottom-0 px-5 py-3 bg-black text-gray-500'>
            <Navbar/>
        </div>
      </div>
    </div>
  )
}

export default Profile