"use client"
import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import { Navigation } from 'swiper/modules'

const ProjectSlider = () => {
  return (
    <div className='relative'>
        <Swiper
        spaceBetween={0}
        loop={true}
        breakpoints={{
            370: { slidesPerView: 1 },
            768: { slidesPerView: 2 }, 
            1024: { slidesPerView: 4 }, 
          }}
        navigation={{
            prevEl: ".custom-button-prev",
            nextEl: ".custom-button-next"
        }}
        modules={[ Navigation ]}
        >
            <SwiperSlide>
                <div className="bg-pro-slider1 bg-cover group w-full h-[540px] lg:w-[277px] lg:h-[339px] relative overflow-hidden">
                    <div className='absolute bottom-0 left-0 right-0 group-hover:bg-[rgba(0,87,255,0.5)] h-full flex flex-col justify-end px-[30px] pb-[40px] gap-3
                    transform translate-y-full group-hover:translate-y-0 transition-transform duration-300
                    ease-in-out'
                    >
                        <p className='uppercase text-sm text-white font-semibold'>
                            Interior
                        </p>
                        <Link href="/" className='text-lg text-white font-semibold hover:underline'>
                            Rectangular house near italy
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className="bg-pro-slider2 bg-cover group w-full h-[540px] lg:w-[277px] lg:h-[339px] relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 group-hover:bg-[rgba(0,87,255,0.5)] h-full flex flex-col justify-end px-[30px] pb-[40px] gap-3 
                    transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                        <p className="uppercase text-sm text-white font-semibold">
                            Interior
                        </p>
                        <Link href="/" className="text-lg text-white font-semibold hover:underline">
                            Rectangular house near Italy
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className="bg-pro-slider3 bg-cover group w-full h-[540px] lg:w-[277px] lg:h-[339px] relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 group-hover:bg-[rgba(0,87,255,0.5)] h-full flex flex-col justify-end px-[30px] pb-[40px] gap-3 
                    transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                        <p className="uppercase text-sm text-white font-semibold">
                            Interior
                        </p>
                        <Link href="/" className="text-lg text-white font-semibold hover:underline">
                            Rectangular house near Italy
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className="bg-pro-slider4 bg-cover group w-full h-[540px] lg:w-[277px] lg:h-[339px] relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 group-hover:bg-[rgba(0,87,255,0.5)] h-full flex flex-col justify-end px-[30px] pb-[40px] gap-3 
                    transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                        <p className="uppercase text-sm text-white font-semibold">
                            Interior
                        </p>
                        <Link href="/" className="text-lg text-white font-semibold hover:underline">
                            Rectangular house near Italy
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className="bg-pro-slider5 bg-cover group w-full h-[540px] lg:w-[277px] lg:h-[339px] relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 group-hover:bg-[rgba(0,87,255,0.5)] h-full flex flex-col justify-end px-[30px] pb-[40px] gap-3 
                    transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                        <p className="uppercase text-sm text-white font-semibold">
                            Interior
                        </p>
                        <Link href="/" className="text-lg text-white font-semibold hover:underline">
                            Rectangular house near Italy
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className="bg-pro-slider6 bg-cover group w-full h-[540px] lg:w-[277px] lg:h-[339px] relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0 group-hover:bg-[rgba(0,87,255,0.5)] h-full flex flex-col justify-end px-[30px] pb-[40px] gap-3 
                    transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                        <p className="uppercase text-sm text-white font-semibold">
                            Interior
                        </p>
                        <Link href="/" className="text-lg text-white font-semibold hover:underline">
                            Rectangular house near Italy
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
            
        </Swiper>

        {/* Custom Navigation */}
      <div className="custom-button-prev absolute top-1/2 left-0 lg:left-[-80px] z-10 cursor-pointer bg-white w-[50px] h-[50px]
      flex items-center px-[10px] shadow-md"
      >
        <IoMdArrowDropleft size={18} className='text-black'/>
      </div>
      <div className="custom-button-next absolute top-1/2 right-0 lg:right-[-80px] z-10 cursor-pointer bg-white w-[50px] h-[50px]
      flex items-center px-[10px] shadow-md">
        <IoMdArrowDropright size={18} className='text-black'/>
      </div>
    </div>
  )
}

export default ProjectSlider