import { useBooking } from '../booking/BookingContext'
import { WA_HREF } from '../data/content'
import WaIcon from './WaIcon'

export default function BottomBar() {
  const { open } = useBooking()

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-1 md:hidden">
      <div className="mx-auto flex max-w-[460px] items-center gap-[9px] rounded-full border border-white/10 bg-[rgba(22,13,17,0.5)] p-[7px] shadow-[0_14px_40px_-12px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl backdrop-saturate-150">
        <button className="btn btn-gold btn-block h-[50px] flex-1 text-[15px]" onClick={() => open()}>Book Now</button>
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp us"
          className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-wa text-white no-underline"
        >
          <WaIcon size={26} />
        </a>
      </div>
    </div>
  )
}
