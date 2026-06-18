import { createContext, useCallback, useContext, type ReactNode } from 'react'
import { WA_NUMBER } from '../data/content'

interface BookingContextValue {
  /** Opens WhatsApp chat, pre-filling a booking message (with the service when known). */
  open: (service?: string) => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function useBooking(): BookingContextValue {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used within <BookingProvider>')
  return ctx
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const open = useCallback((service = '') => {
    const text = service
      ? `Hi Shreya Makeover! I'd like to book ${service}.`
      : "Hi Shreya Makeover! I'd like to book an appointment."
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [])

  return <BookingContext.Provider value={{ open }}>{children}</BookingContext.Provider>
}
