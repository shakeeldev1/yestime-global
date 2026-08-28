import React from "react";
import {
  ArrowUpRight,
  Handshake,
  Headphones,
  Network,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

interface DealerBenefit {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

const dealerBenefits: DealerBenefit[] = [
  {
    icon: Network,
    title: "Strong Network",
    description:
      "Become part of a growing network of professional dealers and business partners.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description:
      "Unlock new opportunities to expand your business and increase your market reach.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Partnership",
    description:
      "Work with a trusted partner focused on transparency, reliability and long-term growth.",
  },
  {
    icon: Headphones,
    title: "Partner Support",
    description:
      "Get dedicated support to help you build and maintain a successful partnership.",
  },
];

const Dealers: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#020b1c] py-24">
      {/* Background Glow */}
      <div className="absolute left-[-150px] top-[-100px] h-[400px] w-[400px] rounded-full bg-[#0759c9]/20 blur-[120px]" />
      <div className="absolute right-[-150px] bottom-[-100px] h-[400px] w-[400px] rounded-full bg-[#f5b72d]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-sm font-bold  tracking-[0.25em] text-[#f5b72d]">
              Dealer Network
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Build a Stronger
              <span className="block bg-gradient-to-r from-[#f5b72d] via-[#ffd86a] to-[#c7cbd1] bg-clip-text text-transparent">
                Dealer Partnership
              </span>
            </h2>
          </div>

          <p className="text-lg leading-8 text-slate-300">
            Our dealer partnerships are built around trust, collaboration
            and sustainable growth. We work closely with dealers to create
            mutually beneficial business opportunities.
          </p>
        </div>

        {/* Dealer Banner */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-[#f5b72d]/20 bg-gradient-to-br from-[#06162f] via-[#031126] to-[#020817] p-8 text-white shadow-2xl shadow-[#001d4d]/40 sm:p-12 lg:p-14">
          
          {/* Decorative Glows */}
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#0759c9]/20 blur-3xl" />
          <div className="absolute -bottom-32 left-20 h-80 w-80 rounded-full bg-[#f5b72d]/10 blur-3xl" />

          {/* Decorative Circle */}
          <div className="absolute right-[-100px] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full border border-[#f5b72d]/10" />
          <div className="absolute right-[-50px] top-1/2 h-[250px] w-[250px] -translate-y-1/2 rounded-full border border-[#1b70e0]/10" />

          <div className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            
            {/* Intro */}
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f5b72d] to-[#c98a08] text-[#020b1c] shadow-lg shadow-[#f5b72d]/20">
                <Handshake size={31} />
              </div>

              <h3 className="mt-7 text-3xl font-bold sm:text-4xl">
                Become Our Dealer
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Join our dealer network and take your business to the next
                level through a professional and growth-focused partnership.
              </p>

              <button className="group mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#f5b72d] to-[#ffd866] px-7 py-3.5 font-semibold text-[#020b1c] shadow-lg shadow-[#f5b72d]/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-[#f5b72d]/30">
                Partner With Us

                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </div>

            {/* Benefits */}
            <div className="grid gap-4 sm:grid-cols-2">
              {dealerBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#f5b72d]/40 hover:bg-[#0759c9]/10"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5b72d]/10 text-[#f5b72d] transition duration-300 group-hover:bg-[#f5b72d] group-hover:text-[#020b1c]">
                      <Icon size={21} />
                    </div>

                    <h4 className="mt-5 text-lg font-bold text-white">
                      {benefit.title}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dealers;