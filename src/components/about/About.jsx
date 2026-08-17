import useReveal from '../../hooks/useReveal';
import Icon from '../Icon';
import './About.css';

const values = [
  {
    icon: 'layers',
    title: 'Creativity',
    desc: 'We craft unique, future-ready solutions rather than reusing templates.',
  },
  {
    icon: 'shieldCheck',
    title: 'Quality',
    desc: 'We uphold high standards in every project, from architecture to pixels.',
  },
  {
    icon: 'users',
    title: 'Client-focused',
    desc: 'Your vision is at the heart of our development process not the other way around.',
  },
];

export default function About() {
  const sectionRef = useReveal();

  return (
    <section id="about" className="section about-section" ref={sectionRef}>
      <div className="container about-grid">
        <div className="about-intro" data-reveal>
          <p className="eyebrow">About</p>
          <h2 className="h2 about-title">
            A software company built around craft and long-term thinking.
          </h2>
        </div>

        <div className="about-body">
          <p className="body-lg" data-reveal>
            <strong className="about-name">Nebula</strong> is a software company
            dedicated to turning ideas into reliable digital products. We design,
            build, and maintain web platforms, applications, and business systems —
            working closely with our clients to deliver solutions that are
            high-quality, user-centric, and built to last.
          </p>

          <ul className="about-values" data-reveal>
            {values.map((value) => (
              <li key={value.title} className="about-value">
                <span className="about-value-icon">
                  <Icon name={value.icon} size={18} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="about-value-title">{value.title}</h3>
                  <p className="about-value-desc">{value.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
