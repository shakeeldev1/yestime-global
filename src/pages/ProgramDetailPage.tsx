import { useLocation, useParams } from 'react-router-dom';
import {
  Target,
  Users,
  Store,
  Headset,
  ShieldCheck,
  ShoppingBag,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Play,
  Tag,
  Coins,
  Gift,
  ArrowRight,
} from 'lucide-react';
import { getProgramBySlug, type ProgramData } from '../data/programData';

const benefitIcons = [Tag, Coins, ShoppingBag, Gift, ShieldCheck, Sparkles];
const statsIcons = {
  users: Users,
  store: Store,
  support: Headset,
  shield: ShieldCheck,
};

function ProgramDetailPage() {
  const { slug: paramSlug } = useParams();
  const location = useLocation();
  const resolvedSlug = paramSlug ?? (
    location.pathname.startsWith('/program/')
      ? location.pathname.replace('/program/', '')
      : location.pathname.replace(/^\//, '').replace(/\/$/, '')
  );
  const program: ProgramData = getProgramBySlug(resolvedSlug || 'shop-saving');

  return (
    <div>
      <HeroSection program={program} />
      <AboutSection program={program} />
      {program.planCards && program.planCards.length > 0 ? (
        <PlanMediaSection program={program} />
      ) : (
        <GallerySection program={program} />
      )}
      <BenefitsSection program={program} />
    </div>
  );
}

function GallerySection({ program }: { program: ProgramData }) {
  const galleryImages = program.gallery && program.gallery.length > 0
    ? program.gallery
    : [program.image, program.secondaryImage, program.image, program.secondaryImage];

  return (
    <section className="relative bg-[#f8fafc] px-4 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c5962e]/30 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#a97916] shadow-sm">
            <Sparkles size={14} className="text-[#c5962e]" />
            Gallery
          </div>
          <h2 className="text-3xl font-black tracking-tight text-[#071a36] sm:text-4xl">
            Explore the <span className="text-[#c5962e]">{program.title}</span> experience
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {galleryImages.slice(0, 4).map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(9,20,35,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_45px_rgba(197,150,46,0.16)]"
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={`${program.title} gallery ${index + 1}`}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f0c75e]">
                  {program.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanMediaSection({ program }: { program: ProgramData }) {
  return (
    <section className="relative bg-[#f8fafc] px-4 py-16 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c5962e]/30 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#a97916] shadow-sm">
            <Sparkles size={14} className="text-[#c5962e]" />
            Our Plans
          </div>
          <h2 className="text-3xl font-black tracking-tight text-[#071a36] sm:text-4xl">
            Choose the right <span className="text-[#c5962e]">car plan</span> for your journey
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {program.planCards?.map((plan) => (
            <article
              key={plan.amount}
              className="group relative overflow-hidden rounded-[1.8rem] border border-[#c5962e]/30 bg-[linear-gradient(180deg,#ffffff_0%,#fffdf8_100%)] shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(197,150,46,0.18)]"
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
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c5962e]" />
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
  );
}

function HeroSection({ program }: { program: ProgramData }) {
  return (
    <section className="relative min-h-[500px] w-full overflow-hidden bg-[#000000] px-4 py-8 text-white sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-2 flex items-center gap-3">
              <span className="flex h-10 w-12 items-center justify-center rounded-xl border border-[#c5962e] bg-[#c5962e]/10 font-mono text-lg font-bold text-[#f0c75e] shadow-inner">
                {program.heroBadge}
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                {program.heroTitle.split(' ')[0]}{' '}
                <span className="text-[#f0c75e]">{program.heroTitle.split(' ').slice(1).join(' ') || 'Program'}</span>
              </h1>
            </div>

            <p className="mb-4 text-2xl font-bold text-white dir-rtl">{program.urduTitle}</p>

            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {program.heroDescription}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {program.featureCards.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500">
                    {index === 0 ? <Tag size={16} /> : index === 1 ? <ShoppingBag size={16} /> : <ShieldCheck size={16} />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{feature.title}</h4>
                    <p className="text-[10px] text-slate-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 rounded-xl bg-[linear-gradient(135deg,#c5962e_0%,#f0c75e_100%)] px-7 py-3 text-xs font-bold text-[#071a36] shadow-[0_10px_22px_rgba(197,150,46,0.24)] transition hover:brightness-110 active:scale-95">
                <span>Join Now</span>
                <ChevronRight size={14} />
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-[#c5962e]/50 bg-[#000000] px-6 py-3 text-xs font-bold text-white transition hover:border-[#f0c75e] active:scale-95">
                <span>How It Works</span>
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#f0c75e] text-[#071a36]">
                  <Play size={8} className="ml-0.5 fill-current" />
                </div>
              </button>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-2xl">
              <img src={program.image} alt={program.title} className="h-[400px] w-full object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ program }: { program: ProgramData }) {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-12 sm:px-8 lg:px-16">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#c5962e]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border-2 border-[#c5962e]/30" />
              <div className="group relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-2xl">
                <img src={program.secondaryImage} alt={program.title} className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[500px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-bold text-slate-900 shadow-lg backdrop-blur-md">
                  <Sparkles size={15} className="text-[#c5962e]" />
                  {program.category}
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm font-medium text-white/80">Smart savings</p>
                  <h3 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
                    Better Habits,
                    <span className="text-[#f0c75e]"> Better Value.</span>
                  </h3>
                </div>
              </div>

              <div className="absolute -bottom-7 -right-3 w-[210px] rounded-2xl border border-[#c5962e]/30 bg-[#11100d] p-5 text-white shadow-2xl sm:-right-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c5962e] text-[#071a36]">
                    <ShoppingBag size={21} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Member Benefits</p>
                    <h4 className="text-sm font-bold">Smart Savings</h4>
                  </div>
                </div>
                <div className="mt-4 border-t border-white/10 pt-3">
                  <p className="text-xs leading-relaxed text-slate-300">{program.shortDescription}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-4">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c5962e]/20 bg-[#fffaf0] px-4 py-2">
              <Target size={15} className="text-[#c5962e]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#a97916]">About This Program</span>
            </div>

            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-[#071a36] sm:text-4xl lg:text-5xl">
              {program.aboutHeading.split(' ').slice(0, 3).join(' ')}{' '}
              <span className="block text-[#c5962e]">{program.aboutHeading.split(' ').slice(3).join(' ') || 'For Everyone.'}</span>
            </h2>

            <div className="mt-6 max-w-2xl space-y-4">
              {program.aboutText.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-slate-600 sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {program.featureList.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-600" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {program.stats.map((stat) => {
                const Icon = statsIcons[stat.icon] ?? Users;
                return (
                  <div key={stat.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:-translate-y-1 hover:shadow-md">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff3d4] text-[#a97916]">
                      <Icon size={17} />
                    </div>
                    <h3 className="text-xl font-black text-[#071a36]">{stat.value}</h3>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-[#a97916]">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection({ program }: { program: ProgramData }) {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8fafc] px-4 py-12 sm:px-8 lg:px-16 ">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#c5962e]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-24">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#c5962e]" />
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#a97916]">
              <Sparkles size={15} />
              Benefits For You
            </div>
            <span className="h-px w-8 bg-[#c5962e]" />
          </div>

          <h2 className="mx-auto max-w-3xl text-center text-3xl font-black tracking-tight text-[#071a36] sm:text-4xl lg:text-5xl">
            More Reasons to
            <span className="text-[#c5962e]"> {program.title}</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-slate-500 sm:text-base">
            {program.shortDescription}
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {program.benefits.map((item, index) => {
              const Icon = benefitIcons[index % benefitIcons.length];
              return (
                <div key={item.title} className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#c5962e]/40 hover:shadow-xl">
                  <span className="absolute right-5 top-4 text-4xl font-black text-slate-100 transition group-hover:text-[#c5962e]/10">0{index + 1}</span>
                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3d4] text-[#a97916] transition duration-300 group-hover:bg-[#c5962e] group-hover:text-[#071a36]">
                    <Icon size={25} strokeWidth={2} />
                  </div>
                  <h3 className="relative mb-2 text-base font-extrabold text-[#071a36]">{item.title}</h3>
                  <p className="relative text-sm leading-6 text-slate-500">{item.description}</p>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#c5962e] transition-all duration-300 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#000000] p-7 text-white shadow-xl sm:p-10 lg:col-span-5">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#c5962e]/10 blur-2xl" />
            <div className="relative">
              <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f0c75e]">
                <UsersIcon />
                Who Can Join?
              </div>

              <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                Savings Are
                <span className="block text-[#f0c75e]">For Everyone.</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                Whether you are planning a purchase or looking for better value, this program is designed to help you make smarter decisions and maximize your savings.
              </p>

              <div className="mt-7 space-y-4">
                {program.audience.map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c5962e] text-[#071a36]">
                      <CheckCircle2 size={14} />
                    </div>
                    <p className="text-sm leading-6 text-slate-300">{text}</p>
                  </div>
                ))}
              </div>

              <button className="mt-8 flex items-center gap-2 rounded-xl border border-[#c5962e]/50 bg-[#fffaf0] px-5 py-3 text-xs font-bold text-[#a97916] transition hover:bg-[#c5962e] hover:text-[#071a36]">
                Become a Member
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          <div className="grid min-h-[420px] gap-4 sm:grid-cols-2 lg:col-span-7">
            <div className="group relative overflow-hidden rounded-[2rem] sm:row-span-2">
              <img src={program.image} alt={program.title} className="h-full min-h-[300px] w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="mb-2 inline-block rounded-full bg-[#c5962e] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#071a36]">
                  {program.category}
                </span>
                <h3 className="text-xl font-black text-white sm:text-2xl">
                  Better Shopping.
                  <span className="text-[#f0c75e]"> Better Living.</span>
                </h3>
              </div>
            </div>

            <div className="group relative min-h-[200px] overflow-hidden rounded-[2rem]">
              <img src={program.secondaryImage} alt={program.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/5" />
              <div className="absolute bottom-4 left-4 rounded-xl bg-black/60 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                {program.category} Value
              </div>
            </div>

            <div className="group relative min-h-[200px] overflow-hidden rounded-[2rem]">
              <img src="/logo.png" alt="Member lifestyle" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/5" />
              <div className="absolute bottom-4 left-4 rounded-xl bg-black/60 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                Member Rewards
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[#c5962e]/30 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 shadow-sm">
            <Sparkles size={15} className="text-[#c5962e]" />
            Smart Choice
            <span className="text-[#c5962e]">•</span>
            Better Value
            <span className="text-[#c5962e]">•</span>
            Stronger Future
          </div>
        </div>
      </div>
    </section>
  );
}

function UsersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default ProgramDetailPage;
