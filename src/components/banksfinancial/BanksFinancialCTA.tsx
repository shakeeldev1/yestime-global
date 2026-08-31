import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const BanksFinancialCTA = () => {
  const { t } = useTranslation("banks")

  return (
    <section className="px-5 pb-12 pt-2 sm:px-8 lg:px-[5.5%] lg:pb-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[linear-gradient(90deg,#020b1b_0%,#061b34_40%,#0b2a4f_100%)] p-7 sm:p-9 lg:p-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[650px]">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#f5c54e]">{t('cta.eyebrow')}</p>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              {t('cta.titleLine1')}
              <span className="block text-[#f5c54e]">{t('cta.titleHighlight')}</span>
            </h3>
            <p className="mt-4 max-w-[520px] text-base leading-7 text-slate-200">
              {t('cta.description')}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/ContactUs"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#f5c54e] to-[#d99420] px-6 py-3 text-sm font-bold text-[#07182d] shadow-[0_16px_32px_rgba(245,197,78,0.25)] transition-all duration-200 hover:-translate-y-0.5"
            >
              {t('cta.exploreButton')}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex text-white items-center gap-2 rounded-xl border border-[#f5c54e]/60 bg-[#07182d]/50 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-white/10"
            >
              <span className="text-white">{t('cta.contactButton')}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BanksFinancialCTA
