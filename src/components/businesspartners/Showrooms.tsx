import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Eye,
  Target,
} from "lucide-react";

interface ShowroomBenefit {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  text: string;
}

const showroomBenefits: ShowroomBenefit[] = [
  {
    icon: BadgeCheck,
    title: "Trusted Partnership",
    text: "Build a professional relationship with a reliable and growing business network.",
  },
  {
    icon: Eye,
    title: "Greater Visibility",
    text: "Increase your market visibility and connect with more potential customers.",
  },
  {
    icon: Target,
    title: "Targeted Opportunities",
    text: "Create new opportunities through strategic business collaboration.",
  },
];

const Showrooms: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#020b1c] py-24">
      {/* Background Glow */}
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#0759c9]/20 blur-[120px]" />
      <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-[#f5b72d]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#f5b72d]">
            Showroom Partnership
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Showcase Your Business
            <span className="block bg-gradient-to-r from-[#f5b72d] via-[#ffd866] to-[#c7cbd1] bg-clip-text text-transparent">
              With Us
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Our showroom partners play an important role in presenting
            products, services and solutions directly to customers in a
            professional environment.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          {/* Main Card */}
          <div className="relative min-h-[430px] overflow-hidden rounded-3xl border border-[#f5b72d]/20 bg-gradient-to-br from-[#06162f] via-[#031126] to-[#020817] p-8 text-white shadow-2xl shadow-[#001d4d]/40 sm:p-10">

            {/* Decorative Glows */}
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#0759c9]/20 blur-3xl" />
            <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-[#f5b72d]/10 blur-3xl" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f5b72d] to-[#c98a08] text-[#020b1c] shadow-lg shadow-[#f5b72d]/20">
                  <Building2 size={32} />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">
                  Showroom Partners
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  Partner with us to create a premium customer experience,
                  strengthen your market presence and build a lasting
                  business relationship.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-3 text-sm font-semibold text-[#f5b72d]">
                <span className="h-px w-10 bg-[#f5b72d]" />
                Professional Partnership
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-5">
            {showroomBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group flex gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#f5b72d]/40 hover:bg-[#0759c9]/10 hover:shadow-xl hover:shadow-[#001d4d]/30"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f5b72d]/10 text-[#f5b72d] transition duration-300 group-hover:bg-gradient-to-br group-hover:from-[#f5b72d] group-hover:to-[#ffd866] group-hover:text-[#020b1c]">
                    <Icon size={25} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-400">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              );
            })}

            <button className="group inline-flex items-center gap-3 rounded-md bg-gradient-to-r from-[#f5b72d] to-[#ffd866] px-7 py-4 font-semibold text-[#020b1c] shadow-lg shadow-[#f5b72d]/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-[#f5b72d]/30">
              Become a Showroom Partner

              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Showrooms;