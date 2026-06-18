import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BookingProvider } from './booking/BookingContext'
import Header from './components/Header'
import Footer from './components/Footer'
import BottomBar from './components/BottomBar'
import HomePage from './pages/HomePage'

// Pricing is a separate, content-heavy route — load it on demand to keep the
// initial (home) bundle small.
const PricingPage = lazy(() => import('./pages/PricingPage'))

export default function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<Suspense fallback={null}><PricingPage /></Suspense>} />
        </Routes>
        <Footer />
        <BottomBar />
      </BrowserRouter>
    </BookingProvider>
  )
}
