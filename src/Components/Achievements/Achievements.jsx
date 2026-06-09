import React, { useEffect, useState } from 'react'
import './Achievements.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import winner from '../../assets/achievements/winner.png'
import innovation from '../../assets/achievements/innovation.png'
import help from '../../assets/achievements/help.png'
import teaching from '../../assets/achievements/teaching.png'
import reward from '../../assets/achievements/reward.jpg'
import chats from '../../assets/achievements/chats.PNG'
import wit from '../../assets/achievements/WIT.jpg'

const achievements = [
  {
    w_no: 1,
    w_name: 'CleanONO Hackathon',
    w_img: winner,
    techStack: 'Led the development of a smart-city mobile app to improve urban cleanliness reporting; won 1st place in a municipal tech competition. ',
    gallery: reward,
  },
  {
    w_no: 2,
    w_name: 'Product Management Program – WIT',
    w_img: innovation,
    techStack: 'Joined WIT’s PM program to develop practical skills in building user-driven digital products and collaborating across teams. ',
    gallery: wit,
  },
  {
    w_no: 3,
    w_name: "Mentor at 'Breaking the Glass Ceiling' Program",
    w_img: help,
    techStack: 'Volunteered as a mentor for high school girls, guiding them in math and tech to build confidence and break social barriers in STEM.',
    gallery: chats,
  },
  {
    w_no: 4,
    w_name: 'Private Tutor',
    w_img: teaching,
    techStack: 'Helped students with their studies by providing personalized guidance and explanations.',
  },
]

const Achievements = () => {
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    if (!activeImage) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveImage(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeImage])

  const openImage = (src, alt) => {
    setActiveImage({ src, alt })
  }

  return (
    <div id='achivments' className='myachivments'>
      <div className='myachivments-title'>
        <h1>Beyong Code</h1>
        <h2>MY Impact & Leadership</h2>
        <img src={theme_pattern} alt='' />
      </div>
      <div className='myachivments-container'>
        {achievements.map((item) => (
          <article className='achievement-card' key={item.w_no}>
            <div className='achievement-card-media'>
              <img src={item.w_img} alt={item.w_name} className='achievement-card-image' />
            </div>
            <div className='achievement-card-content'>
              <h3>{item.w_name}</h3>
              <p>{item.techStack}</p>
            </div>
            {item.gallery && (
              <button
                type='button'
                className='achievement-card-gallery'
                aria-label={`Open full gallery image for ${item.w_name}`}
                onClick={() => openImage(item.gallery, `${item.w_name} gallery`)}
              >
                <img src={item.gallery} alt='Gallery' />
                <span className='achievement-image-open'>
                  <svg viewBox='0 0 24 24' aria-hidden='true'>
                    <path d='M10.8 18.1a7.3 7.3 0 1 1 5.16-2.14l4.04 4.04-1.42 1.42-4.04-4.04a7.27 7.27 0 0 1-3.74.72Zm0-2a5.3 5.3 0 1 0 0-10.6 5.3 5.3 0 0 0 0 10.6Z' />
                    <path d='M9.8 7.9h2v2h2v2h-2v2h-2v-2h-2v-2h2v-2Z' />
                  </svg>
                </span>
              </button>
            )}
          </article>
        ))}
      </div>
      {activeImage && (
        <div
          className='achievement-lightbox'
          role='dialog'
          aria-modal='true'
          aria-label={activeImage.alt}
          onClick={() => setActiveImage(null)}
        >
          <div className='achievement-lightbox-content' onClick={(event) => event.stopPropagation()}>
            <button
              type='button'
              className='achievement-lightbox-close'
              aria-label='Close image preview'
              onClick={() => setActiveImage(null)}
            >
              <svg viewBox='0 0 24 24' aria-hidden='true'>
                <path d='m6.4 5 12.6 12.6-1.4 1.4L5 6.4 6.4 5Z' />
                <path d='M19 6.4 6.4 19 5 17.6 17.6 5 19 6.4Z' />
              </svg>
            </button>
            <img src={activeImage.src} alt={activeImage.alt} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Achievements
