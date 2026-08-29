import React from "react";
import {
  MapPin,
  ArrowRight,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";

interface JourneyItem {
  id: number;
  country: string;
  image?: string;
  video?: string;
  title: string;
  description: string;
  status: string;
}

const GlobalJourney: React.FC = () => {
  const journey: JourneyItem[] = [
    {
      id: 1,
      country: "Pakistan",
      video:
        "https://v1.pinimg.com/videos/mc/720p/e8/8a/08/e88a08107acb3b6f044a9f5d72fae200.mp4",
      title: "Where Our Journey Begins",
      description:
        "Pakistan represents an important part of our global journey and the foundation from which YES TIME GLOBAL continues to grow.",
      status: "Current Presence",
    },
    {
      id: 2,
      country: "Nepal",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85",
      title: "Building New Connections",
      description:
        "Our journey extends into Nepal, creating opportunities to develop new relationships and strengthen our international network.",
      status: "Global Presence",
    },
    {
      id: 3,
      country: "Indonesia",
      video: video2,
      title: "Expanding Our Reach",
      description:
        "Indonesia is another important part of our growing international presence as we continue exploring new markets and opportunities.",
      status: "Global Presence",
    },
    {
      id: 4,
      country: "Future Markets",
      video: video1,
      title: "The Journey Continues",
      description:
        "Our vision goes beyond today's markets. We continue looking toward new countries, partnerships, and opportunities for future expansion.",
      status: "Future Expansion",
    },
  ];

  return (
    <section
      id="global-journey"
      className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12"
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-150px] h-[420px] w-[420px] rounded-full bg-[#D9A21B]/10 blur-[130px]" />

      {/* =========================================
          CONTAINER
      ========================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* =========================================
            HEADER
        ========================================= */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Label */}

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9A21B]/30 bg-[#07152D] px-4 py-2">
            <Globe2
              size={15}
              className="text-[#FFD45A]"
            />

            <span className="text-xs font-semibold  text-[#FFD45A]">
              OUR GLOBAL JOURNEY
            </span>
          </div>

          {/* Heading */}

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            From Local Roots to{" "}
            <span className="text-[#D9A21B]">
              Global Reach
            </span>
          </h2>

          {/* Accent */}

          <div className="my-5 flex items-center justify-center gap-3">
            <div className="h-[2px] w-14 bg-[#D9A21B]" />

            <div className="h-1.5 w-1.5 rounded-full bg-[#FFD45A]" />

            <div className="h-px w-14 bg-[#D9A21B]/40" />
          </div>

          {/* Description */}

          <p className="text-base leading-7 text-slate-300 sm:text-lg">
            Our international journey continues to evolve as we
            connect new countries, build stronger relationships,
            and explore opportunities beyond borders.
          </p>
        </div>

        {/* =========================================
            JOURNEY TIMELINE
        ========================================= */}

        <div className="relative mt-16">
          {/* Desktop Connecting Line */}

          <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-10 hidden w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#D9A21B] to-transparent opacity-80 lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {journey.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative lg:grid lg:min-h-[230px] lg:grid-cols-2"
                >
                  {/* =====================================
                      TIMELINE POINT
                  ===================================== */}

                  <div className="absolute left-6 top-8 z-30 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-[#FFD45A] shadow-[0_0_15px_rgba(217,162,27,0.5)] lg:left-1/2 lg:block" />

                  {/* =====================================
                      CONTENT
                  ===================================== */}

                  <div
                    className={`lg:flex ${
                      isLeft
                        ? "lg:justify-end lg:pr-16"
                        : "lg:col-start-2 lg:justify-start lg:pl-16"
                    }`}
                  >
                    <article
                      className="global-journey-card group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#07152D]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A21B]/50 hover:bg-[#091A35] sm:p-7 lg:max-w-xl"
                      style={
                        item.image
                          ? {
                              backgroundImage: `url(${item.image})`,
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                            }
                          : undefined
                      }
                    >
                      {item.video ? (
                        <video
                          src={item.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          className="absolute inset-0 h-full w-full scale-105 object-cover"
                        />
                      ) : null}

                      <div className="global-journey-card-overlay absolute inset-0 bg-gradient-to-br from-[#020B1C]/80 via-[#020B1C]/35 to-[#020B1C]/80 transition duration-300" />

                      <div className="relative z-10">
                      {/* Top Border */}

                      <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9A21B] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                      {/* Header */}

                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9A21B]/25 bg-[#D9A21B]/10">
                            <MapPin
                              size={21}
                              className="text-[#FFD45A]"
                            />
                          </div>

                          <div>
                            <p className="text-xs font-medium  tracking-[0.12em] text-[#D9A21B]">
                              0{item.id}
                            </p>

                            <h3 className="text-xl font-semibold text-white">
                              {item.country}
                            </h3>
                          </div>
                        </div>

                        <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-400 sm:block">
                          {item.status}
                        </span>
                      </div>

                      {/* Title */}

                      <h4 className="mt-6 text-lg font-semibold text-[#FFD45A]">
                        {item.title}
                      </h4>

                      {/* Description */}

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {item.description}
                      </p>

                      {/* Footer */}

                      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <CheckCircle2
                            size={15}
                            className="text-[#D9A21B]"
                          />

                          <span>{item.status}</span>
                        </div>

                        <ArrowRight
                          size={17}
                          className="text-slate-500 transition duration-300 group-hover:translate-x-1 group-hover:text-[#FFD45A]"
                        />
                      </div>
                      </div>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================
            BOTTOM MESSAGE
        ========================================= */}

        <div className="mt-14 rounded-2xl border border-[#D9A21B]/20 bg-[#07152D]/60 p-7 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-2 flex items-center gap-2">
                <Globe2
                  size={18}
                  className="text-[#FFD45A]"
                />

                <span className="text-sm font-semibold text-[#FFD45A]">
                  The journey continues
                </span>
              </div>

              <p className="text-sm leading-7 text-slate-400 sm:text-base">
                Every new market represents a new opportunity to
                connect people, businesses, and ideas. Our vision
                is to continue growing while creating meaningful
                international relationships.
              </p>
            </div>

            <a
              href="#future-expansion"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#D9A21B] px-6 py-3.5 text-sm font-semibold text-[#020B1C] transition duration-300 hover:bg-[#FFD45A]"
            >
              Future Expansion
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalJourney;