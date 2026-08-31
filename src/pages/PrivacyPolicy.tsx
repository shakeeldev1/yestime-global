import LegalContactCTA from '../components/legal/LegalContactCTA'
import LegalDocumentContent from '../components/legal/LegalDocumentContent'
import LegalHero from '../components/legal/LegalHero'
import LegalNavigation from '../components/legal/LegalNavigation'

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-white">
      <LegalHero documentId="privacy" />
      <LegalNavigation active="privacy" />
      <LegalDocumentContent documentId="privacy" />
      <LegalContactCTA documentId="privacy" />
    </main>
  )
}

export default PrivacyPolicy
