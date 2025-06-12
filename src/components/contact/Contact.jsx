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

const contactInfo = [
  {
    type: 'Email',
    value: 'contact.nebuladev@gmail.com',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    type: 'Phone',
    value: '+213 657 57 21 15',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2134 21.3523 21.4002C21.1473 21.587 20.9053 21.7273 20.6425 21.8121C20.3798 21.8969 20.1025 21.9243 19.83 21.892C16.7428 21.4555 13.787 20.3556 11.19 18.68C8.77383 16.7932 6.72559 14.3911 5.2 11.65C3.57991 9.07797 2.49519 6.15719 2.05 3.1C2.01771 2.82756 2.04512 2.55025 2.12993 2.28749C2.21474 2.02474 2.35506 1.78273 2.54185 1.57772C2.72864 1.37272 2.95753 1.20911 3.21269 1.09751C3.46785 0.985908 3.74352 0.928864 4.022 0.93H7.022C7.55565 0.924952 8.06573 1.1269 8.44586 1.49431C8.82599 1.86172 9.04223 2.36397 9.042 2.89C9.09949 3.81444 9.31534 4.71868 9.678 5.56C9.81653 5.86183 9.85104 6.19575 9.77699 6.51583C9.70294 6.83592 9.52407 7.12367 9.268 7.33L8.042 8.56C9.36456 10.4775 11.1105 12.2234 13.028 14.546L14.258 13.316C14.4646 13.0599 14.7525 12.881 15.0727 12.8069C15.3929 12.7328 15.7269 12.7673 16.028 12.906C16.8696 13.2684 17.7741 13.4841 18.698 13.542C19.2201 13.5421 19.7183 13.7551 20.0834 14.1309C20.4485 14.5067 20.6505 15.0115 20.65 15.542L22 16.92Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    type: 'Location',
    value: 'Algeria - Mostaganem | Available Everywhere',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3.62 8.49C5.59 -0.169998 18.42 -0.159998 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39 20.54C5.63 17.88 2.47 13.57 3.62 8.49Z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  }
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
          <div className="contact-left">
            <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
              <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
              <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required rows={5} />
              <button type="submit" disabled={submitted}>{submitted ? 'Thank you!' : 'Send Message'}</button>
            </form>
          </div>
          
          <div className="contact-divider"></div>
          
          <div className="contact-right">
            <div className="contact-info">
              {contactInfo.map(info => (
                <div key={info.type} className="contact-info-item">
                  <div className="contact-info-icon">{info.icon}</div>
                  <div className="contact-info-content">
                    <h3>{info.type}</h3>
                    <p>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 