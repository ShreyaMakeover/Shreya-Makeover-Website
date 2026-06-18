import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to the element matching `location.hash` (e.g. arriving at /#services). */
export function useScrollToHash() {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
  }, [hash])
}
