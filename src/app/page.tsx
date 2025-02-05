import React from 'react'
import HeroSection from './components/Hero'
import AboutPage from './components/About'
import ProjectsPage from './projects/page'
import SkillsPage from './skills/page'
import ContactPage from './contact/page'




const page = () => {
  return (
   <div>
      <HeroSection/>
      <AboutPage/>
      <SkillsPage/>
      <ProjectsPage/>
      <ContactPage/>
     
   
    </div>
   
  )
}

export default page
