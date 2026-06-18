import { TESTIMONIALS } from '../data/content'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Testimonials() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-[1200px] px-5 md:px-14">
        <SectionHead eyebrow="Loved by our clients" title="What clients say" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-[22px]">
          {TESTIMONIALS.map((r, i) => (
            <Reveal
              key={r.name}
              index={i}
              as="article"
              className="card card-hoverable rounded-2xl p-[16px_18px] md:p-[26px]"
            >
              <div className="mb-2 text-[13px] tracking-[2px] text-gold md:mb-3 md:text-[15px]">{r.stars}</div>
              <p className="m-0 mb-3 text-[13.5px] italic leading-[1.6] text-ink-1 md:mb-[18px] md:text-[15px] md:leading-[1.65]">
                {r.quote}
              </p>
              <div className="flex items-center gap-[10px]">
                <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-blush font-serif text-[15px] text-white md:h-10 md:w-10 md:text-[17px]">
                  {r.initial}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-text md:text-[14.5px]">{r.name}</div>
                  <div className="text-[11px] text-ink-4 md:text-[12px]">{r.tag}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
