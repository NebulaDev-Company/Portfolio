import { useEffect, useRef } from 'react';
import Icon from '../Icon';
import Academix from '../../assets/Webs/academix.png';
import './Hero.css';

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    const nodes = section.querySelectorAll('[data-hero-enter]');
    nodes.forEach((node) => node.classList.add('hero-enter'));

    return undefined;
  }, []);

  return (
    <section id="hero" className="hero-section" ref={sectionRef}>
      <div className="container">
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow" data-hero-enter>
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            Software design &amp; engineering
          </p>

          <h1 className="display hero-title" data-hero-enter>
            Smart code.
            <br />
            Stellar<span className="hero-accent"> solutions.</span>
          </h1>

          <p className="lead hero-lead" data-hero-enter>
            Nebula designs and builds digital products businesses rely on web
            platforms, applications, and internal systems. From first sketch to
            production, engineered with precision.
          </p>

          <div className="hero-actions" data-hero-enter>
            <a href="#contact" className="btn btn-primary btn-lg">
              Start a project
            </a>
            <a href="#portfolio" className="btn btn-secondary btn-lg">
              View our work
            </a>
          </div>
        </div>

        <div className="hero-visual" data-hero-enter>
          <div className="browser-frame" role="img" aria-label="Screenshot of the Academix school management platform built by Nebula">
            <div className="browser-chrome" aria-hidden="true">
              <span className="browser-dot" />
              <span className="browser-dot" />
              <span className="browser-dot" />
              <span className="browser-url">academix-os.netlify.app</span>
            </div>
            <div className="browser-body">
              <img
                src={Academix}
                alt=""
                loading="lazy"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
          <a
            className="hero-visual-caption"
            href="https://academix-os.netlify.app/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="external" size={14} />
            Academix - school management platform
          </a>
        </div>
      </div>
    </section>
  );
}
