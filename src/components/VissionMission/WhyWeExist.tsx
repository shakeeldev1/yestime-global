import React from "react";
import {
  Globe2,
  ShieldCheck,
  Users,
  TrendingUp,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyWeExist: React.FC = () => {
  const { t } = useTranslation("vision");

  return (
    <section className="bg-white px-5 py-14 md:px-10">

      <div className="mx-auto max-w-[1100px] text-center">

        {/* Label */}
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d69b22]">
          {t("whyWeExist.eyebrow")}
        </p>

        {/* Heading */}
        <h2 className="mt-3 text-3xl font-bold text-[#122033] md:text-4xl">
          {t("whyWeExist.heading")}
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-[760px] text-sm leading-6 text-gray-500 md:text-base md:leading-7">
          {t("whyWeExist.description")}
        </p>

        {/* Cards */}
        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">

          {/* Card 1 */}
          <div className="flex min-h-[90px] items-center justify-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-5 shadow-[0_3px_15px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <Globe2 className="h-6 w-6 shrink-0 text-[#d69b22]" />

            <p className="text-sm font-semibold text-gray-700 md:text-base">
              {t("whyWeExist.cards.globalOpportunities")}
            </p>

          </div>

          {/* Card 2 */}
          <div className="flex min-h-[90px] items-center justify-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-5 shadow-[0_3px_15px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <ShieldCheck className="h-6 w-6 shrink-0 text-[#d69b22]" />

            <p className="text-sm font-semibold text-gray-700 md:text-base">
              {t("whyWeExist.cards.transparentProcess")}
            </p>

          </div>

          {/* Card 3 */}
          <div className="flex min-h-[90px] items-center justify-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-5 shadow-[0_3px_15px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <ShieldCheck className="h-6 w-6 shrink-0 text-[#d69b22]" />

            <p className="text-sm font-semibold text-gray-700 md:text-base">
              {t("whyWeExist.cards.secureTrusted")}
            </p>

          </div>

          {/* Card 4 */}
          <div className="flex min-h-[90px] items-center justify-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-5 shadow-[0_3px_15px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <Users className="h-6 w-6 shrink-0 text-[#d69b22]" />

            <p className="text-sm font-semibold text-gray-700 md:text-base">
              {t("whyWeExist.cards.everyoneCanJoin")}
            </p>

          </div>

          {/* Card 5 */}
          <div className="flex min-h-[90px] items-center justify-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-5 shadow-[0_3px_15px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <TrendingUp className="h-6 w-6 shrink-0 text-[#d69b22]" />

            <p className="text-sm font-semibold text-gray-700 md:text-base">
              {t("whyWeExist.cards.longTermGrowth")}
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;