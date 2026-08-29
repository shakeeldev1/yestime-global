import React from "react";
import {
  Globe2,
  Building2,
  Handshake,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

// ================= IMAGE =================
// Public assets are served from /public and referenced as a root URL.
const GlobalImage = "/vision.png";

// ================= SERVICE TYPE =================

interface Service {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

// ================= COMPONENT =================

const WhatWeDoGlobally: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: Building2,
      title: "Business Expansion",
      description:
        "We explore new markets and help create opportunities for businesses looking to grow beyond their local boundaries.",
    },
    {
      id: 2,
      icon: Handshake,
      title: "Global Partnerships",
      description:
        "We build meaningful relationships with organizations, businesses, and individuals across different countries.",
    },
    {
      id: 3,
      icon: Globe2,
      title: "International Networking",
      description:
        "Our growing network connects people and opportunities across borders, creating stronger international relationships.",
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Market Opportunities",
      description:
        "We identify emerging opportunities and support connections that can contribute to sustainable international growth.",
    },
  ];

  return (
    <section
      id="global-services"
      className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute right-[-180px] top-[-100px] h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-150px] left-[-180px] h-[450px] w-[450px] rounded-full bg-[#D9A21B]/10 blur-[130px]" />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* =====================================================
            HERO / HEADING + IMAGE
        ===================================================== */}

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* ================= LEFT CONTENT ================= */}

          <div>
            {/* Badge */}

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d89d2c]/40 bg-[#fffaf0] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#f5c54e]" />

              <span className="text-xs font-semibold tracking-[0.12em] text-[#a97916]">
                WHAT WE DO
              </span>
            </div>

            {/* Heading */}

            <h2 className="max-w-xl text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[#071a36] sm:text-4xl md:text-5xl lg:text-[52px]">
              Creating Opportunities{" "}
              <span className="bg-gradient-to-r from-[#f5c54e] via-[#e5b338] to-[#d99420] bg-clip-text text-transparent">
                Across Borders
              </span>
            </h2>

            {/* Accent Line */}

            <div className="mt-7 flex items-center gap-3">
              <div className="h-[2px] w-16 bg-[#D9A21B]" />

              <div className="h-1.5 w-1.5 rounded-full bg-[#FFD45A]" />

              <div className="h-px w-20 bg-[#D9A21B]/30" />
            </div>

            {/* Small Description */}

            <p className="mt-7 max-w-xl text-base leading-8 text-[#41566f] sm:text-lg">
              We create meaningful international connections,
              develop strategic partnerships, and explore
              opportunities that help people and businesses
              move beyond borders.
            </p>
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div className="group relative overflow-hidden rounded-3xl border border-[#d9dfe8] shadow-[0_20px_50px_rgba(7,26,54,0.12)]">

            {/* IMAGE */}

            <img
              src={GlobalImage}
              alt="Yes Time Global"
              className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[430px]"
              loading="lazy"
            />

            {/* LIGHT OVERLAY TO KEEP ORIGINAL IMAGE VISIBLE */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#020b1c]/75 via-[#020b1c]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020b1c]/70 via-transparent to-transparent" />

            {/* GOLD GLOW */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D9A21B]/20 blur-[100px]" />

            {/* IMAGE BORDER GLOW */}

            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />

            {/* =================================================
                TEXT ON IMAGE
            ================================================= */}

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">

              {/* Small Label */}

              <div className="mb-3 flex items-center gap-2">
                <div className="h-px w-8 bg-[#f5c54e]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5c54e]">
                  YES TIME GLOBAL
                </span>
              </div>

              {/* Image Heading */}

              <h3 className="max-w-lg text-2xl font-extrabold leading-tight text-white drop-shadow-[0_2px_12px_rgba(2,11,28,0.75)] sm:text-3xl">
                <span className="text-[#f5c54e]">Creating Global Opportunities.</span>
              </h3>

              {/* Image Description */}

              <p className="mt-3 max-w-lg text-sm leading-6 text-[#edf3fb] drop-shadow-[0_2px_10px_rgba(2,11,28,0.6)]">
                Connecting people, businesses, and markets
                through meaningful international relationships.
              </p>

            </div>
          </div>
        </div>

        {/* =====================================================
            SERVICES GRID
        ===================================================== */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#07152D]/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A21B]/50 hover:bg-[#091A35]"
              >

                {/* ================= NUMBER ================= */}

                <div className="absolute right-6 top-6 text-5xl font-bold text-white/[0.04]">
                  0{service.id}
                </div>

                {/* ================= ICON ================= */}

                <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-xl border border-[#D9A21B]/25 bg-[#D9A21B]/10 transition duration-300 group-hover:bg-[#D9A21B]/15">
                  <Icon
                    size={26}
                    strokeWidth={1.6}
                    className="text-[#FFD45A]"
                  />
                </div>

                {/* ================= TITLE ================= */}

                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>

                {/* ================= DESCRIPTION ================= */}

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                {/* ================= BOTTOM ================= */}

                <div className="mt-auto pt-7">

                  <div className="flex items-center justify-between border-t border-white/10 pt-5">

                    <span className="text-xs font-medium tracking-[0.12em] text-slate-500 transition duration-300 group-hover:text-[#FFD45A]">
                      YES TIME GLOBAL
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition duration-300 group-hover:border-[#D9A21B]/50 group-hover:bg-[#D9A21B]/10">

                      <ArrowUpRight
                        size={15}
                        className="text-slate-400 transition duration-300 group-hover:text-[#FFD45A]"
                      />

                    </div>
                  </div>
                </div>

              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM CONTENT
        ===================================================== */}

        <div className="mt-10 grid gap-5 lg:grid-cols-2">

          {/* ================= CONNECTING MARKETS ================= */}

          <div className="rounded-2xl border border-white/10 bg-[#07152D]/50 p-7 transition duration-300 hover:border-[#D9A21B]/30">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D9A21B]/10">
                <Globe2
                  size={20}
                  className="text-[#FFD45A]"
                />
              </div>

              <div>

                <h3 className="text-lg font-semibold text-white">
                  Connecting Markets
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  We aim to connect different markets by creating
                  pathways for communication, collaboration, and
                  future growth.
                </p>

              </div>
            </div>
          </div>

          {/* ================= BUILDING RELATIONSHIPS ================= */}

          <div className="rounded-2xl border border-white/10 bg-[#07152D]/50 p-7 transition duration-300 hover:border-[#D9A21B]/30">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D9A21B]/10">
                <Handshake
                  size={20}
                  className="text-[#FFD45A]"
                />
              </div>

              <div>

                <h3 className="text-lg font-semibold text-white">
                  Building Relationships
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Strong relationships are at the heart of our
                  international journey and long-term global
                  vision.
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDoGlobally;