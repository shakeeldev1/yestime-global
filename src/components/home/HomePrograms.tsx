import { useRef, useState, type ComponentType } from 'react'
import { FiGitBranch, FiMonitor, FiSearch, FiServer } from 'react-icons/fi'

type ProgramIconProps = {
  size?: number
}

type Program = {
  id: string
  label: string
  title: string
  description: string
  points: string[]
  status: string
  icon: ComponentType<ProgramIconProps>
}

const programs: Program[] = [
  {
    id: 'shop-savings',
    label: 'Shop & Savings',
    title: 'Shop & Savings Program',
    description: 'A shopping savings plan that gives members a clear program path from participation to benefit. The program includes shopping savings, plan terms, and member benefits.',
    points: ['Shopping Savings', 'Plan Terms', 'Member Benefit', 'Eligibility'],
    status: 'Shopping savings plan',
    icon: FiMonitor,
  },
  {
    id: 'car',
    label: 'Car Program',
    title: 'Car Program',
    description: 'Explore the Car Program options, including plans without draw, plans with draw, and 12-month plans. Eligibility and terms guide each plan.',
    points: ['Car Program', 'Without Draw', 'With Draw', '12-Month Plan', 'Eligibility & Terms'],
    status: 'Flexible car plans',
    icon: FiServer,
  },
  {
    id: 'motorcycle-scooter',
    label: 'Motorcycle / Scooter',
    title: 'Motorcycle / Scooter Program',
    description: 'A dedicated program category for members interested in motorcycle or scooter participation plans, with program eligibility, terms, and benefits.',
    points: ['Motorcycle Program', 'Scooter Program', 'Eligibility & Terms', 'Member Benefits'],
    status: 'Mobility program',
    icon: FiGitBranch,
  },
  {
    id: 'approved-programs',
    label: 'Other Programs',
    title: 'Other Approved Programs',
    description: 'Other approved programs include eligibility and terms, plan details, participation steps, and member benefits.',
    points: ['Approved Programs', 'Eligibility & Terms', 'Plan Details', 'Participation Benefits'],
    status: 'Approved programs',
    icon: FiSearch,
  },
]

const CROSSFADE_DURATION = 500

