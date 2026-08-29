import { ArrowUpRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const BanksFinancialCTA = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-10 pt-8 sm:pb-12">
      <div className="relative z-10 mx-auto w-[calc(100%-2rem)] max-w-[1280px] p-0 sm:w-[90%] lg:w-[63%]">
        <div className="relative overflow-hidden rounded-3xl border border-[rgba(11,59,110,0.16)] bg-[linear-gradient(145deg,#ffffff_0%,#f4f8fc_100%)] p-5 shadow-[0_18px_45px_-18px_rgba(11,59,110,0.14)] sm:p-8">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[rgba(14,116,184,0.12)] blur-[80px] sm:-left-28 sm:-top-28 sm:h-96 sm:w-96" />
          <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[rgba(240,199,94,0.16)] blur-[80px] sm:-bottom-32 sm:-right-24 sm:h-96 sm:w-96" />

          <div className="relative z-10 grid min-w-0 grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,2fr)_minmax(190px,1fr)] md:gap-8">
            <div className="flex min-w-0 flex-col gap-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#d6b35a] bg-[#eff6ff] px-3.5 py-[0.45rem] text-[0.7rem] font-bold tracking-[0.15em] text-[#0b2b52]">
                <Star size={16} className="text-[#c5962e]" />
                <span>Let&apos;s build together</span>
              </div>

              <h2 className="m-0 break-words text-5xl font-bold leading-[1.15] tracking-[-0.03em] text-[#071a36]">
                Let us build something{' '}
                <span className="italic text-[#c5962e]">useful together.</span>
              </h2>
            </div>

            <div className="flex w-full min-w-0 flex-col items-stretch justify-center gap-3 md:max-w-[240px]">
              <Link
                to="/ContactUs"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[linear-gradient(135deg,#c5962e_0%,#f0c75e_100%)] px-[1.4rem] py-[0.85rem] text-base font-bold text-[#071a36] shadow-[0_10px_22px_rgba(197,150,46,0.24)] no-underline transition duration-300 ease-out hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5962e] focus-visible:ring-offset-2"
              >
                Start the discussion
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BanksFinancialCTA
