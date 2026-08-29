import React from "react";
import {
  ArrowRight,
  Target,
  Eye,
  Sparkles,
  Users,
  ShoppingBag,
  Car,
  Bike,
  PiggyBank,
} from "lucide-react";

interface Program {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  image: string;
}

const programs: Program[] = [
  {
    title: "Shopping Program",
    icon: ShoppingBag,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Car Program",
    icon: Car,
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Motorcycle Program",
    icon: Bike,
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Savings Programs",
    icon: PiggyBank,
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=900&q=85",
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f5f7fa] py-7 sm:py-8">
      <div className="mx-auto w-full max-w-[1450px] px-3 sm:px-5 lg:px-6">

        {/* MAIN CARD */}
        <div className="grid overflow-hidden rounded-2xl border border-[#e5eaf0] bg-white shadow-[0_15px_45px_rgba(11,35,65,0.08)] lg:grid-cols-[0.9fr_1.1fr]">

          {/* ================= LEFT ================= */}
          <div className="flex flex-col justify-center px-5 py-6 sm:px-7 sm:py-7 lg:px-9 lg:py-8">

            {/* LABEL */}
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0b2341] text-[#e0ad38]">
                <Users size={14} />
              </div>

              <div>
                <span className="text-[8px] font-bold uppercase tracking-[2px] text-[#c6922b]">
                  Who We Are
                </span>

                <div className="mt-1 flex items-center gap-1">
                  <span className="h-[2px] w-6 rounded-full bg-[#dca936]" />
                  <span className="h-[2px] w-1 rounded-full bg-[#dca936]" />
                </div>
              </div>
            </div>

            {/* HEADING */}
            <h2 className="max-w-[570px] font-serif text-[27px] font-bold leading-[1.12] tracking-tight text-[#0b2341] sm:text-[32px] lg:text-[37px]">
              Connecting People,
              <br />
              <span className="text-[#dca936]">
                Businesses & Opportunities.
              </span>
            </h2>

            {/* SINGLE MERGED DESCRIPTION */}
            <p className="mt-3 max-w-[570px] text-[11px] leading-[1.7] text-[#63758a] sm:text-[12px]">
              At{" "}
              <strong className="font-bold text-[#0b2341]">
                YES TIME GLOBAL PRIVATE LIMITED
              </strong>
              , we connect people, businesses, and communities through trusted
              programs, strategic partnerships, and meaningful opportunities,
              creating simple pathways for growth, collaboration, and
              long-term success.
            </p>

            {/* MINI VALUES */}
            <div className="mt-4 grid grid-cols-3 gap-2">

              <div className="flex items-center gap-1.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff5dc] text-[#d49d28]">
                  <Target size={11} />
                </span>

                <span className="text-[8px] font-semibold text-[#243b55]">
                  Mission
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff5dc] text-[#d49d28]">
                  <Eye size={11} />
                </span>

                <span className="text-[8px] font-semibold text-[#243b55]">
                  Vision
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fff5dc] text-[#d49d28]">
                  <Sparkles size={11} />
                </span>

                <span className="text-[8px] font-semibold text-[#243b55]">
                  Values
                </span>
              </div>

            </div>

            {/* DIVIDER */}
            <div className="my-4 h-px w-full bg-[#e7edf3]" />

            {/* SHORT TRUST LINE */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">

              <span className="text-[8px] font-semibold text-[#53677d]">
                Global Opportunities
              </span>

              <span className="h-1 w-1 rounded-full bg-[#dca936]" />

              <span className="text-[8px] font-semibold text-[#53677d]">
                Trusted Process
              </span>

              <span className="h-1 w-1 rounded-full bg-[#dca936]" />

              <span className="text-[8px] font-semibold text-[#53677d]">
                Strategic Partnerships
              </span>

            </div>

            {/* BUTTON */}
            <div className="mt-4">
              <a
  href="/about"
  className="group inline-flex h-[36px] items-center justify-center gap-2 rounded-lg bg-[#dca936] px-4 text-[9px] font-bold text-[#0b2341] shadow-[0_6px_18px_rgba(220,169,54,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f0c451] hover:shadow-[0_8px_22px_rgba(220,169,54,0.35)]"
>
  Discover Our Story

  <ArrowRight
    size={12}
    className="text-[#0b2341] transition-transform duration-300 group-hover:translate-x-1"
  />
</a>
            </div>
          </div>

          {/* ================= RIGHT PROGRAMS ================= */}
          <div className="relative overflow-hidden bg-[#071a31] px-4 py-5 sm:px-6 sm:py-6 lg:px-7 lg:py-7">

            {/* BACKGROUND GLOW */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#dca936]/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#1c5d91]/20 blur-3xl" />

            {/* HEADER */}
            <div className="relative mb-4">

              <div className="flex items-center gap-2">
                <span className="h-[2px] w-7 bg-[#dca936]" />

                <span className="text-[8px] font-bold uppercase tracking-[2px] text-[#e5b84b]">
                  Our Programs
                </span>
              </div>

              <h3 className="mt-1.5 text-[19px] font-bold text-white sm:text-[22px]">
                Programs Designed{" "}
                <span className="text-[#e0ad38]">For You.</span>
              </h3>

            </div>

            {/* PROGRAM GRID */}
            <div className="relative grid grid-cols-2 gap-3">

              {programs.map((program, index) => {
                const Icon = program.icon;

                return (
                  <div
                    key={program.title}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-[#dca936]/60"
                  >

                    {/* IMAGE */}
                    <div className="relative h-[125px] overflow-hidden sm:h-[140px]">

                      <img
                        src={program.image}
                        alt={program.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06172c] via-[#06172c]/20 to-transparent" />

                      {/* ICON */}
                      <div className="absolute left-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full border border-[#f1c95b]/60 bg-[#071a31]/90 text-[#f3c75d] shadow-lg backdrop-blur-sm">
                        <Icon size={14} />
                      </div>

                      {/* NUMBER */}
                      <span className="absolute right-2.5 top-2.5 text-[8px] font-bold tracking-[1px] text-white/50">
                        0{index + 1}
                      </span>

                      {/* TITLE */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5">

                        <h4 className="text-[11px] font-bold text-white sm:text-[12px]">
                          {program.title}
                        </h4>

                        <div className="mt-1 h-[2px] w-6 bg-[#dca936] transition-all duration-300 group-hover:w-10" />

                      </div>

                    </div>
                  </div>
                );
              })}

            </div>

            {/* BOTTOM LINE */}
            <div className="relative mt-3 flex items-center justify-between rounded-lg border border-[#dca936]/20 bg-[#dca936]/5 px-3 py-2">

              <div className="flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-[#dca936]" />

                <p className="text-[8px] font-medium text-white/65">
                  Trusted programs • Better opportunities
                </p>

              </div>

              <ArrowRight
                size={12}
                className="text-[#dca936]"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;