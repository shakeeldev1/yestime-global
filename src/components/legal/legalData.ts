// Stable identifiers used for legal document selection + navigation.
// All display text (titles, headings, paragraphs, nav labels) lives in
// src/i18n/locales/{en,ur}/legal.json under documents.<id> / nav.<id>,
// resolved with t() in the consuming components.

export type LegalDocumentId = 'terms' | 'privacy' | 'disclaimer'

export const legalDocumentIds: LegalDocumentId[] = ['terms', 'privacy', 'disclaimer']

export type LegalSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}
