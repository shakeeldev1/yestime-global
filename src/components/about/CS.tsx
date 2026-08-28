export default function Cs() {
  return (
    <section className="w-full bg-[#0D2342] px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto flex min-h-[360px] max-w-5xl items-center justify-center text-center">

        <div className="w-full">

          {/* Small Label */}
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D5A843]">
            OUR COMMITMENT
          </p>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#D5A843] sm:text-4xl">
            Run with principle, every time
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-4xl text-sm leading-7 text-white/85 sm:text-base sm:leading-7">
            Yes Time Global Private Limited is committed to running all of its
            programs in an organized manner — in line with set principles,
            relevant laws, and the company's own terms and conditions.
            <br className="hidden sm:block" />
            We value clear information, better facilitation, and responsible
            business practice for every customer and business partner we work
            with.
          </p>

          {/* Button */}
          <div className="mt-7">
            <button
              type="button"
              className="rounded-full border border-[#B08D57] px-7 py-2.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D5A843] transition-all duration-300 hover:bg-[#D5A843] hover:text-[#0D2342]"
            >
              YES TIME GLOBAL
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}