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
    image: 'https://i.pinimg.com/1200x/62/2e/6e/622e6e6348cfcb3abb43f16d0d0dcb78.jpg',
  },
  {
    title: 'A Place for Everyone',
    text: 'A welcoming space where everyone has an equal place to grow.',
    icon: Users,
    image: 'https://i.pinimg.com/736x/5d/75/06/5d7506575df6b7050b4dc8ddfbad80dd.jpg',
  },
  {
    title: 'Modern Solutions',
    text: 'Continuous technological improvements for a better experience.',
    icon: Lightbulb,
    image: 'https://i.pinimg.com/736x/e2/5a/b9/e25ab9ca951eee9cf5dd92434fc67666.jpg',
  },
  {
    title: 'Creating Real Change',
    text: 'Accessible opportunities that create real, sustainable change.',
    icon: Globe2,
    image: 'https://i.pinimg.com/1200x/f9/65/e0/f965e04e399643c7f9ec210a51ab7370.jpg',
  },
  {
    title: 'Your Success Comes First',
    text: 'We are committed to your growth, progress, and long term success.',
    icon: HeartHandshake,
    image: 'https://i.pinimg.com/736x/dc/6b/82/dc6b822d67103e6b93cce14246c60b62.jpg',
  },
] as const

export const CommunitySection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-100/70 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-500/10 px-4 py-1.5 text-sm font-bold text-amber-700 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span className="uppercase tracking-widest">Why Choose Us</span>
          </div>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#061832] sm:text-5xl">
            Why Join <span className="text-[#E2A22C]">YES TIME GLOBAL?</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            We are committed to building a transparent platform focused on your security, long-term growth, and financial empowerment.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {FEATURES.map(({ title, text, image }) => (
            <div
              key={title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-amber-400/80 hover:shadow-xl hover:shadow-amber-500/10"
            >
              {/* Subtle top border gradient accent on hover */}
              <div className="absolute inset-x-0 top-0 z-20 h-1 bg-linear-to-r from-transparent via-[#E2A22C] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Image Showcase Header */}
                <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Text Content */}
                <div className="p-5 pt-8">
                  <h3 className="text-lg font-bold leading-snug text-[#061832] transition-colors duration-300 group-hover:text-[#E2A22C]">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </div>
              </div>

              {/* Bottom Accent Hover Line */}
              <div className="px-5 pb-5">
                <div className="h-1 w-8 rounded-full bg-slate-200 transition-all duration-300 ease-out group-hover:w-full group-hover:bg-[#E2A22C]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CommunitySection