const statistics = [
  {
    value: "15+",
    label: "Markets",
  },
  {
    value: "50+",
    label: "Global Partners",
  },
  {
    value: "10K+",
    label: "Connections",
  },
  {
    value: "24/7",
    label: "Global Support",
  },
];

export default function StoryStats() {
  return (
    <section className="relative overflow-hidden bg-[#060b1f] px-5 py-20 text-white md:px-10 md:py-28 lg:px-16">

      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">

          {/* Story */}
          <div>

            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#f2cb61]">
              Our Story
            </span>

            {/* Heading (Size reduced here) */}
            <h2 className="mt-3 max-w-2xl text-xl font-semibold leading-snug sm:text-2xl lg:text-3xl">
              Built Around a{" "}
              <span className="text-[#f2cb61]">
                Simple Belief
              </span>
            </h2>

            <div className="mt-4 h-px w-12 bg-[#d4af37]" />

            <p className="mt-5 max-w-xl text-[13px] leading-6 text-[#cdd3dc]/65 sm:text-[14px] sm:leading-[1.7]">
              We believe that opportunity should not be limited by borders,
              distance or circumstance. Every person and every business
              deserves a chance to connect with the right opportunity.
            </p>

            <p className="mt-4 max-w-xl text-[13px] leading-6 text-[#cdd3dc]/65 sm:text-[14px] sm:leading-[1.7]">
              What started with a simple idea has grown into a global
              approach to connecting people, businesses and possibilities.
              Our journey continues with the same purpose at its heart.
            </p>

            {/* Signature */}
            <div className="mt-6">
              <span className="text-xl italic text-[#f2cb61]/80">
                Yes Time Global
              </span>

              <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#cdd3dc]/40">
                Connecting Possibilities
              </p>
            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10">

            {statistics.map((stat) => (
              <div
                key={stat.label}
                className="group bg-[#060b1f] p-6 text-center transition-colors duration-500 hover:bg-[#0b122b] md:p-8"
              >

                {/* Stat Value (Size reduced here) */}
                <div className="text-2xl font-semibold text-[#f2cb61] sm:text-3xl lg:text-4xl">
                  {stat.value}
                </div>

                <div className="mx-auto mt-3 h-px w-8 bg-[#d4af37]/60 transition-all duration-500 group-hover:w-12" />

                <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-[#cdd3dc]/45">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}