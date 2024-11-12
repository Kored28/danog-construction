import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoSearch } from "react-icons/io5";

const posts = [
    {
        id: 0, 
        img: "/post-1.jpg",
        category: "Interior",
        title: "Minimalist trending in modern architecture 2019",
        desc: "Building first evolved out dynamics between needs means available building materials attendant skills.",
    },
    {
        id: 0, 
        img: "/post-1.jpg",
        category: "Architecture",
        title: "Minimalist trending in modern architecture 2019",
        desc: "Building first evolved out dynamics between needs means available building materials attendant skills.",
    },
    {
        id: 0, 
        img: "/post-1.jpg",
        category: "Buildings",
        title: "Minimalist trending in modern architecture 2019",
        desc: "Building first evolved out dynamics between needs means available building materials attendant skills.",
    },
]


const BlogBody = () => {
  return (
    <div className="w-full py-[100px] bg-white">
        <div className="flex flex-col lg:flex-row gap-10 mx-2 lg:mx-[109px]">

            {/* Blogs */}
            <div className="flex flex-col gap-10 justify-center w-full lg:w-[60%]
            "
            >
                {posts.map((post) => (
                    <div 
                    key={post.id}
                    className="flex flex-col shadow-md"
                    >
                        <div className="relative w-full lg:w-[680px]
                        "
                        >
                            <Image 
                            src={post.img}
                            alt={post.category}
                            width={1000}
                            height={182}
                            className='object-contain'
                            />
                            
                            <div className="absolute bottom-0 left-0 bg-[#0057FF]
                            flex items-center px-[15px] py-[8px] w-auto
                            "
                            >
                                <p
                                className='text-xs text-white
                                font-semibold uppercase'
                                >
                                    {post.category}
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#f9fafa] p-[15px] md:p-[30px] w-full lg:w-[680px]
                        flex flex-col gap-3
                        "
                        >
                            <h2
                            className='text-lg text-[#263a4f] font-semibold
                            hover:text-[#0057FF]
                            '
                            >
                                {post.title}
                            </h2>
                            <p
                            className='text-xs md:text-sm text-[#8d9aa8] '
                            >
                                {post.desc}
                            </p>

                            
                            <Link
                            href=""
                            className='flex items-center gap-2 w-full group'
                            >
                                <div 
                                className='bg-[#0057FF] w-5 h-1 
                                group-hover:w-7 group-hover:mr-1
                                transition-[width] ease-in-out duration-500
                                '
                                />
                                <p 
                                className='text-xs text-[#263a4f] group-hover:text-[#0057FF]
                                font-semibold uppercase
                                '
                                >
                                    Read More
                                </p>
                            </Link>
                            
                        </div>

                    </div>
                ))}
            </div>

            {/* Search */}
            <div className="flex flex-col gap-10 w-full lg:w-[40%]">
                <div className='flex'>
                    <input 
                    type="text" 
                    placeholder='Type here'
                    className='bg-[#f5f5f5] w-[80%] lg:w-[312px] h-[56px] px-[20px] py-[15px]
                    border-y-[1px] border-l-[1px] border-[#e5e5e5] rounded-[2px]
                    text-[#263a4f] focus:outline-none text-base
                    '
                    />

                    <button 
                    className='bg-[#f5f5f5] h-[56px] w-[40px] border-y-[1px] border-r-[1px] 
                    border-[#e5e5e5] rounded-[2px] 
                    '
                    >
                        <IoSearch 
                        className='text-[18px] text-[#263a4f] hover:text-[#0057FF] font-semibold
                        ' 
                        />
                    </button>
                </div>
                
                {/* Categories */}
                <div className="flex flex-col gap-[30px]">
                    <div className="relative">
                        <h2 
                        className='text-base md:text-[18px] text-[#263a4f] font-semibold
                        mb-2 
                        '
                        >
                            Categories
                        </h2>

                        <div 
                        className='border-b-[3px] border-[#0057FF] w-[70px]' 
                        />
                    </div>

                    <ul className='flex flex-col gap-2'>
                        <li className='text-sm lg:text-base text-[#8d9aa8] hover:text-[#0057FF]
                        hover:underline
                        '
                        >
                            Architecture
                        </li>
                        <li className='text-sm lg:text-base text-[#8d9aa8] hover:text-[#0057FF]
                        hover:underline
                        '
                        >
                            Interior Design
                        </li>
                        <li className='text-sm lg:text-base text-[#8d9aa8] hover:text-[#0057FF]
                        hover:underline
                        '
                        >
                            Designing
                        </li>
                        <li className='text-sm lg:text-base text-[#8d9aa8] hover:text-[#0057FF]
                        hover:underline
                        '
                        >
                            Construction
                        </li>
                        <li className='text-sm lg:text-base text-[#8d9aa8] hover:text-[#0057FF]
                        hover:underline
                        '
                        >
                            Buildings
                        </li>
                    </ul>
                </div>

                {/* Recent Posts */}
                <div className="flex flex-col gap-[30px]">
                    <div className="relative">
                        <h2 
                        className='text-base md:text-[18px] text-[#263a4f] font-semibold
                        mb-2 
                        '
                        >
                            Recent Posts
                        </h2>

                        <div 
                        className='border-b-[3px] border-[#0057FF] w-[70px]' 
                        />
                    </div>

                    <div className="flex flex-col gap-5">
                        {posts.map((post) => (
                            <div key={post.id} className="flex gap-4">
                                <Image 
                                src={post.img}
                                alt="image"
                                width={100}
                                height={30}
                                className='object-contain'
                                />

                                <Link 
                                href=""
                                className='text-base text-[#263a4f] font-semibold
                                hover:text-[#0057FF] hover:underline
                                '
                                >
                                    {post.title}
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
            
        </div>
    </div>
  )
}

export default BlogBody