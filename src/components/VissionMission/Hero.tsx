import {
  CalendarDays,
  Layers3,
  Globe2,
  ShieldCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t, i18n } = useTranslation("vision");
  const isRTL = i18n.dir() === 'rtl'

  return (
    <section 
      className="relative overflow-hidden text-white bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "linear-gradient(to right, rgba(6, 19, 44, 0.9), rgba(6, 19, 44, 0.75)), url('/img12.png')",
        transform: isRTL ? 'scaleX(-1)' : 'scaleX(1)',
      }}
    >

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(245,181,27,.18),transparent_35%)]" />

      <div className="relative mx-auto grid min-h-[570px] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-10" style={{ transform: isRTL ? 'scaleX(-1)' : 'scaleX(1)' }}>

        {/* Left */}
        <div className="relative z-10" style={{ transform: isRTL ? 'scaleX(-1)' : 'scaleX(1)' }}>

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#f5b51b]">
            {t("hero.eyebrow")}
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.05] sm:text-6xl">
            {t("hero.titleLine1")}{" "}
            <span className="text-[#f5b51b]">
              {t("hero.titleHighlight")}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/75">
            {t("hero.description")}
          </p>

          {/* Statistics */}
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">

            <div className="flex items-center gap-2">
              <CalendarDays className="h-7 w-7 text-[#f5b51b]" />
              <div>
                <strong className="block text-sm text-[#f5b51b]">
                  {t("hero.stats.dailyDraws.value")}
                </strong>
                <span className="text-[11px] text-white/60">
                  {t("hero.stats.dailyDraws.label")}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Layers3 className="h-7 w-7 text-[#f5b51b]" />
              <div>
                <strong className="block text-sm text-[#f5b51b]">
                  {t("hero.stats.savingPrograms.value")}
                </strong>
                <span className="text-[11px] text-white/60">
                  {t("hero.stats.savingPrograms.label")}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Globe2 className="h-7 w-7 text-[#f5b51b]" />
              <div>
                <strong className="block text-sm text-[#f5b51b]">
                  {t("hero.stats.opportunities.value")}
                </strong>
                <span className="text-[11px] text-white/60">
                  {t("hero.stats.opportunities.label")}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="h-7 w-7 text-[#f5b51b]" />
              <div>
                <strong className="block text-sm text-[#f5b51b]">
                  {t("hero.stats.platform.value")}
                </strong>
                <span className="text-[11px] text-white/60">
                  {t("hero.stats.platform.label")}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side (Agar aap yahan koi aur illustration ya card rakhna chahein) */}
        <div className="relative hidden lg:flex justify-center lg:justify-end">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-[#f5b51b]/10 blur-3xl" />
        </div>

      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-[#f5b51b]" />

    </section>
  );
}