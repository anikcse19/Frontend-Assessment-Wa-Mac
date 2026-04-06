import React from "react";
import Badge from "../shared/Badge";
import {
  TbHexagonPlusFilled,
  TbRosetteDiscountCheckFilled,
} from "react-icons/tb";

const CTA = () => {
  return (
    <div
      id="enroll"
      className="flex flex-col lg:flex-row gap-4 md:gap-6 py-16 md:py-20 lg:py-30 text-[#E0E3E5]"
    >
      {/* left side */}
      <div className="flex flex-col py-6 md:py-8 lg:py-10 px-6 md:px-8 lg:px-15 gap-8 md:gap-12 lg:gap-15 rounded-3xl bg-[#111214] w-full lg:w-[60%]">
        <div className="flex flex-col items-start gap-4 md:gap-5">
          <Badge text="Introducing" />
          <h2 className="text-2xl md:text-3xl lg:text-[40px] tracking-tighter leading-[115%]">
            The Deep Work Blueprint
          </h2>
          <p className="text-sm md:text-base">What extra you will get if you enroll now</p>
        </div>
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[#171B21] flex items-center justify-center relative shrink-0"
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
              <TbHexagonPlusFilled className="text-white w-5 h-5 md:w-[23px] md:h-[23px]" />
            </div>
            <p className="text-[#AAAEB2] text-sm md:text-[15px]">
              Bonus: 1:1 coaching session to boost focus.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-[#171B21] flex items-center justify-center relative shrink-0"
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
              <TbHexagonPlusFilled className="text-white w-5 h-5 md:w-[23px] md:h-[23px]" />
            </div>
            <p className="text-[#AAAEB2] text-sm md:text-[15px]">
              Discount: Save 30% when you enroll now!
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div
        className="flex flex-col justify-start w-full lg:w-[40%] rounded-3xl bg-[#111214] px-5 md:px-6 lg:px-8 pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 gap-8 md:gap-12 lg:gap-16 relative"
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
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 relative z-10">
          <div className="flex items-center justify-between">
            {/* price */}
            <div className="flex items-end gap-2 md:gap-3">
              {/* discounted price */}
              <p className="text-3xl md:text-4xl lg:text-[52px]">$349</p>
              {/* original price */}
              <span className="relative">
                <p className="text-lg md:text-xl lg:text-[26px] text-[#AAAEB2]">$500</p>
                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-[#FF1818] -translate-y-1/2 rotate-12"></span>
              </span>
            </div>
            {/* discount percentage */}
            <span className="bg-[#2466F2] rounded-xl py-1 md:py-2 px-2 md:px-4 flex gap-1 md:gap-2">
              <p className="text-sm md:text-base">30% Off</p>
            </span>
          </div>
          <p className="text-sm md:text-[15px]">30% off until 4d : 2h : 41m : 17s</p>
        </div>

        {/* Features */}
        <div className="flex flex-col justify-baseline gap-4 md:gap-6 relative z-10">
          <div className="flex items-center gap-3 md:gap-5">
            <div
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-[#171B21] flex items-center justify-center relative shrink-0"
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
              <TbRosetteDiscountCheckFilled className="text-white w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
            </div>
            <span className="text-[#D0D5D9] text-xs md:text-sm lg:text-[15px] leading-[135%] font-normal">
              6h of videos - Step-by-step deep work strategies.
            </span>
          </div>
          <div className="flex items-center gap-3 md:gap-5">
            <div
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-[#171B21] flex items-center justify-center relative shrink-0"
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
              <TbRosetteDiscountCheckFilled className="text-white w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
            </div>
            <span className="text-[#D0D5D9] text-xs md:text-sm lg:text-[15px] leading-[135%] font-normal">
              Templates & Trackers – Stay on track effortlessly.
            </span>
          </div>
          <div className="flex items-center gap-3 md:gap-5">
            <div
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-[#171B21] flex items-center justify-center relative shrink-0"
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
              <TbRosetteDiscountCheckFilled className="text-white w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
            </div>
            <span className="text-[#D0D5D9] text-xs md:text-sm lg:text-[15px] leading-[135%] font-normal">
              Live Q&As – Expert guidance & accountability.
            </span>
          </div>
          <div className="flex items-center gap-3 md:gap-5">
            <div
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-[#171B21] flex items-center justify-center relative shrink-0"
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
              <TbRosetteDiscountCheckFilled className="text-white w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
            </div>
            <span className="text-[#D0D5D9] text-xs md:text-sm lg:text-[15px] leading-[135%] font-normal">
              Exclusive Community – Connect with others.
            </span>
          </div>
        </div>

        {/* button */}
        <div className="bg-[#2466F2] hover:bg-[#5282e9] cursor-pointer transition-colors duration-300 py-2 md:py-3 px-4 md:px-5 rounded-xl flex items-center justify-center">
          <p className="font-medium leading-[135%] text-sm md:text-base lg:text-[17px]">Enroll Now</p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
