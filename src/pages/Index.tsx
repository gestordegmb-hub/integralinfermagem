import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import PageTransition from "@/components/PageTransition";
import Reveal from "@/components/Reveal";

// Below-the-fold: split into async chunks so initial JS payload stays minimal.
const AboutSection = lazy(() => import("@/components/AboutSection"));
const SectionDivider = lazy(() => import("@/components/SectionDivider"));
const CredentialsBar = lazy(() => import("@/components/CredentialsBar"));
const SpecialtiesSection = lazy(() => import("@/components/SpecialtiesSection"));
const BeforeAfterSection = lazy(() => import("@/components/BeforeAfterSection"));
const GallerySection = lazy(() => import("@/components/GallerySection"));
const DifferentialsSection = lazy(() => import("@/components/DifferentialsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const SchedulingSection = lazy(() => import("@/components/SchedulingSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const Footer = lazy(() => import("@/components/Footer"));
const DeveloperCredit = lazy(() => import("@/components/DeveloperCredit"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

// Fallback keeps layout stable — no visible flash, avoids CLS.
const SectionFallback = () => <div aria-hidden className="min-h-[40vh]" />;

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
        <Suspense fallback={<SectionFallback />}>
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
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Reveal variant="fade"><Footer /></Reveal>
        <DeveloperCredit />
        <WhatsAppButton />
      </Suspense>
    </PageTransition>
  );
};

export default Index;
