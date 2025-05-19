import React from 'react'
import './intro.css'
import profile from '../../assets/image.png'
import hireMe from '../../assets/hireme.png'
import { Link } from 'react-scroll'

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
            <Link>
                <button className='btn'>
                    <img src={hireMe} alt='' className='btnImg' />
                    Hire Me
                </button>
            </Link>
        </div>
        <img src={profile} alt='profile' className='profile'/>
    </section>
  )
}

export default Intro;