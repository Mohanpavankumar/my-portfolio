import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import menuIcon from '../../assets/menu.png'; // Add a hamburger icon to your assets
import closeIcon from '../../assets/close.png'; // Optional: close icon
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo' />

      {/* Desktop Menu */}
      <div className='desktopMenu'>
        <Link className='desktopMenuListItem' activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
        <Link className='desktopMenuListItem' activeClass='active' to="about" spy={true} smooth={true} offset={-50} duration={500}>About</Link>
        <Link className='desktopMenuListItem' activeClass='active' to="works" spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link>
        <Link className='desktopMenuListItem' activeClass='active' to="clients" spy={true} smooth={true} offset={-100} duration={500}>Clients</Link>
      </div>

      {/* Desktop Button */}
      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById("contact").scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactImg} alt='' className='desktopMenuImg' activeClass='active' to="contact" spy={true} smooth={true} offset={-100} duration={500} />
        Contact Me
      </button>

      {/* Mobile Hamburger */}
      <img
        src={isMobileMenuOpen ? closeIcon : menuIcon}
        alt="menu"
        className="mobMenu"
        onClick={toggleMenu}
      />

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="navMenu">
          <Link className='desktopMenuListItem' activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link>
          <Link className='desktopMenuListItem' activeClass='active' to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
          <Link className='desktopMenuListItem' activeClass='active' to="works" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Portfolio</Link>
          <Link className='desktopMenuListItem' activeClass='active' to="clients" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Clients</Link>
          <Link className='desktopMenuListItem' activeClass='active' to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
