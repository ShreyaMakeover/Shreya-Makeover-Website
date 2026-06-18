import { useEffect, useState } from 'react'

/** Returns true once the page is scrolled past `threshold` px. */
export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
