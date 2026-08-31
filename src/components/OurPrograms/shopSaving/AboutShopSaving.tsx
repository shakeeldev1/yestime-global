import {
  Target,
  Users,
  Store,
  Headset,
  ShieldCheck,
  ShoppingBag,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";

function AboutShopSaving() {
  const { t } = useTranslation("shopSaving");

  const featurePoints = [
    t("about.featurePoints.0"),
    t("about.featurePoints.1"),
    t("about.featurePoints.2"),
    t("about.featurePoints.3"),
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-12 sm:px-8 lg:px-16 ">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#DFA42D]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

          {/* ================= LEFT - IMAGE ================= */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-xl">

              {/* Decorative Border */}
              <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border-2 border-[#DFA42D]/30" />

              {/* Main Image */}
              <div className="group relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-2xl">
                <img
                  src="https://i.pinimg.com/1200x/f5/d7/3e/f5d73e49d24249e33d3b01f08248f1ed.jpg"
                  alt={t("about.imageAlt")}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[500px]"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Top Badge */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-xs font-bold text-slate-900 shadow-lg backdrop-blur-md">
                  <Sparkles size={15} className="text-[#DFA42D]" />
                  {t("about.badge")}
                </div>

                {/* Bottom Text */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm font-medium text-white/80">
                    {t("about.overlaySubtitle")}
                  </p>
                  <h3 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
                    {t("about.overlayTitle")}
                    <span className="text-[#DFA42D]">{t("about.overlayTitleHighlight")}</span>
                  </h3>
                </div>
              </div>

              {/* ================= FLOATING SAVING CARD ================= */}
              <div className="absolute -bottom-7 -right-3 w-[210px] rounded-2xl border border-[#DFA42D]/30 bg-[#11100d] p-5 text-white shadow-2xl sm:-right-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DFA42D] text-slate-950">
                    <ShoppingBag size={21} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      {t("about.card.label")}
                    </p>
                    <h4 className="text-sm font-bold">
                      {t("about.card.title")}
                    </h4>
                  </div>
                </div>

                <div className="mt-4 border-t border-white/10 pt-3">
                  <p className="text-xs leading-relaxed text-slate-300">
                    {t("about.card.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT - CONTENT ================= */}
          <div className="lg:col-span-6 lg:pl-4">

            {/* Small Heading */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DFA42D]/20 bg-[#DFA42D]/10 px-4 py-2">
              <Target size={15} className="text-[#DFA42D]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#A87800]">
                {t("about.eyebrow")}
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {t("about.heading")}
              <span className="block text-[#DFA42D]">
                {t("about.headingBlock")}
              </span>
            </h2>

            {/* Description */}
            <div className="mt-6 max-w-2xl space-y-4">
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                {t("about.para1")}
              </p>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                {t("about.para2.start")}
                <span className="font-semibold text-slate-900">
                  {" "}{t("about.para2.bold")}
                </span>
                {" "}{t("about.para2.end")}
              </p>
            </div>

            {/* Feature Points */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {featurePoints.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-emerald-600"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* ================= STATS ================= */}
            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
              
              {/* Stat */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFA42D]/15 text-[#B17F08]">
                  <Users size={17} />
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  1000+
                </h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-[#B17F08]">
                  {t("about.stats.products")}
                </p>
              </div>

              {/* Stat */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#DFA42D]/15 text-[#B17F08]">
                  <Store size={17} />
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  500+
                </h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-[#B17F08]">
                  {t("about.stats.partnerStores")}
                </p>
              </div>

              {/* Stat */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <Headset size={17} />
                </div>
                <h3 className="text-xl font-black text-emerald-600">
                  24/7
                </h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-emerald-600">
                  {t("about.stats.support")}
                </p>
              </div>

              {/* Stat */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <ShieldCheck size={17} />
                </div>
                <h3 className="text-xl font-black text-emerald-600">
                  100%
                </h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-emerald-600">
                  {t("about.stats.secure")}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutShopSaving;