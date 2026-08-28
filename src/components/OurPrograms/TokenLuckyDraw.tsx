import React from "react";
import { Ticket, RotateCcw } from "lucide-react";

const TokenLuckyDraw: React.FC = () => {
  return (
    <section className="bg-[#f8f6f1] px-6 py-[110px] lg:px-8">
      <div className="mx-auto max-w-[1160px]">
       
        <div className="mx-auto mb-14 max-w-[650px] text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#b8892f]">
          
            Token &amp; Lucky Draw
          </span>

          <h2 className="mt-[14px] text-[clamp(1.9rem,3.4vw,2.4rem)] font-semibold text-[#0e1b30]">
            A Token With Every Purchase
          </h2>

          <p className="mx-auto mt-[14px] max-w-[600px] text-[0.95rem] leading-7 text-[#5b6472]">
            Yes Time Global's buy &amp; sell program gives eligible customers a
            token, or identification number, on completion of a purchase
            which may be entered into an available lucky draw.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
       
          <div className="rounded border border-[#e7e3da] border-t-[3px] border-t-[#b8892f] bg-white p-[38px]">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#0e1b30] text-[#d8ad5e]">
              <Ticket size={20} />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-[#0e1b30]">
              How a Token Works
            </h3>

            <p className="mb-2.5 text-[0.92rem] leading-7 text-[#5b6472]">
              Once your purchase is verified through a registered dealer,
              you're issued a token tied to your account recording your
              buying date, amount, dealer and token number.
            </p>

            <p className="text-[0.92rem] leading-7 text-[#5b6472]">
              Only tokens with a valid number, meeting the eligibility set for
              that program, are entered into the draw.
            </p>
          </div>

          {/* Results Card */}
          <div className="rounded border-t-[3px] border-t-[#b8892f] bg-[#0e1b30] p-[38px]">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#d8ad5e] bg-white/[0.08] text-[#d8ad5e]">
              <RotateCcw size={20} />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-white">
              Draws &amp; Results
            </h3>

            <p className="mb-2.5 text-[0.92rem] leading-7 text-[#b9c0cf]">
              Draw timing, method and eligibility follow the company's set
              terms. Results are shared through our digital system, and you
              can check your own participation from your dashboard.
            </p>

            <p className="text-[0.92rem] leading-7 text-[#b9c0cf]">
              Selected customers receive the related benefit only after
              identity and eligibility verification.
            </p>
          </div>

          <div className="border-t border-[#e7e3da] pt-5 text-center text-[0.8rem] italic leading-6 text-[#8a92a0] md:col-span-2">
            The lucky draw only runs where legally permitted, under applicable
            law and required approvals. No customer has an absolute right to
            any reward benefit is given only when the relevant program's
            terms are fully met.
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenLuckyDraw;