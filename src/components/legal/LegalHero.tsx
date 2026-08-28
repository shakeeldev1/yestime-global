import type { LegalDocument } from './legalData'

type LegalHeroProps = Pick<LegalDocument, 'label' | 'title' | 'highlight' | 'description' | 'updated'>

const LegalHero = ({ label, title, highlight, description, updated }: LegalHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f7fafc_58%,#eaf2fb_100%)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[rgba(14,116,184,0.1)] blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-[rgba(240,199,94,0.14)] blur-[80px]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex rounded-full border border-[rgba(11,59,110,0.18)] bg-[#eff6ff] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#0b3b6e]">{label}</span>
        <h1 className="mt-5 text-[clamp(2.25rem,6vw,4.5rem)] font-normal leading-[1.08] tracking-[-0.04em] text-[#071a36]">{title} <span className="text-[#c5962e]">{highlight}</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#41566f] sm:text-lg">{description}</p>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#8a6a1b]">{updated}</p>
      </div>
    </section>
  )
}

export default LegalHero
