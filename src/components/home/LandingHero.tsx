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
    <section className="relative flex min-h-[85vh] flex-col justify-between overflow-hidden bg-[#020c1c] px-6 py-6 text-white sm:px-10 lg:px-[7%]">
      {/* Background Image & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-yes.png"
          alt="Illustration representing a connected global network"
          loading="eager"
          className="h-full w-full object-cover object-center"
        />
        {/* Directional gradient overlays for crisp readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-90" />
      </div>

      {/* Hero Headline & Content Container */}
      <div className="relative z-10 max-w-2xl pt-4">
        <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
          Connect to
          <br />
          <span className="bg-gradient-to-r from-[#f5c54e] via-[#e5b338] to-[#d99420] bg-clip-text text-transparent">
            Global Opportunities.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-slate-200 sm:text-lg sm:leading-8">
          YES TIME GLOBAL PRIVATE LIMITED creates accessible programs and partnerships that connect
          people, businesses, and opportunities across the world.
        </p>

        {/* Call to Actions */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#programs"
            className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#f5c54e] to-[#d99420] px-5 py-3 text-sm font-bold text-[#07182d] shadow-lg shadow-amber-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-amber-500/40 focus-visible:outline-2 focus-visible:outline-amber-400"
          >
            <span>Explore Programs</span>
            <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
          </a>

          <Link
            to="/HowItWorks"
            className="inline-flex items-center gap-2.5 rounded-xl border border-[#d89d2c]/60 bg-[#020c1c]/50 px-5 py-3 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-[#d89d2c] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
          >
            <span>How It Works</span>
            <CirclePlay className="size-4 shrink-0 text-[#f5c54e]" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="relative z-10 mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {HERO_HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="group flex items-center gap-4 rounded-xl border border-white/15 bg-[#020c1c]/70 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#f5c54e]/50 hover:bg-[#020c1c]/90"
          >
            <Icon
              aria-hidden="true"
              className="size-11 shrink-0 rounded-full border-2 border-[#d7951e] bg-[#020c1c] p-2 text-[#f5c54e] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wide text-white">{title}</span>
              <span className="mt-0.5 text-xs leading-normal text-slate-300">{text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LandingHero