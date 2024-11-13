"use client"
import React, { useEffect, useState } from 'react'
import ServicesCards from './ServicesCards'
import TestimonalCard from '../home/TestimonalCard';

const items = [
  {
    startValue: 0,
    endValue: 100,
    desc: "Partners Worldwide",
    delay: 1.5,
  },
  {
    startValue: 0,
    endValue: 325,
    desc: "Projects Completed",
    delay: 2,
  },
  {
    startValue: 0,
    endValue: 10,
    desc: "Years of Experience",
    delay: 2.5,
  },
  {
    startValue: 0,
    endValue: 554,
    desc: "Clients Served",
    delay: 3,
  },
];

const Services = () => {

    
  const interval = 5000; // Time in milliseconds for the animation

  // Initialize state for each item's count
  const [counts, setCounts] = useState(items.map(item => item.startValue));

  useEffect(() => {
    items.forEach((item, index) => {
      let startValue = item.startValue;
      const endValue = item.endValue;
      const duration = Math.floor(interval / endValue);

      const counter = setInterval(() => {
        startValue += 1;
        setCounts(prevCounts => {
          const updatedCounts = [...prevCounts];
          updatedCounts[index] = startValue;
          return updatedCounts;
        });

        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }, [])
  
  return (
    <div>
        <div className="flex bg-about-hero bg-cover bg-center bg-no-repeat
        w-full h-[35vh] md:h-[45vh] lg:h-[55vh]
        "
        >
            <div className="flex flex-col items-center justify-center gap-2 w-full
            "
            >
                <h2 className='text-white text-[24px] md:text-[36px]
                font-semibold 
                '
                >
                    Services
                </h2>
                <p className='text-white text-xs md:text-base'
                >
                    What We Offer To Clients
                </p>  
            </div>    
        </div>

        <ServicesCards />

        <div className="bg-count-down bg-cover bg-center w-full h-auto lg:h-[327px]">
            <div className="flex flex-wrap justify-center gap-8
            bg-[rgba(0,0,0,0.7)] w-full h-full py-[100px]
            "
            >
                {items.map((item, index) => (
                    <div key={item.endValue} className="flex flex-col items-center w-[285px] p-[15px] gap-3">
                        <p className='text-[#0057FF] text-[36px] md:text-[48px]
                        '
                        >
                            {counts[index]}
                        </p>
                        <p className='text-white text-sm uppercase font-semibold'>
                            {item.desc}
                        </p>
                    </div>
                ))}   

            </div>
        </div>

        <TestimonalCard  />

    </div>
  )
}

export default Services