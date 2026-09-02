import { useState } from 'react'
import {
  Building2,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Handshake,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const BanksFinancialProcess = () => {
  const { t } = useTranslation("banks")
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const comparisonPoints = [
    { icon: ShieldCheck, title: t('process.comparisonPoints.trustedNetwork.title'), text: t('process.comparisonPoints.trustedNetwork.text') },
    { icon: CircleDollarSign, title: t('process.comparisonPoints.secure.title'), text: t('process.comparisonPoints.secure.text') },
    { icon: Building2, title: t('process.comparisonPoints.wideCoverage.title'), text: t('process.comparisonPoints.wideCoverage.text') },
    { icon: TrendingUp, title: t('process.comparisonPoints.memberBenefits.title'), text: t('process.comparisonPoints.memberBenefits.text') },
    { icon: CheckCircle2, title: t('process.comparisonPoints.fastConvenient.title'), text: t('process.comparisonPoints.fastConvenient.text') },
  ]

  const processSteps = [
    { step: '01', title: t('process.processSteps.exploreOptions.title'), text: t('process.processSteps.exploreOptions.text'), icon: Handshake },
    { step: '02', title: t('process.processSteps.submitDetails.title'), text: t('process.processSteps.submitDetails.text'), icon: CircleDollarSign },
    { step: '03', title: t('process.processSteps.bankVerification.title'), text: t('process.processSteps.bankVerification.text'), icon: ShieldCheck },
    { step: '04', title: t('process.processSteps.getStarted.title'), text: t('process.processSteps.getStarted.text'), icon: Building2 },
  ]

  const faqItems = [
    {
      question: t('process.faqItems.partneredBanks.question'),
      answer: t('process.faqItems.partneredBanks.answer'),
    },
    {
      question: t('process.faqItems.openAccount.question'),
      answer: t('process.faqItems.openAccount.answer'),
    },
    {
      question: t('process.faqItems.informationSecure.question'),
      answer: t('process.faqItems.informationSecure.answer'),
    },
    {
      question: t('process.faqItems.businessServices.question'),
      answer: t('process.faqItems.businessServices.answer'),
    },
    {
      question: t('process.faqItems.contactSupport.question'),
      answer: t('process.faqItems.contactSupport.answer'),
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <>
      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-[#edf2f8] px-5 py-10 sm:px-8 lg:px-[5.5%]">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#d99b26]">
              {t('process.whyLabel')}
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#071a36] sm:text-4xl">
              {t('process.whyTitle')}
            </h3>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {comparisonPoints.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group relative rounded-[20px] border border-[#dfe8f6] bg-white p-6 text-center shadow-[0_18px_35px_rgba(11,59,110,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#d99b26]/50 hover:shadow-[0_22px_45px_rgba(11,59,110,0.12)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#000000] text-[#f5c54e] shadow-[0_12px_30px_rgba(11,59,110,0.18)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#d99b26] group-hover:text-[#071a36]">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mt-5 text-lg font-bold text-[#071a36] transition-colors duration-300 group-hover:text-[#d99b26]">
                  {title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-[#41566f]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="relative overflow-hidden bg-[#000000] px-5 py-10 text-white sm:px-8 lg:px-[5.5%]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,197,78,0.15),_transparent_40%)]" />

        <div className="relative z-10 mx-auto max-w-[1280px]">
          <div className="mb-14 flex flex-col items-center text-center">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#f5c54e]">
              {t('process.howLabel')}
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
              {t('process.howTitle')}
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map(({ step, title, text, icon: Icon }) => (
              <div
                key={step}
                className="group relative rounded-[22px] border border-white/10 bg-[#07182d]/80 p-6 backdrop-blur-xs shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-2 hover:border-[#f5c54e]/50 hover:bg-[#0b2342] hover:shadow-[0_20px_50px_rgba(245,197,78,0.1)]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="inline-flex h-9 w-12 items-center justify-center rounded-full bg-linear-to-r from-[#f5c54e] to-[#d99420] text-[11px] font-black text-[#07182d] shadow-sm transition-transform duration-300 group-hover:scale-110">
                    {step}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f5c54e]/30 bg-[#0b1d36] text-[#f5c54e] transition-all duration-300 group-hover:border-[#f5c54e] group-hover:bg-[#f5c54e] group-hover:text-[#07182d]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#f5c54e]">
                  {title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION WITH SIDE IMAGE ================= */}
      <section className="bg-white px-5 py-10 sm:px-8 lg:px-[5.5%]">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 text-center">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#d99b26]">
              {t('process.faqLabel')}
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#071a36] sm:text-4xl">
              {t('process.faqTitle')}
            </h3>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Accordion List (Left Column) */}
            <div className="space-y-4 lg:col-span-7">
              {faqItems.map((item, index) => {
                const isOpen = openFaqIndex === index
                return (
                  <div
                    key={item.question}
                    onClick={() => toggleFaq(index)}
                    className={`cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? 'border-[#d99b26] bg-[#fdfbf7] shadow-md'
                        : 'border-[#e7ebf0] bg-[#f8fafc] hover:border-[#d99b26]/50 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 px-5 py-2">
                      <span className="text-base font-bold text-[#071a36]">
                        {item.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                          isOpen
                            ? 'rotate-180 bg-[#d99b26] text-white'
                            : 'bg-[#fff5db] text-[#d99b26]'
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </div>

                    {isOpen && (
                      <div className="border-t border-[#f0e6d2] px-5 pb-5 pt-3">
                        <p className="text-sm leading-6 text-[#41566f]">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Feature Image (Right Column) */}
            <div className="relative lg:col-span-5">
              <div className="group relative overflow-hidden rounded-[28px] border border-[#dfe8f6] bg-[#f8fafc] shadow-[0_20px_50px_rgba(11,59,110,0.1)]">
                <img
                  src="https://i.pinimg.com/736x/91/7f/2e/917f2eab5cce01ec48af66cc2b427d0c.jpg"
                  alt={t('process.faqImageAlt')}
                  className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071a36]/80 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#f5c54e]">
                    {t('process.assistLabel')}
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {t('process.assistText')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BanksFinancialProcess