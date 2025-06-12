import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg">
        <div className="nebula-glow"></div>
        <div className="particles">
          {[...Array(13)].map((_, i) => <span key={i} className={`particle p${i+1}`}></span>)}
        </div>
      </div>
      <div className="hero-content">
        <h1><span className="nebula-gradient">Nebula</span> | Smart Code. Stellar Solutions</h1>
        <a href="#contact" className="cta-btn">Let's Work Together</a>
      </div>
    </section>
  );
} 