import React from "react";

const VisionCTA: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-[#0e1b30] px-8 py-24 text-center text-white"
    >
      <div className="mx-auto max-w-[640px]">
        <span className="inline-flex items-center gap-2.5 font-sans text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#d8ad5e]">
          <span className="h-px w-[22px] bg-[#d8ad5e]" />
          Let's Connect
        </span>

        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
          Ready to Find the{" "}
          <em className="not-italic text-[#d8ad5e]">
            Right Opportunity
          </em>
          ?
        </h2>

        <p className="mt-4 text-[1.02rem] leading-relaxed text-[#b9c0cf]">
          Whether it's a vehicle plan, a property opportunity, or a
          dealer partnership — we're here to help you take the next
          step, at the right time.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="rounded-[2px] bg-[#b8892f] px-[30px] py-[15px] text-sm font-bold tracking-wide text-[#0e1b30] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(184,137,47,0.35)]"
          >
            Start a Conversation
          </a>

          <a
            href="#programs"
            className="rounded-[2px] border border-white/30 px-[30px] py-[15px] text-sm font-bold tracking-wide text-white transition-all duration-200 hover:border-[#d8ad5e] hover:text-[#d8ad5e]"
          >
            See Our Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default VisionCTA;