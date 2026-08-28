import React from "react";
import {
  UsersRound,
  ArrowRight,
} from "lucide-react";

const ReferralEarn: React.FC = () => {
  return (
    <section className="bg-[#fbfaf7] px-5 pb-8 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-xl border border-[#d4af37]/20 bg-white p-8 md:p-12">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
          
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b4872a]">
              Referral & Earn
            </span>

            <h2 className="mt-3 text-3xl font-semibold text-[#12172a]">
              Share the Opportunity.
              <span className="block italic text-[#b4872a]">
                Earn Together.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#6b7280]">
              Invite your friends and family to explore our programs
              and participate in available referral benefits according
              to the applicable program terms.
            </p>

            <button className="mt-6 flex items-center gap-3 rounded-md bg-[#060b1f] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#f2cb61]">
              Learn More
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="flex h-32 w-32 items-center justify-center rounded-full border border-[#d4af37] bg-[#fbfaf7] text-[#b4872a]">
            <UsersRound size={55} strokeWidth={1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralEarn;