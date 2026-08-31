import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

type LegalNavigationProps = {
  active: 'terms' | 'privacy' | 'disclaimer'
}

const LegalNavigation = ({ active }: LegalNavigationProps) => {
  const { t } = useTranslation('legal')

  const links = [
    { id: 'terms' as const, label: t('nav.terms'), path: '/terms-conditions' },
    { id: 'privacy' as const, label: t('nav.privacy'), path: '/privacy-policy' },
    { id: 'disclaimer' as const, label: t('nav.disclaimer'), path: '/disclaimer' },
  ]

  return (
    <nav aria-label={t('nav.ariaLabel')} className="border-b border-slate-200 bg-slate-100/70 px-5 py-4 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 sm:justify-start">
        {links.map((link) => (
          <Link key={link.id} to={link.path} className={`rounded-xl px-4 py-2 text-xs font-bold transition duration-200 sm:text-sm ${active === link.id ? 'bg-[#0b3b6e] text-white shadow-[0_8px_18px_rgba(11,59,110,0.16)]' : 'text-[#41566f] hover:bg-white hover:text-[#0b3b6e] hover:shadow-sm'}`}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default LegalNavigation
