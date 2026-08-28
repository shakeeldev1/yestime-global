import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  FileCheck2,
  HelpCircle,
  Rocket,
  ShieldCheck,
  UserPlus,
  Wallet,
} from 'lucide-react'

// Main Featured Step / Hero Focus
const FEATURED_STEP = {
  step: '01',
  title: 'Create Your Account',
  tag: 'Step One',
  text: 'Sign up in seconds to join our global platform. Access your personalized member dashboard and unlock verified opportunities.',
  icon: UserPlus,
  path: '/HowItWorks#register',
  image: '/how-works.png',
}

// Sequential Steps List
const PROCESS_STEPS = [
  {
    step: '02',
    title: 'Choose a Program',
    text: 'Browse our specialized participation and savings plans (Shop, Savings, Mobility, or Tourism) and select what fits your goals.',
    icon: Compass,
    path: '/HowItWorks#choose-program',
    tag: 'Selection',
  },
  {
    step: '03',
    title: 'Activate & Deposit',
    text: 'Follow structured, transparent steps to deposit or participate securely with flexible monthly plans.',
    icon: Wallet,
    path: '/HowItWorks#activate',
    tag: 'Participation',
  },
  {
    step: '04',
    title: 'Enjoy Member Rewards',
    text: 'Track progress in real time, collect discounts and cashback, and move toward vehicle or savings ownership.',
    icon: Rocket,
    path: '/HowItWorks#rewards',
    tag: 'Growth & Ownership',
  },
] as const

export const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50/60 py-8" id="how-it-works">
      {/* Decorative Glow Elements */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-700 shadow-xs">
            <FileCheck2 className="h-3.5 w-3.5" />
            <span className="uppercase tracking-widest">Simple Guidance</span>
          </div>

          <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-[#061832] sm:text-4xl lg:text-5xl">
            How It <span className="text-[#E2A22C]">Works.</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Clear, step-by-step guidance to seamlessly get started and thrive within our global ecosystem.
          </p>
        </div>

        {/* Asymmetric Split Process Section */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          
          {/* Left Column: Hero Spotlight Step (Step 01) */}
          <div className="lg:col-span-5 flex">
            <Link
              to={FEATURED_STEP.path}
              className="group relative flex w-full flex-col justify-between overflow-hidden rounded-3xl bg-[#061a39] p-8 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/20"
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={FEATURED_STEP.image}
                  alt={FEATURED_STEP.title}
                  className="h-full w-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061a39] via-[#061a39]/80 to-transparent" />
              </div>

              {/* Step Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-950 shadow-md">
                  {FEATURED_STEP.tag}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 font-black text-amber-400 backdrop-blur-md">
                  {FEATURED_STEP.step}
                </span>
              </div>

              {/* Main Step Details */}
              <div className="relative z-10 mt-20">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-[#061a39] shadow-lg shadow-amber-400/20">
                  <FEATURED_STEP.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                  {FEATURED_STEP.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm sm:leading-6">
                  {FEATURED_STEP.text}
                </p>

                <div className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white/10 px-5 py-3 text-xs font-bold text-amber-400 backdrop-blur-md transition-colors group-hover:bg-amber-400 group-hover:text-[#061a39]">
                  <span>Get Started Now</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Key Features */}
              <div className="relative z-10 mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Instant Verification</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>Protected Data</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column: Remaining Sequential Steps */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            {PROCESS_STEPS.map(({ step, title, text, icon: Icon, path, tag }) => (
              <Link
                key={title}
                to={path}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg hover:shadow-slate-900/5 sm:flex-row sm:items-center sm:p-7"
              >
                <div className="flex items-start gap-4 sm:items-center">
                  {/* Step Number */}
                  <span className="text-2xl font-black text-slate-300 transition-colors group-hover:text-amber-500">
                    {step}
                  </span>

                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-[#061a39] transition-colors group-hover:bg-[#061a39] group-hover:text-amber-400">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Details */}
                  <div className="pr-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-[#061832] transition-colors group-hover:text-amber-600 sm:text-lg">
                        {title}
                      </h3>
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                        {tag}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {text}
                    </p>
                  </div>
                </div>

                {/* Arrow Button */}
                <div className="mt-4 flex shrink-0 items-center gap-1 text-xs font-bold text-amber-600 sm:mt-0">
                  <span className="sm:hidden">Details</span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-600 transition-all group-hover:bg-amber-500 group-hover:text-white">
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Accent Line on Hover */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-amber-400 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}

            {/* Bottom Help Ribbon */}
            <div className="flex items-center justify-between rounded-2xl border border-dashed border-slate-300 bg-slate-100/70 px-6 py-4">
              <div className="flex items-center gap-3">
                <HelpCircle className="h-5 w-5 text-amber-600" />
                <span className="text-xs font-semibold text-slate-700">
                  Have questions about getting started?
                </span>
              </div>
              <Link
                to="/HowItWorks"
                className="text-xs font-bold text-[#061a39] underline underline-offset-4 hover:text-amber-600"
              >
                Read FAQ
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HowItWorks