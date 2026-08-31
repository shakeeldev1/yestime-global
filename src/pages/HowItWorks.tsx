import {
  ArrowRight,
  BadgePercent,
  Gift,
  PiggyBank,
  ShieldCheck,
  Sparkles,
  Ticket,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

import PageHero from '../components/common/PageHero'

const HowItWorks = () => {
  const { t } = useTranslation('howItWorks')

  const steps = [
    {
      icon: Wallet,
      title: t('steps.0.title'),
      description: t('steps.0.description'),
    },
    {
      icon: TrendingUp,
      title: t('steps.1.title'),
      description: t('steps.1.description'),
    },
    {
      icon: BadgePercent,
      title: t('steps.2.title'),
      description: t('steps.2.description'),
    },
    {
      icon: PiggyBank,
      title: t('steps.3.title'),
      description: t('steps.3.description'),
    },
    {
      icon: Ticket,
      title: t('steps.4.title'),
      description: t('steps.4.description'),
    },
    {
      icon: Gift,
      title: t('steps.5.title'),
      description: t('steps.5.description'),
    },
  ]

  const highlights = [
    {
      icon: Users,
      title: t('highlights.0.title'),
      text: t('highlights.0.text'),
    },
    {
      icon: ShieldCheck,
      title: t('highlights.1.title'),
      text: t('highlights.1.text'),
    },
    {
      icon: Gift,
      title: t('highlights.2.title'),
      text: t('highlights.2.text'),
    },
    {
      icon: Sparkles,
      title: t('highlights.3.title'),
      text: t('highlights.3.text'),
    },
  ]

  const flow = [
    t('flowList.0'),
    t('flowList.1'),
    t('flowList.2'),
    t('flowList.3'),
    t('flowList.4'),
  ]

  return (
    <div className="relative overflow-hidden bg-white text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_44%)]" />
      <div className="pointer-events-none absolute left-[-120px] top-40 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-60px] top-80 h-72 w-72 rounded-full bg-[#000000]/10 blur-3xl" />

      <PageHero
        eyebrow={t('hero.eyebrow')}
        title={t('hero.title')}
        description={t('hero.description')}
      />

      <section className="relative px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#a97916]">{t('flow.eyebrow')}</p>
            <h2 className="text-3xl font-black tracking-tight text-[#071a36] sm:text-4xl">
              {t('flow.titleLead')}<span className="text-[#c5962e]">{t('flow.titleHighlight')}</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {steps.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-[1.8rem] border border-[#e8d7a0] bg-[linear-gradient(180deg,#ffffff_0%,#fffaf2_100%)] p-6 shadow-[0_18px_40px_rgba(10,16,30,0.06)] transition-all duration-1000 hover:-translate-y-2 hover:border-[#c5962e]/50 hover:bg-none hover:bg-[#071a36] hover:shadow-[0_30px_55px_rgba(197,150,46,0.12)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0b0b0b_0%,#c5962e_46%,#f0c75e_100%)]" />
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b0b0b] text-[#f0c75e] shadow-lg shadow-[#c5962e]/10 transition-colors duration-300 group-hover:bg-[#f0c75e] group-hover:text-[#071a36]">
                    <Icon size={24} />
                  </div>
                  <span className="text-xs font-black text-[#a97916] transition-colors duration-300 group-hover:text-[#f0c75e]">0{index + 1}</span>
                </div>
                <h3 className="mb-3 text-lg font-black text-[#071a36] transition-colors duration-300 group-hover:text-white">{title}</h3>
                <p className="text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-slate-200">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#000000] px-5 py-16 text-white sm:px-8 lg:px-16">
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(135deg,rgba(197,150,46,0.10),transparent_46%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#f0c75e]">{t('why.eyebrow')}</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              {t('why.titleLead')}<span className="text-[#f0c75e]">{t('why.titleHighlight')}</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              {t('why.paragraph')}
            </p>

            <div className="mt-8 space-y-4">
              {flow.map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f0c75e_0%,#c5962e_100%)] text-sm font-black text-[#071a36]">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#c5962e]/30 bg-[linear-gradient(180deg,#111111_0%,#000000_100%)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f0c75e]">{t('overview.eyebrow')}</p>
                <h3 className="mt-2 text-2xl font-black text-white">{t('overview.title')}</h3>
              </div>
              <div className="rounded-full border border-[#f0c75e]/40 bg-[#f0c75e]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f0c75e]">
                {t('overview.active')}
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{t('overview.entryLabel')}</p>
                <p className="mt-2 text-3xl font-black text-white">{t('overview.entryValue')}</p>
                <p className="mt-2 text-sm text-slate-300">{t('overview.entryText')}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[#111111] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{t('overview.savingsLabel')}</p>
                  <p className="mt-2 text-xl font-bold text-[#f0c75e]">{t('overview.savingsValue')}</p>
                  <p className="mt-2 text-sm text-slate-300">{t('overview.savingsText')}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#111111] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{t('overview.drawLabel')}</p>
                  <p className="mt-2 text-xl font-bold text-[#f0c75e]">{t('overview.drawValue')}</p>
                  <p className="mt-2 text-sm text-slate-300">{t('overview.drawText')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50/60 px-5 py-12 sm:px-8 lg:px-16 ">
        {/* Ambient Background Glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#c5962e]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-14 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#c5962e]/30 bg-[#f8e8b3]/30 px-4 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a97916]" />
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a97916]">
                {t('benefits.eyebrow')}
              </p>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-[#071a36] sm:text-4xl lg:text-5xl">
              {t('benefits.titleLead')}<span className="bg-gradient-to-r from-[#a97916] via-[#c5962e] to-[#f0c75e] bg-clip-text text-transparent">{t('benefits.titleHighlight')}</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
              {t('benefits.paragraph')}
            </p>
          </div>

          {/* Benefits Bento Grid */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-[1.8rem] border border-slate-200/80 bg-white p-7 shadow-[0_16px_35px_rgba(15,23,42,0.04)] transition-all duration-500 ease-in-out hover:-translate-y-2 hover:border-[#c5962e]/50 hover:bg-[#071a36] hover:shadow-[0_25px_50px_rgba(197,150,46,0.15)]"
              >
                {/* Animated Top Accent Line on Hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0b0b0b] via-[#c5962e] to-[#f0c75e] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon Header & Index Number */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#fff5d1_0%,#f8e8b3_100%)] text-[#a97916] shadow-inner shadow-[#c5962e]/10 transition-all duration-500 group-hover:bg-[#f0c75e] group-hover:text-[#071a36] group-hover:shadow-lg">
                    <Icon size={24} />
                  </div>

                  <span className="text-xs font-extrabold text-[#a97916] transition-colors duration-500 group-hover:text-[#f0c75e]">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mb-3 text-lg font-black tracking-tight text-[#071a36] transition-colors duration-500 group-hover:text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-slate-200">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="px-5 pb-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#d7b258]/40 bg-[linear-gradient(135deg,#fffdf8_0%,#fff7dc_100%)] p-8 text-center shadow-[0_25px_50px_rgba(197,150,46,0.12)] sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a97916]">{t('cta.eyebrow')}</p>
          <h2 className="mt-4 text-3xl font-black text-[#071a36] sm:text-4xl">
            {t('cta.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-700">
            {t('cta.paragraph')}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(135deg,#c5962e_0%,#f0c75e_100%)] px-7 py-3.5 text-sm font-bold text-[#071a36] shadow-[0_12px_25px_rgba(197,150,46,0.25)] transition hover:brightness-110 active:scale-95">
              {t('cta.joinNow')}
              <ArrowRight size={16} />
            </button>

            <button className="rounded-xl border border-[#c5962e]/50 bg-white px-6 py-3.5 text-sm font-bold text-[#071a36] transition hover:border-[#c5962e] hover:bg-[#fffaf0]">
              {t('cta.viewPrograms')}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
