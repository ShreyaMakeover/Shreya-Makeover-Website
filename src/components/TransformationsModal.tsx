import { useEffect } from 'react'
import { TRANSFORMATIONS } from '../data/content'
import BeforeAfterSlider from './BeforeAfterSlider'

interface Props {
  open: boolean
  onClose: () => void
}

export default function TransformationsModal({ open, onClose }: Props) {
  // lock body scroll + close on Escape while open
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="animate-fade fixed inset-0 z-50 flex justify-center overflow-y-auto bg-[rgba(15,9,12,0.8)] p-4 backdrop-blur-sm md:p-8"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label="Before and after transformations"
    >
      <div className="relative my-auto w-full max-w-[820px] rounded-[20px] border border-[rgba(215,169,140,0.18)] bg-canvas p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] md:p-8">
        <button
          onClick={onClose}
          aria-label="Close transformations"
          autoFocus
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(215,169,140,0.25)] text-[15px] text-text transition-colors hover:border-gold hover:text-gold"
        >
          ✕
        </button>

        <p className="eyebrow mb-2">Real results</p>
        <h2 className="mb-1 font-serif text-[clamp(1.5rem,4vw,2rem)] font-semibold leading-[1.1] text-text">
          Before &amp; after
        </h2>
        <p className="mb-6 text-[13px] leading-[1.5] text-ink-3 md:text-[14px]">
          Drag the slider on each photo to reveal the transformation.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {TRANSFORMATIONS.map((t) => (
            <div key={t.label}>
              <BeforeAfterSlider before={t.before} after={t.after} label={t.label} />
              <p className="mt-2 text-center text-[13px] font-semibold text-ink-2">{t.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
