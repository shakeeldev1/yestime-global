import { ArrowRight, Handshake, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const InvestorsHero = () => {
  const { t, i18n } = useTranslation('investors')
  const isRTL = i18n.dir() === 'rtl'

  const highlights = [
    { icon: TrendingUp, label: t('hero.highlights.0.label'), value: t('hero.highlights.0.value') },
    { icon: Handshake, label: t('hero.highlights.1.label'), value: t('hero.highlights.1.value') },
    { icon: ShieldCheck, label: t('hero.highlights.2.label'), value: t('hero.highlights.2.value') },
    { icon: Sparkles, label: t('hero.highlights.3.label'), value: t('hero.highlights.3.value') },
  ]

  return (
    <section className="relative overflow-hidden bg-[#020c1c] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-[7%] lg:py-20">
      <div className="absolute inset-0" style={{ transform: isRTL ? 'scaleX(-1)' : 'scaleX(1)' }}>
        <img src="/hero-yes.png" alt={t('hero.imageAlt')} className="h-full w-full object-cover object-center opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020c1c] via-[#020c1c]/80 to-[#020c1c]/30" />
        <div className="absolute inset-0 bg-[radial-gradient(#f6b93f90_1px,transparent_1px)] [background-size:38px_38px] opacity-[0.12]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-[#d6b35a]/60 bg-[#020c1c]/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#f5c54e] backdrop-blur-sm">
            {t('hero.badge')}
          </span>
          <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {t('hero.titleLead')}{' '}
            <span className="text-[#f5c54e]">Yes Time Global.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
            {t('hero.subtitle')}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/ContactUs"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#f5c54e] to-[#d99420] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-[#07182d] shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 hover:shadow-amber-500/30"
            >
              {t('hero.ctaPrimary')}
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 rounded-xl border border-[#d89d2c]/60 bg-[#020c1c]/40 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-[#d89d2c]"
            >
              {t('hero.ctaSecondary')}
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#020c1c]/60 p-3.5 backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#d7951e] bg-[#020c1c] text-[#ebb02f]">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">{label}</p>
                <p className="mt-1 text-sm font-semibold text-white">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InvestorsHero
