import React from "react";
import {
  Target,
  Eye,
  Sparkles,
  Globe,
  ShieldCheck,
  Handshake,
  ChevronRight,
  ShoppingBag,
  Car,
  Home,
  Tractor,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export const AboutSection: React.FC = () => {
  const { t } = useTranslation("about");

  const ecosystemItems = [
    {
      id: "01",
      title: t("ecosystem.items.shopping.title"),
      description: t("ecosystem.items.shopping.description"),
      image:
        "https://i.pinimg.com/736x/6c/8a/dc/6c8adc05fa12dd0f64a4ba1ef6c05fe2.jpg",
      icon: (
        <ShoppingBag
          size={20}
          className="text-slate-700 transition-colors duration-300 group-hover:text-amber-600"
        />
      ),
    },
    {
      id: "02",
      title: t("ecosystem.items.vehicles.title"),
      description: t("ecosystem.items.vehicles.description"),
      image:
        "https://i.pinimg.com/1200x/75/7d/a6/757da6961b6cf5c6af412b4418b8ddb0.jpg",
      icon: (
        <Car
          size={20}
          className="text-slate-700 transition-colors duration-300 group-hover:text-amber-600"
        />
      ),
    },
    {
      id: "03",
      title: t("ecosystem.items.property.title"),
      description: t("ecosystem.items.property.description"),
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
      icon: (
        <Home
          size={20}
          className="text-slate-700 transition-colors duration-300 group-hover:text-amber-600"
        />
      ),
    },
    {
      id: "04",
      title: t("ecosystem.items.agriculture.title"),
      description: t("ecosystem.items.agriculture.description"),
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80",
      icon: (
        <Tractor
          size={20}
          className="text-slate-700 transition-colors duration-300 group-hover:text-amber-600"
        />
      ),
    },
    {
      id: "05",
      title: t("ecosystem.items.business.title"),
      description: t("ecosystem.items.business.description"),
      image:
        "https://i.pinimg.com/1200x/6a/9a/66/6a9a661a89881207fcc24bf0c16e5bf5.jpg",
      icon: (
        <Handshake
          size={20}
          className="text-slate-700 transition-colors duration-300 group-hover:text-amber-600"
        />
      ),
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-12">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        {/* ========== WHO WE ARE SECTION ========== */}
        <div className="mb-12 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="text-center lg:col-span-7 lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-amber-500/30 bg-amber-50 px-4 py-2 transition-transform duration-300 hover:scale-105">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-[10px] font-black text-white shadow-sm">
                W
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                {t("whoWeAre.badge")}
              </span>
            </div>

            {/* Heading */}
            <h2 className="mb-6 text-5xl font-bold text-slate-900">
              {t("whoWeAre.headingLine1")}
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 bg-clip-text text-transparent">
                {t("whoWeAre.headingBusinesses")}{" "}
              </span>{" "}
              {t("whoWeAre.headingOpportunities")}
            </h2>

            {/* Seamless Story Narrative Text */}
            <div className="mb-8 space-y-4 text-slate-600">
              <p className="text-base leading-relaxed sm:text-lg">
                {t("whoWeAre.para1.part1")}{" "}
                <span className="font-semibold text-slate-900">2023</span>,{" "}
                <strong className="font-semibold text-slate-900">
                  YES TIME GLOBAL PRIVATE LIMITED
                </strong>{" "}
                {t("whoWeAre.para1.part2")}
              </p>

              <p className="text-sm leading-relaxed sm:text-base">
                {t("whoWeAre.para2")}
              </p>
            </div>

            {/* Core Pillars Grid - ALL CARDS BLACK */}
            <div className="mb-8 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
              <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-amber-600">
                {t("whoWeAre.pillarsTitle")}
              </span>
              <div className="grid grid-cols-3 gap-4">
                {/* 1. MISSION CARD */}
                <div className="group flex flex-col items-center rounded-xl border border-slate-800 bg-slate-950 p-3.5 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg">
                  <span className="mb-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-slate-950">
                    <Target size={20} />
                  </span>
                  <span className="text-xs font-bold text-white transition-colors group-hover:text-amber-400">
                    {t("whoWeAre.pillars.mission.title")}
                  </span>
                  <span className="mt-0.5 text-[11px] font-medium text-slate-400">
                    {t("whoWeAre.pillars.mission.subtitle")}
                  </span>
                </div>

                {/* 2. VISION CARD */}
                <div className="group flex flex-col items-center rounded-xl border border-slate-800 bg-slate-950 p-3.5 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg">
                  <span className="mb-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-slate-950">
                    <Eye size={20} />
                  </span>
                  <span className="text-xs font-bold text-white transition-colors group-hover:text-amber-400">
                    {t("whoWeAre.pillars.vision.title")}
                  </span>
                  <span className="mt-0.5 text-[11px] font-medium text-slate-400">
                    {t("whoWeAre.pillars.vision.subtitle")}
                  </span>
                </div>

                {/* 3. VALUES CARD */}
                <div className="group flex flex-col items-center rounded-xl border border-slate-800 bg-slate-950 p-3.5 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg">
                  <span className="mb-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-slate-950">
                    <Sparkles size={20} />
                  </span>
                  <span className="text-xs font-bold text-white transition-colors group-hover:text-amber-400">
                    {t("whoWeAre.pillars.values.title")}
                  </span>
                  <span className="mt-0.5 text-[11px] font-medium text-slate-400">
                    {t("whoWeAre.pillars.values.subtitle")}
                  </span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-4 border-b border-slate-200 pb-8 text-xs font-semibold text-slate-700 lg:justify-start">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-3.5 py-2 transition-all duration-300 hover:border-amber-300 hover:bg-amber-50/50">
                <Globe
                  size={16}
                  className="text-amber-500 transition-transform duration-300 hover:rotate-12"
                />
                <span>{t("whoWeAre.badges.globalReach")}</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-3.5 py-2 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50/50">
                <ShieldCheck
                  size={16}
                  className="text-emerald-600 transition-transform duration-300 hover:scale-110"
                />
                <span>{t("whoWeAre.badges.transparent")}</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-3.5 py-2 transition-all duration-300 hover:border-amber-300 hover:bg-amber-50/50">
                <Handshake
                  size={16}
                  className="text-amber-500 transition-transform duration-300 hover:scale-110"
                />
                <span>{t("whoWeAre.badges.partners")}</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="/about"
                className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-105 hover:shadow-amber-500/40 active:scale-95"
              >
                <span className="text-white">{t("whoWeAre.cta")}</span>
                <ChevronRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE BENTO GRID */}
          <div className="lg:col-span-5">
            <div className="grid gap-4">
              {/* Top Large Image */}
              <div className="group relative h-[280px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl transition-all duration-500 hover:shadow-2xl">
                <img
                  src="/programs.png"
                  alt={t("whoWeAre.images.programsAlt")}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                <div className="absolute right-4 top-4 rounded-full border border-amber-300 bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                  <span className="text-xs font-extrabold text-amber-600">
                    {t("whoWeAre.images.since")}
                  </span>
                </div>
              </div>

              {/* Bottom Split Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group relative h-[180px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md transition-all duration-500 hover:shadow-xl">
                  <img
                    src="/img.webp"
                    alt={t("whoWeAre.images.globalNetworkAlt")}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                  <span className="absolute bottom-3 left-3 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-bold text-amber-700 shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:translate-x-1">
                    {t("whoWeAre.images.globalNetworkLabel")}
                  </span>
                </div>

                <div className="group relative h-[180px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md transition-all duration-500 hover:shadow-xl">
                  <img
                    src="/img1.png"
                    alt={t("whoWeAre.images.communityImpactAlt")}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                  <span className="absolute bottom-3 left-3 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-bold text-emerald-700 shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:translate-x-1">
                    {t("whoWeAre.images.communityFirst")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========== OUR ECOSYSTEM SECTION ========== */}
        <div className="pt-4">
          {/* Section Header */}
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-1.5 shadow-sm transition-transform duration-300 hover:scale-105">
              <span className="text-xs font-extrabold uppercase tracking-widest text-white">
                {t("ecosystem.badge")}
              </span>
            </div>

            <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {t("ecosystem.headingPart1")}{" "}
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                {t("ecosystem.headingHighlight")}
              </span>
            </h3>
          </div>

          {/* Ecosystem Flow Timeline */}
          <div className="relative mx-auto max-w-6xl">
            {/* Horizontal Connecting Dotted Line (Desktop View) */}
            <div className="absolute top-[88px] left-[10%] right-[10%] hidden h-[2px] border-b-2 border-dashed border-amber-300/80 lg:block" />

            {/* Nodes Grid */}
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
              {ecosystemItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Circle Image Frame */}
                  <div className="relative z-10 mb-5 flex h-44 w-44 items-center justify-center rounded-full border-[3px] border-amber-400/80 bg-white p-1.5 shadow-md transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-amber-500 group-hover:shadow-2xl hover:shadow-amber-500/20">
                    <div className="relative h-full w-full overflow-hidden rounded-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>

                    {/* Floating Bottom Icon Badge */}
                    <div className="absolute -bottom-3 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:border-amber-400 group-hover:shadow-lg">
                      {item.icon}
                    </div>

                    {/* Connecting Dot between nodes */}
                    {index < ecosystemItems.length - 1 && (
                      <div className="absolute -right-5 top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-amber-400 shadow-sm transition-all duration-300 group-hover:scale-125 group-hover:bg-amber-500 lg:block" />
                    )}
                  </div>

                  {/* Node Title & Description */}
                  <div className="mt-2 max-w-[200px]">
                    <h4 className="text-lg font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-amber-600">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-xs font-normal leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-slate-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;