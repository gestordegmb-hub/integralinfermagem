import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ServiceIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-16 h-16 rounded-full bg-[hsl(var(--gold)/0.10)] flex items-center justify-center mb-5 group-hover:bg-[hsl(var(--gold)/0.18)] transition-colors duration-500">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="hsl(var(--gold))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  </div>
);

const services = [
  {
    title: "Tratamento Avançado de Feridas",
    desc: "Tratamento especializado para acelerar a cicatrização e prevenir complicações.",
    icon: (
      <>
        <rect x="6" y="8" width="16" height="12" rx="2" />
        <path d="M14 11v6M11 14h6" />
        <path d="M10 8V6a4 4 0 0 1 8 0v2" />
      </>
    ),
  },
  {
    title: "Cuidados com Estomias",
    desc: "Suporte e orientação para melhor adaptação e qualidade de vida.",
    icon: (
      <>
        <circle cx="14" cy="14" r="9" />
        <circle cx="14" cy="14" r="3.5" />
        <path d="M14 5v3M14 20v3M5 14h3M20 14h3" />
      </>
    ),
  },
  {
    title: "Avaliação do Pé Diabético",
    desc: "Prevenção e cuidado para evitar complicações em pessoas com diabetes.",
    icon: (
      <>
        <path d="M10 4c-1 2-3 5-3 8a7 7 0 0 0 14 0c0-3-2-6-3-8" />
        <circle cx="11" cy="15" r="1.5" />
        <circle cx="17" cy="15" r="1.5" />
        <path d="M12 20h4" />
      </>
    ),
  },
  {
    title: "Laserterapia e Ozonioterapia",
    desc: "Tecnologia avançada para regeneração tecidual e controle de infecções.",
    icon: (
      <>
        <circle cx="14" cy="14" r="4" />
        <path d="M14 3v4M14 21v4M3 14h4M21 14h4" />
        <path d="M6.3 6.3l2.8 2.8M18.9 18.9l2.8 2.8M6.3 21.7l2.8-2.8M18.9 9.1l2.8-2.8" />
      </>
    ),
  },
  {
    title: "LEDterapia",
    desc: "Tratamento não invasivo para acelerar a cicatrização e reduzir inflamação.",
    icon: (
      <>
        <path d="M10 4h8l-1 10H11L10 4z" />
        <rect x="11" y="14" width="6" height="3" rx="1" />
        <path d="M12 17v3M16 17v3" />
        <path d="M7 7l-2-2M21 7l2-2M14 1v2" />
      </>
    ),
  },
  {
    title: "Terapia Regenerativa (PRF)",
    desc: "Cicatrização natural através de fibrina rica em plaquetas.",
    icon: (
      <>
        <circle cx="14" cy="14" r="9" />
        <circle cx="11" cy="12" r="2" />
        <circle cx="17" cy="12" r="2" />
        <circle cx="14" cy="18" r="2" />
        <path d="M12.5 13.5l1 2.5M15.5 13.5l-1 2.5" />
      </>
    ),
  },
  {
    title: "Atendimento Domiciliar e em Consultório",
    desc: "Cuidado personalizado onde o paciente estiver, com a mesma qualidade.",
    icon: (
      <>
        <path d="M4 14l10-10 10 10" />
        <path d="M6 13v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9" />
        <path d="M14 16v-4M12 14h4" />
      </>
    ),
  },
  {
    title: "Podiatria",
    desc: "Cuidados especializados e tratamento dos pés com técnica e precisão.",
    icon: (
      <>
        <path d="M11 5c-2 3-4 6-4 10a7 7 0 0 0 14 0c0-4-2-7-4-10" />
        <path d="M14 12v6" />
        <path d="M11 15h6" />
      </>
    ),
  },
  {
    title: "Cuidados Pós-operatórios",
    desc: "Suporte à recuperação e prevenção de infecções após cirurgias.",
    icon: (
      <>
        <rect x="5" y="8" width="18" height="12" rx="2" />
        <path d="M14 8V5" />
        <path d="M10 8V6" />
        <path d="M18 8V6" />
        <path d="M9 14h10" />
        <path d="M9 17h6" />
      </>
    ),
  },
  {
    title: "Mentoria e Capacitação",
    desc: "Educação profissional e orientação para enfermeiros especialistas.",
    icon: (
      <>
        <path d="M4 19V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v13" />
        <path d="M18 19H4" />
        <path d="M18 8h4v11h-4" />
        <path d="M8 9h6M8 13h4" />
      </>
    ),
  },
];

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="py-16 sm:py-24 lg:py-32 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-20"
        >
          <span className="section-label">Serviços</span>
          <h2 className="section-title">Nossos Serviços</h2>
          <div className="premium-divider" />
          <p className="section-desc mt-6">
            Atendimento especializado com tecnologia avançada e cuidado humanizado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group bg-card rounded-2xl border border-border/50 p-7 sm:p-8 text-center transition-all duration-500 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.10)] hover:-translate-y-1 hover:border-[hsl(var(--gold)/0.3)]"
            >
              <div className="flex justify-center">
                <ServiceIcon>{s.icon}</ServiceIcon>
              </div>
              <h3 className="font-semibold text-lg sm:text-xl text-foreground font-serif mb-3 leading-tight">
                {s.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-muted-foreground leading-relaxed font-sans">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16"
        >
          <a href="#agendamento">
            <Button variant="gold" size="lg" className="gap-2 uppercase text-[12px] sm:text-[13px] tracking-[0.12em] h-[52px] px-10 hover:scale-105">
              Solicitar Informações
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
