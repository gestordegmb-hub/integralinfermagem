import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quais tipos de feridas são atendidas?",
    answer:
      "Atendemos feridas agudas e crônicas, lesões por pressão, feridas cirúrgicas, úlceras venosas, arteriais e diabéticas, sempre com avaliação individualizada.",
  },
  {
    question: "O atendimento também inclui cuidados com estomias?",
    answer:
      "Sim. Realizamos orientação, troca de dispositivos, cuidados com a pele ao redor da estomia e acompanhamento para adaptação segura à rotina.",
  },
  {
    question: "Como é feita a avaliação inicial?",
    answer:
      "A avaliação considera o histórico do paciente, características da ferida, sinais de risco, rotina de cuidados e definição do plano terapêutico mais adequado.",
  },
  {
    question: "Os curativos utilizam tecnologias avançadas?",
    answer:
      "Quando indicado, utilizamos recursos e coberturas especiais para favorecer a cicatrização, controlar exsudato, proteger a pele e reduzir riscos de complicações.",
  },
  {
    question: "É possível receber atendimento domiciliar?",
    answer:
      "Sim. O cuidado pode ser realizado em domicílio, com acompanhamento especializado e orientações para familiares ou cuidadores.",
  },
  {
    question: "Como agendar uma avaliação?",
    answer:
      "O agendamento pode ser feito pelo WhatsApp da clínica. A equipe orienta sobre horários, informações necessárias e próximos passos do atendimento.",
  },
];

const FAQSection = () => {
  return (
    <section id="duvidas" className="py-16 sm:py-20 lg:py-28 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="section-label">Dúvidas frequentes</p>
          <h2 className="section-title">
            Perguntas comuns sobre <br className="hidden sm:inline" />o cuidado especializado
          </h2>
          <p className="section-desc">
            Informações essenciais para entender o acompanhamento em feridas, estomias e cuidados domiciliares.
          </p>
          <div className="premium-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="w-full border-t border-border/70">
            {faqItems.map((item) => (
              <AccordionItem key={item.question} value={item.question} className="border-border/70">
                <AccordionTrigger className="py-5 text-left font-serif text-lg font-semibold leading-snug text-foreground hover:no-underline data-[state=open]:text-gold sm:py-6 sm:text-2xl">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
