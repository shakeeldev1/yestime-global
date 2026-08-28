import React from 'react'
import { Link } from 'react-router-dom'
import { Users, Target, Eye, Handshake, ArrowRight, CheckCircle2, } from 'lucide-react'

interface PillarItem {
  icon: React.ElementType
  title: string
  description: string
}

const PILLARS: readonly PillarItem[] = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'Empowering lives through global access & shared opportunities.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'A connected world of transparent and equal opportunities for all.',
  },
  {
    icon: Handshake,
    title: 'Our Values',
    description: 'Built on trust, integrity, transparency, and sustainable growth.',
  },
] as const

export const AboutUsCard: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-8 lg:py-12">
      {/* Background Decorative Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Split Container */}
        <div className="relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10 lg:flex-row">
          
          {/* Left Column - Content */}
          <div className="relative z-10 flex flex-1 flex-col justify-between p-8 sm:p-12 lg:w-[55%] lg:py-14 lg:pl-12 lg:pr-8">
            <div>
              {/* Badge & Title */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#071930] text-amber-400 shadow-md shadow-slate-900/10">
                    <Users className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#d99b26]">
                    Who We Are
                  </span>
                </div>

                {/* Clear Logo Render */}
                <img
                  src="/about-logo.png"
                  alt="YES TIME GLOBAL Logo"
                  className="h-25 w-auto max-w-[200px] object-contain"
                />
              </div>

              {/* Accent Line */}
              <div className="mt-4 flex items-center gap-1.5">
                <div className="h-1.5 w-12 rounded-full bg-[#d99b26]" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#d99b26]" />
              </div>

              {/* Main Copy */}
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-7">
                <p>
                  At <strong className="font-bold text-[#071930]">YES TIME GLOBAL</strong>, we are committed to connecting people, businesses, and opportunities across the globe under one transparent platform.
                </p>
                <p>
                  Our mission is to create accessible programs and strategic partnerships that empower individuals and communities to grow, achieve, and succeed together.
                </p>
              </div>

              {/* Quick Feature Checklist */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-semibold text-[#071930] sm:text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#d99b26]" />
                  <span>Global Opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#d99b26]" />
                  <span>Transparent Process</span>
                </div>
              </div>
            </div>

            {/* Bottom Pillars Section */}
            <div className="mt-10 border-t border-slate-100 pt-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {PILLARS.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50/50 p-4 text-center transition-all duration-300 hover:border-amber-300 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-[#d99b26] transition-colors group-hover:bg-[#071930] group-hover:text-amber-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 text-xs font-bold text-[#071930] sm:text-sm">
                      {title}
                    </h3>
                    <p className="mt-1 text-[11px] leading-snug text-slate-500">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Primary Action Button */}
              <div className="mt-8 flex justify-start">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#071930] px-6 py-3 text-xs font-bold text-white shadow-md transition-all duration-300 hover:bg-[#0c2647] hover:shadow-lg"
                >
                  <span>Discover Full Story</span>
                  <ArrowRight className="h-4 w-4 text-amber-400" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Image Showcase with S-Curve Separator */}
          <div className="relative min-h-[360px] flex-1 lg:min-h-full lg:w-[45%]">
            <div className="absolute inset-0 bg-[#071930]">
              <img
                src="/homeAbout.png"
                alt="YES TIME GLOBAL Platform Concept"
                className="h-full w-full object-cover object-center brightness-90 saturate-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071930]/80 via-[#071930]/20 to-transparent lg:bg-gradient-to-r lg:from-[#071930]/40 lg:to-transparent" />
            </div>

            {/* SVG Curve Divider (Visible on Desktop) */}
            <div className="pointer-events-none absolute inset-y-0 -left-1 hidden w-24 lg:block">
              <svg
                className="h-full w-full"
                viewBox="0 0 100 800"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 0 0 C 70 260, 95 540, 0 800 Z"
                  fill="#d99b26"
                />
                <path
                  d="M -10 0 C 50 260, 75 540, -10 800 Z"
                  fill="#ffffff"
                />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutUsCard