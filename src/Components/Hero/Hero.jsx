import React from 'react'
import './Hero.css'
import profile from '../../assets/profile2.JPG'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt=''/>
      <h1><span>I'm Yafit Avazov</span>, frontend developer based in Israel </h1>
      <p>I am a frontend developer with strong passion to design </p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'></AnchorLink>Connect With Me</div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero
