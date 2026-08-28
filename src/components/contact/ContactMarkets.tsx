import { FiMapPin } from 'react-icons/fi'
import HomeCTA from '../home/HomeCTA'
import { globalMarkets } from './contactData'

const ContactMarkets = () => {
  return (
    <HomeCTA
      badge="Global Reach"
      title="Connect with"
      highlight="opportunities worldwide."
      description="Our direction connects people, programs, and partnerships across Pakistan, Nepal, and Indonesia."
      actions={(
        <div className="grid w-full gap-3">
          {globalMarkets.map((market) => (
            <div key={market} className="flex items-center gap-3 rounded-2xl border border-[#d6b35a] bg-[#eff6ff] px-4 py-3 text-[#071a36] transition duration-300 hover:bg-[#fff8e1]">
              <FiMapPin className="shrink-0 text-[#a97916]" size={17} />
              <span className="text-sm font-semibold">{market}</span>
            </div>
          ))}
        </div>
      )}
    />
  )
}

export default ContactMarkets
