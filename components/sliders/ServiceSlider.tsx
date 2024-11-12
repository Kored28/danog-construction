"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link';

import { BsBuildingGear } from "react-icons/bs";
import { IoConstructOutline } from "react-icons/io5";
import { SiCcleaner } from "react-icons/si";
import { MdConveyorBelt } from "react-icons/md";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { Navigation } from 'swiper/modules';
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";


const ServiceSlider = () => {
  return (
    <div className='relative w-full sm:w-[380px] md:w-full lg:w-[1140px] justify-center mx-auto mb-[100px] -mt-[80px]'>
      <Swiper
      spaceBetween={0}
      loop={true}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 }, 
        1024: { slidesPerView: 4 }, 
      }}
      navigation={{
        prevEl: ".custom-button-prev",
        nextEl: ".custom-button-next"
      }}
      modules={[Navigation]}
      className="lg:w-[954px] h-[312px] flex items-center px-[15px] shadow-lg bg-white"
      >
        <SwiperSlide className='bg-white group hover:bg-[#0057FF] w-[230px] h-[312px] px-[20px] py-[40px]'>
          <div className="flex flex-col items-center gap-3">
            <BsBuildingGear size={60} className='text-[#0057FF] group-hover:text-white transition-colors'/>
            <div className="flex flex-col gap-4 items-center text-center">
              <h3 className='text-[18px] text-[#263a4f] font-semibold group-hover:text-white transition-colors'>
                General Building
              </h3>
              <p className='text-sm md:text-base text-[#8d9aa8] group-hover:text-white transition-colors'>
                We are committed a sustainable <br className='flex md:block' />
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
        </SwiperSlide>
        
        <SwiperSlide className='bg-white group hover:bg-[#0057FF] w-[234px] h-[312px] px-[20px] py-[40px]'>
          <div className="flex flex-col items-center gap-3">
            <IoConstructOutline size={60} className='text-[#0057FF] group-hover:text-white transition-colors'/>
            <div className="flex flex-col gap-4 items-center text-center">
              <h3 className='text-[18px] text-[#263a4f] font-semibold group-hover:text-white transition-colors'>
                Building Construction
              </h3>
              <p className='text-sm md:text-base text-[#8d9aa8] group-hover:text-white transition-colors'>
                We are committed a sustainable <br className='flex md:block' />
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
        </SwiperSlide>
        
        <SwiperSlide className='bg-white group hover:bg-[#0057FF] w-[230px] h-[312px] px-[20px] py-[40px]'>
          <div className="flex flex-col items-center gap-3">
            <SiCcleaner size={60} className='text-[#0057FF] group-hover:text-white transition-colors'/>
            <div className="flex flex-col gap-4 items-center text-center">
              <h3 className='text-[18px] text-[#263a4f] font-semibold group-hover:text-white transition-colors'>
                Refurbishments
              </h3>
              <p className='text-sm md:text-base text-[#8d9aa8] group-hover:text-white transition-colors'>
                We are committed a sustainable <br className='flex md:block' /> 
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
        </SwiperSlide>
        
        <SwiperSlide className='bg-white group hover:bg-[#0057FF] w-[230px] h-[312px] px-[20px] py-[40px]'>
          <div className="flex flex-col items-center gap-3">
            <MdConveyorBelt size={60} className='text-[#0057FF] group-hover:text-white transition-colors'/>
            <div className="flex flex-col gap-4 items-center text-center">
              <h3 className='text-[18px] text-[#263a4f] font-semibold group-hover:text-white transition-colors'>
                Building Renovation
              </h3>
              <p className='text-sm md:text-base text-[#8d9aa8] group-hover:text-white transition-colors'>
                We are committed a sustainable <br className='flex md:block' /> future fostering a collaborative spirit.
              </p>
              <Link href="/services" 
              className='text-sm text-[#263a4f] group-hover:text-white transition-colors uppercase hover:text-[#eeeeee]
              font-semibold'
              >
                Read More
              </Link>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide className='bg-white group hover:bg-[#0057FF] w-[230px] h-[312px] px-[20px] py-[40px]'>
          <div className="flex flex-col items-center gap-3">
            <MdOutlineMapsHomeWork size={60} className='text-[#0057FF] group-hover:text-white transition-colors'/>
            <div className="flex flex-col gap-4 items-center text-center">
              <h3 className='text-[18px] text-[#263a4f] font-semibold group-hover:text-white transition-colors'>
                Architectural Plans
              </h3>
              <p className=' text-base text-[#8d9aa8] group-hover:text-white transition-colors'>
                We are committed a sustainable <br className='flex md:block' />
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
        </SwiperSlide>
      </Swiper> 

      {/* Custom Navigation */}
      <div className="custom-button-prev absolute top-1/2 left-0 md:left-5 z-10 cursor-pointer bg-white w-[50px] h-[50px]
      flex items-center px-[10px] shadow-md"
      >
        <IoMdArrowDropleft size={18} className='text-black'/>
      </div>
      <div className="custom-button-next absolute top-1/2 right-0 md:right-5 z-10 cursor-pointer bg-white w-[50px] h-[50px]
      flex items-center px-[10px] shadow-md">
        <IoMdArrowDropright size={18} className='text-black'/>
      </div>

    </div>
  )
}

export default ServiceSlider