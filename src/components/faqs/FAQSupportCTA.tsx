import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const FAQSupportCTA = () => {
  return (
    <section className="px-5 pb-16 sm:px-8 lg:px-[5.5%]">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[linear-gradient(90deg,#020b1b_0%,#071a36_40%,#0b2b52_100%)] p-7 sm:p-9 lg:p-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#f5c54e]">Need more help?</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
              Find your next<br className="hidden sm:block" />
              <span className="text-[#f5c54e]">step.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-200">
              If your question is not answered here, contact YES TIME GLOBAL and our team can guide you toward the right program or next step.
            </p>
          </div>

          <Link
            to="/ContactUs"
            className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#f5c54e] to-[#d99420] px-6 py-3 text-sm font-bold text-[#07182d] shadow-[0_16px_32px_rgba(245,197,78,0.2)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Contact us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FAQSupportCTA
