import React from "react";
import {
  Globe2,
  Building2,
  Handshake,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

interface Service {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

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
      className="relative overflow-hidden bg-[#020B1C] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute right-[-180px] top-[-100px] h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-150px] left-[-180px] h-[450px] w-[450px] rounded-full bg-[#D9A21B]/10 blur-[130px]" />

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* =========================================
            HEADER
        ========================================= */}

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          {/* Left */}

          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9A21B]/30 bg-[#07152D] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#FFD45A]" />

              <span className="text-xs font-semibold  text-[#FFD45A]">
                WHAT WE DO
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Creating Opportunities{" "}
              <span className="text-[#D9A21B]">
                Across Borders
              </span>
            </h2>
          </div>

          {/* Right */}

          <div className="lg:pl-10">
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              YES TIME GLOBAL focuses on building international
              connections, developing partnerships, and exploring
              opportunities that bring people and businesses closer
              together.
            </p>
          </div>
        </div>

        {/* Accent Line */}

        <div className="mt-7 flex items-center gap-3">
          <div className="h-[2px] w-16 bg-[#D9A21B]" />

          <div className="h-1.5 w-1.5 rounded-full bg-[#FFD45A]" />

          <div className="h-px w-20 bg-[#D9A21B]/30" />
        </div>

        {/* =========================================
            SERVICES GRID
        ========================================= */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#07152D]/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A21B]/50 hover:bg-[#091A35]"
              >
                {/* Number */}

                <div className="absolute right-6 top-6 text-5xl font-bold text-white/[0.04]">
                  0{service.id}
                </div>

                {/* Icon */}

                <div className="relative mb-7 flex h-14 w-14 items-center justify-center rounded-xl border border-[#D9A21B]/25 bg-[#D9A21B]/10 transition duration-300 group-hover:bg-[#D9A21B]/15">
                  <Icon
                    size={26}
                    strokeWidth={1.6}
                    className="text-[#FFD45A]"
                  />
                </div>

                {/* Title */}

                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                {/* Bottom */}

                <div className="mt-auto pt-7">
                  <div className="flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-xs font-medium  tracking-[0.12em] text-slate-500 transition duration-300 group-hover:text-[#FFD45A]">
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

        {/* =========================================
            BOTTOM CONTENT
        ========================================= */}

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* Card 1 */}

          <div className="rounded-2xl border border-white/10 bg-[#07152D]/50 p-7">
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

          {/* Card 2 */}

          <div className="rounded-2xl border border-white/10 bg-[#07152D]/50 p-7">
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