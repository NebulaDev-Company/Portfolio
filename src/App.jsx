import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const mainRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const revealSelectors = [
        '.about-content h2',
        '.about-content p',
        '.about-bullets li',
        '.services-section h2',
        '.service-card',
        '.portfolio-section h2',
        '.portfolio-card',
        '.contact-section h2',
        '.contact-left',
        '.contact-right'
      ]

      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: reduce)', () => {
        revealSelectors.forEach((selector) => {
          gsap.utils.toArray(selector).forEach((el) => {
            gsap.fromTo(
              el,
              { autoAlpha: 0, y: 18 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.45,
                ease: 'power1.out',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 90%',
                  once: true
                }
              }
            )
          })
        })
      })

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        revealSelectors.forEach((selector) => {
          gsap.utils.toArray(selector).forEach((el, index) => {
            gsap.fromTo(
              el,
              { autoAlpha: 0, y: 46 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.9,
                ease: 'power3.out',
                delay: Math.min(index * 0.04, 0.2),
                scrollTrigger: {
                  trigger: el,
                  start: 'top 86%',
                  once: true
                }
              }
            )
          })
        })
      })

      return () => mm.revert()
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Header />
      <main ref={mainRef}>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
