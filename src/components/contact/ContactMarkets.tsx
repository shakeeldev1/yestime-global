import { FiMapPin } from 'react-icons/fi'
import { useTranslation } from "react-i18next";

const ContactMarkets = () => {
  const { t } = useTranslation("contact");
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-[#d6b35a]/25 bg-white p-3 shadow-[0_18px_50px_rgba(2,12,28,0.08)] sm:p-4">
        <div className="mb-3 flex items-center gap-2 px-2 pt-1">
          <FiMapPin className="text-[#f5c54e]" size={18} />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-200">
            {t("markets.heading")}
          </span>
        </div>

        <div className="relative h-80 w-full overflow-hidden rounded-2xl sm:h-96">
          <iframe
            title={t("markets.mapTitle")}
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