import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BRIDAL_RULES, PACKAGE_SETS } from '../data/packages'
import PriceMenu from '../components/pricing/PriceMenu'
import PackageCards from '../components/pricing/PackageCards'
import Reveal from '../components/Reveal'

export default function PricingPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="pb-24 md:pb-[70px]">
      {/* page heading */}
      <section className="border-b border-[rgba(215,169,140,0.16)] bg-canvas-2 px-5 pb-10 pt-12 md:px-14 md:pb-14 md:pt-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="eyebrow mb-2">Transparent &amp; honest</p>
          <h1 className="font-serif text-[34px] font-semibold leading-[1.1] text-text md:text-[48px]">Price list</h1>
          <p className="mt-3 max-w-[560px] text-[14px] leading-[1.6] text-ink-2 md:text-[16px]">
            Every service and package, priced upfront. Pay at the salon — no online payment needed.
            Prices in ₹; premium add-ons may vary by hair length, skin concern and design.
          </p>
        </div>
      </section>

      {/* searchable menu */}
      <section className="px-5 pt-10 md:px-14 md:pt-14">
        <div className="mx-auto max-w-[1200px]">
          <PriceMenu />
        </div>
      </section>

      {/* packages */}
      <section className="px-5 pt-14 md:px-14 md:pt-20">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="mb-8 text-center">
            <p className="eyebrow mb-2">For the big days</p>
            <h2 className="font-serif text-[28px] font-semibold text-text md:text-[40px]">Bridal, makeup &amp; party packages</h2>
          </Reveal>
          <div className="flex flex-col gap-12">
            {PACKAGE_SETS.map((set) => (
              <div key={set.id}>
                <h3 className="mb-1 font-serif text-[22px] text-text md:text-[26px]">{set.label}</h3>
                {set.intro && <p className="mb-5 max-w-[640px] text-[13.5px] leading-[1.55] text-ink-3">{set.intro}</p>}
                {!set.intro && <div className="mb-5" />}
                <PackageCards tiers={set.tiers} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* bridal rules */}
      <section className="px-5 pt-14 md:px-14 md:pt-20">
        <div className="mx-auto max-w-[1200px]">
          <Reveal className="card rounded-2xl p-6 md:p-9">
            <h3 className="mb-4 font-serif text-[20px] text-text md:text-[24px]">Bridal — rules &amp; regulations</h3>
            <ul className="grid gap-[10px] md:grid-cols-2">
              {BRIDAL_RULES.map((r) => (
                <li key={r} className="flex items-start gap-2 text-[13.5px] leading-[1.5] text-ink-2">
                  <span className="mt-[2px] text-gold">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <div className="px-5 pt-12 text-center md:px-14">
        <Link to={{ pathname: '/', hash: '#top' }} className="text-[14px] font-bold text-gold no-underline">
          ← Back to home
        </Link>
      </div>
    </main>
  )
}
