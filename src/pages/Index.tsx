import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/AboutSection";
import CredentialsBar from "@/components/CredentialsBar";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import GallerySection from "@/components/GallerySection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import SchedulingSection from "@/components/SchedulingSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <AboutSection />
        <CredentialsBar />
        <SpecialtiesSection />
        <BeforeAfterSection />
        <GallerySection />
        <DifferentialsSection />
        <TestimonialsSection />
        <CTASection />
        <SchedulingSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
