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

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.figure
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group relative min-h-[360px] overflow-hidden rounded-md bg-muted/30 shadow-sm sm:min-h-[430px] lg:min-h-[520px]"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                <span className="font-serif text-2xl italic leading-tight text-secondary-foreground drop-shadow-sm sm:text-3xl">
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