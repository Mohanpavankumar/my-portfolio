import { React, useRef } from 'react'
import './contact.css'
import Microsoft from '../../assets/microsoft.png'
import Tourslog from '../../assets/tourslogLogo.png'
import Maltech from '../../assets/maltechLogo.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j3dl3ln', 'template_c5ppm8l', form.current, {
        publicKey: '6L7N7qDTGfnUACqpt',
      })
      .then((result) => {
        console.log(result.text);
        e.target.reset();
        alert('Email Sent !');
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='contactDesc'>
                I had a opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className='clientImgs'>
                <img src={Microsoft} alt='Client' className='clientImg'></img>
                <img src={Tourslog} alt='Client' className='clientImg'></img>
                <img src={Maltech} alt='Client' className='clientImg'></img>
            </div>
        </div>
        <div id='contact'>
          <h1 className='contactPageTitle'>Conatct Me</h1>
          <span className='contactDesc'>
            Please fill out the form below to discuss  any work opportunities.
          </span>
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='from_name' />
            <input type='email' className='email' placeholder='Your Email' name='from_email' />
            <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
            <button type='submit' className='submitBtn' value='Send'>Submit</button>
            <div className='links'>
              <img src={FacebookIcon} alt='Facebook' className='link' />
              <img src={TwitterIcon} alt='Twitter' className='link' />
              <img src={YoutubeIcon} alt='Youtube' className='link' />
              <img src={InstagramIcon} alt='Instagram' className='link' />
            </div>
          </form>
        </div>

    </section>
  )
}

export default Contact