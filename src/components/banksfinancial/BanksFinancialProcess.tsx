import { Compass, Handshake, TrendingUp } from 'lucide-react'

const financeHighlights = [
  {
    title: 'Aligned goals',
    text: 'Define outcomes that matter to every stakeholder.',
    icon: Handshake,
  },
  {
    title: 'Clear process',
    text: 'Move from first discussion to action with confidence.',
    icon: Compass,
  },
  {
    title: 'Long-term value',
    text: 'Build a partnership that can grow with its community.',
    icon: TrendingUp,
  },
]

const BanksFinancialProcess = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4f7fb] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(11,59,110,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(11,59,110,0.06)_1px,transparent_1px)] bg-size-[42px_42px] opacity-40" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d6b35a]/50 bg-[#fff8e1] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0b2b52]">
            <Compass className="h-3.5 w-3.5 text-[#d99b26]" />
            Partnership Process
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#071930] sm:text-4xl lg:text-5xl">
            A practical path to <span className="text-[#d99b26]">shared growth</span>
          </h2>
        </div>

        <div className="relative mt-12 lg:mt-16">
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-12 hidden border-t-2 border-dashed border-[#d99b26]/40 lg:block" />

          <div className="grid gap-8 md:grid-cols-3">
            {financeHighlights.map(({ title, text, icon: Icon }, index) => (
              <div key={title} className="group relative flex flex-col items-center text-center">
                {index < financeHighlights.length - 1 && (
                  <div className="pointer-events-none absolute -right-5 top-[42px] z-20 hidden h-3.5 w-3.5 rounded-full border-2 border-[#f4f7fb] bg-[#d99b26] shadow-md lg:block" />
                )}

                <div className="relative flex flex-col items-center">
                  <div className="relative z-10 flex h-10 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#f5b324] to-[#d99b26] text-xs font-black text-[#071930] shadow-md transition-transform duration-300 group-hover:scale-110">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="relative -mt-3 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#d99b26]/30 bg-[#071930] text-[#d99b26] shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#d99b26] group-hover:bg-[#0c2647]">
                    <Icon className="h-10 w-10" />
                  </div>
                </div>

                <div className="mt-6 w-full rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_15px_35px_-20px_rgba(7,25,48,0.25)] transition-all duration-300 group-hover:border-[#d99b26]/40 group-hover:shadow-lg group-hover:shadow-amber-500/10">
                  <h3 className="text-lg font-bold text-[#071930] transition-colors duration-300 group-hover:text-[#d99b26]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BanksFinancialProcess
