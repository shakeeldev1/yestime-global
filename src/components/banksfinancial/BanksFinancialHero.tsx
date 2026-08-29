import { ArrowRight, Building2, Globe2, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const highlights = [
  { icon: Building2, label: 'Institutional alignment', value: 'Trusted partnerships' },
  { icon: ShieldCheck, label: 'Responsible growth', value: 'Secure model' },
  { icon: Globe2, label: 'Market reach', value: 'Regional opportunities' },
  { icon: Sparkles, label: 'Customer confidence', value: 'Clear process' },
]

const BanksFinancialHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#020c1c] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-[7%] lg:py-20">
      <div className="absolute inset-0">
        <img src="/hero-yes.png" alt="Financial partnership opportunities" className="h-full w-full object-cover object-center opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020c1c] via-[#020c1c]/80 to-[#020c1c]/30" />
        <div className="absolute inset-0 bg-[radial-gradient(#f6b93f90_1px,transparent_1px)] [background-size:38px_38px] opacity-[0.12]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-[#d6b35a]/60 bg-[#020c1c]/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#f5c54e] backdrop-blur-sm">
            Banks &amp; Financial Institutions
          </span>
          <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            A dependable partner for{' '}
            <span className="text-[#f5c54e]">financial inclusion.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
            Let&apos;s build practical business partnerships that connect trusted financial services with people and communities ready to move forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/ContactUs"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#f5c54e] to-[#d99420] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-[#07182d] shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 hover:shadow-amber-500/30"
            >
              Discuss partnership
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 rounded-xl border border-[#d89d2c]/60 bg-[#020c1c]/40 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-[#d89d2c]"
            >
              Contact us
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#020c1c]/60 p-3.5 backdrop-blur-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#d7951e] bg-[#020c1c] text-[#ebb02f]">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">{label}</p>
                <p className="mt-1 text-sm font-semibold text-white">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BanksFinancialHero
