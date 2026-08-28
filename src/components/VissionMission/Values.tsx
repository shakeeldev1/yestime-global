const values = [
  {
    number: "01",
    title: "Integrity",
    description:
      "We do what we say, and we say what we mean. Trust is the foundation of every relationship we build.",
  },
  {
    number: "02",
    title: "People First",
    description:
      "Behind every opportunity is a person with a story, a goal and a future. We never lose sight of that.",
  },
  {
    number: "03",
    title: "Excellence",
    description:
      "We hold ourselves to a higher standard — in our service, our partnerships and everything we deliver.",
  },
  {
    number: "04",
    title: "Global Mindset",
    description:
      "We think beyond borders, embrace different perspectives and build connections across cultures.",
  },
  {
    number: "05",
    title: "Innovation",
    description:
      "We continuously improve how people and opportunities connect through technology and better ideas.",
  },
  {
    number: "06",
    title: "Impact",
    description:
      "We measure success not only by what we achieve, but by the positive difference we create.",
  },
];

export default function Values() {
  return (
    <section
      id="values"
      className="relative overflow-hidden bg-[#060b1f] px-5 py-20 text-white md:px-10 md:py-28 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#d4af37]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#f2cb61]">
            What We Stand For
          </span>

          {/* Heading (Size reduced here) */}
          <h2 className="mt-3 text-xl font-semibold sm:text-2xl lg:text-3xl">
            Our Core Values
          </h2>

          {/* Gold Divider */}
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#d4af37]" />

            <span className="h-1.5 w-1.5 rotate-45 bg-[#f2cb61] shadow-[0_0_10px_3px_rgba(242,203,97,.35)]" />

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>

          <p className="mx-auto mt-4 text-[13px] leading-6 text-[#cdd3dc]/60 sm:text-[14px]">
            The principles that guide every decision, every partnership and
            every opportunity we create.
          </p>

        </div>

        {/* Values Grid */}
        <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">

          {values.map((value) => (
            <div
              key={value.number}
              className="group relative bg-[#060b1f] p-6 transition-all duration-500 hover:bg-[#0a1029] md:p-8"
            >

              {/* Hover Gold Line */}
              <div className="absolute left-0 top-0 h-px w-0 bg-[#f2cb61] transition-all duration-500 group-hover:w-full" />

              {/* Number */}
              <div className="flex items-start justify-between">

                <span className="font-mono text-[10px] tracking-[0.25em] text-[#f2cb61]/70">
                  {value.number}
                </span>

                <span className="text-3xl text-white/[0.05] transition-all duration-500 group-hover:text-[#f2cb61]/10">
                  {value.number}
                </span>

              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#f2cb61]">
                {value.title}
              </h3>

              {/* Small Line */}
              <div className="mt-3 h-px w-8 bg-[#d4af37]/60 transition-all duration-500 group-hover:w-12 group-hover:bg-[#f2cb61]" />

              {/* Description */}
              <p className="mt-4 text-[13px] leading-6 text-[#cdd3dc]/55 transition-colors duration-300 group-hover:text-[#cdd3dc]/70">
                {value.description}
              </p>

              {/* Bottom Arrow */}
              <div className="mt-6 flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-[#f2cb61]/50 opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                <span>Our Principle</span>
                <span>→</span>
              </div>

            </div>
          ))}

        </div>

        {/* Bottom Quote */}
        <div className="mx-auto mt-12 max-w-xl text-center">

          <p className="text-base italic leading-7 text-[#cdd3dc]/60 sm:text-lg">
            We believe that how we work is just as important as what we
            achieve.
          </p>

        </div>

      </div>
    </section>
  );
}