import React from "react";
import PainPointsSection from "./pain-point-sections";
import Benefits from "./benefits";
import CTA from "./cta";
import Testimonial from "./testimonial";
import Curriculum from "./curriculum";

const MainContent = () => {
  return (
    <div className="bg-[#08090A]">
      <div className="container mx-auto">
        <PainPointsSection />
        <Benefits />
        <Curriculum />
        <Testimonial />
        <CTA />
      </div>
    </div>
  );
};

export default MainContent;
