import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Vinicius Alves Araújo",
    role: "Paciente — Tratamento de Feridas",
    text: "Simplesmente perfeito o trabalho de vocês. Meu filho chegou com uma lesão profunda e hoje está super bem. Profissionalismo e carinho em cada atendimento.",
  },
  {
    name: "Monique Fernandes Torres",
    role: "Paciente — Estomia",
    text: "Profissionais super habilitadas, atenciosas e atualizadas. O melhor consultório de enfermagem da Região dos Lagos. Recomendo de olhos fechados.",
  },
  {
    name: "Janaína Martins Rocha",
    role: "Paciente — Laserterapia",
    text: "Atendimento de excelência e olhar atento às necessidades de cada paciente. Recursos como ozônio e laser que aceleram o tratamento de forma impressionante.",
  },
  {
    name: "Fabio Dalanhese",
    role: "Paciente — Tratamento Avançado",
    text: "Fomos muito bem acolhidos, o tratamento prescrito para minha tia com alta tecnologia. Equipe extremamente profissional e dedicada. Recomendo!",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="depoimentos" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-14 sm:mb-20"
        >
          <span className="section-label">Depoimentos</span>
          <h2 className="section-title">O Que Nossos Pacientes Dizem</h2>
          <div className="premium-divider" />
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-center px-8 sm:px-16"
            >
              <div className="flex justify-center gap-1.5 mb-8">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-foreground leading-[1.7] font-serif italic mb-10">
                "{testimonials[current].text}"
              </p>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-base text-foreground font-sans">{testimonials[current].name}</p>
                <p className="text-[12px] text-muted-foreground mt-1.5 uppercase tracking-[0.1em] font-sans">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gold/10 hover:bg-gold/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-gold" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gold/10 hover:bg-gold/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 text-gold" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-gold w-7" : "bg-border w-2 hover:bg-muted-foreground/30"
                }`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
