'use client';
import React from 'react';
import ToggleSwitch from '@/components/ToggleSwitch'; // Adjust the path as needed
import { SignIn } from '@clerk/nextjs';

export default function Page() {
  const [darkMode, setDarkMode] = React.useState(false);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} transition-colors duration-500 h-screen`}>
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-800">
        {/* Logo */}
        <div className={`text-black text-2xl font-bold`}>
          Orion AI
        </div>



        {/* Toggle Switch */}
        <ToggleSwitch isOn={darkMode} toggleSwitch={toggleDarkMode} />
      </nav>

      {/* Main Content */}
      <div className="flex items-center flex-col lg:flex-row justify-center min-h-[calc(100vh-62px)] gap-5 lg:gap-0">
        {/* Left Side - Logo and Text */}
        <div className="flex flex-col items-start justify-center pl-0 lg:pl-40 animate-fadeIn">
          <h1 className={`${darkMode ? 'text-white' : 'text-black'} text-5xl font-bold`}>
            Orion AI
          </h1>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-2xl hidden lg:block transition-all duration-500`}>
            Your platform for amazing content. Join us and stay connected!
          </p>
        </div>

        {/* Right Side - Sign In Form */}
        <div className="flex items-center justify-center w-1/2 animate-slideIn">
          <div className="transition-transform duration-300 hover:scale-105">
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}