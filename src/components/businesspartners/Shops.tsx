import React from "react";
import {
  ArrowUpRight,
  Store,
  Handshake,
  FileText,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface ShopFeature {
  icon: React.ElementType;
  title: string;
  description: string;
  badge?: string;
}

const Shops: React.FC = () => {
  const { t } = useTranslation("business");

  const shopFeatures: ShopFeature[] = [
    {
      icon: Store,
      title: t("shops.features.0.title"),
      description: t("shops.features.0.description"),
      badge: t("shops.features.0.badge"),
    },
    {
      icon: Handshake,
      title: t("shops.features.1.title"),
      description: t("shops.features.1.description"),
      badge: t("shops.features.1.badge"),
    },
    {
      icon: TrendingUp,
      title: t("shops.features.2.title"),
      description: t("shops.features.2.description"),
      badge: t("shops.features.2.badge"),
    },
    {
      icon: ShieldCheck,
      title: t("shops.features.3.title"),
      description: t("shops.features.3.description"),
      badge: t("shops.features.3.badge"),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-10 lg:py-1">

      {/* Clean Ambient Background Glows (Boxes/Grids removed entirely) */}
      <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#C6922B]/10 via-[#C6922B]/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-[#000000]/10 via-[#000000]/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C6922B]/30 bg-[#C6922B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#C6922B] backdrop-blur-md mb-4 shadow-sm">
            <Sparkles size={14} />
            <span>{t("shops.badge")}</span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-[#000000] sm:text-5xl lg:text-6xl">
            {t("shops.title.line1")} <br className="hidden sm:inline" />
            <span className="bg-linear-to-r from-[#C6922B] via-[#dfa838] to-[#C6922B] bg-clip-text text-transparent text-3xl font-semibold sm:text-4xl lg:text-5xl">
              {t("shops.title.line2")}
            </span>
          </h2>

          <p className="mt-6 text-base font-normal leading-relaxed text-[#55708F] sm:text-lg">
            {t("shops.description")}
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:items-center">

          {/* Left Hero Card (5 Cols) */}
          <div className="lg:col-span-5 relative group overflow-hidden rounded-[32px] shadow-2xl shadow-[#000000]/15 border border-[#D9E3EF] min-h-[640px] flex flex-col justify-between">
            {/* Background Image Container */}
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: "url('https://www.retailgazette.co.uk/wp-content/uploads/shutterstock_286865720.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Deep Multi-Layer Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/90 to-[#000000]/60 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#C6922B]/20 via-transparent to-transparent opacity-80" />

            {/* Top Tag & Icon */}
            <div className="relative z-10 p-8 sm:p-10 flex justify-between items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-[#C6922B] backdrop-blur-md shadow-xl">
                <Store size={30} strokeWidth={2.2} />
              </div>
              <span className="rounded-full bg-white/10 border border-white/20 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                {t("shops.verifiedPortal")}
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 p-8 sm:p-10 pt-0">
              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t("shops.cardTitle.line1")} <br />
                <span className="text-[#C6922B]">{t("shops.cardTitle.line2")}</span>
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/80">
                {t("shops.cardText")}
              </p>

              {/* Process Card Box */}
              <div className="mt-6 flex items-start gap-3.5 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl shadow-inner">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C6922B] text-white shadow-md">
                  <FileText size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    {t("shops.workflow.title")}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">
                    {t("shops.workflow.text")}
                  </p>
                </div>
              </div>

              {/* Interactive CTA */}
              <button className="group/btn mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C6922B] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#C6922B]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#000000]">
                <span>{t("shops.joinNetwork")}</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* Right Feature Grid (7 Cols) */}
          <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
            {shopFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group relative flex flex-col justify-between rounded-3xl border border-[#D9E3EF] bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#C6922B]/70 hover:bg-[#000000] hover:shadow-xl hover:shadow-[#000000]/10 overflow-hidden"
                >
                  {/* Subtle top indicator border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6922B]/0 to-transparent transition-all duration-500 group-hover:via-[#C6922B]" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#000000]/5 text-[#000000] transition-all duration-500 group-hover:bg-[#C6922B] group-hover:text-white group-hover:rotate-6 shadow-sm">
                        <Icon size={24} strokeWidth={2} />
                      </div>
                      {feature.badge && (
                        <span className="rounded-md bg-[#C6922B]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#C6922B]">
                          {feature.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="text-xl font-bold text-[#000000] transition-colors duration-300 group-hover:text-[#C6922B]">
                      {feature.title}
                    </h4>

                    <p className="mt-3 text-sm leading-relaxed text-[#55708F] transition-colors duration-300 group-hover:text-slate-200">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D9E3EF]/60 flex items-center gap-1.5 text-xs font-semibold text-[#000000]">
                    <CheckCircle2 size={15} className="text-[#C6922B]" />
                    <span>{t("shops.featureFooter")}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Information Callout */}
        <div className="mt-16 rounded-[28px] border border-[#D9E3EF] bg-white p-8 sm:p-10 shadow-lg shadow-[#000000]/5">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#000000] text-[#C6922B] shadow-md">
                  <Handshake size={22} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-[#000000]">
                  {t("shops.callout.title")}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-[#55708F] sm:text-base">
                {t("shops.callout.text")}
              </p>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C6922B]/30 bg-[#C6922B]/10 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#C6922B] shadow-sm backdrop-blur-md">
                <Sparkles size={13} />
                {t("shops.callout.badge")}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Shops;
