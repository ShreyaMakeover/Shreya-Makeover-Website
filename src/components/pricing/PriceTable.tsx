import type { PriceTable as PriceTableType } from '../../types'

export default function PriceTable({ table }: { table: PriceTableType }) {
  const isSimple = table.columns.length === 2
  const valueCols = table.columns.slice(1)

  return (
    <div className="card rounded-2xl p-5 md:p-6">
      {/* header */}
      <div className="mb-1 flex items-baseline gap-2">
        <span className="text-gold">✿</span>
        <h3 className="font-serif text-[18px] text-text md:text-[19px]">{table.title}</h3>
      </div>
      <div className="mb-3 h-px w-full bg-[rgba(215,169,140,0.22)]" />

      {isSimple ? (
        /* ---- dotted-leader menu rows ---- */
        <ul>
          {table.rows.map((r) => (
            <li key={r.label} className="flex items-baseline gap-3 py-[5px]">
              <span className="text-[13.5px] leading-snug text-ink-2">{r.label}</span>
              <span aria-hidden className="-translate-y-[3px] flex-1 border-b border-dotted border-[rgba(215,169,140,0.35)]" />
              <span
                className={`whitespace-nowrap text-[13.5px] font-bold tabular-nums ${
                  r.values[0] === '—' ? 'text-ink-4' : 'text-gold'
                }`}
              >
                {r.values[0]}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        /* ---- aligned multi-value grid ---- */
        <div className="text-[13px]">
          <div
            className="grid items-baseline gap-x-3 border-b border-[rgba(215,169,140,0.12)] pb-1"
            style={{ gridTemplateColumns: `1fr ${'minmax(0,3.5rem) '.repeat(valueCols.length).trim()}` }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink-4">{table.columns[0]}</span>
            {valueCols.map((c) => (
              <span key={c} className="text-right text-[10px] font-bold uppercase tracking-[0.1em] text-ink-4">{c}</span>
            ))}
          </div>
          {table.rows.map((r) => (
            <div
              key={r.label}
              className="grid items-baseline gap-x-3 border-b border-[rgba(215,169,140,0.07)] py-[7px] last:border-b-0"
              style={{ gridTemplateColumns: `1fr ${'minmax(0,3.5rem) '.repeat(valueCols.length).trim()}` }}
            >
              <span className="leading-snug text-ink-2">{r.label}</span>
              {r.values.map((v, i) => (
                <span
                  key={i}
                  className={`whitespace-nowrap text-right font-bold tabular-nums ${v === '—' ? 'text-ink-4' : 'text-gold'}`}
                >
                  {v}
                </span>
              ))}
            </div>
          ))}
        </div>
      )}

      {table.note && <p className="mt-3 text-[12px] italic leading-[1.5] text-ink-4">{table.note}</p>}
    </div>
  )
}
