import React from "react";
import { ArrowRight, Headphones } from "lucide-react";

const ProgramsCTA: React.FC = () => {
  return (
    <section className="bg-[#060b1f] px-5 pb-10 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-7 rounded-xl border border-[#d4af37]/30 bg-[#0d1836] p-8 md:flex-row md:justify-between md:p-10">
        
        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#d4af37] text-[#f2cb61]">
            <Headphones size={28} />
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f2cb61]">
              We Are Here To Help You
            </span>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#cdd3dc]">
              Have questions or need assistance? Our support team is
              ready to help you at every step of your journey.
            </p>
          </div>
        </div>

        <button className="flex shrink-0 items-center gap-3 rounded-md bg-[#f2cb61] px-7 py-3 text-xs font-bold uppercase tracking-wide text-[#060b1f] transition hover:bg-[#d4af37]">
          Contact Us
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default ProgramsCTA;