import { motion } from "framer-motion";
import { Award, Shield, Star, Users } from "lucide-react";

const credentials = [
  { icon: Award, label: "COREN Registrado" },
  { icon: Shield, label: "Estomaterapeuta UERJ" },
  { icon: Star, label: "Speaker Coloplast" },
  { icon: Users, label: "Equipe Especializada" },
];

const CredentialsBar = () => {
  return (
    <section className="py-5 sm:py-6" style={{ backgroundColor: '#055F57' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {credentials.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center justify-center gap-2 sm:gap-3 group cursor-default"
            >
              <c.icon className="w-5 h-5 text-gold flex-shrink-0" />
              <span className="text-[9px] sm:text-[13px] text-primary-foreground/80 font-medium uppercase tracking-[0.08em] sm:tracking-[0.12em] font-sans group-hover:text-gold transition-colors duration-300 leading-snug">
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
