export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#060b1f] px-5 py-20 text-white md:px-10 md:py-24 lg:px-16"
    >

      {/* Background Dots */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#f2cb61_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Gold Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl text-center">

        {/* Eyebrow */}
        <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#f2cb61]">
          Let&apos;s Connect
        </span>

        {/* Heading (Size reduced here) */}
        <h2 className="mx-auto mt-4 max-w-3xl text-xl font-semibold leading-snug sm:text-2xl lg:text-3xl">
          Ready to Connect With the{" "}
          <span className="text-[#f2cb61]">
            Right Opportunity?
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-xl text-[13px] leading-6 text-[#cdd3dc]/60 sm:text-[14px]">
          Whether you are looking for the right partner, exploring a new
          market or building something bigger, we are here to help you take
          the next step.
        </p>

        {/* Buttons */}
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">

          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 bg-gradient-to-b from-[#f2cb61] to-[#b4872a] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#12172a] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(212,175,55,.2)]"
          >
            Start a Conversation

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="#how-we-work"
            className="inline-flex items-center justify-center border border-white/15 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[#d4af37]/50 hover:text-[#f2cb61]"
          >
            Learn How We Work
          </a>

        </div>

      </div>
    </section>
  );
}