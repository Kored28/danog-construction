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
    <div className='flex items-center fixed w-full max-w-[1440px] z-[9999]'>
        <div className="flex items-center justify-between w-full h-[90px]
        px-2 lg:px-[103px] bg-white
        "
        >
            <div>
                <Link
                href="/"
                className='hidden lg:block w-[200px]'
                >
                    <Image 
                    src="/Logo.png"
                    alt='Danog'
                    width={200}
                    height={40}
                    className='object-contain'
                    />
                </Link>
                <Link
                href="/"
                className='block lg:hidden'
                >
                    <Image 
                    src="/mobileIcon.png"
                    alt='Danog'
                    width={90}
                    height={30}
                    className='object-contain'
                    />
                </Link>
            </div>

            <div className="flex flex-row items-center gap-5">
                <ul className={`flex flex-col lg:flex-row gap-3 absolute lg:relative top-[60.5px] lg:top-0
                left-0 right-0 w-full bg-white lg:bg-transparent
                overflow-hidden transition-[max-height] lg:transition-none duration-300 ease-in-out
                ${toggle ? "max-h-80 " : "max-h-0 lg:max-h-[60px]"}
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
                    <IoCloseSharp className='text-[30px]'/> 
                    : 
                    <FaBarsStaggered 
                    className={`text-[30px] ${toggle ? "-rotate-90 transition-transform durantion-300 ease-out" : ""} `} 
                    /> 
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar