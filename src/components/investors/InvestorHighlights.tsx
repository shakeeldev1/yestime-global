import { Handshake, LineChart, ShieldCheck } from 'lucide-react'

const investorHighlights = [
  {
    icon: LineChart,
    title: 'Shared growth',
    description: 'Partner with a business focused on sustainable expansion and meaningful economic participation.',
  },
  {
    icon: Handshake,
    title: 'Strategic collaboration',
    description: 'Bring your network, expertise, or market access to opportunities built for mutual success.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust and clarity',
    description: 'Explore a transparent relationship with clear communication and long-term accountability.',
  },
]

const InvestorHighlights = () => {
  return (
    <section className="px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-12 rounded-full bg-[#d99b26]" aria-hidden="true" />
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#d99b26]">
              Why partner with us
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#061832] sm:text-4xl lg:text-5xl">
            A relationship built for the <span className="text-[#d99b26]">long term.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#41566f] sm:text-lg">
            Our strongest partnerships begin with shared values, clear expectations, and a practical view of the opportunity ahead.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {investorHighlights.map(({ icon: Icon, title, description }) => (
            <article key={title} className="group rounded-xl border border-slate-200/90 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:shadow-slate-900/10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#06234b] text-amber-400 transition-colors group-hover:bg-amber-400 group-hover:text-[#06234b]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-[#061832] transition-colors group-hover:text-amber-600">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#41566f]">{description}</p>
              <div className="mt-5 h-0.5 w-8 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-full group-hover:bg-amber-400" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InvestorHighlights
