import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1 className='heading'>Brisphere</h1>
    <div className="nav-links">
      <a href="/">Discover</a>
      <a href="/services">Services</a>
      <a href="/about">About Us</a>
    </div>
  </nav>
);

export default Navbar;
