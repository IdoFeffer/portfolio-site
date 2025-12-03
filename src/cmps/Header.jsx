import React from 'react';

const Header = () => {
  return (
    <header className="navbar-bar">
      <div className="navbar-container">
        <a href="#intro" className="logo">
          Portfolio
        </a>
        <nav className="nav-links">
          <a href="#about-me">About</a>
          <a href="#my-projects">Projects</a>
          <a href="#contact-me">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;