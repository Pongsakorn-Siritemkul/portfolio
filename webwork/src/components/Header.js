import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <NavLink to="/" className="modern-logo">Portfolio</NavLink>
        </div>

        <nav className="header-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <span className="material-icon">HOME</span>
          </NavLink>

          <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <span className="material-icon">PROJECT</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;