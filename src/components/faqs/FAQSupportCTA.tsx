import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import HomeCTA from '../home/HomeCTA'

const FAQSupportCTA = () => {
  return (
    <HomeCTA
      badge="Need More Help?"
      title="Find Your Next"
      highlight="Step."
      description="If your question is not answered here, contact YES TIME GLOBAL and our team can guide you toward the right program or next step."
      actions={(
        <Link
          to="/contact-us"
          className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[linear-gradient(135deg,#c5962e_0%,#f0c75e_100%)] px-[1.4rem] py-[0.85rem] text-base font-bold text-[#071a36] shadow-[0_10px_22px_rgba(197,150,46,0.24)] no-underline transition duration-300 ease-out hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5962e] focus-visible:ring-offset-2"
        >
          Contact Us
          <FiArrowUpRight size={16} />
        </Link>
      )}
    />
  )
}

export default FAQSupportCTA
