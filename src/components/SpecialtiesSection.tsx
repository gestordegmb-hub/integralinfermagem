import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import woundCareIcon from "@/assets/icon-tratamento-feridas-uploaded.png";
import ostomyCareIcon from "@/assets/icon-cuidados-estomias-uploaded.png";
import diabeticFootIcon from "@/assets/icon-pe-diabetico-uploaded.png";
import laserOzoneIcon from "@/assets/icon-laser-ozonio-uploaded.png";
import regenerativeTherapyIcon from "@/assets/icon-terapia-regenerativa-prf-uploaded.png";
import homeClinicCareIcon from "@/assets/icon-atendimento-domiciliar-consultorio-v2.png";
import podiatryIcon from "@/assets/icon-podiatria-v2.png";
import postoperativeCareIcon from "@/assets/icon-cuidados-pos-operatorios-v2.png";
import mentoringTrainingIcon from "@/assets/icon-mentoria-capacitacao-v2.png";

type Service = {
  title: string;
  desc: string;
  icon?: React.ReactNode;
  imageIcon?: string;
};

const ServiceIcon = ({ children, imageSrc, title }: { children?: React.ReactNode; imageSrc?: string; title: string }) => (
  <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-105">
    {imageSrc ? (
      <img
        src={imageSrc}
        alt={`Ícone de ${title}`}
        className="w-full h-full object-cover scale-[1.15]"
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
    title: "Terapia Regenerativa (PRF)",
    desc: "Cicatrização natural através de fibrina rica em plaquetas.",
    imageIcon: regenerativeTherapyIcon,
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
    title: "Atendimento Domiciliar e em Consultório",
    desc: "Cuidado personalizado onde o paciente estiver, com a mesma qualidade.",
    imageIcon: homeClinicCareIcon,
  },
  {
    title: "Podiatria",
    desc: "Cuidados especializados e tratamento dos pés com técnica e precisão.",
    imageIcon: podiatryIcon,
  },
  {
    title: "Cuidados Pós-operatórios",
    desc: "Suporte à recuperação e prevenção de infecções após cirurgias.",
    imageIcon: postoperativeCareIcon,
  },
  {
    title: "Mentoria e Capacitação",
    desc: "Educação profissional e orientação para enfermeiros especialistas.",
    imageIcon: mentoringTrainingIcon,
  },
];

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="py-16 sm:py-24 lg:py-28 bg-muted/40">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group flex flex-col h-full bg-card rounded-md border border-border/50 p-6 text-center transition-all duration-500 hover:shadow-[0_16px_48px_-12px_hsl(var(--foreground)/0.14)] hover:-translate-y-1 hover:border-[hsl(var(--gold)/0.3)]"
            >
              <div className="flex justify-center">
                <ServiceIcon title={s.title} imageSrc={s.imageIcon}>{s.icon}</ServiceIcon>
              </div>
              <h3 className="font-semibold text-lg text-foreground font-serif mb-3 leading-tight min-h-[2.6em] flex items-center justify-center text-balance">
                {s.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-muted-foreground leading-relaxed font-sans mt-auto">
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
            <Button variant="gold" size="lg" className="w-full max-w-[300px] gap-2 px-5 sm:px-10 uppercase text-[12px] sm:text-[13px] tracking-[0.08em] sm:tracking-[0.12em] h-[52px] hover:scale-105">
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
