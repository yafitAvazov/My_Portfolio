import React from 'react'
import './MyProjects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import myprojects from '../../assets/myprojects_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
import Card from '../Card/Card';

const MyProject = () => {
  return (
    <div id='projects' className='myprojects'>
        <div className='myprojects-title'>
            <h1>My Pojects</h1>
            <img src={theme_pattern} alt=''/>            
        </div>
        <div className='myprojects-container'>
        {myprojects.map((item) => (
        <Card
          key={item.w_no}
          title={item.w_name}
          image={item.w_img}
          techStack={item.techStack}
          githubLink={item.githubLink}
          liveLink={item.liveLink}
        />
      ))}
        </div>
        <div className='myprojects-showmore' onClick={() => window.open('https://github.com/yafitAvazov', '_blank')}>
            <p>Show More</p>
            <img src={arrow_icon} alt='' />
        </div>

      
    </div>
  )
}

export default MyProject
