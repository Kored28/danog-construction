"use client"
import React, { useRef } from 'react'
import ServiceSlider from '../sliders/ServiceSlider'

import { motion, useInView } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

const ServiceCard = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <>
        <div
            className='flex flex-col items-center w-full relative'
        >
            <div className="flex bg-[#232427] absolute top-0 w-full h-[350px] z-[-5px]"/>
            <div className="bg-services-card bg-cover bg-no-repeat w-full lg:w-[1100px] h-[350px] z-10 flex items-center justify-center"
            >
                <motion.div 
                    ref={ref}
                    variants={fadeIn({ direction:"down", type: "", delay: 1, duration: 1 })}
                    animate={isInView ? "show": "hidden" } 
                    className="flex flex-col items-center text-center gap-4 mb-[40px]"
                >
                    <div className="flex items-center relative w-[54px] h-[30px]">
                        <div className='border-[4px] border-[rgba(0,87,255,0.5)] absolute -top-[3px] left-6 w-[20px] h-[24px] py-[13px]
                        -z-[1px]'  
                        />
                        <p className='text-sm text-[#dddddd] font-semibold uppercase z-10'>
                            Services
                        </p>
                    </div>
                    <h2 className='text-[20px] md:text-[32px] text-white font-semibold'>
                        Take the world&apos;s best <br />
                        services for you
                    </h2>
                </motion.div>
            </div>
        </div>
        <ServiceSlider />
    </>
  )
}

export default ServiceCard