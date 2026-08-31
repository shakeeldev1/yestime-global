import LegalContactCTA from '../components/legal/LegalContactCTA'
import LegalDocumentContent from '../components/legal/LegalDocumentContent'
import LegalHero from '../components/legal/LegalHero'
import LegalNavigation from '../components/legal/LegalNavigation'

const Disclaimer = () => {
  return (
    <main className="min-h-screen bg-white">
      <LegalHero documentId="disclaimer" />
      <LegalNavigation active="disclaimer" />
      <LegalDocumentContent documentId="disclaimer" />
      <LegalContactCTA documentId="disclaimer" />
    </main>
  )
}

export default Disclaimer
