import React from 'react'
import './skills.css'
import { skillsData } from './skillsData';


const Skills = () => {
  return (
    <section id='skills'>
        <h1 className='skills-heading'>Tools & Technologies</h1>
        <div className='skills-container'>
        {skillsData.map((skill, index) => (
          <div key={index} className='skill-card'>
            <img src={skill.image} alt={skill.title} className='skill-icon' />
            <h3 className='skill-title'>{skill.title}</h3>
            <p className='skill-des'>{skill.des}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills;