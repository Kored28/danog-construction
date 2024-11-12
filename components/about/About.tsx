import React from 'react'
import AboutUs from './AboutUs'
import OurTeam from './OurTeam'

const About = () => {
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
                    About us
                </h2>
                <p className='text-white text-xs md:text-base'
                >
                    Construction & Building Company.
                </p>  
            </div>    
        </div>

        <AboutUs />

        <div className='bg-[#f9fafa] flex justify-center w-full h-auto lg:h-[653px] relative py-[100px]'>
            <div className='bg-dots bg-repeat absolute left-0 right-0 top-0 bottom-0 w-full h-full -z-[10px]' />
            <div className="flex flex-col items-center w-[1140px] z-10">
                <div className="flex flex-col items-center text-center gap-4 mb-[40px]">
                    <div className="flex items-center relative w-[94px] h-[30px]">
                        <div className='border-[4px] border-[rgba(0,87,255,0.5)] absolute -top-[3px] 
                        left-5 w-[21px] h-[24px] py-[13px]
                        -z-[1px]'  
                        />
                        <p className='text-xs text-[#263a4f] font-semibold uppercase'>
                            Our Team
                        </p>
                    </div>

                    <h2 className='text-[32px] text-[#263a4f] font-semibold'>
                        Who works here
                    </h2>
                </div>
                <OurTeam />
            </div>
        </div>
        
    </div>
  )
}

export default About