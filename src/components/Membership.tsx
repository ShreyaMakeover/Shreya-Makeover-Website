import { useBooking } from '../booking/BookingContext'
import Reveal from './Reveal'

export default function Membership() {
  const { open } = useBooking()

  return (
    <section className="pt-2 pb-10 md:pb-[70px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-[18px] px-5 md:flex-row md:gap-6 md:px-14">
        <Reveal
          className="relative flex-[1.1] overflow-hidden rounded-[22px] bg-darkcard p-[26px_22px] text-[#f5efe8] md:rounded-3xl md:p-[44px_42px]"
        >
          <div
            className="membership-blob pointer-events-none absolute -right-[30px] -top-[30px] h-[130px] w-[130px] rounded-full md:-right-10 md:-top-10 md:h-[180px] md:w-[180px]"
            style={{ background: 'radial-gradient(circle, rgba(201,138,161,.30) 0%, rgba(201,138,161,0) 70%)' }}
          />
          <p className="eyebrow relative">Membership</p>
          <h2 className="relative m-0 mb-2 mt-2 font-serif text-[24px] text-white md:mb-3 md:text-[34px]">The Shreya Circle</h2>
          <p className="relative m-0 mb-4 text-[13px] leading-[1.6] text-[#d6c2bf] md:mb-6 md:max-w-[360px] md:text-[15px] md:leading-[1.65]">
            15% off every service, priority bridal slots, and a birthday-month glow facial on us.
          </p>
          <button className="btn btn-gold relative" onClick={() => open()}>Join the Circle</button>
        </Reveal>

        <Reveal
          index={1}
          className="flex flex-1 flex-col items-center justify-center rounded-[22px] border border-[rgba(215,169,140,0.28)] p-[30px_18px] text-center md:rounded-3xl md:p-[44px_36px]"
          style={{ background: 'linear-gradient(135deg,#3A2230 0%,#271820 100%)' }}
        >
          <h2 className="m-0 mb-[6px] font-serif text-[26px] text-text md:text-[34px]">Ready to glow?</h2>
          <p className="m-0 mb-[18px] text-[14px] text-ink-2 md:text-[15px]">Book in 30 seconds — pay at the salon.</p>
          <button className="btn btn-gold btn-lg" onClick={() => open()}>Book your appointment</button>
        </Reveal>
      </div>
    </section>
  )
}