const HomePrograms = () => {
  const [activeId, setActiveId] = useState(programs[0].id)
  const [displayedId, setDisplayedId] = useState(programs[0].id)
  const [incomingId, setIncomingId] = useState<string | null>(null)
  const [isCrossfading, setIsCrossfading] = useState(false)
  const transitionFrameRef = useRef<number | null>(null)
  const transitionTimeoutRef = useRef<number | null>(null)

  const displayedProgram = programs.find((program) => program.id === displayedId) ?? programs[0]
  const incomingProgram = programs.find((program) => program.id === incomingId)

  const selectProgram = (id: string) => {
    if (id === activeId) return

    const nextProgram = programs.find((program) => program.id === id)
    if (!nextProgram) return

    if (transitionFrameRef.current !== null) {
      window.cancelAnimationFrame(transitionFrameRef.current)
      transitionFrameRef.current = null
    }

    if (transitionTimeoutRef.current !== null) {
      window.clearTimeout(transitionTimeoutRef.current)
      transitionTimeoutRef.current = null
    }

    setActiveId(id)
    setIncomingId(id)
    setIsCrossfading(false)

    transitionFrameRef.current = window.requestAnimationFrame(() => {
      transitionFrameRef.current = null
      setIsCrossfading(true)
    })

    transitionTimeoutRef.current = window.setTimeout(() => {
      transitionTimeoutRef.current = null
      setDisplayedId(nextProgram.id)
      setIncomingId(null)
      setIsCrossfading(false)
    }, CROSSFADE_DURATION + 60)
  }

  const renderProgramDetails = (program: Program, layerClassName: string) => {
    const ProgramIcon = program.icon

    return (
      <div key={program.id} className={`absolute inset-0 flex flex-col [transition:opacity_500ms_ease-in-out] will-change-[opacity] ${layerClassName}`}>
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0b3b6e_0%,#1274b8_100%)] text-[#f0c75e] shadow-[0_8px_16px_rgba(11,59,110,0.22)]">
            <ProgramIcon size={26} />
          </div>
          <span className="rounded-full border border-[#d6b35a] bg-[#fff8e1] px-3.5 py-[0.45rem] text-[0.7rem] font-bold uppercase tracking-[0.08em] text-[#a97916]">{program.status}</span>
        </div>

        <div className="min-h-0 flex-1 py-8">
          <h3 className="m-0 text-[clamp(1.75rem,3.5vw,2.25rem)] font-normal tracking-[-0.02em] text-[#071a36]">{program.title}</h3>
          <p className="mt-3.5 max-w-2xl text-[0.975rem] leading-7 text-[#41566f]">{program.description}</p>
        </div>

        <div className="mb-4 flex items-center justify-between gap-4 border-t border-[rgba(11,59,110,0.12)] pt-4">
          <span className="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[#a97916]">Program Highlights</span>
          <span className="text-xs font-medium text-[#5d7087]">{program.points.length} features</span>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
          {program.points.map((point) => (
            <div key={point} className="flex items-center justify-center rounded-[0.85rem] border border-[#dbe5f2] bg-[#eff6ff] px-4 py-3.5 text-center">
              <span className="text-sm font-semibold text-[#0b2b52]">{point}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section id="programs" className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)] px-6 py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-[720px] text-center">
          <span className="inline-block rounded-full border border-[rgba(11,59,110,0.18)] bg-[#eff6ff] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#0b3b6e]">Our Programs</span>
          <h2 className="mt-5 text-[clamp(2.25rem,5vw,3.5rem)] font-normal leading-[1.15] tracking-[-0.03em] text-[#071a36]">
            Programs for <span className="bg-[linear-gradient(135deg,#b8860b_0%,#f0c75e_48%,#c5962e_100%)] bg-clip-text text-transparent">Participation &amp; Savings.</span>
          </h2>
          <p className="mx-auto mt-5 text-[1.05rem] leading-7 text-[#41566f]">Explore the Shop &amp; Savings, Car, Motorcycle / Scooter, and other approved programs.</p>
        </div>

        <div className="my-12 flex justify-center">
          <div className="inline-flex max-w-full gap-1 overflow-x-auto rounded-2xl border border-[#dbe5f2] bg-white p-1.5 shadow-[0_4px_20px_rgba(11,59,110,0.06),0_1px_2px_rgba(11,59,110,0.05)]">
            {programs.map((program) => {
              const active = program.id === activeId

              return (
                <button
                  key={program.id}
                  type="button"
                  onClick={() => selectProgram(program.id)}
                  aria-pressed={active}
                  className={`whitespace-nowrap rounded-xl border-0 px-5 py-3 text-[0.825rem] font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5962e] focus-visible:ring-offset-2 ${active ? 'bg-[#0b3b6e] text-white shadow-[0_4px_14px_rgba(11,59,110,0.28)]' : 'bg-transparent text-[#5d7087] hover:bg-[#eff6ff] hover:text-[#0b3b6e]'}`}
                >
                  {program.label}
                </button>
              )
            })}
          </div>
        </div>

        <article className="relative min-h-[380px] overflow-hidden rounded-[2rem] border border-[rgba(11,59,110,0.16)] bg-[linear-gradient(145deg,#ffffff_0%,#f4f8fc_100%)] p-10 text-[#071a36] shadow-[0_20px_40px_-15px_rgba(11,59,110,0.12)] backdrop-blur-2xl">
          <div className="pointer-events-none absolute -right-10 -top-[30%] h-[350px] w-[350px] bg-[radial-gradient(circle,rgba(14,116,184,0.12)_0%,rgba(255,255,255,0)_70%)]" />
          <div className="pointer-events-none absolute -bottom-[20%] -left-[10%] h-[300px] w-[300px] bg-[radial-gradient(circle,rgba(240,199,94,0.14)_0%,rgba(255,255,255,0)_70%)]" />
          <div className="relative z-10 min-h-[320px]">
            {renderProgramDetails(displayedProgram, isCrossfading ? 'opacity-0' : 'opacity-100')}
            {incomingProgram ? renderProgramDetails(incomingProgram, isCrossfading ? 'opacity-100' : 'opacity-0') : null}
          </div>
        </article>
      </div>
    </section>
  )
}

export default HomePrograms
