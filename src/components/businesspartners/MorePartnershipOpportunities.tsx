import React from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  FileCheck,
  Handshake,
  SearchCheck,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Globe2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface PartnerType {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ProcessStep {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Highlight {
  icon: React.ElementType;
  title: string;
  description: string;
}

const MorePartnershipOpportunities: React.FC = () => {
  const { t } = useTranslation("business");

  const partnerTypes: PartnerType[] = [
    {
      icon: TrendingUp,
      title: t("more.partnerTypes.0.title"),
      description: t("more.partnerTypes.0.description"),
    },
    {
      icon: Users,
      title: t("more.partnerTypes.1.title"),
      description: t("more.partnerTypes.1.description"),
    },
    {
      icon: Building2,
      title: t("more.partnerTypes.2.title"),
      description: t("more.partnerTypes.2.description"),
    },
    {
      icon: BriefcaseBusiness,
      title: t("more.partnerTypes.3.title"),
      description: t("more.partnerTypes.3.description"),
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      icon: FileCheck,
      title: t("more.processSteps.0.title"),
      description: t("more.processSteps.0.description"),
    },
    {
      number: "02",
      icon: SearchCheck,
      title: t("more.processSteps.1.title"),
      description: t("more.processSteps.1.description"),
    },
    {
      number: "03",
      icon: Target,
      title: t("more.processSteps.2.title"),
      description: t("more.processSteps.2.description"),
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: t("more.processSteps.3.title"),
      description: t("more.processSteps.3.description"),
    },
    {
      number: "05",
      icon: Handshake,
      title: t("more.processSteps.4.title"),
      description: t("more.processSteps.4.description"),
    },
    {
      number: "06",
      icon: CheckCircle2,
      title: t("more.processSteps.5.title"),
      description: t("more.processSteps.5.description"),
    },
  ];

  const highlights: Highlight[] = [
    {
      icon: TrendingUp,
      title: t("more.highlights.0.title"),
      description: t("more.highlights.0.description"),
    },
    {
      icon: Handshake,
      title: t("more.highlights.1.title"),
      description: t("more.highlights.1.description"),
    },
    {
      icon: Target,
      title: t("more.highlights.2.title"),
      description: t("more.highlights.2.description"),
    },
    {
      icon: Globe2,
      title: t("more.highlights.3.title"),
      description: t("more.highlights.3.description"),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-10">

      {/* Background Glows */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#C6922B]/5 blur-[130px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#000000]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =========================================================
            SECTION HEADER
        ========================================================= */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-[#C6922B]">
            <span className="h-px w-7 bg-[#C6922B]" />
            {t("more.badge")}
            <span className="h-px w-7 bg-[#C6922B]" />
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#000000] sm:text-5xl">
  {t("more.title.before")}{" "}
  <span className="text-[#C6922B]">
    {t("more.title.highlight")}
  </span>
</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#31527A]">
           {t("more.description")}

          </p>

        </div>


        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {partnerTypes.map((partner) => {
            const Icon = partner.icon;

            return (
              <div
                key={partner.title}
                className="group relative overflow-hidden rounded-3xl border border-[#D9E3EF] bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C6922B]/60 hover:bg-[#000000] hover:shadow-xl hover:shadow-[#000000]/10"
              >

                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#C6922B] transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#000000] text-[#C6922B] shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:bg-[#C6922B] group-hover:text-white">
                  <Icon size={25} strokeWidth={2} />
                </div>

                {/* Number */}
                <span className="absolute right-6 top-6 text-xs font-bold tracking-widest text-[#D9E3EF]">
                  0{partnerTypes.indexOf(partner) + 1}
                </span>

                <h3 className="mt-7 text-xl font-bold text-[#000000] transition-colors duration-300 group-hover:text-[#C6922B]">
                  {partner.title}
                </h3>

                <div className="mt-3 h-px w-8 bg-[#C6922B] transition-all duration-300 group-hover:w-14" />

                <p className="mt-4 text-sm leading-7 text-[#31527A] transition-colors duration-300 group-hover:text-slate-200">
                  {partner.description}
                </p>

              </div>
            );
          })}

        </div>


        <div className="mt-10">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#C6922B]">
              {t("more.howItWorks")}
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#000000] sm:text-4xl">
              {t("more.processHeading")}
            </h2>

            <p className="mt-4 text-base leading-7 text-[#31527A]">
              {t("more.processDescription")}
            </p>

          </div>

          {/* Process Card */}
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-[#D9E3EF] bg-[#F8FAFC] p-7 sm:p-10 lg:p-12">

            {/* Decorative Glow */}
            <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#C6922B]/10 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {processSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="group relative rounded-2xl border border-[#D9E3EF] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6922B]/70 hover:bg-[#000000] hover:shadow-lg hover:shadow-[#000000]/5"
                  >

                    {/* Number */}
                    <div className="flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#000000]/5 text-[#000000] transition-all duration-300 group-hover:bg-[#C6922B] group-hover:text-white">
                        <Icon size={22} />
                      </div>

                      <span className="text-sm font-bold tracking-widest text-[#C6922B]">
                        {step.number}
                      </span>

                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#000000] transition-colors duration-300 group-hover:text-[#C6922B]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#31527A] transition-colors duration-300 group-hover:text-slate-200">
                      {step.description}
                    </p>

                  </div>
                );
              })}

            </div>
          </div>

        </div>

        {/* =========================================================
            PARTNERSHIP HIGHLIGHTS
        ========================================================= */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-[#000000] shadow-2xl shadow-[#000000]/10">

          <div className="relative px-7 py-12 sm:px-10 lg:px-14">

            {/* Background Decoration */}
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#C6922B]/10" />
            <div className="absolute -left-20 -bottom-32 h-72 w-72 rounded-full border border-white/5" />

            <div className="relative">

              {/* Heading */}
              <div className="text-center">

                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#C6922B]">
                  {t("more.highlightsBadge")}
                </span>

                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  {t("more.highlightsHeading")}
                </h2>

              </div>

              {/* Highlights */}
              <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                {highlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={`group text-center lg:px-5 ${index !== 0
                        ? "lg:border-l lg:border-white/10"
                        : ""
                        }`}
                    >

                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#C6922B]/40 bg-[#C6922B]/10 text-[#C6922B] transition-all duration-300 group-hover:bg-[#C6922B] group-hover:text-white">
                        <Icon size={24} />
                      </div>

                      <h3 className="mt-5 text-lg font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-white/65">
                        {item.description}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>
          </div>
        </div>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-[#D9E3EF] bg-white p-7 shadow-lg sm:p-10">

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

            {/* CTA Content */}
            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#000000] text-[#C6922B]">
                <Handshake size={27} />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C6922B]">
                  {t("more.cta.badge")}
                </span>

                <h3 className="mt-2 text-2xl font-bold text-[#000000] sm:text-3xl">
                  {t("more.cta.heading")}
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#31527A]">
                  {t("more.cta.text")}
                </p>
              </div>

            </div>

            {/* CTA Button */}

            <Link to="/contact-us">
            <button className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#C6922B] px-7 py-4 font-semibold text-white shadow-lg shadow-[#C6922B]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#000000] hover:shadow-[#000000]/20">

              {t("more.cta.button")}

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </button>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MorePartnershipOpportunities;
