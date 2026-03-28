import { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextType from './TextType';
import './Hero.css';

const LiquidEther = lazy(() => import('./LiquidEther'));

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(true);
  const heroRef = useRef(null);
  const glowRef = useRef(null);
  const particlesRef = useRef(null);
  const contentRef = useRef(null);
  const parallaxRef = useRef(null);
  const videoRef = useRef(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroElement = heroRef.current;
      const videoElement = videoRef.current;
      const overlayElement = heroElement?.querySelector('.hero-video-overlay');

      if (!heroElement || !videoElement || !overlayElement) {
        return undefined;
      }

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: reduce), (max-width: 900px)', () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars?.trigger === heroElement) trigger.kill();
        });

        gsap.set(
          [
            '.hero-kicker',
            '.hero-heading',
            '.hero-lead',
            '.hero-beat',
            '.hero-chip',
            '.hero-card',
            '.cta-btn'
          ],
          {
            autoAlpha: 1,
            y: 0,
            scale: 1
          }
        );

        gsap.set(videoElement, {
          clearProps: 'all',
          scale: 1,
          opacity: 1
        });

        gsap.set(overlayElement, { opacity: 0.6 });
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const textSequence = [
          '.hero-kicker',
          '.hero-heading',
          '.hero-lead',
          '.hero-beat',
          '.hero-chip',
          '.hero-card',
          '.cta-btn'
        ];

        const cinematicTl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: heroElement,
            start: 'top top',
            end: '+=2100',
            scrub: true,
            pin: true,
            anticipatePin: 1
          }
        });

        cinematicTl
          .fromTo(
            videoElement,
            { scale: 1.02, opacity: 0.82, yPercent: 0 },
            { scale: 1.48, opacity: 1, yPercent: 8 },
            0
          )
          .fromTo(
            overlayElement,
            { opacity: 0.95 },
            { opacity: 0.2 },
            0
          )
          .fromTo(
            '.particle',
            { autoAlpha: 0, scale: 0.65, y: 10 },
            { autoAlpha: 0.85, scale: 1, y: 0, stagger: 0.02, duration: 0.25, ease: 'power2.out' },
            0.18
          )
          .fromTo(
            textSequence,
            { autoAlpha: 0, y: 56 },
            { autoAlpha: 1, y: 0, stagger: 0.06, duration: 0.22, ease: 'power2.out' },
            0.24
          )
          .to(
            contentRef.current,
            { yPercent: -30, autoAlpha: 0.35, duration: 0.42, ease: 'power1.inOut' },
            0.82
          );

        gsap.utils.toArray('.hero-beat').forEach((el, index) => {
          gsap.fromTo(
            el,
            { opacity: 0.6, x: 0 },
            {
              opacity: 1,
              x: 10,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: heroElement,
                start: `top+=${420 + index * 120} top`,
                end: `top+=${640 + index * 140} top`,
                scrub: true
              }
            }
          );
        });

        const canUseMouseParallax = window.matchMedia('(pointer: fine) and (min-width: 901px)').matches;

        if (!canUseMouseParallax) {
          return undefined;
        }

        const xToGlow = gsap.quickTo(glowRef.current, "x", { duration: 0.8, ease: "power3.out" });
        const yToGlow = gsap.quickTo(glowRef.current, "y", { duration: 0.8, ease: "power3.out" });
        const xToParticles = gsap.quickTo(particlesRef.current, "x", { duration: 0.85, ease: "power3.out" });
        const yToParticles = gsap.quickTo(particlesRef.current, "y", { duration: 0.85, ease: "power3.out" });
        const xToParallax = gsap.quickTo(parallaxRef.current, "x", { duration: 0.8, ease: "power2.out" });
        const yToParallax = gsap.quickTo(parallaxRef.current, "y", { duration: 0.8, ease: "power2.out" });

        const onMouseMove = (event) => {
          const { left, top, width, height } = heroElement.getBoundingClientRect();
          const x = (event.clientX - left) / width - 0.5;
          const y = (event.clientY - top) / height - 0.5;

          xToGlow(x * 18);
          yToGlow(y * 12);
          xToParticles(x * 10);
          yToParticles(y * 7);
          xToParallax(x * -7);
          yToParallax(y * -5);
        };

        const onMouseLeave = () => {
          xToGlow(0);
          yToGlow(0);
          xToParticles(0);
          yToParticles(0);
          xToParallax(0);
          yToParallax(0);
        };

        heroElement.addEventListener('mousemove', onMouseMove);
        heroElement.addEventListener('mouseleave', onMouseLeave);

        return () => {
          heroElement.removeEventListener('mousemove', onMouseMove);
          heroElement.removeEventListener('mouseleave', onMouseLeave);
          ScrollTrigger.getAll().forEach((trigger) => {
            if (trigger.vars?.trigger === heroElement) trigger.kill();
          });
        };
      });

      return () => mm.revert();
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      <div className="hero-bg">
        <video
          ref={videoRef}
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
        <div className="nebula-glow" ref={glowRef}></div>
        <div className="particles" ref={particlesRef}>
          {[...Array(13)].map((_, i) => <span key={i} className={`particle p${i+1}`}></span>)}
        </div>
      </div>
      <div className="hero-content" ref={contentRef}>
        <div className="hero-parallax-layer" ref={parallaxRef}>
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