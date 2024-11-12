"use client"
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, useAnimation } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { fadeIn, zoomIn } from '@/utils/motion';



const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controlsImage1 = useAnimation();
  const controlsImage2 = useAnimation();
  const controlsImage3 = useAnimation();

  useEffect(() => {
    if (activeIndex === 0) {
      controls1.start("show");
      controls2.start("hidden");
      controls3.start("hidden");
      controlsImage1.start("show")
      controlsImage2.start("hidden")
      controlsImage3.start("hidden")
    } else if (activeIndex === 1) {
      controls1.start("hidden");
      controls2.start("show");
      controls3.start("hidden");
      controlsImage1.start("hidden")
      controlsImage2.start("show")
      controlsImage3.start("hidden")
    } else if (activeIndex === 2) {
      controls1.start("hidden");
      controls2.start("hidden");
      controls3.start("show");
      controlsImage1.start("hidden")
      controlsImage2.start("hidden")
      controlsImage3.start("show")
    }
  }, [activeIndex, controls1, controls2, controls3, controlsImage1, controlsImage2, controlsImage3])

  return (
    <div className='relative'>
      <Swiper 
      spaceBetween={2} 
      effect={'fade'}
      navigation={{
        prevEl: ".custom-button-prev",
        nextEl: ".custom-button-next"
      }}
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.realIndex)
      }}
      loop={true}
      autoplay={{
        delay: 9000,
        disableOnInteraction: true,
      }}
      pagination={{ clickable: true}} 
      modules={[ Autoplay, EffectFade, Navigation, Pagination ]} 
      className="mySwiper flex w-full gap-2"
      >
        <SwiperSlide className='relative' >
          <motion.div className="bg-hero-one bg-cover bg-center h-[70vh] lg:h-screen" variants={zoomIn({ delay: 1, duration: 6 })} initial="hidden" animate={controlsImage1}>
          </motion.div>
            <div className='bg-[rgba(0,0,0,0.3)] w-full h-[70vh] lg:h-screen absolute top-0 '>
              <div
              className='w-[346px] lg:w-[1114px] h-auto m-[15px] lg:mx-auto flex flex-col gap-3 my-[94px] md:my-[194px]'
              >
                <motion.p 
                variants={fadeIn({ direction: "right", type: "", delay: 1, duration: 1 })}
                initial="hidden"
                animate={controls1}
                className="font-semibold uppercase text-[#FFFFFFCC] text-sm"
                >
                  Residencial
                </motion.p>

                <motion.h4 
                variants={fadeIn({ direction: "left", type: "", delay: 2, duration: 1 })}
                initial="hidden"
                animate={controls1}
                className='text-[26px] lg:text-[42px] text-white font-bold lg:font-semibold h-auto'
                >
                  We provide outstanding construction services
                </motion.h4>

                <motion.p 
                variants={fadeIn({ direction: "left", type: "", delay: 2.6, duration: 1 })}
                initial="hidden"
                animate={controls1}
                className='text-[12px] lg:text-lg text-white font-normal mt-[5px]'
                >
                  We have provided complete remodeling and construction solutions for <br/>residential and commercial properties in cities.
                </motion.p>

                <motion.button
                variants={fadeIn({ direction: "left", type: "", delay: 3, duration: 1 })}
                initial="hidden"
                animate={controls1}
                >
                  <Link href="/projects"
                  className='flex items-center justify-center gap-2 text-sm text-white font-semibold bg-[#0057FF] rounded-[3px] w-[178px] h-[46px] text-center
                  mt-[7px] transition-all-[0.2s] ease-in-out hover:bg-white hover:text-black 
                  '
                  >
                    View Projects
                    <FaArrowRight />
                  </Link>
                </motion.button>
              </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <motion.div className="bg-hero-two bg-cover bg-center h-[70vh] lg:h-screen" variants={zoomIn({ delay: 1, duration: 6 })} initial="hidden" animate={controlsImage2}>
          </motion.div>
          <div className='bg-[rgba(0,0,0,0.3)] w-full h-[70vh] lg:h-screen absolute top-0'>
            <div
            className='w-[346px] lg:w-[1114px] h-auto mx-auto flex flex-col items-center justify-center text-center gap-3 my-[94px] md:my-[194px]'
            >
              <motion.p 
              variants={fadeIn({ direction: "up", type: "", delay: 1, duration: 1 })}
              initial="hidden"
              animate={controls2}
              className="font-semibold uppercase text-[#FFFFFFCC] text-sm"
              >
                Residencial
              </motion.p>

              <motion.h4 
              variants={fadeIn({ direction: "down", type: "", delay: 2, duration: 1 })}
              initial="hidden"
              animate={controls2}
              className='text-[26px] lg:text-[42px] text-white font-bold lg:font-semibold h-auto'
              >
                We are professional <br />
                for building construction.
              </motion.h4>

              <motion.p 
              variants={fadeIn({ direction: "down", type: "", delay: 2.6, duration: 1 })}
              initial="hidden"
              animate={controls2}
              className='text-[12px] lg:text-lg text-white font-normal mt-[5px]'
              >
                We have provided complete remodeling and construction solutions for <br/>residential and commercial properties in cities.
              </motion.p>

              <motion.button
              variants={fadeIn({ direction: "down", type: "", delay: 3, duration: 1 })}
              initial="hidden"
              animate={controls2}
              >
                <Link href="/projects"
                className='flex items-center justify-center gap-2 text-sm text-white font-semibold
                bg-[#0057FF] rounded-[3px] w-[178px] h-[46px] text-center
                mt-[7px] transition-all-[0.2s] ease-in-out hover:bg-white hover:text-black 
                '
                >
                  View Projects
                  <FaArrowRight />
                </Link>
              </motion.button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <motion.div className="bg-hero-three bg-cover h-[70vh] lg:h-screen" 
          variants={zoomIn({ delay: 1, duration: 6 })} initial="hidden" animate={controlsImage3}>
          </motion.div>
          <div className='bg-[rgba(0,0,0,0.3)] w-full h-[70vh] lg:h-screen absolute top-0'>
            <div
            className='w-[346px] md:w-[700px] lg:w-[1114px] h-auto mx-[15px] md:mx-auto flex flex-col 
            md:justify-end md:items-end md:text-end gap-3 my-[94px] md:my-[194px]'
            >
              <motion.p 
              variants={fadeIn({ direction: "left", type: "", delay: 1, duration: 1 })}
              initial="hidden"
              animate={controls3}
              className="font-semibold uppercase text-[#FFFFFFCC] text-sm"
              >
                Residencial
              </motion.p>

              <motion.h4 
              variants={fadeIn({ direction: "right", type: "", delay: 2, duration: 1 })}
              initial="hidden"
              animate={controls3}
              className='text-[24px] lg:text-[42px] text-white font-bold lg:font-semibold h-auto'
              >
                We will be happy to take care <br />
                of your construction works.
              </motion.h4>

              <motion.p 
              variants={fadeIn({ direction: "right", type: "", delay: 2.6, duration: 1 })}
              initial="hidden"
              animate={controls3}
              className='text-[12px] lg:text-lg text-white font-normal mt-[5px]'
              >
                We have provided complete remodeling and construction solutions for <br/>residential and commercial properties in cities.
              </motion.p>

              <motion.button
              variants={fadeIn({ direction: "right", type: "", delay: 3, duration: 1 })}
              initial="hidden"
              animate={controls3}
              >
                <Link href="/projects"
                className='flex items-center justify-center gap-2 text-sm text-white font-semibold bg-[#0057FF] 
                rounded-[3px] w-[178px] h-[46px] text-center
                mt-[7px] transition-all-[0.2s] ease-in-out hover:bg-white hover:text-black 
                '
                >
                  View Projects
                  <FaArrowRight />
                </Link>
              </motion.button>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      {/* Custom Navigation */}
      <div className="custom-button-prev absolute top-1/2 left-0 z-10 cursor-pointer text-white bg-[rgba(0,0,0,0.8)] 
      w-[40px] h-[60px]
      flex items-center px-[10px]"
      >
        <FaChevronLeft size={18} className='text-white'/>
      </div>
      <div className="custom-button-next absolute top-1/2 right-0 z-10 cursor-pointer text-white bg-[rgba(0,0,0,0.8)] w-[40px] h-[60px]
      flex items-center px-[10px]">
        <FaChevronRight size={18} className='text-white'/>
      </div>
    </div>
  )
}

export default HeroSlider