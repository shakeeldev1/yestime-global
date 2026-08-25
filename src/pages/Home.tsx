import HomeAbout from '../components/home/HomeAbout'
import HomeCTA from '../components/home/HomeCTA'
import HomeCommitment from '../components/home/HomeCommitment'
import HomeHero from '../components/home/HomeHero'
import HomePrograms from '../components/home/HomePrograms'
import HomeVisionMission from '../components/home/HomeVisionMission'

const Home = () => {
  return (
    <main className="font-sans antialiased">
      <HomeHero />
      <HomeAbout />
      <HomeVisionMission />
      <HomePrograms />
      <HomeCommitment />
      <HomeCTA />
    </main>
  )
}

export default Home
