"use client";

import { useState, useEffect } from "react";
import Navbar from "../shared/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 2,
    minutes: 41,
    seconds: 17,
  });

  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prev, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return {
            ...prev,
            days: days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }

        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-24 md:pt-32 lg:pt-40 pb-12 md:pb-16 px-4 sm:px-6 bg-[#F8FAFC] dark:bg-[#000000] overflow-hidden">
      {/* Lines background with blur and opacity */}
      <div
        className="absolute bottom-0 left-0 right-0 top-2/5 z-0 opacity-5 "
        style={{
          backgroundImage: "url('/images/lines.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      {/* Bottom background gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-0 blur-3xl opacity-50">
        <Image
          src="/images/BG-Gradient.png"
          alt="Background gradient"
          width={1920}
          height={200}
          className="w-full h-auto"
        />
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Top Notification Bar */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-blue-50 dark:bg-[#1E293B]">
            <div className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="text-xs sm:text-sm font-normal text-gray-800 dark:text-white">
              30% off until {timeLeft.days}d : {timeLeft.hours}h :{" "}
              {timeLeft.minutes}m : {timeLeft.seconds}s
            </span>
          </div>
        </div>

        {/* Headline Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-4 md:mb-6 max-w-4xl mx-auto px-2">
            Master Focus & Get More Done in Less Time
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-[#E5E7EB] leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            A step-by-step system to eliminate procrastination, train your brain
            for deep work, and boost productivity effortlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row items-center justify-center gap-3 md:gap-4 px-4">
            <Button
              variant="primary"
              size="md"
              onClick={() => router.push("#enroll")}
            >
              Enroll now
            </Button>
            <Button
              variant="secondary"
              size="md"
              onClick={() => router.push("#curriculum")}
            >
              Curriculum
            </Button>
          </div>
        </div>

        {/* Video Card */}
        <div className="relative max-w-4xl mx-auto rounded-xl border border-gray-200 dark:border-[#1E293B] overflow-hidden shadow-2xl">
          {/* Video thumbnail / placeholder */}
          <div
            className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center"
            style={{
              backgroundImage: "url('/images/hero-image.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 blur-3xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500 blur-3xl" />
            </div>
          </div>

          {/* Play Button Overlay */}
          <button className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 group">
            {/* Play triangle */}
            <svg
              width="16"
              height="20"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path d="M20 12L0 0V24L20 12Z" fill="#3B82F6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
