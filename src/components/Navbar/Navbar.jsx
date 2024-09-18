import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
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
          <NavLink to="/">Santoshkumar</NavLink> {/* Use NavLink */}
        </div>
      </div>
      <div className="right">
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/resume" activeClassName="active">Resume</NavLink> {/* Use NavLink */}
          <NavLink to="/project" activeClassName="active">Work</NavLink> {/* Use NavLink */}
          <NavLink to="/contact" activeClassName="active">Contact</NavLink> {/* Use NavLink */}
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
