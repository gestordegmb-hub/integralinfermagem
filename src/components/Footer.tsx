import { Instagram, Facebook, ExternalLink, Phone, MapPin, Clock } from "lucide-react";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="text-primary-foreground" style={{ backgroundColor: '#055F57' }}>
      {/* Gold top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={logoImg} alt="Clínica Integral" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <span className="font-semibold text-base tracking-wide font-serif block">Clínica Integral</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold font-sans">Enfermagem Especializada</span>
              </div>
            </div>
            <div className="w-10 h-[2px] bg-gold mb-5 rounded-full" />
            <p className="text-[14px] text-white/80 leading-[1.65] font-sans">
              Cuidado humanizado com a qualidade que você merece.
              Mais de 15 anos de experiência em enfermagem especializada.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { href: "https://www.instagram.com/integralcabofrio/", icon: Instagram },
                { href: "https://www.facebook.com/profile.php?id=100071536586636", icon: Facebook },
                { href: "https://linktr.ee/integralcabofrio", icon: ExternalLink },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all duration-300" aria-label="Social">
                  <s.icon className="w-4 h-4 text-white/80 hover:text-gold" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[12px] sm:text-[13px] uppercase tracking-[0.14em] text-gold mb-6 font-semibold font-sans">Navegação</h4>
            <ul className="space-y-3.5 text-[14px] text-white/80 font-sans">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre a Clínica", href: "#sobre" },
                { label: "Serviços", href: "#especialidades" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "Contato", href: "#agendamento" },
              ].map((l) => (
                <li key={l.href}><a href={l.href} className="hover:text-gold transition-colors duration-200">{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[12px] sm:text-[13px] uppercase tracking-[0.14em] text-gold mb-6 font-semibold font-sans">Serviços</h4>
            <ul className="space-y-3.5 text-[14px] text-white/80 font-sans">
              <li>Tratamento de Feridas</li>
              <li>Estomias</li>
              <li>Laserterapia</li>
              <li>Podiatria</li>
              <li>Ozonioterapia</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] sm:text-[13px] uppercase tracking-[0.14em] text-gold mb-6 font-semibold font-sans">Contato</h4>
            <ul className="space-y-4 text-[14px] text-white/80 font-sans">
              <li className="flex items-center gap-3">
                <Phone className="w-[18px] h-[18px] text-gold flex-shrink-0" strokeWidth={2.25} />
                <a href="https://wa.me/5522974017588" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">(22) 97401-7588</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-[18px] h-[18px] text-gold flex-shrink-0" strokeWidth={2.25} />
                <a href="https://wa.me/5522998271485" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">(22) 99827-1485</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-[18px] h-[18px] text-gold mt-0.5 flex-shrink-0" strokeWidth={2.25} />
                <span>Rua Cuiabá, 193<br />Cabo Frio — RJ</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-[18px] h-[18px] text-gold mt-0.5 flex-shrink-0" strokeWidth={2.25} />
                <span>Seg–Sex: 09h–18h<br />Sáb: 09h–13h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[13px] text-primary-foreground/60 text-center sm:text-left font-sans">
            © 2026 Clínica Integral — Enfermagem Especializada. Todos os direitos reservados.
          </p>
          <p className="text-[13px] text-primary-foreground/50 text-center font-sans">
            COREN-RJ · Enfermagem com Excelência
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
