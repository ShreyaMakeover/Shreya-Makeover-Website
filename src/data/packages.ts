import type { PackageSet, PackageTier } from '../types'

export const PACKAGE_SETS: PackageSet[] = [
  {
    id: 'pre-bridal',
    label: 'Pre-Bridal Journeys',
    intro: 'Multi-sitting rituals to glow before the big day. Book bridal + pre-bridal together for up to 50% off the Gold package. (Bikini wax is extra in Bronze & Gold.)',
    tiers: [
      {
        name: 'Silver',
        price: '₹5,999',
        sittings: [
          {
            label: 'Sitting 1 (single sitting)',
            items: [
              'Only Life Advance Facial',
              'Only Life Bleach & De-Tan',
              'Manicure',
              'Pedicure',
              'Body Bleach (Fruit)',
              'Body Wax (Aloevera)',
              'Body Polishing',
              'Hair Spa',
              'Threading',
              'Upper Lips',
            ],
          },
        ],
      },
      {
        name: 'Bronze',
        price: '₹8,999',
        badge: 'Most loved',
        sittings: [
          {
            label: 'Sitting 1',
            items: [
              'VLCC Facial Professional',
              'Hydra Bleach & De-Tan',
              'Manicure',
              'Pedicure',
              'Arms Wax',
              'Legs Wax',
              'Hair Spa',
            ],
          },
          {
            label: 'Sitting 2',
            items: [
              'Aroma Magic Glow Facial',
              'Hydra Bleach & De-Tan',
              'Manicure',
              'Pedicure',
              'Hair Spa',
              'Full Body Wax (Aloevera)',
              'Full Body Polishing',
              'Threading',
              'Upper Lips',
            ],
          },
        ],
      },
      {
        name: 'Gold',
        price: '₹12,999',
        sittings: [
          {
            label: 'Sitting 1',
            items: [
              'O3+ Facial',
              'Keratin Bleach & De-Tan',
              'Manicure + De-Tan Bleach',
              'Pedicure + De-Tan Bleach',
              'Aroma Wax',
              'Legs Wax',
              'Hair Spa',
              'Threading',
            ],
          },
          {
            label: 'Sitting 2',
            items: ['O3+ Cleanup / Keratin Bleach', 'Hair Spa', 'Threading', 'Upper Lips'],
          },
          {
            label: 'Sitting 3',
            items: [
              'Kanpeki Facial',
              'Keratin Bleach & De-Tan',
              'Manicure + De-Tan Bleach',
              'Pedicure + De-Tan Bleach',
              'Aroma Body Polishing',
              'Hair Spa',
              'Threading',
              'Upper Lips',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'bridal-makeup',
    label: 'Bridal Makeup',
    tiers: [
      {
        name: 'Basic Bridal',
        price: '₹7,000',
        includes: ['Bridal makeup', 'Hairstyle & draping', 'Nail paint', 'Basic accessories'],
      },
      {
        name: 'HD Bridal',
        price: '₹12,000',
        badge: 'Most loved',
        includes: [
          'HD bridal makeup',
          'Advanced hairstyle & draping',
          'Hair extension',
          'Eye lashes & lenses',
          'Nail press-on & floral accessories',
        ],
      },
      {
        name: 'Airbrush Bridal',
        price: '₹16,000',
        includes: [
          'Airbrush bridal makeup',
          'Advanced hairstyle & draping',
          'Hair extension',
          'High-end lenses & lashes',
          'Nail extension & floral accessories',
        ],
      },
      {
        name: 'Celebrity HD + Airbrush',
        price: '₹20,000',
        includes: [
          'HD + airbrush celebrity look',
          'Advanced hairstyle & draping',
          'Hair extension',
          'Nail extension (hands & feet)',
          'High-end lashes & premium lenses',
        ],
      },
    ],
  },
  {
    id: 'engagement-makeup',
    label: 'Engagement Makeup',
    tiers: [
      {
        name: 'Basic Engagement',
        price: '₹4,000',
        includes: ['Makeup', 'Hairstyle & draping', 'Nail paint', 'Basic lashes'],
        excludes: ['Hair extension', 'Hair accessories', 'Eye lenses'],
      },
      {
        name: 'HD Waterproof',
        price: '₹6,500',
        badge: 'Most loved',
        includes: [
          'HD waterproof makeup',
          'Hairstyle & draping',
          'Advanced lashes & eye lenses',
          'Hair extension & accessories',
          'Nail paint / press-on',
        ],
        excludes: ['Original flower accessories'],
      },
      {
        name: 'Celebrity Airbrush',
        price: '₹8,500',
        includes: [
          'Airbrush makeup',
          'Advanced hairstyle & draping',
          'Eye lenses & advanced lashes',
          'Hair extension & accessories',
          'Nail extension & floral accessories',
        ],
      },
    ],
  },
  {
    id: 'party-makeup',
    label: 'Party Makeup',
    tiers: [
      {
        name: 'Basic Party',
        price: '₹1,500',
        includes: ['Basic makeup', 'Simple hairstyle'],
        excludes: ['Draping', 'Accessories', 'Lashes'],
      },
      {
        name: 'HD Party',
        price: '₹2,500',
        badge: 'Most loved',
        includes: ['HD makeup', 'Advanced hairstyle', 'Draping', 'Eye lashes', 'Nail paint'],
        excludes: ['Accessories'],
      },
      {
        name: 'Celebrity Airbrush',
        price: 'On consultation',
        includes: ['Airbrush makeup', 'Advanced hairstyle', 'Accessories', 'Lashes & lenses', 'Nail paint'],
      },
    ],
  },
]

/** Bridal terms shown on the Pricing page. */
export const BRIDAL_RULES: string[] = [
  'Hair extensions are available on purchase basis @ ₹1,000.',
  'No attendant is allowed with the brides.',
  'Payment will be taken in advance.',
  'Hair accessories are only available on purchase basis.',
  'No self makeup, draping or dressing is allowed.',
  'Real flowers will be charged separately.',
  'Book bridal with pre-bridal and get up to 50% off the Gold Package for pre-bridal services.',
  'Bikini wax is extra in the Bronze & Gold pre-bridal packages.',
]

/** Curated trio shown in the home "Bridal & party packages" section (concise). */
export const HOME_BRIDAL: PackageTier[] = [
  {
    name: 'Pre-Bridal Gold',
    price: '₹12,999',
    includes: ['Three sittings', 'O3+ & Kanpeki facials', 'Keratin bleach & de-tan', 'Mani/pedi with de-tan bleach', 'Aroma body polishing & hair spa'],
  },
  { ...PACKAGE_SETS[1].tiers[1], badge: 'Most loved' }, // HD Bridal (featured)
  { ...PACKAGE_SETS[3].tiers[1], badge: undefined }, // HD Party
]
