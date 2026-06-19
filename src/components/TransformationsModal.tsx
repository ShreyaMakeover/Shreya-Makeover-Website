import { useEffect, useState } from 'react'
import { HAIR_PHOTOS, TRANSFORMATIONS } from '../data/content'
import BeforeAfterSlider from './BeforeAfterSlider'

interface Props {
  open: boolean
  onClose: () => void
}

type Tab = 'bridal' | 'hair'

export default function TransformationsModal({ open, onClose }: Props) {
  const [tab, setTab] = useState<Tab>('bridal')

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
        <h2 className="mb-4 font-serif text-[clamp(1.5rem,4vw,2rem)] font-semibold leading-[1.1] text-text">
          Our transformations
        </h2>

        {/* tabs */}
        <div className="mb-5 flex gap-2" role="tablist" aria-label="Transformation categories">
          {(['bridal', 'hair'] as Tab[]).map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2 text-[13.5px] font-bold capitalize transition-colors ${
                tab === t
                  ? 'bg-gold text-[#241621]'
                  : 'border border-[rgba(215,169,140,0.25)] text-ink-2 hover:text-gold'
              }`}
            >
              {t === 'bridal' ? 'Bridal' : 'Hair'}
            </button>
          ))}
        </div>

        {tab === 'bridal' ? (
          <>
            <p className="mb-5 text-[13px] leading-[1.5] text-ink-3 md:text-[14px]">
              Drag the slider on each photo to reveal the before &amp; after.
            </p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {TRANSFORMATIONS.map((t) => (
                <div key={t.label}>
                  <BeforeAfterSlider before={t.before} after={t.after} label={t.label} />
                  <p className="mt-2 text-center text-[13px] font-semibold text-ink-2">{t.label}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
            {HAIR_PHOTOS.map((src, i) => (
              <div key={src} className="aspect-[3/4] overflow-hidden rounded-[14px] bg-surface">
                <img
                  src={src}
                  alt={`Hair styling ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
