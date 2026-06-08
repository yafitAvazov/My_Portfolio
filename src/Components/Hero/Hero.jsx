import React from 'react'
import './Hero.css'
import profile from '../../assets/profile_img.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}Yafit_Abaev_CV.pdf`

  return (
    <div id='home' className='hero'>
      <img src={profile} alt=''/>
      <h1><span>I'm Yafit Abaev</span>, Design Engineer and Digital Solutions Builder</h1>
      <p>
        I combine product thinking, UX/UI sensitivity, frontend development, and technical implementation
        to create polished, user-focused digital experiences.
      </p>
      <div className='hero-action'>
        <AnchorLink className='hero-connect anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        <a
          className='hero-resume'
          href={resumeUrl}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Open Yafit Abaev resume PDF in a new tab'
        >
          My resume
        </a>
      </div>
    </div>
  )
}

export default Hero
