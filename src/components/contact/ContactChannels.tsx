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
    <section className="relative w-full overflow-hidden bg-slate-100/70 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactChannels.map((channel) => {
            const Icon = icons[channel.icon]
            return (
              <article key={channel.title} className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:shadow-slate-900/10">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#06234b] text-amber-400 transition-colors group-hover:bg-amber-400 group-hover:text-[#06234b]">
                  <Icon size={21} />
                </div>
                <h3 className="mt-5 text-base font-bold text-[#061832] transition-colors group-hover:text-amber-600">{channel.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#41566f]">{channel.description}</p>
                <div className="mt-5 h-0.5 w-8 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-full group-hover:bg-amber-400" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactChannels
