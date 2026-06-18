import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import { WA_NUMBER } from '../data/content'

interface BookingContextValue {
  open: (service?: string) => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function useBooking(): BookingContextValue {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used within <BookingProvider>')
  return ctx
}

export interface BookingState {
  isOpen: boolean
  service: string
}

export function BookingProvider({
  children,
  render,
}: {
  children: ReactNode
  /** render-prop for the modal so the provider stays state-only */
  render: (state: BookingState, close: () => void) => ReactNode
}) {
  const [state, setState] = useState<BookingState>({ isOpen: false, service: '' })
  // Every "Book"/"Enquire" action redirects to WhatsApp, pre-filling a message
  // (with the chosen service, when known) so the client lands in chat ready to book.
  const open = useCallback((service = '') => {
    const text = service
      ? `Hi Shreya Makeover! I'd like to book ${service}.`
      : "Hi Shreya Makeover! I'd like to book an appointment."
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [])
  const close = useCallback(() => setState((s) => ({ ...s, isOpen: false })), [])

  return (
    <BookingContext.Provider value={{ open }}>
      {children}
      {render(state, close)}
    </BookingContext.Provider>
  )
}
