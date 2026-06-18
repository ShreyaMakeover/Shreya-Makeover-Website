import { useCallback, useEffect, useRef, useState } from 'react'
import { SERVICES, TIME_SLOTS } from '../data/content'

interface Props {
  isOpen: boolean
  initialService: string
  onClose: () => void
}

interface Form {
  service: string
  date: string
  time: string
  name: string
  phone: string
}

type Errors = Partial<Record<keyof Form, string>>

const blankForm = (service = ''): Form => ({ service, date: '', time: '', name: '', phone: '' })
const todayISO = () => new Date().toISOString().slice(0, 10)

function fmtDate(d: string): string {
  if (!d) return ''
  try {
    return new Date(d + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })
  } catch {
    return d
  }
}

export default function BookingModal({ isOpen, initialService, onClose }: Props) {
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState<Form>(blankForm())
  const [errors, setErrors] = useState<Errors>({})
  const [preset, setPreset] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  // reset + body-scroll lock whenever the modal opens
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = ''
      return
    }
    const sub = Boolean(initialService) // opened for a specific service/package
    setPreset(sub)
    setStep(sub ? 2 : 1) // skip the "which service?" picker when we already know it
    setDone(false)
    setForm(blankForm(initialService))
    setErrors({})
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => closeRef.current?.focus(), 0)
    return () => clearTimeout(t)
  }, [isOpen, initialService])

  // ESC to close
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  const set = (k: keyof Form, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const next = useCallback(() => {
    if (step === 1) {
      if (!form.service) return setErrors({ service: 'Please choose a service to continue.' })
      setErrors({}); setStep(2); return
    }
    if (step === 2) {
      const e: Errors = {}
      if (!form.date) e.date = 'Please pick a date.'
      if (!form.time) e.time = 'Please pick a time slot.'
      if (Object.keys(e).length) return setErrors(e)
      setErrors({}); setStep(3); return
    }
    const e: Errors = {}
    if (!form.name || form.name.trim().length < 2) e.name = 'Please enter your name.'
    if ((form.phone || '').replace(/\D/g, '').length !== 10) e.phone = 'Enter a valid 10-digit mobile number.'
    if (Object.keys(e).length) return setErrors(e)
    setErrors({}); setDone(true)
  }, [step, form])

  if (!isOpen) return null

  const firstName = form.name ? form.name.trim().split(' ')[0] : 'lovely'
  const seq = preset ? [2, 3] : [1, 2, 3] // visible steps (service picker skipped when preset)
  const idx = seq.indexOf(step)

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center bg-[rgba(24,20,15,0.55)] animate-fade"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="max-h-[92vh] w-full max-w-[460px] overflow-y-auto rounded-t-[28px] bg-canvas p-[22px_22px_28px] animate-up"
        role="dialog"
        aria-modal="true"
        aria-label="Book at Shreya Makeover"
      >
        <div className="mb-[6px] flex items-center justify-between">
          <div className="font-serif text-[22px] text-text">Book at Shreya Makeover</div>
          <button
            ref={closeRef}
            className="h-[38px] w-[38px] rounded-full bg-surface-2 text-[18px] text-ink-1"
            aria-label="Close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {!done && (
          <div className="m-[14px_0_20px] flex gap-[6px]">
            {seq.map((n) => (
              <span key={n} className={`progress-seg ${step >= n ? 'active' : ''}`} />
            ))}
          </div>
        )}

        {/* what they're enquiring about (shown once a subject is chosen) */}
        {!done && form.service && step !== 1 && (
          <div className="mb-4 flex items-center justify-between gap-3 rounded-xl bg-surface-2 px-4 py-[10px]">
            <span className="text-[13px] text-ink-2">
              Enquiring about <strong className="text-text">{form.service}</strong>
            </span>
            <button
              className="shrink-0 text-[12px] font-bold text-gold"
              onClick={() => { setPreset(false); setStep(1) }}
            >
              Change
            </button>
          </div>
        )}

        {/* step 1 — service */}
        {!done && step === 1 && (
          <div className="animate-fade">
            <p className="m-0 mb-1 text-[13px] text-ink-4">Step {idx + 1} of {seq.length}</p>
            <h3 className="m-0 mb-4 font-serif text-[21px] font-semibold text-text">Which service?</h3>
            <div className="flex flex-col gap-[9px]">
              {SERVICES.map((s) => (
                <button
                  key={s.name}
                  className={`option ${form.service === s.name ? 'selected' : ''}`}
                  onClick={() => { set('service', s.name); setErrors({}) }}
                >
                  <span className="text-[15px] font-bold text-text">{s.name}</span>
                  <span className="text-[13px] font-bold text-sage">{s.price}</span>
                </button>
              ))}
            </div>
            <p className="m-[6px_0_8px] min-h-[16px] text-[12.5px] text-err">{errors.service ?? ''}</p>
          </div>
        )}

        {/* step 2 — date/time */}
        {!done && step === 2 && (
          <div className="animate-fade">
            <p className="m-0 mb-1 text-[13px] text-ink-4">Step {idx + 1} of {seq.length}</p>
            <h3 className="m-0 mb-4 font-serif text-[21px] font-semibold text-text">Pick a date &amp; time</h3>
            <label className="mb-[7px] block text-[13px] font-bold text-ink-2" htmlFor="dateInput">Preferred date</label>
            <input
              id="dateInput"
              type="date"
              className="field"
              min={todayISO()}
              value={form.date}
              onChange={(e) => { set('date', e.target.value); setErrors((x) => ({ ...x, date: '' })) }}
            />
            <p className="m-[6px_0_8px] min-h-[16px] text-[12.5px] text-err">{errors.date ?? ''}</p>
            <label className="mb-[7px] block text-[13px] font-bold text-ink-2">Preferred time</label>
            <div className="grid grid-cols-3 gap-2">
              {TIME_SLOTS.map((t) => (
                <button
                  key={t}
                  className={`slot ${form.time === t ? 'selected' : ''}`}
                  onClick={() => { set('time', t); setErrors((x) => ({ ...x, time: '' })) }}
                >
                  {t}
                </button>
              ))}
            </div>
            <p className="m-[6px_0_8px] min-h-[16px] text-[12.5px] text-err">{errors.time ?? ''}</p>
          </div>
        )}

        {/* step 3 — details */}
        {!done && step === 3 && (
          <div className="animate-fade">
            <p className="m-0 mb-1 text-[13px] text-ink-4">Step {idx + 1} of {seq.length}</p>
            <h3 className="m-0 mb-4 font-serif text-[21px] font-semibold text-text">Your details</h3>
            <label className="mb-[7px] block text-[13px] font-bold text-ink-2" htmlFor="nameInput">Name</label>
            <input
              id="nameInput"
              type="text"
              className="field"
              placeholder="Your full name"
              value={form.name}
              onChange={(e) => { set('name', e.target.value); setErrors((x) => ({ ...x, name: '' })) }}
            />
            <p className="m-[6px_0_8px] min-h-[16px] text-[12.5px] text-err">{errors.name ?? ''}</p>
            <label className="mb-[7px] block text-[13px] font-bold text-ink-2" htmlFor="phoneInput">Phone (WhatsApp)</label>
            <input
              id="phoneInput"
              type="tel"
              className="field"
              inputMode="numeric"
              placeholder="10-digit mobile number"
              value={form.phone}
              onChange={(e) => { set('phone', e.target.value); setErrors((x) => ({ ...x, phone: '' })) }}
            />
            <p className="m-[6px_0_8px] min-h-[16px] text-[12.5px] text-err">{errors.phone ?? ''}</p>
            <div className="mt-2 flex items-start gap-2 rounded-xl bg-[rgba(215,169,140,0.1)] p-[12px_14px] text-[12.5px] text-[#d8b9ac]">
              <span className="text-[14px]">✓</span>
              <span>No online payment needed — simply <strong>pay at the salon</strong> after your service.</span>
            </div>
          </div>
        )}

        {/* confirmation */}
        {done && (
          <div className="p-[14px_0_6px] text-center">
            <div className="done-check draw mx-auto mb-[18px] mt-[6px] flex h-[72px] w-[72px] items-center justify-center rounded-full bg-sage animate-pop">
              <svg viewBox="0 0 52 52" aria-hidden="true">
                <circle className="dc-ring" cx="26" cy="26" r="23" />
                <path className="dc-tick" d="M15 27 l8 8 l15 -16" />
              </svg>
            </div>
            <h3 className="m-0 mb-2 font-serif text-[24px] font-semibold text-text">You're booked in!</h3>
            <p className="m-0 mb-[18px] text-[14px] leading-[1.6] text-ink-2">
              Thank you, {firstName} — we can't wait to see you.
            </p>
            <div className="mb-[18px] rounded-[14px] bg-surface p-4 text-left text-[13.5px] leading-[1.9] text-ink-1 shadow-[0_10px_26px_-20px_rgba(0,0,0,0.6)]">
              <div><span className="text-ink-4">Service</span> · <strong>{form.service || '—'}</strong></div>
              <div><span className="text-ink-4">When</span> · <strong>{(fmtDate(form.date) + (form.time ? ' · ' + form.time : '')) || '—'}</strong></div>
              <div><span className="text-ink-4">Name</span> · <strong>{form.name || '—'}</strong></div>
            </div>
            <p className="m-0 mb-4 text-[12px] text-ink-4">A Shreya Makeover stylist will confirm on WhatsApp shortly. Pay at the salon.</p>
            <button className="btn btn-gold btn-block" onClick={onClose}>Done</button>
          </div>
        )}

        {/* nav */}
        {!done && (
          <div className="mt-[22px] flex gap-[10px]">
            {idx > 0 && (
              <button className="btn btn-outline h-[52px] text-[15px]" onClick={() => { setStep((s) => Math.max(seq[0], s - 1)); setErrors({}) }}>
                Back
              </button>
            )}
            <button className="btn btn-gold h-[52px] flex-1 text-[15px]" onClick={next}>
              {step === 3 ? 'Confirm booking' : 'Continue'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
