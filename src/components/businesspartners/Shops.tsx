import React from "react";
import {
  ArrowUpRight,
  MapPin,
  Store,
  TrendingUp,
  Users,
} from "lucide-react";

interface ShopFeature {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

const shopFeatures: ShopFeature[] = [
  {
    icon: Store,
    title: "Retail Presence",
    description:
      "Expand your retail business by becoming part of our trusted partner network.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Access new opportunities and grow your customer base through our partnership.",
  },
  {
    icon: Users,
    title: "Customer Network",
    description:
      "Connect with a wider customer network and build long-term business relationships.",
  },
  {
    icon: MapPin,
    title: "Strategic Locations",
    description:
      "We value shops that provide strong market presence and convenient customer access.",
  },
];

const Shops: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#020b1c] py-24">
      {/* Background Glow */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#0759c9]/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#f5b72d]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#f5b72d]">
            Business Partners
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Partner With Us Through{" "}
            <span className="bg-gradient-to-r from-[#f5b72d] via-[#ffd866] to-[#c7cbd1] bg-clip-text text-transparent">
              Shops
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Our shop partners help us reach customers at the local level.
            Together, we create a reliable and valuable retail experience.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left Card */}
          <div className="relative overflow-hidden rounded-3xl border border-[#f5b72d]/20 bg-gradient-to-br from-[#06162f] via-[#031126] to-[#020817] p-8 text-white shadow-2xl shadow-[#001d4d]/40 sm:p-12">

            {/* Glow */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#0759c9]/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#f5b72d]/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f5b72d] to-[#c98a08] text-[#020b1c] shadow-lg shadow-[#f5b72d]/20">
                <Store size={30} />
              </div>

              <h3 className="mt-8 text-3xl font-bold">
                Become a Shop Partner
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Whether you operate a small retail outlet or a
                well-established shop, our partnership model is designed
                to help businesses unlock new opportunities and achieve
                sustainable growth.
              </p>

              <button className="group mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#f5b72d] to-[#ffd866] px-6 py-3 font-semibold text-[#020b1c] shadow-lg shadow-[#f5b72d]/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-[#f5b72d]/30">
                Join Our Network

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid gap-5 sm:grid-cols-2">
            {shopFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#f5b72d]/40 hover:bg-[#0759c9]/10 hover:shadow-xl hover:shadow-[#001d4d]/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5b72d]/10 text-[#f5b72d] transition duration-300 group-hover:bg-[#f5b72d] group-hover:text-[#020b1c]">
                    <Icon size={23} />
                  </div>

                  <h4 className="mt-5 text-lg font-bold text-white">
                    {feature.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Shops;