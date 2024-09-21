'use client';

import { UserButton } from '@clerk/nextjs';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {

    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className='py-3 px-5 flex flex-col lg:flex-row gap-3 items-center justify-between shadow-sm border-b-2 ml-0 md:ml-48 lg:ml-64 bg-white'>
            <div
                className={`border-2 flex items-center p-1 min-w-80 lg:min-w-96 h-9 rounded-sm transition-colors duration-300 ${isFocused ? 'border-primary' : 'border-gray-300'
                    }`}
            >
                {/* Search Icon */}
                <Search className="text-gray-500 mr-2" />

                {/* Search Input */}
                <input
                    type="search"
                    className="outline-none w-full"
                    placeholder="Search AI tools..."
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </div>

            <div className='bg-primary rounded-sm min-w-80 text-center flex items-center justify-evenly p-2 text-sm text-[#E5E5E5]'>
                <h2>
                    <Link href='/dashboard/billing'>
                        Join Now for $9.99/Month Membership
                    </Link>
                </h2>
                <UserButton />
            </div>
        </div>
    )
}

export default Header
