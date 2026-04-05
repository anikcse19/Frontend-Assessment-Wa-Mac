import HeroSection from "@/components/home/HeroSection";
import MainContent from "@/components/home/MainContent";
import Navbar from "@/components/shared/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MainContent />
    </div>
  );
};

export default page;
