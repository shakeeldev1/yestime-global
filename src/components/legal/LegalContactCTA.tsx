import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HomeCTA from '../home/HomeCTA'
import type { LegalDocumentId } from './legalData'

type LegalContactCTAProps = {
  documentId: LegalDocumentId
}

const LegalContactCTA = ({ documentId }: LegalContactCTAProps) => {
  const { t } = useTranslation('legal')
  const title = t(`contactCTA.${documentId}.title`)
  const highlight = t(`contactCTA.${documentId}.highlight`)
  const description = t(`contactCTA.${documentId}.description`, { defaultValue: '' })

  return (
    <HomeCTA
      badge={t('contactCTA.badge')}
      title={title}
      highlight={highlight}
      description={description || undefined}
      panelClassName="border-[#d6b35a]/50 bg-[linear-gradient(145deg,#fffdf5_0%,#f4f1e8_100%)] shadow-[0_18px_45px_-18px_rgba(111,83,16,0.2)]"
      actions={(
        <Link to="/contact-us" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f5c54e] to-[#d99420] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-[#07182d] shadow-lg shadow-amber-500/20 no-underline transition-all hover:-translate-y-0.5 hover:shadow-amber-500/30 focus-visible:outline-2 focus-visible:outline-amber-400">
          {t('contactCTA.buttonText')}
          <FiArrowUpRight size={16} />
        </Link>
      )}
    />
  )
}

export default LegalContactCTA
