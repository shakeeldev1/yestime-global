import { ArrowRight, Calendar, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const EventHero = () => {
    const { t } = useTranslation("event")
    return (
        <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#020c1c] px-4 py-8 text-white sm:px-6 md:px-10 lg:px-[7%] md:min-h-[85vh]">
            {/* Background Image & Gradient Overlays */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-yes.png"
                    alt={t("hero.imageAlt")}
                    loading="eager"
                    className="h-full w-full object-cover object-center"
                />
                {/* Directional gradient overlays for crisp readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-90" />
            </div>

            {/* Hero Headline & Content Container */}
            <div className="relative z-10 max-w-2xl pt-4 md:pt-8">
                <div className="mb-4 md:mb-6 flex items-center gap-2.5">
                    <Sparkles className="size-4 text-[#f5c54e] md:size-5" />
                    <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#f5c54e]">{t("hero.badge")}</span>
                </div>

                <h1 className="text-5xl font-bold ">
                    {t("hero.titleLine1")}
                    <br />
                    <span className="bg-gradient-to-r from-[#f5c54e] via-[#e5b338] to-[#d99420] bg-clip-text text-transparent">
                        {t("hero.titleLine2")}
                    </span>
                </h1>

                <p className="mt-3 md:mt-6 max-w-xl text-sm md:text-base font-normal leading-relaxed text-slate-200 sm:leading-7 md:leading-8">
                    {t("hero.subtitle")}
                </p>

                {/* Quick Stats */}
                <div className="mt-6 md:mt-8 grid grid-cols-3 gap-3 md:gap-4">
                    <div className="backdrop-blur-md rounded-lg md:rounded-xl border border-[#d89d2c]/30 bg-[#020c1c]/50 p-3 md:p-4">
                        <div className="text-xl md:text-2xl font-bold text-[#f5c54e]">50+</div>
                        <div className="text-xs text-slate-400">{t("hero.stats.annualEvents")}</div>
                    </div>
                    <div className="backdrop-blur-md rounded-lg md:rounded-xl border border-[#d89d2c]/30 bg-[#020c1c]/50 p-3 md:p-4">
                        <div className="text-xl md:text-2xl font-bold text-[#f5c54e]">2000+</div>
                        <div className="text-xs text-slate-400">{t("hero.stats.attendees")}</div>
                    </div>
                    <div className="backdrop-blur-md rounded-lg md:rounded-xl border border-[#d89d2c]/30 bg-[#020c1c]/50 p-3 md:p-4">
                        <div className="text-xl md:text-2xl font-bold text-[#f5c54e]">30+</div>
                        <div className="text-xs text-slate-400">{t("hero.stats.countries")}</div>
                    </div>
                </div>

                {/* Call to Actions */}
                <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4">
                    <a
                        href="#upcoming-events"
                        className="inline-flex items-center gap-2 md:gap-2.5 rounded-lg md:rounded-xl bg-gradient-to-r from-[#f5c54e] to-[#d99420] px-4 md:px-5 py-2.5 md:py-3 text-xs md:text-sm font-bold text-[#07182d] shadow-lg shadow-amber-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-amber-500/40 focus-visible:outline-2 focus-visible:outline-amber-400"
                    >
                        <span>{t("hero.exploreEvents")}</span>
                        <ArrowRight className="size-3 md:size-4 shrink-0" aria-hidden="true" />
                    </a>

                    <a
                        href="#event-highlights"
                        className="inline-flex items-center gap-2 md:gap-2.5 rounded-lg md:rounded-xl border border-[#d89d2c]/60 bg-[#020c1c]/50 px-4 md:px-5 py-2.5 md:py-3 text-xs md:text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-[#d89d2c] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
                    >
                        <span>{t("hero.learnMore")}</span>
                        <Calendar className="size-3 md:size-4 shrink-0 text-[#f5c54e]" aria-hidden="true" />
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="relative z-10 mb-4 flex justify-center">
                <div className="animate-bounce">
                    <svg className="h-6 w-6 text-[#f5c54e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default EventHero
