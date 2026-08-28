export default function V() {
  return (
    <section className="relative min-h-[450px] w-full overflow-hidden">

      {/* Background Image */}
      <img
        src="https://i.pinimg.com/736x/b5/c1/50/b5c150cc6535abdb4fcb767ea252c954.jpg"
        alt="Earth from space at night"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#020B18]/70" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020B18]/80 via-[#020B18]/45 to-[#020B18]/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[450px] max-w-6xl items-center px-5 sm:px-8 lg:px-10">

        <div className="max-w-2xl">

          {/* Small Label */}
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D5A843]">
            OUR VISION, IN ONE LINE
          </p>

          {/* Heading */}
          <h2 className="font-serif text-3xl font-semibold leading-[1.15] text-white sm:text-4xl lg:text-5xl">
            Pakistan first
            <span className="font-normal text-white/85">
              {" "}— then the world
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            We're building this platform for Pakistan first, with a clear
            intent to grow into new countries and markets as the business
            connects more people to more opportunities.
          </p>

        </div>

      </div>
    </section>
  );
}