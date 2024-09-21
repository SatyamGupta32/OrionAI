'use client';

import Image from 'next/image';
import { FileClock, Home, Settings2, WalletCards } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import UsageTrack from './UsageTrack';

const SideNav = () => {

    const path = usePathname();
    useEffect(() => {
        console.log(path);
    }, [path])

    const menuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path: '/dashboard/billing'
        },
        {
            name: 'Setting',
            icon: Settings2,
            path: '/dashboard/settings'
        },
    ]

    return (
        <div className=" md:w-48 lg:w-64 md:block hidden fixed shadow-sm border-r-2 h-screen bg-white">
            <div className='relative h-full'>
                <div className="flex items-center mt-3 justify-center py-4 cursor-pointer">
                    <div className="relative">
                        <Image
                            className="logo"
                            src="/favicon180.webp"
                            alt="Logo"
                            width={60}
                            height={60}
                            priority
                        />
                    </div>
                    <span className="ml-2 md:text-lg lg:text-2xl font-semibold text-black">
                        OrionAI
                    </span>
                </div>

                <hr className='w-[90%] mx-auto' />

                <div className="pl-3 mt-2 pr-1 animate-fadeIn">
                    <ul className="space-y-4">
                        {menuList.map((menu, index) => (
                            <Link key={index} href={menu.path}>
                                <li className={`hover:bg-[#E5E5E5] flex items-center gap-3 p-2 rounded transition-all duration-500 cursor-pointer hover:ml-3 text-lg font-light hover:font-normal hover:text-gray-400 ${path == menu.path && 'text-primary font-semilight'}`}>
                                    <span><menu.icon size={18} /></span> 
                                    <span>{menu.name}</span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className='w-full absolute bottom-28 left-0'>
                    <UsageTrack />
                </div>
            </div>
        </div>
    )
}

export default SideNav
