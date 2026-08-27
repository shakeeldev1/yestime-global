import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-8 pb-24 pt-16 text-center">
      {/* Decorative Rings */}
      <div className="pointer-events-none absolute left-1/2 top-[-60px] h-[640px] w-[640px] -translate-x-1/2 opacity-55">
        <svg
          viewBox="0 0 640 640"
          className="h-full w-full"
          aria-hidden="true"
        >
          <circle
            cx="320"
            cy="320"
            r="300"
            fill="none"
            stroke="#e7e3da"
            strokeWidth="1"
          />

          <circle
            cx="320"
            cy="320"
            r="230"
            fill="none"
            stroke="#e7e3da"
            strokeWidth="1"
          />

          <circle
            cx="320"
            cy="320"
            r="160"
            fill="none"
            stroke="#ead9b6"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[680px]">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2.5 font-sans text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#b8892f]">
          <span className="h-px w-[22px] bg-[#b8892f]" />
          Our Purpose
        </span>

        <h1 className="mt-[18px] text-5xl font-semibold tracking-tight text-[#0e1b30] sm:text-6xl lg:text-[4.1rem]">
          Vision & Mission
        </h1>

        <p className="mx-auto mt-[22px] max-w-[560px] text-[1.08rem] leading-relaxed text-[#5b6472]">
          Yes Time Global (Private) Limited was built on one idea:
          every worthwhile opportunity has a right time and a right
          place. We exist to bring people, vehicles and property
          together — easily, transparently, and on organized terms.
        </p>

        {/* Gold Mark */}
        <div className="mx-auto mt-11 h-[9px] w-[9px] rounded-full bg-[#b8892f] shadow-[0_0_0_8px_rgba(184,137,47,0.12)]" />
      </div>
    </section>
  );
};

export default Hero;