
import React from "react";
import {
  Handshake,
  Store,
  Building2,
  Users,
  BriefcaseBusiness,
  TrendingUp,
  Laptop,
  Sparkles,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface PartnerCard {
  icon: LucideIcon;
  title: string;
  text: string;
  badge?: string;
  image: string;
}

const BusinessPartnersHero: React.FC = () => {
  const { t } = useTranslation("business");

  const partnerCards: PartnerCard[] = [
    {
      icon: Store,
      title: t("hero.cards.0.title"),
      text: t("hero.cards.0.text"),
      badge: t("hero.cards.0.badge"),
      image:
        "https://i.pinimg.com/736x/73/73/33/737333b121b2291d32497439795b10bf.jpg",
    },
    {
      icon: Building2,
      title: t("hero.cards.1.title"),
      text: t("hero.cards.1.text"),
      badge: t("hero.cards.1.badge"),
      image:
        "https://i.pinimg.com/1200x/6a/9a/66/6a9a661a89881207fcc24bf0c16e5bf5.jpg",
    },
    {
      icon: TrendingUp,
      title: t("hero.cards.2.title"),
      text: t("hero.cards.2.text"),
      badge: t("hero.cards.2.badge"),
      image:
        "https://i.pinimg.com/736x/b1/a8/ee/b1a8ee6bcbce0d3cf35f6bfb1ebc7520.jpg",
    },
    {
      icon: Users,
      title: t("hero.cards.3.title"),
      text: t("hero.cards.3.text"),
      badge: t("hero.cards.3.badge"),
      image:
        "https://i.pinimg.com/736x/89/de/d7/89ded76624f85cf9c28b078abf09303a.jpg",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC]/60 to-white text-[#000000]">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#C6922B]/10 via-[#C6922B]/5 to-transparent blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-[#000000]/10 via-[#000000]/5 to-transparent blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-12 lg:gap-12">

          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-6 xl:col-span-5">

            {/* Badge */}
            <div className="group mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#C6922B]/40 bg-gradient-to-r from-[#C6922B]/10 via-[#C6922B]/5 to-transparent px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#C6922B] shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#C6922B]">
              <Sparkles size={14} className="animate-pulse" />
              <span>{t("hero.badge")}</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold text-[#000000] sm:text-6xl ">
              {t("hero.title.line1")}
              <br />

              <span className="bg-gradient-to-r from-[#C6922B] via-[#dfa838] to-[#C6922B] bg-clip-text text-transparent">
                {t("hero.title.line2")}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base font-normal leading-relaxed text-[#31527A] sm:text-lg">
              {t("hero.description")}

            </p>

            {/* Feature Grid */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { label: t("hero.features.0.label"), icon: Handshake },
                { label: t("hero.features.1.label"), icon: TrendingUp },
                { label: t("hero.features.2.label"), icon: BriefcaseBusiness },
                { label: t("hero.features.3.label"), icon: Laptop },
              ].map((item, idx) => {
                const ItemIcon = item.icon;

                return (
                  <div
                    key={idx}
                      className="group flex items-center gap-3 rounded-xl border border-[#D9E3EF]/80 bg-white/80 p-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C6922B]/60 hover:bg-[#000000] hover:shadow-lg hover:shadow-[#000000]/10"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#000000]/5 text-[#000000] transition-colors duration-300 group-hover:bg-[#C6922B] group-hover:text-white">
                        <ItemIcon size={17} strokeWidth={2.2} />
                      </div>

                      <span className="text-xs font-semibold text-[#000000] transition-colors duration-300 group-hover:text-white">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact-us"
                type="button"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#000000] px-5 py-2.5 text-sm font-bold text-white shadow-xl shadow-[#000000]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#16385F] hover:shadow-[#000000]/30 active:translate-y-0"
              >
                <span className="relative text-white z-10 flex items-center gap-2">
                  {t("hero.becomePartner")}
                  <Zap
                    size={16}
                    className="text-[#C6922B] transition-transform duration-300 group-hover:scale-110"
                  />
                </span>
              </Link>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#C6922B]/80 bg-white/50 px-5 py-2.5 text-sm font-bold text-[#000000] shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#C6922B] hover:bg-[#C6922B] hover:text-white"
              >
                {t("hero.exploreFramework")}
              </button>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="relative rounded-[32px] border border-[#D9E3EF] bg-white/80 p-6 shadow-2xl shadow-[#000000]/5 backdrop-blur-xl sm:p-8">

              {/* Card Header */}
              <div className="mb-8 flex flex-col gap-4 border-b border-[#D9E3EF]/60 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C6922B]">
                    <ShieldCheck size={16} />
                    <span>{t("hero.card.brand")}</span>
                  </div>

                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#000000] sm:text-3xl">
                    {t("hero.card.heading")}
                  </h2>
                </div>

                <span className="inline-flex self-start rounded-full bg-[#000000]/5 px-3.5 py-1 text-xs font-medium text-[#31527A] sm:self-auto">
                  {t("hero.card.categories")}
                </span>
              </div>

              {/* Partner Cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {partnerCards.map((partner) => {
                  const Icon = partner.icon;

                  return (
                    <div
                      key={partner.title}
                      className="group relative flex min-h-[245px] flex-col justify-between overflow-hidden rounded-2xl border border-[#D9E3EF] bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#C6922B]/70 hover:bg-[#000000] hover:shadow-xl hover:shadow-[#000000]/10"
                    >
                      {/* Background Image */}
                      <img
                        src={partner.image}
                        alt={partner.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Base dark overlay for readability */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/10 via-[#000000]/25 to-[#000000]/70 transition-all duration-500 group-hover:from-[#000000]/45 group-hover:via-[#000000]/65 group-hover:to-[#000000]/90" />

                      {/* Gold Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C6922B]/0 via-[#000000]/10 to-[#C6922B]/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Top Gold Line */}
                      <div className="absolute left-0 right-0 top-0 z-20 h-1 bg-gradient-to-r from-transparent via-[#C6922B]/0 to-transparent transition-all duration-500 group-hover:via-[#C6922B]" />

                      {/* Card Content */}
                      <div className="relative z-10 flex h-full flex-col justify-between p-6">
                        <div className="translate-y-2 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                          <div className="mb-4 flex items-center justify-between">
                            {/* Icon */}
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/95 text-[#000000] shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#C6922B] group-hover:text-white">
                              <Icon size={22} strokeWidth={2} />
                            </div>

                            {/* Badge */}
                            {partner.badge && (
                              <span className="rounded-md border border-white/30 bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#C6922B] shadow-sm backdrop-blur-sm">
                                {partner.badge}
                              </span>
                            )}
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#FFD76A]">
                            {partner.title}
                          </h3>

                          {/* Description */}
                          <p className="mt-2 text-xs font-normal leading-relaxed text-white/90">
                            {partner.text}
                          </p>
                        </div>

                        {/* Bottom */}
                        <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-3 text-[11px] font-semibold">
                          <span className="flex items-center gap-1 text-[#FFD76A] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                            {t("hero.applyNow")}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Notice */}
              <div className="mt-6 flex items-start gap-4 rounded-2xl border border-[#C6922B]/30 bg-gradient-to-r from-[#C6922B]/10 via-[#C6922B]/5 to-transparent p-5 backdrop-blur-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C6922B] text-white shadow-md shadow-[#C6922B]/20">
                  <BriefcaseBusiness size={20} strokeWidth={2} />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#000000]">
                    {t("hero.notice.title")}
                  </h4>

                  <p className="mt-1 text-xs leading-relaxed text-[#31527A]">
                    {t("hero.notice.text")}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessPartnersHero;

