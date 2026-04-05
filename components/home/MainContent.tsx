import React from "react";
import PainPointsSection from "./pain-point-sections";
import Benefits from "./benefits";

const MainContent = () => {
  return (
    <div className="bg-[#08090A]">
      <div className="container mx-auto">
        <PainPointsSection />
        <Benefits />
      </div>
    </div>
  );
};

export default MainContent;
