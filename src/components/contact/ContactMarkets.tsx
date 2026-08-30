import { FiMapPin } from 'react-icons/fi'

const ContactMarkets = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 shadow-xl shadow-slate-200/50 sm:p-4">
        <div className="mb-3 flex items-center gap-2 px-2 pt-1">
          <FiMapPin className="text-amber-500" size={18} />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
            Head Office — Lahore, Pakistan
          </span>
        </div>

        <div className="relative h-80 w-full overflow-hidden rounded-2xl sm:h-96">
          <iframe
            title="YES TIME GLOBAL Head Office Lahore Location"
            src="https://maps.google.com/maps?q=Lahore,Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactMarkets