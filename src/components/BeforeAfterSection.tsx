import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

const cases = [
  {
    before: before1,
    after: after1,
    title: "Tratamento Avançado de Feridas",
  },
  {
    before: before2,
    after: after2,
    title: "Tratamento Avançado de Feridas",
  },
];

function ImageSlider({ beforeSrc, afterSrc, title }: { beforeSrc: string; afterSrc: string; title: string }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handleMouseDown = useCallback(() => { isDragging.current = true; }, []);
  const handleMouseUp = useCallback(() => { isDragging.current = false; }, []);
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  }, [updatePosition]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    updatePosition(e.clientX);
  }, [updatePosition]);

  useEffect(() => {
    const up = () => { isDragging.current = false; };
    window.addEventListener("mouseup", up);
    return () => window.removeEventListener("mouseup", up);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] max-h-[400px] sm:max-h-[450px] rounded overflow-hidden shadow-lg cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
      role="slider"
      aria-label={`Comparação antes e depois: ${title}`}
      aria-valuenow={Math.round(sliderPos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setSliderPos((p) => Math.max(0, p - 2));
        if (e.key === "ArrowRight") setSliderPos((p) => Math.min(100, p + 2));
      }}
    >
      {/* After image (full background) */}
      <img
        src={afterSrc}
        alt={`Depois - ${title}`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={800}
        height={600}
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
      >
        <img
          src={beforeSrc}
          alt={`Antes - ${title}`}
          className="w-full h-full object-cover"
          loading="lazy"
          width={800}
          height={600}
        />
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-10 flex items-center"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-1 h-full bg-accent" />
        <div className="absolute top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent border-2 border-accent-foreground/20 flex items-center justify-center shadow-lg">
          <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-accent-foreground" />
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-accent-foreground" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 sm:top-4 sm:left-4 z-[5] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-white bg-foreground/50 backdrop-blur-sm px-3 py-1.5 rounded">
        Antes
      </span>
      <span className="absolute top-3 right-3 sm:top-4 sm:right-4 z-[5] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-white bg-accent/80 backdrop-blur-sm px-3 py-1.5 rounded">
        Depois
      </span>
    </div>
  );
}

const BeforeAfterSection = () => {
  const [activeCase, setActiveCase] = useState(0);

  const goTo = (idx: number) => {
    if (idx < 0) setActiveCase(cases.length - 1);
    else if (idx >= cases.length) setActiveCase(0);
    else setActiveCase(idx);
  };

  const current = cases[activeCase];

  return (
    <section id="before-after" className="py-16 sm:py-20 lg:py-28 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="section-label">Resultados Reais</p>
          <h2 className="section-title">
            Transformações que <br className="hidden sm:inline" />Mudam Vidas
          </h2>
          <p className="section-desc max-w-xl mx-auto">
            Veja os resultados reais de nossos procedimentos especializados.
            Cada caso é único, e cada resultado reflete nosso compromisso com a excelência.
          </p>
          <div className="premium-divider" />
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          <ImageSlider
            key={activeCase}
            beforeSrc={current.before}
            afterSrc={current.after}
            title={current.title}
          />

          {/* Case info */}
          <div className="mt-5 sm:mt-6 text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
              {current.title}
            </h3>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
            <button
              onClick={() => goTo(activeCase - 1)}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:brightness-110 transition-all duration-200 hover:scale-105 shadow-md"
              aria-label="Caso anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {cases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCase(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === activeCase
                      ? "bg-accent scale-125"
                      : "bg-border hover:bg-muted-foreground/40"
                  }`}
                  aria-label={`Caso ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(activeCase + 1)}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:brightness-110 transition-all duration-200 hover:scale-105 shadow-md"
              aria-label="Próximo caso"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 sm:mt-14"
        >
          <p className="text-muted-foreground text-sm sm:text-base mb-4">
            Quer conhecer mais sobre nossos procedimentos?
          </p>
          <Button
            variant="gold"
            size="lg"
            className="gap-2"
            onClick={() => {
              const el = document.getElementById("agendamento");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Calendar className="w-4 h-4" />
            Agendar Consulta
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
