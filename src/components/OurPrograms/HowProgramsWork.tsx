import React from "react";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Choose Your Plan",
    description: "Pick the plan that fits your need and budget.",
  },
  {
    number: "02",
    title: "Review Full Details",
    description: "See complete plan information before you proceed.",
  },
  {
    number: "03",
    title: "Submit Application",
    description: "Send your request with the required details.",
  },
  {
    number: "04",
    title: "Make Payments",
    description: "Pay the agreed installment on your chosen plan.",
  },
  {
    number: "05",
    title: "Track Your Plan",
    description: "Monitor installments, balance & status anytime.",
  },
  {
    number: "06",
    title: "Plan Completion",
    description: "Once terms are met, your plan is complete.",
  },
];

const HowProgramsWork: React.FC = () => {
  return (
    <section className="bg-[#0e1b30] px-6 py-[100px] text-center text-white lg:px-8">
      <div className="mx-auto max-w-[1160px]">
        <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#d8ad5e]">
          <span className="h-px w-6 bg-[#d8ad5e]" />
          How A Plan Works
        </span>

        <h2 className="mt-[14px] text-[clamp(1.9rem,3.4vw,2.5rem)] font-semibold">
          Simple Steps.{" "}
          <em className="font-serif text-[#d8ad5e]">Clear Process.</em>
        </h2>

        <p className="mx-auto mt-3 max-w-[560px] text-[0.98rem] leading-7 text-[#b9c0cf]">
          From choosing a plan to completion — this is the same six-step path
          every vehicle or property plan follows.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-y-11 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-0">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative px-3"
            >
             
              {index !== steps.length - 1 && (
                <div className="absolute left-1/2 top-[23px] hidden h-px w-full bg-white/15 lg:block" />
              )}

              
              <div className="relative z-10 mx-auto flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#d8ad5e] bg-white/[0.06] font-serif text-[0.85rem] font-semibold text-[#d8ad5e]">
                {step.number}
              </div>

              <h3 className="mt-4 text-[0.95rem] font-semibold text-white">
                {step.title}
              </h3>

              <p className="mx-auto mt-1 max-w-[150px] text-xs leading-5 text-[#9aa2b3]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowProgramsWork;