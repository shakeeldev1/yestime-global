import React from "react";
import {
  Globe2,
  ShieldCheck,
  Users,
  Award,
} from "lucide-react";

const highlights = [
  {
    icon: Globe2,
    title: "Global Platform",
    text: "Serving customers worldwide",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Secure",
    text: "Transparent and reliable system",
  },
  {
    icon: Users,
    title: "Customer First",
    text: "Your satisfaction is our priority",
  },
  {
    icon: Award,
    title: "Experienced Team",
    text: "Professional support you can count on",
  },
];

const ProgramHighlights: React.FC = () => {
  return (
    <section className="bg-[#060b1f] px-5 pb-10 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#d4af37]/20 border-y border-[#d4af37]/20 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
        {highlights.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`flex items-center gap-4 px-5 py-6 ${
                index !== 0
                  ? "sm:border-l sm:border-[#d4af37]/20"
                  : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/60 text-[#f2cb61]">
                <Icon size={23} strokeWidth={1.4} />
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-[#cdd3dc]/70">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProgramHighlights;