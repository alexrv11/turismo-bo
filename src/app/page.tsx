import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import DestinationsSection from "@/components/DestinationsSection";
import PackagesSection from "@/components/PackagesSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <IntroSection />
      <DestinationsSection />
      <PackagesSection />
      <ServicesSection />
      <TrustSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
