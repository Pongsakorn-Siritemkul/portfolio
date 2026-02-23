import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">Let's Connect</h2>
        
        <div className="footer-links">
          <a href="mailto:Equill777@gmail.com" className="footer-item">
            <FaEnvelope className="footer-icon" />
            <span>Equill777@gmail.com</span>
          </a>
          
          <a href="tel:+66996320462" className="footer-item">
            <FaPhoneAlt className="footer-icon" />
            <span>+66 99 632 0462</span>
          </a>
          
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="footer-item">
            <FaLinkedin className="footer-icon" />
            <span>LinkedIn Profile</span>
          </a>
        </div>

        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Pongsakorn Siritemkul. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;