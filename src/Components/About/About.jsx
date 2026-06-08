import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile_img.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
      <h1>About Me</h1>
      <img src={theme_pattern} alt=''/>
    </div>
    <div className='about-sections'>
        <div className='about-left'>
            <img src={profile} alt=''/>
        </div>
        <div className='about-right'>
            <div className='about-para'>
            <p>
              I build digital experiences at the intersection of design, product, and technology. My work connects
              business needs, user journeys, content structure, frontend logic, and polished implementation into
              practical solutions that feel clear, useful, and visually refined.
            </p>
            <p>
              As a Tech Designer / Design Engineer at Wix Marketing, I planned and built responsive web experiences
              using Wix Studio, CMS-based structures, reusable web flows, and frontend-oriented thinking. I translated
              creative, product, and marketing briefs into digital experiences, collaborating with designers, developers,
              product stakeholders, and marketing teams from planning through QA, refinement, and launch.
            </p>
            <p>
              I hold a B.Sc. in Computer Science from HIT and completed a Product Management program through Women in Tech
              at HIT. My background includes AI and computer vision projects, Android development, client-server applications,
              UX/UI-oriented frontend work, QA, accessibility awareness, SEO awareness, and social-impact mentoring in STEM.
            </p>
            </div>
            <div className='about-skills'>
                <div className='about-skill'><p>Design Engineering</p><hr style={{width:"85%"}}/></div>
                <div className='about-skill'><p>Product Thinking</p><hr style={{width:"80%"}}/></div>
                <div className='about-skill'><p>Frontend Development</p><hr style={{width:"75%"}}/></div>
                <div className='about-skill'><p>CMS & Web Solutions</p><hr style={{width:"70%"}}/></div>
            </div>
        </div>
        </div>
            <div className='about-achievements'>
                <div className='about-achievement'>
                    <h1>Self-Taught Web Development</h1>
                    <p>Dedicated hundreds of hours to learning front-end technologies through online courses, personal projects, and continuous experimentation.</p>
                </div>
                <div className='about-achievement'>
                    <h1>UX-Focused Design</h1>
                    <p>Designed and implemented user-centric applications, emphasizing clean layout, accessibility, and responsive design across devices.</p>
                </div>
                <div className='about-achievement'>
                    <h1>Creative Eye for Design</h1>
                    <p>Passionate about visual design and layout — I love crafting interfaces that not only function well, but also look and feel great to use.</p>
                </div>
            </div>
        </div>
   

  )
}

export default About
