import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Home, Users, Sparkles, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Home Care",
    description: "Atendimento domiciliar especializado com toda a estrutura e conforto que você merece.",
  },
  {
    icon: Users,
    title: "Profissionais Qualificados",
    description: "Equipe multidisciplinar com anos de experiência e formação contínua em saúde.",
  },
  {
    icon: Sparkles,
    title: "Tratamentos Avançados",
    description: "Tecnologia de ponta aliada às melhores práticas clínicas para resultados superiores.",
  },
  {
    icon: Heart,
    title: "Cuidado Humanizado",
    description: "Acolhimento e empatia em cada etapa do tratamento, priorizando o bem-estar do paciente.",
  },
];

const IntroSection = () => {
  return (
    <section className="py-16 sm:py-28 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label text-center"
        >
          Clínica de Enfermagem Especializada
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="section-title text-center max-w-3xl mx-auto"
        >
          Tratamento avançado de feridas e cuidados com estomias em{" "}
          <span className="text-gold">Cabo Frio</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="section-desc text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          Cuidado especializado, tecnologia e acompanhamento individualizado para promover qualidade de vida e evolução na cicatrização.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8 mb-14 sm:mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="premium-card p-6 sm:p-8 text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 font-serif">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <a
            href="https://wa.me/5522974017588?text=Olá! Gostaria de agendar uma consulta na Integral Clínica."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="gold"
              size="lg"
              className="w-full max-w-[300px] gap-2.5 px-5 sm:px-10 h-[52px] text-[12px] sm:text-[14px] uppercase tracking-[0.08em] sm:tracking-[0.12em] hover:scale-105"
            >
              <MessageCircle className="w-[18px] h-[18px]" />
              Agendar pelo WhatsApp
            </Button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-14 sm:mt-20 grid grid-cols-3 gap-3 sm:flex sm:justify-center sm:gap-20"
        >
          {[
            { num: "+500", label: "Pacientes Atendidos" },
            { num: "15+", label: "Anos de Experiência" },
            { num: "100%", label: "Satisfação Garantida" },
          ].map((stat) => (
            <div key={stat.label} className="min-w-0 text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gold font-serif">
                {stat.num}
              </p>
              <p className="text-[9px] sm:text-[11px] text-muted-foreground mt-1.5 uppercase tracking-[0.08em] sm:tracking-[0.15em] font-medium font-sans leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
