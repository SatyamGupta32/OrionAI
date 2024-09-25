'use client';

import React from 'react';
import { SignIn } from '@clerk/nextjs';

export default function Page() {

  return (
    <div className={`bg-gray-100 text-black' transition-colors duration-500 h-screen`}>
 
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-800">

        <div className={`text-black text-2xl font-bold`}>
          Orion AI
        </div>

      </nav>

      <div className="flex items-center flex-col lg:flex-row justify-center min-h-[calc(100vh-62px)] gap-5 lg:gap-0">

        <div className="flex flex-col items-start justify-center pl-0 lg:pl-8 xl:pl-40 animate-fadeIn">
          <h1 className={` text-black text-5xl font-bold`}>
            Orion AI
          </h1>
          <p className={`text-gray-700 text-2xl hidden lg:block transition-all duration-500`}>
            Your platform for amazing content. Join us and stay connected!
          </p>
        </div>

        <div className="flex items-center justify-center w-1/2 animate-slideIn">
          <div className="transition-transform duration-300 hover:scale-105">
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}