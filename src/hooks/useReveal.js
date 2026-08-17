import { useEffect, useRef } from 'react'

/**
 * Lightweight scroll-reveal using IntersectionObserver.
 * Adds `is-revealed` to matching elements once they enter the viewport.
 * Honors `prefers-reduced-motion` (CSS side) and never leaves content hidden.
 */
export default function useReveal({ selectors = ['[data-reveal]'], threshold = 0.1 } = {}) {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      root.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-revealed'))
      return undefined
    }

    const targets = selectors.flatMap((sel) => Array.from(root.querySelectorAll(sel)))

    if (targets.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [selectors, threshold])

  return rootRef
}
