import { memo, useEffect, useRef, useState, type ReactNode } from 'react'
import { FiArrowUpRight, FiStar } from 'react-icons/fi'
import { Link } from 'react-router-dom'

type HomeCTAProps = {
  badge?: string
  title?: string
  highlight?: string
  description?: string
  actions?: ReactNode
  children?: ReactNode
  className?: string
}

const HomeCTA = ({
  badge = 'Start Your Journey',
  title = 'Explore Your Next',
  highlight = 'Opportunity.',
  description = 'Discover our programs, connect with partners, and learn how YES TIME GLOBAL PRIVATE LIMITED connects opportunities worldwide.',
  actions,
  children,
  className = '',
}: HomeCTAProps) => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(() => typeof window === 'undefined' || !('IntersectionObserver' in window))

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    if (!('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '-40px' },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const defaultActions = (
    <>
      <Link
        to="/OurPrograms"
        className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[linear-gradient(135deg,#c5962e_0%,#f0c75e_100%)] px-[1.4rem] py-[0.85rem] text-base font-bold text-[#071a36] shadow-[0_10px_22px_rgba(197,150,46,0.24)] no-underline transition duration-300 ease-out hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5962e] focus-visible:ring-offset-2"
      >
        Explore Programs
        <FiArrowUpRight size={16} />
      </Link>
      <Link
        to="/ContactUs"
        className="inline-flex items-center justify-center rounded-full border border-[#0b3b6e] bg-[#0b3b6e] px-[1.4rem] py-[0.85rem] text-base font-semibold text-white no-underline transition duration-300 ease-out hover:bg-[#1274b8] hover:shadow-[0_10px_22px_rgba(11,59,110,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b3b6e] focus-visible:ring-offset-2"
      >
        Contact Us
      </Link>
    </>
  )

  return (
    <section
      ref={sectionRef}
      className={`${className} relative overflow-hidden bg-white px-4 pb-12 pt-8 transition-[opacity,transform] duration-500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
    >
      <div className="relative z-10 mx-auto w-[63%] max-w-[1280px] p-0">
        <div className="relative overflow-hidden rounded-3xl border border-[rgba(11,59,110,0.16)] bg-[linear-gradient(145deg,#ffffff_0%,#f4f8fc_100%)] p-8 shadow-[0_18px_45px_-18px_rgba(11,59,110,0.14)]">
          <div className="pointer-events-none absolute -left-28 -top-28 h-96 w-96 rounded-full bg-[rgba(14,116,184,0.12)] blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[rgba(240,199,94,0.16)] blur-[80px]" />

          <div className="relative z-10 grid grid-cols-[minmax(0,2fr)_minmax(190px,1fr)] items-center gap-8">
            <div className="flex flex-col gap-4">
              {badge ? (
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d6b35a] bg-[#eff6ff] px-3.5 py-[0.45rem] text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[#0b2b52]">
                  <FiStar size={16} />
                  <span>{badge}</span>
                </div>
              ) : null}

              {title ? (
                <h2 className="m-0 text-[clamp(1.8rem,4vw,2.8rem)] font-normal leading-[1.15] tracking-[-0.03em] text-[#071a36]">
                  {title}{' '}
                  {highlight ? <span className="italic text-[#c5962e]">{highlight}</span> : null}
                </h2>
              ) : null}

              {description ? <p className="m-0 max-w-[42rem] text-[0.95rem] font-normal leading-7 text-[#41566f]">{description}</p> : null}

              {children ? <div className="mt-1">{children}</div> : null}
            </div>

            <div className="flex w-full flex-col items-stretch justify-center gap-3">{actions ?? defaultActions}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(HomeCTA)
