import AboutHero from '../components/about/AboutHero'
import AboutSection from '../components/about/AboutSection'
import MissionSection from '../components/about/MissionSection'
import PrioritiesSection from '../components/about/PrioritiesSection'
import CommitmentSection from '../components/about/CommitmentSection'
import MessageSection from '../components/about/MessageSection'
import GlobalBannerSection from '../components/about/GlobalBannerSection'


const AboutUs = () => {
  return (
    <div>
      <AboutHero/>
      <AboutSection/>
      <MissionSection/>
     <PrioritiesSection/>
     <CommitmentSection/>
     <MessageSection/>
     <GlobalBannerSection/>
    </div>
  )
}

export default AboutUs

