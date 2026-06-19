import { useBooking } from '../booking/BookingContext'
import { WA_HREF } from '../data/content'
import WaDot from './WaDot'

export default function Hero() {
  const { open } = useBooking()

  return (
    <section className="relative md:grid md:grid-cols-[1.05fr_1fr] md:min-h-[calc(100dvh-78px)]">
      <div className="hero-media relative flex h-[calc(100dvh-66px)] min-h-[480px] items-start justify-center overflow-hidden sm:min-h-[560px] md:order-2 md:h-auto md:min-h-0 md:items-center">
        <img
          src="/hero.jpg"
          alt="Shreya Makeover salon — calm, spotless studio"
          {...({ fetchpriority: 'high' } as Record<string, string>)}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-scrim absolute inset-0 md:hidden" />
      </div>

      <div className="hero-stagger absolute inset-x-0 bottom-0 mx-auto w-full max-w-[1200px] px-5 pb-[42px] md:static md:order-1 md:flex md:flex-col md:justify-center md:px-14 md:pb-0 md:pt-[76px]">
        <p className="eyebrow mb-2 text-[#f1e4dc] tracking-[0.22em] md:mb-4 md:text-gold md:tracking-[0.24em]">
          Beauty &amp; Makeover Studio · Prayagraj
        </p>
        <h1 className="mb-3 font-serif text-[clamp(2.25rem,7vw,3.625rem)] font-semibold leading-[1.08] text-white text-balance md:mb-[18px] md:leading-[1.05] md:text-text">
          Your quiet place to glow.
        </h1>
        <p className="mb-[22px] max-w-[340px] text-[15px] leading-[1.55] text-[#f3eae3] sm:max-w-[440px] md:mb-[30px] md:max-w-[420px] md:text-[17px] md:leading-[1.6] md:text-ink-2">
          Unhurried hair, skin, makeup &amp; bridal rituals by expert stylists — in a calm, spotless space made for you.
        </p>
        <div className="flex flex-col gap-[11px] md:flex-row md:gap-[13px]">
          <button className="btn btn-gold btn-lg" onClick={() => open()}>Book your appointment</button>
          <a className="btn btn-white btn-lg" href={WA_HREF} target="_blank" rel="noopener">
            <WaDot /> WhatsApp us
          </a>
        </div>
      </div>
    </section>
  )
}
