import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BookingProvider } from './booking/BookingContext'
import BookingModal from './booking/BookingModal'
import Header from './components/Header'
import Footer from './components/Footer'
import BottomBar from './components/BottomBar'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'

export default function App() {
  return (
    <BookingProvider
      render={(state, close) => (
        <BookingModal isOpen={state.isOpen} initialService={state.service} onClose={close} />
      )}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        <Footer />
        <BottomBar />
      </BrowserRouter>
    </BookingProvider>
  )
}
