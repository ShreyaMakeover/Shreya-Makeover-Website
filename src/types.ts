export interface Service {
  name: string
  desc: string
  price: string
  ph: string
  img?: string
}

export interface Package {
  name: string
  price: string
  desc: string
  featured: boolean
}

export interface Trust {
  big: string
  label: string
}

export interface GalleryItem {
  label: string
  h: number
  tall?: boolean
  img?: string
}

export interface Testimonial {
  stars: string
  quote: string
  name: string
  initial: string
  tag: string
}

// ----- pricing -----
export interface PriceRow {
  label: string
  /** one entry per value column (columns.length - 1); use '—' for none */
  values: string[]
}

export interface PriceTable {
  title: string
  /** first entry = row-label header, rest = value-column headers */
  columns: string[]
  note?: string
  rows: PriceRow[]
}

export interface PriceGroup {
  id: string
  label: string
  tables: PriceTable[]
}

export interface PackageSitting {
  label: string
  items: string[]
}

export interface PackageTier {
  name: string
  price: string
  badge?: string
  includes?: string[]
  excludes?: string[]
  /** multi-sitting breakdown (pre-bridal packages) */
  sittings?: PackageSitting[]
}

export interface PackageSet {
  id: string
  label: string
  intro?: string
  tiers: PackageTier[]
}
