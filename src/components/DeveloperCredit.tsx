import { motion } from "framer-motion";

const DeveloperCredit = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-[#0a0a0a] border-t border-white/5"
      role="contentinfo"
      aria-label="Crédito do desenvolvedor"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <p className="text-center text-[11px] sm:text-[12px] tracking-[0.08em] text-white/55 font-sans">
          Site Desenvolvido por{" "}
          <a
            href="https://wa.me/5522997455396"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#D4B26A] tracking-[0.12em] transition-all duration-300 hover:text-[#E5C57F] hover:tracking-[0.18em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4B26A]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] rounded-sm px-0.5"
            aria-label="PL DIGITAL — Falar no WhatsApp"
          >
            PL DIGITAL
          </a>
        </p>
      </div>
    </motion.div>
  );
};

export default DeveloperCredit;
