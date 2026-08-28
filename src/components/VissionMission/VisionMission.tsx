export default function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-[#fbfaf7] px-5 py-20 md:px-10 md:py-28 lg:px-16">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#d4af37]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#b4872a]">
            What Drives Us
          </span>

          {/* Heading (Size reduced here) */}
          <h2 className="mt-3 text-xl font-semibold text-[#12172a] sm:text-2xl lg:text-3xl">
            Vision &amp; Mission
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#d4af37]" />

            <span className="h-1.5 w-1.5 rotate-45 bg-[#d4af37]" />

            <span className="h-px w-10 bg-[#d4af37]" />
          </div>

          <p className="mx-auto mt-4 max-w-xl text-[13px] leading-6 text-[#5d6472] sm:text-[14px]">
            Our vision defines where we are going. Our mission defines how
            we get there — with purpose, integrity and a commitment to
            creating meaningful opportunities.
          </p>

        </div>

        {/* Vision & Mission Cards */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Vision */}
          <div className="group relative overflow-hidden border border-[#12172a]/10 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:p-9">

            {/* Gold Top Border */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#b4872a] via-[#f2cb61] to-[#b4872a]" />

            {/* Number */}
            <div className="mb-6 flex items-center justify-between">

              <span className="font-mono text-xs tracking-[0.25em] text-[#b4872a]">
                01
              </span>

              <span className="text-4xl text-[#d4af37]/15 transition-colors duration-500 group-hover:text-[#d4af37]/30">
                V
              </span>

            </div>

            {/* Title (Size reduced here) */}
            <h3 className="text-xl font-semibold text-[#12172a] sm:text-2xl">
              Our Vision
            </h3>

            {/* Divider */}
            <div className="mt-4 h-px w-12 bg-[#d4af37] transition-all duration-500 group-hover:w-20" />

            {/* Content */}
            <p className="mt-5 text-[13px] leading-6 text-[#5d6472] sm:text-[14px] sm:leading-[1.7]">
              To be the world&apos;s most trusted bridge between people and
              opportunity — making global possibilities accessible,
              transparent and achievable for everyone.
            </p>

            <p className="mt-4 text-[13px] leading-6 text-[#5d6472] sm:text-[14px] sm:leading-[1.7]">
              We envision a world where geography never limits ambition,
              where the right opportunity can reach the right person at the
              right time.
            </p>

            {/* Bottom Label */}
            <div className="mt-7 border-t border-[#12172a]/10 pt-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#b4872a]">
                Where We Are Going
              </span>
            </div>

          </div>

          {/* Mission */}
          <div className="group relative overflow-hidden border border-[#12172a]/10 bg-[#060b1f] p-7 text-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:p-9">

            {/* Gold Top Border */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#b4872a] via-[#f2cb61] to-[#b4872a]" />

            {/* Number */}
            <div className="mb-6 flex items-center justify-between">

              <span className="font-mono text-xs tracking-[0.25em] text-[#f2cb61]">
                02
              </span>

              <span className="text-4xl text-[#f2cb61]/10 transition-colors duration-500 group-hover:text-[#f2cb61]/20">
                M
              </span>

            </div>

            {/* Title (Size reduced here) */}
            <h3 className="text-xl font-semibold text-white sm:text-2xl">
              Our Mission
            </h3>

            {/* Divider */}
            <div className="mt-4 h-px w-12 bg-[#f2cb61] transition-all duration-500 group-hover:w-20" />

            {/* Content */}
            <p className="mt-5 text-[13px] leading-6 text-[#cdd3dc]/70 sm:text-[14px] sm:leading-[1.7]">
              We connect people, businesses and opportunities across borders
              through technology, trusted relationships and a deep
              understanding of local markets.
            </p>

            <p className="mt-4 text-[13px] leading-6 text-[#cdd3dc]/70 sm:text-[14px] sm:leading-[1.7]">
              From first connection to lasting partnership, we make the
              journey simpler, faster and more human.
            </p>

            {/* Bottom Label */}
            <div className="mt-7 border-t border-white/10 pt-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#f2cb61]">
                What We Do Every Day
              </span>
            </div>

          </div>

        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-12 max-w-xl text-center">

          <p className="text-base italic leading-7 text-[#12172a]/70 sm:text-lg">
            &ldquo;The right opportunity, at the right time, can change
            everything.&rdquo;
          </p>

          <div className="mt-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#b4872a]">
            Yes Time Global
          </div>

        </div>

      </div>
    </section>
  );
}