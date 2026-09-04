import {
  Search,
  FileText,
  Phone,
  ClipboardCheck,
  Bike,
  ShoppingBag,
  AlertTriangle,
  Clock,
  CheckCircle2,
  Play,
  Sparkles,
  ShieldAlert,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const stepIcons = [Search, FileText, Phone, ClipboardCheck];

function MotorcycleScootyClientSections() {
  const { t, i18n } = useTranslation('motorcycleScooty');
  const isRtl = i18n.language?.startsWith('ur') || i18n.language?.startsWith('ar');

  const liveStats = [
    t('clientSections.live.stats.dailyDraws', { returnObjects: true }) as {
      label: string;
      value: string;
      sub: string;
    },
    t('clientSections.live.stats.interval', { returnObjects: true }) as {
      label: string;
      value: string;
      sub: string;
    },
    t('clientSections.live.stats.chances', { returnObjects: true }) as {
      label: string;
      value: string;
      sub: string;
    },
  ];

  const steps = [0, 1, 2, 3].map((index) => ({
    step: `0${index + 1}`,
    title: t(`clientSections.process.steps.${index}.title`),
    text: t(`clientSections.process.steps.${index}.text`),
    icon: stepIcons[index],
  }));

  const buyerPoints = [0, 1, 2, 3].map((i) => t(`clientSections.buySell.buyerPoints.${i}`));
  const sellerPoints = [0, 1, 2, 3, 4, 5].map((i) =>
    t(`clientSections.buySell.sellerPoints.${i}`),
  );

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="font-sans antialiased">
      <section className="bg-[#000000] px-4 py-8 text-white sm:px-8 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#f0c75e]/50 bg-[#c5962e]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#f0c75e]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#f0c75e]" />
              {t('clientSections.live.badge')}
            </div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              {t('clientSections.live.heading')}{' '}
              <span className="text-[#f0c75e]">{t('clientSections.live.headingHighlight')}</span>
            </h2>
            <p className="mt-2 text-base leading-7 text-slate-300">{t('clientSections.live.subtitle')}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="rounded-2xl border border-[#c5962e]/30 bg-white/5 px-5 py-4 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                {t('clientSections.live.nextDraw')}
              </p>
              <p className="mt-1 font-mono text-2xl font-black text-[#f0c75e]">00:00:45</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {t('clientSections.live.timeUnit')}
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(135deg,#c5962e_0%,#f0c75e_100%)] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#000000] shadow-[0_10px_22px_rgba(197,150,46,0.28)] transition hover:brightness-110"
            >
              <Play size={14} className="fill-current" />
              {t('clientSections.live.watchLive')}
            </button>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-7xl gap-4 sm:grid-cols-3">
          {liveStats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#c5962e]/20 bg-white/5 px-5 py-4"
            >
              <div className="mb-2 flex items-center gap-2 text-[#f0c75e]">
                <Clock size={16} />
                <span className="text-xs font-bold uppercase tracking-[0.16em]">
                  {item.label}
                </span>
              </div>
              <p className="text-xl font-black tracking-tight sm:text-2xl">{item.value}</p>
              <p className="text-sm text-slate-400">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#a97916] sm:text-sm">
              <Sparkles size={14} className="text-[#c5962e]" />
              {t('clientSections.process.badge')}
            </div>
            <h2 className="text-3xl font-black tracking-tight text-[#000000] sm:text-4xl lg:text-5xl">
              {t('clientSections.process.heading')}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              {t('clientSections.process.subtitle')}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.step}
                  className="rounded-[1.5rem] border border-[#c5962e]/20 bg-[#fffaf0] p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-base font-black text-[#c5962e]">{item.step}</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff3d4] text-[#a97916]">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 className="text-lg font-extrabold tracking-tight text-[#000000] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] px-4 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#c5962e]/30 bg-[#000000] p-7 text-white shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c5962e] text-[#000000]">
              <ShoppingBag size={22} />
            </div>
            <h3 className="text-xl font-black tracking-tight sm:text-2xl">
              {t('clientSections.buySell.buyerTitle')}
            </h3>
            <p className="mt-2 text-base leading-7 text-slate-300">
              {t('clientSections.buySell.buyerText')}
            </p>
            <ul className="mt-5 space-y-2.5 text-base text-slate-300">
              {buyerPoints.map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#f0c75e]" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.75rem] border border-[#c5962e]/25 bg-white p-7 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff3d4] text-[#a97916]">
              <Bike size={22} />
            </div>
            <h3 className="text-xl font-black tracking-tight text-[#000000] sm:text-2xl">
              {t('clientSections.buySell.sellerTitle')}
            </h3>
            <p className="mt-2 text-base leading-7 text-slate-600">
              {t('clientSections.buySell.sellerText')}
            </p>
            <ul className="mt-5 space-y-3">
              {sellerPoints.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-base text-slate-600">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#c5962e]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#a97916] sm:text-sm">
              <Sparkles size={14} className="text-[#c5962e]" />
              {t('clientSections.scope.badge')}
            </div>
            <h2 className="text-3xl font-black tracking-tight text-[#000000] sm:text-4xl lg:text-5xl">
              {t('clientSections.scope.heading')}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-[1.5rem] border border-[#c5962e]/20 bg-[#fffaf0] p-6">
              <h3 className="text-xl font-extrabold tracking-tight text-[#000000]">
                {t('clientSections.scope.motorcycleTitle')}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {t('clientSections.scope.motorcycleText')}
              </p>
            </article>
            <article className="rounded-[1.5rem] border border-[#c5962e]/20 bg-[#fffaf0] p-6">
              <h3 className="text-xl font-extrabold tracking-tight text-[#000000]">
                {t('clientSections.scope.scooterTitle')}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {t('clientSections.scope.scooterText')}
              </p>
            </article>
            <article className="rounded-[1.5rem] border border-[#c5962e]/30 bg-[#000000] p-6 text-white">
              <h3 className="text-xl font-extrabold tracking-tight">
                {t('clientSections.scope.goalTitle')}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-300">
                {t('clientSections.scope.goalText')}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-4 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-[#c5962e]/30 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff3d4] text-[#a97916]">
              <AlertTriangle size={22} />
            </div>
            <div>
              <div className="mb-2 inline-flex items-center gap-2 text-[#c5962e]">
                <ShieldAlert size={16} />
                <h3 className="text-xl font-black tracking-tight text-[#000000]">
                  {t('clientSections.disclaimer.title')}
                </h3>
              </div>
              <p className="mt-2 text-base leading-7 text-slate-600 sm:text-lg">
                {t('clientSections.disclaimer.text')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MotorcycleScootyClientSections;
