import React from "react";

const Badge = ({ text }: { text: string }) => {
  return (
    <div className="text-white">
      <div
        className="py-2 px-4 rounded-xl flex items-center gap-2 w-max mx-auto mb-6 relative bg-[#171B21]"
        style={{
          boxShadow: "0px 8px 40px 0px rgba(36, 102, 242, 0.25)",
        }}
      >
        {/* Gradient border overlay */}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            padding: "1px",
            background:
              "radial-gradient(circle at center, #2466F2 0%, rgba(36, 102, 242, 0) 100%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        ></div>
        <span className="w-2 h-2 bg-[#2466F2] rounded-full"></span>
        <p
          className="font-sans font-normal text-sm leading-[135%] text-center tracking-normal"
          style={{
            // fontFamily: "Type/Font Family/Primary, sans-serif",
            fontWeight: "400",
            fontStyle: "normal",
            fontSize: "Type/Font Size/Body/SM, 14px",
            letterSpacing: "0%",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Badge;
