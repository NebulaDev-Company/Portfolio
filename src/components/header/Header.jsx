import { useState, useEffect } from 'react';
import Icon from '../Icon';
import Logo from '../Logo';
import './Header.css';

const navLinks = [
  { label: 'Home', to: '#hero' },
  { label: 'About', to: '#about' },
  { label: 'Services', to: '#services' },
  { label: 'Work', to: '#portfolio' },
  { label: 'Contact', to: '#contact' },
];

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = navLinks.map(link => link.to.substring(1));
    const sections = sectionIds
      .map(sectionId => document.getElementById(sectionId))
      .filter(Boolean);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries.find(entry => entry.isIntersecting);
        if (activeEntry) {
          setActiveSection(prev => (prev !== activeEntry.target.id ? activeEntry.target.id : prev));
        }
      },
      { threshold: 0, rootMargin: '-45% 0px -45% 0px' }
    );

    sections.forEach(section => sectionObserver.observe(section));

    const onScroll = () => setIsScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      sectionObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : '';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsDrawerOpen(false);
    };

    if (isDrawerOpen) document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isDrawerOpen]);

  const toggleDrawer = () => setIsDrawerOpen(prev => !prev);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <header className={`nebula-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <a href="#hero" className="logo-wrap" aria-label="Nebula home">
          <Logo />
          <span className="company-name">Nebula</span>
        </a>

        <nav className="header-nav" aria-label="Primary">
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.to}>
                <a
                  href={link.to}
                  className={activeSection === link.to.substring(1) ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary btn-sm header-cta">
            Start a project
          </a>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={toggleDrawer}
          aria-label={isDrawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isDrawerOpen}
          aria-controls="mobile-menu"
        >
          <Icon name={isDrawerOpen ? 'close' : 'menu'} size={24} strokeWidth={1.75} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${isDrawerOpen ? 'open' : ''}`}
        aria-hidden={!isDrawerOpen}
      >
        <nav aria-label="Mobile">
          <ul className="mobile-nav-links">
            {navLinks.map((link, i) => (
              <li key={link.to} style={{ '--stagger': i }}>
                <a href={link.to} onClick={closeDrawer}>
                  <span className="mobile-nav-index">0{i + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu-footer">
          <a href="#contact" className="btn btn-primary btn-lg" onClick={closeDrawer}>
            Start a project
          </a>
          <p className="mobile-menu-email">contact.nebuladev@gmail.com</p>
        </div>
      </div>
    </header>
  );
}
