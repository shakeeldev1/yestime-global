import { useEffect, useRef, useState } from 'react'
import { FiChevronDown, FiFilter } from 'react-icons/fi'
import { faqCategories, faqItems } from './faqData'

const filterOptions = [{ id: 'all', label: 'All questions' }, faqCategories[1], faqCategories[0], ...faqCategories.slice(2)]

const FAQAccordion = () => {
  const [openId, setOpenId] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [isFilterVisible, setIsFilterVisible] = useState(true)
  const filterTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (filterTimeout.current) clearTimeout(filterTimeout.current)
    }
  }, [])

  const handleFilterChange = (categoryId: string) => {
    if (categoryId === activeCategory) return
    if (filterTimeout.current) clearTimeout(filterTimeout.current)

    setIsFilterVisible(false)
    filterTimeout.current = setTimeout(() => {
      setActiveCategory(categoryId)
      setOpenId('')
      setIsFilterVisible(true)
      filterTimeout.current = null
    }, 160)
  }

  return (
    <section id="faq-list" className="bg-[#f7fafc] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 rounded-3xl border border-[#dbe5f2] bg-white p-4 shadow-[0_12px_30px_rgba(11,59,110,0.05)] sm:p-5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#a97916]"><FiFilter size={15} /> Filter questions</div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filter FAQ questions">
            {filterOptions.map((option) => {
              const isActive = activeCategory === option.id
              return <button key={option.id} type="button" role="tab" aria-selected={isActive} onClick={() => handleFilterChange(option.id)} className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b3b6e] focus-visible:ring-offset-2 ${isActive ? 'border-[#0b3b6e] bg-[#0b3b6e] text-white shadow-[0_8px_18px_rgba(11,59,110,0.16)]' : 'border-[#dbe5f2] bg-[#f8fafc] text-[#41566f] hover:border-[#d6b35a] hover:bg-[#fffaf0] hover:text-[#0b3b6e]'}`}>{option.label}</button>
            })}
          </div>
        </div>
        <div aria-busy={!isFilterVisible} className={`transition duration-200 ease-out ${isFilterVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-1 opacity-0'}`}>
          {faqCategories.filter((category) => activeCategory === 'all' || activeCategory === category.id).map((category) => {
          const categoryItems = faqItems.filter((item) => item.category === category.id)
          if (!categoryItems.length) return null

          return <div id={category.id} key={category.id} className="scroll-mt-28 [&+div]:mt-10">
            <div className="overflow-hidden rounded-3xl border border-[#dbe5f2] bg-white shadow-[0_12px_30px_rgba(11,59,110,0.05)]">
              {categoryItems.map((item, index) => {
                const isOpen = openId === item.id
                return <div key={item.id} className={index === 0 ? '' : 'border-t border-[#e5edf5]'}>
                  <button type="button" aria-expanded={isOpen} aria-controls={`${item.id}-answer`} onClick={() => setOpenId(isOpen ? '' : item.id)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition hover:bg-[#f8fafc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0b3b6e] sm:px-7">
                    <span className="text-sm font-medium leading-6 text-[#071a36] sm:text-base">{item.question}</span>
                    <FiChevronDown size={19} className={`shrink-0 text-[#0b3b6e] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#a97916]' : ''}`} />
                  </button>
                  <div id={`${item.id}-answer`} role="region" aria-hidden={!isOpen} className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="min-h-0 overflow-hidden">
                      <div className="px-5 pb-6 sm:px-7">
                        <p className="max-w-3xl text-sm leading-7 text-[#41566f]">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQAccordion
