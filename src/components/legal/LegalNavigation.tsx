import { Link } from 'react-router-dom'

type LegalNavigationProps = {
  active: 'terms' | 'privacy' | 'disclaimer'
}

const links = [
  { id: 'terms' as const, label: 'Terms & Conditions', path: '/terms-conditions' },
  { id: 'privacy' as const, label: 'Privacy Policy', path: '/privacy-policy' },
  { id: 'disclaimer' as const, label: 'Disclaimer', path: '/disclaimer' },
]

const LegalNavigation = ({ active }: LegalNavigationProps) => {
  return (
    <nav aria-label="Legal pages" className="border-b border-[#dbe5f2] bg-white px-5 py-4 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 sm:justify-start">
        {links.map((link) => (
          <Link key={link.id} to={link.path} className={`rounded-full px-4 py-2 text-xs font-semibold transition duration-200 sm:text-sm ${active === link.id ? 'bg-[#0b3b6e] text-white shadow-[0_8px_18px_rgba(11,59,110,0.16)]' : 'text-[#41566f] hover:bg-[#eff6ff] hover:text-[#0b3b6e]'}`}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default LegalNavigation
