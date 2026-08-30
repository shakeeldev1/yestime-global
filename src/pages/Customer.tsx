import {
  ArrowRight,
  BadgeCheck,
  CircleHelp,
  Clock3,
  CreditCard,
  Headphones,
  MessageSquareText,
  ShieldCheck,
  UserRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const supportAreas = [
  {
    icon: CreditCard,
    title: 'Programs & payments',
    description: 'Understand each program, payment steps, and what is required before you proceed.',
  },
  {
    icon: UserRound,
    title: 'Member guidance',
    description: 'Access useful details about membership, updates, and how your benefits work.',
  },
  {
    icon: Headphones,
    title: 'Need assistance?',
    description: 'Our support team can guide you to the right next step based on your situation.',
  },
]

const quickSupport = [
  { icon: ShieldCheck, title: 'Secure information', text: 'Your details are reviewed safely and handled with care.' },
  { icon: MessageSquareText, title: 'Clear communication', text: 'We help you understand the process before you take action.' },
  { icon: BadgeCheck, title: 'Helpful guidance', text: 'Get the right direction for payments, membership, and plan questions.' },
  { icon: Clock3, title: 'Faster response', text: 'Prepared information helps our team support you more efficiently.' },
]

const supportSteps = [
  { step: '01', title: 'Tell us what you need', text: 'Share your question, membership detail, or program concern.', icon: CircleHelp },
  { step: '02', title: 'Check your details', text: 'We confirm the right information and next actions required.', icon: ShieldCheck },
  { step: '03', title: 'Get guided help', text: 'Our team directs you to the best route for a clear answer.', icon: MessageSquareText },
  { step: '04', title: 'Move forward confidently', text: 'Continue with the right support, plan, or contact path.', icon: BadgeCheck },
]

const Customer = () => {
  return (
    <main className="bg-[linear-gradient(180deg,#ffffff_0%,#f6f9fc_100%)] text-[#071a36]">
      <section className="relative overflow-hidden bg-[#020b1b] px-5 py-10 text-white md:px-8 lg:px-[5.5%] lg:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,197,78,0.18),transparent_25%),linear-gradient(90deg,#020b1b_0%,#020b1b_38%,rgba(2,11,27,0.9)_100%)]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#f5c54e 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#f5c54e]/40 bg-[#07182d]/70 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#f5c54e]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f5c54e]" />
                Customer / member information
              </span>

              <h1 className="mt-6 max-w-xl text-4xl font-black leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[4rem]">
                Everything you need,<br />
                <span className="text-[#f5c54e]">in one clear place.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
                Find straightforward guidance about programs, payments, membership, and the support available to you.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/ContactUs"
                  className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#f5c54e] to-[#d99420] px-6 py-3 text-sm font-bold text-[#07182d] shadow-[0_16px_32px_rgba(245,197,78,0.24)] transition-all duration-200 hover:-translate-y-0.5"
                >
                  Contact support
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/FAQs"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-[#f5c54e] hover:bg-white/10"
                >
                  Browse FAQs
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#07182d]/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.26)] backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#f5c54e]">Support snapshot</p>
                    <h2 className="mt-2 text-2xl font-black text-white">We’re here to help</h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f2340] text-[#f5c54e]">
                    <Headphones className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    'Program questions and guidance',
                    'Membership and payment details',
                    'Support for members and customers',
                    'Next-step assistance from our team',
                  ].map((item) => (
                    <div
                      key={item}
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f5c54e]/50 hover:bg-white/10"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f5c54e]/15 text-[#f5c54e] transition-transform duration-300 group-hover:scale-110">
                        <BadgeCheck className="h-4 w-4" />
                      </span>
                      <span className="text-sm text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-[5.5%]">
        <div className="mb-10 max-w-2xl">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#a97916]">Member support</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#071a36] sm:text-4xl">
            Simple answers for everyday needs.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#41566f]">
            Use these quick guides to find the information that matters most to you.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {supportAreas.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="group rounded-3xl border border-[#dfe8f6] bg-white p-6 shadow-[0_18px_35px_rgba(11,59,110,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f5c54e]/60 hover:shadow-[0_22px_40px_rgba(11,59,110,0.08)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b2b52] text-[#f5c54e] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#f5c54e] group-hover:text-[#071a36]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#071a36] transition-colors duration-300 group-hover:text-[#a97916]">{title}</h3>
              <p className="mt-3 text-base leading-7 text-[#41566f]">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {quickSupport.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-[22px] border border-[#e7edf5] bg-[#f8fafc] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#f5c54e]/50 hover:bg-white hover:shadow-[0_16px_30px_rgba(11,59,110,0.06)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff4d9] text-[#c99610] transition-transform duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#071a36] transition-colors duration-300 group-hover:text-[#a97916]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#41566f]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#edf2f8] px-5 py-16 sm:px-8 lg:px-[5.5%]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#a97916]">How support works</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#071a36] sm:text-4xl">A smooth path to the right answer</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {supportSteps.map(({ step, title, text, icon: Icon }) => (
              <div
                key={step}
                className="group rounded-3xl border border-[#dfe8f6] bg-white p-5 shadow-[0_18px_35px_rgba(11,59,110,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f5c54e]/60 hover:shadow-[0_22px_40px_rgba(11,59,110,0.08)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="inline-flex h-10 w-12 items-center justify-center rounded-full bg-linear-to-r from-[#f5c54e] to-[#d99420] text-[10px] font-black text-[#07182d] transition-transform duration-300 group-hover:scale-105">
                    {step}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b2b52] text-[#f5c54e] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f5c54e] group-hover:text-[#071a36]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#071a36] transition-colors duration-300 group-hover:text-[#a97916]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#41566f]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-[5.5%]">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="group rounded-[26px] border border-[#dfe8f6] bg-white p-7 shadow-[0_18px_35px_rgba(11,59,110,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f5c54e]/60 hover:shadow-[0_22px_40px_rgba(11,59,110,0.08)]">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#a97916]">Before you contact us</p>
            <h3 className="mt-3 text-2xl font-bold text-[#071a36] transition-colors duration-300 group-hover:text-[#a97916]">Keep your member details close.</h3>
            <p className="mt-3 leading-8 text-[#41566f]">
              Having your membership information ready helps us respond faster and direct your question to the right team.
            </p>
          </div>

          <div className="group rounded-[26px] border border-[#dfe8f6] bg-white p-7 shadow-[0_18px_35px_rgba(11,59,110,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f5c54e]/60 hover:shadow-[0_22px_40px_rgba(11,59,110,0.08)]">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#a97916]">Need an answer now?</p>
            <h3 className="mt-3 text-2xl font-bold text-[#071a36] transition-colors duration-300 group-hover:text-[#a97916]">Browse common questions.</h3>
            <p className="mt-3 leading-8 text-[#41566f]">
              Visit our FAQ section for quick answers to general questions about programs, membership, and the support available to you.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-[5.5%]">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[linear-gradient(90deg,#020b1b_0%,#071a36_40%,#0b2b52_100%)] p-7 sm:p-9 lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#f5c54e]">Still have a question?</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                We’ll guide you to the right next step.
              </h2>
            </div>

            <Link
              to="/ContactUs"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#f5c54e] to-[#d99420] px-6 py-3 text-sm font-bold text-[#07182d] shadow-[0_16px_32px_rgba(245,197,78,0.2)] transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact support
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Customer
