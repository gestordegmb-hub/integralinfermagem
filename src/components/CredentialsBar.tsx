import { motion } from "framer-motion";
import { Award, Shield, Star, Users } from "lucide-react";
import padraoVerde from "@/assets/padrao-verde.png";

const credentials = [
  { icon: Award, label: "COREN Registrado" },
  { icon: Shield, label: "Estomaterapeuta UERJ" },
  { icon: Star, label: "Speaker Coloplast" },
  { icon: Users, label: "Equipe Especializada" },
];

const CredentialsBar = () => {
  return (
    <section
      className="py-6 sm:py-8"
      style={{
        backgroundColor: '#09594a',
        backgroundImage: `url(${padraoVerde})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {credentials.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center justify-center gap-2.5 sm:gap-3 group cursor-default"
            >
              <c.icon className="w-6 h-6 sm:w-6 sm:h-6 text-gold flex-shrink-0 drop-shadow-[0_1px_4px_rgba(196,163,90,0.35)]" strokeWidth={2.25} />
              <span className="text-[11px] sm:text-[14px] text-white font-semibold uppercase tracking-[0.08em] sm:tracking-[0.12em] font-sans group-hover:text-gold transition-colors duration-300 leading-snug">
                {c.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsBar;
