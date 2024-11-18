import React from 'react'
import BlogBody from './BlogBody'

const Blog = () => {
  return (
    <div className='max-w-[1440px] '>
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
                    Speciallized news
                </h2>
                <p className='text-white text-xs md:text-base'
                >
                    Construction & Building Company.
                </p>  
            </div>    
        </div>

        <BlogBody />
    </div>
  )
}

export default Blog