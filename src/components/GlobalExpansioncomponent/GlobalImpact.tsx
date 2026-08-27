import React from "react";
import {
  Globe2,
  MapPinned,
  Handshake,
  TrendingUp,
} from "lucide-react";

interface ImpactItem {
  id: number;
  value: string;
  label: string;
  description: string;
  icon: React.ElementType;
}

const GlobalImpact: React.FC = () => {
  const impactItems: ImpactItem[] = [
    {
      id: 1,
      value: "3",
      label: "Current Countries",
      description:
        "Our growing international presence currently connects Pakistan, Nepal, and Indonesia.",
      icon: Globe2,
    },
    {
      id: 2,
      value: "3",
      label: "Active Markets",
      description:
        "We are building stronger connections and exploring opportunities across multiple markets.",
      icon: MapPinned,
    },
    {
      id: 3,
      value: "Growing",
      label: "Global Network",
      description:
        "Our network continues to grow through new relationships, partnerships, and opportunities.",
      icon: Handshake,
    },
    {
      id: 4,
      value: "Future",
      label: "Expansion",
      description:
        "We are continuously looking toward new countries and international opportunities.",
      icon: TrendingUp,
    },
  ];

  return (
    <section
      id="global-impact"
      className="relative overflow-hidden bg-[#020B1C] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div className="pointer-events-none absolute left-[-200px] top-20 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-200px] right-[-150px] h-[400px] w-[400px] rounded-full bg-[#D9A21B]/10 blur-[120px]" />

      {/* =========================================
          CONTAINER
      ========================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Small Label */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9A21B]/30 bg-[#07152D] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#FFD45A]" />

            <span className="text-xs font-semibold tracking-[0.16em] text-[#FFD45A]">
              OUR GLOBAL IMPACT
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Growing Beyond{" "}
            <span className="text-[#D9A21B]">
              Borders
            </span>
          </h2>

          {/* Accent */}

          <div className="my-5 flex items-center justify-center gap-3">
            <div className="h-[2px] w-14 bg-[#D9A21B]" />

            <div className="h-1.5 w-1.5 rounded-full bg-[#FFD45A]" />

            <div className="h-[1px] w-14 bg-[#D9A21B]/40" />
          </div>

          {/* Description */}

          <p className="text-base leading-7 text-slate-300 sm:text-lg">
            Our international journey is built around meaningful
            connections, new opportunities, and a growing presence
            across different markets.
          </p>
        </div>

        {/* =========================================
            IMPACT CARDS
        ========================================= */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#07152D]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A21B]/50 hover:bg-[#091A35]"
              >
                {/* Top Gold Line */}

                <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9A21B] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* Icon */}

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#D9A21B]/25 bg-[#D9A21B]/10">
                  <Icon
                    size={23}
                    strokeWidth={1.7}
                    className="text-[#FFD45A]"
                  />
                </div>

                {/* Number */}

                <div className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {item.value}
                </div>

                {/* Label */}

                <h3 className="mt-2 text-lg font-semibold text-[#FFD45A]">
                  {item.label}
                </h3>

                {/* Description */}

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>

                {/* Bottom Arrow */}

                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-slate-500 transition duration-300 group-hover:text-[#FFD45A]">
                  <span>Global Growth</span>

                  <span className="h-px w-6 bg-current" />
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================
            BOTTOM MESSAGE
        ========================================= */}

        <div className="mt-10 rounded-2xl border border-white/10 bg-[#07152D]/50 px-6 py-6 sm:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#FFD45A]">
                A growing international presence
              </p>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-400">
                From our current markets to future destinations,
                YES TIME GLOBAL continues to build connections that
                create opportunities across borders.
              </p>
            </div>

            <a
              href="#global-journey"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-[#D9A21B]/40 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-[#FFD45A] hover:bg-[#D9A21B]/10"
            >
              Explore Our Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;