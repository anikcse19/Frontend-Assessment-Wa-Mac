"use client";

import { Moon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav
      className="sticky top-0 left-0 right-0 z-50 bg-black"
      style={{
        borderBottom: "1px solid",
        borderImageSource:
          "linear-gradient(90deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)",
        borderImageSlice: "1",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            {/* Sunburst Icon */}
            <div className="w-8 h-8 relative">
              <Image
                src="/images/Vector.png"
                alt="Sunburst Icon"
                layout="fill"
                objectFit="contain"
              />
            </div>
            {/* PPA Text */}
            <span className="text-white text-2xl font-bold tracking-tight">
              PPA
            </span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#overview"
              className="text-white text-base font-medium hover:text-gray-200 transition-colors duration-200"
            >
              Overview
            </a>
            <a
              href="#curriculum"
              className="text-white text-base font-medium hover:text-gray-200 transition-colors duration-200"
            >
              Curriculum
            </a>
            <a
              href="#testimonials"
              className="text-white text-base font-medium hover:text-gray-200 transition-colors duration-200"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-white text-base font-medium hover:text-gray-200 transition-colors duration-200"
            >
              Pricing
            </a>
          </div>

          {/* Right Section: Dark Mode Toggle + CTA Button */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative w-20 h-11 rounded-full bg-[#171B21] flex justify-between items-center p-1"
              aria-label="Toggle dark mode"
            >
              <div className="w-9 h-9 rounded-full bg-[#282D33] flex items-center justify-center relative transition-transform duration-200 transform">
                <Moon className="text-white w-4 h-4" />
              </div>
              <div className="w-9 h-9 rounded-full  flex items-center justify-center relative transition-transform duration-200 transform">
                <MdSunny className="text-white w-4 h-4" />
              </div>{" "}
            </button>

            {/* Enroll Now Button */}
            <button className="bg-[#2466F2] text-white text-base font-bold px-5 py-3 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95">
              Enroll now
            </button>

            {/* Mobile menu button */}
            <button className="md:hidden text-white p-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
