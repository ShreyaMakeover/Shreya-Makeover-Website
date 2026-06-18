import Hero from '../components/Hero'
import TrustBand from '../components/TrustBand'
import Services from '../components/Services'
import Bridal from '../components/Bridal'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Membership from '../components/Membership'
import { useScrollToHash } from '../hooks/useScrollToHash'

export default function HomePage() {
  useScrollToHash()
  return (
    <main>
      <Hero />
      <TrustBand />
      <About />
      <Services />
      <Bridal />
      <Gallery />
      <Testimonials />
      <Membership />
    </main>
  )
}
