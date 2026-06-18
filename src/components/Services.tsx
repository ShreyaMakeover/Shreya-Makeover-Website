import { SERVICES } from '../data/content'
import { useBooking } from '../booking/BookingContext'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Services() {
  const { open } = useBooking()

  return (
    <section id="services" className="section-shell scroll-mt-[72px]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-14">
        <SectionHead eyebrow="What we do" title="Services & care" />
        <div className="grid grid-cols-2 gap-[14px] md:grid-cols-3 md:gap-[22px]">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.name}
              index={i}
              as="article"
              className="service-card card card-hoverable overflow-hidden rounded-[18px]"
            >
              <div className="service-photo relative h-24 overflow-hidden px-[6px] text-[10px] md:h-[150px] md:text-[11px]">
                {s.img ? (
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  s.ph
                )}
              </div>
              <div className="p-[13px_14px_15px] md:p-[22px_24px_24px]">
                <div className="mb-2 flex items-baseline justify-between">
                  <div className="font-serif text-[17px] text-text md:text-[22px]">{s.name}</div>
                  <span className="hidden text-[14px] font-bold text-sage md:inline">{s.price}</span>
                </div>
                <div className="mb-[10px] min-h-[32px] text-[11.5px] leading-[1.4] text-ink-3 md:mb-[18px] md:min-h-0 md:text-[14px] md:leading-[1.55]">
                  {s.desc}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-bold text-sage md:hidden">{s.price}</span>
                  <button
                    className="btn btn-ghost-gold h-[34px] px-[14px] text-[12px] md:h-[42px] md:px-[22px] md:text-[13.5px]"
                    onClick={() => open(s.name)}
                  >
                    Book
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
