export const inquiryTypes = [
  'General Inquiry',
  'Customer or Member Support',
  'Program Information',
  'Business Partnership',
  'Investor or Bank Inquiry',
  'Dealer, Shop, or Showroom Partnership',
  'Property Partnership',
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
  {
    title: 'Global opportunities',
    description: 'Connect with our direction across Pakistan, Nepal, and Indonesia.',
    icon: 'globe',
  },
]

export const globalMarkets = ['Pakistan', 'Nepal', 'Indonesia']
