import { ArrowRight, Building2, FileCheck2, Globe2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import ActionPanel from '../components/common/ActionPanel'
import InfoCard from '../components/common/InfoCard'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'

const BanksFinancial = () => {
  return (
    <main className="bg-white text-[#071a36]">
      <div className="bg-[#f7fafc]"><PageHero eyebrow="Banks & Financial Institutions" title="A dependable partner for financial inclusion." description="Let's build practical business partnerships that connect trusted financial services with people and communities ready to move forward."><Link to="/ContactUs" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#c5962e] px-6 py-3 font-semibold text-[#071a36] transition hover:bg-[#f0c75e]">Discuss partnership <ArrowRight size={18} /></Link></PageHero>
        <div className="mx-auto max-w-6xl px-6 pb-16 md:px-12 lg:px-20"><div className="border-l-8 border-[#c5962e] bg-[#071a36] p-8 text-white md:p-10"><Building2 size={38} className="text-[#f0c75e]" /><p className="mt-8 max-w-2xl text-2xl font-medium leading-relaxed">&quot;Stronger institutions create stronger opportunities.&quot;</p><div className="mt-10 h-px bg-white/20" /><p className="mt-4 text-sm text-[#dbe5f2]">Business partnership opportunities</p></div></div>
      </div>
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12 lg:px-20"><SectionHeading eyebrow="Business partnership" title="Where we can work together" description="Create a stronger customer experience by pairing financial expertise with programs built around real needs." /><div className="grid gap-6 md:grid-cols-2"><InfoCard icon={Globe2} title="Market access" description="Create pathways for customers and members to participate confidently in a wider economy." accent="left" /><InfoCard icon={FileCheck2} title="Responsible programs" description="Combine operational discipline with programs designed around real customer needs." accent="left" /></div><div className="mt-12 grid gap-4 md:grid-cols-3"><div className="border-t border-[#c5962e] pt-5"><p className="font-semibold">Aligned goals</p><p className="mt-2 text-sm leading-6 text-[#41566f]">Define outcomes that matter to every stakeholder.</p></div><div className="border-t border-[#c5962e] pt-5"><p className="font-semibold">Clear process</p><p className="mt-2 text-sm leading-6 text-[#41566f]">Move from first discussion to action with confidence.</p></div><div className="border-t border-[#c5962e] pt-5"><p className="font-semibold">Long-term value</p><p className="mt-2 text-sm leading-6 text-[#41566f]">Build a partnership that can grow with its community.</p></div></div></section>
      <ActionPanel title="Let us build something useful together." description="Our team is ready to understand your institution and discuss a partnership that fits."><Link to="/ContactUs" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#c5962e] px-6 py-3 font-semibold text-[#071a36] transition hover:bg-[#f0c75e]">Start the discussion <ArrowRight size={18} /></Link></ActionPanel>
    </main>
  )
}

export default BanksFinancial