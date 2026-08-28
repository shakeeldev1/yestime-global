import { useState } from 'react'
import {
  BadgeCheck,
  ChevronRight,
  CirclePlay,
  Globe2,
  Handshake,
  HeartHandshake,
  MapPin,
  Sparkles,
  Target,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react'

interface StatItem {
  icon: LucideIcon
  num: string
  label: string
}

interface PointItem {
  title: string
  description: string
  icon: LucideIcon
}

interface OptionItem {
  id: string
  icon: LucideIcon
  title: string
  teaser: string
  heading: string
  copy: string
  points: PointItem[]
}

const STATS: readonly StatItem[] = [
  { icon: Globe2, num: '100+', label: 'Countries Reached' },
  { icon: Users, num: '50K+', label: 'Active Members' },
  { icon: Handshake, num: '200+', label: 'Trusted Partners' },
  { icon: BadgeCheck, num: '10+', label: 'Years of Trust' },
]

const OPTIONS: readonly OptionItem[] = [
  {
    id: 'vision',
    icon: Target,
    title: 'Vision',
    teaser: 'A world of equal opportunities for all.',
    heading: 'A Global Future.',
    copy: 'We envision a connected global community where people and businesses can discover meaningful opportunities.',
    points: [
      { title: 'Global Reach', description: 'Expanding opportunities across the world.', icon: Globe2 },
      { title: 'Equal Access', description: 'Creating clear paths for people to grow.', icon: MapPin },
      { title: 'Future Ready', description: 'Building value for generations.', icon: Sparkles },
    ],
  },
  {
    id: 'mission',
    icon: Zap,
    title: 'Mission',
    teaser: 'Empowering people through global connection.',
    heading: 'Creating Real Impact.',
    copy: 'Our mission is to connect members, partners and practical programs through an accessible, transparent experience.',
    points: [
      { title: 'People First', description: 'Keeping every experience member-focused.', icon: Users },
      { title: 'Practical Programs', description: 'Helping members progress with purpose.', icon: Target },
      { title: 'Shared Growth', description: 'Building success together.', icon: Sparkles },
    ],
  },
  {
    id: 'values',
    icon: HeartHandshake,
    title: 'Values',
    teaser: 'Trust, Integrity, Transparency & Growth.',
    heading: 'Built On Trust.',
    copy: 'Every interaction is guided by integrity, transparent communication and a commitment to lasting relationships.',
    points: [
      { title: 'Trusted Network', description: 'Partnering with verified leaders.', icon: BadgeCheck },
      { title: 'Transparency', description: 'Making every step easy to understand.', icon: Sparkles },
      { title: 'Lasting Value', description: 'Creating impact beyond today.', icon: Handshake },
    ],
  },
  {
    id: 'presence',
    icon: Globe2,
    title: 'Global Presence',
    teaser: 'Building a worldwide community.',
    heading: 'Connections Worldwide.',
    copy: 'Our growing network brings members and partners closer to opportunities across borders.',
    points: [
      { title: 'Worldwide Community', description: 'Connecting people around the globe.', icon: Globe2 },
      { title: 'Local Insight', description: 'Supporting partners where they are.', icon: MapPin },
      { title: 'Stronger Together', description: 'Growing one connection at a time.', icon: Users },
    ],
  },
]

export const DirectionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = OPTIONS[activeIndex]

  return (
    <div className="mx-auto max-w-7xl px-5 py-8">
      {/* Stats Bar */}
      <section className="mb-10 grid grid-cols-2 gap-4 rounded-2xl bg-gradient-to-r from-[#06234b] to-[#021329] p-6 text-white sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/10">
        {STATS.map(({ icon: Icon, num, label }) => (
          <div key={label} className="flex items-center justify-center gap-3.5 p-2">
            <Icon className="h-8 w-8 shrink-0 text-[#e6a82d]" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold leading-tight text-white">{num}</span>
              <span className="text-xs text-slate-300">{label}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Interactive Content Grid */}
      <section className="grid items-center gap-8 lg:grid-cols-[300px_1fr_1.1fr]">
        {/* Navigation Sidebar */}
        <aside 
          className="flex flex-col gap-1.5 rounded-2xl bg-gradient-to-br from-[#092b59] to-[#03152e] p-3 shadow-lg"
          role="tablist"
          aria-label="Our Direction Tabs"
        >
          {OPTIONS.map((option, index) => {
            const Icon = option.icon
            const isSelected = index === activeIndex
            return (
              <button
                type="button"
                key={option.id}
                role="tab"
                id={`tab-${option.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${option.id}`}
                className={`group flex w-full items-center gap-3.5 rounded-xl p-3.5 text-left transition-all duration-200 ${
                  isSelected
                    ? 'border border-amber-500/60 bg-white/10 text-white shadow-xs'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className={`rounded-lg p-2 transition-colors ${isSelected ? 'bg-amber-500/20' : 'bg-white/5'}`}>
                  <Icon className="h-5 w-5 shrink-0 text-amber-400" aria-hidden="true" />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="text-xs font-bold text-white">{option.title}</span>
                  <span className="text-[11px] leading-tight text-slate-300 mt-0.5">{option.teaser}</span>
                </div>
                <ChevronRight
                  className={`h-4 w-4 shrink-0 text-amber-400 transition-transform duration-200 ${
                    isSelected ? 'translate-x-0.5 opacity-100' : 'opacity-40 group-hover:opacity-100'
                  }`}
                  aria-hidden="true"
                />
              </button>
            )
          })}
        </aside>

        {/* Content Display Panel */}
        <article 
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="flex flex-col justify-center py-2"
        >
          <span className="text-xs font-bold tracking-[0.16em] text-amber-600 uppercase">
            Our Direction
          </span>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#061832] sm:text-4xl">
            Our Direction.
            <br />
            <em className="not-italic text-[#e2a22c]">{active.heading}</em>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {active.copy}
          </p>
          <ul className="mt-6 space-y-4">
            {active.points.map(({ title, description, icon: PointIcon }) => (
              <li className="flex items-start gap-3" key={title}>
                <div className="mt-0.5 rounded-md bg-amber-500/10 p-1.5 text-amber-600">
                  <PointIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#061832]">{title}</span>
                  <span className="text-xs leading-normal text-slate-600">{description}</span>
                </div>
              </li>
            ))}
          </ul>
        </article>

        {/* Media Card */}
        <div className="group relative min-h-[320px] w-full overflow-hidden rounded-2xl bg-[#042247] shadow-xl">
          <img
            className="h-full w-full object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-105"
            src="/variant1_square.webp"
            alt="Worldwide connections illustration"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00152d] via-[#00152d]/30 to-transparent" />
          
          {/* Play Video CTA */}
          <button
            type="button"
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-amber-500/20 p-3 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-amber-500/30 focus-visible:outline-2 focus-visible:outline-amber-400"
            aria-label="Play introduction video"
          >
            <CirclePlay className="h-14 w-14 fill-amber-400 stroke-[#06204b] transition-transform duration-300 group-hover:scale-105" />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block rounded-md bg-amber-500/20 px-2.5 py-1 text-[10px] font-bold text-amber-300 backdrop-blur-sm">
              INTRO VIDEO
            </span>
            <h3 className="mt-2 text-base font-bold leading-snug text-white sm:text-lg">
              Discover how YES TIME GLOBAL connects opportunities worldwide.
            </h3>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DirectionSection