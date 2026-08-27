export default function AboutHero() {
  return (
    <section className="relative min-h-[550px] overflow-hidden bg-[#FBFAF7] px-5 py-16">
      {/* Decorative Circle */}
      <div className="absolute left-1/2 -top-[440px] h-[650px] w-[650px] -translate-x-1/2 rounded-full border border-[#D9A928]/25" />

      <div className="relative z-10 mx-auto flex min-h-[450px] max-w-[900px] flex-col items-center justify-center text-center">

        {/* Stars */}
        <div className="mb-6 flex items-center justify-center gap-8 text-xl text-[#F3C64F] max-md:gap-4 max-md:text-lg">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>

        {/* Eyebrow */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-[5px] text-[#A47714] max-md:tracking-[3px]">
          Connecting Opportunities Worldwide
        </p>

        {/* Heading */}
        <h1 className="mb-6 font-serif text-[clamp(36px,5vw,72px)] font-medium leading-none tracking-[-1.5px]">
          <span className="text-[#172033]">
            ABOUT{" "}
          </span>

          <span className="text-[#D9A928]">
            YES TIME
          </span>
        </h1>

        {/* Gold Line */}
        <div className="mb-8 h-[2px] w-[140px] bg-gradient-to-r from-transparent via-[#D9A928] to-transparent max-sm:w-[100px]" />

        {/* Description */}
        <p className="mx-auto max-w-[750px] text-lg font-normal leading-relaxed text-[#3E526D] max-md:text-base max-sm:text-sm">
          A modern business platform designed to bring diverse
          business services and opportunities to people through
          a trusted and reliable system.
        </p>

        {/* Button */}
        <a
          href="#about"
          className="mt-6 inline-flex min-w-[170px] items-center justify-center rounded-full border border-[#D9A928] bg-gradient-to-br from-[#D9A928] to-[#FFD45C] px-7 py-3 text-base font-semibold text-[#111827] shadow-[0_8px_25px_rgba(217,169,40,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(217,169,40,0.30)] max-sm:px-5 max-sm:py-2.5 max-sm:text-sm"
        >
          Explore More
        </a>

      </div>
    </section>
  );
}