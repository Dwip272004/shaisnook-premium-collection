import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CollectionSection from "@/components/CollectionSection";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import AuthenticityBanner from "@/components/AuthenticityBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CollectionSection />
      <CraftsmanshipSection />
      <AuthenticityBanner />
      <Footer />
    </div>
  );
};

export default Index;
