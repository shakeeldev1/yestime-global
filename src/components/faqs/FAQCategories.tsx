import { useTranslation } from 'react-i18next'
import { FiArrowDown, FiBookOpen, FiCheckCircle, FiCreditCard, FiHelpCircle } from 'react-icons/fi'
import { faqCategories } from './faqData'

const categoryIcons = [FiBookOpen, FiCreditCard, FiCheckCircle, FiHelpCircle, FiBookOpen]

const FAQCategories = () => {
  const { t } = useTranslation('faqs')

  return (
    <section className="relative w-full overflow-hidden bg-[#edf2f8] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex rounded-full border border-[#f5c54e]/50 bg-[#fff4d9] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#a97916]">
              {t('categoriesSection.eyebrow')}
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-[#061832] sm:text-4xl">
              {t('categoriesSection.heading')}
            </h2>
          </div>
          <a href="#faq-list" className="inline-flex items-center gap-2 text-sm font-bold text-[#0b3b6e] transition-all duration-300 hover:text-[#a97916]">
            {t('categoriesSection.viewAll')} <FiArrowDown size={16} />
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {faqCategories.map((category, index) => {
            const Icon = categoryIcons[index]
            return (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="group rounded-[22px] border border-[#dfe8f6] bg-white p-5 shadow-[0_18px_35px_rgba(11,59,110,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f5c54e]/60 hover:shadow-[0_22px_40px_rgba(11,59,110,0.08)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06234b] text-[#f5c54e] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#f5c54e] group-hover:text-[#06234b]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-sm font-bold text-[#061832] transition-colors duration-300 group-hover:text-[#a97916]">
                  {t(`categories.${category.id}.label`)}
                </h3>
                <p className="mt-1 text-xs leading-5 text-[#60748b]">{t(`categories.${category.id}.description`)}</p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQCategories
