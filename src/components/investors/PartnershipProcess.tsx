import { Compass, Handshake, TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const PartnershipProcess = () => {
  const { t } = useTranslation('investors')

  const partnershipSteps = [
    {
      step: '01',
      title: t('process.steps.0.title'),
      text: t('process.steps.0.text'),
      icon: Handshake,
    },
    {
      step: '02',
      title: t('process.steps.1.title'),
      text: t('process.steps.1.text'),
      icon: Compass,
    },
    {
      step: '03',
      title: t('process.steps.2.title'),
      text: t('process.steps.2.text'),
      icon: TrendingUp,
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[#020c1c] px-5 py-16 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,197,78,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(245,197,78,0.12),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d6b35a]/50 bg-[#f5c54e]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5c54e]">
            <Compass className="h-3.5 w-3.5" />
            {t('process.badge')}
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t('process.headingLead')} <span className="text-[#f5c54e]">{t('process.headingHighlight')}</span>
          </h2>
        </div>

        <div className="relative mt-12 lg:mt-16">
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-12 hidden border-t-2 border-dashed border-[#d6b35a]/40 lg:block" />

          <div className="grid gap-8 md:grid-cols-3">
            {partnershipSteps.map(({ step, title, text, icon: Icon }, index) => (
              <div key={step} className="group relative flex flex-col items-center text-center">
                {index < partnershipSteps.length - 1 && (
                  <div className="pointer-events-none absolute -right-5 top-[42px] z-20 hidden h-3.5 w-3.5 rounded-full border-2 border-[#020c1c] bg-[#f5c54e] shadow-md lg:block" />
                )}

                <div className="relative flex flex-col items-center">
                  <div className="relative z-10 flex h-10 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#f5c54e] to-[#d99420] text-xs font-black text-[#07182d] shadow-md transition-transform duration-300 group-hover:scale-110">
                    {step}
                  </div>

                  <div className="relative -mt-3 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#d6b35a]/40 bg-[#0c2647] text-[#f5c54e] shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#f5c54e] group-hover:bg-[#0a1628]">
                    <Icon className="h-10 w-10" />
                  </div>
                </div>

                <div className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 group-hover:border-[#f5c54e]/40 group-hover:bg-[#0d1f38] group-hover:shadow-lg group-hover:shadow-amber-500/10">
                  <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#f5c54e]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnershipProcess
