import { FiMapPin } from 'react-icons/fi'
import HomeCTA from '../home/HomeCTA'
import { globalMarkets } from './contactData'

const ContactMarkets = () => {
  return (
    <HomeCTA
      className="bg-slate-100/70"
      badge="Global Reach"
      title="Connect with"
      highlight="opportunities worldwide."
      description="Our direction connects people, programs, and partnerships across Pakistan, Nepal, and Indonesia."
      actions={(
        <div className="grid w-full gap-3">
          {globalMarkets.map((market) => (
            <div key={market} className="group flex items-center gap-3 rounded-xl border border-[#0b3b6e]/20 bg-[#0b3b6e] px-4 py-3 text-white shadow-[0_8px_18px_rgba(11,59,110,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-[#d99420] hover:bg-[#06234b]">
              <FiMapPin className="shrink-0 text-[#f5c54e] transition-transform duration-300 group-hover:scale-110" size={17} />
              <span className="text-sm font-semibold">{market}</span>
            </div>
          ))}
        </div>
      )}
    />
  )
}

export default ContactMarkets
