import { ArrowRight, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

// Self-contained, vector-based bank logos (No external link/CORS issues)
const partnerLogos = [
  {
    name: 'HBL',
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect width="120" height="40" fill="none"/><path d="M10 8h10v24H10zM22 8h8v9.5h8V8h8v24h-8v-9.5h-8V32h-8z" fill="%23008459"/><text x="62" y="26" font-family="Arial, sans-serif" font-weight="900" font-size="18" fill="%23008459">HBL</text></svg>',
  },
  {
    name: 'Meezan Bank',
    logo: 'https://crystalpng.com/wp-content/uploads/2025/01/meezan-bank-logo.png',
  },
  {
    name: 'MCB',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xvkT7hlI7E_ReSY5hg0fSYeJQ8hSR4DJf3RW0aSu2A&s=10',
  },
  {
    name: 'UBL',
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><rect x="8" y="10" width="22" height="20" rx="3" fill="%2300529b"/><text x="13" y="25" font-family="Arial, sans-serif" font-weight="bold" font-size="11" fill="%23ffffff">UBL</text><text x="38" y="27" font-family="Arial, sans-serif" font-weight="900" font-size="20" fill="%2300529b">UBL</text></svg>',
  },
  {
    name: 'Bank Alfalah',
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 40"><path d="M10 28 Q 20 8, 30 28 Z" fill="%23ed1c24"/><text x="36" y="25" font-family="Arial, sans-serif" font-weight="800" font-size="13" fill="%23000000">Bank Alfalah</text></svg>',
  },
  {
    name: 'Allied Bank',
    logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 40"><rect x="8" y="12" width="16" height="16" transform="rotate(45 16 20)" fill="%23f37023"/><text x="34" y="25" font-family="Arial, sans-serif" font-weight="800" font-size="14" fill="%23004a97">Allied Bank</text></svg>',
  },
  {
    name: 'JS Bank',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/JS_Group_-_New_logo_2011_-_Copy.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
  },
]

// Duplicate array to enable seamless marquee looping
const marqueeLogos = [...partnerLogos, ...partnerLogos]

const BanksFinancialHighlights = () => {
  const { t } = useTranslation("banks")

  const services = [
    {
      title: t('highlights.services.personalBanking.title'),
      image: 'https://i.pinimg.com/736x/05/31/2d/05312d98bb521c62903e0a70683dc57f.jpg',
      items: [
        t('highlights.services.personalBanking.items.savingsAccounts'),
        t('highlights.services.personalBanking.items.currentAccounts'),
        t('highlights.services.personalBanking.items.islamicBanking'),
        t('highlights.services.personalBanking.items.digitalBanking'),
      ],
    },
    {
      title: t('highlights.services.businessBanking.title'),
      image: 'https://i.pinimg.com/736x/63/58/dc/6358dc38268c97360a717405dc0beee6.jpg',
      items: [
        t('highlights.services.businessBanking.items.businessAccounts'),
        t('highlights.services.businessBanking.items.tradePayments'),
        t('highlights.services.businessBanking.items.smeSolutions'),
        t('highlights.services.businessBanking.items.corporateServices'),
      ],
    },
    {
      title: t('highlights.services.financingSolutions.title'),
      image: 'https://i.pinimg.com/736x/9f/b3/a0/9fb3a03b42704f89bb60be6632505a90.jpg',
      items: [
        t('highlights.services.financingSolutions.items.autoFinancing'),
        t('highlights.services.financingSolutions.items.homeFinancing'),
        t('highlights.services.financingSolutions.items.businessLoans'),
        t('highlights.services.financingSolutions.items.investmentSupport'),
      ],
    },
    {
      title: t('highlights.services.digitalOnlineBanking.title'),
      image: 'https://i.pinimg.com/1200x/16/f5/e1/16f5e11c3ad572e0e31533d2738b957b.jpg',
      items: [
        t('highlights.services.digitalOnlineBanking.items.mobileBanking'),
        t('highlights.services.digitalOnlineBanking.items.internetBanking'),
        t('highlights.services.digitalOnlineBanking.items.instantTransfers'),
        t('highlights.services.digitalOnlineBanking.items.access247'),
      ],
    },
  ]

  return (
    <section className="bg-white px-5 pb-12 pt-6 sm:px-8 lg:px-[5.5%] lg:pb-16">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-[1280px]">
        {/* ================= AUTOPLAY MARQUEE LOGOS ================= */}
        <div className="relative overflow-hidden rounded-[22px] border border-[#e7ebf0] bg-[#f8fafc] py-6 shadow-xs">
          <div className="mb-4 flex items-center justify-between gap-4 px-6">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#061832] opacity-80">
              {t('highlights.partnersLabel')}
            </p>
            <div className="hidden items-center gap-2 text-sm font-medium text-slate-500 sm:flex">
              <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-[#d99b26]" />
              <span>{t('highlights.partnersNote')}</span>
            </div>
          </div>

          {/* Fade overlays on edges */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-12 z-10 w-16 bg-gradient-to-r from-[#f8fafc] to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-12 z-10 w-16 bg-gradient-to-l from-[#f8fafc] to-transparent" />

          {/* Marquee Track */}
          <div className="overflow-hidden">
            <div className="animate-marquee gap-5 px-4">
              {marqueeLogos.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="group flex h-[72px] min-w-[200px] items-center justify-center rounded-xl border border-[#e7ebf0] bg-white px-6 py-3 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d99b26]/50 hover:shadow-md"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 w-auto max-w-[160px] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= ABOUT SECTION ================= */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_1.4fr] lg:items-center">
          <div className="max-w-[520px]">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-1.5 w-12 rounded-full bg-[#d99b26]" aria-hidden="true" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#d99b26]">
                {t('highlights.aboutLabel')}
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#000000] sm:text-4xl lg:text-[3.1rem]">
              {t('highlights.aboutTitleLine1')}<br />
              <span className="bg-gradient-to-r from-[#d99b26] to-[#f0c75e] bg-clip-text text-transparent">
                {t('highlights.aboutTitleHighlight')}
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[#41566f]">
              {t('highlights.aboutPara1')}
            </p>

            <p className="mt-4 text-base leading-8 text-[#41566f]">
              {t('highlights.aboutPara2')}
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-[26px] border border-[#dfe8f6] bg-[#f8fafc] shadow-[0_18px_45px_rgba(11,59,110,0.08)]">
            <img
              src="https://i.pinimg.com/1200x/2f/4c/d2/2f4cd25c7981e7217bf3aebbed749443.jpg"
              alt={t('highlights.aboutImageAlt')}
              className="h-[340px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[420px]"
            />
          </div>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="mt-16">
          <div className="mb-10 text-center">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.24em] text-[#d99b26]">
              {t('highlights.servicesLabel')}
            </p>
            <h3 className="mt-3 text-3xl font-black tracking-tight text-[#000000] sm:text-4xl">
              {t('highlights.servicesTitle')}
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map(({ title, image, items }) => (
              <article
                key={title}
                className="group flex flex-col justify-between overflow-hidden rounded-[20px] border border-[#e6edf5] bg-white shadow-[0_18px_35px_rgba(11,59,110,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d99b26]/40 hover:shadow-xl"
              >
                <div>
                  <div className="h-44 overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-[#000000] transition-colors duration-300 group-hover:text-[#d99b26]">
                      {title}
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-[#41566f]">
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fff1d5] text-[#d99b26]">
                            <Check className="h-2.5 w-2.5" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#000000] px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#f5c54e] transition-all duration-300 hover:bg-[#d99b26] hover:text-[#000000]">
                    <span>{t('highlights.learnMore')}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BanksFinancialHighlights