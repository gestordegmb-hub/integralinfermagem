import { useRef } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ChevronLeft, ChevronRight, Star } from "lucide-react";
import danieleSilveiraAvatar from "@/assets/depoimento-daniele-silveira.png";
import julianaLoboAvatar from "@/assets/depoimento-juliana-lobo.png";
import fabioDalanheseAvatar from "@/assets/depoimento-fabio-dalanhese.png";
import patriciaTeixeiraAvatar from "@/assets/depoimento-patricia-teixeira.png";

const testimonials = [
  {
    name: "Vinicius Alves Araújo",
    initials: "VA",
    text: "Simplesmente perfeito o trabalho de vocês. Meu filho chegou com uma lesão profunda e hoje está super bem. Profissionalismo e carinho em cada atendimento.",
  },
  {
    name: "Patricia Teixeira",
    initials: "PT",
    avatar: patriciaTeixeiraAvatar,
    text: "Realizei meu acompanhamento pós-operatório na Clínica Integral e só tenho a agradecer pelo cuidado recebido. A Enf. Geandra e toda a equipe demonstraram atenção, competência e um comprometimento genuíno com minha recuperação, sempre respeitando minhas expectativas e necessidades após o procedimento. As técnicas utilizadas são atuais, o ambiente é extremamente acolhedor e a experiência profissional da equipe fez toda a diferença no meu processo de recuperação. Recomendo com muita segurança e gratidão!",
  },
  {
    name: "Janaína Martins Rocha",
    initials: "JM",
    text: "Atendimento de excelência e olhar atento às necessidades de cada paciente. Recursos como ozônio e laser que aceleram o tratamento de forma impressionante.",
  },
  {
    name: "Fabio Dalanhese",
    initials: "FD",
    avatar: fabioDalanheseAvatar,
    text: "Fomos muito bem acolhidos, o tratamento prescrito para minha tia com alta tecnologia. Equipe extremamente profissional e dedicada. Recomendo!",
  },
  {
    name: "Daniele Silveira",
    initials: "DS",
    avatar: danieleSilveiraAvatar,
    text: "Ambiente muito acolhedor, e profissionais atenciosas, te explicam e tranquilizam em relação aos procedimentos que precisam ser realizados, sempre com muito profissionalismo, conhecimento o que gera confiança no atendimento.",
  },
  {
    name: "Juliana Lobo",
    initials: "JL",
    avatar: julianaLoboAvatar,
    text: "Viviane é uma profissional ímpar, maravilhosa, super competente e humana. Super indico.",
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 shrink-0">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.84 9.9C6.71 7.31 9.14 5.38 12 5.38z" />
  </svg>
);

const TestimonialsSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "prev" | "next") => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const cardWidth = carousel.querySelector<HTMLElement>("[data-testimonial-card]")?.offsetWidth ?? carousel.clientWidth;
    const gap = 24;
    carousel.scrollBy({ left: direction === "next" ? cardWidth + gap : -(cardWidth + gap), behavior: "smooth" });
  };

  return (
    <section id="depoimentos" className="bg-background py-16 sm:py-24 lg:py-32">
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
          <div className="mt-4 flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-1" aria-label="Avaliação 5 de 5 estrelas">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
              <span className="ml-1.5 text-base font-semibold text-foreground">5,0</span>
            </div>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              Baseado em <span className="font-semibold text-foreground">52 avaliações</span> no
              <GoogleIcon />
              <span className="font-semibold text-foreground">Google</span>
            </p>
          </div>
          <div className="premium-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto max-w-6xl overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent sm:w-16" />

          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Carrossel de depoimentos"
          >
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                data-testimonial-card
                className="flex min-h-[320px] w-full flex-none snap-start flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-[0_18px_45px_-30px_hsl(var(--foreground)/0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_-32px_hsl(var(--foreground)/0.55)] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10 text-sm font-semibold text-primary shadow-inner">
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={`Foto de ${testimonial.name}`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        testimonial.initials
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <h3 className="truncate font-sans text-sm font-semibold text-card-foreground sm:text-base">
                          {testimonial.name}
                        </h3>
                        <BadgeCheck className="h-4 w-4 shrink-0 fill-primary text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <GoogleIcon />
                </div>

                <div className="mb-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>

                <p className="flex-1 text-[15px] leading-relaxed text-muted-foreground">
                  “{testimonial.text}”
                </p>
              </article>
            ))}
          </div>

          <button
            onClick={() => scroll("prev")}
            className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-card text-gold shadow-[0_14px_35px_-18px_hsl(var(--foreground)/0.55)] transition-all duration-300 hover:scale-105 hover:bg-secondary sm:-left-5 sm:h-12 sm:w-12"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("next")}
            className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-card text-gold shadow-[0_14px_35px_-18px_hsl(var(--foreground)/0.55)] transition-all duration-300 hover:scale-105 hover:bg-secondary sm:-right-5 sm:h-12 sm:w-12"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
