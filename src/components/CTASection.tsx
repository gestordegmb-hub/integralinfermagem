import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, CheckCircle } from "lucide-react";
import padraoDourado from "@/assets/padrao-dourado.png";

const CTASection = () => {
  const buttonBgStyle = {
    backgroundImage: `url(${padraoDourado})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } as const;

  return (
    <section
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#09594a' }}
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-[28px] sm:text-4xl lg:text-5xl font-semibold text-white font-serif italic leading-[1.15] mb-6 sm:mb-8">
            Agende Sua Consulta com Especialistas
          </h2>
          <p className="text-[15px] sm:text-base text-white/70 leading-[1.65] mb-8 sm:mb-10 font-sans max-w-lg mx-auto">
            Dê o primeiro passo para um cuidado de saúde verdadeiramente especializado.
            Nossa equipe está{" "}
            <span className="whitespace-nowrap">prontos&nbsp;para&nbsp;atendê-lo</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-8 mb-10 sm:mb-12">
            {[
              "Resposta em até 1 hora",
              "Atendimento 6 dias por semana",
              "Equipe certificada",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 drop-shadow-[0_1px_4px_rgba(196,163,90,0.4)]" strokeWidth={2.25} />
                <span className="text-[13px] sm:text-[15px] text-white font-sans font-semibold">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/5522974017588?text=Olá! Vim pelo site e gostaria de agendar uma consulta na Clínica Integral."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="hero" size="lg" style={buttonBgStyle} className="gap-2.5 px-5 sm:px-10 h-[52px] w-full uppercase text-[12px] sm:text-[13px] tracking-[0.08em] sm:tracking-[0.12em] hover:scale-105 text-primary border border-gold/40">
                <MessageCircle className="w-[18px] h-[18px] shrink-0" />
                Agende sua Consulta
              </Button>
            </a>
            <a href="tel:+5522974017588" className="w-full sm:w-auto">
              <Button
                variant="heroOutline"
                size="lg"
                style={buttonBgStyle}
                className="gap-2.5 px-5 sm:px-10 h-[52px] w-full uppercase text-[12px] sm:text-[13px] tracking-[0.08em] sm:tracking-[0.12em] text-primary border border-gold/40 hover:scale-105"
              >
                <Phone className="w-[18px] h-[18px] shrink-0" />
                Ligar Agora
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
