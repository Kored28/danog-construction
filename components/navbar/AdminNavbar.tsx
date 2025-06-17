"use client";

import * as z from 'zod'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";


import { FaBars, FaBell } from 'react-icons/fa6';
import { BsPeople } from 'react-icons/bs';
import { usePathname } from 'next/navigation';
import { VscDashboard } from 'react-icons/vsc';
import { FaPenToSquare } from 'react-icons/fa6';
import { RiDashboardLine } from 'react-icons/ri';
import { HiMagnifyingGlass } from "react-icons/hi2";


import { Input } from '../ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';

const formSchema = z.object({
    search: z.string().min(1, "Required")
})

type SearchFormValues = z.infer<typeof formSchema>

// TOPBAR

const AdminNavbar = () => {
    const form = useForm<SearchFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            search: "",
        }
    })

    const onSubmit = () => {}
  return (
    <div className='bg-[#FFFFFF] flex justify-between items-center h-[70px] px-[30px] shadow-sm'>
        {/* SearchBar */}
        <div className="flex items-center gap-[24px]">
            <FaBars color='#202224' size={20} />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField 
                        control={form.control}
                        name='search'
                        render={({ field }) => (
                            <FormItem >
                                <div className='relative'>
                                    <HiMagnifyingGlass size={15} color='#000000' 
                                    className='absolute top-[10.55px] left-[16px]'
                                    />

                                    <FormControl>
                                        <Input placeholder="Search" {...field} 
                                        className='rounded-full w-[388px] pl-[45px] text-[202224] text-sm'
                                        />
                                    </FormControl>
                                </div>
                            </FormItem>
                        )}
                    />
                </form> 
            </Form>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-[26px]">
            <div className="relative flex">
                <FaBell size={24} color='#4880FF'/>
                <div className='w-[15px] h-[15px] rounded-full bg-[#F93C65]
                absolute top-[-2px] right-[-2px] text-white text-xs flex
                items-center justify-center'
                >
                    6
                </div>
            </div>

            <div className="flex items-center gap-[26px]">
                <div className='w-[30px] h-[30px] rounded-full bg-black'>

                </div>
                <div className="flex flex-col">
                    <h2 className='text-[14px] text-bold'>
                        Mona Lisa
                    </h2>
                    <p className='text-[12px] text-bold'>
                        Admin
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminNavbar