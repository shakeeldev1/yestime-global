import type { ReactNode } from 'react'

type PageHeroProps = {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
}

const PageHero = ({ eyebrow, title, description, children }: PageHeroProps) => {
  return (
    <section
      className="relative overflow-hidden bg-[#000000] bg-cover bg-center px-6 py-20 text-center text-white md:px-12 lg:px-20 lg:py-28"
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero-yes.png')" }}
    >
      <div className="relative mx-auto flex max-w-4xl flex-col items-center">
        <p className="mb-5 text-sm font-semibold tracking-[0.24em] text-[#f0c75e]">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#dbe5f2]">{description}</p>
        {children && <div className="flex justify-center">{children}</div>}
      </div>
    </section>
  )
}

export default PageHero
