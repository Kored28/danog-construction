import React from 'react'

const Structure = () => {
  return (
    <div className='bg-structure bg-cover w-full h-auto lg:h-[388px]'>
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 bg-[rgba(35,36,39,0.8)] w-full h-auto lg:h-[388px]  
        py-[50px]"
        >

            <div className="flex flex-col items-center gap-4 w-[255px] px-[15px] z-10">
                <div className='bg-[#0057FF] w-[50px] h-[50px] rounded-full flex items-center justify-center'>
                    <p className='text-base text-white font-semibold'>
                        1
                    </p>
                </div>
                <h3 className='text-lg text-white font-semibold'>
                    Planning & Research
                </h3>
                <p className='text-sm text-[#dddddd] text-center tracking-normal leading-6'>
                    We are committed building a sustainable future fostering a collaborative spirit.
                </p>
            </div>
            
            <div className="flex flex-col items-center gap-4 w-[255px] px-[15px] z-10">
                <div className='bg-[#0057FF] w-[50px] h-[50px] rounded-full flex items-center justify-center'>
                    <p className='text-base text-white font-semibold'>
                        2
                    </p>
                </div>
                <h3 className='text-lg text-white font-semibold'>
                    Design & Ideas
                </h3>
                <p className='text-sm text-[#dddddd] text-center tracking-normal leading-6'>
                    We are committed building a sustainable future fostering a collaborative spirit.
                </p>
            </div>
            
            <div className="flex flex-col items-center gap-4 w-[255px] px-[15px] z-10">
                <div className='bg-[#0057FF] w-[50px] h-[50px] rounded-full flex items-center justify-center'>
                    <p className='text-base text-white font-semibold'>
                        3
                    </p>
                </div>
                <h3 className='text-lg text-white font-semibold'>
                    Specialized Projects
                </h3>
                <p className='text-sm text-[#dddddd] text-center tracking-normal leading-6'>
                    We are committed building a sustainable future fostering a collaborative spirit.
                </p>
            </div>
            
            <div className="flex flex-col items-center gap-4 w-[255px] px-[15px] z-10">
                <div className='bg-[#0057FF] w-[50px] h-[50px] rounded-full flex items-center justify-center'>
                    <p className='text-base text-white font-semibold'>
                        4
                    </p>
                </div>
                <h3 className='text-lg text-white font-semibold'>
                    Final Outputs
                </h3>
                <p className='text-sm text-[#dddddd] text-center tracking-normal leading-6'>
                    We are committed building a sustainable future fostering a collaborative spirit.
                </p>
            </div>

            <div className='hidden lg:block w-[900px] h-[2px] bg-[rgba(115,116,116,0.2)] absolute top-[125px] z-0' />
            
        </div>
    </div>
  )
}

export default Structure