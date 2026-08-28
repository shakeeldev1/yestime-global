import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import HomeCTA from '../home/HomeCTA'

const FAQSupportCTA = () => {
  return (
    <HomeCTA
      className="bg-slate-100/70"
      badge="Need More Help?"
      title="Find Your Next"
      highlight="Step."
      description="If your question is not answered here, contact YES TIME GLOBAL and our team can guide you toward the right program or next step."
      actions={(
        <Link
          to="/contact-us"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f5c54e] to-[#d99420] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-[#07182d] shadow-lg shadow-amber-500/20 no-underline transition-all hover:-translate-y-0.5 hover:shadow-amber-500/30 focus-visible:outline-2 focus-visible:outline-amber-400"
        >
          Contact Us
          <FiArrowUpRight size={16} />
        </Link>
      )}
    />
  )
}

export default FAQSupportCTA
