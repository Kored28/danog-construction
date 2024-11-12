import Image from 'next/image'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaStar } from "react-icons/fa6";
import { RiDoubleQuotesR } from "react-icons/ri";

import 'swiper/css';

const items = [
    {
        id: 0,
        img: "/testi-1.jpg",
        quote: "Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!",
        name: "Kyle Frederick",
        star: FaStar,
        title: "Director",
        icon: RiDoubleQuotesR,
    },
    {
        id: 1,
        img: "/testi-1.jpg",
        quote: "Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!",
        name: "Kyle Frederick",
        star: FaStar,
        title: "Director",
        icon: RiDoubleQuotesR,
    },
    {
        id: 2,
        img: "/testi-1.jpg",
        quote: "Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!",
        name: "Kyle Frederick",
        star: FaStar,
        title: "Director",
        icon: RiDoubleQuotesR,
    },
]

const TestimonalSlider = () => {

  return (
    <div className='z-10'>
        <Swiper
        spaceBetween={10}
        loop={true}
        breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1 }, 
            1024: { slidesPerView: 2 }, 
        }}
        autoplay={{
            delay: 4000,
        }}
        pagination={{
            clickable: true
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-[310px] sm:w-[480px] md:w-[700px] lg:w-[1140px] flex items-center"
      >
            {items.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="flex items-center gap-2 w-full lg:w-[554px] bg-[#ffffff] border-l-[6px] border-[#0057FF] 
                    p-[30px] 
                    shadow-[rgba(0,0,0,0.1),0px,1px,3px,0px]"
                    >
                        <div className="w-1/2 md:w-1/4 rounded-full">
                            <Image 
                            src={item.img}
                            alt='client image'
                            width={100}
                            height={100}
                            className='rounded-full'
                            />
                        </div>
        
                        <div className="flex flex-col gap-4 w-1/2 md:w-full">
                            <p className="text-xs md:text-base text-[#8d9aa8] leading-6 tracking-[-0.2px]">
                                &quot;{item.quote}&quot;
                            </p>
        
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-[5px]">
                                        <p className="text-xs md:text-base text-[#263a4f] font-semibold">
                                            {item.name}
                                        </p>
        
                                        <div className="flex items-center gap-[3px]">
                                            {Array(5).fill(null).map((_, index) => (
                                                <item.star key={index} fontSize={12} color='#0057FF' />
                                            ))}

                                        </div>
                                    </div>
        
                                    <p className="text-xs text-[#8d9aa8] font-semibold uppercase">
                                        {item.title}
                                    </p>
                                </div>
        
                                <item.icon className='text-[rgba(0,87,255,0.5)] text-[14px] md:text-[50px]' />
        
                            </div>
        
                        </div>
        
                    </div>
                </SwiperSlide>
            ))}

      </Swiper>

    </div>
  )
}

export default TestimonalSlider