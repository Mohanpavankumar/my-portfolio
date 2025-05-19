import React from 'react'
import './works.css'
import { worksData } from './worksData'

const Works = () => {
  return (
    <section id='works'>
        <h1 className='works-heading'>My Portfolio</h1>
        <div className='works-container'>
        {worksData.map((work, index) => (
          <div key={index} className='work-card'>
            <img src={work.image} alt={work.title} className='work-image' />
            <h3 className='work-title'>{work.title}</h3>
            <p className='work-des'>{work.des}</p>
            {work.demolink && (
              <a
                href={work.demolink}
                target='_blank'
                rel='noopener noreferrer'
                className='demo-button'
              >
                View Demo
              </a>
            )}
          </div>
        ))}
        </div>
    </section>
  )
}

export default Works;