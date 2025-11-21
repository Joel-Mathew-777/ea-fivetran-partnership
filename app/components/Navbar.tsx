"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CiLight, CiDark } from "react-icons/ci";
import Link from "next/link";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              // src ="/ea-square.avif"
              src="/ea-logo.png"
              alt="EA Logo"
              width={50}
              height={50}
              className="mt-2"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-[20px] text-primary_red">
                express{" "}
                <span className="text-accent_gray dark:text-white">
                  {" "}
                  analytics
                </span>
              </span>
              <span className="text-[11px] transition-colors duration-300 text-accent_gray dark:text-white">
                AI-Powered Smarter Marketing
              </span>
            </div>
          </Link>
          <div className="flex items-center">
            {/* EA theme */}
            <Link
              href="/pages/fivetran-partnership/ea-theme"
              className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-accent_gray dark:text-white"
            >
              {" "}
              EA Theme{" "}
            </Link>{" "}
            <Link
              href="/pages/fivetran-partnership/creative"
              className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-accent_gray dark:text-white"
            >
              {" "}
              Creative Theme{" "}
            </Link>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                // Sun icon for light mode
                <CiLight size={25} className="text-yellow-500" />
              ) : (
                // Moon icon for dark mode
                <CiDark size={25} className="text-black" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
