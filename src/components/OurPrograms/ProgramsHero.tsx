import React from "react";
import { Globe2, Sparkles } from "lucide-react";

const ProgramsHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#060b1f] px-5 pb-16 pt-20 text-center text-white md:px-10 lg:px-16">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-100px] top-10 h-[350px] w-[350px] rounded-full border border-[#d4af37]/20" />

        <div className="absolute right-[-100px] top-[-80px] h-[430px] w-[430px] rounded-full border border-[#d4af37]/20" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(#d4af37 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 80%)",
          }}
        />

      </div>

      {/* Globe */}
      <div className="absolute right-[-120px] top-10 hidden h-[420px] w-[420px] rounded-full border border-[#d4af37]/20 lg:block">

        <div className="absolute inset-8 rounded-full border border-[#d4af37]/10" />

        <div className="absolute inset-20 rounded-full border border-[#d4af37]/10" />

        <Globe2
          size={210}
          strokeWidth={0.7}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#d4af37]/20"
        />

      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl">

        {/* Eyebrow */}
        <div className="mb-5 flex items-center justify-center gap-4">

          <span className="h-px w-14 bg-[#d4af37]" />

          <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.35em] text-[#f2cb61]">
            <Sparkles size={13} />
            Our Programs
          </span>

          <span className="h-px w-14 bg-[#d4af37]" />

        </div>

        {/* Main Heading */}
        <h1
          className="
            font-serif
            text-2xl
            font-semibold
            leading-tight
            tracking-[0.01em]
            bg-gradient-to-b
            from-[#fbe9b8]
            via-[#d4af37]
            to-[#b6862a]
            bg-clip-text
            text-transparent
            sm:text-4xl
            lg:text-5xl
          "
        >
          Programs{" "}

          <span
            className="italic"
            style={{
              WebkitTextFillColor: "#cdd3dc",
            }}
          >
            Designed
          </span>

          <br />

          For Your Needs
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-[13px] leading-6 text-[#cdd3dc]/70 sm:text-[14px] sm:leading-[1.6]">
          Yes Time Global brings you smart, reliable and customer-focused
          programs that make your purchases, investments and savings easier
          than ever.
        </p>

        {/* Divider */}
        <div className="mx-auto mt-8 flex items-center justify-center gap-3">

          <span className="h-px w-16 bg-[#d4af37]/60" />

          <span className="h-2 w-2 rotate-45 bg-[#d4af37]" />

          <span className="h-px w-16 bg-[#d4af37]/60" />

        </div>

      </div>
    </section>
  );
};

export default ProgramsHero;