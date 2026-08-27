import { createElement } from 'react'
import { FiArrowUpRight, FiGitBranch, FiMonitor, FiSearch, FiServer } from 'react-icons/fi'
import { Link } from 'react-router-dom'

type Solution = {
  title: string
  description: string
  icon: typeof FiMonitor
  path: string
}

const solutions: Solution[] = [
  {
    title: 'About Us',
    description: 'Company introduction, company objective, CEO Chaudhry Mohammad Afzal, and company team.',
    icon: FiMonitor,
    path: '/about',
  },
  {
    title: 'Vision & Mission',
    description: 'Our vision, mission, and future direction for connecting opportunities worldwide.',
    icon: FiSearch,
    path: '/vision-mission',
  },
  {
    title: 'Our Programs',
    description: 'Shop & Savings Program, Car Program, Motorcycle / Scooter Program, and other approved programs.',
    icon: FiGitBranch,
    path: '/OurPrograms',
  },
  {
    title: 'How It Works',
    description: 'Register, choose a plan, purchase or pay, receive a token, complete verification, participate, and receive benefits.',
    icon: FiServer,
    path: '/HowItWorks',
  },
]

const HomeAbout = () => {
  return (
    <section id="about" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-[760px] text-center">
        <span className="inline-block rounded-full bg-[#eff6ff] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-[#0b3b6e]">YES TIME GLOBAL</span>
        <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.04em] text-[#071a36]">
          One Company. <span className="text-[#c5962e]">Connecting Opportunities Worldwide.</span>
        </h2>
        <p className="mx-auto mt-5 leading-7 text-[#41566f]">Explore our company, vision and mission, programs, and simple participation process.</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
        {solutions.map((solution) => (
          <Link
            key={solution.title}
            to={solution.path}
            className="group flex min-h-[275px] flex-col items-start rounded-3xl border border-[#dbe5f2] bg-[#f8fafc] p-6 text-[#0b3b6e] no-underline transition duration-300 ease-out hover:-translate-y-1 hover:border-[#d6b35a] hover:bg-white hover:shadow-[0_20px_35px_rgba(11,59,110,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5962e] focus-visible:ring-offset-2"
          >
            {createElement(solution.icon, { size: 28 })}
            <h3 className="mt-7 text-xl font-medium leading-[1.3] text-[#071a36]">{solution.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-[#41566f]">{solution.description}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.08em] text-[#a97916] transition-colors group-hover:text-[#0b3b6e]">
              Explore <FiArrowUpRight size={15} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default HomeAbout
