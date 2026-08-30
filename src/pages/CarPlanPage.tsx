import { ArrowRight, Car, CheckCircle2, CircleDollarSign, ShieldCheck, Sparkles } from 'lucide-react';
import { programData } from '../data/programData';

const CarPlanPage = () => {
  const carProgram = programData.find((program) => program.slug === 'car-saving');

  if (!carProgram) {
    return null;
  }

  const plans = carProgram.planCards ?? [];
  
  return (
    <div className="bg-[#f8fafc] text-slate-900">
      <section className="relative overflow-hidden bg-[#000000] px-4 py-16 text-white sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f0c75e]/40 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f0c75e] backdrop-blur-sm">
                <Sparkles size={14} className="text-[#f0c75e]" />
                Dedicated Car Plan
              </div>

              <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Drive your dream with a <span className="text-[#f0c75e]">smart car plan</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                Choose a flexible car financing path built for long-term value, smooth ownership, and a stronger future for you and your family.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#c5962e_0%,#f0c75e_100%)] px-6 py-3 text-sm font-bold text-[#071a36] shadow-[0_14px_30px_rgba(197,150,46,0.32)] transition hover:brightness-110 active:scale-95">
                  Apply for a Plan
                  <ArrowRight size={16} />
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Compare Plans
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_28px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                <img
                  src="https://i.pinimg.com/1200x/b8/65/3a/b8653af673f9133a83f6b444d799217b.jpg"
                  alt="Car plan featured"
                  className="h-[420px] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(7,26,54,0.04)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff8e8] text-[#c5962e]">
                <Car size={22} />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#a97916]">Flexible</p>
              <h3 className="mt-3 text-2xl font-black text-[#071a36]">Multiple Options</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Choose a trusted car plan that fits your budget, driving goals, and future needs.</p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(7,26,54,0.04)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef8ff] text-[#1d4ed8]">
                <CircleDollarSign size={22} />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1d4ed8]">Affordable</p>
              <h3 className="mt-3 text-2xl font-black text-[#071a36]">Stable Savings</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Enjoy structured contributions and a clear route toward vehicle ownership with manageable value.</p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(7,26,54,0.04)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ecfdf5] text-[#059669]">
                <ShieldCheck size={22} />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#059669]">Secure</p>
              <h3 className="mt-3 text-2xl font-black text-[#071a36]">Trusted Process</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">A transparent and member-focused car plan designed to make your next decision easier and safer.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c5962e]/30 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#a97916] shadow-sm">
              <Sparkles size={14} className="text-[#c5962e]" />
              Car Plans
            </div>
            <h2 className="text-3xl font-black tracking-tight text-[#071a36] sm:text-4xl">
              Select the best <span className="text-[#c5962e]">car plan</span> for your journey
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.amount}
                className="group relative overflow-hidden rounded-[1.8rem] border border-[#c5962e]/25 bg-[linear-gradient(180deg,#ffffff_0%,#fffdf8_100%)] shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(197,150,46,0.18)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#c5962e_0%,#f0c75e_100%)]" />

                <div className="relative overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.amount}
                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-[#f0c75e]/70 bg-[#000000]/80 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#f0c75e] backdrop-blur-sm">
                    {plan.badge}
                  </span>
                </div>

                <div className="space-y-4 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a97916]">Luxury Vehicle Plan</p>
                      <h3 className="mt-2 text-[24px] font-black leading-none text-[#071a36]">{plan.amount}</h3>
                    </div>
                    <div className="rounded-full border border-[#c5962e]/30 bg-[#fffaf0] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#a97916]">
                      {plan.planType}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#c5962e]/20 bg-[#fffaf0] p-3.5">
                    <div className="mb-2 flex items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#a97916]">
                      <span>Plan Summary</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#c5962e]" />
                    </div>

                    <div className="space-y-2 text-sm text-slate-700">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-slate-500">Daily</span>
                        <span className="font-bold text-[#071a36]">{plan.daily.replace('Daily ', '')}</span>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-slate-500">Monthly</span>
                        <span className="font-bold text-[#071a36]">{plan.monthly.replace('Monthly ', '')}</span>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-slate-500">Prize</span>
                        <span className="font-bold text-emerald-600">{plan.prize.replace('Prize ', '')}</span>
                      </div>
                    </div>
                  </div>

                  {plan.details && plan.details.length > 0 && (
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 text-left">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#a97916]">Plan Details</p>
                      <ul className="space-y-1.5 text-xs leading-5 text-slate-600">
                        {plan.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <CheckCircle2 size={12} className="mt-1 shrink-0 text-[#c5962e]" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="rounded-2xl border border-[#c5962e]/25 bg-[#0b0b0b] p-3.5 text-center text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#f0c75e]">{plan.installmentLabel}</p>
                    <div className="mt-2 text-[28px] font-black leading-none text-white">{plan.installmentValue}</div>
                  </div>

                  {plan.description && (
                    <p className="text-xs leading-5 text-slate-500">{plan.description}</p>
                  )}

                  <button className="w-full rounded-xl bg-[linear-gradient(135deg,#c5962e_0%,#f0c75e_100%)] px-4 py-3 text-xs font-bold text-[#071a36] shadow-[0_10px_20px_rgba(197,150,46,0.22)] transition hover:brightness-110 active:scale-95">
                    Apply Now
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarPlanPage;
