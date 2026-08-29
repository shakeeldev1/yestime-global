export type FAQCategory = {
  id: string
  label: string
  description: string
}

export type FAQItem = {
  id: string
  category: string
  question: string
  answer: string
  needsConfirmation?: boolean
}

export const faqCategories: FAQCategory[] = [
  { id: 'about', label: 'About us', description: 'The company and its opportunity-focused model.' },
  { id: 'programs', label: 'Programs and plans', description: 'Available programs, terms, draw options, and duration.' },
  { id: 'participation', label: 'Participation', description: 'Registration, payments, tokens, and verification.' },
  { id: 'benefits', label: 'Benefits', description: 'Participation outcomes and important conditions.' },
  { id: 'support', label: 'Support and privacy', description: 'Information handling, complaints, and support.' },
]

export const faqItems: FAQItem[] = [
  {
    id: 'what-is-yes-time-global',
    category: 'about',
    question: 'What is YES TIME GLOBAL?',
    answer: 'YES TIME GLOBAL connects customers, programs, partners, and opportunities through structured participation plans and clear program steps.',
  },
  {
    id: 'available-programs',
    category: 'programs',
    question: 'What programs are available?',
    answer: 'The company material references Shop & Savings, car, motorcycle or scooter, property-related opportunities, and other approved programs. Availability and terms may vary by program and market.',
  },
  {
    id: 'plan-types',
    category: 'programs',
    question: 'What types of plans are offered?',
    answer: 'The material refers to plans with eligibility and terms, plans without draw, plans with draw, and 12-month plans. Each plan should be reviewed before participation.',
  },
  {
    id: 'how-participation-works',
    category: 'participation',
    question: 'How does participation work?',
    answer: 'The general journey is: register, choose a plan, purchase or pay, receive a token, complete verification, participate, and receive the applicable benefit.',
  },
  {
    id: 'registration-information',
    category: 'participation',
    question: 'What information is needed during registration?',
    answer: 'Customers must provide accurate personal and program-related information. The required information can vary according to the selected program and may be reviewed before participation continues.',
  },
  {
    id: 'eligibility',
    category: 'participation',
    question: 'Who can participate?',
    answer: 'Participation depends on the relevant program’s eligibility requirements, terms, submitted information, and successful verification. Program-specific requirements should be confirmed before registration.',
    needsConfirmation: true,
  },
  {
    id: 'payment-process',
    category: 'participation',
    question: 'How are payments or purchases handled?',
    answer: 'After selecting a plan, the customer completes the required purchase, payment, or contribution according to that plan’s approved terms. Payment amounts and methods can vary by program.',
  },
  {
    id: 'token',
    category: 'participation',
    question: 'What is a token?',
    answer: 'A token is issued after the required purchase or payment step and forms part of the participation and verification process.',
  },
  {
    id: 'verification',
    category: 'participation',
    question: 'Why is verification required?',
    answer: 'Verification helps confirm the customer’s submitted information and eligibility before the customer proceeds through the program. Incomplete or inaccurate information may require correction or additional review.',
  },
  {
    id: 'draw-and-non-draw',
    category: 'programs',
    question: 'What is the difference between draw and non-draw plans?',
    answer: 'The material distinguishes plans with a draw from plans without a draw. The exact draw schedule, selection method, and outcome conditions depend on the approved terms of the specific plan.',
    needsConfirmation: true,
  },
  {
    id: 'twelve-month-plans',
    category: 'programs',
    question: 'Are 12-month plans available?',
    answer: 'Yes. The company material references 12-month plans. The monthly amount, completion conditions, and applicable benefit should be checked in the current plan terms.',
  },
  {
    id: 'benefit-timing',
    category: 'benefits',
    question: 'When does a participant receive a benefit?',
    answer: 'Benefits are connected to successful participation and compliance with the applicable plan terms. There is not one universal benefit timeline for every program.',
    needsConfirmation: true,
  },
  {
    id: 'customer-responsibilities',
    category: 'benefits',
    question: 'What are the participant’s responsibilities?',
    answer: 'Participants must provide correct information, complete required steps, follow the applicable terms, and meet payment and verification requirements.',
  },
  {
    id: 'refunds-cancellation',
    category: 'benefits',
    question: 'Can a plan be cancelled or refunded?',
    answer: 'Cancellation, transfer, and refund rules depend on the approved terms of the selected plan. Please confirm the current policy before publishing or relying on a specific answer.',
    needsConfirmation: true,
  },
  {
    id: 'privacy',
    category: 'support',
    question: 'How is customer information handled?',
    answer: 'The company material addresses personal information, data use, disclosure conditions, legal compliance, and customer information handling. The complete Privacy Policy should be consulted for detailed requirements.',
  },
  {
    id: 'support-complaint',
    category: 'support',
    question: 'How can I request support or submit a complaint?',
    answer: 'Use the company’s approved support or contact channel and include your name, relevant program information, and a clear description of the request. Official contact details should be supplied from the current company-approved information.',
    needsConfirmation: true,
  },
  {
    id: 'global-markets',
    category: 'about',
    question: 'Where is YES TIME GLOBAL expanding?',
    answer: 'The company material references expansion across Pakistan, Nepal, and Indonesia. Program availability may differ by market.',
  },
]
