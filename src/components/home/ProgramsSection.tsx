import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Bike,
  Car,
  CheckCircle2,
  Globe,
  Handshake,
  MoreHorizontal,
  ShieldCheck,
  ShoppingBag,
  Star,
  UserCheck,
} from 'lucide-react'

// --- Data Configuration ---
const NAVIGATION_TABS = [
  { id: 'all', label: 'All Programs', icon: ShoppingBag },
  { id: 'shop', label: 'Shop & Savings', icon: ShoppingBag },
  { id: 'car', label: 'Car Program', icon: Car },
  { id: 'bike', label: 'Motorcycle / Scooter', icon: Bike },
  { id: 'other', label: 'Other Programs', icon: MoreHorizontal },
] as const

interface ProgramCardData {
  id: string
  number: string
  badge?: string
  title: string
  subtitle: string
  description: string
  image: string
  icon: React.ElementType
  features: string[]
  buttonText: string
  link: string
  theme: {
    numberBg: string
    cardBorder: string
    hoverRing: string
    hoverShadow: string
    topAccent: string
    iconBg: string
    iconColor: string
    checkColor: string
    btnGradient: string
    btnHover: string
  }
}

const PROGRAM_CARDS: ProgramCardData[] = [
  {
    id: 'shop',
    number: '01',
    badge: 'Most Popular',
    title: 'Our Shopping',
    subtitle: 'Program',
    description: 'Shop with confidence, save more, and enjoy exclusive member benefits.',
    image: 'https://i.pinimg.com/736x/89/ac/78/89ac7841d71b268c291db5110f1075a7.jpg',
    icon: ShoppingBag,
    features: [
      'Exclusive Discounts',
      'Cashback Rewards',
      'Wide Network of Partner Shops',
      'Flexible Plan Terms',
    ],
    buttonText: 'View Shopping Program',
    link: '/OurPrograms#shop',
    theme: {
      numberBg: 'bg-[#b86200]',
      cardBorder: 'border-slate-200/80',
      hoverRing: 'group-hover:ring-2 group-hover:ring-amber-500 group-hover:border-amber-500',
      hoverShadow: 'hover:shadow-xl hover:shadow-amber-500/10',
      topAccent: 'via-amber-500',
      iconBg: 'bg-amber-50 text-amber-600 group-hover:bg-[#071930] group-hover:text-amber-400',
      iconColor: 'text-amber-600',
      checkColor: 'text-amber-600',
      btnGradient: 'bg-gradient-to-r from-[#f5b324] to-[#e69500] text-slate-950',
      btnHover: 'hover:brightness-105 hover:shadow-lg hover:shadow-amber-500/20',
    },
  },
  {
    id: 'car',
    number: '02',
    title: 'Car Program',
    subtitle: '',
    description: 'Drive towards your dreams with affordable and flexible car plans.',
    image: 'https://i.pinimg.com/1200x/b9/1c/ed/b91cedeeef1ca5c9e51bff0df0c6a684.jpg',
    icon: Car,
    features: [
      'Easy Monthly Plans',
      'Wide Range of Car Options',
      'Transparent Process',
      'Ownership with Confidence',
      'Comprehensive Support & Guidance',
    ],
    buttonText: 'View Car Program',
    link: '/OurPrograms#car',
    theme: {
      numberBg: 'bg-[#00478f]',
      cardBorder: 'border-slate-200/80',
      hoverRing: 'group-hover:ring-2 group-hover:ring-sky-500 group-hover:border-sky-500',
      hoverShadow: 'hover:shadow-xl hover:shadow-sky-500/10',
      topAccent: 'via-sky-500',
      iconBg: 'bg-sky-50 text-[#00478f] group-hover:bg-[#00478f] group-hover:text-white',
      iconColor: 'text-[#00478f]',
      checkColor: 'text-[#005bb5]',
      btnGradient: 'bg-gradient-to-r from-[#005bb5] to-[#003875] text-white',
      btnHover: 'hover:brightness-110 hover:shadow-lg hover:shadow-sky-500/20',
    },
  },
  {
    id: 'bike',
    number: '03',
    title: 'Motorcycle ',
    subtitle: 'Program',
    description: 'Freedom on the move with reliable motorcycle and scooter plans.',
    image: 'https://i.pinimg.com/1200x/75/06/48/750648da4ecca79d29ecb1dc69588a4d.jpg',
    icon: Bike,
    features: [
      'Affordable Installments',
      'Popular Brands & Models',
      'Quick & Easy Process',
      'Ideal for Personal & Family Use',
      'Safety & Maintenance Support',
    ],
    buttonText: 'View Motorcycle Program',
    link: '/OurPrograms#bike',
    theme: {
      numberBg: 'bg-[#006837]',
      cardBorder: 'border-slate-200/80',
      hoverRing: 'group-hover:ring-2 group-hover:ring-emerald-500 group-hover:border-emerald-500',
      hoverShadow: 'hover:shadow-xl hover:shadow-emerald-500/10',
      topAccent: 'via-emerald-500',
      iconBg: 'bg-emerald-50 text-[#006837] group-hover:bg-[#006837] group-hover:text-white',
      iconColor: 'text-[#006837]',
      checkColor: 'text-[#006837]',
      btnGradient: 'bg-gradient-to-r from-[#007a40] to-[#004d28] text-white',
      btnHover: 'hover:brightness-110 hover:shadow-lg hover:shadow-emerald-500/20',
    },
  },
  {
    id: 'other',
    number: '04',
    title: 'Our Savings Programs',
    subtitle: '',
    description: 'Explore approved programs designed for your growth and long-term security.',
    image: 'https://i.pinimg.com/736x/23/c0/f3/23c0f372d60c65dc543bc9682aa09fb8.jpg',
    icon: MoreHorizontal,
    features: [
      'Tailored Savings Plans',
      'Flexible Contribution Options',
      'Secure & Transparent Process',
      'Access to Exclusive Opportunities',
      'Dedicated Support & Guidance',
    ],
    buttonText: 'Explore Savings Programs',
    link: '/OurPrograms#other',
    theme: {
      numberBg: 'bg-[#4a154b]',
      cardBorder: 'border-slate-200/80',
      hoverRing: 'group-hover:ring-2 group-hover:ring-purple-500 group-hover:border-purple-500',
      hoverShadow: 'hover:shadow-xl hover:shadow-purple-500/10',
      topAccent: 'via-purple-500',
      iconBg: 'bg-purple-50 text-purple-900 group-hover:bg-[#4a154b] group-hover:text-white',
      iconColor: 'text-purple-900',
      checkColor: 'text-purple-700',
      btnGradient: 'bg-gradient-to-r from-[#5c1d69] to-[#3b0d45] text-white',
      btnHover: 'hover:brightness-110 hover:shadow-lg hover:shadow-purple-500/20 ',
    },
  },
]

