import type { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}

const PageHero = ({ eyebrow, title, description, children }: PageHeroProps) => {
  return (
    <section className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden bg-black px-6 py-12 text-center text-white md:px-12 lg:px-20">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out hover:scale-105"
        style={{ backgroundImage: "url('/hero-yes.png')" }}
      />

      {/* Dark Overlay & Vignette Layers */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />

      {/* Decorative Glow Accent */}
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f0c75e]/15 blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        {/* Eyebrow Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f0c75e]/30 bg-[#f0c75e]/10 px-4 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f0c75e]" />
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f0c75e]">
            {eyebrow}
          </p>
        </div>

        {/* Title */}
        <h1 className="max-w-4xl text-5xl font-bold  text-white sm:text-6xl ">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-[#dbe5f2] sm:text-lg md:text-xl">
          {description}
        </p>

        {/* Action Elements / Children */}
        {children && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {children}
          </div>
        )}
      </div>

      {/* Bottom Separator Line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f0c75e]/40 to-transparent" />
    </section>
  )
}

export default PageHero