import type { LegalDocument } from './legalData'

type LegalHeroProps = Pick<LegalDocument, 'label' | 'title' | 'highlight' | 'description'> & {
  updated?: string
}

const LegalHero = ({ label, title, highlight, description, updated }: LegalHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_72%_35%,#51452d_0%,#28251f_32%,#111111_78%)] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-[7%] lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#f6b93f90_1px,transparent_1px)] [background-size:38px_38px] opacity-[0.12]" />
      <div className="relative z-10 max-w-3xl">
        <span className="inline-flex rounded-full border border-[#d6b35a]/60 bg-[#020c1c]/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#f5c54e] backdrop-blur-sm">{label}</span>
        <h1 className="mt-5 break-words text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">{title} <span className="text-[#f5c54e]">{highlight}</span></h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">{description}</p>
        {updated ? <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#f5c54e]">{updated}</p> : null}
      </div>
    </section>
  )
}

export default LegalHero
