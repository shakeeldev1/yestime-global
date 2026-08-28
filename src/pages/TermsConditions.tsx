import LegalContactCTA from '../components/legal/LegalContactCTA'
import LegalDocumentContent from '../components/legal/LegalDocumentContent'
import LegalHero from '../components/legal/LegalHero'
import LegalNavigation from '../components/legal/LegalNavigation'
import { termsDocument } from '../components/legal/legalData'

const TermsConditions = () => {
  return (
    <main className="min-h-screen bg-white">
      <LegalHero {...termsDocument} />
      <LegalNavigation active="terms" />
      <LegalDocumentContent document={termsDocument} />
      <LegalContactCTA title="Need help understanding" highlight="a program term?" />
    </main>
  )
}

export default TermsConditions
