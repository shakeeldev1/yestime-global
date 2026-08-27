import type { LucideIcon } from 'lucide-react'

type InfoCardProps = {
  icon: LucideIcon
  title: string
  description: string
  accent?: 'top' | 'left'
}

const InfoCard = ({ icon: Icon, title, description, accent = 'top' }: InfoCardProps) => (
  <article className={`bg-white p-7 shadow-sm ${accent === 'top' ? 'border-t-4 border-[#c5a06a]' : 'border-l-4 border-[#c5a06a]'}`}>
    <Icon className="text-[#b38b4d]" size={30} strokeWidth={1.8} />
    <h2 className="mt-5 text-xl font-semibold text-[#10233f]">{title}</h2>
    <p className="mt-3 leading-7 text-slate-600">{description}</p>
  </article>
)

export default InfoCard
