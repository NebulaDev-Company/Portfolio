import useReveal from '../../hooks/useReveal';
import Icon from '../Icon';
import './Services.css';

const services = [
  {
    icon: 'code',
    title: 'Web Development',
    desc: 'Modern, scalable websites and web applications.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile & Desktop Apps',
    desc: 'Cross-platform applications for mobile and desktop.',
  },
  {
    icon: 'penTool',
    title: 'UI/UX Design',
    desc: 'Intuitive, thoughtful user experiences.',
  },
  {
    icon: 'database',
    title: 'CRM / ERP Systems',
    desc: 'Custom business management platforms.',
  },
  {
    icon: 'cloud',
    title: 'SaaS Solutions',
    desc: 'Cloud-based products and platforms.',
  },
  {
    icon: 'headset',
    title: 'Technical Support',
    desc: 'Reliable support after launch and beyond.',
  },
];

export default function Services() {
  const sectionRef = useReveal();

  return (
    <section id="services" className="section services-section" ref={sectionRef}>
      <div className="container">
        <div className="services-head" data-reveal>
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="h2">What we do</h2>
          </div>
          <p className="services-intro">
            End-to-end software delivery from product thinking and design to
            development, deployment, and ongoing support.
          </p>
        </div>

        <div className="services-grid" data-reveal>
          {services.map((service) => (
            <div className="service-cell" key={service.title}>
              <span className="service-icon">
                <Icon name={service.icon} size={22} strokeWidth={1.75} />
              </span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
