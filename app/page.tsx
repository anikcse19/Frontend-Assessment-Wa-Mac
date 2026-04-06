import HeroSection from "@/components/home/HeroSection";
import MainContent from "@/components/home/MainContent";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MainContent />
      <Footer />
    </div>
  );
};

export default page;
