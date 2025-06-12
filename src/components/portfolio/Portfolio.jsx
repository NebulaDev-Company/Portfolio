import React from 'react';
import './Portfolio.css';
import websiteImg from '../../assets/Website.png';


export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="portfolio-message">
          <img
            src={websiteImg}
            alt="Portfolio illustration"
            className="portfolio-svg"
          />
          <p>We're building this part based on your projects and needs.</p>
        </div>
      </div>
    </section>
  );
} 