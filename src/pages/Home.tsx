import LandingHero from '../components/home/LandingHero'
import CompanyOverview from '../components/home/CompanyOverview'
// import DirectionSection from '../components/home/DirectionSection'
import ProgramsSection from '../components/home/ProgramsSection'
import CommunitySection from '../components/home/CommunitySection'
import AboutUsCard from '../components/home/HomeAbout'

const Home = () => (
  <main className="overflow-hidden bg-white">
    <LandingHero />
    <AboutUsCard/>
    <ProgramsSection />
    <CommunitySection />
    <CompanyOverview />
    {/* <DirectionSection /> */}
  </main>
)

export default Home
