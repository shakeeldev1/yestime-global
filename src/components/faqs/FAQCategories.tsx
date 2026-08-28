import { FiArrowDown, FiBookOpen, FiCheckCircle, FiCreditCard, FiHelpCircle } from 'react-icons/fi'
import { faqCategories } from './faqData'

const categoryIcons = [FiBookOpen, FiCreditCard, FiCheckCircle, FiHelpCircle, FiBookOpen]

const FAQCategories = () => {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#a97916]">Browse by topic</span>
            <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.8rem)] font-normal leading-tight tracking-[-0.03em] text-[#071a36]">Find the information you need.</h2>
          </div>
          <a href="#faq-list" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b3b6e] transition hover:text-[#a97916]">View all answers <FiArrowDown size={16} /></a>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {faqCategories.map((category, index) => {
            const Icon = categoryIcons[index]
            return <a key={category.id} href={`#${category.id}`} className="group rounded-2xl border border-[#dbe5f2] bg-[#f8fafc] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#d6b35a] hover:bg-white hover:shadow-[0_14px_28px_rgba(11,59,110,0.08)]">
              <Icon className="text-[#0b3b6e] transition-colors group-hover:text-[#a97916]" size={20} />
              <h3 className="mt-4 text-sm font-semibold text-[#071a36]">{category.label}</h3>
              <p className="mt-1 text-xs leading-5 text-[#60748b]">{category.description}</p>
            </a>
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQCategories
