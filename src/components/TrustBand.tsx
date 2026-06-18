import { TRUST } from '../data/content'
import Reveal from './Reveal'
import CountUp from './CountUp'

export default function TrustBand() {
  return (
    <section className="border-y border-[rgba(215,169,140,0.2)] bg-canvas-2" aria-label="Why clients trust Shreya Makeover">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 md:grid-cols-4">
        {TRUST.map((t, i) => (
          <Reveal
            key={t.label}
            index={i}
            className="flex flex-col items-center gap-[3px] px-4 py-4 text-center md:border-r md:border-[rgba(215,169,140,0.16)] md:px-[18px] md:py-[22px] md:last:border-r-0"
          >
            <CountUp value={t.big} className="trust-symbol font-serif text-[19px] text-sage md:text-[24px]" />
            <div className="text-[11.5px] leading-[1.35] text-ink-2 md:text-[13px]">{t.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
