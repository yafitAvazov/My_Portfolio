import React from 'react'
import './Hero.css'
import profile from '../../assets/profile_img.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt=''/>
      <h1><span>I'm Yafit Abaev</span>, Design Engineer and Digital Solutions Builder</h1>
      <p>
        I combine product thinking, UX/UI sensitivity, frontend development, and technical implementation
        to create polished, user-focused digital experiences.
      </p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'></AnchorLink>Connect With Me</div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero
