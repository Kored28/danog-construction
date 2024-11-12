import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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

const BlogCard = () => {
  return (
    <div>
        <div className='bg-white flex justify-center w-full h-auto lg:h-[757px] relative py-[100px]'>
            <div className="flex flex-col items-center w-[1140px] z-10">
                <div className="flex flex-col items-center text-center gap-4 mb-[40px]">
                    <div className="flex items-center relative w-[94px] h-[30px]">
                        <div className='border-[4px] border-[rgba(0,87,255,0.5)] absolute -top-[3px] 
                        left-6 w-[21px] h-[24px] py-[13px]
                        -z-[1px]'  
                        />
                        <p className='text-xs text-[#263a4f] font-semibold uppercase'>
                            From Blog
                        </p>
                    </div>

                    <h2 className='text-[32px] text-[#263a4f] font-semibold'>
                        Specialized news
                    </h2>
                </div>

                {/* Blogs */}
                <div className="flex flex-col md:flex-row gap-10 justify-center mx-3 lg:mx-auto">
                    {posts.map((post) => (
                        <div 
                        key={post.id}
                        className="flex flex-col shadow-md"
                        >
                            <div className="relative w-full lg:w-[350px] 
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
                                flex items-center px-[15px] py-[5px] w-auto
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

                            <div className="bg-[#f9fafa] p-[30px] w-full lg:w-[350px]
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
                                className='text-xs md:text-sm text-[#8d9aa8] *:'
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

            </div>
        </div>
    </div>
  )
}

export default BlogCard