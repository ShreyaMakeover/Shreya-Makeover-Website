import Reveal from './Reveal'

interface Props {
  eyebrow: string
  title: string
  lede?: string
}

export default function SectionHead({ eyebrow, title, lede }: Props) {
  return (
    <Reveal className="mb-[26px] text-center md:mb-10">
      <p className="eyebrow mb-2">{eyebrow}</p>
      <h2 className="font-serif text-[clamp(1.75rem,4.5vw,2.5rem)] font-semibold leading-[1.1] text-text">{title}</h2>
      {lede && (
        <p className="mx-auto mt-2 max-w-[320px] text-[13px] text-ink-3 sm:max-w-md md:max-w-xl md:text-[15px]">{lede}</p>
      )}
    </Reveal>
  )
}
