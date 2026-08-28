import {
  UserPlus,
  Search,
  FileText,
  ShieldCheck,
  CreditCard,
  Gift,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Register",
    text: "Create your account with basic information.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Explore",
    text: "Browse programs and choose what suits you.",
    icon: Search,
  },
  {
    number: "03",
    title: "Apply / Submit",
    text: "Submit required details and documents.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Verification",
    text: "We verify your information for security.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Payments",
    text: "Make payments as per the plan you choose.",
    icon: CreditCard,
  },
  {
    number: "06",
    title: "Enjoy Benefits",
    text: "Receive your benefits and stay connected.",
    icon: Gift,
  },
];

const HowProgramsWork = () => {
  return (
    <section className="bg-[#f4f0e8] px-5 py-20 text-[#071426] md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-10 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#b27a18]">
            How it works
          </p>
          <h2 className="mt-4 font-[Playfair_Display] text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            From first step
            <span className="block italic text-[#b27a18]">to real benefits.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-[#59616b]">
            Getting started is straightforward. Follow six simple steps and
            stay in control at every stage of your journey.
          </p>
          <div className="mt-9 flex items-center gap-3 text-sm font-semibold text-[#071426]">
            <span className="h-px w-12 bg-[#b27a18]" />
            <span>Simple. Secure. Clear.</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-8 left-6 top-8 w-px bg-[#c8b98e] md:left-8" />
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative flex gap-5 pb-8 last:pb-0 md:gap-7"
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[#b27a18] bg-[#f4f0e8] font-semibold text-[#b27a18] transition duration-300 group-hover:bg-[#b27a18] group-hover:text-white md:h-16 md:w-16">
                  {step.number}
                </div>

                <div className="flex min-h-16 flex-1 items-start justify-between gap-4 border-b border-[#d8d0c2] pb-8 group-last:border-0">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b27a18]">Step {step.number}</p>
                    <h3 className="mt-2 text-xl font-semibold text-[#071426]">{step.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-[#59616b]">{step.text}</p>
                  </div>
                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center bg-[#071426] text-[#f4c75e] sm:flex">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowProgramsWork;