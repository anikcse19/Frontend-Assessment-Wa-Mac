import React from "react";
import Badge from "../shared/Badge";
import Image from "next/image";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuBrain, LuRoute } from "react-icons/lu";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

const Benefits = () => {
  return (
    <div className="py-20">
      {/* section title */}
      <div className="flex flex-col gap-8 py-40 px-10">
        <Badge text="The Deep Work Blueprint" />
        <p className="text-[40px] text-[#E0E3E5] max-w-150 mx-auto">
          A self-paced, results-driven course designed to help you
        </p>
      </div>
      {/* wrapper */}
      <div className="flex justify-center">
        <div className="flex flex-col max-w-95 w-95 gap-8">
          {/* point 1 */}
          <div className="flex items-center justify-between w-full gap-15">
            {/* connector */}
            <div className="flex flex-col items-center gap-8 w-5">
              <span className="w-5 h-5 rounded-full bg-[#2466F2]"></span>
              <span
                style={{
                  background:
                    "linear-gradient(180deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)",
                }}
                className="w-0.5 h-35"
              ></span>
            </div>
            <div className="flex flex-col gap-5 p-5 w-75">
              <div
                className="w-16 h-16 rounded-full bg-[#171B21] flex items-center justify-center relative"
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
                <HiOutlineLightBulb className="text-white w-[23px] h-[23px]" />
              </div>
              <p className="text-[#D0D5D9] text-[24px] leading-[135%] font-[400px]">
                Develop laser-sharp focus & eliminate distractions.
              </p>
            </div>
          </div>
          {/* point 2 */}
          <div className="flex items-center justify-between w-full gap-15">
            {/* connector */}
            <div className="flex flex-col items-center gap-8 w-5">
              <span className="w-5 h-5 rounded-full bg-[#2466F2]"></span>
              <span
                style={{
                  background:
                    "linear-gradient(180deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)",
                }}
                className="w-0.5 h-35"
              ></span>
            </div>
            <div className="flex flex-col gap-5 p-5 ">
              <div
                className="w-16 h-16 rounded-full bg-[#171B21] flex items-center justify-center relative"
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
                <LuBrain className="text-white w-[23px] h-[23px]" />
              </div>
              <span className="text-[#D0D5D9] text-[22px] leading-[135%] font-[400px]">
                Master deep work techniques for smarter productivity.
              </span>
            </div>
          </div>
          {/* point 3 */}
          <div className="flex items-center justify-between w-full gap-15">
            {/* connector */}
            <div className="flex flex-col items-center gap-8 w-5">
              <span className="w-5 h-5 rounded-full bg-[#2466F2]"></span>
              <span
                style={{
                  background:
                    "linear-gradient(180deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)",
                }}
                className="w-0.5 h-35"
              ></span>
            </div>
            <div className="flex flex-col gap-5 p-5 ">
              <div
                className="w-16 h-16 rounded-full bg-[#171B21] flex items-center justify-center relative"
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
                <TbRosetteDiscountCheckFilled className="text-white w-[23px] h-[23px]" />
              </div>
              <span className="text-[#D0D5D9] text-[22px] leading-[135%] font-[400px]">
                Overcome procrastination & get more done.
              </span>
            </div>
          </div>
          {/* point 4 */}
          <div className="flex items-center justify-between w-full gap-15">
            {/* connector */}
            <div className="flex flex-col items-center gap-8 w-5">
              <span className="w-5 h-5 rounded-full bg-[#2466F2]"></span>
              <span
                style={{
                  background:
                    "linear-gradient(180deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)",
                }}
                className="w-0.5 h-35"
              ></span>
            </div>
            <div className="flex flex-col gap-5 p-5 ">
              <div
                className="w-16 h-16 rounded-full bg-[#171B21] flex items-center justify-center relative"
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
                <LuRoute className="text-white w-[23px] h-[23px]" />
              </div>
              <span className="text-[#D0D5D9] text-[22px] leading-[135%] font-[400px]">
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
