'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

const SearchSection = ({onSearchInput}:any) => {

    const [isFocused, setIsFocused] = useState(false);

    return (
        <div>
            <div className='flex flex-col items-center gap-2 p-10 bg-gradient-to-b from-[#704EF8] via-[#7b5bfc] to-blue-400 text-white'>
                <h2 className='sm:text-4xl text-[30px] font-light'>Browse Your Templates</h2>
                <p className='text-lg font-light'>What would you like to create today?</p>
                <div
                    className={`border-2 bg-white text-black flex items-center p-1 min-w-80 md:min-w-96 h-9 rounded-sm transition-colors duration-300 ${isFocused ? 'border-primary' : 'border-gray-300'
                        }`}
                >
                    {/* Search Icon */}
                    <Search className="text-gray-500 mr-2" />

                    {/* Search Input */}
                    <input
                        type="search"
                        className="outline-none w-full"
                        placeholder="Search AI Templates..."
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={(event) => onSearchInput(event.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchSection
