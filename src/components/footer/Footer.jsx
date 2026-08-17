import Icon from '../Icon';
import Logo from '../Logo';
import './Footer.css';

const socials = [
  { label: 'GitHub', href: 'https://github.com/NebulaDev-Company', icon: 'github' },
  { label: 'Instagram', href: 'https://www.instagram.com/nebula_.dev/', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nebuladev-contact-94b007369/', icon: 'linkedin' },
];

const footerNav = [
  { label: 'About', to: '#about' },
  { label: 'Services', to: '#services' },
  { label: 'Work', to: '#portfolio' },
  { label: 'Contact', to: '#contact' },
];

export default function Footer() {
  return (
    <footer className="nebula-footer">
      <div className="container footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo" aria-label="Nebula home">
              <Logo size={24} />
              <span>Nebula</span>
            </a>
            <p className="footer-slogan">Smart code. Stellar solutions.</p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            {footerNav.map((item) => (
              <a key={item.to} href={item.to}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer-socials">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <Icon name={social.icon} size={18} strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Nebula. All rights reserved.</span>
          <span className="footer-built">Designed &amp; built by Nebula.</span>
        </div>
      </div>
    </footer>
  );
}
