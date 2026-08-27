import React from "react";
import {
  ShieldCheck,
  LockKeyhole,
  Headphones,
  Globe2,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Transparent & Reliable Platform",
    text: "Complete transparency in all processes.",
  },
  {
    icon: LockKeyhole,
    title: "Secure & Safe Transactions",
    text: "Your security is our top priority.",
  },
  {
    icon: Headphones,
    title: "Customer Support 24/7",
    text: "We are here to help you anytime.",
  },
  {
    icon: Globe2,
    title: "Global Opportunities",
    text: "Access programs and opportunities worldwide.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-[#fbfaf7] px-5 py-20 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        
        <div className="rounded-xl border border-[#d4af37]/20 bg-white p-8 shadow-sm">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b4872a]">
            Why Choose Yes Time Global?
          </span>

          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#12172a]">
            Built Around
            <span className="block italic text-[#b4872a]">
              Trust & Simplicity
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#6b7280]">
            Our programs are designed to make your journey easier,
            clearer and more reliable.
          </p>

          <div className="mt-8 space-y-6">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#060b1f] text-[#f2cb61]">
                    <Icon size={19} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#12172a]">
                      {reason.title}
                    </h3>

                    <p className="mt-1 text-xs text-[#6b7280]">
                      {reason.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl bg-[#060b1f] p-8 text-white md:p-10">
          <div className="absolute right-[-70px] top-[-70px] h-56 w-56 rounded-full border border-[#d4af37]/20" />

          <div className="relative z-10 flex h-full flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f2cb61]">
              Our Commitment
            </span>

            <h2 className="mt-4 font-serif text-3xl font-semibold md:text-4xl">
              Your Goals.
              <span className="block italic text-[#d4af37]">
                Our Support.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#cdd3dc]">
              We focus on creating a simple, transparent and
              customer-focused experience across every program.
            </p>

            <button className="mt-8 w-fit rounded-md border border-[#d4af37] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#f2cb61] transition hover:bg-[#d4af37] hover:text-[#060b1f]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;