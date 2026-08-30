import React from "react";
import {
  Eye,
  Target,
  UsersRound,
  BarChart3,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const VisionMission: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-12">
      {/* Background Subtle Gradient Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-slate-900/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-50 px-4 py-1.5 transition-all hover:bg-amber-100/60">
            <Sparkles className="h-3.5 w-3.5 text-[#d69b22]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#d69b22]">
              OUR VISION &amp; MISSION
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#132033] sm:text-4xl md:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#d69b22] via-amber-500 to-[#e5aa2d] bg-clip-text text-transparent">
              Vision &amp; Mission
            </span>
          </h2>
          <p className="mt-4 text-sm text-slate-500 sm:text-base">
            Guiding principles driving our ecosystem toward sustainable growth
            and shared success.
          </p>
        </div>

        {/* Side-by-Side Cards Container */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* ================= VISION CARD ================= */}
          <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/80 hover:shadow-2xl sm:flex-row">
            {/* Top Accent Hover Bar */}
            <div className="absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r from-amber-400 to-[#d69b22] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Image Container with Zoom & Gradient Overlay */}
            <div className="relative min-h-[260px] overflow-hidden sm:min-h-[420px] sm:w-[45%]">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: "url('/homeAbout.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent sm:bg-gradient-to-r" />

              {/* Floating Badge on Image */}
              <div className="absolute left-4 top-4 rounded-xl border border-white/40 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                <span className="text-[11px] font-bold text-[#111c2c]">
                  01 / PURPOSE
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col justify-between p-7 sm:w-[55%] sm:p-9">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-[#071a31] p-3 text-[#e5aa2d] shadow-md transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Eye className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#111c2c] transition-colors duration-300 group-hover:text-[#d69b22]">
                        Our Vision
                      </h3>
                      <div className="mt-1.5 h-[2px] w-8 bg-[#e5aa2d] transition-all duration-500 group-hover:w-16" />
                    </div>
                  </div>

                  {/* Top-Right Arrow Indicator */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-slate-400 transition-all duration-300 group-hover:bg-[#d69b22] group-hover:text-white">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                  To be a global leader in creating a reliable and innovative
                  ecosystem where individuals and businesses can access
                  life-changing opportunities that bring growth, security, and
                  prosperity to all.
                </p>
              </div>

              {/* Core Highlight Box */}
              <div className="mt-8 flex items-center gap-3.5 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 transition-all duration-300 group-hover:border-amber-200 group-hover:bg-amber-50/40">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100/80 text-[#d69b22] transition-transform duration-300 group-hover:scale-110">
                  <UsersRound className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold leading-normal text-slate-700 sm:text-sm">
                  A world of equal opportunities for everyone.
                </p>
              </div>
            </div>
          </div>

          {/* ================= MISSION CARD ================= */}
          <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-[#07172c] text-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/60 hover:shadow-2xl hover:shadow-amber-500/10 sm:flex-row">
            {/* Top Accent Hover Bar */}
            <div className="absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Image Container with Zoom & Gradient Overlay */}
            <div className="relative min-h-[260px] overflow-hidden sm:min-h-[420px] sm:w-[45%]">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: "url('/vs1.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07172c] via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#07172c]" />

              {/* Floating Badge on Image */}
              <div className="absolute left-4 top-4 rounded-xl border border-white/20 bg-slate-900/60 px-3 py-1.5 shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                <span className="text-[11px] font-bold text-amber-400">
                  02 / ACTION
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col justify-between p-7 sm:w-[55%] sm:p-9">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-[#172c48] p-3 text-[#e5aa2d] shadow-md transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-amber-400">
                        Our Mission
                      </h3>
                      <div className="mt-1.5 h-[2px] w-8 bg-[#e5aa2d] transition-all duration-500 group-hover:w-16" />
                    </div>
                  </div>

                  {/* Top-Right Arrow Indicator */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-300 transition-all duration-300 group-hover:bg-amber-400 group-hover:text-slate-900">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-slate-300 sm:text-base">
                  To connect people, businesses, and opportunities through
                  accessible programs, strategic partnerships, and transparent
                  processes — empowering communities to grow, achieve, and
                  succeed together.
                </p>
              </div>

              {/* Core Highlight Box */}
              <div className="mt-8 flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 group-hover:border-amber-500/30 group-hover:bg-white/10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-[#e5aa2d] transition-transform duration-300 group-hover:scale-110">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold leading-normal text-slate-200 sm:text-sm">
                  Empower people. Build trust. Create lasting impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;