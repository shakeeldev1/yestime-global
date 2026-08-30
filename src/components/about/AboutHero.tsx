import React from "react";
import { ChevronRight, Calendar, Grid, ShieldCheck, Globe } from "lucide-react";

const AboutHero: React.FC = () => {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-black text-white">
      {/* BACKGROUND IMAGE & OVERLAYS */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-90"
          style={{
            backgroundImage: "url('/img12.png')", // Path to your background image with earth & people
          }}
        />
        {/* Dark Gradients for Content Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative mx-auto flex max-w-[1280px] flex-col justify-between px-6 py-8  lg:px-12">
        {/* TOP HERO CONTENT */}
        <div className="z-10 max-w-[620px]">
          {/* BADGE */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-black/40 px-3.5 py-1.5 backdrop-blur-md">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f39c12] text-[10px] font-bold text-black">
              Y
            </span>
            <span className="text-[11px] font-semibold tracking-widest text-white uppercase">
              ABOUT YES TIME GLOBAL
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-4xl font-bold  text-white sm:text-5xl ">
            Building Connections. <br />
            <span className="text-[#f39c12]">Creating Opportunities.</span> <br />
            Changing Futures.
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-[520px] text-sm leading-relaxed text-gray-300 sm:text-base">
            <strong className="text-white font-semibold">YES TIME GLOBAL</strong> is a trusted ecosystem that connects people, businesses and opportunities through transparent programs, strategic partnerships and accessible solutions.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Primary CTA */}
            <button className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#f39c12] to-[#d68910] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-95">
              <span>Discover Our Story</span>
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Secondary CTA */}
            <button className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/40 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95">
              <span>Explore Programs</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* BOTTOM STATS BAR */}
        <div className="z-10 mt-8  w-full max-w-[1000px] rounded-2xl border border-white/10 bg-black/60 px-6 py-4 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-2 gap-6 divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
            {/* Stat 1 */}
            <div className="flex items-center gap-3 pt-2 md:pt-0 md:pr-4">
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-2.5 text-[#f39c12]">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">2023</div>
                <div className="text-xs text-gray-400">Founded</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3 pt-2 md:pt-0 md:px-4">
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-2.5 text-[#f39c12]">
                <Grid className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">8+</div>
                <div className="text-xs text-gray-400">Powerful Programs</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3 pt-2 md:pt-0 md:px-4">
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-2.5 text-[#f39c12]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">100%</div>
                <div className="text-xs text-gray-400">Transparent</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3 pt-2 md:pt-0 md:pl-4">
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-2.5 text-[#f39c12]">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xl font-bold text-[#f39c12]">Global</div>
                <div className="text-xs text-gray-400">Opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;