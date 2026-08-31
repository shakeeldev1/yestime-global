import React from 'react'
import { Binoculars, ClipboardCheck, FileText, Rocket, Compass } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface Step {
  number: string
  title: string
  description: string
  icon: React.ElementType
}

export function HowItWorks() {
  const { t } = useTranslation('home')

  const STEPS: Step[] = [
    {
      number: '01',
      title: t('howItWorks.steps.0.title'),
      description: t('howItWorks.steps.0.description'),
      icon: Binoculars,
    },
    {
      number: '02',
      title: t('howItWorks.steps.1.title'),
      description: t('howItWorks.steps.1.description'),
      icon: ClipboardCheck,
    },
    {
      number: '03',
      title: t('howItWorks.steps.2.title'),
      description: t('howItWorks.steps.2.description'),
      icon: FileText,
    },
    {
      number: '04',
      title: t('howItWorks.steps.3.title'),
      description: t('howItWorks.steps.3.description'),
      icon: Rocket,
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-[#000000] py-12 text-white">
      {/* Background Image Layer with Parallax Fixed Attachment */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-25"
        style={{ backgroundImage: "url('/homeAbout.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/40 via-[#000000]/70 to-[#000000]/40" />
      </div>

      {/* Subtle Glow Highlights */}
      <div
        className="pointer-events-none absolute -left-40 top-1/2 z-0 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 top-1/2 z-0 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Badge & Title Section */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-extrabold text-[#d99b26] shadow-md backdrop-blur-md">
            <Compass className="h-3.5 w-3.5 text-[#d99b26]" />
            <span className="uppercase tracking-widest">{t('howItWorks.badge')}</span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t('howItWorks.titlePrefix')}<span className="text-[#d99b26]">{t('howItWorks.titleHighlight')}</span>
          </h2>

          <p className="mt-3 max-w-2xl text-xs font-medium text-slate-300 sm:text-sm lg:text-base">
            {t('howItWorks.subtitleBefore')}
            <strong className="font-extrabold text-white underline decoration-[#d99b26] decoration-2 underline-offset-4">
              YES TIME GLOBAL
            </strong>
            {t('howItWorks.subtitleAfter')}
          </p>
        </div>

        {/* Steps Grid with Connecting Line */}
        <div className="relative mt-16 lg:mt-24">

          {/* Desktop Horizon Horizontal Connecting Line */}
          <div
            className="pointer-events-none absolute top-12 left-[10%] right-[10%] hidden border-t-2 border-dashed border-[#d99b26]/40 lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map(({ number, title, description, icon: Icon }, index) => (
              <div
                key={number}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Connecting Node Dot for Desktop */}
                {index < STEPS.length - 1 && (
                  <div
                    className="pointer-events-none absolute -right-4 top-[42px] hidden z-20 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-[#000000] bg-[#d99b26] shadow-md lg:block"
                    aria-hidden="true"
                  />
                )}

                {/* Step Icon Ring & Badge Container */}
                <div className="relative flex flex-col items-center">

                  {/* Floating Step Number Pill */}
                  <div className="relative z-10 flex h-8 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#f5b324] to-[#d99b26] text-xs font-black text-[#000000] shadow-md transition-transform duration-300 group-hover:scale-110">
                    {number}
                  </div>

                  {/* Circular Icon Holder */}
                  <div className="relative -mt-3 flex h-24 w-24 items-center justify-center rounded-full border-2 border-amber-400/30 bg-[#0c2647] text-[#d99b26] shadow-xl backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-[#d99b26] group-hover:bg-[#000000] group-hover:shadow-amber-500/20">
                    <Icon className="h-10 w-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  </div>
                </div>

                {/* Step Text Details Container */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md transition-all duration-300 group-hover:border-[#d99b26]/40 group-hover:bg-black/60 group-hover:shadow-lg">
                  <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-[#d99b26] lg:text-lg">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-slate-300 transition-colors duration-300 group-hover:text-white sm:text-sm">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default HowItWorks
