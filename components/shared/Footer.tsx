import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-[#111214] p-6 md:p-8 lg:p-10 text-gray-900 dark:text-white">
      <div className="container mx-auto flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 py-10 md:py-16 lg:py-20 text-center md:text-left">
          <div className="flex flex-col gap-4 md:gap-5">
            <h2 className="text-2xl md:text-3xl lg:text-[40px] text-gray-800 dark:text-[#E0E3E5] leading-[115%] font-medium tracking-tighter md:w-[260px]">
              The Deep Work Blueprint
            </h2>
            <p className="text-gray-500 dark:text-[#AAAEB2] text-sm md:text-[17px] leading-[135%]">
              Master Focus & Get More Done in Less Time
            </p>
          </div>
          <Image
            src="/images/Credibility.png"
            alt="Sunburst Icon"
            width={320}
            height={180}
            className="w-70 md:w-65 lg:w-80 h-auto"
          />
        </div>
        <div
          style={{
            borderTop: "1px solid",
            borderImageSource:
              "linear-gradient(90deg, rgba(36, 102, 242, 0) 0%, #2466F2 50%, rgba(36, 102, 242, 0) 100%)",
            borderImageSlice: "1",
          }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 pt-6 md:pt-8 pb-8 md:pb-15"
        >
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6 lg:gap-8 text-sm md:text-[15px] order-1 md:order-2">
            <a href="#" className="hover:text-[#2466F2] transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-[#2466F2] transition-colors">
              Refund Policy
            </a>
            <a href="#" className="hover:text-[#2466F2] transition-colors">
              Pricing
            </a>
            <a href="#" className="hover:text-[#2466F2] transition-colors">
              Support
            </a>
          </div>
          <p className="text-gray-600 dark:text-[#D0D5D9] text-sm md:text-[15px] text-center md:text-left order-2 md:order-1">
            © Copyright 2024, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
