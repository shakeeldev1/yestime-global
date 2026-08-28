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
      actions={(
        <Link to="/contact-us" className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[linear-gradient(135deg,#c5962e_0%,#f0c75e_100%)] px-[1.4rem] py-[0.85rem] text-base font-bold text-[#071a36] shadow-[0_10px_22px_rgba(197,150,46,0.24)] no-underline transition duration-300 ease-out hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5962e] focus-visible:ring-offset-2">
          Contact Us
          <FiArrowUpRight size={16} />
        </Link>
      )}
    />
  )
}

export default LegalContactCTA
