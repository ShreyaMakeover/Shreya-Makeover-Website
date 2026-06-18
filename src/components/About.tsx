import Reveal from './Reveal'

const aboutImg = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=75`

const FOUNDER_IMG = aboutImg('1521146764736-56c929d59c83')
const TEAM_IMG = aboutImg('1559599101-f09722fb4948')
const SPACE_IMG = aboutImg('1560869713-7d0a29430803')

export default function About() {
  return (
    <section id="about" className="section-shell scroll-mt-[72px] bg-canvas-2">
      <div className="mx-auto max-w-[1200px] items-center gap-[50px] px-5 md:grid md:grid-cols-2 md:px-14">
        <Reveal className="mb-[18px] flex gap-[14px] md:mb-0">
          <div className="ph-founder relative h-[84px] w-[84px] shrink-0 overflow-hidden rounded-full md:h-[220px] md:w-auto md:flex-1 md:rounded-[18px]">
            <img src={FOUNDER_IMG} alt="Founder" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="grid flex-1 grid-cols-2 gap-2 md:grid-cols-1 md:gap-[14px]">
            <div className="relative h-[70px] overflow-hidden rounded-xl md:h-[103px] md:rounded-[18px]">
              <img src={TEAM_IMG} alt="Our team" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="relative h-[70px] overflow-hidden rounded-xl md:h-[103px] md:rounded-[18px]">
              <img src={SPACE_IMG} alt="Our space" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </Reveal>

        <Reveal index={1}>
          <p className="eyebrow text-left">Our story</p>
          <h2 className="mb-[14px] mt-2 font-serif text-[24px] font-semibold text-text md:mb-[18px] md:text-[40px]">
            Care, not rush.
          </h2>
          <p className="m-0 text-[14px] leading-[1.7] text-ink-2 md:text-[16px] md:leading-[1.75]">
            Shreya Makeover began with a simple idea — that beauty should feel calm, honest and spotless. Founder{' '}
            <strong>Shreya</strong> built a space where every tool is sanitised in front of you, every stylist is a
            senior professional, and every appointment runs on time.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
