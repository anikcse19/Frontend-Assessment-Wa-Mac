import React from "react";
import Badge from "../shared/Badge";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuBrain, LuRoute } from "react-icons/lu";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { IconCircle } from "../ui/IconCircle";

const Benefits = () => {
  return (
    <div id="overview" className="py-10 md:py-16 lg:py-20">
      {/* section title */}
      <div className="flex flex-col gap-6 md:gap-8 py-16 md:py-24 lg:py-40 px-4 md:px-10">
        <Badge text="The Deep Work Blueprint" />
        <p className="text-2xl md:text-3xl lg:text-[40px] text-gray-800 dark:text-[#E0E3E5] max-w-2xl md:max-w-4xl lg:max-w-150 mx-auto text-center lg:text-left">
          A self-paced, results-driven course designed to help you
        </p>
      </div>
      {/* wrapper */}
      <div className="flex justify-center px-4 md:px-10">
        <div className="flex flex-col max-w-full md:max-w-95 w-full md:w-95 gap-6 md:gap-8">
          {/* point 1 */}
          <div className="flex items-center justify-between w-full gap-4 md:gap-8 lg:gap-15">
            {/* connector */}
            <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8 w-4 md:w-5 shrink-0">
              <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#2466F2]"></span>
              <span
                style={{
                  background:
                    "linear-gradient(180deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)",
                }}
                className="w-0.5 h-20 md:h-28 lg:h-35"
              ></span>
            </div>
            <div className="flex flex-row md:flex-col gap-3 md:gap-5 p-4 md:p-5 flex-1 md:w-75">
              <IconCircle size="md" icon={<HiOutlineLightBulb />} />
              <p className="text-gray-700 dark:text-[#D0D5D9] text-lg md:text-xl lg:text-[24px] leading-[135%] font-normal">
                Develop laser-sharp focus & eliminate distractions.
              </p>
            </div>
          </div>
          {/* point 2 */}
          <div className="flex items-center justify-between w-full gap-4 md:gap-8 lg:gap-15">
            {/* connector */}
            <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8 w-4 md:w-5 shrink-0">
              <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#2466F2]"></span>
              <span
                style={{
                  background:
                    "linear-gradient(180deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)",
                }}
                className="w-0.5 h-20 md:h-28 lg:h-35"
              ></span>
            </div>
            <div className="flex flex-row md:flex-col gap-3 md:gap-5 p-4 md:p-5 flex-1">
              <IconCircle size="md" icon={<LuBrain />} />
              <span className="text-gray-700 dark:text-[#D0D5D9] text-lg md:text-xl lg:text-[22px] leading-[135%] font-normal">
                Master deep work techniques for smarter productivity.
              </span>
            </div>
          </div>
          {/* point 3 */}
          <div className="flex items-center justify-between w-full gap-4 md:gap-8 lg:gap-15">
            {/* connector */}
            <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8 w-4 md:w-5 shrink-0">
              <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#2466F2]"></span>
              <span
                style={{
                  background:
                    "linear-gradient(180deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)",
                }}
                className="w-0.5 h-20 md:h-28 lg:h-35"
              ></span>
            </div>
            <div className="flex flex-row md:flex-col gap-3 md:gap-5 p-4 md:p-5 flex-1">
              <IconCircle size="md" icon={<TbRosetteDiscountCheckFilled />} />
              <span className="text-gray-700 dark:text-[#D0D5D9] text-lg md:text-xl lg:text-[22px] leading-[135%] font-normal">
                Overcome procrastination & get more done.
              </span>
            </div>
          </div>
          {/* point 4 */}
          <div className="flex items-center justify-between w-full gap-4 md:gap-8 lg:gap-15">
            {/* connector */}
            <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8 w-4 md:w-5 shrink-0">
              <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#2466F2]"></span>
              <span
                style={{
                  background:
                    "linear-gradient(180deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)",
                }}
                className="w-0.5 h-20 md:h-28 lg:h-35"
              ></span>
            </div>
            <div className="flex flex-row md:flex-col gap-3 md:gap-5 p-4 md:p-5 flex-1">
              <IconCircle size="md" icon={<LuRoute />} />
              <span className="text-gray-700 dark:text-[#D0D5D9] text-lg md:text-xl lg:text-[22px] leading-[135%] font-normal">
                Build lasting habits for long-term success.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
