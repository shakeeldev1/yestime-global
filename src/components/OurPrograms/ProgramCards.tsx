import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  ShoppingCart,
  Package,
  Fuel,
  Bike,
  Car,
  Home,
  Wheat,
  UserRound,
  CheckCircle2,
  ChevronRight,
  LayoutGrid,
  Globe,
  ShieldCheck,
  UserCheck,
  Store,
  Sprout,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface Program {
  number: number;
  slug: string;
  title: string;
  urduTitle: string;
  image: string;
  category: string;
  buttonBg: string;
  buttonHover: string;
  points: string[];
  icon: React.ReactNode;
}

interface CategoryDef {
  key: string;
  labelKey: string;
  icon: React.ReactNode;
}

// Stable (untranslated) category keys used for filtering — do not localize these values.
const CATEGORY_ALL = "All Programs";

const categoryDefs: CategoryDef[] = [
  { key: "All Programs", labelKey: "categories.allPrograms", icon: <LayoutGrid size={15} /> },
  { key: "Shopping", labelKey: "categories.shopping", icon: <ShoppingCart size={15} /> },
  { key: "Vehicles", labelKey: "categories.vehicles", icon: <Car size={15} /> },
  { key: "Property", labelKey: "categories.property", icon: <Home size={15} /> },
  { key: "Daily Essentials", labelKey: "categories.dailyEssentials", icon: <Store size={15} /> },
  { key: "Agriculture", labelKey: "categories.agriculture", icon: <Sprout size={15} /> },
  { key: "Self Service", labelKey: "categories.selfService", icon: <UserRound size={15} /> },
];

