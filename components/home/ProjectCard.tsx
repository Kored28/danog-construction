"use client"
import React from 'react'
import Link from 'next/link'
import ProjectSlider from '../sliders/ProjectSlider'

const ProjectCard = () => {
  return (
    <div className='flex flex-col w-full lg:w-[1140px] px-[15px] my-[100px] lg:mx-[109px]'>
      <div className="flex items-center relative w-[54px] h-[30px] mb-[10px]">
        <div className='border-[4px] border-[rgba(0,87,255,0.5)] absolute -top-[3px] left-6 w-[20px] h-[24px] py-[13px]
        -z-[1px]'  
        />
        <p className='text-sm text-[#263a4f] font-medium uppercase z-10'>
          Projects
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-0 mb-[40px]">
        <h2 className='text-[24px] md:text-[32px] text-[#263a4f] font-semibold'>
         Discover the most fascinating <br/>projects for our clients
        </h2>
        <Link href="/projects"
          className='flex items-center justify-center gap-2 text-sm text-white font-semibold bg-[#0057FF] rounded-[3px] w-[178px] h-[46px] text-center
          mt-[7px] transition ease-in hover:bg-[#232427] uppercase
          '
        >
         View All Projects
        </Link>
      </div>

      <ProjectSlider />
    </div>
  )
}

export default ProjectCard