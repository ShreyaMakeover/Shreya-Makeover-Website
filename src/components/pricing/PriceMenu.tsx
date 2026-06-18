import { useMemo, useState } from 'react'
import { PRICE_GROUPS } from '../../data/priceList'
import type { PriceTable as PriceTableType } from '../../types'
import Reveal from '../Reveal'
import PriceTable from './PriceTable'

interface Result {
  group: string
  table: PriceTableType
}

export default function PriceMenu() {
  const [active, setActive] = useState(PRICE_GROUPS[0].id)
  const [query, setQuery] = useState('')

  const q = query.trim().toLowerCase()
  const searching = q.length > 0
  const group = PRICE_GROUPS.find((g) => g.id === active)!

  // When searching, look across EVERY category. A table matches if its
  // category/title contains the query (show all its rows) or any row label
  // contains it (show just those rows).
  const results = useMemo<Result[]>(() => {
    const source = searching ? PRICE_GROUPS : [group]
    const out: Result[] = []
    for (const g of source) {
      for (const t of g.tables) {
        if (!searching) {
          out.push({ group: g.label, table: t })
          continue
        }
        const wholeMatch = g.label.toLowerCase().includes(q) || t.title.toLowerCase().includes(q)
        const rows = wholeMatch ? t.rows : t.rows.filter((r) => r.label.toLowerCase().includes(q))
        if (rows.length) out.push({ group: g.label, table: wholeMatch ? t : { ...t, rows } })
      }
    }
    return out
  }, [searching, q, group])

  return (
    <div>
      {/* tabs (switching also clears any search) */}
      <div className="-mx-5 mb-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0">
        {PRICE_GROUPS.map((g) => (
          <button
            key={g.id}
            onClick={() => { setActive(g.id); setQuery('') }}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-[13.5px] font-bold transition-colors ${
              g.id === active && !searching
                ? 'bg-gold text-[#241621]'
                : 'border border-[rgba(215,169,140,0.25)] text-ink-2 hover:text-gold'
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      {/* search */}
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search any service — e.g. keratin, facial, waxing…"
        aria-label="Search services"
        className="field mb-2 max-w-[420px]"
      />
      {searching && (
        <p className="mb-6 text-[12.5px] text-ink-4">
          {results.length > 0
            ? `Showing matches for “${query.trim()}” across all categories.`
            : ''}
        </p>
      )}
      {!searching && <div className="mb-6" />}

      {/* results */}
      {results.length === 0 ? (
        <p className="py-10 text-center text-[14px] text-ink-3">No services match “{query.trim()}”.</p>
      ) : (
        <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
          {results.map((r, i) => (
            <Reveal key={`${r.group}-${r.table.title}`} index={i % 2} className="mb-5 break-inside-avoid">
              {searching && (
                <div className="mb-1 px-1 text-[11px] font-bold uppercase tracking-[0.12em] text-ink-4">{r.group}</div>
              )}
              <PriceTable table={r.table} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  )
}
