import heroImg from "@/assets/hero-clinic.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[640px] h-[100svh] overflow-hidden bg-primary">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Clínica Integral - Enfermeira profissional em ambiente clínico moderno"
          className="w-full h-full object-contain object-center sm:object-cover sm:object-[center_25%]"
          loading="eager"
          width={1920}
          height={1080}
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
