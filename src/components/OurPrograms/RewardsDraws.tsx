import React from "react";
import { Gift, Sparkles, ArrowRight } from "lucide-react";

const RewardsDraws: React.FC = () => {
  return (
    <section className="bg-[#fbfaf7] px-5 pb-20 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2">
        
        {/* Rewards */}
        <div className="rounded-xl border border-[#d4af37]/20 bg-white p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#d4af37] bg-[#fbfaf7] text-[#b4872a]">
            <Gift size={28} />
          </div>

          <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.25em] text-[#b4872a]">
            Rewards & Benefits
          </span>

          <h2 className="mt-3 font-serif text-2xl font-semibold text-[#12172a]">
            Enjoy More Benefits
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#6b7280]">
            Participate in eligible programs and enjoy available
            savings, rewards and benefits.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#060b1f] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#f2cb61]">
            Explore Benefits
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Draw */}
        <div className="rounded-xl border border-[#d4af37]/20 bg-[#060b1f] p-8 text-center text-white">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#d4af37] text-[#f2cb61]">
            <Sparkles size={28} />
          </div>

          <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.25em] text-[#f2cb61]">
            Exciting Rewards & Draws
          </span>

          <h2 className="mt-3 font-serif text-2xl font-semibold">
            Lucky Draw Opportunities
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#cdd3dc]">
            Eligible participants may take part in available lucky
            draws according to the applicable program rules.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-md border border-[#d4af37] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#f2cb61] hover:bg-[#d4af37] hover:text-[#060b1f]">
            View Current Draws
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RewardsDraws;