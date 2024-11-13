"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handletoggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className="flex flex-row justify-between relative w-full bg-white h-[60px] md:h-[90px] 
    px-[15px] md:py-4 mx-0 lg:mx-[103px] z-10
    "
    >
        <div className="flex">
            <Link
            href="/"
            >
                <Image 
                src="/Logo.png"
                alt='Danog'
                width={240}
                height={50}
                className='object-contain hidden lg:block'
                />
                <Image 
                src="/mobileIcon.png"
                alt='Danog'
                width={100}
                height={30}
                className='object-contain block lg:hidden'
                />
            </Link>
        </div>

        <div className="flex flex-row items-center gap-5">
            <ul className={`flex flex-col lg:flex-row gap-3 absolute lg:relative top-[60.5px] lg:top-0
            left-0 right-0 w-full bg-white lg:bg-transparent
            overflow-hidden transition-[max-height] lg:transition-none duration-300 ease-in-out
             ${toggle ? "max-h-64" : "max-h-0 lg:max-h-[60px]"}
            `}
            >
                <li className='text-sm mt-[16px] lg:mt-0 text-[#263a4f] px-[20px] font-semibold 
                uppercase hover:text-[#0057FF]'
                >
                    <Link href="/about">About</Link>
                </li>
                <li className='text-sm text-[#263a4f] px-[20px] font-semibold uppercase hover:text-[#0057FF]'>
                    <Link href="/services">Services</Link>
                </li>
                <li className='text-sm text-[#263a4f] px-[20px] font-semibold uppercase hover:text-[#0057FF]'>
                    <Link href="/blogs">Blog</Link>
                </li>
                <li className='text-sm mb-[16px] lg:mb-0 text-[#263a4f] px-[20px] font-semibold uppercase 
                hover:text-[#0057FF]'
                >
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>

        <div 
        onClick={handletoggle}
        className="flex items-center cursor-pointer lg:hidden" 
        >
            { 
                toggle ? 
                <IoCloseSharp className='text-[40px]'/> 
                : 
                <FaBarsStaggered 
                className={`text-[35px] ${toggle ? "-rotate-90 transition-transform durantion-300 ease-out" : ""} `} 
                /> 
            }
        </div>
    </div>
  )
}

export default Navbar