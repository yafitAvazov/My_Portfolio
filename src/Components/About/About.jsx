import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile3.JPG'

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
              I’m a passionate and creative front-end developer with a strong foundation in both design and software engineering.
              My journey into tech started during my military service as a network manager, where I developed strong problem-solving
              skills and a deep understanding of system architecture.
            </p>
            <p>
              Since then, I’ve led and contributed to various projects—from an AI-powered sign language learning platform to a smart
              Android recommendation app—each one emphasizing intuitive UI/UX and clean, efficient code. With experience in React,
              HTML, CSS, JavaScript, and backend technologies, I thrive at the intersection of visual design and functional development.
              I’m always excited to turn ideas into interactive digital experiences.
            </p>
            </div>
            <div className='about-skills'>
                <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className='about-skill'><p>React Js</p><hr style={{width:"70%"}}/></div>
                <div className='about-skill'><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                <div className='about-skill'><p>Next Js</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
        </div>
            {/* <div className='about-achievements'>
                <div className='about-achievement'>
                    <h1>Self-Taught Web Development</h1>
                    <p>Dedicated hundreds of hours to learning front-end technologies through online courses, personal projects, and continuous experimentation.</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>UX-Focused Design</h1>
                    <p>Designed and implemented user-centric applications, emphasizing clean layout, accessibility, and responsive design across devices.</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>Creative Eye for Design</h1>
                    <p>Passionate about visual design and layout — I love crafting interfaces that not only function well, but also look and feel great to use.</p>
                </div>
            </div> */}
        </div>
   

  )
}

export default About
