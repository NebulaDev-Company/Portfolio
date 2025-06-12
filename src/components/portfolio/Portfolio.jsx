import React from 'react';
import './Portfolio.css';

const projects = [
  {
    title: 'Stellar CRM',
    image: 'https://placehold.co/400x240/6B4BBE/FFF?text=Stellar+CRM',
    desc: 'A robust CRM platform for managing customer relationships and sales pipelines.',
    tech: ['React', 'Node.js', 'MongoDB', 'Sass']
  },
  {
    title: 'Nebula SaaS Suite',
    image: 'https://placehold.co/400x240/1D1B3F/FFF?text=Nebula+SaaS',
    desc: 'A scalable SaaS solution for business automation and analytics.',
    tech: ['Vue', 'Firebase', 'Tailwind', 'Chart.js']
  },
  {
    title: 'Cosmic UI Kit',
    image: 'https://placehold.co/400x240/8F6FE6/FFF?text=Cosmic+UI+Kit',
    desc: 'A modern UI component library for fast, beautiful app development.',
    tech: ['Figma', 'React', 'Storybook']
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2>Our Portfolio</h2>
        <div className="portfolio-grid">
          {projects.map((proj, i) => (
            <div className="portfolio-card" key={i}>
              <img src={proj.image} alt={proj.title + ' screenshot'} className="portfolio-img" />
              <div className="portfolio-info">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div className="portfolio-tech">
                  {proj.tech.map((t, j) => (
                    <span key={j}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 