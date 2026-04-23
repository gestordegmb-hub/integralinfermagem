import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import ozoneTherapyImage from "@/assets/gallery-ozonioterapia.png";
import laserTherapyImage from "@/assets/gallery-laserterapia.jpg";
import regenerativeTherapyImage from "@/assets/gallery-terapia-regenerativa-prf.jpg";

const galleryItems = [
  {
    src: ozoneTherapyImage,
    alt: "Aplicação de ozonioterapia na clínica Integral",
    label: "Ozonioterapia",
  },
  {
    src: laserTherapyImage,
    alt: "Atendimento de laserterapia na clínica Integral",
    label: "Laserterapia",
  },
  {
    src: regenerativeTherapyImage,
    alt: "Atendimento de terapia regenerativa PRF na clínica Integral",
    label: "Terapia Regenerativa (PRF)",
  },
];

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.localStorage.getItem("galleryAutoplay") !== "paused";
  });

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? galleryItems.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === galleryItems.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    if (!isAutoplayEnabled) return undefined;
    const interval = window.setInterval(goToNext, 6500);
    return () => window.clearInterval(interval);
  }, [isAutoplayEnabled]);

  useEffect(() => {
    window.localStorage.setItem("galleryAutoplay", isAutoplayEnabled ? "playing" : "paused");
  }, [isAutoplayEnabled]);

  const activeItem = galleryItems[activeIndex];

  return (
    <section id="galeria" className="py-16 sm:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="section-label">Galeria</p>
          <h2 className="section-title">
            Um espaço pensado para <br className="hidden sm:inline" />cuidar com excelência
          </h2>
          <p className="section-desc">
            Detalhes da experiência Integral: acolhimento, técnica e atenção em cada atendimento.
          </p>
          <div className="premium-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl"
        >
          <div
            className="group relative overflow-hidden rounded-2xl bg-card p-3 shadow-[0_18px_60px_-24px_hsl(var(--foreground)/0.28)] sm:p-4"
            onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
            onTouchEnd={(event) => {
              if (touchStart === null) return;
              const distance = touchStart - event.changedTouches[0].clientX;
              if (Math.abs(distance) > 45) distance > 0 ? goToNext() : goToPrevious();
              setTouchStart(null);
            }}
          >
            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl bg-muted/30 sm:aspect-[16/10] lg:aspect-[16/9]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeItem.label}
                  src={activeItem.src}
                  alt={activeItem.alt}
                  initial={{ opacity: 0, scale: 1.015 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.985 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.025]"
                  loading={activeIndex === 0 ? "eager" : "lazy"}
                />
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/5 to-transparent" />

              <button
                type="button"
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-gold opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-gold-foreground group-hover:opacity-100 sm:left-5 sm:h-12 sm:w-12"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-gold opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-gold-foreground group-hover:opacity-100 sm:right-5 sm:h-12 sm:w-12"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => setIsAutoplayEnabled((current) => !current)}
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-gold opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-gold-foreground group-hover:opacity-100 sm:right-5 sm:top-5 sm:h-11 sm:w-11"
                aria-label={isAutoplayEnabled ? "Pausar autoplay" : "Ativar autoplay"}
                aria-pressed={!isAutoplayEnabled}
              >
                {isAutoplayEnabled ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
              </button>

              <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-center sm:p-7">
                <span className="mx-auto mb-4 block h-px w-10 bg-gold" />
                <h3 className="font-serif text-2xl font-semibold italic leading-tight text-secondary-foreground drop-shadow-sm sm:text-4xl">
                  {activeItem.label}
                </h3>
              </figcaption>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {galleryItems.map((item, index) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-gold" : "w-2.5 bg-border hover:bg-gold/50"
                }`}
                aria-label={`Ver imagem ${index + 1}: ${item.label}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;