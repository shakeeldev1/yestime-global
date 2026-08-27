import { ArrowRight, Handshake, LineChart, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import ActionPanel from '../components/common/ActionPanel'
import InfoCard from '../components/common/InfoCard'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'

const Investors = () => {
  return (
    <main className="bg-[#f7f4ee] text-[#10233f]">
      <PageHero eyebrow="Investors & Strategic Partners" title="Build lasting value with Yes Time Global." description="We welcome investors and established businesses who share our vision for accessible, responsible growth across global markets.">
        <Link to="/ContactUs" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#c5a06a] px-6 py-3 font-semibold text-[#10233f] transition hover:bg-[#e0c38b]">Start a conversation <ArrowRight size={18} /></Link>
      </PageHero>
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12 lg:px-20"><SectionHeading eyebrow="Why partner with us" title="A relationship built for the long term." description="Our strongest partnerships begin with shared values, clear expectations, and a practical view of the opportunity ahead." /><div className="grid gap-6 md:grid-cols-3"><InfoCard icon={LineChart} title="Shared growth" description="Partner with a business focused on sustainable expansion and meaningful economic participation." /><InfoCard icon={Handshake} title="Strategic collaboration" description="Bring your network, expertise, or market access to opportunities built for mutual success." /><InfoCard icon={ShieldCheck} title="Trust and clarity" description="Explore a transparent relationship with clear communication and long-term accountability." /></div><div className="mt-14 grid gap-6 border-t border-[#10233f]/10 pt-12 md:grid-cols-3"><div><p className="text-3xl font-semibold text-[#b38b4d]">01</p><h3 className="mt-3 text-lg font-semibold">Connect</h3><p className="mt-2 leading-7 text-slate-600">Share your goals and the strengths you bring to a partnership.</p></div><div><p className="text-3xl font-semibold text-[#b38b4d]">02</p><h3 className="mt-3 text-lg font-semibold">Explore</h3><p className="mt-2 leading-7 text-slate-600">Together, we identify a practical opportunity for collaboration.</p></div><div><p className="text-3xl font-semibold text-[#b38b4d]">03</p><h3 className="mt-3 text-lg font-semibold">Grow</h3><p className="mt-2 leading-7 text-slate-600">Build a clear relationship designed to create lasting value.</p></div></div></section>
      <ActionPanel title="Ready to explore a partnership?" description="Tell us what you are building and where you see an opportunity to work together."><Link to="/ContactUs" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#c5a06a] px-6 py-3 font-semibold text-[#10233f] transition hover:bg-[#e0c38b]">Contact our team <ArrowRight size={18} /></Link></ActionPanel>
    </main>
  )
}

export default Investors