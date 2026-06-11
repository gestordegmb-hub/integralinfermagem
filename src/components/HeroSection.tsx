import heroImg from "@/assets/hero-clinic.jpg";

const HERO_BG = "#E5E4E2";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: HERO_BG }}
    >
      {/* Mobile: 4:5 aspect ratio, image fully visible */}
      <div
        className="relative w-full lg:hidden"
        style={{ aspectRatio: "4 / 5", backgroundColor: HERO_BG }}
      >
        <img
          src={heroImg}
          alt="Clínica Integral - Enfermagem especializada em Cabo Frio"
          className="w-full h-full object-contain"
          loading="eager"
          width={1920}
          height={1080}
        />
      </div>

      {/* Desktop: keep immersive full-bleed hero */}
      <div className="relative hidden lg:block h-[100svh] min-h-[640px]">
        <img
          src={heroImg}
          alt="Clínica Integral - Enfermeira profissional em ambiente clínico moderno"
          className="w-full h-full object-cover object-[center_25%]"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
