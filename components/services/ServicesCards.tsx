import React from 'react'
import Link from 'next/link';

import { BsBuildingGear } from "react-icons/bs";
import { IoConstructOutline } from "react-icons/io5";
import { SiCcleaner } from "react-icons/si";
import { MdConveyorBelt } from "react-icons/md";

const ServicesCards = () => {
  return (
    <div className='bg-[#f9fafa] flex justify-center w-full h-auto lg:h-[653px] relative py-[100px]'>
        <div className='bg-dots bg-repeat absolute left-0 right-0 top-0 bottom-0 w-full h-full -z-[10px]' />

        <div className="flex flex-wrap items-center justify-center gap-8 w-full z-10 mx-4 lg:mx-auto"
        >
            <div className="bg-white group hover:bg-[#0057FF] w-full lg:w-[239px] h-[312px] px-[20px] py-[40px]
            shadow-md"
            >
                <div className="flex flex-col items-center gap-3">
                    <BsBuildingGear size={60} className='text-[#0057FF] group-hover:text-white transition-colors'/>
                    <div className="flex flex-col gap-4 items-center text-center">
                        <h3 className='text-[18px] text-[#263a4f] font-semibold group-hover:text-white transition-colors'>
                            General Building
                        </h3>
                        <p className='text-sm md:text-base text-[#8d9aa8] group-hover:text-white transition-colors'>
                            We are committed a sustainable <br className='hidden md:block' />
                            future fostering a collaborative spirit.
                        </p>
                        <Link href="/services" 
                        className='text-sm text-[#263a4f] group-hover:text-white transition-colors uppercase hover:text-[#eeeeee]
                        font-semibold'
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-white group hover:bg-[#0057FF] w-full lg:w-[239px] 
            h-[312px] px-[20px] py-[40px]
            shadow-md"
            >
                <div className="flex flex-col items-center gap-3">
                    <IoConstructOutline size={60} className='text-[#0057FF] group-hover:text-white transition-colors'/>
                    <div className="flex flex-col gap-4 items-center text-center">
                        <h3 className='text-[18px] text-[#263a4f] font-semibold group-hover:text-white transition-colors'>
                            Building Construction
                        </h3>
                        <p className='text-sm md:text-base text-[#8d9aa8] group-hover:text-white transition-colors'>
                            We are committed a sustainable <br className='hidden md:block' />
                            future fostering a collaborative spirit.
                        </p>
                        <Link href="/services" 
                        className='text-sm text-[#263a4f] group-hover:text-white transition-colors uppercase hover:text-[#eeeeee]
                        font-semibold'
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-white group hover:bg-[#0057FF] w-full lg:w-[239px] 
            h-[312px] px-[20px] py-[40px]
            shadow-md"
            >
                <div className="flex flex-col items-center gap-3">
                    <SiCcleaner size={60} className='text-[#0057FF] group-hover:text-white transition-colors'/>
                    <div className="flex flex-col gap-4 items-center text-center">
                        <h3 className='text-[18px] text-[#263a4f] font-semibold group-hover:text-white transition-colors'>
                            Refurbishments
                        </h3>
                        <p className='text-sm md:text-base text-[#8d9aa8] group-hover:text-white transition-colors'>
                            We are committed a sustainable <br className='hidden md:block' /> 
                            future fostering a collaborative spirit.
                        </p>
                        <Link href="/services" 
                        className='text-sm text-[#263a4f] group-hover:text-white transition-colors uppercase hover:text-[#eeeeee]
                        font-semibold'
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-white group hover:bg-[#0057FF] w-full lg:w-[239px] 
            h-[312px] px-[20px] py-[40px]
            shadow-md"
            >
                <div className="flex flex-col items-center gap-3">
                    <MdConveyorBelt size={60} className='text-[#0057FF] group-hover:text-white transition-colors'/>
                    <div className="flex flex-col gap-4 items-center text-center">
                        <h3 className='text-[18px] text-[#263a4f] font-semibold group-hover:text-white transition-colors'>
                            Building Renovation
                        </h3>
                        <p className='text-sm md:text-base text-[#8d9aa8] group-hover:text-white transition-colors'>
                            We are committed a sustainable <br className='hidden md:block' /> future fostering a collaborative spirit.
                        </p>
                        <Link href="/services" 
                        className='text-sm text-[#263a4f] group-hover:text-white transition-colors uppercase hover:text-[#eeeeee]
                        font-semibold'
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default ServicesCards