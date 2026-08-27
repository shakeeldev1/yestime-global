const locations = [
  {
    city: "Karachi",
    country: "Pakistan",
    description: "Our regional connection point in South Asia.",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    description: "Connecting businesses across the Middle East.",
  },
  {
    city: "London",
    country: "United Kingdom",
    description: "Supporting connections across Europe.",
  },
  {
    city: "Singapore",
    country: "Singapore",
    description: "A gateway to Asia-Pacific opportunities.",
  },
  {
    city: "New York",
    country: "United States",
    description: "Building relationships across North America.",
  },
  {
    city: "Global",
    country: "Worldwide",
    description: "Expanding our network wherever opportunity exists.",
  },
];

export default function GlobalPresence() {
  return (
    <section className="relative overflow-hidden bg-[#fbfaf7] px-5 py-20 md:px-10 md:py-28 lg:px-16">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[450px] w-[450px] rounded-full bg-[#d4af37]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#b4872a]">
            Beyond Borders
          </span>

          {/* Heading (Size reduced here) */}
          <h2 className="mt-3 font-serif text-xl font-semibold text-[#12172a] sm:text-2xl lg:text-3xl">
            Global Presence
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d4af37]" />

            <span className="h-1.5 w-1.5 rotate-45 bg-[#d4af37]" />

            <span className="h-px w-10 bg-[#d4af37]" />
          </div>

          <p className="mt-4 text-[13px] leading-6 text-[#5d6472] sm:text-[14px]">
            Our perspective is global. Our relationships reach across
            continents, cultures and markets.
          </p>

        </div>

        {/* Global Map Style Area */}
        <div className="relative mt-12 overflow-hidden border border-[#12172a]/10 bg-[#060b1f] p-5 md:p-8">

          {/* Dots */}
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#f2cb61_1px,transparent_1px)] [background-size:22px_22px]" />

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#d4af37]/10 md:block" />

          <div className="relative grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">

            {locations.map((location, index) => (
              <div
                key={location.city}
                className="group relative bg-[#060b1f] p-6 transition-all duration-500 hover:bg-[#0b122b] md:p-7"
              >

                {/* Location Number */}
                <div className="flex items-center justify-between">

                  <span className="font-mono text-[9px] tracking-[0.25em] text-[#f2cb61]/60">
                    0{index + 1}
                  </span>

                  <span className="h-2 w-2 rounded-full border border-[#f2cb61] bg-[#f2cb61]/20 transition-all duration-500 group-hover:bg-[#f2cb61] group-hover:shadow-[0_0_12px_3px_rgba(242,203,97,.4)]" />

                </div>

                {/* City */}
                <h3 className="mt-5 font-serif text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#f2cb61]">
                  {location.city}
                </h3>

                {/* Country */}
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#f2cb61]/70">
                  {location.country}
                </p>

                {/* Divider */}
                <div className="mt-4 h-px w-8 bg-[#d4af37] transition-all duration-500 group-hover:w-12" />

                {/* Description */}
                <p className="mt-4 text-[13px] leading-6 text-[#cdd3dc]/50">
                  {location.description}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom Statement */}
        <p className="mx-auto mt-8 max-w-xl text-center font-serif text-base italic text-[#12172a]/65 sm:text-lg">
          One world. Many possibilities. One connected future.
        </p>

      </div>
    </section>
  );
}