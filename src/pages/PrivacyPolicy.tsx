import LegalContactCTA from '../components/legal/LegalContactCTA'
import LegalDocumentContent from '../components/legal/LegalDocumentContent'
import LegalHero from '../components/legal/LegalHero'
import LegalNavigation from '../components/legal/LegalNavigation'
import { privacyDocument } from '../components/legal/legalData'

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-white">
      <LegalHero {...privacyDocument} />
      <LegalNavigation active="privacy" />
      <LegalDocumentContent document={privacyDocument} />
      <LegalContactCTA title="Questions about your" highlight="privacy?" description="Contact YES TIME GLOBAL for approved privacy information or a question about how your information is handled." />
    </main>
  )
}

export default PrivacyPolicy
