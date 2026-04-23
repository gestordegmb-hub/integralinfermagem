import { motion } from "framer-motion";

import ozoneTherapyImage from "@/assets/gallery-ozonioterapia.png";
import laserTherapyImage from "@/assets/gallery-laserterapia.jpg";
import heroClinicImage from "@/assets/hero-clinic.jpg";

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
    src: heroClinicImage,
    alt: "Estrutura acolhedora para atendimento especializado",
    label: "Estrutura",
  },
];

const GallerySection = () => {
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

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.figure
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group relative min-h-[360px] overflow-hidden rounded-md border border-border/60 bg-card shadow-sm sm:min-h-[430px] lg:min-h-[520px]"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-muted/50 p-3 sm:p-4">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/65 via-secondary/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <span className="inline-flex border border-accent/40 bg-background/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground backdrop-blur-sm">
                  {item.label}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;