import React from "react";
import {
  Handshake,
  ShieldCheck,
  Heart,
  Cpu,
  Globe2,
  Building2,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const BasicPriorities: React.FC = () => {
  const { t } = useTranslation("vision");

  const priorities = [
    {
      number: "01",
      title: t("basicPriorities.items.trust.title"),
      text: t("basicPriorities.items.trust.text"),
      image: "/img9.png",
      icon: Handshake,
    },
    {
      number: "02",
      title: t("basicPriorities.items.transparency.title"),
      text: t("basicPriorities.items.transparency.text"),
      image: "/vs3.png",
      icon: ShieldCheck,
    },
    {
      number: "03",
      title: t("basicPriorities.items.care.title"),
      text: t("basicPriorities.items.care.text"),
      image: "/vs4.png",
      icon: Heart,
    },
    {
      number: "04",
      title: t("basicPriorities.items.modernTechnology.title"),
      text: t("basicPriorities.items.modernTechnology.text"),
      image: "/vs5.png",
      icon: Cpu,
    },
    {
      number: "05",
      title: t("basicPriorities.items.globalReach.title"),
      text: t("basicPriorities.items.globalReach.text"),
      image: "/img12.png",
      icon: Globe2,
    },
    {
      number: "06",
      title: t("basicPriorities.items.yesTimeGlobal.title"),
      text: t("basicPriorities.items.yesTimeGlobal.text"),
      image: "/variant2_square.webp",
      icon: Building2,
    },
  ];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px]">

        {/* ================= HEADER ================= */}
        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d69b22] md:text-sm">
            {t("basicPriorities.eyebrow")}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#142238] md:text-4xl">
            {t("basicPriorities.headingLine1")}{" "}
            <span className="text-[#d69b22]">
              {t("basicPriorities.headingHighlight")}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[700px] text-sm leading-6 text-gray-500 md:text-base md:leading-7">
            {t("basicPriorities.description")}
          </p>

        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {priorities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_3px_15px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]"
              >

                {/* ================= IMAGE ================= */}
                <div className="relative h-[210px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Number */}
                  <span className="absolute left-4 top-4 rounded-full bg-[#e5aa2d] px-3 py-1 text-xs font-bold text-white">
                    {item.number}
                  </span>

                </div>

                {/* ================= CONTENT ================= */}
                <div className="p-7 sm:p-8">

                  {/* Icon + Title */}
                  <div className="flex items-center gap-3.5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fdf5e3]">
                      <Icon className="h-6 w-6 text-[#d69b22]" />
                    </div>

                    <h3 className="text-lg font-bold text-[#172235] md:text-xl">
                      {item.title}
                    </h3>

                  </div>

                  {/* Gold Line */}
                  <div className="mt-4 h-[2px] w-10 bg-[#e5aa2d]" />

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-gray-600 md:text-[15px]">
                    {item.text}
                  </p>

                </div>

              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default BasicPriorities;