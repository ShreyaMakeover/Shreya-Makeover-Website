import { ADDRESS, EMAIL, HOURS, MAPS_EMBED_URL, MAPS_LINK, PHONE_DISPLAY, PHONE_TEL, WA_HREF } from '../data/content'

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-[72px] bg-footer pb-24 pt-9 text-[#d7c6c4] md:px-0 md:pb-[30px] md:pt-14">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[22px] px-5 md:grid md:grid-cols-3 md:gap-10 md:px-14">
        <div>
          <div className="mb-1 font-serif text-[26px] text-white md:text-[30px]">Shreya Makeover</div>
          <p className="mb-[18px] text-[13px] leading-[1.6] text-[#b6a3a1]">your quiet place to glow.</p>
          <address className="flex flex-col gap-[10px] text-[13.5px] not-italic">
            <div className="text-[#cdbab8]"><span aria-hidden="true">📍 </span>{ADDRESS}</div>
            <a href={`tel:${PHONE_TEL}`} className="text-[#f0e8df] no-underline"><span aria-hidden="true">📞 </span>{PHONE_DISPLAY} — tap to call</a>
            <a href={WA_HREF} target="_blank" rel="noopener" className="text-[#f0e8df] no-underline"><span aria-hidden="true">💬 </span>WhatsApp us</a>
            <a href={`mailto:${EMAIL}`} className="text-[#f0e8df] no-underline"><span aria-hidden="true">✉️ </span>{EMAIL}</a>
            <div className="text-[#cdbab8]"><span aria-hidden="true">🕑 </span>{HOURS}</div>
          </address>
        </div>

        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener"
          aria-label="Open Shreya Makeover location in Google Maps"
          className="block h-[150px] overflow-hidden rounded-[14px] border border-[rgba(215,169,140,0.18)] md:h-[200px]"
        >
          <iframe
            title="Shreya Makeover — Prayagraj location"
            src={MAPS_EMBED_URL}
            className="pointer-events-none h-full w-full border-0"
            style={{ filter: 'grayscale(0.3) contrast(1.05) brightness(0.92)' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </a>

        <div className="flex flex-col items-start justify-center">
          <p className="eyebrow mb-3 text-[12px] tracking-[0.14em]">Get in touch</p>
          <p className="mb-4 text-[13.5px] leading-[1.6] text-[#b6a3a1]">
            Message us on WhatsApp to book or ask anything — we usually reply within minutes.
          </p>
          <a href={WA_HREF} target="_blank" rel="noopener" className="btn btn-gold rounded-[10px]">
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-[22px] max-w-[1200px] px-5 text-center text-[11px] text-[#8f7a78] md:mt-9 md:border-t md:border-[rgba(255,255,255,0.12)] md:px-14 md:pt-[22px]">
        © 2026 Shreya Makeover · Made with care
      </div>
    </footer>
  )
}
