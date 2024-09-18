import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="left">
        <div className={`logo ${isOpen ? 'hide' : ''}`}>
          <a href="/">Santoshkumar</a>
        </div>
      </div>
      <div className="right">
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="/resume">Resume</a>
          <a href="/project">Work</a>
          <a href="/contact">Contact</a>
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
