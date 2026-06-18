import { GALLERY, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/content'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Gallery() {
  return (
    <section id="gallery" className="section-shell scroll-mt-[72px]">
      <div className="mx-auto max-w-[1200px] px-5 md:px-14">
        <SectionHead eyebrow="Real results" title="Gallery & transformations" />
        <div className="grid grid-cols-2 gap-[10px] md:grid-cols-4 md:gap-[14px]">
          {GALLERY.map((g, i) => (
            <Reveal
              key={g.label}
              index={i}
              className={`gallery-cell rounded-[14px] p-2 text-[10px] md:rounded-2xl md:text-[11px] ${
                g.tall ? 'md:row-span-2' : ''
              }`}
              style={{ height: g.h }}
            >
              {g.img && (
                <img
                  src={g.img}
                  alt={g.label}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              <span className="gallery-caption">{g.label}</span>
            </Reveal>
          ))}
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener"
          className="mt-[18px] block text-center text-[13px] font-bold text-gold no-underline md:hidden"
        >
          Follow @{INSTAGRAM_HANDLE} on Instagram →
        </a>
      </div>
    </section>
  )
}
