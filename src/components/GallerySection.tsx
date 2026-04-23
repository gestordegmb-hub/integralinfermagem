import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import ozoneTherapyImage from "@/assets/gallery-ozonioterapia.png";
import ozoneTherapy320 from "@/assets/gallery-ozonioterapia-320.webp";
import ozoneTherapy377 from "@/assets/gallery-ozonioterapia-377.webp";
import laserTherapyImage from "@/assets/gallery-laserterapia.jpg";
import laserTherapy480 from "@/assets/gallery-laserterapia-480.webp";
import laserTherapy768 from "@/assets/gallery-laserterapia-768.webp";
import laserTherapy960 from "@/assets/gallery-laserterapia-960.webp";
import regenerativeTherapyImage from "@/assets/gallery-terapia-regenerativa-prf.jpg";
import regenerativeTherapy480 from "@/assets/gallery-terapia-regenerativa-prf-480.webp";
import regenerativeTherapy768 from "@/assets/gallery-terapia-regenerativa-prf-768.webp";
import regenerativeTherapy960 from "@/assets/gallery-terapia-regenerativa-prf-960.webp";

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

const frameClassBlocklist = /(^|:)(border($|-)|shadow($|-)|rounded($|-)|p[trblxy]?-)/;

export const galleryFrameClassName = (...classes: Parameters<typeof cn>) =>
  cn(...classes)
    .split(/\s+/)
    .filter((className) => className && !frameClassBlocklist.test(className))
    .join(" ");

const canPreloadGalleryImages = () => {
  if (typeof navigator === "undefined") return false;

  const connection = (navigator as Navigator & {
    connection?: { effectiveType?: string; saveData?: boolean };
  }).connection;

  if (!connection || connection.saveData) return false;

  return connection.effectiveType === "4g";
};

const GallerySection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number; time: number } | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(() => new Set());
  const [isCarouselFocused, setIsCarouselFocused] = useState(false);
  const lastSwipeTime = useRef<number>(0);
  const lastSwipeCooldown = useRef<number>(400);
  const getSwipeCooldown = (distance: number, duration: number) => {
    const velocity = Math.abs(distance) / Math.max(duration, 1);
    if (velocity >= 1.2) return 220;
    if (velocity >= 0.6) return 360;
    return 560;
  };

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? galleryItems.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === galleryItems.length - 1 ? 0 : current + 1));
  };


  useEffect(() => {
    if (!canPreloadGalleryImages()) return undefined;

    galleryItems.slice(0, 2).forEach((item) => {
      const image = new Image();
      image.src = item.src;
      image.onload = () => {
        setLoadedImages((current) => new Set(current).add(item.src));
      };
    });
  }, []);

  useEffect(() => {
    if (!canPreloadGalleryImages()) return undefined;

    const nextItem = galleryItems[(activeIndex + 1) % galleryItems.length];
    if (loadedImages.has(nextItem.src)) return undefined;

    const preloadNextImage = () => {
      const image = new Image();
      image.src = nextItem.src;
      image.onload = () => {
        setLoadedImages((current) => new Set(current).add(nextItem.src));
      };
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(preloadNextImage, { timeout: 2000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(preloadNextImage, 350);
    return () => globalThis.clearTimeout(timeoutId);
  }, [activeIndex, loadedImages]);

  const activeItem = galleryItems[activeIndex];
  const isActiveImageLoaded = loadedImages.has(activeItem.src);

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
            ref={carouselRef}
            id="gallery-carousel"
            className={galleryFrameClassName(
              "group relative touch-pan-y gap-0 outline-none ring-offset-4 ring-offset-background transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold",
            )}
            tabIndex={0}
            role="region"
            aria-label="Carrossel da galeria"
            onFocus={() => setIsCarouselFocused(true)}
            onBlur={() => setIsCarouselFocused(false)}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                goToPrevious();
                window.requestAnimationFrame(() => carouselRef.current?.focus());
              }
              if (event.key === "ArrowRight") {
                event.preventDefault();
                goToNext();
                window.requestAnimationFrame(() => carouselRef.current?.focus());
              }
            }}
            onTouchStart={(event) => {
              setTouchStart({
                x: event.touches[0].clientX,
                y: event.touches[0].clientY,
                time: Date.now(),
              });
            }}
            onTouchEnd={(event) => {
              if (touchStart === null) return;
              const now = Date.now();
              const deltaX = touchStart.x - event.changedTouches[0].clientX;
              const deltaY = touchStart.y - event.changedTouches[0].clientY;
              const duration = now - touchStart.time;
              const isMostlyVertical = Math.abs(deltaY) > Math.abs(deltaX) * 0.75;

              if (isMostlyVertical) {
                setTouchStart(null);
                return;
              }

              if (now - lastSwipeTime.current < lastSwipeCooldown.current) {
                setTouchStart(null);
                return;
              }

              const carouselWidth = carouselRef.current?.offsetWidth ?? 0;
              const threshold = Math.max(45, carouselWidth * 0.15);
              if (Math.abs(deltaX) > threshold) {
                lastSwipeCooldown.current = getSwipeCooldown(deltaX, duration);
                lastSwipeTime.current = now;
                deltaX > 0 ? goToNext() : goToPrevious();
                window.requestAnimationFrame(() => carouselRef.current?.focus());
              }
              setTouchStart(null);
            }}
          >
            <div className="relative flex aspect-[4/5] gap-0 items-center justify-center overflow-hidden sm:aspect-[16/10] lg:aspect-[16/9]">
              <AnimatePresence>
                {isCarouselFocused && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-3 top-3 z-20 rounded-full bg-background/90 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-foreground shadow-lg backdrop-blur-sm sm:left-5 sm:top-5"
                  >
                    Use as setas para navegar
                  </motion.div>
                )}
              </AnimatePresence>
              <div
                className={`absolute inset-0 bg-muted/60 transition-opacity duration-500 ${
                  isActiveImageLoaded ? "opacity-0" : "opacity-100 animate-pulse"
                }`}
                aria-hidden="true"
              />
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeItem.label}
                  src={activeItem.src}
                  alt={activeItem.alt}
                  initial={{ opacity: 0, scale: 1.015 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.985 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className={`block h-full w-full object-contain transition-transform duration-700 ${
                    isActiveImageLoaded ? "blur-0" : "blur-xl"
                  }`}
                  loading={activeIndex === 0 ? "eager" : "lazy"}
                  onLoad={() => setLoadedImages((current) => new Set(current).add(activeItem.src))}
                />
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/5 to-transparent" />

              <button
                type="button"
                tabIndex={-1}
                onClick={() => {
                  goToPrevious();
                  carouselRef.current?.focus();
                }}
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-gold opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-gold-foreground group-focus-within:opacity-100 group-hover:opacity-100 sm:left-5 sm:h-12 sm:w-12"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                tabIndex={-1}
                onClick={() => {
                  goToNext();
                  carouselRef.current?.focus();
                }}
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-gold opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:text-gold-foreground group-focus-within:opacity-100 group-hover:opacity-100 sm:right-5 sm:h-12 sm:w-12"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="h-5 w-5" />
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
                tabIndex={-1}
                onClick={() => {
                  setActiveIndex(index);
                  carouselRef.current?.focus();
                }}
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