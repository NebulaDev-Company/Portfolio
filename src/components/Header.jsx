import React from 'react';
import './Header.css';

const navLinks = [
  { label: 'Home', to: '#hero' },
  { label: 'About', to: '#about' },
  { label: 'Services', to: '#services' },
  { label: 'Portfolio', to: '#portfolio' },
  { label: 'Contact', to: '#contact' },
];

export default function Header() {
  return (
    <header className="nebula-header">
      <div className="container header-content">
        <a href="#hero" className="logo-wrap">
          {/* Placeholder Nebula Logo SVG */}
          <svg width="38" height="38" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="nebula-gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6B4BBE"/>
              <stop offset="1" stopColor="#1D1B3F"/>
            </linearGradient>
            <path d="M8 8H24L56 56H40" stroke="url(#nebula-gradient)" strokeWidth="6" strokeLinejoin="round"/>
            <path d="M56 8H40V24" stroke="url(#nebula-gradient)" strokeWidth="6" strokeLinejoin="round"/>
          </svg>
          <span className="company-name">Nebula</span>
        </a>
        <nav>
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.to}>
                <a href={link.to}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
} 