import { useState, useRef } from 'react';
import useReveal from '../../hooks/useReveal';
import Icon from '../Icon';
import './Contact.css';

const contactInfo = [
  {
    type: 'Email',
    value: 'contact.nebuladev@gmail.com',
    link: 'mailto:contact.nebuladev@gmail.com',
    icon: 'mail',
  },
  {
    type: 'Phone',
    value: '+213 657 57 21 15',
    link: 'tel:+213657572115',
    icon: 'phone',
  },
  {
    type: 'Location',
    value: 'Mostaganem, Algeria working worldwide',
    link: 'https://www.google.com/maps?q=Mostaganem,Algeria',
    icon: 'mapPin',
  },
];

export default function Contact() {
  const sectionRef = useReveal();
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const { default: emailjs } = await import('@emailjs/browser');

      await emailjs.sendForm(
        'send_gmail_nebula',
        'template_Gmail_Nebula',
        formRef.current,
        'vRrwrov_euFvXoeCT'
      );

      setForm({ name: '', email: '', message: '' });
      setShowSuccess(true);

      setTimeout(() => setShowSuccess(false), 3500);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('EmailJS error:', err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section contact-section" ref={sectionRef}>
      <div className="container">
        <div className="contact-head" data-reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="h2 contact-title">Let&apos;s build something together.</h2>
          <p className="contact-intro">
            Tell us about your project and we&apos;ll get back to you within one
            business day.
          </p>
        </div>

        <div className="contact-layout">
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit} autoComplete="off" data-reveal>
            <div className="contact-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="What are you looking to build?"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>

            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}

            <button type="submit" className="btn btn-primary btn-lg contact-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send message'}
              {!isSubmitting && <Icon name="send" size={16} />}
            </button>
          </form>

          <div className="contact-info" data-reveal>
            {contactInfo.map((info) => {
              const mobileEmailLink = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent)
                ? 'mailto:contact.nebuladev@gmail.com'
                : 'https://mail.google.com/mail/?view=cm&fs=1&to=contact.nebuladev@gmail.com';
              const href = info.type === 'Email' ? mobileEmailLink : info.link;

              return (
                <a
                  key={info.type}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-item"
                >
                  <span className="contact-info-icon">
                    <Icon name={info.icon} size={18} strokeWidth={1.75} />
                  </span>
                  <span className="contact-info-body">
                    <span className="contact-info-label">{info.type}</span>
                    <span className="contact-info-value">{info.value}</span>
                  </span>
                </a>
              );
            })}

            <div className="contact-note">
              <Icon name="checkCircle" size={16} />
              <span>
                Currently accepting new projects for Q3 2026.
              </span>
            </div>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="success-modal" role="dialog" aria-modal="true" aria-labelledby="success-title">
          <div className="success-card">
            <span className="success-icon">
              <Icon name="check" size={22} strokeWidth={2.5} />
            </span>
            <h3 id="success-title" className="success-title">
              Message sent
            </h3>
            <p className="success-text">
              Thanks for reaching out. We&apos;ll get back to you soon.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
