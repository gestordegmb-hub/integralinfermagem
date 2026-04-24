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
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import DeveloperCredit from "@/components/DeveloperCredit";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <a
        href="#gallery-carousel"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-gold-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background"
      >
        Pular para o carrossel
      </a>
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
        <FAQSection />
      </main>
      <Footer />
      <DeveloperCredit />
      <WhatsAppButton />
    </>
  );
};

export default Index;
