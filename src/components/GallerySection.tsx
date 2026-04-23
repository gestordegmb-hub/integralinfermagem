import { motion } from "framer-motion";

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

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.figure
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-3 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.10)] sm:p-4"
            >
              <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl bg-muted/30">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <figcaption className="px-2 py-5 text-center sm:py-6">
                <span className="mx-auto mb-4 block h-px w-10 bg-gold" />
                <h3 className="font-serif text-2xl font-semibold italic leading-tight text-foreground sm:text-[1.7rem]">
                  {item.label}
                </h3>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;