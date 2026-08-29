import React from "react";
import {
  ArrowRight,
  Handshake,
  Sparkles,
} from "lucide-react";

const GlobalPartnershipCTA: React.FC = () => {
  return (
    <section
      id="global-partnership"
      className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute left-[-180px] bottom-[-180px] h-[400px] w-[400px] rounded-full bg-[#D9A21B]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[400px] w-[400px] rounded-full bg-[#D9A21B]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[28px] border border-[#0b3b6e]/10 bg-[#020b13] px-5 py-8 shadow-[0_25px_58px_-24px_rgba(0,0,0,0.65)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "55px 55px",
              }}
            />
          </div>

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(220px,0.75fr)]">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d6b35a] bg-[#0d1a2d] px-3.5 py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#f5c54e]">
                <Sparkles size={14} />
                <span>Start Your Journey</span>
              </div>

              <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[4rem]">
                Move forward with <span className="text-[#f5c54e]">confidence.</span>
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Explore practical programs and trusted partnerships designed to connect your next opportunity with a bigger global community.
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-400">
                <Handshake className="size-4 text-[#f5c54e]" aria-hidden="true" />
                <span>Built on transparency, trust, and shared progress.</span>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 lg:items-stretch lg:justify-center">
              <a
                href="/OurPrograms"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#f5c54e_0%,#d99420_100%)] px-6 py-4 text-base font-bold text-[#07182d] transition duration-300 hover:brightness-105"
              >
                <span>Explore Programs</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="/ContactUs"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-transparent px-6 py-4 text-base font-semibold text-white transition duration-300 hover:border-[#f5c54e]/70 hover:bg-white/5"
              >
                Talk to Our Team
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs tracking-[0.18em] text-slate-500">
            CONNECTING OPPORTUNITIES WORLDWIDE
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalPartnershipCTA;