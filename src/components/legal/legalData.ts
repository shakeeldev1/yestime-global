export type LegalSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type LegalDocument = {
  label: string
  title: string
  highlight: string
  description: string
  sections: LegalSection[]
}

export const termsDocument: LegalDocument = {
  label: 'Legal information',
  title: 'Terms &',
  highlight: 'Conditions.',
  description: 'The rules and responsibilities that apply when customers review, register for, or participate in a YES TIME GLOBAL program.',
  sections: [
    { heading: '1. Agreement to these terms', paragraphs: ['By accessing company information or proceeding with a program, a customer agrees to review and follow the applicable terms, eligibility requirements, verification steps, payment conditions, and program rules.'] },
    { heading: '2. Programs and plan terms', paragraphs: ['YES TIME GLOBAL may offer Shop & Savings, vehicle-related programs such as car and motorcycle or scooter, property-related opportunities, and other approved programs. Each program may have its own plan amount, duration, eligibility requirements, draw or non-draw structure, and benefit conditions.'] },
    { heading: '3. Registration and customer information', paragraphs: ['Customers must provide accurate, complete, and current personal and program-related information. The company may request additional information or supporting records where required for registration, review, verification, or compliance.'] },
    { heading: '4. Participation process', paragraphs: ['The general participation journey is registration, plan selection, purchase or payment, token issuance, verification, participation, and applicable benefit processing. A token or payment does not remove the requirement to complete verification or satisfy the selected plan terms.'] },
    { heading: '5. Payments and obligations', paragraphs: ['Customers must complete the required purchase, payment, or contribution according to the approved terms of the selected plan. Payment amounts, schedules, methods, and completion conditions may vary by program and market.'] },
    { heading: '6. Verification and review', paragraphs: ['The company may review submitted information before allowing further participation. Incomplete, inaccurate, inconsistent, or misleading information may require correction, additional review, delay, or rejection of the submission.'] },
    { heading: '7. Draw and non-draw plans', paragraphs: ['Some plans may include a draw and others may not. Draw schedules, selection methods, eligibility, outcomes, and related conditions are governed by the specific approved plan terms and must not be assumed from general website information.'] },
    { heading: '8. Benefits and limitations', paragraphs: ['Benefits depend on successful participation and compliance with the applicable program requirements. Registration, payment, or token issuance should not be understood as an unconditional guarantee of a particular benefit or delivery date.'] },
    { heading: '9. Customer responsibility', paragraphs: ['Customers are responsible for reading the applicable terms, providing correct information, completing required steps, meeting payment and verification requirements, and keeping their records current.'] },
    { heading: '10. Changes and policy confirmation', paragraphs: ['The latest approved terms and any plan-specific conditions should be read before participation or reliance. Cancellation, refunds, transfers, late-payment consequences, dispute resolution, governing law, and liability provisions depend on the applicable terms.'] },
  ],
}

export const privacyDocument: LegalDocument = {
  label: 'Legal information',
  title: 'Privacy',
  highlight: 'Policy.',
  description: 'How YES TIME GLOBAL may collect, use, review, protect, and disclose information provided through its programs and communication channels.',
  sections: [
    { heading: '1. Information we may collect', paragraphs: ['The company material refers to information needed for registration, customer support, verification, program administration, and record keeping. This may include personal details, contact information, identity or verification information, program details, payment-related information, and other records submitted by a customer.'] },
    { heading: '2. How information may be used', paragraphs: ['Information may be used to register customers, process selected plans, issue or manage tokens, complete verification, administer participation, communicate with customers, provide support, maintain records, and meet legal or compliance requirements.'] },
    { heading: '3. Verification and accuracy', paragraphs: ['Submitted information may be reviewed to confirm identity, eligibility, accuracy, and compliance with applicable program requirements. Customers should promptly correct information that is incomplete, inaccurate, or no longer current.'] },
    { heading: '4. Information protection', paragraphs: ['YES TIME GLOBAL is expected to handle customer information responsibly and apply reasonable safeguards. Specific technical, organizational, encryption, and security standards should be added only after confirmation in the company’s approved privacy policy.'] },
    { heading: '5. Disclosure of information', paragraphs: ['Information may be disclosed where required by law, regulation, legal process, compliance obligations, or legitimate program operations described in the approved policy. Any disclosure to service providers, financial institutions, partners, or other third parties should follow the current approved privacy terms.'] },
    { heading: '6. Retention and deletion', paragraphs: ['The PDF does not establish a definite retention period or universal deletion process. The final policy should state how long different records are retained and how a customer can submit an applicable access, correction, or deletion request.'] },
    { heading: '7. Customer requests and complaints', paragraphs: ['Customers should be given an approved channel for privacy questions, correction requests, and complaints. Official contact details and response timelines must be confirmed before publication.'] },
    { heading: '8. Policy updates', paragraphs: ['The company may update this policy when its programs, processes, legal requirements, or information practices change. The effective date and the method used to notify customers should be confirmed for the final version.'] },
    { heading: '9. Policy information', paragraphs: ['Questions about privacy, corrections, or complaints should be directed through the company’s approved contact channel.'] },
  ],
}

export const disclaimerDocument: LegalDocument = {
  label: 'Legal information',
  title: 'Important',
  highlight: 'Disclaimer.',
  description: 'Important information about program details, eligibility, verification, benefits, and the limits of general website information.',
  sections: [
    { heading: '1. General information', paragraphs: ['Information on this website is provided to help visitors understand YES TIME GLOBAL, its programs, its participation process, and its opportunities. Website information may not contain every term, condition, exception, or requirement that applies to a specific plan.'] },
    { heading: '2. Program availability and terms', paragraphs: ['Programs, plans, amounts, durations, eligibility rules, payment methods, draw or non-draw structures, and availability may vary by program and market, including Pakistan, Nepal, and Indonesia. Visitors should review the approved terms for the relevant program.'] },
    { heading: '3. No automatic entitlement', paragraphs: ['Registration, payment, purchase, or token issuance does not by itself guarantee participation approval, a draw outcome, a particular benefit, or a specific delivery date. Progress remains subject to eligibility, verification, compliance, and the applicable plan terms.'] },
    { heading: '4. Customer-provided information', paragraphs: ['Customers are responsible for providing accurate, complete, and current information. The company may request correction, additional records, or further review and may delay or reject information that is incomplete, inaccurate, inconsistent, or misleading.'] },
    { heading: '5. Draw-related information', paragraphs: ['Any draw-related outcome, schedule, selection method, and condition is governed by the specific approved plan terms. General website descriptions should not be treated as a substitute for those terms.'] },
    { heading: '6. Third-party information and links', paragraphs: ['References to partners, dealers, shops, showrooms, property partners, banks, financial institutions, or external services do not automatically mean that every third-party statement, service, availability, or outcome is controlled or guaranteed by YES TIME GLOBAL.'] },
    { heading: '7. Limitation of responsibility', paragraphs: ['The company should not be treated as responsible for consequences caused by incorrect customer information, failure to follow the required process, payment failure, unauthorized use of an account, or circumstances outside the company’s reasonable control. Exact limitation language requires legal approval.'] },
    { heading: '8. Independent review', paragraphs: ['Visitors should read the applicable program terms carefully and obtain independent professional advice where they need legal, financial, tax, or other specialized guidance.'] },
    { heading: '9. Applicable terms', paragraphs: ['The applicable program terms take priority over general website information when a specific plan or participation decision is being considered.'] },
  ],
}

export const legalDocuments = {
  terms: termsDocument,
  privacy: privacyDocument,
  disclaimer: disclaimerDocument,
}
