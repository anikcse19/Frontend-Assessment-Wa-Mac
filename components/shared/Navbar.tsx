"use client";

import { Moon, X, Menu } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { MdSunny } from "react-icons/md";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "../ui/Button";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-black/40 backdrop-blur-md"
            : "bg-white dark:bg-black"
        }`}
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
              <div className="w-8 h-8 relative brightness-0 dark:brightness-100">
                <Image
                  src="/images/Vector.png"
                  alt="Sunburst Icon"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              {/* PPA Text */}
              <span className="text-gray-900 dark:text-white text-2xl font-bold tracking-tight">
                PPA
              </span>
            </div>

            {/* Navigation Menu - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#overview"
                className="text-gray-700 dark:text-white text-base font-medium hover:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
              >
                Overview
              </a>
              <a
                href="#curriculum"
                className="text-gray-700 dark:text-white text-base font-medium hover:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
              >
                Curriculum
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 dark:text-white text-base font-medium hover:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
              >
                Testimonials
              </a>
              <a
                href="#enroll"
                className="text-gray-700 dark:text-white text-base font-medium hover:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
              >
                Pricing
              </a>
            </div>

            {/* Right Section: Dark Mode Toggle + CTA Button */}
            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle - Both Desktop & Mobile */}
              <button
                onClick={toggleTheme}
                className="relative w-16 h-9 md:w-20 md:h-11 cursor-pointer rounded-full bg-gray-200 dark:bg-[#171B21] flex justify-between items-center p-1 gap-1"
                aria-label="Toggle dark mode"
              >
                <div
                  className={`w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    isDarkMode ? "bg-white dark:bg-[#282D33]" : ""
                  }`}
                >
                  <Moon className="text-gray-500 dark:text-white w-3 h-3 md:w-4 md:h-4" />
                </div>
                <div
                  className={`w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    !isDarkMode ? "bg-white dark:bg-[#282D33]" : ""
                  }`}
                >
                  <MdSunny className="text-gray-500 dark:text-white w-3 h-3 md:w-4 md:h-4" />
                </div>
              </button>

              {/* Enroll Now Button - Desktop Only */}
              <Button
                variant="primary"
                size="md"
                onClick={() => router.push("#enroll")}
                className="hidden md:flex"
              >
                Enroll now
              </Button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-gray-900 dark:text-white p-2"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 dark:bg-black/50 z-50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Mobile Menu Sidebar */}
          <div
            className="absolute right-0 top-0 bottom-0 w-72 bg-white dark:bg-[#0A0A0A] shadow-2xl transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <span className="text-gray-900 dark:text-white text-xl font-bold">
                Menu
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-900 dark:text-white p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col p-6 gap-4">
              <a
                href="#overview"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("overview");
                }}
                className="text-gray-900 dark:text-white text-lg font-medium hover:text-[#2466F2] transition-colors duration-200 py-2"
              >
                Overview
              </a>
              <a
                href="#curriculum"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("curriculum");
                }}
                className="text-gray-900 dark:text-white text-lg font-medium hover:text-[#2466F2] transition-colors duration-200 py-2"
              >
                Curriculum
              </a>
              <a
                href="#testimonials"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("testimonials");
                }}
                className="text-gray-900 dark:text-white text-lg font-medium hover:text-[#2466F2] transition-colors duration-200 py-2"
              >
                Testimonials
              </a>
              <a
                href="#enroll"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("enroll");
                }}
                className="text-gray-900 dark:text-white text-lg font-medium hover:text-[#2466F2] transition-colors duration-200 py-2"
              >
                Pricing
              </a>
            </div>

            {/* Enroll Now Button - Mobile */}
            <div className="absolute bottom-6 left-6 right-6">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavClick("enroll");
                }}
                className="w-full"
              >
                Enroll now
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
