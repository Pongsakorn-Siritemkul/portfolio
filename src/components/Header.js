import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        
        <div className="header-left">
          <h1 className="header-title">MY&nbsp;PORTFOLIO</h1>
        </div>
        
        <nav className="header-nav">
          
          {/* Replace <a> with <HashLink smooth> */}
          <HashLink smooth to="/#home" className="nav-link">
            <span className="header-nav">HOME</span>
          </HashLink>
          
          <HashLink smooth to="/#about" className="nav-link">
            <span className="header-nav">ABOUT ME</span>
          </HashLink>
          
          <HashLink smooth to="/#skills" className="nav-link">
            <span className="header-nav">SKILLS</span>
          </HashLink>
          
          <HashLink smooth to="/#education" className="nav-link">
            <span className="header-nav">EDUCATION</span>
          </HashLink>
          
          <HashLink smooth to="/#experience" className="nav-link">
            <span className="header-nav">EXPERIENCE</span>
          </HashLink>

          {/* NavLink is still perfect for the separate projects page */}
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <span className="header-nav">MORES</span>
          </NavLink>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;