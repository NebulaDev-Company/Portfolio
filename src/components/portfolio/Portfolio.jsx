import React from 'react';
import ScrollFloat from '../ScrollFloat/ScrollFloat';
import './Portfolio.css';
import portfolio from '../../assets/Webs/portfolio.png';
// import elegant from '../../assets/Webs/elegant.png';
import school from '../../assets/Webs/school.png';
import tomato from '../../assets/Webs/tomato.png';
import medical from '../../assets/Webs/medical.png';
import habit from '../../assets/Webs/habit.png';




const projects = [
  {
    title: 'Personal Portfolio',
    url: 'https://yacine-portfoloi.netlify.app/',
    desc: 'A professional personal website showcasing my resume, skills, and projects in a modern and attractive way.',
    tech: ['Flutter', 'Dart', 'Responsive'],
    img: portfolio,
    type: 'concept',
  },
  {
    title: 'Tomato Restaurant',
    url: 'https://restaurant-frontend-x0b2.onrender.com/',
    desc: 'A modern restaurant platform to display the menu and order food online with a smooth user experience.',
    tech: ['React', 'Tailwind', 'Food UI'],
    img: tomato,
    type: 'concept',
  },
  // {
  //   title: 'Elegant Fashion',
  //   url: 'https://elegant-fashion.netlify.app/',
  //   desc: 'An e-commerce website for trendy fashion with premium services and an elegant shopping experience.',
  //   tech: ['React', 'E-commerce', 'CSS'],
  //   img: elegant,
  // },
  {
    title: 'Nebula School',
    url: 'https://nebula-school.onrender.com/',
    desc: 'An educational platform to showcase courses and the teaching team with a professional user interface.',
    tech: ['React', 'Education', 'Modern UI'],
    img: school,
    type: 'concept',
  },
  {
    title: 'Habit Tracker',
    url: 'https://habit-tracker-nebula.netlify.app/',
    desc: 'A simple, offline, open-source tool to track your daily habits. Check off your tasks, visualize your progress with charts, and improve your routine. No accounts, no subscriptions, no data collection.',
    tech: ['PWA', 'Habit', 'Modern UI'],
    img: habit,
    type: 'client',
  },
  {
    title: 'Medical QCM Platform',
    url: 'https://medical-platform-qcm.netlify.app/',
    desc: 'Master your medical MCQs efficiently Access thousands of questions by specialty and level. Track progress, save favorites, and study even offline.',
    tech: ['Responsive', 'MERN', 'PWA'],
    img: medical,
    type: 'client',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          Portfolio
        </ScrollFloat>
        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <a href={project.url} className="portfolio-card" key={i} target="_blank" rel="noopener noreferrer">
              <div className={`portfolio-badge ${project.type}`}>
                {project.type === 'client' ? 'Real Client' : 'Concept Project'}
              </div>
              <img src={project.img} alt={project.title} className="portfolio-img" />
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="portfolio-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 