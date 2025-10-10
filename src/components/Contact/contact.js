import { React, useRef } from 'react'
import './contact.css'
// import Microsoft from '../../assets/microsoft.png'
// import Tourslog from '../../assets/tourslogLogo.png'
// import Maltech from '../../assets/maltechLogo.png'
import HCLTech from '../../assets/HCLTech.jpg'
import KPIT from '../../assets/KPIT.jpg'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import GitHUbIcon from '../../assets/github-icon.png'
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
                <div className='clientImgWrapper'><img src={HCLTech} alt='Client' className='clientImg' /></div>
                <div className='clientImgWrapper'><img src={KPIT} alt='Client' className='clientImg tourslog' /></div>
                {/* <div className='clientImgWrapper'><img src={Maltech} alt='Client' className='clientImg' /></div> */}
            </div>
        </div>
        <div id='contact'>
          <h1 className='contactPageTitle'>Contact Me</h1>
          <span className='contactDesc'>
            Please fill out the form below to discuss  any work opportunities.
          </span>
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='from_name' required/>
            <input type='email' className='email' placeholder='Your Email' name='from_email' required/>
            <textarea className='msg' name='message' rows='5' placeholder='Your Message' required></textarea>
            <button type='submit' className='submitBtn' value='Send'>Submit</button>
            <div className='links'>
              <a href='https://www.facebook.com/share/quhnhP1p6eahu4QU/?mibextid=LQQJ4d' target='_blank' rel='noopener noreferrer'>
                <img src={FacebookIcon} alt='Facebook' className='link' />
              </a>
              <a href='https://x.com/mohan97295?s=11' target='_blank' rel='noopener noreferrer'>
                <img src={TwitterIcon} alt='Twitter' className='link' />
              </a>
              <a href='https://github.com/Mohanpavankumar' target='_blank' rel='noopener noreferrer'>
                <img src={GitHUbIcon} alt='YouTube' className='link' />
              </a>
              <a href='https://www.instagram.com/__mohanpavan__?igsh=bGpndHViNWMxMTlq&utm_source=qr' target='_blank' rel='noopener noreferrer'>
                <img src={InstagramIcon} alt='Instagram' className='link' />
              </a>
            </div>

          </form>
        </div>

    </section>
  )
}

export default Contact