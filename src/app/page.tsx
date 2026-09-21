import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import DestinationsSection from "@/components/DestinationsSection";
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
      <ServicesSection />
      <DestinationsSection />
      <TrustSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
