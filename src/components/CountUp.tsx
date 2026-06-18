import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../hooks/useScrolled'

interface CountUpProps {
  /** the final display string, e.g. "★ 4.8", "10,000+", or "✿" (non-numeric stays static) */
  value: string
  className?: string
}

interface Parsed {
  prefix: string
  suffix: string
  target: number
  decimals: number
  grouped: boolean
}

function parse(value: string): Parsed | null {
  const m = /^(\D*)([\d,]+(?:\.\d+)?)(\D*)$/.exec(value.trim())
  if (!m) return null
  return {
    prefix: m[1],
    suffix: m[3],
    target: parseFloat(m[2].replace(/,/g, '')),
    decimals: m[2].indexOf('.') >= 0 ? 1 : 0,
    grouped: m[2].indexOf(',') >= 0,
  }
}

function format(p: Parsed, v: number): string {
  let s = v.toFixed(p.decimals)
  if (p.grouped) {
    s = Number(s).toLocaleString('en-IN', {
      minimumFractionDigits: p.decimals,
      maximumFractionDigits: p.decimals,
    })
  }
  return p.prefix + s + p.suffix
}

/** Animates numeric trust stats from 0 → target when scrolled into view. */
export default function CountUp({ value, className = '' }: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const parsed = parse(value)
  const [text, setText] = useState(
    parsed && !prefersReducedMotion() ? format(parsed, 0) : value,
  )

  useEffect(() => {
    if (!parsed || prefersReducedMotion() || !('IntersectionObserver' in window)) return
    const node = ref.current
    if (!node) return

    let raf = 0
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        io.disconnect()
        const dur = 1200
        let start: number | null = null
        const step = (ts: number) => {
          if (start === null) start = ts
          const t = Math.min((ts - start) / dur, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setText(format(parsed, parsed.target * eased))
          if (t < 1) raf = requestAnimationFrame(step)
          else setText(format(parsed, parsed.target))
        }
        raf = requestAnimationFrame(step)
      },
      { threshold: 0.4 },
    )
    io.observe(node)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <div ref={ref} className={className}>{text}</div>
}
