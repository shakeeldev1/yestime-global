import { ArrowRight, BadgeCheck, Building2, CircleDollarSign, ShieldCheck, Target } from 'lucide-react'
import { Link } from 'react-router-dom'

const heroPoints = [
  { icon: ShieldCheck, title: 'Secure Banking', text: 'Your money, always safe.' },
  { icon: BadgeCheck, title: 'Trusted Partners', text: 'Working with leading banks' },
  { icon: CircleDollarSign, title: 'Transparent Process', text: 'Clear and reliable system' },
  { icon: Building2, title: 'Smart Solutions', text: 'For a better financial future' },
]

const BanksFinancialHero = () => {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-[#020b1b] px-6 py-12 text-white sm:px-10 lg:px-16">
      {/* Clear Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-90 lg:bg-right-top"
        style={{
          backgroundImage: `url('/bank.png')`,
        }}
      />

      {/* Dark Gradient Overlay - Covers text on left, leaves right side visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020b1b] via-[#020b1b]/80 lg:via-[#020b1b]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020b1b] via-transparent to-transparent" />
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#f5c54e]/15 blur-[120px]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-2xl pt-4">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f5c54e]/40 bg-[#061426]/80 px-4 py-1.5 backdrop-blur-md">
            <Target size={14} className="text-[#f5c54e]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5c54e]">
              Banks &amp; Financial Partners
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Trusted Banking &amp; <br />
            <span className="bg-gradient-to-r from-[#f5c54e] via-[#e2b354] to-[#f5c54e] bg-clip-text text-transparent">
              Financial Partnerships
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-200 sm:text-lg">
            Connecting you with trusted banks and financial institutions for secure transactions, smart savings and a stronger financial future.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/ContactUs"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#f5c54e] to-[#d99420] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#020b1b] shadow-lg shadow-[#f5c54e]/20 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Explore Financial Partners</span>
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            <Link
              to="/ContactUs"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#f5c54e]/40 bg-[#061426]/60 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:border-[#f5c54e] hover:bg-white/10"
            >
              <span>Contact Finance Team</span>
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bottom Floating Highlights Toolbar */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#061426]/75 p-5 backdrop-blur-md shadow-2xl lg:mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {heroPoints.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#f5c54e]/60 bg-[#020b1b] text-[#f5c54e]">
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">{title}</h4>
                  <p className="mt-0.5 text-xs text-slate-300">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BanksFinancialHero