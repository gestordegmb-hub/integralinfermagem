import dividerWave from "@/assets/ondas-decorativas.png";

const SectionDivider = () => {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden h-[120px] sm:h-[150px] lg:h-[180px]"
    >
      <img
        src={dividerWave}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover object-center select-none pointer-events-none"
      />
    </div>
  );
};

export default SectionDivider;