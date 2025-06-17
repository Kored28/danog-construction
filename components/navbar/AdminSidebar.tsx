"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


import { BsPeople } from 'react-icons/bs'
import { usePathname } from 'next/navigation'
import { VscDashboard } from 'react-icons/vsc'
import { RiDashboardLine } from 'react-icons/ri'
import { FaPenToSquare } from 'react-icons/fa6'

const AdminSidebar = () => {
    const [active, setActive] = useState("dash")
    const pathname = usePathname();

    const routes = [
        {
            href: `/admin`,
            label: 'Dashboard',
            iconElement: VscDashboard,
            active: pathname ===`/admin`
        },
        {
            href: `/admin/posts`,
            label: 'Posts',
            iconElement: FaPenToSquare,
            active: pathname ===`/admin/posts`
        },
        {
            href: `/admin/projects`,
            label: 'Projects',
            iconElement: RiDashboardLine,
            active: pathname ===`/admin/projects`
        },
        {
            href: `/admin/teams`,
            label: 'Teams',
            iconElement: BsPeople,
            active: pathname ===`/admin/teams`
        },
    ];

  return (
    <div className='w-[250px] h-[100vh] pt-[24px] flex flex-col items-center gap-[30px]
    shadow-md'>
        <div className='flex items-center'>
            <Link
            href="/admin"
            className='cursor-pointer'
            >
                <Image 
                src="/Logo.png"
                alt='Danog'
                width={100}
                height={40}
                className='object-contain'
                />
            </Link>
        </div> 

        <div className="flex flex-col items-center">
            {/* Dashboard */}
            <div className="flex flex-col">
                {routes.map((route) => {
                    const Icon = route.iconElement;
                    return (
                        <Link
                        href={route.href}
                        className='relative'
                        key={route.href}
                        >
                            <div className={route.active ? "w-[9px] h-full bg-[#4880FF] absolute left-[-30px] rounded-lg top-0" : "bg-none"}></div>
                            <div className={`flex items-center gap-[16px] 
                            ${route.active ? "bg-[#4880FF] text-white rounded-md py-[16px] px-[20px]": "py-[16px] px-[20px] text-[#202224]"}
                            `}>
                                <Icon size={22}/> <span className='text-sm font-semibold'>{route.label}</span>
                            </div>
                        </Link>
                    )
                })}

            </div>
        </div>
    </div>
  )
}

export default AdminSidebar