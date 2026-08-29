import React from "react";
import {
  Binoculars,
  ClipboardCheck,
  FileCheck,
  Rocket,
  ChevronRight,
  Sparkles,
  UserCheck,
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Explore Programs",
    description:
      "Browse available programs and opportunities that match your needs.",
    icon: <Binoculars size={28} strokeWidth={1.5} />,
  },
  {
    number: "02",
    title: "Choose Your Program",
    description:
      "Select the program that suits your goals and start the process.",
    icon: <ClipboardCheck size={28} strokeWidth={1.5} />,
  },
  {
    number: "03",
    title: "Complete the Process",
    description:
      "Follow the simple steps and submit required information to become a member.",
    icon: <FileCheck size={28} strokeWidth={1.5} />,
  },
  {
    number: "04",
    title: "Start Your Journey",
    description:
      "Start using your program and enjoy the benefits designed for your future.",
    icon: <Rocket size={28} strokeWidth={1.5} />,
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <div className="w-full font-sans antialiased">
      {/* ================= HOW IT WORKS SECTION (DARK) ================= */}
      <section className="relative overflow-hidden bg-[#000000] px-6 pt-16 pb-20 text-white lg:px-12">
        {/* World Map / Dot Grid Pattern Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5a51e_1px,transparent_1px)] opacity-10 [background-size:20px_20px]" />

        <div className="relative mx-auto max-w-[1200px]">
          {/* HEADER */}
          <div className="mx-auto max-w-[750px] text-center">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#e5a51e]/60 bg-[#000000] px-3.5 py-1">
              <Sparkles size={12} className="text-[#e5a51e]" />
              <span className="text-[11px] font-bold tracking-[0.15em] text-[#e5a51e] uppercase">
                HOW IT WORKS
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-4xl">
              Getting Started is{" "}
              <span className="font-extrabold text-[#e5a51e]">Simple</span>
            </h2>

            <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
              Follow these easy steps and start your journey with{" "}
              <span className="font-bold text-white">YES TIME GLOBAL</span>{" "}
              today.
            </p>
          </div>

          {/* STEPS GRID */}
          <div className="relative mt-20">
            {/* Dashed Connecting Line (Desktop) */}
            <div className="absolute left-[12%] right-[12%] top-[45px] hidden h-[1px] border-t border-dashed border-[#e5a51e]/50 lg:block" />

            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {steps.map((step, idx) => (
                <div
                  key={step.number}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Circle Icon Container with Crosshairs */}
                  <div className="relative z-10 flex items-center justify-center">
                    {/* Yellow Number Badge Above Circle */}
                    <div className="absolute -top-3.5 z-20 rounded-full bg-[#e5a51e] px-3 py-0.5 text-[10px] font-black text-black shadow-md">
                      {step.number}
                    </div>

                    {/* Outer Target Crosshair Line Guides */}
                    <div className="pointer-events-none absolute h-[106px] w-[106px] rounded-full border border-dashed border-[#e5a51e]/30" />

                    {/* Top/Bottom/Left/Right Target Dots */}
                    <span className="absolute -top-1 h-1.5 w-1.5 rounded-full bg-[#e5a51e]" />
                    <span className="absolute -bottom-1 h-1.5 w-1.5 rounded-full bg-[#e5a51e]" />
                    <span className="absolute -left-1 h-1.5 w-1.5 rounded-full bg-[#e5a51e]" />
                    <span className="absolute -right-1 h-1.5 w-1.5 rounded-full bg-[#e5a51e]" />

                    {/* Main Circle Icon Container */}
                    <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full border border-[#e5a51e] bg-[#020712] text-[#e5a51e] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#e5a51e] group-hover:text-black">
                      {step.icon}
                    </div>

                    {/* Intermediate Dot on Connecting Line (Desktop Only) */}
                    {idx < steps.length - 1 && (
                      <div className="absolute -right-[calc(50%+8px)] hidden h-2 w-2 rounded-full bg-[#e5a51e] lg:block" />
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 text-base font-bold text-white transition-colors group-hover:text-[#e5a51e]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-[210px] text-[11px] leading-relaxed text-slate-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA SECTION (WHITE BACKGROUND OUTSIDE) ================= */}
      <section className="bg-white px-6 py-12 lg:px-12">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-2xl border-2 border-[#e5a51e] bg-[#000000] p-8 text-white shadow-2xl md:p-12">
          {/* Background Texture Overlay inside the card */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5a51e_1px,transparent_1px)] opacity-10 [background-size:16px_16px]" />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            {/* Left Column Text */}
            <div className="max-w-[650px]">
              <div className="mb-2 inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#e5a51e] uppercase">
                <Sparkles size={14} />
                <span>READY TO GET STARTED?</span>
              </div>

              <h3 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-[2.5rem]">
                Move forward with{" "}
                <span className="text-[#e5a51e]">confidence.</span>
              </h3>

              <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                Explore our programs and discover opportunities designed around
                your goals and a better future.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-300">
                <UserCheck size={16} className="text-[#e5a51e]" />
                <span>Join thousands of satisfied members today.</span>
              </div>
            </div>

            {/* Right Column Stacked Buttons */}
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[210px]">
              <a
                href="/programs"
                className="group flex items-center justify-center gap-2 rounded-xl bg-[#e5a51e] px-6 py-3.5 text-xs font-bold text-black shadow-md transition-all duration-300 hover:bg-[#f3b431] active:scale-95"
              >
                <span>Explore Programs</span>
                <ChevronRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="/contact"
                className="flex items-center justify-center rounded-xl border border-[#e5a51e]/70 bg-black/40 px-6 py-3.5 text-xs font-bold text-white transition-all duration-300 hover:border-[#e5a51e] hover:bg-[#e5a51e]/10 active:scale-95"
              >
                Talk to Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksSection;