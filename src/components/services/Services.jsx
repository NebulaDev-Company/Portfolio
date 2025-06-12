import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Web Development',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><rect x="4" y="8" width="28" height="20" rx="4" stroke="#8F6FE6" strokeWidth="2.2"/><rect x="8" y="12" width="20" height="12" rx="2" stroke="#6B4BBE" strokeWidth="2"/><circle cx="12" cy="18" r="1.5" fill="#6B4BBE"/><circle cx="18" cy="18" r="1.5" fill="#6B4BBE"/><circle cx="24" cy="18" r="1.5" fill="#6B4BBE"/></svg>
    ),
    desc: 'Modern, scalable websites and web apps.'
  },
  {
    title: 'Mobile & Desktop Apps',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><rect x="8" y="6" width="20" height="24" rx="4" stroke="#8F6FE6" strokeWidth="2.2"/><rect x="13" y="27" width="10" height="2" rx="1" fill="#6B4BBE"/></svg>
    ),
    desc: 'Cross-platform mobile and desktop solutions.'
  },
  {
    title: 'UI/UX Design',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><rect x="6" y="10" width="24" height="16" rx="4" stroke="#8F6FE6" strokeWidth="2.2"/><rect x="10" y="14" width="16" height="8" rx="2" stroke="#6B4BBE" strokeWidth="2"/></svg>
    ),
    desc: 'Intuitive, beautiful user experiences.'
  },
  {
    title: 'CRM/ERP Systems',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><rect x="7" y="9" width="22" height="18" rx="4" stroke="#8F6FE6" strokeWidth="2.2"/><rect x="11" y="13" width="14" height="10" rx="2" stroke="#6B4BBE" strokeWidth="2"/></svg>
    ),
    desc: 'Custom business management platforms.'
  },
  {
    title: 'SaaS Solutions',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><ellipse cx="18" cy="18" rx="12" ry="8" stroke="#8F6FE6" strokeWidth="2.2"/><ellipse cx="18" cy="18" rx="7" ry="4" stroke="#6B4BBE" strokeWidth="2"/></svg>
    ),
    desc: 'Cloud-based products and platforms.'
  },
  {
    title: 'Technical Support',
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="14" stroke="#8F6FE6" strokeWidth="2.2"/><path d="M18 24v-4" stroke="#6B4BBE" strokeWidth="2" strokeLinecap="round"/><circle cx="18" cy="16" r="2" fill="#6B4BBE"/></svg>
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