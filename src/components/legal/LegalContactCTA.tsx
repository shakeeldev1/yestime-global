import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import HomeCTA from '../home/HomeCTA'

type LegalContactCTAProps = {
  title?: string
  highlight?: string
  description?: string
}

const LegalContactCTA = ({ title = 'Have a question about', highlight = 'these policies?', description = 'Contact YES TIME GLOBAL for approved policy information or program-specific clarification.' }: LegalContactCTAProps) => {
  return (
    <HomeCTA
      badge="Need clarification?"
      title={title}
      highlight={highlight}
      description={description}
      panelClassName="border-[#d6b35a]/50 bg-[linear-gradient(145deg,#fffdf5_0%,#f4f1e8_100%)] shadow-[0_18px_45px_-18px_rgba(111,83,16,0.2)]"
      actions={(
        <Link to="/contact-us" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f5c54e] to-[#d99420] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-[#07182d] shadow-lg shadow-amber-500/20 no-underline transition-all hover:-translate-y-0.5 hover:shadow-amber-500/30 focus-visible:outline-2 focus-visible:outline-amber-400">
          Contact Us
          <FiArrowUpRight size={16} />
        </Link>
      )}
    />
  )
}

export default LegalContactCTA
