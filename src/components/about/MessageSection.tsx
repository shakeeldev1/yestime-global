export default function MessageSection() {
  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
            OUR MESSAGE
          </p>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#102A43] sm:text-5xl">
            Our message
          </h2>
        </div>

        {/* Message Card */}
        <div className="mx-auto flex min-h-[390px] max-w-6xl items-center justify-center rounded-[22px] border border-[#102A43]/10 bg-white px-6 py-14 text-center shadow-sm sm:px-10 lg:px-16">

          <div className="w-full">

            {/* Quote Mark */}
            <div className="mb-10 font-serif text-5xl font-bold leading-none text-[#D5A843]">
              “
            </div>

            {/* Main Message */}
            <p className="mx-auto max-w-5xl font-serif text-2xl font-normal italic leading-[1.6] text-[#102A43] sm:text-3xl lg:text-[32px]">
              Connect opportunities, move business forward, and take a step
              toward the future.
            </p>

            {/* Bottom Message */}
            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.08em] text-[#B08D57] sm:text-base">
              A NEW EFFORT TO CONNECT OPPORTUNITIES ACROSS THE WORLD
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}