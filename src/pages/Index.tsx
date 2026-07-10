import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/AboutSection";
import CredentialsBar from "@/components/CredentialsBar";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import SectionDivider from "@/components/SectionDivider";
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
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";

const Index = () => {
  return (
    <PageTransition>
      <a
        href="#gallery-carousel"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-gold-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background"
      >
        Pular para o carrossel
      </a>
      <Navbar />
      <main>
        <HeroSection />
        <Reveal variant="fade" duration={0.9}><IntroSection /></Reveal>
        <Reveal variant="slide-up"><AboutSection /></Reveal>
        <Reveal variant="zoom-in" duration={0.9}><SectionDivider /></Reveal>
        <Reveal variant="slide-right"><CredentialsBar /></Reveal>
        <Reveal variant="slide-up"><SpecialtiesSection /></Reveal>
        <Reveal variant="zoom-in"><BeforeAfterSection /></Reveal>
        <Reveal variant="slide-up"><GallerySection /></Reveal>
        <Reveal variant="slide-left"><DifferentialsSection /></Reveal>
        <Reveal variant="fade" duration={0.9}><TestimonialsSection /></Reveal>
        <Reveal variant="zoom-in"><CTASection /></Reveal>
        <Reveal variant="slide-up"><SchedulingSection /></Reveal>
        <Reveal variant="slide-up"><FAQSection /></Reveal>
      </main>
      <Reveal variant="fade"><Footer /></Reveal>
      <DeveloperCredit />
      <WhatsAppButton />
    </PageTransition>
  );
};

export default Index;
