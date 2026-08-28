import React from 'react'
import {
  Globe2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'

const FEATURES = [
  {
    title: 'Secure & Reliable',
    text: 'Your security and operational safety are always our top priority.',
    icon: ShieldCheck,
    image: 'https://i.pinimg.com/1200x/62/2e/6e/622e6e6348cfcb3abb43f16d0d0dcb78.jpg', // Replace with your card-specific image
  },
  {
    title: 'A Place for Everyone',
    text: 'A welcoming space where everyone has an equal place to grow.',
    icon: Users,
    image: 'https://i.pinimg.com/736x/5d/75/06/5d7506575df6b7050b4dc8ddfbad80dd.jpg', // Replace with your card-specific image
  },
  {
    title: 'Modern Solutions',
    text: 'Continuous technological improvements for a better experience.',
    icon: Lightbulb,
    image: 'https://i.pinimg.com/736x/e2/5a/b9/e25ab9ca951eee9cf5dd92434fc67666.jpg', // Replace with your card-specific image
  },
  {
    title: 'Creating Real Change',
    text: 'Accessible opportunities that create real, sustainable change.',
    icon: Globe2,
    image: 'https://i.pinimg.com/1200x/f9/65/e0/f965e04e399643c7f9ec210a51ab7370.jpg', // Replace with your card-specific image
  },
  {
    title: 'Your Success Comes First',
    text: 'We are committed to your growth, progress, and long term success.',
    icon: HeartHandshake,
    image: 'https://i.pinimg.com/736x/dc/6b/82/dc6b822d67103e6b93cce14246c60b62.jpg', // Replace with your card-specific image
  },
] as const

export const CommunitySection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-100/70 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-amber-700 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span className="uppercase tracking-widest">Why Choose Us</span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#061832] sm:text-4xl">
            Why Join <span className="text-[#E2A22C]">YES TIME GLOBAL?</span>
          </h2>

          <p className="mt-2 max-w-xl text-xs text-slate-600 sm:text-sm">
            We are committed to building a transparent platform focused on your security, long-term growth, and financial empowerment.
          </p>
        </div>

        {/* 5 Cards Grid: Unique Top Image + Bottom Content */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
  {FEATURES.map(({ title, text, icon: Icon, image }) => (
    <div
      key={title}
      className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:shadow-slate-900/10"
    >
      <div>
        {/* TOP: Clear Individual Card Image (No overlays or opacity filters) */}
        <div className="relative h-36 w-full overflow-visible bg-white">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Floating Icon Badge Overlapping Seam */}
          <div className="absolute -bottom-5 left-5 z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-[#06234b] text-amber-400 shadow-lg ring-4 ring-white transition-colors group-hover:bg-amber-400 group-hover:text-[#06234b]">
            <Icon className="h-5 w-5" />
          </div>
        </div>

        {/* BOTTOM: Text Content */}
        <div className="p-5 pt-8">
          <h3 className="text-base font-bold text-[#061832] transition-colors group-hover:text-amber-600">
            {title}
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-slate-600">
            {text}
          </p>
        </div>
      </div>

      {/* Bottom Accent Hover Line */}
      <div className="px-5 pb-5">
        <div className="h-0.5 w-8 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-full group-hover:bg-amber-400" />
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  )
}

export default CommunitySection