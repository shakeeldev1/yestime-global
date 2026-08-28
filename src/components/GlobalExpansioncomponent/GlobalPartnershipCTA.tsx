import React from "react";
import {
  ArrowRight,
  Globe2,
  Handshake,
  Mail,
  Sparkles,
} from "lucide-react";

const GlobalPartnershipCTA: React.FC = () => {
  return (
    <section
      id="global-partnership"
      className="relative overflow-hidden bg-[#020B1C] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute left-[-180px] bottom-[-180px] h-[400px] w-[400px] rounded-full bg-[#D9A21B]/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[400px] w-[400px] rounded-full bg-[#D9A21B]/10 blur-[120px]" />

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-[#D9A21B]/20 bg-[#07152D]/80">
          {/* =====================================
              DECORATIVE GRID
          ===================================== */}

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

          {/* =====================================
              GOLD GLOW
          ===================================== */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[500px] -translate-x-1/2 rounded-full bg-[#D9A21B]/10 blur-[100px]" />

          <div className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
            <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
              {/* =================================
                  LEFT CONTENT
              ================================= */}

              <div>
                {/* Badge */}

                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9A21B]/30 bg-[#020B1C]/70 px-4 py-2">
                  <Sparkles
                    size={15}
                    className="text-[#FFD45A]"
                  />

                  <span className="text-xs font-semibold  text-[#FFD45A]">
                    GLOBAL PARTNERSHIP
                  </span>
                </div>

                {/* Heading */}

                <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  Let's Build Something{" "}
                  <span className="text-[#D9A21B]">
                    Global
                  </span>
                </h2>

                {/* Accent */}

                <div className="my-6 flex items-center gap-3">
                  <div className="h-[2px] w-16 bg-[#D9A21B]" />

                  <div className="h-1.5 w-1.5 rounded-full bg-[#FFD45A] shadow-[0_0_10px_#FFD45A]" />

                  <div className="h-px w-20 bg-[#D9A21B]/30" />
                </div>

                {/* Description */}

                <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  We believe meaningful partnerships can create
                  opportunities that go beyond borders. If you are
                  looking to connect, collaborate, or explore new
                  international opportunities, we would be happy
                  to hear from you.
                </p>

                {/* =================================
                    BUTTONS
                ================================= */}

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  {/* Primary */}

                  <a
                    href="/ContactUs"
                    className="group inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#D9A21B] via-[#FFD45A] to-[#D9A21B] px-7 py-4 text-sm font-bold text-[#020B1C] shadow-[0_0_25px_rgba(217,162,27,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(217,162,27,0.4)]"
                  >
                    Become a Partner

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  {/* Secondary */}

                  <a
                    href="/ContactUs"
                    className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#D9A21B]/60 hover:bg-[#D9A21B]/10"
                  >
                    <Mail size={18} />

                    Contact Us
                  </a>
                </div>
              </div>

              {/* =================================
                  RIGHT VISUAL
              ================================= */}

              <div className="relative flex items-center justify-center">
                {/* Outer Glow */}

                <div className="absolute h-[280px] w-[280px] rounded-full bg-blue-500/10 blur-[80px]" />

                {/* Globe */}

                <div className="relative flex h-[250px] w-[250px] items-center justify-center rounded-full border border-[#D9A21B]/30 bg-[#020B1C]/70 shadow-[0_0_60px_rgba(0,100,255,0.15)] backdrop-blur-md">
                  {/* Orbit */}

                  <div className="absolute h-[280px] w-[110px] rotate-[35deg] rounded-[50%] border border-[#D9A21B]/40" />

                  <div className="absolute h-[280px] w-[110px] -rotate-[35deg] rounded-[50%] border border-blue-400/20" />

                  {/* Globe */}

                  <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-gradient-to-br from-[#063A78] via-[#021C42] to-[#020B1C] shadow-[0_0_50px_rgba(0,120,255,0.3)]">
                    <Globe2
                      size={115}
                      strokeWidth={0.8}
                      className="text-[#D9A21B]"
                    />
                  </div>

                  {/* Center */}

                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-[#FFD45A]/40 bg-[#020B1C] shadow-[0_0_25px_rgba(255,212,90,0.3)]">
                    <Handshake
                      size={22}
                      className="text-[#FFD45A]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================
                BOTTOM FEATURES
            ===================================== */}

            <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
              {/* Feature 1 */}

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D9A21B]/10">
                  <Globe2
                    size={18}
                    className="text-[#FFD45A]"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Global Vision
                  </p>

                  <p className="text-xs text-slate-500">
                    Beyond Borders
                  </p>
                </div>
              </div>

              {/* Feature 2 */}

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D9A21B]/10">
                  <Handshake
                    size={18}
                    className="text-[#FFD45A]"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Strong Partnerships
                  </p>

                  <p className="text-xs text-slate-500">
                    Built on Trust
                  </p>
                </div>
              </div>

              {/* Feature 3 */}

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D9A21B]/10">
                  <ArrowRight
                    size={18}
                    className="text-[#FFD45A]"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    New Opportunities
                  </p>

                  <p className="text-xs text-slate-500">
                    Growing Together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            SMALL FOOTER MESSAGE
        ========================================= */}

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