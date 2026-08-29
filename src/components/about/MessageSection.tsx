export default function MessageSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f9fc] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">

      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full bg-[#D5A843]/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#102A43]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* ================= SECTION HEADING ================= */}
        <div className="mb-12 text-center sm:mb-14">

          {/* Small Gold Line */}
          <div className="mb-5 flex items-center justify-center gap-3">
          

            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#B08D57] sm:text-[11px]">
              Our Message
            </p>

         
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#102A43] sm:text-5xl lg:text-[52px]">
            A Message From Us
          </h2>

          {/* Small Description */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#718096] sm:text-[15px]">
            Building meaningful connections, creating opportunities, and
            moving businesses toward a better future.
          </p>
        </div>

        {/* ================= MESSAGE CARD ================= */}
        <div className="group relative mx-auto max-w-6xl overflow-hidden rounded-[24px] border border-[#102A43]/10 bg-white shadow-[0_18px_50px_rgba(16,42,67,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(16,42,67,0.12)]">

          {/* Top Gold Border */}
          <div className="absolute left-1/2 top-0 h-[3px] w-24 -translate-x-1/2 rounded-b-full bg-[#D5A843]" />

          <div className="relative flex min-h-[400px] items-center justify-center px-6 py-16 text-center sm:px-12 sm:py-20 lg:px-20">

            <div className="w-full">

              {/* Large Quote */}
              <div className="mb-5 select-none font-serif text-[90px] font-bold leading-[0.5] text-[#D5A843]/20 sm:text-[110px]">
                “
              </div>

              {/* Main Message */}
              <p className="mx-auto max-w-4xl font-serif text-[23px] font-medium italic leading-[1.55] text-[#102A43] sm:text-3xl lg:text-[34px] lg:leading-[1.5]">
                “Connect opportunities, move business forward, and take a
                meaningful step toward the future.”
              </p>

              {/* Divider */}
              <div className="mx-auto my-8 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[#D5A843]/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#D5A843]" />
                <span className="h-px w-10 bg-[#D5A843]/40" />
              </div>

              {/* Bottom Message */}
              <p className="mx-auto max-w-2xl text-[10px] font-bold uppercase tracking-[0.18em] text-[#B08D57] sm:text-xs sm:tracking-[0.22em]">
                A New Effort To Connect Opportunities Across The World
              </p>

            </div>

          </div>

          {/* Bottom Decorative Gradient */}
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#D5A843]/40 to-transparent" />

        </div>

      

        </div>

   
    </section>
  );
}