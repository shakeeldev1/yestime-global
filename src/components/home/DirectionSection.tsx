import { Link } from 'react-router-dom'
import { ArrowRight, Handshake, Sparkles } from 'lucide-react'

export const CallToActionSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4f7fb] px-4 py-10 sm:px-6  lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(11,59,110,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(11,59,110,0.06)_1px,transparent_1px)] bg-size-[42px_42px] opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-[#d99b26]/30 bg-[#000000] shadow-[0_20px_50px_-24px_rgba(6,24,50,0.55)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-[#f5c54e] via-[#e2a22c] to-[#b5770d]" aria-hidden="true" />

          <div className="relative grid items-center gap-8 px-6 py-9 sm:px-10 sm:py-11 lg:grid-cols-[1fr_auto] lg:px-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#f5c54e]">
                <Sparkles className="size-4" aria-hidden="true" />
                <span>Start Your Journey</span>
              </div>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
                Move forward with{' '}
                <span className="text-[#f5c54e]">confidence.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Explore practical programs and trusted partnerships designed to connect your next opportunity with a bigger global community.
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Handshake className="size-4 text-[#e2a22c]" aria-hidden="true" />
                <span>Built on transparency, trust, and shared progress.</span>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">
              <Link
                to="/OurPrograms"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-linear-to-r from-[#f5c54e] to-[#d99420] px-6 text-sm font-bold text-[#07182d] shadow-lg shadow-[#d99420]/20 transition duration-300 hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5c54e]"
              >
                <span>Explore Programs</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>

              <Link
                to="/ContactUs"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-6 text-sm font-semibold text-[#ffffff] transition duration-300 hover:border-[#f5c54e]/70 hover:bg-white/10 hover:text-[#f5c54e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="text-[#ffffff]">Talk to Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToActionSection