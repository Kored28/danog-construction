import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col bg-[#232427] w-full'>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 lg:px-[125px] py-[100px] border-b-[1px] border-[#333]">
            <div className="flex flex-col gap-2 px-[15px] mr-[15px]">
                <Image 
                    src="/Logo-footer.png"
                    alt='Danog'
                    width={230}
                    height={50}
                    className='object-contain'
                />
                <p className="text-[#8d9aa8] text-base font-normal w-[250px]">
                    Building your own home is about desire, fantasy. But it&apos;s achievable anyone can do it.
                </p>
            </div>

            <div className=" flex flex-col gap-2 px-[15px]">
                <h4 className='text-white text-lg font-semibold pb-[10px]'>
                    Company
                </h4>
                <ul className='flex flex-col gap-4'>
                    <li className='text-[#8d9aa8] text-base hover:text-[#0057FF] hover:underline'>
                        <Link href="/about">About Us</Link>
                    </li>
                    <li className='text-[#8d9aa8] text-base hover:text-[#0057FF] hover:underline'>
                        <Link href="/about">Our Services</Link>
                    </li>
                    <li className='text-[#8d9aa8] text-base hover:text-[#0057FF] hover:underline'>
                        <Link href="/about">Client Reviews</Link>
                    </li>
                    <li className='text-[#8d9aa8] text-base hover:text-[#0057FF] hover:underline'>
                        <Link href="/conta">Contact Us</Link>
                    </li>
                </ul>
            </div>

            <div className=" flex flex-col gap-2 px-[15px] ">
                <h4 className='text-white text-lg font-semibold pb-[10px]'>
                    Headquaters
                </h4>
                <p className='text-[#8d9aa8] text-base pb-[18px]'>
                    19b Rumuodara Eliowhani Port Harcourt Rivers State, Nigeria 
                </p>
                <div className="flex">
                    <span className='text-[#8d9aa8] text-base font-medium'>Email: &nbsp;</span>
                    <p className='text-[#8d9aa8] text-base hover:text-[#0057FF] hover:underline'>
                        ogbididaniel@gmail.com
                    </p>
                </div>
                <p className='text-[#8d9aa8] text-base'>+234 908 232 2244</p>
            </div>

        </div>

        <div className="flex flex-row justify-center items-center py-[30px]">
            <p className="text-[#8d9aa8] text-base">
                All right preserved &copy; 2024
            </p>
        </div>
        
    </div>
  )
}

export default Footer