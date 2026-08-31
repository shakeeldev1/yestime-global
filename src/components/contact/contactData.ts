// Stable identifiers for inquiry types. Display labels live in the
// `contact` i18n namespace under `inquiryTypes.<id>.label` and are resolved
// with t() in the consuming component (ContactForm).
export const inquiryTypes = [
  'general',
  'support',
  'program',
  'partnership',
  'investor',
  'dealer',
  'property',
] as const

export type InquiryType = (typeof inquiryTypes)[number]

export type ContactChannel = {
  title: string
  description: string
  icon: 'message' | 'users' | 'briefcase' | 'globe'
}

export const contactChannels: ContactChannel[] = [
  {
    title: 'General inquiries',
    description: 'Ask about YES TIME GLOBAL, our programs, or participation.',
    icon: 'message',
  },
  {
    title: 'Members and customers',
    description: 'Get guidance about plans, verification, and participation.',
    icon: 'users',
  },
  {
    title: 'Partners and investors',
    description: 'Discuss business, dealer, property, bank, and investment opportunities.',
    icon: 'briefcase',
  },
]

export const globalMarkets = ['Pakistan', 'Nepal', 'Indonesia']