const ProgramCards: React.FC = () => {
  const { t } = useTranslation("ourPrograms");
  const [activeTab, setActiveTab] = useState(CATEGORY_ALL);
  const navigate = useNavigate();

  const programs: Program[] = [
    {
      number: 1,
      slug: "shop-saving",
      title: t("cards.shopSaving.title"),
      urduTitle: t("cards.shopSaving.urduTitle"),
      image:
        "https://i.pinimg.com/736x/89/ac/78/89ac7841d71b268c291db5110f1075a7.jpg",
      category: "Shopping",
      buttonBg: "bg-emerald-600",
      buttonHover: "hover:bg-emerald-700",
      points: t("cards.shopSaving.points", { returnObjects: true }) as string[],
      icon: <ShoppingCart size={18} />,
    },
    {
      number: 2,
      slug: "wholesale-saving",
      title: t("cards.wholesaleSaving.title"),
      urduTitle: t("cards.wholesaleSaving.urduTitle"),
      image:
        "https://i.pinimg.com/736x/db/4a/bd/db4abde92ab95b14c22e716e524f9b19.jpg",
      category: "Daily Essentials",
      buttonBg: "bg-blue-600",
      buttonHover: "hover:bg-blue-700",
      points: t("cards.wholesaleSaving.points", { returnObjects: true }) as string[],
      icon: <Package size={18} />,
    },
    {
      number: 3,
      slug: "petrol-diesel-saving",
      title: t("cards.petrolDieselSaving.title"),
      urduTitle: t("cards.petrolDieselSaving.urduTitle"),
      image:
        "https://i.pinimg.com/1200x/8b/07/a6/8b07a673cc9b0bd1feb8c7011afa7852.jpg",
      category: "Vehicles",
      buttonBg: "bg-orange-600",
      buttonHover: "hover:bg-orange-700",
      points: t("cards.petrolDieselSaving.points", { returnObjects: true }) as string[],
      icon: <Fuel size={18} />,
    },
    {
      number: 4,
      slug: "motorcycle-scooty-saving",
      title: t("cards.motorcycleScootySaving.title"),
      urduTitle: t("cards.motorcycleScootySaving.urduTitle"),
      image:
        "https://i.pinimg.com/1200x/75/06/48/750648da4ecca79d29ecb1dc69588a4d.jpg",
      category: "Vehicles",
      buttonBg: "bg-purple-600",
      buttonHover: "hover:bg-purple-700",
      points: t("cards.motorcycleScootySaving.points", { returnObjects: true }) as string[],
      icon: <Bike size={18} />,
    },
    {
      number: 5,
      slug: "car-saving",
      title: t("cards.carSaving.title"),
      urduTitle: t("cards.carSaving.urduTitle"),
      image:
        "https://i.pinimg.com/1200x/59/e3/99/59e399be0539b9a6e5c0aca0d77907eb.jpg",
      category: "Vehicles",
      buttonBg: "bg-indigo-600",
      buttonHover: "hover:bg-indigo-700",
      points: t("cards.carSaving.points", { returnObjects: true }) as string[],
      icon: <Car size={18} />,
    },
    {
      number: 6,
      slug: "car-plan",
      title: t("cards.carPlan.title"),
      urduTitle: t("cards.carPlan.urduTitle"),
      image:
        "/img3.png",
      category: "Vehicles",
      buttonBg: "bg-cyan-600",
      buttonHover: "hover:bg-cyan-700",
      points: t("cards.carPlan.points", { returnObjects: true }) as string[],
      icon: <Car size={18} />,
    },
    {
      number: 7,
      slug: "property-saving",
      title: t("cards.propertySaving.title"),
      urduTitle: t("cards.propertySaving.urduTitle"),
      image:
        "https://i.pinimg.com/1200x/56/e6/51/56e65103b9d9741631507ad6484af831.jpg",
      category: "Property",
      buttonBg: "bg-teal-600",
      buttonHover: "hover:bg-teal-700",
      points: t("cards.propertySaving.points", { returnObjects: true }) as string[],
      icon: <Home size={18} />,
    },
    {
      number: 8,
      slug: "crop-saving",
      title: t("cards.cropSaving.title"),
      urduTitle: t("cards.cropSaving.urduTitle"),
      image:
        "https://i.pinimg.com/1200x/23/6a/8d/236a8da3b426bcf66da83c4947359e7d.jpg",
      category: "Agriculture",
      buttonBg: "bg-amber-600",
      buttonHover: "hover:bg-amber-700",
      points: t("cards.cropSaving.points", { returnObjects: true }) as string[],
      icon: <Wheat size={18} />,
    },
    {
      number: 9,
      slug: "self-service-saving",
      title: t("cards.selfServiceSaving.title"),
      urduTitle: t("cards.selfServiceSaving.urduTitle"),
      image:
        "https://i.pinimg.com/1200x/33/41/a1/3341a1c69627a3e23f53db9ed14eb24a.jpg",
      category: "Self Service",
      buttonBg: "bg-rose-600",
      buttonHover: "hover:bg-rose-700",
      points: t("cards.selfServiceSaving.points", { returnObjects: true }) as string[],
      icon: <UserRound size={18} />,
    },
  ];

  const filteredPrograms =
    activeTab === CATEGORY_ALL
      ? programs
      : programs.filter((p) => p.category === activeTab);

  return (
    <section className="bg-[#f8fafc] px-4 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        {/* HEADER SECTION */}
        <div className="mx-auto max-w-[750px] text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#c5962e]/40 bg-white px-3 py-1 shadow-xs">
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#c5962e] text-[8px] font-bold text-[#071a36]">
              G
            </span>
            <span className="text-[10px] font-bold tracking-wider text-[#c5962e] uppercase">
              {t("cardsSection.badge")}
            </span>
          </div>

          <h2 className="text-4xl font-extrabold text-[#071a36] sm:text-5xl">
            {t("cardsSection.headingLead")}{" "}
            <span className="text-[#c5962e]">{t("cardsSection.headingHighlight")}</span>
          </h2>

          <p className="mt-2 text-xs text-slate-500 sm:text-sm">
            {t("cardsSection.subtitle")}
          </p>
        </div>

        {/* STATS ROW */}
        <div className="mx-auto mt-8 flex max-w-[900px] flex-wrap items-center justify-around gap-6 rounded-2xl border border-slate-200/80 bg-white px-6 py-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
              <LayoutGrid size={20} />
            </div>
            <div className="text-left">
              <span className="block text-lg font-extrabold leading-none text-slate-900">
                9
              </span>
              <span className="text-[11px] font-semibold text-slate-500">
                {t("cardsSection.stats.powerfulPrograms")}
              </span>
            </div>
          </div>

          <div className="hidden h-8 w-[1px] bg-slate-200 sm:block" />

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
              <Globe size={20} />
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold leading-tight text-slate-900">
                {t("cardsSection.stats.global")}
              </span>
              <span className="text-[11px] font-semibold text-slate-500">
                {t("cardsSection.stats.opportunities")}
              </span>
            </div>
          </div>

          <div className="hidden h-8 w-[1px] bg-slate-200 sm:block" />

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
              <ShieldCheck size={20} />
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold leading-tight text-slate-900">
                {t("cardsSection.stats.trusted")}
              </span>
              <span className="text-[11px] font-semibold text-slate-500">
                {t("cardsSection.stats.platform")}
              </span>
            </div>
          </div>

          <div className="hidden h-8 w-[1px] bg-slate-200 sm:block" />

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
              <UserCheck size={20} />
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold leading-tight text-slate-900">
                {t("cardsSection.stats.member")}
              </span>
              <span className="text-[11px] font-semibold text-slate-500">
                {t("cardsSection.stats.focused")}
              </span>
            </div>
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categoryDefs.map((cat) => {
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 active:scale-95 ${
                  isActive
                    ? "scale-105 bg-slate-900 text-white shadow-md"
                    : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {cat.icon}
                <span>{t(cat.labelKey)}</span>
              </button>
            );
          })}
        </div>

        {/* CARDS GRID */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredPrograms.map((program) => (
            <article
              key={program.number}
              onClick={() => navigate(program.slug === 'car-plan' ? '/car-plan' : `/program/${program.slug}`)}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl cursor-pointer"
            >
              {/* TOP MEDIA */}
              <div className="relative h-[190px] w-full overflow-hidden bg-slate-100 p-0">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />

                <div className="absolute -bottom-4 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-[#000000] text-[#c5962e] shadow-md ring-4 ring-white">
                  {program.icon}
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="flex flex-1 flex-col justify-between p-5 pt-6 text-center">
                <div>
                  <h3 className="text-xs font-extrabold tracking-wider text-slate-900 uppercase">
                    {program.title}
                  </h3>
                  <p className="mt-0.5 font-semibold text-xs text-slate-500">
                    {program.urduTitle}
                  </p>

                  <ul className="mt-4 space-y-2.5 text-left">
                    {program.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs font-medium text-slate-600"
                      >
                        <CheckCircle2
                          size={14}
                          className="shrink-0 text-[#c5962e]"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* COLORFUL CATEGORY BUTTON */}
                <button
                  onClick={() => navigate(program.slug === 'car-plan' ? '/car-plan' : `/program/${program.slug}`)}
                  className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#c5962e_0%,#f0c75e_100%)] px-5 py-2.5 text-xs font-bold text-[#000000] shadow-[0_10px_22px_rgba(197,150,46,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 active:scale-95"
                >
                  <span>{program.slug === 'car-plan' ? t("cardsSection.viewCarPlan") : t("cardsSection.viewProgram")}</span>
                  <ChevronRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCards;
