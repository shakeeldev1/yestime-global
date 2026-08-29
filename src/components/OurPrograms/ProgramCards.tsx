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

const programs: Program[] = [
  {
    number: 1,
    slug: "shop-saving",
    title: "SHOPPING SAVING",
    urduTitle: "شاپنگ سیونگ",
    image:
      "https://i.pinimg.com/736x/89/ac/78/89ac7841d71b268c291db5110f1075a7.jpg",
    category: "Shopping",
    buttonBg: "bg-emerald-600",
    buttonHover: "hover:bg-emerald-700",
    points: ["Daily Essentials", "Every 1 Minute", "1 منٹ میں 1 پر"],
    icon: <ShoppingCart size={18} />,
  },
  {
    number: 2,
    slug: "wholesale-saving",
    title: "WHOLESALE SAVING",
    urduTitle: "ہول سیل سیونگ",
    image:
      "https://i.pinimg.com/736x/db/4a/bd/db4abde92ab95b14c22e716e524f9b19.jpg",
    category: "Daily Essentials",
    buttonBg: "bg-blue-600",
    buttonHover: "hover:bg-blue-700",
    points: ["Bulk Purchases", "Every 1 Minute", "ہر 1 منٹ میں"],
    icon: <Package size={18} />,
  },
  {
    number: 3,
    slug: "petrol-diesel-saving",
    title: "PETROL & DIESEL SAVING",
    urduTitle: "پٹرول و ڈیزل سیونگ",
    image:
      "https://i.pinimg.com/1200x/8b/07/a6/8b07a673cc9b0bd1feb8c7011afa7852.jpg",
    category: "Vehicles",
    buttonBg: "bg-orange-600",
    buttonHover: "hover:bg-orange-700",
    points: ["Fuel Purchases", "Every 1 Minute", "ہر 1 منٹ میں"],
    icon: <Fuel size={18} />,
  },
  {
    number: 4,
    slug: "motorcycle-scooty-saving",
    title: "MOTORCYCLE & SCOOTY SAVING",
    urduTitle: "موٹر سائیکل و اسکوٹی سیونگ",
    image:
      "https://i.pinimg.com/1200x/75/06/48/750648da4ecca79d29ecb1dc69588a4d.jpg",
    category: "Vehicles",
    buttonBg: "bg-purple-600",
    buttonHover: "hover:bg-purple-700",
    points: ["New or Used", "Every 1 Minute", "ہر 1 منٹ میں 1 پر"],
    icon: <Bike size={18} />,
  },
  {
    number: 5,
    slug: "car-saving",
    title: "CAR SAVING",
    urduTitle: "کار سیونگ",
    image:
      "https://i.pinimg.com/1200x/59/e3/99/59e399be0539b9a6e5c0aca0d77907eb.jpg",
    category: "Vehicles",
    buttonBg: "bg-indigo-600",
    buttonHover: "hover:bg-indigo-700",
    points: ["New or Used Cars", "Every 1 Minute", "1 منٹ میں 1 پر"],
    icon: <Car size={18} />,
  },
  {
    number: 6,
    slug: "property-saving",
    title: "PROPERTY SAVING",
    urduTitle: "پراپرٹی سیونگ",
    image:
      "https://i.pinimg.com/1200x/56/e6/51/56e65103b9d9741631507ad6484af831.jpg",
    category: "Property",
    buttonBg: "bg-teal-600",
    buttonHover: "hover:bg-teal-700",
    points: [
      "Buy / Sell Property",
      "پراپرٹی خرید و فروخت",
      "Every 1 Minute",
      "ہر 1 منٹ میں 1 پر",
    ],
    icon: <Home size={18} />,
  },
  {
    number: 7,
    slug: "crop-saving",
    title: "CROP SAVING",
    urduTitle: "فصل سیونگ",
    image:
      "https://i.pinimg.com/1200x/23/6a/8d/236a8da3b426bcf66da83c4947359e7d.jpg",
    category: "Agriculture",
    buttonBg: "bg-amber-600",
    buttonHover: "hover:bg-amber-700",
    points: [
      "Buy / Sell Crops",
      "فصل خرید و فروخت",
      "Every 1 Minute",
      "ہر 1 منٹ میں 1 پر",
    ],
    icon: <Wheat size={18} />,
  },
  {
    number: 8,
    slug: "self-service-saving",
    title: "SELF-SERVICE SAVING",
    urduTitle: "سیلف سروس سیونگ",
    image:
      "https://i.pinimg.com/1200x/33/41/a1/3341a1c69627a3e23f53db9ed14eb24a.jpg",
    category: "Self Service",
    buttonBg: "bg-rose-600",
    buttonHover: "hover:bg-rose-700",
    points: ["Buy or Sell by Yourself", "اپنی خرید یا فروخت خود کریں"],
    icon: <UserRound size={18} />,
  },
];

const categories = [
  { name: "All Programs", icon: <LayoutGrid size={15} /> },
  { name: "Shopping", icon: <ShoppingCart size={15} /> },
  { name: "Vehicles", icon: <Car size={15} /> },
  { name: "Property", icon: <Home size={15} /> },
  { name: "Daily Essentials", icon: <Store size={15} /> },
  { name: "Agriculture", icon: <Sprout size={15} /> },
  { name: "Self Service", icon: <UserRound size={15} /> },
];

const ProgramCards: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All Programs");
  const navigate = useNavigate();

  const filteredPrograms =
    activeTab === "All Programs"
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
              DISCOVER OUR PROGRAMS
            </span>
          </div>

          <h2 className="text-4xl font-extrabold text-[#071a36] sm:text-5xl">
            Programs Designed for{" "}
            <span className="text-[#c5962e]">Your Better Future</span>
          </h2>

          <p className="mt-2 text-xs text-slate-500 sm:text-sm">
            YES TIME GLOBAL offers 8 powerful programs to help you save more,
            spend smartly and create a better future for yourself and your
            family.
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
                8
              </span>
              <span className="text-[11px] font-semibold text-slate-500">
                Powerful Programs
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
                Global
              </span>
              <span className="text-[11px] font-semibold text-slate-500">
                Opportunities
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
                Trusted
              </span>
              <span className="text-[11px] font-semibold text-slate-500">
                Platform
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
                Member
              </span>
              <span className="text-[11px] font-semibold text-slate-500">
                Focused
              </span>
            </div>
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isActive = activeTab === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 active:scale-95 ${
                  isActive
                    ? "scale-105 bg-slate-900 text-white shadow-md"
                    : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* CARDS GRID */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPrograms.map((program) => (
            <article
              key={program.number}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
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
                  onClick={() => navigate(`/program/${program.slug}`)}
                  className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#c5962e_0%,#f0c75e_100%)] px-5 py-2.5 text-xs font-bold text-[#000000] shadow-[0_10px_22px_rgba(197,150,46,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 active:scale-95"
                >
                  <span>View Program</span>
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