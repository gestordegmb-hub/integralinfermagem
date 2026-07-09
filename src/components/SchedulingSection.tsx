import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Phone, Clock } from "lucide-react";

const specialtyOptions = [
  "Tratamento avançado de feridas",
  "Estomias",
  "Pé diabético",
  "Laserterapia",
  "Ozonioterapia",
  "LEDterapia",
  "Terapia regenerativa",
  "Podiatria",
  "Pós-operatórios",
  "Mentoria e treinamento",
];

const contactInfo = [
  { icon: Phone, label: "WhatsApp", value: "(22) 97401-7588", href: "https://wa.me/5522974017588" },
  { icon: Phone, label: "Telefone", value: "(22) 99827-1485", href: "https://wa.me/5522998271485" },
  { icon: MapPin, label: "Endereço", value: "Rua Cuiabá, 193 — Cabo Frio, RJ" },
  { icon: Clock, label: "Horário", value: "Seg–Sex: 09h–18h | Sáb: 09h–13h" },
];

const SchedulingSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    specialty: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Vim pelo site e gostaria de agendar uma consulta na Clínica Integral.%0A%0A*Nome:* ${encodeURIComponent(form.name)}%0A*Telefone:* ${encodeURIComponent(form.phone)}${form.email ? `%0A*E-mail:* ${encodeURIComponent(form.email)}` : ""}%0A*Especialidade:* ${encodeURIComponent(form.specialty)}${form.message ? `%0A*Mensagem:* ${encodeURIComponent(form.message)}` : ""}`;
    window.open(`https://wa.me/5522974017588?text=${text}`, "_blank");
  };

  const inputClass = "w-full px-4 py-3.5 sm:py-4 rounded-md border border-border/60 bg-background text-foreground text-[15px] focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold/50 transition-all duration-200 placeholder:text-muted-foreground/50 font-sans";

  return (
    <section id="agendamento" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-14 sm:mb-20"
        >
          <span className="section-label">Contato</span>
          <h2 className="section-title">Estamos prontos para atendê-lo</h2>
          <div className="premium-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="premium-card p-5 sm:p-9 space-y-5">
              <div>
                <label className="block text-[12px] font-medium text-foreground mb-2.5 uppercase tracking-[0.12em] font-sans">Nome completo *</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Seu nome" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[12px] font-medium text-foreground mb-2.5 uppercase tracking-[0.12em] font-sans">Telefone / WhatsApp *</label>
                  <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="(22) 99999-9999" />
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-foreground mb-2.5 uppercase tracking-[0.12em] font-sans">E-mail</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="seu@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-medium text-foreground mb-2.5 uppercase tracking-[0.12em] font-sans">Serviço de Interesse *</label>
                <select required value={form.specialty} onChange={(e) => setForm({ ...form, specialty: e.target.value })} className={inputClass}>
                  <option value="">Selecione um serviço</option>
                  {specialtyOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[12px] font-medium text-foreground mb-2.5 uppercase tracking-[0.12em] font-sans">Mensagem</label>
                <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Conte-nos como podemos ajudar..." />
              </div>
              <Button variant="gold" size="lg" type="submit" className="w-full gap-2 uppercase text-[12px] sm:text-[13px] tracking-[0.08em] sm:tracking-[0.12em] h-[52px] hover:scale-[1.02]">
                <MessageCircle className="w-4 h-4" />
                Enviar Mensagem via WhatsApp
              </Button>
              <p className="text-[12px] text-muted-foreground/60 text-center font-sans">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </form>
          </motion.div>

          {/* Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-5"
          >
            {contactInfo.map((c) => (
              <div key={c.label} className="flex items-start gap-3 sm:gap-4 p-5 sm:p-6 rounded-md bg-muted/50 border border-border/30">
                <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5 text-gold-dark" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.12em] gold-text font-medium font-sans mb-1.5">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-[15px] sm:text-base text-foreground hover:text-gold transition-colors font-sans font-medium">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-[15px] sm:text-base text-foreground font-sans leading-relaxed">{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-md overflow-hidden border border-border/40 h-[300px] sm:h-[350px] lg:h-[400px]">
              <iframe
                title="Localização Integral Clínica"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.893709983055!2d-42.0367919!3d-22.880384499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9705fd2acef5b3%3A0x3ae8ba75e5ab493!2sCl%C3%ADnica%20de%20Enfermagem%20Integral%20Cabo%20Frio!5e0!3m2!1spt-BR!2sbr!4v1774570851613!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SchedulingSection;
