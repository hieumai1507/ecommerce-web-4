import React from 'react'
import "./hero.css"
import Sidenav from '../../Components/SideNav/Sidenav'
import Herocontent from '../../Components/hero-content/Herocontent'
import Herocontentcard from '../../Components/Hero-content-card/Herocontentcard'
import Trustbanner from '../../Components/Trustbanner/Trustbanner'

const Hero = () => {
  return (
    <div className='hero-section-bg'>
    <div className='hero-section'>
      <div className='hero-sidenav'><Sidenav /></div>
      <div className='hero-right-section'>
        <Herocontent />
        <Herocontentcard />
      </div>
    </div>
    <div>
      <Trustbanner />
    </div>
    </div>
  )
}

export default Hero
