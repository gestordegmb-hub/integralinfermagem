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
      <div
        className="relative w-full aspect-[4/5] lg:aspect-[16/9]"
        style={{ backgroundColor: HERO_BG }}
      >
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={heroDesktopAsset.url}
            width={1920}
            height={1080}
          />
          <img
            src={heroMobileAsset.url}
            alt="Clínica Integral - Enfermagem especializada em Cabo Frio"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={1080}
            height={1350}
          />
        </picture>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none hidden lg:block" />
      </div>
    </section>
  );
};

export default HeroSection;
