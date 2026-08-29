import LandingHero from '../components/home/LandingHero'
import DirectionSection from '../components/home/DirectionSection'
import ProgramsSection from '../components/home/ProgramsSection'
import CommunitySection from '../components/home/CommunitySection'
import AboutUsCard from '../components/home/HomeAbout'
import HowItWorks from '../components/home/HowItWorks'
import ManagementTeam from '../components/home/ManagementTeam'

const Home = () => (
  <main className="overflow-hidden bg-white">
    <LandingHero />
    <AboutUsCard/>
    <ProgramsSection />
    <CommunitySection />
    <ManagementTeam />
    <HowItWorks/>
    <DirectionSection />
  </main>
)

export default Home
