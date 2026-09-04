import BanksFinancialHero from '../components/banksfinancial/BanksFinancialHero'
import BanksFinancialHighlights from '../components/banksfinancial/BanksFinancialHighlights'
import BanksFinancialProcess from '../components/banksfinancial/BanksFinancialProcess'
import BanksFinancialCTA from '../components/banksfinancial/BanksFinancialCTA'

const BanksFinancial = () => {
  return (
    <main className="bg-white text-[#000000]">
      <BanksFinancialHero />
      <BanksFinancialHighlights />
      <BanksFinancialProcess />
      <BanksFinancialCTA />
    </main>
  )
}

export default BanksFinancial