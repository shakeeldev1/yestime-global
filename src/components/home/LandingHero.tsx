import { Link } from 'react-router-dom'
import { ArrowRight, CirclePlay, ShieldCheck, Sparkles, Target, Users, type LucideIcon } from 'lucide-react'

interface HeroHighlight {
  icon: LucideIcon
  title: string
  text: string
}

const HERO_HIGHLIGHTS: HeroHighlight[] = [
  {
    icon: Users,
    title: 'Global Network',
    text: 'Connect with verified partners worldwide.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Platform',
    text: 'Secure, transparent & member-focused.',
  },
  {
    icon: Target,
    title: 'Real Impact',
    text: 'Opportunities that create growth & change.',
  },
  {
    icon: Sparkles,
    title: 'Always With You',
    text: '24/7 support for all our members.',
  },
]

export const LandingHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#020c1c] px-6 py-8  text-white sm:px-10 lg:px-[7%] l">
      {/* Background Image & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-yes.png"
          alt="Illustration representing a connected global network"
          loading="eager"
          className="h-full w-full object-cover object-center"
        />
        {/* Directional gradient to guarantee contrast for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020c1c] via-[#020c1c]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020c1c] via-transparent to-transparent opacity-80" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[520px]">
        <h1 className="text-4xl  sm:text-5xl lg:text-6xl">
          Connect to
          <br />
          <span className="font-bold text-[#f5c54e]">Global Opportunities.</span>
        </h1>
        <p className="mt-5 max-w-[470px] text-base leading-relaxed text-slate-200 sm:text-sm sm:leading-6">
          YES TIME GLOBAL PRIVATE LIMITED creates accessible programs and partnerships that connect
          people, businesses, and opportunities across the world.
        </p>
        
        {/* Call to Actions */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#programs"
            className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#f5c54e] to-[#d99420] px-6 py-3.5 text-xs font-bold text-[#07182d] shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 hover:shadow-amber-500/30 focus-visible:outline-2 focus-visible:outline-amber-400"
          >
            <span>Explore Programs</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <Link
            to="/HowItWorks"
            className="inline-flex items-center gap-2.5 rounded-xl border border-[#d89d2c]/60 bg-[#020c1c]/40 px-6 py-3.5 text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-[#d89d2c] focus-visible:outline-2 focus-visible:outline-white"
          >
            <span>How It Works</span>
            <CirclePlay className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="relative z-10 mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {HERO_HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
          <div 
            key={title} 
            className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-[#020c1c]/60 p-3.5 backdrop-blur-md"
          >
            <Icon 
              aria-hidden="true" 
              className="size-10 shrink-0 rounded-full border-2 border-[#d7951e] p-2 text-[#ebb02f] bg-[#020c1c]" 
            />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">{title}</span>
              <span className="text-[11px] leading-tight text-slate-300 mt-0.5">{text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LandingHero