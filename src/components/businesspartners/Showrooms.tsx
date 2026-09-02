import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileCheck,
  Handshake,
  Target,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ShowroomBenefit {
  icon: React.ElementType;
  title: string;
  text: string;
}

export const Showrooms: React.FC = () => {
  const { t } = useTranslation("business");

  const showroomBenefits: ShowroomBenefit[] = [
    {
      icon: Handshake,
      title: t("showrooms.benefits.0.title"),
      text: t("showrooms.benefits.0.text"),
    },
    {
      icon: Target,
      title: t("showrooms.benefits.1.title"),
      text: t("showrooms.benefits.1.text"),
    },
    {
      icon: TrendingUp,
      title: t("showrooms.benefits.2.title"),
      text: t("showrooms.benefits.2.text"),
    },
    {
      icon: BadgeCheck,
      title: t("showrooms.benefits.3.title"),
      text: t("showrooms.benefits.3.text"),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#000000]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#C6922B]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C6922B]/30 bg-[#C6922B]/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C6922B]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C6922B]">
              {t("showrooms.badge")}
            </span>
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight text-[#000000] sm:text-5xl">
            {t("showrooms.title.before")}{" "}
            <span className="bg-gradient-to-r from-[#C6922B] via-[#E2B354] to-[#C6922B] bg-clip-text text-transparent">
              {t("showrooms.title.highlight")}
            </span>{" "}
            {t("showrooms.title.after")}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#55708F] sm:text-lg">
            {t("showrooms.description")}
          </p>
        </div>

        {/* ================= CONTENT GRID ================= */}
        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-6">
            {/* Text Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-[#D9E3EF] bg-[#F8FAFC] p-8 shadow-xl shadow-[#000000]/5 sm:p-10">
              {/* Decorative Glows */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#C6922B]/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#000000]/5 blur-3xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#000000] text-[#C6922B] shadow-lg shadow-[#000000]/10">
                  <Building2 size={32} />
                </div>

                {/* Heading */}
                <h3 className="mt-7 text-2xl font-black text-[#000000] sm:text-3xl">
                  {t("showrooms.becomeHeading")}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-relaxed text-[#55708F]">
                  {t("showrooms.becomeText1")}
                </p>

                <p className="mt-3 leading-relaxed text-[#55708F]">
                  {t("showrooms.becomeText2")}
                </p>

                {/* Partnership Process */}
                <div className="mt-7 rounded-2xl border border-[#C6922B]/30 bg-white px-5 py-2 shadow-sm">
                  <div className="flex items-start gap-3.5">
                    {/* Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C6922B]/10 text-[#C6922B]">
                      <FileCheck size={20} />
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="text-sm font-bold text-[#000000]">
                        {t("showrooms.process.title")}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-[#55708F]">
                        {t("showrooms.process.text")}
                      </p>
                    </div>
                  </div>
                </div>


              </div>
            </div>

            {/* ================= IMAGE CARD ================= */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-[#D9E3EF] bg-white p-2 shadow-xl shadow-[#000000]/5 transition-all duration-500 hover:border-[#C6922B]/50 hover:shadow-2xl hover:shadow-[#C6922B]/10">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <img
                  src="https://media.istockphoto.com/id/1156318952/photo/happy-expecting-couple-communicating-with-manager-while-buying-a-car-in-a-showroom.jpg?s=612x612&w=0&k=20&c=YvMnoMNDt2SghkZzFecADg0ywjQb55_OXCau7VwXre4="
                  alt={t("showrooms.imageAlt")}
                  className="h-[280px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[320px]"
                />

                {/* Subtle Glass Overlay on Hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-[#000000]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Glass Light Shine */}
                <div className="pointer-events-none absolute -left-[100%] top-0 h-full w-[50%] rotate-12 bg-white/20 blur-xl transition-all duration-1000 group-hover:left-[120%]" />
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-5">
            {/* Benefits Cards */}
            {showroomBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group relative overflow-hidden rounded-2xl border border-[#D9E3EF] bg-white p-7 shadow-sm transition-all duration-500 ease-in-out hover:-translate-y-1.5 hover:border-[#C6922B]/60 hover:bg-[#000000] hover:shadow-xl hover:shadow-[#000000]/15"
                >
                  {/* Top Accent Line on Hover */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#000000] via-[#C6922B] to-[#E2B354] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="flex gap-6">
                    {/* Icon */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#000000]/5 text-[#000000] transition-all duration-500 group-hover:bg-[#C6922B] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#C6922B]/30">
                      <Icon size={24} />
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-[#000000] transition-colors duration-500 group-hover:text-white">
                          {benefit.title}
                        </h3>
                        <span className="text-xs font-black text-[#C6922B]/40 transition-colors duration-500 group-hover:text-[#C6922B]">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-relaxed text-[#55708F] transition-colors duration-500 group-hover:text-slate-200">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom Info Banner */}
            <div className="rounded-2xl border border-[#D9E3EF] bg-[#F8FAFC] p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#000000] text-[#C6922B]">
                  <Handshake size={21} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#000000]">
                    {t("showrooms.banner.title")}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-[#55708F]">
                    {t("showrooms.banner.text")}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link to="/contact-us">
              <button className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#000000] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#000000]/10 transition-all duration-300 hover:bg-[#C6922B] hover:shadow-xl hover:shadow-[#C6922B]/25 active:scale-[0.99] sm:w-auto">
                <span>{t("showrooms.cta")}</span>
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showrooms;
