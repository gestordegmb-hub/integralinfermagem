import heroDesktopAsset from "@/assets/hero-clinic-desktop-v2.png.asset.json";
import heroMobileAsset from "@/assets/hero-clinic-mobile.png.asset.json";


const HERO_BG = "#09594a";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: HERO_BG }}
    >
      {/* Mobile: 4:5 vertical composition */}
      <div
        className="relative w-full lg:hidden"
        style={{ aspectRatio: "4 / 5", backgroundColor: HERO_BG }}
      >
        <img
          src={heroMobileAsset.url}
          alt="Clínica Integral - Enfermagem especializada em Cabo Frio"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1080}
          height={1350}
        />
      </div>


      {/* Desktop: keep immersive full-bleed hero */}
      <div className="relative hidden lg:block w-full" style={{ aspectRatio: "16 / 9" }}>
        <img
          src={heroDesktopAsset.url}
          alt="Clínica Integral - Enfermeira profissional em ambiente clínico moderno"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
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
