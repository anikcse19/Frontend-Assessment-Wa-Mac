"use client";

import { useState } from "react";
import Badge from "../shared/Badge";
import LessonRow from "../curriculum/lesson-row";
import ModuleHeader from "../curriculum/module-header";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { FaCaretUp } from "react-icons/fa";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Module {
  id: string;
  title: string;
  duration: string;
  lessons: {
    id: string;
    title: string;
    duration: string;
    hasPreview: boolean;
  }[];
}

const modules: Module[] = [
  {
    id: "1",
    title: "Module 1: Foundations of Deep Work",
    duration: "1.7h of video",
    lessons: [
      {
        id: "1-1",
        title: "Understanding Focus &amp; Distraction",
        duration: "14:23",
        hasPreview: true,
      },
      {
        id: "1-2",
        title: "The Science of Deep Work",
        duration: "22:51",
        hasPreview: false,
      },
      {
        id: "1-3",
        title: "Indentifying Your Productivity Killers",
        duration: "34:42",
        hasPreview: false,
      },
      {
        id: "1-4",
        title: "How to Strengthen Your Attention Span",
        duration: "27:08",
        hasPreview: false,
      },
    ],
  },
  {
    id: "2",
    title: "Module 2: Building Your Deep Work Routine",
    duration: "1.3h of video",
    lessons: [
      {
        id: "2-1",
        title: "Designing a Distraction-Free Workspace",
        duration: "14:23",
        hasPreview: false,
      },
      {
        id: "2-2",
        title: "Creating a Deep Work Schedule",
        duration: "22:51",
        hasPreview: false,
      },
      {
        id: "2-3",
        title: "The Roles of Breaks &amp; Recovery",
        duration: "34:42",
        hasPreview: false,
      },
    ],
  },
  {
    id: "3",
    title: "Module 3: Eliminating Procrastination",
    duration: "1.5h of video",
    lessons: [
      {
        id: "3-1",
        title: "The Psychology of Procrastination",
        duration: "14:23",
        hasPreview: false,
      },
      {
        id: "3-2",
        title: "Actionable Strategies to Overcome It",
        duration: "22:51",
        hasPreview: false,
      },
    ],
  },
  {
    id: "4",
    title: "Module 4: Advanced Focus &amp; Productivity Hacks",
    duration: "1.2h of video",
    lessons: [
      {
        id: "4-1",
        title: "Optimizing Energy &amp; Mental Clarity",
        duration: "14:23",
        hasPreview: false,
      },
      {
        id: "4-2",
        title: "The 80/20 Rule for Maximum Efficiency",
        duration: "22:51",
        hasPreview: false,
      },
      {
        id: "4-3",
        title: "Maintaining Long-Term Focus Habits",
        duration: "34:42",
        hasPreview: false,
      },
      {
        id: "4-4",
        title: "How to Stay Consistent Over",
        duration: "27:08",
        hasPreview: false,
      },
    ],
  },
];

const Curriculum = () => {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    new Set(["1"]),
  );

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(moduleId)) {
        newSet.delete(moduleId);
      } else {
        newSet.add(moduleId);
      }
      return newSet;
    });
  };

  const headerRef = useScrollAnimation<HTMLDivElement>("fadeInUp", {
    duration: 0.8,
  });
  const leftSectionRef = useScrollAnimation<HTMLDivElement>("fadeInLeft", {
    delay: 0.2,
    duration: 0.8,
  });
  const rightSectionRef = useScrollAnimation<HTMLDivElement>("fadeInRight", {
    delay: 0.3,
    duration: 0.8,
  });

  return (
    <div id="curriculum" className="flex flex-col py-10 md:py-16 lg:py-20">
      {/* header */}
      <div
        ref={headerRef}
        className="flex flex-col gap-6 md:gap-8 py-16 md:py-24 lg:py-40 px-4 md:px-10"
      >
        <Badge text="Course Curriculum" />
        <h2 className="text-gray-800 dark:text-[#E0E3E5] text-2xl md:text-3xl lg:text-[40px] max-w-2xl md:max-w-4xl lg:max-w-160 mx-auto text-center leading-[115%] tracking-tighter">
          Mastering Deep Work: A Structured Path to Peak Productivity
        </h2>
      </div>
      {/* content */}
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-15 px-4 md:px-10 lg:justify-center">
        {/* left */}
        <div
          ref={leftSectionRef}
          className="flex flex-col w-full lg:max-w-140 pt-10 md:pt-16 lg:pt-25"
        >
          {modules.map((module) => (
            <div key={module.id} className="flex flex-col">
              {/* module header */}
              <div
                onClick={() => toggleModule(module.id)}
                className="cursor-pointer flex items-center justify-between gap-4 md:gap-8 lg:gap-10 py-4 md:py-6 lg:py-8 px-4 md:px-6 rounded-3xl relative select-none"
                style={{
                  borderBottom: "1px solid",
                  borderImageSource:
                    "linear-gradient(90deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)",
                  borderImageSlice: "1",
                }}
              >
                <div className="flex flex-col gap-1 md:gap-2">
                  <p className="text-gray-700 dark:text-[#D0D5D9] text-base md:text-lg lg:text-[20px] leading-[135%] font-medium">
                    {module.title}
                  </p>
                  <p className="text-gray-500 dark:text-[#AAAEB2] text-sm md:text-[15px] leading-[135%]">
                    {module.duration}
                  </p>
                </div>
                <FaCaretUp
                  className={`text-gray-900 dark:text-white w-6 h-6 md:w-8 md:h-8 shrink-0 transition-transform duration-300 ${
                    expandedModules.has(module.id) ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* videos */}
              <div
                className={`flex flex-col px-4 md:px-6 overflow-hidden transition-all duration-300 ${
                  expandedModules.has(module.id)
                    ? "max-h-[1000px] opacity-100 pb-4 md:pb-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                {module.lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    style={{
                      borderBottom:
                        index < module.lessons.length - 1
                          ? "1px solid"
                          : "none",
                      borderImageSource:
                        "linear-gradient(90deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)",
                      borderImageSlice: "1",
                    }}
                    className="flex items-center justify-between gap-2 md:gap-4 py-4 md:py-6 lg:py-8"
                  >
                    <Image
                      src={`/icons/play-sm${index === 0 ? "" : "-dis"}.png`}
                      alt="play"
                      width={32}
                      height={32}
                      className="w-6 h-6 md:w-8 md:h-8 shrink-0"
                    />
                    <p className="text-gray-500 dark:text-[#AAAEB2] text-sm md:text-base lg:text-[17px] leading-[135%] flex-1">
                      {lesson.title}
                    </p>
                    <div className="flex items-center gap-3 md:gap-4 lg:gap-6 shrink-0">
                      {lesson.hasPreview && (
                        <div className="bg-blue-50 dark:bg-[#171B21] py-1 px-2 md:px-3 lg:px-4 flex items-center justify-center rounded-lg">
                          <p className="text-[#669EFF] text-xs md:text-sm lg:text-[15px] leading-[135%] whitespace-nowrap">
                            Preview
                          </p>
                        </div>
                      )}
                      <p className="text-gray-500 dark:text-[#AAAEB2] text-sm md:text-base lg:text-[17px] leading-[135%] whitespace-nowrap">
                        {lesson.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* right */}
        <div
          ref={rightSectionRef}
          className="pt-10 md:pt-16 lg:pt-25 w-full lg:w-auto"
        >
          <div className="lg:sticky lg:top-24">
            <div
              className="flex flex-col justify-start rounded-3xl bg-white dark:bg-[#111214] px-5 md:px-6 lg:px-8 pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 gap-8 md:gap-12 lg:gap-16 relative"
              style={{
                boxShadow: "0px 8px 40px 0px #2466F226",
              }}
            >
              {/* Gradient border overlay */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  padding: "1px",
                  background:
                    "radial-gradient(61.03% 66.18% at 50% 50%, #2466F2 0%, rgba(36, 102, 242, 0) 100%)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              ></div>
              {/* Pricing header */}
              <div className="relative z-10">
                <h2 className="text-gray-800 dark:text-[#E0E3E5] text-xl md:text-2xl lg:text-[30px] leading-[135%] font-medium">
                  Not Only Video Lessons!
                </h2>
              </div>

              {/* Features */}
              <div className="flex flex-col justify-baseline gap-4 md:gap-6 relative z-10">
                <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
                  <div
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-white dark:bg-[#171B21] flex items-center justify-center relative shrink-0"
                    style={{
                      boxShadow: "0px 8px 40px 0px #2466F226",
                    }}
                  >
                    {/* Gradient border overlay */}
                    <div
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{
                        padding: "1px",
                        background:
                          "radial-gradient(61.03% 66.18% at 50% 50%, #2466F2 0%, rgba(36, 102, 242, 0) 100%)",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    ></div>
                    <TbRosetteDiscountCheckFilled className="text-[#2466F2] dark:text-white w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
                  </div>
                  <span className="text-gray-700 dark:text-[#D0D5D9] text-sm md:text-[15px] leading-[135%] font-normal">
                    6h of videos - Step-by-step deep work strategies.
                  </span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
                  <div
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-white dark:bg-[#171B21] flex items-center justify-center relative shrink-0"
                    style={{
                      boxShadow: "0px 8px 40px 0px #2466F226",
                    }}
                  >
                    {/* Gradient border overlay */}
                    <div
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{
                        padding: "1px",
                        background:
                          "radial-gradient(61.03% 66.18% at 50% 50%, #2466F2 0%, rgba(36, 102, 242, 0) 100%)",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    ></div>
                    <TbRosetteDiscountCheckFilled className="text-[#2466F2] dark:text-white w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
                  </div>
                  <span className="text-gray-700 dark:text-[#D0D5D9] text-sm md:text-[15px] leading-[135%] font-normal">
                    Templates &amp; Trackers – Stay on track effortlessly.
                  </span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
                  <div
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-white dark:bg-[#171B21] flex items-center justify-center relative shrink-0"
                    style={{
                      boxShadow: "0px 8px 40px 0px #2466F226",
                    }}
                  >
                    {/* Gradient border overlay */}
                    <div
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{
                        padding: "1px",
                        background:
                          "radial-gradient(61.03% 66.18% at 50% 50%, #2466F2 0%, rgba(36, 102, 242, 0) 100%)",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    ></div>
                    <TbRosetteDiscountCheckFilled className="text-[#2466F2] dark:text-white w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
                  </div>
                  <span className="text-gray-700 dark:text-[#D0D5D9] text-sm md:text-[15px] leading-[135%] font-normal">
                    Live Q&amp;As – Expert guidance &amp; accountability.
                  </span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
                  <div
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-white dark:bg-[#171B21] flex items-center justify-center relative shrink-0"
                    style={{
                      boxShadow: "0px 8px 40px 0px #2466F226",
                    }}
                  >
                    {/* Gradient border overlay */}
                    <div
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{
                        padding: "1px",
                        background:
                          "radial-gradient(61.03% 66.18% at 50% 50%, #2466F2 0%, rgba(36, 102, 242, 0) 100%)",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    ></div>
                    <TbRosetteDiscountCheckFilled className="text-[#2466F2] dark:text-white w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
                  </div>
                  <span className="text-gray-700 dark:text-[#D0D5D9] text-sm md:text-[15px] leading-[135%] font-normal">
                    Exclusive Community – Connect with others.
                  </span>
                </div>
              </div>

              {/* button */}
              <div className="bg-[#2466F2] py-2 md:py-3 lg:py-3 px-4 md:px-5 rounded-xl flex items-center justify-center relative z-10">
                <a
                  href="#enroll"
                  className="font-medium leading-[135%] text-sm md:text-base lg:text-[17px] text-white"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
