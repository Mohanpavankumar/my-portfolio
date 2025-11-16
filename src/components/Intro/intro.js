import React, { useState, useEffect } from 'react';
import './intro.css';
import profile from '../../assets/ProfilePic.png';
import hireMe from '../../assets/hireme.png';

const Intro = () => {
  const fullText = "I'm Mohan\nJava Full Stack Developer";
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100); // typing speed
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>
          <pre className='typingTextContainer'>
            <span className='typingText'>{text}</span>
          </pre>
        </span>
        <p className='introPara'>I am a skilled Java Full Stack Developer with experience in creating <br /> user friendly websites</p>
        <a href="/MohanaPavanKumarVankayala_Resume.pdf" download className="btn">
          <img src={hireMe} alt="Hire Me" className="btnImg" />
          Hire Me
        </a>
      </div>
      <img src={profile} alt='profile' className='profile'/>
    </section>
  );
};

export default Intro;
