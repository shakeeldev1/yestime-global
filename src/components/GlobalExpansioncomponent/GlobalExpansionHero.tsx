import React from "react";
import {
  Globe2,
  ArrowRight,
  MapPin,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface HeroData {
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  countries: string[];
}

const GlobalExpansionHero: React.FC = () => {
  const { t, i18n } = useTranslation("global");
  const isRTL = i18n.dir() === 'rtl'

  const heroContent: HeroData = {
    image: "/hero-yes.png",
    badge: t("hero.badge"),
    title: t("hero.title"),
    subtitle: t("hero.subtitle"),
    description: t("hero.description"),
    countries: [
      t("hero.countries.0"),
      t("hero.countries.1"),
      t("hero.countries.2"),
      t("hero.countries.3"),
    ],
  };

  return (
    <section
      id="global-expansion"
      className="relative w-full overflow-hidden bg-[#020c1c]"
    >
      <div className="relative w-full pt-10 pb-12 ">
        {/* Background Image */}
        <div
          aria-hidden="true"
          className="global-expansion-background absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroContent.image})`,
            transform: isRTL ? 'scaleX(-1)' : 'scaleX(1)',
          }}
        />

        {/* Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-90" />

        {/* Subtle Blue Glow */}
        <div className="absolute -left-40 top-12 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[120px]" />

        {/* Subtle Gold Glow */}
        <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-[#D9A21B]/10 blur-[120px]" />

        {/* =========================================
            SUBTLE GRID
        ========================================= */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* =========================================
            CONTENT CONTAINER
        ========================================= */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-[7%]">
          <div className="grid w-full items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
            {/* =====================================
                LEFT CONTENT
            ===================================== */}
            <div className="relative z-10 max-w-3xl">
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d89d2c]/60 bg-[#020c1c]/55 px-4 py-2 backdrop-blur-md">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f5c54e]">
                  <Sparkles size={14} className="text-[#07182d]" />
                </span>
                <span className="text-xs font-semibold tracking-[0.12em] text-[#f5c54e] sm:text-sm">
                  {heroContent.badge}
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-3xl text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                {heroContent.title}
              </h1>

              {/* Gold Accent */}
              <div className="my-5 flex items-center gap-3">
                <div className="h-[2px] w-16 bg-[#D9A21B]" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#FFD45A]" />
                <div className="h-px w-16 bg-[#D9A21B]/40" />
              </div>

              {/* Subtitle */}
              <h2 className="mb-4 max-w-2xl text-lg font-bold leading-snug text-[#f5c54e] sm:text-xl md:text-[1.45rem]">
                {heroContent.subtitle}
              </h2>

              {/* Description */}
              <p className="max-w-xl text-sm font-normal leading-relaxed text-slate-200 sm:text-base sm:leading-7">
                {heroContent.description}
              </p>

              {/* =====================================
                  COUNTRIES
              ===================================== */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {heroContent.countries.map((country, index) => (
                  <div
                    key={index}
                    className="flex min-w-0 shrink-0 items-center gap-2 rounded-full border border-white/15 bg-[#020c1c]/70 px-3.5 py-1.5 transition duration-300 hover:border-[#d89d2c]/70 hover:bg-[#020c1c]/90"
                  >
                    <MapPin size={14} className="text-[#FFD45A]" />
                    <span className="whitespace-nowrap text-[11px] font-medium text-white sm:text-xs">
                      {country}
                    </span>
                  </div>
                ))}
              </div>

              {/* =====================================
                  BUTTONS
              ===================================== */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {/* Primary CTA */}
                <a
                  href="#global-presence"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#D9A21B] px-6 py-2.5 text-sm font-semibold text-[#020B1C] transition duration-300 hover:bg-[#FFD45A]"
                >
                  {t("hero.ctaPrimary")}
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                {/* Secondary CTA */}
                <a
                  href="#global-journey"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition duration-300 hover:border-[#FFD45A] hover:bg-white/10"
                >
                  <span className="text-white">{t("hero.ctaSecondary")}</span>
                  <ChevronRight size={17} />
                </a>
              </div>
            </div>

            {/* =====================================
                RIGHT GLOBE
            ===================================== */}
            <div className="relative hidden items-center justify-center lg:flex">
              {/* Outer Glow */}
              <div className="globe-outer-glow absolute h-[440px] w-[440px] rounded-full bg-blue-500/10 blur-[90px]" />

              {/* Globe Area */}
              <div className="relative flex h-[340px] w-[340px] items-center justify-center rounded-full border border-white/10 bg-[#06152D]/50 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                {/* Orbit 1 */}
                <div className="globe-orbit globe-orbit-gold absolute h-[470px] w-[180px] rotate-[35deg] rounded-[50%] border border-[#D9A21B]/30" />

                {/* Orbit 2 */}
                <div className="globe-orbit globe-orbit-blue absolute h-[470px] w-[180px] -rotate-[35deg] rounded-[50%] border border-blue-400/20" />

                {/* Main Globe */}
                <div className="globe-core relative flex h-[210px] w-[210px] items-center justify-center rounded-full bg-[#041B38] shadow-[0_0_60px_rgba(0,100,255,0.25)]">
                  <Globe2
                    size={160}
                    strokeWidth={0.8}
                    className="text-[#D9A21B]"
                  />

                  {/* Globe Center Icon */}
                  <div className="absolute flex h-14 w-14 items-center justify-center rounded-full border border-[#FFD45A]/40 bg-[#020B1C]">
                    <Globe2 size={26} className="text-[#FFD45A]" />
                  </div>
                </div>

                {/* Pakistan Marker */}
                <div className="globe-marker globe-marker-pakistan absolute left-0 top-[38%] flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFD45A]" />
                  <span className="rounded-md border border-white/10 bg-[#020B1C]/90 px-3 py-1.5 text-xs font-medium text-white">
                    {t("hero.markers.pakistan")}
                  </span>
                </div>

                {/* Nepal Marker */}
                <div className="globe-marker globe-marker-nepal absolute right-0 top-[25%] flex items-center gap-2">
                  <span className="rounded-md border border-white/10 bg-[#020B1C]/90 px-3 py-1.5 text-xs font-medium text-white">
                    {t("hero.markers.nepal")}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFD45A]" />
                </div>

                {/* Indonesia Marker */}
                <div className="globe-marker globe-marker-indonesia absolute bottom-[18%] right-2 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                  <span className="rounded-md border border-white/10 bg-[#020B1C]/90 px-3 py-1.5 text-xs font-medium text-white">
                    {t("hero.markers.indonesia")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalExpansionHero;