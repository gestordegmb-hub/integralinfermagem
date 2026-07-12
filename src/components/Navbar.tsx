import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Calendar } from "lucide-react";
import logoImg from "@/assets/logo-navbar.webp";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#especialidades" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#agendamento" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/40 py-1.5 lg:py-2.5 shadow-sm"
            : "bg-primary/20 backdrop-blur-md py-1.5 lg:py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main row: Logo | Nav Links | Actions */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-2.5 shrink-0">
              <img
                src={logoImg}
                alt="Clínica Integral"
                className="w-11 h-11 lg:w-12 lg:h-12 object-contain"
                width={48}
                height={48}
                decoding="async"
              />

              <div className="leading-none">
                <span
                  className={`font-semibold text-[15px] lg:text-base block transition-colors duration-500 font-serif ${
                    scrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  Clínica Integral
                </span>
                <span
                  className={`text-[8px] lg:text-[9px] uppercase tracking-[0.18em] block mt-0.5 transition-colors duration-500 font-sans font-medium ${
                    scrolled ? "text-muted-foreground" : "text-white/55"
                  }`}
                >
                  Enfermagem Especializada
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links - centered */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[0.12em] font-medium transition-colors duration-300 font-sans hover:text-gold whitespace-nowrap ${
                    scrolled ? "text-muted-foreground" : "text-white/80"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3 lg:gap-4 shrink-0">
              <a
                href="https://wa.me/5522974017588"
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden md:flex items-center gap-1.5 text-[11px] lg:text-[12px] font-medium transition-colors whitespace-nowrap ${
                  scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"
                }`}
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                (22) 97401-7588
              </a>

              <a href="#agendamento" className="hidden sm:block">
                <Button
                  variant="gold"
                  size="default"
                  className="text-[10px] lg:text-[11px] px-4 lg:px-6 py-2 h-9 lg:h-10 uppercase tracking-[0.12em] hover:scale-105"
                >
                  Agendar Consulta
                </Button>
              </a>

              <button
                className={`lg:hidden p-2 rounded-md transition-all duration-300 ${
                  scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
                }`}
                onClick={() => setIsOpen(true)}
                aria-label="Abrir menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-foreground/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-[80vw] max-w-xs bg-background transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ boxShadow: isOpen ? "-20px 0 60px -15px rgba(0,0,0,0.15)" : "none" }}
      >
        <div className="flex items-center justify-between p-5 border-b border-border/50">
          <a href="#inicio" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
            <img src={logoImg} alt="Clínica Integral" className="w-10 h-10 object-contain" width={40} height={40} loading="lazy" decoding="async" />
            <span className="font-semibold text-[15px] text-foreground font-serif">Clínica Integral</span>
          </a>
          <button className="text-muted-foreground hover:text-foreground transition-colors p-1.5" onClick={() => setIsOpen(false)} aria-label="Fechar menu">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-5 space-y-0.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-3 py-3.5 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-border/50 space-y-3 bg-background">
          <a href="https://wa.me/5522974017588" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-muted-foreground hover:text-gold transition-colors">
            <Phone className="w-4 h-4" />
            (22) 97401-7588
          </a>
          <a href="#agendamento" onClick={() => setIsOpen(false)}>
            <Button variant="gold" size="default" className="w-full gap-2 h-11 text-[12px] uppercase tracking-[0.12em]">
              <Calendar className="w-4 h-4" />
              Agendar Consulta
            </Button>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
