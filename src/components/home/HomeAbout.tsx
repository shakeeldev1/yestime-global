import React from 'react'
import { Link } from 'react-router-dom'
import { Users, Target, Eye, Handshake, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface PillarItem {
  icon: React.ElementType
  title: string
  description: string
}

export const AboutUsCard: React.FC = () => {
  const { t } = useTranslation('home')

  const PILLARS: readonly PillarItem[] = [
    {
      icon: Target,
      title: t('about.pillars.0.title'),
      description: t('about.pillars.0.description'),
    },
    {
      icon: Eye,
      title: t('about.pillars.1.title'),
      description: t('about.pillars.1.description'),
    },
    {
      icon: Handshake,
      title: t('about.pillars.2.title'),
      description: t('about.pillars.2.description'),
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 text-slate-800 lg:py-16">
      {/* Decorative Glow */}
      <div 
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl lg:flex-row">
          
          {/* Left Content Column */}
          <div className="relative z-10 flex flex-1 flex-col justify-between bg-white p-8 sm:p-12 lg:w-[55%] lg:py-14 lg:pl-12 lg:pr-8">
            <div>
              {/* Header Badge & Brand Logo */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-400/30 bg-[#071930] text-[#d99b26] shadow-md">
                    <Users className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-extrabold uppercase tracking-widest text-[#d99b26]">
                    {t('about.badge')}
                  </span>
                </div>

                <img
                  src="/about-logo.png"
                  alt={t('about.logoAlt')}
                  loading="lazy"
                  className="h-16 w-auto max-w-[180px] object-contain"
                />
              </div>

              {/* Gold Accent Line */}
              <div className="mt-4 flex items-center gap-1.5" aria-hidden="true">
                <div className="h-1.5 w-12 rounded-full bg-[#d99b26]" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#d99b26]" />
              </div>

              {/* Main Copy */}
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg sm:leading-8">
                <p>
                  {t('about.introBefore')}<strong className="text-xl font-black text-[#071930] underline decoration-[#d99b26] decoration-2 underline-offset-4">YES TIME GLOBAL</strong>{t('about.introAfter')}
                </p>
                <p className="text-sm text-slate-600 sm:text-base sm:leading-7">
                  {t('about.paragraph2')}
                </p>
              </div>

              {/* Features List */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-bold text-[#071930] sm:text-base">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#d99b26]" aria-hidden="true" />
                  <span>{t('about.features.0')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#d99b26]" aria-hidden="true" />
                  <span>{t('about.features.1')}</span>
                </div>
              </div>
            </div>

            {/* Pillars Section */}
            <div className="mt-10 border-t border-slate-100 pt-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {PILLARS.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="group relative flex flex-col items-center rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#d99b26]/60 hover:bg-white hover:shadow-xl hover:shadow-amber-500/10"
                  >
                    {/* Top border gradient accent on hover */}
                    <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-[#d99b26] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Icon Container with hover scale & rotation */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-[#d99b26] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[#071930] group-hover:text-amber-400 group-hover:shadow-md">
                      <Icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-3" aria-hidden="true" />
                    </div>

                    <h3 className="mt-3.5 text-base font-bold text-[#071930] transition-colors duration-300 group-hover:text-[#d99b26]">
                      {title}
                    </h3>

                    <p className="mt-1.5 text-xs font-medium leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700 sm:text-sm">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Centered Primary Action Button */}
              <div className="mt-8 flex justify-center">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#071930] px-5 py-2.5 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0c2647] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
                >
                  <span className="text-sm font-extrabold tracking-wide text-white">
                    {t('about.button')}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#d99b26]" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image Showcase Column */}
          <div className="relative min-h-[360px] flex-1 lg:min-h-full lg:w-[45%]">
            <div className="absolute inset-0 bg-white">
              <img
                src="/homeAbout.png"
                alt={t('about.imageAlt')}
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-white lg:via-transparent lg:to-transparent" />
            </div>

            {/* Desktop Curve Divider */}
            <div className="pointer-events-none absolute inset-y-0 -left-1 hidden w-20 lg:block">
              <svg
                className="h-full w-full text-white"
                viewBox="0 0 100 800"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 0 0 C 60 260, 85 540, 0 800 Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutUsCard