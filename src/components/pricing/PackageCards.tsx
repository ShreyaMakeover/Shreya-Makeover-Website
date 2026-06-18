import type { PackageTier } from '../../types'
import { useBooking } from '../../booking/BookingContext'
import Reveal from '../Reveal'

export default function PackageCards({ tiers }: { tiers: PackageTier[] }) {
  const { open } = useBooking()
  return (
    <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 md:grid-cols-3 md:items-stretch md:gap-[22px]">
      {tiers.map((t, i) => (
        <Reveal
          key={t.name}
          index={i}
          as="article"
          className={`card relative flex flex-col rounded-[20px] p-[24px_22px] md:rounded-[22px] md:p-[30px_28px] ${
            t.badge ? 'featured-glow border-[1.5px] border-gold' : 'border border-[rgba(215,169,140,0.22)]'
          }`}
        >
          {t.badge && (
            <span className="absolute -top-[11px] left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-[5px] text-[10.5px] font-bold uppercase tracking-[0.1em] text-white md:-top-[13px] md:text-[11px]">
              {t.badge}
            </span>
          )}
          <h3 className="font-serif text-[20px] text-text md:text-[22px]">{t.name}</h3>
          <p className="mb-3 mt-1 font-serif text-[26px] text-sage md:text-[30px]">{t.price}</p>

          {t.sittings ? (
            <div className="mb-5 flex flex-1 flex-col gap-[14px]">
              {t.sittings.map((s) => (
                <div key={s.label}>
                  <div className="mb-[6px] text-[11px] font-bold uppercase tracking-[0.1em] text-gold">{s.label}</div>
                  <ul className="flex flex-col gap-[5px]">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-[12.5px] leading-[1.4] text-ink-2">
                        <span className="mt-[2px] text-gold">·</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="mb-5 flex flex-1 flex-col gap-[7px]">
              {t.includes?.map((inc) => (
                <li key={inc} className="flex items-start gap-2 text-[13px] leading-[1.45] text-ink-2">
                  <span className="mt-[1px] text-gold">✓</span>
                  <span>{inc}</span>
                </li>
              ))}
              {t.excludes?.map((exc) => (
                <li key={exc} className="flex items-start gap-2 text-[13px] leading-[1.45] text-ink-4 line-through decoration-ink-4/50">
                  <span className="mt-[1px] no-underline">✘</span>
                  <span>{exc}</span>
                </li>
              ))}
            </ul>
          )}
          <button
            className={`btn ${t.badge ? 'btn-gold' : 'btn-ghost-gold'} h-[46px] w-full`}
            onClick={() => open(t.name)}
          >
            Enquire
          </button>
        </Reveal>
      ))}
    </div>
  )
}
