import { FiArrowDown, FiBookOpen, FiCheckCircle, FiCreditCard, FiHelpCircle } from 'react-icons/fi'
import { faqCategories } from './faqData'

const categoryIcons = [FiBookOpen, FiCreditCard, FiCheckCircle, FiHelpCircle, FiBookOpen]

const FAQCategories = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-100/70 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex rounded-full border border-amber-300/50 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-700">Browse by topic</span>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#061832] sm:text-4xl">Find the information you need.</h2>
          </div>
          <a href="#faq-list" className="inline-flex items-center gap-2 text-sm font-bold text-[#0b3b6e] transition hover:text-[#a97916]">View all answers <FiArrowDown size={16} /></a>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {faqCategories.map((category, index) => {
            const Icon = categoryIcons[index]
            return <a key={category.id} href={`#${category.id}`} className="group rounded-xl border border-slate-200/90 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:shadow-slate-900/10">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#06234b] text-amber-400 transition-colors group-hover:bg-amber-400 group-hover:text-[#06234b]"><Icon size={20} /></div>
              <h3 className="mt-4 text-sm font-bold text-[#061832] transition-colors group-hover:text-amber-600">{category.label}</h3>
              <p className="mt-1 text-xs leading-5 text-[#60748b]">{category.description}</p>
            </a>
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQCategories
