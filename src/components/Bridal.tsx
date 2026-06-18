import { Link } from 'react-router-dom'
import { HOME_BRIDAL } from '../data/packages'
import SectionHead from './SectionHead'
import PackageCards from './pricing/PackageCards'

export default function Bridal() {
  return (
    <section
      id="bridal"
      className="section-shell scroll-mt-[72px]"
      style={{ background: 'linear-gradient(180deg,#22151B 0%,#180D12 100%)' }}
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-14">
        <SectionHead
          eyebrow="For the big days"
          title="Bridal & party packages"
          lede="Curated journeys with a dedicated stylist and a private bridal room."
        />
        <PackageCards tiers={HOME_BRIDAL} />
        <div className="mt-8 text-center">
          <Link to="/pricing" className="text-[14px] font-bold text-gold no-underline">
            See full price list &amp; all packages →
          </Link>
        </div>
      </div>
    </section>
  )
}
