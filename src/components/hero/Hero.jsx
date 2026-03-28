import { useEffect, useState, Suspense, lazy } from 'react';
import TextType from './TextType';
import './Hero.css';

const LiquidEther = lazy(() => import('./LiquidEther'));

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 901px)');
    setIsDesktop(mediaQuery.matches);
    
    const handleMediaChange = (e) => setIsDesktop(e.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } else {
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/assets/videos/nebula-mobile.mp4" media="(max-width: 900px)" type="video/mp4" />
          <source src="/assets/videos/nebula.mp4" type="video/mp4" />
        </video>
        <div className="hero-liquid" aria-hidden="true">
          {isDesktop && (
            <Suspense fallback={null}>
              <LiquidEther
                colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                mouseForce={15}
                cursorSize={70}
                isViscous
                viscous={30}
                iterationsViscous={12}
                iterationsPoisson={12}
                resolution={0.25}
                isBounce={false}
                autoDemo
                autoSpeed={0.5}
                autoIntensity={2.2}
                takeoverDuration={0.25}
                autoResumeDelay={3000}
                autoRampDuration={0.6}
                color0="#5227ff"
                color1="#9141ac"
                color2="#B19EEF"
              />
            </Suspense>
          )}
        </div>
        <div className="hero-video-overlay" aria-hidden="true"></div>
        <div className="nebula-glow"></div>
        <div className="particles">
          {[...Array(13)].map((_, i) => <span key={i} className={`particle p${i+1}`}></span>)}
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-parallax-layer">
          <p className="hero-kicker">SHAPING THE DIGITAL FRONTIER</p>
          <h1 className="hero-heading">
            <span className="nebula-gradient">Nebula</span> |{' '}
            <TextType 
              as="span"
              text={["Smart Code","Stellar Solutions"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              variableSpeed={{ min: 60, max: 120 }}
              cursorBlinkDuration={0.5}
            />
          </h1>
          <p className="hero-lead">We transform visionary ideas into high-performance digital ecosystems that captivate users and drive real growth.</p>

          <div className="hero-story-beats" aria-label="Hero story highlights">
            <p className="hero-beat">Crafting intuitive and immersive brand experiences.</p>
            <p className="hero-beat">Engineering scalable, future-proof architectures.</p>
            <p className="hero-beat">Accelerating business growth through digital innovation.</p>
          </div>

          <div className="hero-chips">
            <span className="hero-chip">Digital Strategy</span>
            <span className="hero-chip">Creative Design</span>
            <span className="hero-chip">Advanced Engineering</span>
          </div>

          <div className="hero-card">
            <strong>Elevate Your Brand</strong>
            <p>Partner with a team dedicated to pushing the boundaries of what is possible on the web. Your vision, expertly realized.</p>
          </div>

          <a href="#contact" className="cta-btn">Let's Work Together</a>
        </div>
      </div>
    </section>
  );
} 