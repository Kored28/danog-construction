"use client"
import React from 'react'
import TestimonalSlider from '../sliders/TestimonalSlider'

const TestimonalCard = () => {
  return (
    <div className='bg-[#f9fafa] flex justify-center w-full h-auto lg:h-[553px] relative py-[100px]'>
        <div className='bg-dots bg-repeat absolute left-0 right-0 top-0 bottom-0 w-full h-full -z-[10px]' />
        <div className="flex flex-col items-center w-[1140px]">
            <div className="flex flex-col items-center text-center gap-4 mb-[40px]">
                <div className="flex items-center relative w-[54px] h-[30px]">
                    <div className='border-[4px] border-[rgba(0,87,255,0.5)] absolute -top-[3px] left-7 w-[21px] h-[24px] py-[13px]
                    -z-[1px]'  
                    />
                    <p className='text-xs text-[#263a4f] font-semibold uppercase z-10'>
                        Testimonal
                    </p>
                </div>

                <h2 className='text-[32px] text-[#263a4f] font-semibold z-10'>
                    What people says 
                </h2>
            </div>
            <TestimonalSlider />
        </div>
    </div>
  )
}

export default TestimonalCard