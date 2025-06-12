import React, { useState } from 'react';
import './Contact.css';

const socials = [
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#6B4BBE"/><path d="M7.5 9.5v5M7.5 7.5v.01M12 15v-2.5a1.5 1.5 0 0 1 3 0V15M9 15V9.5M15 15V12.5a1.5 1.5 0 0 0-3 0V15" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/></svg>
  ) },
  { name: 'GitHub', url: 'https://github.com', icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#1D1B3F"/><path d="M12 17.5c-3.5 0-5.5-2-5.5-4.5 0-1.2.5-2.2 1.3-3-.1-.3-.6-1.5.1-3 0 0 1.1-.3 3.1 1.2.9-.2 1.9-.3 2.9-.3s2 .1 2.9.3c2-1.5 3.1-1.2 3.1-1.2.7 1.5.2 2.7.1 3 .8.8 1.3 1.8 1.3 3 0 2.5-2 4.5-5.5 4.5z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/></svg>
  ) },
  { name: 'Instagram', url: 'https://instagram.com', icon: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#8F6FE6"/><rect x="7" y="7" width="10" height="10" rx="4" stroke="#fff" strokeWidth="1.5"/><circle cx="12" cy="12" r="2.5" stroke="#fff" strokeWidth="1.5"/><circle cx="16" cy="8" r="1" fill="#fff"/></svg>
  ) },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-content">
        <h2>Contact Us</h2>
        <div className="contact-flex">
          <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required rows={5} />
            <button type="submit" disabled={submitted}>{submitted ? 'Thank you!' : 'Send Message'}</button>
          </form>
          <div className="contact-socials">
            <p>Connect with us:</p>
            <div className="social-links">
              {socials.map(s => (
                <a href={s.url} key={s.name} target="_blank" rel="noopener noreferrer" aria-label={s.name} className={`social-icon ${s.name.toLowerCase()}`}>{s.icon}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 