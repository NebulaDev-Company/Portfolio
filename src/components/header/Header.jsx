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
          <svg width="60" height="60" viewBox="0 0 563 563" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M425.241 78H483.015C485.776 78 488.015 80.2386 488.015 83V246.473C488.015 248.325 485.716 249.182 484.504 247.783L425.241 179.404V78Z" fill="#5B0E8C"/>
            <path d="M425.241 78V140.774H386.612L327.252 81.4142C325.992 80.1543 326.885 78 328.666 78H425.241Z" fill="#5B0E8C"/>
            <path d="M147 78C149.761 78 152 80.2386 152 83V421H188.477L247.617 480.591C248.87 481.853 247.975 484 246.197 484H72C69.2386 484 67 481.761 67 479V84C67 80.6863 69.6863 78 73 78H147Z" fill="url(#paint0_linear_20_2)"/>
            <path d="M67.4335 84.511C67.1528 84.1574 66.9901 83.7173 67.0289 83.2674C67.231 80.9248 68.4727 79.8569 70.0654 78.8623C70.994 78.2824 72.0787 78 73.1735 78H163.027C164.541 78 165.973 78.6859 166.922 79.8653L487.201 477.865C489.833 481.137 487.505 486 483.305 486H386.123L67.4335 84.511Z" fill="#5B0E8C"/>
            <path d="M483 78C485.761 78.0001 488 80.2387 488 83V246.649C488 248.499 485.704 249.357 484.49 247.961L425 179.5V140.773H386.611L327.252 81.4141C325.992 80.1542 326.884 78.0001 328.666 78H483Z" fill="#5B0E8C"/>
            <defs>
              <linearGradient id="paint0_linear_20_2" x1="105.263" y1="78" x2="109.426" y2="484.003" gradientUnits="userSpaceOnUse">
              <stop offset="0.159034" stop-color="#420767"/>
              <stop offset="1" stop-color="#6C2DC7"/>
              </linearGradient>
            </defs>
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