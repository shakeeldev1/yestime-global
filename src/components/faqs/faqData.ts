export type FAQCategory = {
  id: string
}

export type FAQItem = {
  id: string
  category: string
  needsConfirmation?: boolean
}

// Display strings (label, description, question, answer) live in the i18n
// locale files (en/ur `faqs.json`) and are resolved in the components via
// t(`categories.${id}.label`) / t(`items.${id}.question`) etc.
// Only stable ids/keys used for filtering and logic are kept here.
export const faqCategories: FAQCategory[] = [
  { id: 'about' },
  { id: 'programs' },
  { id: 'participation' },
  { id: 'benefits' },
  { id: 'support' },
]

export const faqItems: FAQItem[] = [
  {
    id: 'what-is-yes-time-global',
    category: 'about',
  },
  {
    id: 'available-programs',
    category: 'programs',
  },
  {
    id: 'plan-types',
    category: 'programs',
  },
  {
    id: 'how-participation-works',
    category: 'participation',
  },
  {
    id: 'registration-information',
    category: 'participation',
  },
  {
    id: 'eligibility',
    category: 'participation',
    needsConfirmation: true,
  },
  {
    id: 'payment-process',
    category: 'participation',
  },
  {
    id: 'token',
    category: 'participation',
  },
  {
    id: 'verification',
    category: 'participation',
  },
  {
    id: 'draw-and-non-draw',
    category: 'programs',
    needsConfirmation: true,
  },
  {
    id: 'twelve-month-plans',
    category: 'programs',
  },
  {
    id: 'benefit-timing',
    category: 'benefits',
    needsConfirmation: true,
  },
  {
    id: 'customer-responsibilities',
    category: 'benefits',
  },
  {
    id: 'refunds-cancellation',
    category: 'benefits',
    needsConfirmation: true,
  },
  {
    id: 'privacy',
    category: 'support',
  },
  {
    id: 'support-complaint',
    category: 'support',
    needsConfirmation: true,
  },
  {
    id: 'global-markets',
    category: 'about',
  },
]
