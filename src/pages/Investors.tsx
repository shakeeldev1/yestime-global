import { ArrowRight, Handshake, LineChart, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import ActionPanel from '../components/common/ActionPanel'
import InfoCard from '../components/common/InfoCard'
import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'

const Investors = () => {
  return (
    <main className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)] text-[#071a36]">
      <PageHero eyebrow="Investors & Strategic Partners" title="Build lasting value with Yes Time Global." description="We welcome investors and established businesses who share our vision for accessible, responsible growth across global markets.">
        <Link to="/ContactUs" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#c5962e] px-6 py-3 font-semibold text-[#071a36] transition hover:bg-[#f0c75e]">Start a conversation <ArrowRight size={18} /></Link>
      </PageHero>
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-12 lg:px-20"><SectionHeading eyebrow="Why partner with us" title="A relationship built for the long term." description="Our strongest partnerships begin with shared values, clear expectations, and a practical view of the opportunity ahead." /><div className="grid gap-6 md:grid-cols-3"><InfoCard icon={LineChart} title="Shared growth" description="Partner with a business focused on sustainable expansion and meaningful economic participation." /><InfoCard icon={Handshake} title="Strategic collaboration" description="Bring your network, expertise, or market access to opportunities built for mutual success." /><InfoCard icon={ShieldCheck} title="Trust and clarity" description="Explore a transparent relationship with clear communication and long-term accountability." /></div><div className="mt-14 grid gap-6 border-t border-[#0b3b6e]/10 pt-12 md:grid-cols-3"><div><p className="text-3xl font-semibold text-[#c5962e]">01</p><h3 className="mt-3 text-lg font-semibold">Connect</h3><p className="mt-2 leading-7 text-[#41566f]">Share your goals and the strengths you bring to a partnership.</p></div><div><p className="text-3xl font-semibold text-[#c5962e]">02</p><h3 className="mt-3 text-lg font-semibold">Explore</h3><p className="mt-2 leading-7 text-[#41566f]">Together, we identify a practical opportunity for collaboration.</p></div><div><p className="text-3xl font-semibold text-[#c5962e]">03</p><h3 className="mt-3 text-lg font-semibold">Grow</h3><p className="mt-2 leading-7 text-[#41566f]">Build a clear relationship designed to create lasting value.</p></div></div></section>
      <ActionPanel title="Ready to explore a partnership?" description="Tell us what you are building and where you see an opportunity to work together."><Link to="/ContactUs" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#c5962e] px-6 py-3 font-semibold text-[#071a36] transition hover:bg-[#f0c75e]">Contact our team <ArrowRight size={18} /></Link></ActionPanel>
    </main>
  )
}

export default Investors