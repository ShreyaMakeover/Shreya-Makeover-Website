import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'
import { prefersReducedMotion } from '../hooks/useScrolled'

interface RevealProps {
  children: ReactNode
  /** stagger index — multiplied by 70ms for transition-delay */
  index?: number
  /** element/component to render as (default div) */
  as?: ElementType
  className?: string
  style?: React.CSSProperties
}

/**
 * Fades + slides its content up once it scrolls into view (one-shot).
 * Mirrors the original IntersectionObserver `.reveal` behaviour.
 */
export default function Reveal({ children, index = 0, as: Tag = 'div', className = '', style }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ ['--i' as string]: index, ...style }}
    >
      {children}
    </Tag>
  )
}
