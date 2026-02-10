import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import InfoSection from "@/components/InfoSection";
import RulesSection from "@/components/RulesSection";
import RegisterCTA from "@/components/RegisterCTA";
import FAQSection from "@/components/FAQSection";
import OrganizingTeam from "@/components/OrganizingTeam";
import SponsorsSection from "@/components/SponsorsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <JourneySection />
      <div className="section-divider" />
      <InfoSection />
      <div className="section-divider" />
      <RulesSection />
      <div className="section-divider" />
      <RegisterCTA />
      <div className="section-divider" />
      <FAQSection />
      <div className="section-divider" />
      <OrganizingTeam />
      <div className="section-divider" />
      <SponsorsSection />
      <div className="section-divider" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
