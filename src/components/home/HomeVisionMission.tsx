import { useEffect, useRef, useState, type ComponentType } from 'react'
import { FiArrowRight, FiGitBranch, FiMonitor, FiSearch, FiServer } from 'react-icons/fi'

type DirectionIconProps = {
  size?: number
}

type DirectionStep = {
  title: string
  label: string
  description: string
  icon: ComponentType<DirectionIconProps>
  points: string[]
}

const directionSteps: DirectionStep[] = [
  {
    title: 'Vision',
    label: 'Our vision',
    description: 'Our vision for YES TIME GLOBAL PRIVATE LIMITED is reflected in the tagline: Connecting Opportunities Worldwide.',
    icon: FiSearch,
    points: ['Our vision', 'Global opportunities', 'Worldwide connection'],
  },
  {
    title: 'Mission',
    label: 'Our mission',
    description: 'Our mission for YES TIME GLOBAL PRIVATE LIMITED is presented through the company’s programs, members, partners, and global direction.',
    icon: FiGitBranch,
    points: ['Our mission', 'Company programs', 'Business partners'],
  },
  {
    title: 'Future Direction',
    label: 'Future direction',
    description: 'The future direction of YES TIME GLOBAL PRIVATE LIMITED includes continued development of programs, partnerships, and worldwide opportunities.',
    icon: FiMonitor,
    points: ['Future direction', 'Investors and partners', 'Strategic growth'],
  },
  {
    title: 'Global Expansion',
    label: 'Pakistan, Nepal, Indonesia',
    description: 'The listed global expansion markets for YES TIME GLOBAL PRIVATE LIMITED are Pakistan, Nepal, and Indonesia.',
    icon: FiServer,
    points: ['Pakistan', 'Nepal', 'Indonesia'],
  },
]

const HomeVisionMission = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [displayedIndex, setDisplayedIndex] = useState(0)
  const [incomingIndex, setIncomingIndex] = useState<number | null>(null)
  const [isCrossfading, setIsCrossfading] = useState(false)
  const transitionFrameRef = useRef<number | null>(null)
  const transitionTimeoutRef = useRef<number | null>(null)

  const displayedStep = directionSteps[displayedIndex]
  const incomingStep = incomingIndex === null ? undefined : directionSteps[incomingIndex]

  const selectStep = (index: number) => {
    if (index === activeIndex) return

    if (transitionFrameRef.current !== null) {
      window.cancelAnimationFrame(transitionFrameRef.current)
      transitionFrameRef.current = null
    }

    if (transitionTimeoutRef.current !== null) {
      window.clearTimeout(transitionTimeoutRef.current)
      transitionTimeoutRef.current = null
    }

    setActiveIndex(index)
    setIncomingIndex(index)
    setIsCrossfading(false)

    transitionFrameRef.current = window.requestAnimationFrame(() => {
      transitionFrameRef.current = null
      setIsCrossfading(true)
    })

    transitionTimeoutRef.current = window.setTimeout(() => {
      transitionTimeoutRef.current = null
      setDisplayedIndex(index)
      setIncomingIndex(null)
      setIsCrossfading(false)
    }, 560)
  }

  useEffect(() => {
    return () => {
      if (transitionFrameRef.current !== null) {
        window.cancelAnimationFrame(transitionFrameRef.current)
      }
      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current)
      }
    }
  }, [])

  const renderStepDetails = (step: DirectionStep, layerClassName: string) => {
    const StepIcon = step.icon

    return (
      <div key={step.title} className={`absolute inset-0 flex flex-col transition-opacity duration-500 ease-in-out ${layerClassName}`}>
        <div className="inline-flex h-12 w-12 items-center justify-center self-end rounded-xl bg-gradient-to-br from-[#0b3b6e] to-[#1274b8] text-[#f0c75e]">
          <StepIcon size={23} />
        </div>
        <div className="flex-1">
          <h3 className="mt-2 text-5xl font-bold tracking-[-0.03em] text-[#000000]">{step.title}</h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#41566f]">{step.description}</p>
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {step.points.map((point) => (
            <li key={point} className="rounded-xl border border-[rgba(11,59,110,0.14)] bg-white p-3 text-xs font-normal leading-6 text-[#0b2b52] shadow-[0_6px_16px_rgba(11,59,110,0.04)]">
              {point}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <section id="vision-mission" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-[760px] text-center">
        <span className="inline-block rounded-full bg-[#eff6ff] px-3.5 py-1.5 text-xs font-medium  tracking-[0.12em] text-[#0b3b6e]">Vision &amp; Mission</span>
        <h2 className="mt-4 text-5xl font-bold leading-tight text-[#000000]">
          Our Direction. <span className="text-[#c5962e]">A Global Future.</span>
        </h2>
        <p className="mx-auto mt-5 text-base leading-7 text-[#41566f]">Explore our vision, mission, future direction, and global expansion across Pakistan, Nepal, and Indonesia.</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-3">
          {directionSteps.map((step, index) => {
            const Icon = step.icon
            const active = index === activeIndex

            return (
              <button
                key={step.title}
                type="button"
                onClick={() => selectStep(index)}
                className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition duration-200 ${
                  active
                    ? 'border-[#0b3b6e] bg-[#0b3b6e] text-white shadow-[0_12px_25px_rgba(11,59,110,0.2)]'
                    : 'border-[#dbe5f2] bg-[#f8fafc] text-[#000000] hover:-translate-y-0.5 hover:border-[#c5962e] hover:shadow-[0_8px_18px_rgba(11,59,110,0.08)]'
                }`}
              >
                <span className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#0b3b6e] shadow-[0_0_0_1px_#dbe5f2] ${active ? 'bg-[#fff8e1] text-[#c5962e] shadow-none' : ''}`}>
                  <Icon size={20} />
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <strong className="block text-base font-normal leading-6">
                    {step.title}
                  </strong>
                  <span className={`mt-1 block text-xs ${active ? 'text-[#f5d889]' : 'text-[#5d7087]'}`}>{step.label}</span>
                </span>
                <FiArrowRight size={18} className={`shrink-0 transition duration-200 ${active ? 'translate-x-1 text-[#f0c75e]' : 'text-[#7890aa] group-hover:translate-x-1 group-hover:text-[#c5962e]'}`} />
              </button>
            )
          })}
        </div>

        <article className="flex min-w-0 min-h-[560px] flex-col rounded-[1.6rem] lg:min-h-[330px] border border-[rgba(11,59,110,0.16)] bg-gradient-to-br from-white to-[#f4f8fc] p-7 text-[#000000] shadow-[0_20px_40px_rgba(11,59,110,0.12)]">
          <div className="relative min-h-[504px] lg:min-h-[302px]">
            {renderStepDetails(displayedStep, isCrossfading ? 'opacity-0' : 'opacity-100')}
            {incomingStep ? renderStepDetails(incomingStep, isCrossfading ? 'opacity-100' : 'opacity-0') : null}
          </div>
        </article>
      </div>
    </section>
  )
}

export default HomeVisionMission

