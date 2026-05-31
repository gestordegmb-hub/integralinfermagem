import { motion } from "framer-motion";
import { Heart, Award, Cog, Clock } from "lucide-react";

const differentials = [
  { num: "01", icon: Heart, title: "Atendimento Humanizado", desc: "Cada paciente é único. Oferecemos um acolhimento que vai além do cuidado técnico, com atenção às necessidades emocionais e individuais." },
  { num: "02", icon: Award, title: "Profissionais Qualificados", desc: "Equipe certificada e em constante atualização, com especializações reconhecidas nacional e internacionalmente." },
  { num: "03", icon: Cog, title: "Tecnologia de Ponta", desc: "Equipamentos de última geração como laser, ozônio e LEDterapia para resultados mais rápidos e eficazes." },
  { num: "04", icon: Clock, title: "Atendimento Ágil", desc: "Resposta rápida, agendamento facilitado e acompanhamento contínuo para garantir a melhor experiência." },
];

const stats = [
  { num: "+2000", label: "Pacientes Atendidos" },
  { num: "+15", label: "Anos de Experiência" },
  { num: "100%", label: "Índice de Satisfação" },
  { num: "5.0", label: "Avaliação Google" },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-16 sm:py-24 lg:py-32 text-white" style={{ backgroundColor: '#09594a' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-14 sm:mb-20"
        >
          <span className="text-[12px] sm:text-[13px] uppercase tracking-[0.2em] text-gold font-semibold font-sans drop-shadow-[0_1px_6px_rgba(196,163,90,0.35)]">Diferenciais</span>
          <h2 className="text-[28px] sm:text-4xl md:text-[2.75rem] lg:text-5xl font-semibold mt-4 mb-5 text-white leading-[1.15] font-serif italic">
            O que nos torna diferentes
          </h2>
          <div className="w-16 h-[2px] mx-auto mt-5 bg-gold rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-7 mb-16 sm:mb-20">
          {differentials.map((d, i) => (
            <motion.div
              key={d.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/[0.07] border border-white/15 rounded-md p-5 sm:p-8 hover:border-gold/50 hover:bg-white/[0.09] transition-all duration-500 group"
            >
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-5 sm:text-left">
                <span className="text-4xl sm:text-5xl font-serif text-gold font-bold leading-none drop-shadow-[0_2px_8px_rgba(196,163,90,0.35)]">{d.num}</span>
                <div className="min-w-0">
                  <div className="flex flex-col items-center gap-2 mb-3 sm:flex-row sm:items-start sm:gap-3">
                    <d.icon className="w-6 h-6 shrink-0 text-gold" strokeWidth={2.25} />
                    <h3 className="font-semibold text-lg sm:text-xl text-white font-serif leading-tight">{d.title}</h3>
                  </div>
                  <p className="text-[14px] sm:text-[15px] text-white/80 leading-[1.65] font-sans">{d.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gold font-serif drop-shadow-[0_2px_10px_rgba(196,163,90,0.4)]">{s.num}</p>
              <p className="text-[11px] sm:text-[13px] text-white/80 mt-3 uppercase tracking-[0.08em] sm:tracking-[0.12em] font-sans font-semibold leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
