import React from 'react'
import './intro.css'
import profile from '../../assets/image.png'
import hireMe from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>
                I'm 
                <span className='introName'> Mohan</span> <br/>
                Full Stack Developer
            </span>
            <p className='introPara'>I am a skilled Full Stack developer with experience in creating <br /> user friendly websites</p>
            <a href="/MohanaPavan_Resume.pdf" download className="btn">
                <img src={hireMe} alt="Hire Me" className="btnImg" />
                Hire Me
            </a>
        </div>
        <img src={profile} alt='profile' className='profile'/>
    </section>
  )
}

export default Intro;