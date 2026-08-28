import { FiBriefcase, FiGlobe, FiMessageCircle, FiUsers } from 'react-icons/fi'
import { contactChannels } from './contactData'

const icons = {
  message: FiMessageCircle,
  users: FiUsers,
  briefcase: FiBriefcase,
  globe: FiGlobe,
}

const ContactChannels = () => {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#a97916]">How we can help</span>
          <h2 className="mt-3 text-[clamp(1.8rem,4vw,2.8rem)] font-normal leading-tight tracking-[-0.03em] text-[#071a36]">
            Start with the right conversation.
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactChannels.map((channel) => {
            const Icon = icons[channel.icon]
            return (
              <article key={channel.title} className="group rounded-3xl border border-[#dbe5f2] bg-[#f8fafc] p-5 transition duration-300 ease-out hover:-translate-y-1 hover:border-[#d6b35a] hover:bg-white hover:shadow-[0_18px_35px_rgba(11,59,110,0.1)]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#0b3b6e] transition-colors group-hover:bg-[#fff8e1] group-hover:text-[#a97916]">
                  <Icon size={21} />
                </div>
                <h3 className="mt-5 text-lg font-medium text-[#071a36]">{channel.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#41566f]">{channel.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactChannels
