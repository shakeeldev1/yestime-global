import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Pagination,
  Navigation,
} from "swiper/modules";

import {
  Globe2,
  ArrowRight,
  MapPin,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Slide {
  id: number;
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  countries: string[];
}

const GlobalExpansionHero: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=90",
      badge: "YES TIME GLOBAL",
      title: "Global Expansion",
      subtitle: "Expanding Our Reach Beyond Borders",
      description:
        "YES TIME GLOBAL is expanding its presence across different countries, creating opportunities for wider international participation and building stronger global connections.",
      countries: ["🇵🇰 Pakistan", "🇳🇵 Nepal", "🇮🇩 Indonesia"],
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=2200&q=90",
      badge: "OUR GLOBAL PRESENCE",
      title: "Connecting Countries",
      subtitle: "Pakistan • Nepal • Indonesia",
      description:
        "Our global expansion highlights Pakistan, Nepal, and Indonesia as part of our international journey, with a vision to connect opportunities across borders.",
      countries: [
        "🇵🇰 Pakistan",
        "🇳🇵 Nepal",
        "🇮🇩 Indonesia",
      ],
    },

    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2200&q=90",
      badge: "THE JOURNEY CONTINUES",
      title: "Future Expansion",
      subtitle: "Beyond Our Current Borders",
      description:
        "Our journey does not stop with the current countries. In the future, other countries will also become part of our growing international presence.",
      countries: [
        "🇵🇰 Pakistan",
        "🇳🇵 Nepal",
        "🇮🇩 Indonesia",
        "🌍 Future Countries",
      ],
    },
  ];

  return (
    <section
      id="global-expansion"
      className="relative w-full overflow-hidden bg-[#020B1C]"
    >
      {/* =========================================
          SWIPER
      ========================================= */}

      <Swiper
        modules={[
          Autoplay,
          EffectFade,
          Pagination,
          Navigation,
        ]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={900}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation
        loop
        className="global-expansion-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* =========================================
                HERO
            ========================================= */}

            <div className="relative min-h-[680px] md:min-h-[720px]">
              {/* Background Image */}

              <div
                aria-hidden="true"
                className="global-expansion-background absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Dark Overlay */}

              <div className="absolute inset-0 bg-[#020B1C]/85" />

              {/* Subtle Blue Glow */}

              <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[120px]" />

              {/* Subtle Gold Glow */}

              <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-[#D9A21B]/10 blur-[120px]" />

              {/* =========================================
                  SUBTLE GRID
              ========================================= */}

              <div className="absolute inset-0 opacity-[0.05]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                  }}
                />
              </div>

              {/* =========================================
                  CONTENT
              ========================================= */}

              <div className="relative z-20 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-20 sm:px-8 md:min-h-[720px] lg:px-12">
                <div className="grid w-full items-center gap-14 lg:grid-cols-2">
                  {/* =====================================
                      LEFT CONTENT
                  ===================================== */}

                  <div className="relative z-10 max-w-3xl">
                    {/* Badge */}

                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D9A21B]/40 bg-[#07152D]/70 px-4 py-2 backdrop-blur-sm">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFD45A]">
                        <Sparkles
                          size={14}
                          className="text-[#020B1C]"
                        />
                      </span>

                      <span className="text-xs font-semibold tracking-[0.12em] text-[#FFD45A] sm:text-sm">
                        {slide.badge}
                      </span>
                    </div>

                    {/* Heading */}

                    <h1 className="max-w-3xl text-4xl font-bold  tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
                      {slide.title}
                    </h1>

                    {/* Gold Accent */}

                    <div className="my-5 flex items-center gap-3">
                      <div className="h-[2px] w-16 bg-[#D9A21B]" />

                      <div className="h-1.5 w-1.5 rounded-full bg-[#FFD45A]" />

                      <div className="h-px w-16 bg-[#D9A21B]/40" />
                    </div>

                    {/* Subtitle */}

                    <h2 className="mb-4 max-w-2xl text-xl font-semibold leading-snug text-[#FFD45A] sm:text-2xl md:text-3xl">
                      {slide.subtitle}
                    </h2>

                    {/* Description */}

                    <p className="max-w-xl text-base font-normal leading-7 text-slate-300 sm:text-lg">
                      {slide.description}
                    </p>

                    {/* =====================================
                        COUNTRIES
                    ===================================== */}

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {slide.countries.map(
                        (country, index) => (
                          <div
                            key={`${slide.id}-${index}`}
                            className="mx-0 flex min-w-0 shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 transition duration-300 hover:border-[#D9A21B]/70 hover:bg-white/10"
                          >
                            <MapPin
                              size={14}
                              className="text-[#FFD45A]"
                            />

                            <span className="whitespace-nowrap text-sm font-medium text-[#0b2b52]">
                              {country}
                            </span>
                          </div>
                        )
                      )}
                    </div>

                    {/* =====================================
                        BUTTONS
                    ===================================== */}

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      {/* Primary */}

                      <a
                        href="#global-presence"
                        className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#D9A21B] px-6 py-3.5 text-sm font-semibold text-[#020B1C] transition duration-300 hover:bg-[#FFD45A]"
                      >
                        Explore Global Presence

                        <ArrowRight
                          size={17}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>

                      {/* Secondary */}

                      <a
                        href="#global-journey"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-[#FFD45A] hover:bg-white/10"
                      >
                        Our Global Journey

                        <ChevronRight size={17} />
                      </a>
                    </div>
                  </div>

                  {/* =====================================
                      RIGHT GLOBE
                  ===================================== */}

                  <div className="relative hidden items-center justify-center lg:flex">
                    {/* Outer Glow */}

                    <div className="globe-outer-glow absolute h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[70px]" />

                    {/* Globe Area */}

                    <div className="relative flex h-[400px] w-[400px] items-center justify-center rounded-full border border-white/10 bg-[#06152D]/50 shadow-2xl backdrop-blur-sm">
                      {/* Orbit 1 */}

                      <div className="globe-orbit globe-orbit-gold absolute h-[470px] w-[180px] rotate-[35deg] rounded-[50%] border border-[#D9A21B]/30" />

                      {/* Orbit 2 */}

                      <div className="globe-orbit globe-orbit-blue absolute h-[470px] w-[180px] -rotate-[35deg] rounded-[50%] border border-blue-400/20" />

                      {/* Main Globe */}

                      <div className="globe-core relative flex h-[250px] w-[250px] items-center justify-center rounded-full bg-[#041B38] shadow-[0_0_60px_rgba(0,100,255,0.25)]">
                        <Globe2
                          size={190}
                          strokeWidth={0.8}
                          className="text-[#D9A21B]"
                        />

                        {/* Globe Center */}

                        <div className="absolute flex h-14 w-14 items-center justify-center rounded-full border border-[#FFD45A]/40 bg-[#020B1C]">
                          <Globe2
                            size={26}
                            className="text-[#FFD45A]"
                          />
                        </div>
                      </div>

                      {/* Pakistan */}

                      <div className="globe-marker globe-marker-pakistan absolute left-0 top-[38%] flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FFD45A]" />

                        <span className="rounded-md border border-white/10 bg-[#020B1C]/90 px-3 py-1.5 text-xs font-medium text-white">
                          Pakistan
                        </span>
                      </div>

                      {/* Nepal */}

                      <div className="globe-marker globe-marker-nepal absolute right-0 top-[25%] flex items-center gap-2">
                        <span className="rounded-md border border-white/10 bg-[#020B1C]/90 px-3 py-1.5 text-xs font-medium text-white">
                          Nepal
                        </span>

                        <span className="h-2.5 w-2.5 rounded-full bg-[#FFD45A]" />
                      </div>

                      {/* Indonesia */}

                      <div className="globe-marker globe-marker-indonesia absolute bottom-[18%] right-2 flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />

                        <span className="rounded-md border border-white/10 bg-[#020B1C]/90 px-3 py-1.5 text-xs font-medium text-white">
                          Indonesia
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* =========================================
          BOTTOM BRAND STRIP
      ========================================= */}

      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-[#020B1C]/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[#FFD45A]" />

            <span className="text-[11px] font-medium tracking-[0.18em] text-slate-300 sm:text-xs">
              CONNECTING OPPORTUNITIES WORLDWIDE
            </span>
          </div>

          <Globe2
            size={19}
            className="hidden text-[#D9A21B] sm:block"
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalExpansionHero;