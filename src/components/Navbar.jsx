import React from 'react';
import Magnetic from './Magnetic';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Magnetic>
          <a href="/" className="nav-link">© Code by Mike</a>
        </Magnetic>
      </div>
      
      <nav className="navbar__links">
        <div className="nav-item">
          <Magnetic>
            <a href="#work" className="nav-link">Work</a>
          </Magnetic>
        </div>
        <div className="nav-item">
          <Magnetic>
            <a href="#about" className="nav-link">About</a>
          </Magnetic>
        </div>
        <div className="nav-item">
          <Magnetic>
            <a href="#contact" className="nav-link">Contact</a>
          </Magnetic>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
