import LegalContactCTA from '../components/legal/LegalContactCTA'
import LegalDocumentContent from '../components/legal/LegalDocumentContent'
import LegalHero from '../components/legal/LegalHero'
import LegalNavigation from '../components/legal/LegalNavigation'
import { disclaimerDocument } from '../components/legal/legalData'

const Disclaimer = () => {
  return (
    <main className="min-h-screen bg-white">
      <LegalHero {...disclaimerDocument} />
      <LegalNavigation active="disclaimer" />
      <LegalDocumentContent document={disclaimerDocument} />
      <LegalContactCTA title="Need clarification about" highlight="website information?" description="Contact YES TIME GLOBAL before relying on general information for a specific program, plan, or decision." />
    </main>
  )
}

export default Disclaimer
