import InvestorsHero from '../components/investors/InvestorsHero'
import InvestorHighlights from '../components/investors/InvestorHighlights'
import PartnershipProcess from '../components/investors/PartnershipProcess'
import InvestorsCTA from '../components/investors/InvestorsCTA'

const Investors = () => {
  return (
    <main className="bg-white text-[#000000]">
      <InvestorsHero />
      <InvestorHighlights />
      <PartnershipProcess />
      <InvestorsCTA />
    </main>
  )
}

export default Investors