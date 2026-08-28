import React from 'react'
import AboutHero from '../components/about/AboutHero'
import AboutSection from '../components/about/AboutSection'
import MissionSection from '../components/about/MissionSection'
import ProgramsSection from '../components/about/ProgramsSection'
import CommitmentSection from '../components/about/CommitmentSection'
import Vs from '../components/about/Vs'
import CS from '../components/about/CS'

import MessageSection from '../components/about/MessageSection'




const AboutUs = () => {
  return (
    <div>
      <AboutHero/>
      <AboutSection/>
      <MissionSection/>
     <ProgramsSection/>
      <CommitmentSection/>
      <Vs/>
      <CS/>
     <MessageSection/>
    
    </div>
  )
}

export default AboutUs

