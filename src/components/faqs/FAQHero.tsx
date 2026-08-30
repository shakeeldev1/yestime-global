const FAQHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#020b1b] px-5 py-10 text-white md:px-8 lg:px-[5.5%] lg:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,197,78,0.16),transparent_25%),linear-gradient(90deg,#020b1b_0%,#020b1b_38%,rgba(2,11,27,0.92)_100%)]" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#f5c54e 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f5c54e]/40 bg-[#07182d]/70 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f5c54e]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f5c54e]" />
              Frequently asked questions
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[4rem]">
              Clear answers for your<br />
              <span className="text-[#f5c54e]">next step.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Explore answers about our programs, plans, participation process, verification, benefits, and support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#faq-list"
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#f5c54e] to-[#d99420] px-6 py-3 text-sm font-bold text-[#07182d] shadow-[0_16px_32px_rgba(245,197,78,0.2)] transition-all duration-300 hover:-translate-y-0.5"
              >
                View answers
              </a>
              <a
                href="/ContactUs"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#f5c54e] hover:bg-white/10"
              >
                Contact support
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[28px] border border-white/10 bg-[#07182d]/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.26)] backdrop-blur-md">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#f5c54e]">Quick support</p>
              <h2 className="mt-2 text-2xl font-black text-white">Need help fast?</h2>

              <div className="mt-6 space-y-4">
                {[
                  'Program and membership questions',
                  'Participation and verification guidance',
                  'Support for members and partners',
                ].map((item) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f5c54e]/60 hover:bg-white/10"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f5c54e]/15 text-[#f5c54e] transition-transform duration-300 group-hover:scale-110">✓</span>
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQHero
