import React from "react";
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

const HowProgramsWork: React.FC = () => {
  return (
    <section className="bg-[#060b1f] px-5 py-20 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-2xl border border-[#d4af37]/30 bg-[#0d1836] px-6 py-12 md:px-10">
        
        <div className="mb-12 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#f2cb61]">
            How Our Programs Work
          </span>

          <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
            Simple Steps.
            <span className="italic text-[#d4af37]">
              {" "}Clear Process.
            </span>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37] bg-[#060b1f] font-serif text-lg text-[#f2cb61]">
                  {step.number}
                </div>

                <div className="mx-auto mt-4 flex h-12 w-12 items-center justify-center text-[#d4af37]">
                  <Icon size={28} strokeWidth={1.3} />
                </div>

                <h3 className="mt-3 text-sm font-semibold">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2 max-w-[160px] text-xs leading-5 text-[#cdd3dc]/70">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowProgramsWork;