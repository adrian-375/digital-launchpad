import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import SocialProofSection from "@/components/SocialProofSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ProcessSection />
        <SocialProofSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
