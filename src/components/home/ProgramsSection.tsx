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
    title: 'Our Shopping ',
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
    buttonText: 'Explore Our Shopping Program',
    link: '/OurPrograms#shop',
    theme: {
      numberBg: 'bg-[#b86200]',
      cardBorder: 'border-amber-200/60 hover:border-amber-400',
      iconBg: 'bg-white shadow-md text-amber-600',
      iconColor: 'text-amber-600',
      checkColor: 'text-amber-600',
      btnGradient: 'bg-gradient-to-r from-[#f5b324] to-[#e69500] text-slate-950',
      btnHover: 'hover:brightness-105',
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
    buttonText: 'Explore Car Program',
    link: '/OurPrograms#car',
    theme: {
      numberBg: 'bg-[#00478f]',
      cardBorder: 'border-sky-200/60 hover:border-sky-400',
      iconBg: 'bg-[#00478f] text-white shadow-md',
      iconColor: 'text-white',
      checkColor: 'text-[#005bb5]',
      btnGradient: 'bg-gradient-to-r from-[#005bb5] to-[#003875] text-white',
      btnHover: 'hover:brightness-110',
    },
  },
  {
    id: 'bike',
    number: '03',
    title: 'Motorcycle / Scooter',
    subtitle: 'Program',
    description: 'Freedom on the move with reliable motorcycle and scooter plans.',
    image: 'https://i.pinimg.com/1200x/75/06/48/750648da4ecca79d29ecb1dc69588a4d.jpg',
    icon: Bike,
    features: [
      'Affordable Installments',
      'Popular Brands & Models',
      'Quick & Easy Process',
      'Ideal for Personal & Family Use',
      "Safety & Maintenance Support",
      
    ],
    buttonText: 'Explore Motorcycle / Scooter',
    link: '/OurPrograms#bike',
    theme: {
      numberBg: 'bg-[#006837]',
      cardBorder: 'border-emerald-200/60 hover:border-emerald-400',
      iconBg: 'bg-[#006837] text-white shadow-md',
      iconColor: 'text-white',
      checkColor: 'text-[#006837]',
      btnGradient: 'bg-gradient-to-r from-[#007a40] to-[#004d28] text-white',
      btnHover: 'hover:brightness-110',
    },
  },
  {
    id: 'other',
    number: '04',
    title: 'Our Savings Programs',
    subtitle: '',
    description: 'Explore more approved programs designed for your growth and needs.',
    image: 'https://i.pinimg.com/736x/23/c0/f3/23c0f372d60c65dc543bc9682aa09fb8.jpg',
    icon: MoreHorizontal,
    features: [
        "Tailored Savings Plans",
        "Flexible Contribution Options",
        "Secure & Transparent Process",
        "Access to Exclusive Opportunities",
        "Dedicated Support & Guidance",
       

      
    ],
    buttonText: 'Explore Saving Programs',
    link: '/OurPrograms#other',
    theme: {
      numberBg: 'bg-[#4a154b]',
      cardBorder: 'border-purple-200/60 hover:border-purple-400',
      iconBg: 'bg-white shadow-md text-purple-900',
      iconColor: 'text-purple-900',
      checkColor: 'text-purple-700',
      btnGradient: 'bg-gradient-to-r from-[#5c1d69] to-[#3b0d45] text-white',
      btnHover: 'hover:brightness-110',
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
    <section className="relative w-full overflow-hidden bg-slate-50/50 py-8 px-4 sm:px-6 lg:px-8" id="programs">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header Area */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-700 shadow-xs">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-white text-[9px]">
              ⌂
            </span>
            <span className="tracking-widest uppercase">Our Programs</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#071930] sm:text-4xl lg:text-5xl">
            Programs for{' '}
            <span className="text-[#d99420]">Participation &amp; Savings.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Explore our approved programs and take the next step towards a brighter future. Simple, secure, and full of opportunities.
          </p>
        </div>

        {/* Navigation Bar */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white p-1.5 shadow-md shadow-slate-200/50">
            {NAVIGATION_TABS.map(({ id, label, icon: TabIcon }) => {
              const isActive = activeTab === id
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#d99420] to-[#b5770d] text-white shadow-md shadow-amber-500/20'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <TabIcon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-slate-600'}`} />
                  <span>{label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Cards Grid */}
        <div
          className={`mt-12 grid gap-6 ${
            visibleCards.length === 1
              ? 'max-w-md mx-auto grid-cols-1'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          {visibleCards.map((card) => {
            const IconComponent = card.icon
            return (
              <div
                key={card.id}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${card.theme.cardBorder}`}
              >
                {/* Image Header with Arch Curve */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

                  <div
                    className={`absolute top-4 left-4 z-10 flex h-8 w-8 items-center justify-center rounded-xl text-xs font-black text-white shadow-md ${card.theme.numberBg}`}
                  >
                    {card.number}
                  </div>

                  {card.badge && (
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1 rounded-full bg-amber-500/90 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-xs shadow-md">
                      <Star className="h-3 w-3 fill-white" />
                      <span>{card.badge}</span>
                    </div>
                  )}

                  {/* Clean SVG Arc Divider replacing fragile inline clip-path */}
                  <svg
                    className="absolute -bottom-1 inset-x-0 w-full h-10 text-white fill-current"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,20 Q50,0 100,20 L100,20 L0,20 Z" />
                  </svg>

                  {/* Floating Icon Badge in Center Arch */}
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-4 border-white ${card.theme.iconBg}`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between px-6 pb-6 pt-3 text-left">
                  <div>
                    <div className="text-center">
                      <h3 className="text-lg font-black text-[#071930] leading-tight">
                        {card.title}
                      </h3>
                      {card.subtitle && (
                        <span className="block text-lg font-black text-[#071930]">
                          {card.subtitle}
                        </span>
                      )}
                      <p className="mt-2 text-xs leading-relaxed text-slate-500">
                        {card.description}
                      </p>
                    </div>

                    <ul className="mt-6 space-y-2.5">
                      {card.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                          <CheckCircle2
                            className={`h-4 w-4 shrink-0 ${card.theme.checkColor}`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Link
                      to={card.link}
                      className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 px-4 text-xs font-bold transition-all duration-300 shadow-md ${card.theme.btnGradient} ${card.theme.btnHover}`}
                    >
                      <span>{card.buttonText}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-12 rounded-2xl border border-slate-200/80 bg-white px-6 py-5 shadow-xs">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-5 items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <Handshake className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#071930]">Trusted Programs</h4>
                <p className="text-[11px] text-slate-500">Approved &amp; reliable</p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-slate-100 sm:border-l sm:pl-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <UserCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#071930]">Member Focused</h4>
                <p className="text-[11px] text-slate-500">Your growth is our priority</p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-slate-100 lg:border-l lg:pl-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#071930]">Secure &amp; Transparent</h4>
                <p className="text-[11px] text-slate-500">A platform you can trust</p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-slate-100 sm:border-l sm:pl-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#071930]">Global Opportunities</h4>
                <p className="text-[11px] text-slate-500">Connecting lives worldwide</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-2 lg:col-span-1 flex items-center justify-center lg:justify-end border-t lg:border-t-0 border-slate-100 pt-4 lg:pt-0">
              <span className="font-serif italic text-amber-600 text-base font-bold tracking-wide">
                Together for a Better Tomorrow
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection