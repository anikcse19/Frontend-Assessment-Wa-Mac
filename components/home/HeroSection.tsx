"use client";

import { useState, useEffect } from "react";
import Navbar from "../shared/Navbar";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 2,
    minutes: 41,
    seconds: 17,
  });

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
    <section className="relative min-h-screen pt-20 pb-16 px-6 bg-gradient-to-b from-black to-[#0033A0]">
      <div className="max-w-5xl mx-auto">
        {/* Top Notification Bar */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1E293B]">
            <div className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="text-sm font-normal text-white">
              30% off until {timeLeft.days}d : {timeLeft.hours}h :{" "}
              {timeLeft.minutes}m : {timeLeft.seconds}s
            </span>
          </div>
        </div>

        {/* Headline Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Master Focus & Get More Done in Less Time
          </h1>

          <p className="text-lg text-[#E5E7EB] leading-relaxed mb-8 max-w-2xl mx-auto">
            A step-by-step system to eliminate procrastination, train your brain
            for deep work, and boost productivity effortlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button className="px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-base font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95">
              Enroll now
            </button>
            <button className="px-6 py-3 bg-[#1E293B] hover:bg-[#334155] text-white text-base font-normal rounded-lg transition-all duration-200 hover:scale-105 active:scale-95">
              Curriculum
            </button>
          </div>
        </div>

        {/* Video Card */}
        <div className="relative max-w-4xl mx-auto rounded-xl border border-[#1E293B] overflow-hidden shadow-2xl">
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
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 group">
            {/* Play triangle */}
            <svg
              width="20"
              height="24"
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

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0033A0] to-transparent" />
    </section>
  );
};

export default HeroSection;
