import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Web Development',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="service-svg">
        <path d="M18 4L4 10L18 16L32 10L18 4Z" stroke="#8F6FE6" strokeWidth="2.2" className="icon-path">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" begin="indefinite" fill="freeze"/>
        </path>
        <path d="M4 18L18 24L32 18" stroke="#6B4BBE" strokeWidth="2" className="icon-path">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" begin="indefinite" fill="freeze"/>
        </path>
        <path d="M4 26L18 32L32 26" stroke="#8F6FE6" strokeWidth="2.2" className="icon-path">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" begin="indefinite" fill="freeze"/>
        </path>
      </svg>
    ),
    desc: 'Modern, scalable websites and web apps.'
  },
  {
    title: 'Mobile & Desktop Apps',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="service-svg">
        <rect x="8" y="6" width="20" height="24" rx="4" stroke="#8F6FE6" strokeWidth="2.2" className="icon-path">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" begin="indefinite" fill="freeze"/>
        </rect>
        <circle cx="18" cy="18" r="6" stroke="#6B4BBE" strokeWidth="2" className="icon-path">
          <animate attributeName="r" values="6;7;6" dur="2s" begin="indefinite" repeatCount="indefinite"/>
        </circle>
        <path d="M18 12V24" stroke="#8F6FE6" strokeWidth="2" className="icon-path">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" begin="indefinite" fill="freeze"/>
        </path>
      </svg>
    ),
    desc: 'Cross-platform mobile and desktop solutions.'
  },
  {
    title: 'UI/UX Design',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="service-svg">
        <circle cx="18" cy="18" r="14" stroke="#8F6FE6" strokeWidth="2.2" className="icon-path">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" begin="indefinite" fill="freeze"/>
        </circle>
        <path d="M18 8V28" stroke="#6B4BBE" strokeWidth="2" className="icon-path">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" begin="indefinite" fill="freeze"/>
        </path>
        <path d="M8 18H28" stroke="#6B4BBE" strokeWidth="2" className="icon-path">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" begin="indefinite" fill="freeze"/>
        </path>
      </svg>
    ),
    desc: 'Intuitive, beautiful user experiences.'
  },
  {
    title: 'CRM/ERP Systems',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="service-svg">
        <rect x="6" y="6" width="24" height="24" rx="4" stroke="#8F6FE6" strokeWidth="2.2" className="icon-path">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" begin="indefinite" fill="freeze"/>
        </rect>
        <path d="M12 12H24" stroke="#6B4BBE" strokeWidth="2" className="icon-path">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" begin="indefinite" fill="freeze"/>
        </path>
        <path d="M12 18H24" stroke="#6B4BBE" strokeWidth="2" className="icon-path">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" begin="indefinite" fill="freeze"/>
        </path>
        <path d="M12 24H24" stroke="#6B4BBE" strokeWidth="2" className="icon-path">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" begin="indefinite" fill="freeze"/>
        </path>
      </svg>
    ),
    desc: 'Custom business management platforms.'
  },
  {
    title: 'SaaS Solutions',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="service-svg">
        <path d="M18 4L32 10V26L18 32L4 26V10L18 4Z" stroke="#8F6FE6" strokeWidth="2.2" className="icon-path">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" begin="indefinite" fill="freeze"/>
        </path>
        <circle cx="18" cy="18" r="6" stroke="#6B4BBE" strokeWidth="2" className="icon-path">
          <animate attributeName="r" values="6;7;6" dur="2s" begin="indefinite" repeatCount="indefinite"/>
        </circle>
      </svg>
    ),
    desc: 'Cloud-based products and platforms.'
  },
  {
    title: 'Technical Support',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="service-svg">
        <circle cx="18" cy="18" r="14" stroke="#8F6FE6" strokeWidth="2.2" className="icon-path">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" begin="indefinite" fill="freeze"/>
        </circle>
        <path d="M18 12V18" stroke="#6B4BBE" strokeWidth="2" className="icon-path">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="1.5s" begin="indefinite" fill="freeze"/>
        </path>
        <circle cx="18" cy="24" r="1" fill="#6B4BBE" className="icon-path">
          <animate attributeName="r" values="1;1.5;1" dur="2s" begin="indefinite" repeatCount="indefinite"/>
        </circle>
      </svg>
    ),
    desc: 'Reliable support for your digital needs.'
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 