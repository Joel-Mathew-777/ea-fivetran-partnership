"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLight, CiDark } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark") || window.matchMedia("(prefers-color-scheme: dark)").matches || localStorage.getItem("theme") === "dark";
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "light" : "dark");
    setIsDark(!isDark);
  };

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src="/ea-logo.png"
                alt="EA Logo"
                width={50}
                height={50}
                className="mt-2"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-semibold text-[20px] text-primary_red">
                  express{" "}
                  <span className="text-accent_gray dark:text-white">analytics</span>
                </span>
                <span className="text-[11px] text-accent_gray dark:text-white transition">
                  AI-Powered Smarter Marketing
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/pages/fivetran-partnership/ea-theme"
                className="px-4 py-2 rounded-lg hover:bg-gray-200 font-bold dark:hover:bg-gray-800 transition text-accent_gray dark:text-white"
              >
                EA Theme
              </Link>

              <Link
                href="/pages/fivetran-partnership/creative"
                className="px-4 py-2 rounded-lg hover:bg-gray-200 font-bold dark:hover:bg-gray-800 transition text-accent_gray dark:text-white"
              >
                Creative Theme
              </Link>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <CiLight size={25} className="text-yellow-500" />
                ) : (
                  <CiDark size={25} className="text-black dark:text-white" />
                )}
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center md:hidden space-x-2">

              {/* Dark Mode Toggle (Mobile) */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDark ? (
                  <CiLight size={25} className="text-yellow-500" />
                ) : (
                  <CiDark size={25} className="text-black dark:text-white" />
                )}
              </button>

              {/* Hamburger Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors md:hidden"
              >
                {menuOpen ? (
                  <FiX size={26} className="text-accent_gray dark:text-white" />
                ) : (
                  <FiMenu size={26} className="text-accent_gray dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 space-y-2 sticky top-16 z-40 shadow-sm">
          <Link
            href="/pages/fivetran-partnership/ea-theme"
            className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-accent_gray dark:text-white"
            onClick={() => setMenuOpen(false)}
          >
            EA Theme
          </Link>
          
          <Link
            href="/pages/fivetran-partnership/creative"
            className="block px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-accent_gray dark:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Creative Theme
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
