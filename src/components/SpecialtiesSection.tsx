import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import woundCareIcon from "@/assets/icon-tratamento-feridas.png";
import ostomyCareIcon from "@/assets/icon-cuidados-estomias.png";
import diabeticFootIcon from "@/assets/icon-pe-diabetico.png";
import laserOzoneIcon from "@/assets/icon-laser-ozonio.png";
import ledTherapyIcon from "@/assets/icon-led-terapia.png";
import regenerativeTherapyIcon from "@/assets/icon-terapia-regenerativa-prf.png";
import homeClinicCareIcon from "@/assets/icon-atendimento-domiciliar-consultorio.png";

type Service = {
  title: string;
  desc: string;
  icon?: React.ReactNode;
  imageIcon?: string;
};

const ServiceIcon = ({ children, imageSrc, title }: { children?: React.ReactNode; imageSrc?: string; title: string }) => (
  <div className="w-16 h-16 rounded-full bg-[hsl(var(--gold)/0.10)] flex items-center justify-center mb-5 group-hover:bg-[hsl(var(--gold)/0.18)] transition-colors duration-500 overflow-hidden">
    {imageSrc ? (
      <img
        src={imageSrc}
        alt={`Ícone de ${title}`}
        className="w-11 h-11 object-contain"
        loading="lazy"
      />
    ) : (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="hsl(var(--gold))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    )}
  </div>
);

const services: Service[] = [
  {
    title: "Tratamento Avançado de Feridas",
    desc: "Tratamento especializado para acelerar a cicatrização e prevenir complicações.",
    imageIcon: woundCareIcon,
  },
  {
    title: "Cuidados com Estomias",
    desc: "Suporte e orientação para melhor adaptação e qualidade de vida.",
    imageIcon: ostomyCareIcon,
  },
  {
    title: "Avaliação do Pé Diabético",
    desc: "Prevenção e cuidado para evitar complicações em pessoas com diabetes.",
    imageIcon: diabeticFootIcon,
  },
  {
    title: "Laserterapia e Ozonioterapia",
    desc: "Tecnologia avançada para regeneração tecidual e controle de infecções.",
    imageIcon: laserOzoneIcon,
  },
  {
    title: "Led-terapia",
    desc: "Tratamento não invasivo para acelerar a cicatrização e reduzir inflamação.",
    imageIcon: ledTherapyIcon,
  },
  {
    title: "Terapia Regenerativa (PRF)",
    desc: "Cicatrização natural através de fibrina rica em plaquetas.",
    imageIcon: regenerativeTherapyIcon,
  },
  {
    title: "Atendimento Domiciliar e em Consultório",
    desc: "Cuidado personalizado onde o paciente estiver, com a mesma qualidade.",
    imageIcon: homeClinicCareIcon,
  },
  {
    title: "Podiatria",
    desc: "Cuidados especializados e tratamento dos pés com técnica e precisão.",
    icon: (
      <>
        {/* Foot silhouette with care symbol */}
        <path d="M7 25c0-3 1-5 3-7 1.5-1.5 2-3 2-5.5 0-3 .5-6 1.5-8.5" />
        <path d="M13.5 4c1.5 2.5 2.5 5.5 2.5 8.5 0 2.5.5 4 2 5.5 2 2 3 4 3 7" />
        <path d="M7 25h14" />
        <ellipse cx="10" cy="6" rx="1.2" ry="2" />
        <ellipse cx="12.5" cy="5" rx="1" ry="1.8" />
        <ellipse cx="15" cy="5.5" rx="1" ry="1.8" />
        <ellipse cx="17" cy="7" rx="0.8" ry="1.5" />
        <path d="M14 16l-1.5 3M14 16l1.5 3" />
      </>
    ),
  },
  {
    title: "Cuidados Pós-operatórios",
    desc: "Suporte à recuperação e prevenção de infecções após cirurgias.",
    icon: (
      <>
        {/* Clipboard with medical checklist */}
        <rect x="6" y="5" width="16" height="19" rx="2" />
        <path d="M10 5V3.5a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5V5" />
        <path d="M10 11h8" />
        <path d="M10 15h8" />
        <path d="M10 19h5" />
        <circle cx="8.5" cy="11" r="0.6" fill="hsl(var(--gold))" stroke="none" />
        <circle cx="8.5" cy="15" r="0.6" fill="hsl(var(--gold))" stroke="none" />
        <circle cx="8.5" cy="19" r="0.6" fill="hsl(var(--gold))" stroke="none" />
        <path d="M14 2v1" />
      </>
    ),
  },
  {
    title: "Mentoria e Capacitação",
    desc: "Educação profissional e orientação para enfermeiros especialistas.",
    icon: (
      <>
        {/* Open book with graduation cap */}
        <path d="M2 20V8l12-3 12 3v12" />
        <path d="M14 5v15" />
        <path d="M2 20c4-1 8-1 12 0 4-1 8-1 12 0" />
        <path d="M2 8c4-1 8-1 12 0 4-1 8-1 12 0" />
        <path d="M8 2l6 2 6-2" />
        <path d="M14 4v-1" />
        <circle cx="20" cy="1.5" r="0.5" fill="hsl(var(--gold))" stroke="none" />
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
                <ServiceIcon title={s.title} imageSrc={s.imageIcon}>{s.icon}</ServiceIcon>
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
