
import React from "react";
import { ChevronRight } from "lucide-react";

const AboutHero: React.FC = () => {
  return (
    <section className="relative min-h-[480px] w-full overflow-hidden bg-[#000000] text-white">
      {/* BACKGROUND IMAGE & OVERLAYS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main Background Image (Earth + Building) */}
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-90"
          style={{
            backgroundImage: "url('/img12.png')",
          }}
        />

        {/* Gradient Overlays for smooth blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000]/40" />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative mx-auto flex min-h-[480px] max-w-[1280px] flex-col justify-center px-6 py-12 lg:px-12">
        <div className="z-10 max-w-[580px]">
          {/* BADGE */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d3a344]/40 bg-black/40 px-3.5 py-1.5 backdrop-blur-md">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#e5a51e] text-[10px] font-bold text-black">
              A
            </span>
            <span className="text-[11px] font-semibold tracking-wider text-white uppercase">
              ABOUT US
            </span>
          </div>

          {/* MAIN HEADING */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Connecting People, <br />
            <span className="text-[#e5a51e]">Businesses & Global Opportunities</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-4 max-w-[480px] text-sm leading-relaxed text-gray-300 sm:text-base">
            Building a trusted global ecosystem from Pakistan with strategic partnerships and accessible programs for everyone.
          </p>

          {/* CALL TO ACTION BUTTONS */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* Primary CTA */}
            <button className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#e5a51e] to-[#c68c18] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:brightness-110 active:scale-95">
              <span>Explore Programs</span>
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Secondary CTA */}
            <button className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/30 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95">
              <span>Contact Us</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

