import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CommunicationSection from "@/components/CommunicationSection";
import TechnologySection from "@/components/TechnologySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CommunicationSection />
      <TechnologySection />
      <Footer />
    </div>
  );
};

export default Index;
