import useReveal from '../../hooks/useReveal';
import Icon from '../Icon';
import './Portfolio.css';
import portfolioImg from '../../assets/Webs/portfolio.png';
import elegant from '../../assets/Webs/elegant.png';
import school from '../../assets/Webs/school.png';
import tomato from '../../assets/Webs/tomato.png';
import medical from '../../assets/Webs/medical.png';
import habit from '../../assets/Webs/habit.png';
import academix from '../../assets/Webs/academix.png';

const projects = [
  {
    title: 'Personal Portfolio',
    url: 'https://yacine-portfoloi.netlify.app/',
    desc: 'A professional personal website presenting a resume, skills, and projects.',
    tech: ['Flutter', 'Dart', 'Responsive'],
    img: portfolioImg,
    type: 'concept',
  },
  {
    title: 'Tomato Restaurant',
    url: 'https://restaurant-frontend-x0b2.onrender.com/',
    desc: 'A modern restaurant platform for displaying the menu and ordering online.',
    tech: ['React', 'Tailwind', 'Food UI'],
    img: tomato,
    type: 'concept',
  },
  {
    title: 'Elegant Fashion',
    url: 'https://elegant-fashion.netlify.app/',
    desc: 'An e-commerce experience for premium fashion with a refined shopping flow.',
    tech: ['React', 'E-commerce', 'CSS'],
    img: elegant,
    type: 'concept',
  },
  {
    title: 'Nebula School',
    url: 'https://nebula-school.onrender.com/',
    desc: 'An educational platform for showcasing courses and the teaching team.',
    tech: ['React', 'Education', 'Modern UI'],
    img: school,
    type: 'concept',
  },
  {
    title: 'Habit Tracker',
    url: 'https://habit-tracker-nebula.netlify.app/',
    desc: 'An offline, open-source PWA for tracking daily habits no accounts, no subscriptions.',
    tech: ['PWA', 'Habit', 'Modern UI'],
    img: habit,
    type: 'client',
  },
  {
    title: 'Medical QCM Platform',
    url: 'https://medical-platform-qcm.netlify.app/',
    desc: 'A study platform with thousands of medical MCQs by specialty, even offline.',
    tech: ['Responsive', 'MERN', 'PWA'],
    img: medical,
    type: 'client',
  },
];

const featured = {
  title: 'Academix',
  url: 'https://academix-os.netlify.app/en',
  desc: 'The operating system for modern schools attendance, grades, fees, and parent communication in one elegant platform.',
  tech: ['Education', 'Next.js', 'PWA'],
  img: academix,
  type: 'client',
};

function ProjectCard({ project, className = '' }) {
  return (
    <a
      href={project.url}
      className={`project-card ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-media">
        <img
          src={project.img}
          alt={`${project.title} project screenshot`}
          loading="lazy"
          decoding="async"
          fetchPriority={className ? 'high' : 'low'}
        />
      </div>
      <div className="project-body">
        <div className="project-title-row">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-arrow">
            <Icon name="arrowUpRight" size={18} strokeWidth={2} />
          </span>
        </div>
        <p className="project-desc">{project.desc}</p>
        <div className="project-meta">
          <span className={`project-tag ${project.type}`}>
            {project.type === 'client' ? 'Client' : 'Concept'}
          </span>
          <div className="project-tech">
            {project.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export default function Portfolio() {
  const sectionRef = useReveal();

  return (
    <section id="portfolio" className="section portfolio-section" ref={sectionRef}>
      <div className="container">
        <div className="portfolio-head" data-reveal>
          <div>
            <p className="eyebrow">Work</p>
            <h2 className="h2">Selected projects</h2>
          </div>
          <p className="portfolio-intro">
            A selection of platforms and products we&apos;ve designed and built for
            clients, teams, and our own research.
          </p>
        </div>

        <div className="portfolio-grid">
          <ProjectCard project={featured} className="project-featured" />

          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
