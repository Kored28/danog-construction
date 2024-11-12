"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

import { GrUserWorker } from 'react-icons/gr'
import { LuFactory } from 'react-icons/lu'
import { PiGearBold } from 'react-icons/pi'

const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div className='flex flex-col lg:flex-row gap-[50px] lg:gap-5 py-[100px] px-[20px] lg:px-[109px]' ref={ref}>
        <motion.div 
            variants={fadeIn({ direction: "right", type: "", delay: 1, duration: 1 })}
            initial="hidden"
            animate={isInView ? "show": "hidden"}
            className="flex flex-col gap-5 w-full lg:w-1/2"
        >
            <h2 className='text-[22px] md:text-[32px] text-[#263a4f] font-semibold -tracking-[1px] w-full lg:w-[540px]'>
                We are the expart on this field better solution <br className='block lg:hidden' /> since 2015.
            </h2>
            <p className='text-[#8d9aa8] text-sm md:text-base'>
                We are committed to building a sustainable future by fostering a collaborative spirit that creates exceptional experiences, balanced relationships, 
                and community built environment. Building isn&apos;t just job. It&apos;s our passion. 
                With every project we undertake, we set the bar high and provide the best industry.
            </p>
        </motion.div>

        <div className="flex flex-col gap-5 w-full lg:w-1/2 lg:pl-[80px]">
            <motion.div 
                variants={fadeIn({ direction: "down", type: "", delay: 1, duration: 1 })}
                initial="hidden"
                animate={isInView ? "show": "hidden"}
                className="flex items-center gap-[30px]"
            >
                <LuFactory size={70} color='#0057FF' />
                <div className="flex flex-col gap-3">
                    <h3 className='text-lg md:text-[24px] text-[#263a4f] font-semibold'>
                        Professional Liability
                    </h3>
                    <p className='text-[#8d9aa8] text-sm md:text-base'>
                        We are committed to building a sustainable future by fostering a collaborative spirit.
                    </p>
                </div>
            </motion.div>
            
            <motion.div 
                variants={fadeIn({ direction: "down", type: "", delay: 1.5, duration: 1 })}
                initial="hidden"
                animate={isInView ? "show": "hidden"}
                className="flex items-center gap-[30px]"

            >
                <GrUserWorker size={70} color='#0057FF' />
                <div className="flex flex-col gap-3">
                    <h3 className='text-lg md:text-[24px] text-[#263a4f] font-semibold'>
                        Dedicated To Our Clients
                    </h3>
                    <p className='text-[#8d9aa8] text-sm md:text-base'>
                        We are committed to building a sustainable future by fostering a collaborative spirit.
                    </p>
                </div>
            </motion.div>
            
            <motion.div 
                variants={fadeIn({ direction: "down", type: "", delay: 2, duration: 1 })}
                initial="hidden"
                animate={isInView ? "show": "hidden"}
                className="flex items-center gap-[30px]"

            >
                <PiGearBold size={70} color='#0057FF' />
                <div className="flex flex-col gap-3">
                    <h3 className='text-lg md:text-[24px] text-[#263a4f] font-semibold'>
                        Outstanding Services
                    </h3>
                    <p className='text-[#8d9aa8] text-sm md:text-base'>
                        We are committed to building a sustainable future by fostering a collaborative spirit.
                    </p>
                </div>
            </motion.div>
            
        </div>
    </div>
  )
}

export default AboutUs