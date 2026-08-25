import { useEffect, useRef, useState, type ReactNode } from 'react'
import { FiCheckCircle } from 'react-icons/fi'

type CommitmentItem = {
  id: string
  text: string
}

type HomeCommitmentProps = {
  title?: string
  highlight?: string
  items?: CommitmentItem[]
  children?: ReactNode
  className?: string
}

const commitmentItems: CommitmentItem[] = [
  { id: 'languages', text: 'Available in Urdu, English, and Arabic.' },
  { id: 'programs', text: 'Shop, Car, Motorcycle, and approved programs.' },
  { id: 'process', text: 'Register, pay, verify, participate, and benefit.' },
  { id: 'plans', text: 'Flexible terms, draw options, and 12-month plans.' },
  { id: 'global-expansion', text: 'Programs across Pakistan, Nepal, and Indonesia.' },
  { id: 'partners', text: 'Partners, dealers, shops, showrooms, property, and banks.' },
]

const HomeCommitment = ({
  title = 'Committed to',
  highlight = 'Connecting Opportunities Worldwide',
  items = commitmentItems,
  children,
  className = '',
}: HomeCommitmentProps) => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(() => typeof window === 'undefined' || !('IntersectionObserver' in window))
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

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
      { rootMargin: '-100px' },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`mx-auto my-8 w-[calc(100%-2rem)] max-w-7xl rounded-3xl border border-[#dbe5f2] bg-white p-5 sm:my-11 sm:w-[90%] sm:rounded-[2.5rem] sm:p-8 lg:w-[63%] lg:p-[2.1rem] shadow-[0_20px_45px_rgba(11,59,110,0.1)] transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      } ${className}`}
    >
      {(title || highlight) && (
        <div className="mb-7 text-center sm:mb-8">
          <h2 className="mb-4 break-words text-[clamp(1.5rem,6vw,2.5rem)] font-normal leading-tight text-[#071a36] sm:text-[clamp(1.75rem,4vw,2.5rem)]">
            {title}{' '}
            {highlight ? <span className="italic text-[#c5962e]">{highlight}</span> : null}
          </h2>
        </div>
      )}

      {items.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {items.map((item) => {
            const isHovered = hoveredItem === item.id

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`group flex items-start gap-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : 'translate-x-0'}`}
              >
                <div className="mt-1 shrink-0">
                  <FiCheckCircle
                    size={20}
                    className={`transition-all duration-300 ${isHovered ? 'scale-110 text-[#c5962e]' : 'scale-100 text-[#0b3b6e]'}`}
                  />
                </div>
                <p className="m-0 break-words text-sm font-normal leading-6 text-[#41566f] transition-colors duration-300 group-hover:text-[#071a36] sm:text-base sm:leading-snug">{item.text}</p>
              </div>
            )
          })}
        </div>
      ) : null}

      {children}
    </section>
  )
}

export default HomeCommitment
