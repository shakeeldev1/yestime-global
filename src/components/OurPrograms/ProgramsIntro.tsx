import React from "react";

const ProgramsIntro: React.FC = () => {
  return (
    <section className="px-6 pb-5 pt-[88px] text-center lg:px-8">
      <div className="mx-auto max-w-[680px]">
        <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#b8892f]">
          <span className="h-px w-6 bg-[#b8892f]" />
          What We Offer
        </span>

        <h2 className="mt-[14px] text-[clamp(1.9rem,3.4vw,2.4rem)] font-semibold leading-tight text-[#0e1b30]">
          Programs Built for{" "}
          <em className="font-serif text-[#b8892f]">
            Real Opportunities
          </em>
        </h2>

        <p className="mt-[18px] text-[1.02rem] leading-7 text-[#5b6472]">
          Our programs are designed to give customers organized access to
          vehicles, property and buying and selling opportunities through a
          simple and transparent system.
        </p>
      </div>
    </section>
  );
};

export default ProgramsIntro;