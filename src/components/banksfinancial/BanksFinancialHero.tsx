import { ArrowRight, BadgeCheck, Building2, CircleDollarSign, ShieldCheck, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const BanksFinancialHero = () => {
  const { t, i18n } = useTranslation("banks")
  const isRTL = i18n.dir() === 'rtl'

  const heroPoints = [
    { icon: ShieldCheck, title: t('hero.points.secureBanking.title'), text: t('hero.points.secureBanking.text') },
    { icon: BadgeCheck, title: t('hero.points.trustedPartners.title'), text: t('hero.points.trustedPartners.text') },
    { icon: CircleDollarSign, title: t('hero.points.transparentProcess.title'), text: t('hero.points.transparentProcess.text') },
    { icon: Building2, title: t('hero.points.smartSolutions.title'), text: t('hero.points.smartSolutions.text') },
  ]

  return (
    <section className="relative min-h-[520px] overflow-hidden bg-[#000000] px-6 py-12 text-white sm:px-10 lg:px-16">
      {/* Clear Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-90 lg:bg-right-top"
        style={{
          backgroundImage: `url('/bank.png')`,
          transform: isRTL ? 'scaleX(-1)' : 'scaleX(1)',
        }}
      />

      {/* Dark Gradient Overlay - Covers text on left, leaves right side visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 lg:via-[#000000]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent" />
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#f5c54e]/15 blur-[120px]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-2xl pt-4">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f5c54e]/40 bg-[#061426]/80 px-4 py-1.5 backdrop-blur-md">
            <Target size={14} className="text-[#f5c54e]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c54e]">
              {t('hero.badge')}
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
            {t('hero.titleLine1')} <br />
            <span className="bg-gradient-to-r from-[#f5c54e] via-[#e2b354] to-[#f5c54e] bg-clip-text text-transparent">
              {t('hero.titleHighlight')}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-200 sm:text-lg">
            {t('hero.description')}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/ContactUs"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#f5c54e] to-[#d99420] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#000000] shadow-lg shadow-[#f5c54e]/20 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>{t('hero.exploreButton')}</span>
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            <Link
              to="/ContactUs"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#f5c54e]/40 bg-[#061426]/60 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:border-[#f5c54e] hover:bg-white/10"
            >
              <span>{t('hero.contactButton')}</span>
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bottom Floating Highlights Toolbar */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#061426]/75 p-5 backdrop-blur-md shadow-2xl lg:mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {heroPoints.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f5c54e]/60 bg-[#000000] text-[#f5c54e]">
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">{title}</h4>
                  <p className="mt-0.5 text-xs text-slate-300">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BanksFinancialHero