import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-content">
        <h2>About Us</h2>
        <p>
          <strong>Nebula</strong> is a forward-thinking software company dedicated to transforming ideas into digital reality. Our mission is to empower businesses and individuals through innovative, high-quality, and user-centric technology solutions. We believe in pushing creative boundaries, delivering exceptional results, and building lasting partnerships with our clients.
        </p>
        <ul className="about-bullets">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <div>
              <strong>Creativity:</strong> We craft unique, future-ready solutions.
            </div>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            <div>
              <strong>Quality:</strong> We uphold the highest standards in every project.
            </div>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <div>
              <strong>Client-Focused:</strong> Your vision is at the heart of our development process.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
} 