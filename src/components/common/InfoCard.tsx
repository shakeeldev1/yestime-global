import type { LucideIcon } from 'lucide-react'

type InfoCardProps = {
  icon: LucideIcon
  title: string
  description: string
  accent?: 'top' | 'left'
}

const InfoCard = ({ icon: Icon, title, description, accent = 'top' }: InfoCardProps) => (
  <article className={`border border-[#dbe5f2] bg-[#f8fafc] p-7 shadow-[0_12px_25px_rgba(11,59,110,0.08)] ${accent === 'top' ? 'border-t-4 border-t-[#c5962e]' : 'border-l-4 border-l-[#c5962e]'}`}>
    <Icon className="text-[#0b3b6e]" size={30} strokeWidth={1.8} />
    <h2 className="mt-5 text-xl font-semibold text-[#000000]">{title}</h2>
    <p className="mt-3 leading-7 text-[#41566f]">{description}</p>
  </article>
)

export default InfoCard
