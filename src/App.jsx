import { useState, useEffect } from 'react'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandStory from './components/BrandStory'
import Menu from './components/Menu'
import BeanSelection from './components/BeanSelection'
import SocialProof from './components/SocialProof'
import BoutiqueExperience from './components/BoutiqueExperience'
import VisitCTA from './components/VisitCTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <BrandStory />
        <Menu />
        <BeanSelection />
        <SocialProof />
        <BoutiqueExperience />
        <VisitCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
