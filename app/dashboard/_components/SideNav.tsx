'use client';

import Image from 'next/image';
import { FileClock, Home, Settings2 , WalletCards } from 'lucide-react';

const SideNav = () => {

    const menuList = [
        {
            name: 'Home',
            icon: Home,
            path:'/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path:'/dashboard/history'
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path:'/dashboard/billing'
        },
        {
            name: 'Setting',
            icon: Settings2,
            path:'/dashboard/setting'
        },
    ]

    return (
        <div className="md:w-64 md:block hidden fixed shadow-sm border-r-2 h-screen ">
            <div className="flex items-center mt-3 justify-center py-4 cursor-pointer">
                <div className="relative">
                    <Image
                        className="logo"
                        src="/logo.png"
                        alt="Logo"
                        width={60}
                        height={60}
                        priority
                    />
                </div>
                <span className="ml-2 text-2xl font-semibold text-black">
                    WordFlow AI
                </span>
            </div>

            {/* Animated sidebar with content */}
            <div className="mt-6 p-4 animate-fadeIn">
                <ul className="space-y-4">
                    {menuList.map((menu, index) =>(
                    <li key={index} className="hover:bg-[#E5E5E5] flex items-center gap-3 p-2 rounded transition-all duration-300 cursor-pointer hover:ml-2 text-lg font-light hover:font-medium">
                       <span><menu.icon size={18}/></span>
                       <span>{menu.name}</span>
                    </li>
                    ))} 
                </ul>
            </div>
        </div>
    )
}

export default SideNav
