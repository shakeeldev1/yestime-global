import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  AlertCircle,
  BadgeCheck,
  Building2,
  CarFront,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock3,
  CreditCard,
  FileCheck2,
  FileText,
  HandCoins,
  HeartHandshake,
  Landmark,
  Lock,
  PhoneCall,
  RefreshCw,
  Scale,
  ShieldCheck,
  Sparkles,
  UserRound,
  WalletCards,
} from 'lucide-react';

export default function RefundAndCancellation() {
  const { t } = useTranslation('refund');

  const translatedHighlights = [
    { icon: ShieldCheck, title: t('highlights.transparent.title'), text: t('highlights.transparent.text') },
    { icon: Clock3, title: t('highlights.timely.title'), text: t('highlights.timely.text') },
    { icon: Lock, title: t('highlights.secure.title'), text: t('highlights.secure.text') },
    { icon: HeartHandshake, title: t('highlights.support.title'), text: t('highlights.support.text') },
  ];

  const translatedSteps = [
    { icon: FileCheck2, number: '01', title: t('process.steps.1.title'), text: t('process.steps.1.text') },
    { icon: ClipboardList, number: '02', title: t('process.steps.2.title'), text: t('process.steps.2.text') },
    { icon: UserRound, number: '03', title: t('process.steps.3.title'), text: t('process.steps.3.text') },
    { icon: BadgeCheck, number: '04', title: t('process.steps.4.title'), text: t('process.steps.4.text') },
    { icon: CheckCircle2, number: '05', title: t('process.steps.5.title'), text: t('process.steps.5.text') },
    { icon: RefreshCw, number: '06', title: t('process.steps.6.title'), text: t('process.steps.6.text') },
  ];

  const translatedInfo = [
    { icon: UserRound, title: t('information.customer.title'), text: t('information.customer.text') },
    { icon: CreditCard, title: t('information.payment.title'), text: t('information.payment.text') },
    { icon: FileText, title: t('information.record.title'), text: t('information.record.text') },
    { icon: AlertCircle, title: t('information.reason.title'), text: t('information.reason.text') },
  ];

  const translatedPrograms = [
    { icon: Landmark, title: t('programs.bank.title'), text: t('programs.bank.text') },
    { icon: Building2, title: t('programs.property.title'), text: t('programs.property.text') },
    { icon: CarFront, title: t('programs.vehicle.title'), text: t('programs.vehicle.text') },
    { icon: WalletCards, title: t('programs.payment.title'), text: t('programs.payment.text') },
  ];

  const translatedNotes = [
    t('notes.1'),
    t('notes.2'),
    t('notes.3'),
    t('notes.4'),
    t('notes.5'),
    t('notes.6'),
    t('notes.7'),
    t('notes.8'),
  ];

  const processingCards = [
    { number: '01', title: t('processing.review.title'), text: t('processing.review.text') },
    { number: '02', title: t('processing.approval.title'), text: t('processing.approval.text') },
    { number: '03', title: t('processing.payment.title'), text: t('processing.payment.text') },
  ];

  const heroSteps = [
    t('hero.card.step1'),
    t('hero.card.step2'),
    t('hero.card.step3'),
    t('hero.card.step4'),
  ];
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-800">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#050b14] text-white">

        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.16),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.10),_transparent_30%)]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:32px_32px]" />

        {/* Decorative circles */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-amber-400/10" />
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-amber-400/10" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-24">

          {/* LEFT */}
          <div className="flex flex-col justify-center">

            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/30 bg-[#f4c44d]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-amber-300">
              <Sparkles className="h-3.5 w-3.5" />
              {t('hero.badge')}
            </span>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              {t('hero.titleLine1')}{' '}
              <span className="text-amber-400">
                {t('hero.titleLine2')}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              {t('hero.subtitle')}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="tel:+923002550300"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4c44d] px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-[#f4c44d]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-400"
              >
                <PhoneCall className="h-4 w-4" />
                {t('hero.callSupport')}
              </a>

              <Link
                to="/terms-conditions"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:border-amber-400/40 hover:bg-white/10"
              >
                {t('hero.viewTerms')}
                <ChevronRight className="h-4 w-4" />
              </Link>

            </div>

            {/* Mini highlights */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {translatedHighlights.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
                >
                  <Icon className="mb-3 h-5 w-5 text-amber-400" />

                  <p className="text-[11px] font-semibold leading-4 text-slate-200">
                    {title}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT - POLICY CARD */}
          <div className="flex items-center justify-center">

            <div className="relative w-full max-w-md">

              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#f4c44d]/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />

              <div className="relative rounded-[30px] border border-white/10 bg-white/[0.05] p-4 shadow-2xl backdrop-blur-xl">

                <div className="rounded-[24px] border border-white/10 bg-[#0b1422] p-6">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                        {t('hero.card.label')}
                      </p>

                      <h2 className="mt-2 text-2xl font-black">
                        {t('hero.card.title')}
                      </h2>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4c44d]/10 text-amber-400">
                      <ShieldCheck className="h-6 w-6" />
                    </div>

                  </div>

                  <div className="mt-7 space-y-3">

                    {heroSteps.map((item, index) => (

                      <div
                        key={item}
                        className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.04] p-4"
                      >

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f4c44d]/10 text-xs font-bold text-amber-300">
                          0{index + 1}
                        </div>

                        <span className="text-sm font-medium text-slate-200">
                          {item}
                        </span>

                      </div>

                    ))}

                  </div>

                  <div className="mt-5 flex items-center gap-3 rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />

                    <div>
                      <p className="text-sm font-semibold text-emerald-300">
                        {t('hero.card.noteTitle')}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {t('hero.card.noteText')}
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          COMMITMENT
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">

        <div className="mb-10 text-center">

          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#f4c44d]">
            {t('commitment.eyebrow')}
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            {t('commitment.title')}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-500">
            {t('commitment.subtitle')}
          </p>

        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          {translatedHighlights.map(({ icon: Icon, title, text }) => (

            <div
              key={title}
              className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_15px_40px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(15,23,42,0.09)]"
            >

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4c44d]/10 text-amber-600 transition duration-300 group-hover:bg-[#f4c44d] group-hover:text-slate-900">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {text}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

          <div className="mb-10 text-center">

            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#f4c44d]">
              {t('process.eyebrow')}
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
              {t('process.title')}
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-500">
              {t('process.subtitle')}
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {translatedSteps.map(
              ({ icon: Icon, number, title, text }) => (

                <div
                  key={number}
                  className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >

                  <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#f4c44d]/5 transition group-hover:bg-[#f4c44d]/10" />

                  <div className="relative mb-6 flex items-center justify-between">

                    <span className="rounded-xl bg-[#f4c44d] px-3 py-1.5 text-xs font-black text-slate-950">
                      {number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-amber-600 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>

                  </div>

                  <h3 className="relative text-xl font-bold text-slate-900">
                    {title}
                  </h3>

                  <p className="relative mt-3 text-[15px] leading-7 text-slate-600">
                    {text}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          REQUIRED INFORMATION
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">

        <div className="mb-10 text-center">

          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#f4c44d]">
            {t('information.eyebrow')}
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
            {t('information.title')}
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-500">
            {t('information.subtitle')}
          </p>

        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          {translatedInfo.map(
            ({ icon: Icon, title, text }) => (

              <div
                key={title}
                className="group rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4c44d]/10 text-amber-600 transition duration-300 group-hover:bg-[#f4c44d] group-hover:text-slate-950">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {title}
                </h3>

                <p className="mt-2 text-[15px] leading-7 text-slate-600">
                  {text}
                </p>

              </div>

            )
          )}

        </div>

      </section>

      {/* =====================================================
          PROGRAM SPECIFIC
      ===================================================== */}

      <section className="bg-slate-100 py-16">

        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">

          <div className="mb-10 text-center">

            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#f4c44d]">
              {t('programs.eyebrow')}
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">
              {t('programs.title')}
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-500">
              {t('programs.subtitle')}
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2">

            {translatedPrograms.map(
              ({ icon: Icon, title, text }) => (

                <div
                  key={title}
                  className="group flex gap-5 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f4c44d]/10 text-amber-600 transition group-hover:bg-[#f4c44d] group-hover:text-slate-950">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {title}
                    </h3>

                    <p className="mt-2 text-[15px] leading-7 text-slate-600">
                      {text}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          REFUND PROCESSING
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">

        <div className="overflow-hidden rounded-[34px] bg-[#081423] p-7 text-white shadow-2xl md:p-10 lg:p-12">

          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* LEFT */}

            <div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f4c44d]/10 text-amber-400">
                <RefreshCw className="h-7 w-7" />
              </div>

              <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-300">
                {t('processing.eyebrow')}
              </p>

              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                {t('processing.title')}
              </h2>

              <p className="mt-5 max-w-md text-base leading-8 text-slate-300">
                {t('processing.subtitle')}
              </p>

            </div>

            {/* RIGHT */}

            <div className="space-y-4">

              {processingCards.map((item) => (

                <div
                  key={item.number}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >

                  <div className="flex gap-5">

                    <span className="text-sm font-black text-amber-400">
                      {item.number}
                    </span>

                    <div>

                      <h3 className="font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {item.text}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          IMPORTANT NOTES
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-12">

        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">

            {/* NOTES */}

            <div>

              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#f4c44d]">
                {t('notes.eyebrow')}
              </p>

              <h2 className="mt-3 text-4xl font-black text-slate-900">
                {t('notes.title')}
              </h2>

              <div className="mt-7 grid gap-3">

                {translatedNotes.map((note, index) => (

                  <div
                    key={note}
                    className="flex items-start gap-3 rounded-2xl bg-amber-50/70 p-4"
                  >

                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f4c44d] text-xs font-black text-slate-950">
                      {index + 1}
                    </div>

                    <p className="text-[15px] leading-7 text-slate-700">
                      {note}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* HELP CARD */}

            <div className="rounded-[28px] bg-[#081423] p-7 text-white">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4c44d]/10 text-amber-400">
                <HandCoins className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-2xl font-black">
                {t('help.title')}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {t('help.text')}
              </p>

              <div className="mt-6 space-y-3">

                <a
                  href="tel:+923002550300"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 transition hover:border-amber-400/30 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center gap-3">

                    <PhoneCall className="h-4 w-4 text-amber-400" />

                    <span className="text-sm font-medium">
                      0300 2550300
                    </span>

                  </div>

                  <ArrowRight className="h-4 w-4 text-amber-400" />

                </a>

                <a
                  href="tel:+923032722020"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 transition hover:border-amber-400/30 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center gap-3">

                    <PhoneCall className="h-4 w-4 text-amber-400" />

                    <span className="text-sm font-medium">
                      0303 2722020
                    </span>

                  </div>

                  <ArrowRight className="h-4 w-4 text-amber-400" />

                </a>

              </div>

              <Link
                to="/contact-us"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f4c44d] px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-amber-400"
              >
                {t('help.contactBtn')}
                <ChevronRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          LEGAL CLARIFICATION
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-12">

        <div className="rounded-[32px] border border-amber-200 bg-amber-50/70 p-6 md:p-8 lg:p-10">

          <div className="flex items-start gap-5">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f4c44d] text-slate-950">
              <Scale className="h-6 w-6" />
            </div>

            <div>

              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-600">
                {t('legal.eyebrow')}
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
                {t('legal.title')}
              </h2>

              <div className="mt-5 space-y-4 text-[15px] leading-8 text-slate-700">

                <p>{t('legal.p1')}</p>
                <p>{t('legal.p2')}</p>
                <p>{t('legal.p3')}</p>
                <p>{t('legal.p4')}</p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">

        <div className="relative overflow-hidden rounded-[32px] bg-[#050b14] px-7 py-10 text-white shadow-2xl md:px-10">

          {/* Glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f4c44d]/10 blur-3xl" />

          <div className="relative md:flex md:items-center md:justify-between">

            <div>

              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-300">
                {t('cta.eyebrow')}
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-black md:text-4xl">
                {t('cta.title')}
              </h2>

              <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">
                {t('cta.subtitle')}
              </p>

            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-0">

              <a
                href="tel:+923002550300"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f4c44d] px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-amber-400"
              >
                <PhoneCall className="h-4 w-4" />
                {t('cta.callNow')}
              </a>

              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-amber-400/40 hover:bg-white/10"
              >
                {t('cta.contactUs')}
                <ChevronRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}