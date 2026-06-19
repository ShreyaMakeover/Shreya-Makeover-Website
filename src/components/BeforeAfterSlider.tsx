import { useState } from 'react'

interface Props {
  before: string
  after: string
  label: string
}

/**
 * Accessible before/after comparison slider. The full-area range input drives the
 * reveal, so it works with mouse drag, touch, and keyboard (arrow keys) for free.
 */
export default function BeforeAfterSlider({ before, after, label }: Props) {
  const [pos, setPos] = useState(50)

  return (
    <div className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-[14px] bg-surface">
      {/* after = base layer */}
      <img
        src={after}
        alt={`${label} — after`}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* before = top layer, clipped from the left as pos grows */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={before}
          alt={`${label} — before`}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* corner tags */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/55 px-2 py-[3px] text-[10px] font-bold uppercase tracking-[0.1em] text-white">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/55 px-2 py-[3px] text-[10px] font-bold uppercase tracking-[0.1em] text-white">
        After
      </span>

      {/* divider line + grip handle */}
      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
        <div className="mx-auto h-full w-[2px] bg-white/90" />
        <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-black/35 text-white backdrop-blur-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 7l-5 5 5 5" />
            <path d="M15 7l5 5-5 5" />
          </svg>
        </div>
      </div>

      {/* full-area control: drives the reveal (mouse / touch / keyboard) */}
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Reveal before and after for ${label}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  )
}
