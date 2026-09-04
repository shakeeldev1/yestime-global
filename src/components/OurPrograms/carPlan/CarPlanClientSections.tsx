import {
  ListChecks,
  FileText,
  Send,
  Wallet,
  LineChart,
  Flag,
  CreditCard,
  Gauge,
  Activity,
  Ticket,
  Building2,
  UserCheck,
  Landmark,
  Car,
  CalendarClock,
  AlertTriangle,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const joinIcons = [ListChecks, FileText, Send, Wallet, LineChart, Flag];
const dashIcons = [CreditCard, Gauge, Activity, Ticket];
const bankIcons = [Building2, UserCheck, Landmark, Car, CalendarClock];

function CarPlanClientSections() {
  const { t, i18n } = useTranslation('carPlan');
  const isRtl = i18n.language?.startsWith('ur') || i18n.language?.startsWith('ar');

  const joinSteps = [0, 1, 2, 3, 4, 5].map((index) => ({
    step: `0${index + 1}`,
    title: t(`clientSections.join.steps.${index}.title`),
    text: t(`clientSections.join.steps.${index}.text`),
    icon: joinIcons[index],
  }));

  const dashItems = [0, 1, 2, 3].map((index) => ({
    title: t(`clientSections.dashboard.items.${index}.title`),
    text: t(`clientSections.dashboard.items.${index}.text`),
    icon: dashIcons[index],
  }));

  const bankSteps = [0, 1, 2, 3, 4].map((index) => ({
    step: `0${index + 1}`,
    title: t(`clientSections.bank.steps.${index}.title`),
    text: t(`clientSections.bank.steps.${index}.text`),
    icon: bankIcons[index],
  }));

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="font-sans antialiased">
      <section className="bg-white px-4 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase sm:text-sm tracking-[0.2em] text-[#a97916]">
              <Sparkles size={14} className="text-[#c5962e]" />
              {t('clientSections.join.badge')}
            </div>
            <h2 className="text-3xl font-black tracking-tight text-[#000000] sm:text-4xl lg:text-5xl">
              {t('clientSections.join.heading')}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              {t('clientSections.join.subtitle')}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {joinSteps.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.step}
                  className="rounded-[1.5rem] border border-slate-200 bg-[#f8fafc] p-6 shadow-sm"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-base font-black text-[#c5962e]">{item.step}</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff3d4] text-[#a97916]">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h3 className="text-lg font-extrabold tracking-tight text-[#000000] sm:text-xl">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#000000] px-4 py-16 text-white sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase sm:text-sm tracking-[0.2em] text-[#f0c75e]">
              <Sparkles size={14} />
              {t('clientSections.dashboard.badge')}
            </div>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              {t('clientSections.dashboard.heading')}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {t('clientSections.dashboard.subtitle')}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dashItems.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#c5962e] text-[#000000]">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-extrabold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-slate-300">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-4 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-[#c5962e]/30 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff3d4] text-[#a97916]">
              <Ticket size={22} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase sm:text-sm tracking-[0.18em] text-[#a97916]">
                {t('clientSections.draw.badge')}
              </p>
              <h3 className="mt-2 text-xl font-black tracking-tight text-[#000000] sm:text-2xl">
                {t('clientSections.draw.heading')}
              </h3>
              <p className="mt-2 text-base leading-7 text-slate-600 sm:text-lg">{t('clientSections.draw.text')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] px-4 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase sm:text-sm tracking-[0.2em] text-[#a97916]">
              <Landmark size={14} className="text-[#c5962e]" />
              {t('clientSections.bank.badge')}
            </div>
            <h2 className="text-3xl font-black tracking-tight text-[#000000] sm:text-4xl lg:text-5xl">
              {t('clientSections.bank.heading')}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              {t('clientSections.bank.subtitle')}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {bankSteps.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.step}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-base font-black text-[#c5962e]">{item.step}</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff3d4] text-[#a97916]">
                      <Icon size={16} />
                    </div>
                  </div>
                  <h3 className="text-base font-extrabold tracking-tight text-[#000000] sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fff7ed] px-4 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-amber-300/60 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
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

export default CarPlanClientSections;
