export default function AboutHero() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-[#FBFAF7] px-3 py-20 sm:px-5 sm:py-20">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#B08D57]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-[#102A43]/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B08D57]/10" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#B08D57]/10" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">

        {/* Small Label */}
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#B08D57]/30 bg-white/70 px-5 py-2.5 shadow-sm backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-[#B08D57]" />

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#102A43]">
            About Yes Time
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-4xl text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-[#102A43] sm:text-5xl lg:text-6xl">
          Creating Possibilities.

          <span className="mt-2 block text-[#B08D57]">
            Shaping Tomorrow, Together.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-7 text-[#52606D] sm:text-lg">
          We believe every opportunity has the power to create change.
          Yes Time is built around growth, trust, innovation, and creating
          meaningful possibilities for a better future.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">

          {/* Primary Button */}
          <button
            type="button"
            className="group flex items-center gap-3 rounded-full bg-[#102A43] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#102A43]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#183B56] hover:shadow-xl"
          >
            Discover Our Story

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          {/* Secondary Button */}
          <button
            type="button"
            className="rounded-full border border-[#102A43]/15 bg-white/70 px-7 py-3.5 text-sm font-semibold text-[#102A43] shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B08D57] hover:bg-[#B08D57] hover:text-white"
          >
            Get In Touch
          </button>

        </div>

        {/* Bottom Information Cards */}
        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-3xl border border-[#102A43]/10 bg-white/60 shadow-sm backdrop-blur-md sm:grid-cols-3">

          {/* Card 1 */}
          <div className="px-5 py-5 sm:border-r sm:border-[#102A43]/10">
            <p className="text-xl font-bold text-[#102A43]">
              Trust
            </p>

            <p className="mt-1 text-xs uppercase tracking-wider text-[#7B8794]">
              At Our Core
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-t border-[#102A43]/10 px-5 py-5 sm:border-t-0 sm:border-r sm:border-[#102A43]/10">
            <p className="text-xl font-bold text-[#102A43]">
              Growth
            </p>

            <p className="mt-1 text-xs uppercase tracking-wider text-[#7B8794]">
              Always Forward
            </p>
          </div>

          {/* Card 3 */}
          <div className="border-t border-[#102A43]/10 px-5 py-5 sm:border-t-0">
            <p className="text-xl font-bold text-[#102A43]">
              Purpose
            </p>

            <p className="mt-1 text-xs uppercase tracking-wider text-[#7B8794]">
              Making Impact
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}