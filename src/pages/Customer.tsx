import { ArrowRight, CreditCard, Headphones, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import ActionPanel from '../components/common/ActionPanel'
import InfoCard from '../components/common/InfoCard'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'

const Customer = () => {
  return (
    <main className="bg-[#f7f4ee] text-[#10233f]">
      <PageHero eyebrow="Customer / Member Information" title="Everything you need, in one clear place." description="Find straightforward guidance about programs, payments, membership, and the support available to you."><Link to="/ContactUs" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#c5a06a] px-6 py-3 font-semibold text-[#10233f] transition hover:bg-[#e0c38b]">Contact support <ArrowRight size={18} /></Link></PageHero>
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12 lg:px-20"><SectionHeading eyebrow="Member support" title="Simple answers for everyday needs." description="Use these quick guides to find the information that matters most to you." /><div className="grid gap-6 md:grid-cols-3"><InfoCard icon={CreditCard} title="Programs & payments" description="Understand available programs, payment steps, and the information you need before getting started." /><InfoCard icon={UserRound} title="Member guidance" description="Keep your member details up to date and learn how your account and benefits work." /><InfoCard icon={Headphones} title="Need assistance?" description="Our team is here to help with questions and provide the right next step." /></div><div className="mt-14 grid gap-6 md:grid-cols-2"><div className="border border-[#10233f]/10 bg-white p-7"><p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#9b763c]">Before you contact us</p><h3 className="mt-3 text-xl font-semibold">Keep your member details close.</h3><p className="mt-3 leading-7 text-slate-600">Having your membership information ready helps us respond faster and direct your question to the right team.</p></div><div className="border border-[#10233f]/10 bg-white p-7"><p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#9b763c]">Need an answer now?</p><h3 className="mt-3 text-xl font-semibold">Browse common questions.</h3><p className="mt-3 leading-7 text-slate-600">Visit our FAQ section for quick answers to general questions about programs and membership.</p></div></div></section>
      <ActionPanel title="Still have a question?" description="Reach out and our team will guide you to the right next step."><Link to="/ContactUs" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#c5a06a] px-6 py-3 font-semibold text-[#10233f] transition hover:bg-[#e0c38b]">Contact support <ArrowRight size={18} /></Link></ActionPanel>
    </main>
  )
}

export default Customer
