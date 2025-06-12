import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="nebula-footer">
      <div className="container footer-content">
        <span>&copy; {new Date().getFullYear()} Nebula. All rights reserved.</span>
        <nav className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
} 