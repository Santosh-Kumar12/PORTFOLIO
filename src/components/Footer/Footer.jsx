import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <hr style={{ marginBottom: '38px' }} />
      <div className="footer-links">
        <div className="footer-sub-links">
          <p className="normal-heading">Email</p>
          <a href="mailto:santoshpatrimath12@gmail.com">santoshkumar | Email</a>
        </div>
        <div className="footer-sub-links">
          <p className="normal-heading">GitHub</p>
          <a href="https://github.com/Santosh-Kumar12">Santoshkumar | GitHub</a>
        </div>
        <div className="footer-sub-links">
          <p className="normal-heading">LinkedIn</p>
          <a href="https://www.linkedin.com/in/santoshkumar-patrimath-2230aa200/">Santoshkumar | LinkedIN</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
