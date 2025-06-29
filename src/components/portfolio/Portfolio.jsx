import React from 'react';
import './Portfolio.css';
import portfolio from '../../assets/Webs/portfolio.png';
import elegant from '../../assets/Webs/elegant.png';
import school from '../../assets/Webs/school.png';
import tomato from '../../assets/Webs/tomato.png';


const projects = [
  {
    title: 'Personal Portfolio',
    url: 'https://yacine-portfoloi.netlify.app/',
    desc: 'A professional personal website showcasing my resume, skills, and projects in a modern and attractive way.',
    tech: ['React', 'CSS', 'Responsive'],
    img: portfolio,
  },
  {
    title: 'Tomato Restaurant',
    url: 'https://restaurant-frontend-x0b2.onrender.com/',
    desc: 'A modern restaurant platform to display the menu and order food online with a smooth user experience.',
    tech: ['React', 'Tailwind', 'Food UI'],
    img: tomato,
  },
  {
    title: 'Elegant Fashion',
    url: 'https://elegant-fashion.netlify.app/',
    desc: 'An e-commerce website for trendy fashion with premium services and an elegant shopping experience.',
    tech: ['React', 'E-commerce', 'CSS'],
    img: elegant,
  },
  {
    title: 'Nebula School',
    url: 'https://nebula-scool.netlify.app/',
    desc: 'An educational platform to showcase courses and the teaching team with a professional user interface.',
    tech: ['React', 'Education', 'Modern UI'],
    img: school,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <div className="portfolio-card" key={i}>
              <img src={project.img} alt={project.title} className="portfolio-img" />
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="portfolio-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
                <a href={project.url} className="portfolio-btn-blur" target="_blank" rel="noopener noreferrer">Visit Site</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 