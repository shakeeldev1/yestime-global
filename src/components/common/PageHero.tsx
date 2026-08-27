import type { ReactNode } from 'react'
import heroImage from '../../assets/hero.png'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}

const PageHero = ({ eyebrow, title, description, children }: PageHeroProps) => {
  return (
    <section
      className="relative overflow-hidden bg-[#10233f] bg-center px-6 py-20 text-center text-white md:px-12 lg:px-20 lg:py-28"
      style={{ backgroundImage: `linear-gradient(rgba(16, 35, 63, 0.88), rgba(16, 35, 63, 0.94)), url(${heroImage})` }}
    >
      <div className="relative mx-auto flex max-w-4xl flex-col items-center">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#d9b778]">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{description}</p>
        {children && <div className="flex justify-center">{children}</div>}
      </div>
    </section>
  )
}

export default PageHero
