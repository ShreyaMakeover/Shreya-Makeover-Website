import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NAV } from './Header'

interface Props {
  open: boolean
  onClose: () => void
  onBook: () => void
}

export default function MobileMenu({ open, onClose, onBook }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-[rgba(24,20,15,0.4)] animate-fade md:hidden"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <nav
        className="absolute left-0 top-0 flex h-full w-[78%] max-w-[320px] flex-col gap-1 bg-canvas px-[26px] py-[30px] shadow-[14px_0_40px_-10px_rgba(0,0,0,0.5)]"
        style={{ animation: 'niraaSlideX .3s var(--ease-soft) both' }}
        aria-label="Mobile"
      >
        <div className="mb-[18px] font-serif text-[24px] text-text">Shreya Makeover</div>
        {NAV.map((n) => (
          <Link
            key={n.label}
            to={n.to ?? { pathname: '/', hash: n.hash! }}
            onClick={onClose}
            className="border-b border-[rgba(201,183,164,0.3)] px-2 py-[14px] text-[17px] text-text no-underline"
          >
            {n.label}
          </Link>
        ))}
        <button className="btn btn-gold mt-[22px] h-[50px] text-[15px]" onClick={onBook}>
          Book an appointment
        </button>
      </nav>
    </div>
  )
}
