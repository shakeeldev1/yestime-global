import LegalContactCTA from '../components/legal/LegalContactCTA'
import LegalDocumentContent from '../components/legal/LegalDocumentContent'
import LegalHero from '../components/legal/LegalHero'
import LegalNavigation from '../components/legal/LegalNavigation'

const TermsConditions = () => {
  return (
    <main className="min-h-screen bg-white">
      <LegalHero documentId="terms" />
      <LegalNavigation active="terms" />
      <LegalDocumentContent documentId="terms" />
      <LegalContactCTA documentId="terms" />
    </main>
  )
}

export default TermsConditions
