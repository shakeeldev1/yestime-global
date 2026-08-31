const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#000000] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-[7%] lg:py-20">
      <div className="absolute inset-0">
        <img src="/hero-yes.png" alt="Connected global opportunities" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-[#020c1c]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020c1c] via-transparent to-transparent opacity-90" />
      </div>
      <div className="relative z-10 max-w-2xl">
        <span className="inline-flex rounded-full border border-[#d6b35a]/60 bg-[#020c1c]/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#f5c54e] backdrop-blur-sm">
          Contact YES TIME GLOBAL
        </span>
        <h1 className="mt-5 break-words text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          Let’s connect and{' '}
          <span className="text-[#f5c54e]">move opportunities forward.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
          Contact us about programs, participation, customer support, partnerships, investment, and global opportunities.
        </p>
        <a href="#contact-form" className="mt-8 inline-flex cursor-pointer items-center rounded-xl bg-gradient-to-r from-[#f5c54e] to-[#d99420] px-5 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#07182d] shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 hover:shadow-amber-500/30 focus-visible:outline-2 focus-visible:outline-amber-400">
          Start a conversation
        </a>
      </div>
    </section>
  )
}

export default ContactHero
