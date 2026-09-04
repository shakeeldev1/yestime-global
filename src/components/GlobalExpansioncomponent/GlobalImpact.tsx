import React from "react";
import {
  Globe2,
  MapPinned,
  Handshake,
  TrendingUp,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface ImpactItem {
  id: number;
  value: string;
  label: string;
  description: string;
  icon: React.ElementType;
}

const GlobalImpact: React.FC = () => {
  const { t } = useTranslation("global");

  const impactItems: ImpactItem[] = [
    {
      id: 1,
      value: t("impact.items.0.value"),
      label: t("impact.items.0.label"),
      description: t("impact.items.0.description"),
      icon: Globe2,
    },
    {
      id: 2,
      value: t("impact.items.1.value"),
      label: t("impact.items.1.label"),
      description: t("impact.items.1.description"),
      icon: MapPinned,
    },
    {
      id: 3,
      value: t("impact.items.2.value"),
      label: t("impact.items.2.label"),
      description: t("impact.items.2.description"),
      icon: Handshake,
    },
    {
      id: 4,
      value: t("impact.items.3.value"),
      label: t("impact.items.3.label"),
      description: t("impact.items.3.description"),
      icon: TrendingUp,
    },
  ];

  return (
    <section
      id="global-impact"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(217,162,27,0.10),transparent_18%),linear-gradient(180deg,#f8fafc_0%,#eef4fb_100%)] py-8 sm:py-10 lg:py-12"
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div className="pointer-events-none absolute left-[-200px] top-20 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-200px] right-[-150px] h-[400px] w-[400px] rounded-full bg-[#D9A21B]/10 blur-[120px]" />

      {/* =========================================
          CONTAINER
      ========================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Small Label */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9A21B]/40 bg-[#07152D] px-4 py-2 shadow-[0_10px_20px_rgba(11,59,110,0.12)]">
            <span className="h-2 w-2 rounded-full bg-[#FFD45A] shadow-[0_0_16px_rgba(255,212,90,0.8)]" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFD45A]">
              {t("impact.label")}
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#000000] sm:text-4xl md:text-5xl">
            {t("impact.title.before")}{" "}
            <span className="bg-gradient-to-r from-[#d9a21b] via-[#f2c75e] to-[#d9a21b] bg-clip-text text-transparent">
              {t("impact.title.highlight")}
            </span>
          </h2>

          {/* Accent */}

          <div className="my-5 flex items-center justify-center gap-3">
            <div className="h-[2px] w-14 bg-[#D9A21B]" />

            <div className="h-1.5 w-1.5 rounded-full bg-[#FFD45A]" />

            <div className="h-[1px] w-14 bg-[#D9A21B]/40" />
          </div>

          {/* Description */}

          <p className="text-base leading-7 text-[#41566f] sm:text-lg">
            {t("impact.description")}
          </p>
        </div>

        {/* =========================================
            IMPACT CARDS
        ========================================= */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-[1.6rem] border border-[#d9e5f1] bg-[#000000] p-6 shadow-[0_22px_42px_rgba(11,59,110,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A21B]/60 hover:shadow-[0_28px_50px_rgba(11,59,110,0.18)]"
              >
                {/* Top Gold Line */}

                <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9A21B] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* Icon */}

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#D9A21B]/35 bg-[#D9A21B]/12 shadow-inner shadow-[#d9a21b]/10">
                  <Icon
                    size={23}
                    strokeWidth={1.7}
                    className="text-[#FFD45A]"
                  />
                </div>

                {/* Number */}

                <div className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                  {item.value}
                </div>

                {/* Label */}

                <h3 className="mt-2 text-lg font-semibold text-[#f5d88c]">
                  {item.label}
                </h3>

                {/* Description */}

                <p className="mt-3 text-sm leading-6 text-slate-200">
                  {item.description}
                </p>

                {/* Bottom Arrow */}

                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-slate-300 transition duration-300 group-hover:text-[#FFD45A]">
                  <span>{t("impact.cardFooter")}</span>

                  <span className="h-px w-6 bg-current" />
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================
            BOTTOM MESSAGE
        ========================================= */}

        <div className="mt-10 rounded-[22px] border border-[#d8dfe9] bg-[#f5f7fb] px-5 py-5 shadow-[0_18px_45px_-22px_rgba(11,59,110,0.25)] sm:px-8 sm:py-6">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-2xl font-medium leading-snug tracking-[-0.03em] text-[#000000]">
                {t("impact.bottomTitle")}
              </p>

              <p className="mt-2 max-w-3xl text-base leading-7 text-[#41566f]">
                {t("impact.bottomText")}
              </p>
            </div>

            <a
              href="#global-journey"
              className="inline-flex shrink-0 items-center justify-center rounded-xl border border-[#d9a21b]/60 bg-transparent px-6 py-3.5 text-base font-semibold text-[#000000] transition duration-300 hover:border-[#d9a21b] hover:bg-[#fffaf0]"
            >
              {t("impact.bottomCta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;