"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "../shared/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 2,
    minutes: 41,
    seconds: 17,
  });

  const router = useRouter();

  // Animation refs
  const notificationRef = useScrollAnimation<HTMLDivElement>("fadeInDown", {
    duration: 0.6,
  });
  const headingRef = useScrollAnimation<HTMLDivElement>("fadeInUp", {
    delay: 0.2,
    duration: 0.8,
  });
  const subheadingRef = useScrollAnimation<HTMLDivElement>("fadeInUp", {
    delay: 0.4,
    duration: 0.8,
  });
  const buttonsRef = useScrollAnimation<HTMLDivElement>("fadeInUp", {
    delay: 0.6,
    duration: 0.8,
  });
  const heroImageRef = useScrollAnimation<HTMLDivElement>("scaleIn", {
    delay: 0.3,
    duration: 1,
  });
  const bgLinesRef = useRef<HTMLDivElement>(null);
  const bgGradientRef = useRef<HTMLDivElement>(null);

  // Parallax effects for backgrounds
  useEffect(() => {
    const linesBg = bgLinesRef.current;
    const gradientBg = bgGradientRef.current;

    if (linesBg) {
      gsap.to(linesBg, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: linesBg.parentElement,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    if (gradientBg) {
      gsap.to(gradientBg, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: gradientBg.parentElement,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

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
        ref={bgLinesRef}
        className="absolute bottom-0 left-0 right-0 top-2/5 z-0 opacity-90 dark:opacity-5 "
        style={{
          backgroundImage: "url('/images/lines.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      {/* Bottom background gradient overlay */}
      <div
        ref={bgGradientRef}
        className="absolute bottom-12 md:bottom-8 lg:bottom-0 left-0 right-0 z-0 blur-md dark:blur-3xl opacity-100 dark:opacity-50"
      >
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
        <div ref={notificationRef} className="flex justify-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-blue-50 dark:bg-[#1E293B]">
            <div className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="text-xs sm:text-sm font-normal text-gray-800 dark:text-white">
              30% off until {timeLeft.days}d : {timeLeft.hours}h :{" "}
              {timeLeft.minutes}m : {timeLeft.seconds}s
            </span>
          </div>
        </div>

        {/* Hero Heading */}
        <div ref={headingRef} className="text-center mb-6 md:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-gray-900 dark:text-white leading-[110%]">
            Master Focus & Get More Done in Less Time
          </h1>
        </div>

        {/* Subheading */}
        <div ref={subheadingRef} className="text-center mb-8 md:mb-10">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-[#D0D5D9] max-w-3xl mx-auto leading-relaxed">
            A step-by-step system to eliminate procrastination, train your brain
            for deep work, and boost productivity effortlessly.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-row items-center justify-center gap-4 sm:gap-6 mb-10 md:mb-16"
        >
          <Button
            onClick={() => router.push("#enroll")}
            className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg"
          >
            Enroll Now
          </Button>
          <Button
            variant="secondary"
            onClick={() => router.push("#curriculum")}
            className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg"
          >
            Curriculum
          </Button>
        </div>

        {/* Hero Image */}
        <div ref={heroImageRef} className="flex justify-center">
          <Image
            src="/images/hero-image.png"
            alt="Course preview"
            width={1200}
            height={600}
            className="w-full max-w-4xl h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
