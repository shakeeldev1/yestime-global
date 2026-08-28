const FAQHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#020c1c] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-[7%] lg:py-20">
      <div className="absolute inset-0">
        <img src="/hero-yes.png" alt="Connected global opportunities" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020c1c] via-[#020c1c]/80 to-[#020c1c]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020c1c] via-transparent to-transparent opacity-90" />
      </div>
      <div className="relative z-10 max-w-2xl">
        <span className="inline-flex rounded-full border border-[#d6b35a]/60 bg-[#020c1c]/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#f5c54e] backdrop-blur-sm">Frequently asked questions</span>
        <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">Clear answers for your <span className="text-[#f5c54e]">next step.</span></h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">Explore answers about our programs, plans, participation process, verification, benefits, and support.</p>
      </div>
    </section>
  )
}

export default FAQHero
