"use client";

import { useRef } from "react";
import Badge from "../shared/Badge";
import VideoCard from "../testimonials/video-card";
import TextCard from "../testimonials/text-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonial = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="testimonials" className="py-10 md:py-16 lg:py-20 w-full">
      {/* header */}
      <div className="flex flex-col gap-6 md:gap-8 py-16 md:py-24 lg:py-40 px-4 md:px-10">
        <Badge text="Testimonials" />
        <h2 className="text-4xl md:text-5xl lg:text-[52px] tracking-tighter leading-[115%] text-center text-[#E0E3E5] max-w-xl md:max-w-2xl lg:max-w-100 mx-auto">
          Real Results from Real People
        </h2>
      </div>
      {/* testimonials */}
      <section className="text-white flex flex-col gap-6 md:gap-8 px-4 md:px-6">
        {/* Header Area */}
        <div className="flex flex-row justify-between items-center gap-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-left sm:text-left lg:px-8">
            Join with 5K other students
          </h2>
          <div className="flex gap-2 md:gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-2 md:p-3 rounded-full bg-[#1A1C20] hover:bg-[#2A2D32] transition-colors cursor-pointer"
            >
              <ChevronLeft size={18} className="md:w-5 md:h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 md:p-3 rounded-full bg-[#1A1C20] hover:bg-[#2A2D32] transition-colors cursor-pointer"
            >
              <ChevronRight size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
        >
          <TextCard
            avatar="/images/testimonials/Avatar1.png"
            text="As someone who juggles multiple projects, staying focused was always a challenge. This course gave me the tools to cut through distractions and work with absolute clarity. My productivity has never been better!"
            name="Alex Carter"
            role="Freelance Designer"
          />
          <VideoCard
            avatar="/images/testimonials/Avatar2.png"
            bgImage="/images/testimonials/video-bg1.jpg"
            name="Daniel Foster"
            role="Content creator"
          />
          <TextCard
            avatar="/images/testimonials/Avatar3.png"
            text="I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!"
            name="Mark Davidson"
            role="Software Developer"
          />
          <VideoCard
            avatar="/images/testimonials/Avatar4.png"
            bgImage="/images/testimonials/video-bg2.jpg"
            name="Tom David"
            role="Entrepreneur"
          />
          <TextCard
            avatar="/images/testimonials/Avatar3.png"
            text="I never realized how much distractions were holding me back. After applying the deep work techniques, I feel more in control of my time and energy. My efficiency has doubled!"
            name="Mark Davidson"
            role="Software Developer"
          />
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
