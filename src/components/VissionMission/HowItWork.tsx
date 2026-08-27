const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding people, businesses, goals and the opportunity behind every connection.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "We bring the right people and opportunities together through trusted relationships and global networks.",
  },
  {
    number: "03",
    title: "Enable",
    description:
      "We simplify the journey by providing the knowledge, technology and support needed to move forward.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "We focus on long-term relationships that create sustainable growth and meaningful impact.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="relative overflow-hidden bg-[#f8f7f3] px-5 py-20 md:px-10 md:py-28 lg:px-16"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-[#d4af37]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#b4872a]">
            Our Approach
          </span>

          {/* Heading (Size reduced here) */}
          <h2 className="mt-3 font-serif text-xl font-semibold text-[#12172a] sm:text-2xl lg:text-3xl">
            How We Work
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d4af37]" />

            <span className="h-1.5 w-1.5 rotate-45 bg-[#d4af37]" />

            <span className="h-px w-10 bg-[#d4af37]" />
          </div>

          <p className="mt-4 text-[13px] leading-6 text-[#5d6472] sm:text-[14px]">
            A simple philosophy guides everything we do: understand deeply,
            connect thoughtfully and create lasting value.
          </p>

        </div>

        {/* Steps */}
        <div className="relative mt-14">

          {/* Connecting Line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-[#d4af37]/25 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative text-center"
              >

                {/* Number Circle */}
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#f8f7f3] transition-all duration-500 group-hover:border-[#b4872a] group-hover:shadow-[0_0_25px_rgba(212,175,55,.18)]">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#060b1f] font-mono text-xs text-[#f2cb61]">
                    {step.number}
                  </div>

                </div>

                {/* Title */}
                <h3 className="mt-5 font-serif text-xl font-semibold text-[#12172a] transition-colors duration-300 group-hover:text-[#b4872a]">
                  {step.title}
                </h3>

                {/* Line */}
                <div className="mx-auto mt-3 h-px w-8 bg-[#d4af37] transition-all duration-500 group-hover:w-12" />

                {/* Description */}
                <p className="mt-4 text-[13px] leading-6 text-[#5d6472]">
                  {step.description}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}