export const ProgramsSection = () => {
  const [activeTab, setActiveTab] = useState('all')

  const visibleCards =
    activeTab === 'all'
      ? PROGRAM_CARDS
      : PROGRAM_CARDS.filter((card) => card.id === activeTab)

  return (
    <section className="relative w-full overflow-hidden bg-slate-50/70 py-8 px-4 sm:px-6 lg:px-8" id="programs">
      {/* Background Micro Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[16px_16px] opacity-[0.03]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header Area */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-700 shadow-xs">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[9px] text-white">
              ⌂
            </span>
            <span className="tracking-widest uppercase">Our Programs</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#071930] sm:text-4xl lg:text-5xl">
            Programs for{' '}
            <span className="bg-linear-to-r from-[#f5b324] to-[#d99420] bg-clip-text text-transparent">
              Participation &amp; Savings.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Explore our approved programs and take the next step towards a brighter future. Simple, secure, and full of opportunities.
          </p>
        </div>

        {/* Navigation Bar */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-slate-100/80 p-2 shadow-inner">
            {NAVIGATION_TABS.map(({ id, label, icon: TabIcon }) => {
              const isActive = activeTab === id
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-amber-500 ${isActive
                      ? 'bg-white text-[#071930] shadow-md shadow-slate-200/80 border border-slate-200/80'
                      : 'bg-white/60 text-slate-600 border border-transparent hover:bg-white hover:text-[#071930] hover:shadow-xs'
                    }`}
                >
                  <TabIcon className={`h-4 w-4 transition-colors ${isActive ? 'text-[#d99420]' : 'text-slate-500'}`} />
                  <span>{label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Cards Grid */}
        <div
          className={`mt-12 grid gap-6 ${visibleCards.length === 1
              ? 'mx-auto max-w-md grid-cols-1'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            }`}
        >
          {visibleCards.map((card) => {
            const IconComponent = card.icon
            return (
              <div
                key={card.id}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-2 ring-1 ring-transparent ${card.theme.cardBorder} ${card.theme.hoverRing} ${card.theme.hoverShadow}`}
              >
                {/* Top Border Accent Highlight */}
                <div className={`absolute inset-x-0 top-0 z-20 h-1 bg-linear-to-r from-transparent ${card.theme.topAccent} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                {/* Image Header with Arc Divider */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/20" />

                  <div
                    className={`absolute top-4 left-4 z-10 flex h-8 w-8 items-center justify-center rounded-xl text-xs font-black text-white shadow-md ${card.theme.numberBg}`}
                  >
                    {card.number}
                  </div>

                  {card.badge && (
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-full bg-amber-500/90 px-3 py-1 text-[10px] font-bold text-white shadow-md backdrop-blur-xs">
                      <Star className="h-3 w-3 fill-white" />
                      <span>{card.badge}</span>
                    </div>
                  )}

                  {/* Clean SVG Arc Divider */}
                  <svg
                    className="absolute -bottom-1 inset-x-0 z-10 h-10 w-full fill-white text-white"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M0,20 Q50,0 100,20 L100,20 L0,20 Z" />
                  </svg>

                  {/* Floating Icon Badge */}
                  <div className="absolute bottom-1 left-1/2 z-20 -translate-x-1/2">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-4 border-white shadow-md transition-all duration-300 group-hover:scale-110 ${card.theme.iconBg}`}
                    >
                      <IconComponent className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between px-6 pb-6 pt-3 text-left">
                  <div>
                    <div className="text-center">
                      <h3 className="text-xl font-black text-[#071930] leading-tight transition-colors group-hover:text-slate-900">
                        {card.title}
                      </h3>
                      {card.subtitle && (
                        <span className="block text-xl font-black text-[#071930]">
                          {card.subtitle}
                        </span>
                      )}
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {card.description}
                      </p>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {card.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                          <CheckCircle2
                            className={`h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110 ${card.theme.checkColor}`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Link
                      to={card.link}
                      className={`flex w-full  items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm font-bold transition-all duration-300 shadow-md ${card.theme.btnGradient} ${card.theme.btnHover}`}
                    >
                      <span className='text-white'>{card.buttonText}</span>
                      <ArrowRight className="h-3.5 text-white w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Trust Bar */}
        {/* Bottom Trust Bar */}
        <div className="mt-12 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:border-amber-300/80 hover:shadow-md">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200/80">

            {/* Item 1 */}
            <div className="group flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-white">
                <Handshake className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#071930] leading-snug">Trusted Programs</h4>
                <p className="text-xs font-medium text-slate-500">Approved &amp; reliable</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="group flex items-center gap-3.5 sm:border-l sm:border-slate-200/80 sm:pl-6 lg:border-l-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-white">
                <UserCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#071930] leading-snug">Member Focused</h4>
                <p className="text-xs font-medium text-slate-500">Your growth is our priority</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="group flex items-center gap-3.5 border-t border-slate-200/80 pt-6 sm:border-t-0 sm:pt-0 lg:pl-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#071930] leading-snug">Secure &amp; Transparent</h4>
                <p className="text-xs font-medium text-slate-500">A platform you can trust</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="group flex items-center gap-3.5 border-t border-slate-200/80 pt-6 sm:border-l sm:border-t-0 sm:border-slate-200/80 sm:pl-6 sm:pt-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-white">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#071930] leading-snug">Global Opportunities</h4>
                <p className="text-xs font-medium text-slate-500">Connecting lives worldwide</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection