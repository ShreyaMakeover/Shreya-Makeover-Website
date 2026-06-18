import type { Service, Package, Trust, GalleryItem, Testimonial } from '../types'

// ----- owner: edit these -----
export const WA_NUMBER = '918840648059' // WhatsApp number (no +, country code first)
export const WA_TEXT = "Hi Shreya Makeover! I'd like to book an appointment."
export const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`

export const PHONE_DISPLAY = '+91 88406 48059'
export const PHONE_TEL = '+918840648059'
export const EMAIL = 'kesharwanisa254@gmail.com'
export const ADDRESS = 'Near COD Gate, Chaka Block, Dhandi, Prayagraj, Uttar Pradesh'
export const HOURS = 'Mon–Sun · 10:00 AM – 8:00 PM'
export const INSTAGRAM_HANDLE = 'shreya_makeovers_2026'
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`
// Keyless Google Maps embed for the address (no API key required)
export const MAPS_QUERY = ADDRESS
export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=15&output=embed`
export const MAPS_LINK = `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}`

const serviceImg = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=75`

export const SERVICES: Service[] = [
  { name: 'Hair', desc: 'Cuts, colour, keratin & gloss by senior stylists.', price: 'from ₹80', ph: '[ hair styling ]', img: serviceImg('1562322140-8baeececf3df') },
  { name: 'Skin & Facials', desc: 'Hydrafacials, clean-ups & glow rituals.', price: 'from ₹400', ph: '[ facial ]', img: serviceImg('1616394584738-fc6e612e71b9') },
  { name: 'Waxing & Threading', desc: 'Gentle, hygienic, single-use strips.', price: 'from ₹10', ph: '[ waxing ]', img: serviceImg('1584553887083-f943f2440952') },
  { name: 'Nails', desc: 'Gel, extensions & tasteful nail art.', price: 'from ₹1,000', ph: '[ nail art ]', img: serviceImg('1610992015762-45dca7fa3a85') },
  { name: 'Makeup', desc: 'Party, engagement & HD bridal looks.', price: 'from ₹1,500', ph: '[ makeup ]', img: serviceImg('1512496015851-a90fb38ba796') },
  { name: 'Spa', desc: 'Head massage, body polish & calm.', price: 'from ₹200', ph: '[ spa room ]', img: serviceImg('1552693673-1bf958298935') },
]

export const PACKAGES: Package[] = [
  { name: 'Pre-Bridal Glow', price: '₹12,999', desc: 'A 4-week ritual — facials, hair spa, body polish, mani-pedi & a glow plan before your day.', featured: false },
  { name: 'Complete Bridal Journey', price: '₹34,999', desc: 'Everything — pre-bridal weeks, a styling trial, the bridal-day look, draping & a mehendi-day touch-up.', featured: true },
  { name: 'Bridal Day Look', price: '₹18,999', desc: 'HD airbrush makeup, hair styling, saree/lehenga draping & lashes — flawless on camera.', featured: false },
]

export const TRUST: Trust[] = [
  { big: '✦', label: 'Bridal, party & engagement makeup' },
  { big: '✿', label: 'Hygienic, single-use tools' },
  { big: '★', label: 'Loved on Google & Instagram' },
  { big: '✓', label: 'Pay at the salon · book in 30 seconds' },
]

const galleryImg = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=75`

export const GALLERY: GalleryItem[] = [
  { label: 'Before / after · hair colour', h: 150, tall: true, img: galleryImg('1560066984-138dadb4c035') },
  { label: 'Bridal look', h: 110, img: galleryImg('1684868268327-7e5590bcfbd6') },
  { label: 'Glow facial', h: 110, img: galleryImg('1570172619644-dfd03ed5d881') },
  { label: 'Hair styling', h: 150, tall: true, img: galleryImg('1493775379751-a6c3940f3cbc') },
  { label: 'Nail art', h: 120, img: galleryImg('1632345031435-8727f6897d53') },
  { label: 'Happy client', h: 120, img: galleryImg('1595475884562-073c30d45670') },
]

export const TESTIMONIALS: Testimonial[] = [
  { stars: '★★★★★', quote: 'Booked my pre-bridal here and felt cared for at every visit. Calm, clean and never rushed — my skin glowed on the day.', name: 'Aisha R.', initial: 'A', tag: 'Bridal · Prayagraj' },
  { stars: '★★★★★', quote: 'Finally a salon that runs on time and sanitises everything in front of you. My go-to for colour now.', name: 'Neha S.', initial: 'N', tag: 'Hair colour' },
  { stars: '★★★★★', quote: 'The stylists actually listen. Subtle, elegant makeup for my engagement — exactly what I asked for.', name: 'Priya M.', initial: 'P', tag: 'Party makeup' },
]
