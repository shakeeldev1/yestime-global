const FAQHero = () => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f7fafc_58%,#eaf2fb_100%)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[rgba(14,116,184,0.1)] blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-[rgba(240,199,94,0.14)] blur-[80px]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex rounded-full border border-[rgba(11,59,110,0.18)] bg-[#eff6ff] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#0b3b6e]">Frequently asked questions</span>
        <h1 className="mt-5 text-[clamp(2.25rem,6vw,4.5rem)] font-normal leading-[1.08] tracking-[-0.04em] text-[#071a36]">Clear answers for your <span className="text-[#c5962e]">next step.</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#41566f] sm:text-lg">Explore answers about our programs, plans, participation process, verification, benefits, and support.</p>
      </div>
    </section>
  )
}

export default FAQHero
