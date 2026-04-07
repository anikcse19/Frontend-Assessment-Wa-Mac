import HeroSection from "@/components/home/HeroSection";
import MainContent from "@/components/home/MainContent";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const page = () => {
  return (
    <div className="bg-[#F8FAFC] dark:bg-[#000000]">
      <Navbar />
      <HeroSection />
      <MainContent />
      <Footer />
    </div>
  );
};

export default page;
