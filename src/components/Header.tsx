import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrolled } from '../hooks/useScrolled'
import { useBooking } from '../booking/BookingContext'
import { WA_HREF } from '../data/content'
import WaDot from './WaDot'
import MobileMenu from './MobileMenu'

// conventional order: About first, Contact last. `to` = route, `hash` = on-page section.
export const NAV: { label: string; hash?: string; to?: string }[] = [
  { hash: '#about', label: 'About' },
  { hash: '#services', label: 'Services' },
  { hash: '#bridal', label: 'Bridal' },
  { hash: '#gallery', label: 'Gallery' },
  { to: '/pricing', label: 'Pricing' },
  { hash: '#contact', label: 'Contact' },
]

export default function Header() {
  const scrolled = useScrolled(24)
  const [menuOpen, setMenuOpen] = useState(false)
  const { open } = useBooking()

  return (
    <>
      <header id="top" className="sticky top-0 z-40 px-3 pt-3 md:px-6 md:pt-4">
        <div
          className={`mx-auto flex h-[54px] max-w-[1200px] items-center justify-between gap-3 rounded-full border px-4 backdrop-blur-xl backdrop-saturate-150 transition-[background-color,box-shadow,border-color] duration-300 md:h-[62px] md:px-6 ${
            scrolled
              ? 'border-white/15 bg-[rgba(22,13,17,0.6)] shadow-[0_16px_44px_-14px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.16)]'
              : 'border-white/10 bg-[rgba(27,16,20,0.42)] shadow-[0_12px_34px_-18px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)]'
          }`}
        >
          <button
            className="flex h-11 w-11 flex-col justify-center gap-[5px] p-[11px] md:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span className="h-[1.6px] rounded bg-text" />
            <span className="h-[1.6px] rounded bg-text" />
            <span className="h-[1.6px] w-[60%] rounded bg-text" />
          </button>

          <Link to="/" aria-label="Shreya Makeover — home" className="flex shrink-0 items-center gap-2 md:gap-[10px]">
            <img
              src="/shreya-logo.png"
              alt=""
              className="h-[42px] w-auto md:h-[52px]"
            />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-[16px] font-semibold tracking-[0.03em] text-text md:text-[21px]">
                Shreya
              </span>
              <span className="mt-[3px] font-serif text-[10px] font-medium uppercase tracking-[0.34em] text-gold md:text-[11.5px]">
                Makeover
              </span>
            </span>
          </Link>

          <nav className="hidden gap-[30px] md:flex" aria-label="Primary">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to ?? { pathname: '/', hash: n.hash! }}
                className="nav-link text-[14.5px] text-ink-2"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener"
              className="hidden items-center gap-[7px] text-sm font-bold text-text md:inline-flex"
            >
              <WaDot size={16} /> WhatsApp
            </a>
            <button className="btn btn-gold btn-sm" onClick={() => open()}>Book</button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onBook={() => { setMenuOpen(false); open() }} />
    </>
  )
}
