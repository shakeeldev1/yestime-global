import React from "react";
import {
  ArrowUpRight,
  Store,
  Handshake,
  FileText,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

interface ShopFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const shopFeatures: ShopFeature[] = [
  {
    icon: Store,
    title: "Shop Owners",
    description:
      "Retail shop owners can become part of our business network and work with the company as business partners.",
  },
  {
    icon: Handshake,
    title: "Business Partnership",
    description:
      "We build long-term business relationships with shop partners to support mutual growth and future opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Partnership can help expand business reach, strengthen market presence and create new commercial opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Partnership",
    description:
      "Every partnership is developed according to company requirements, policies and mutually agreed terms.",
  },
];

const Shops: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-1">

      {/* Background Glow */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#C6922B]/5 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#0B2341]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#C6922B]">
            Shop Partnership
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0B2341] sm:text-5xl">
            Partner With Us Through{" "}
            <br />
            <span className="text-3xl text-[#C6922B]">
              Your Shop
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#55708F]">
          Shop owners can join our growing network and build strong, long-term partnerships with us.
          </p>

        </div>

        {/* Main Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left Card */}
          {/* Left Card */}
          <div
            className="relative overflow-hidden rounded-3xl shadow-xl shadow-[#0B2341]/10 min-h-[650px]"
            style={{
              backgroundImage:
                "url('https://www.retailgazette.co.uk/wp-content/uploads/shutterstock_286865720.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0B2341]/80" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-br from-[#0B2341]/10 via-[#0B2341]/10 to-[#C6922B]/10" />

            {/* Content */}
            <div className="relative z-10 p-8 sm:p-12">
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#C6922B] shadow-lg">
                <Store size={30} />
              </div>

              {/* Heading */}
              <h3 className="mt-8 text-3xl font-bold text-white">
                Become a Shop Partner
              </h3>

              {/* Description */}
              <p className="mt-5 leading-8 text-white/90">
                Shop owners can apply for partnership by submitting the required information for business review.
              </p>

              <p className="mt-4 leading-8 text-white/90">
                Approved partners enter into formal business relationships on mutually agreed terms.
              </p>

              {/* Process */}
              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#C6922B] shadow-sm">
                  <FileText size={18} />
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white">
                    Partnership Process
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-white/80">
                    Submit your business information → company review →
                    approval → mutually agreed terms → formal partnership.
                  </p>
                </div>
              </div>

              {/* Button */}
              <button className="group mt-8 inline-flex items-center gap-2 rounded-md bg-[#C6922B] px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#0B2341]">
                Join Our Shop Network

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
                  className="group rounded-2xl border border-[#D9E3EF] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C6922B] hover:shadow-lg hover:shadow-[#0B2341]/5"
                >

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B2341]/5 text-[#0B2341] transition-all duration-300 group-hover:bg-[#C6922B]/10 group-hover:text-[#C6922B]">
                    <Icon size={23} />
                  </div>

                  {/* Heading */}
                  <h4 className="mt-5 text-lg font-bold text-[#0B2341] transition-colors duration-300 group-hover:text-[#C6922B]">
                    {feature.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-[#55708F]">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>

        {/* Bottom Information */}
        <div className="mt-12 rounded-2xl border border-[#D9E3EF] bg-[#F8FAFC] p-6 sm:p-8">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div className="max-w-3xl">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B2341] text-[#C6922B]">
                  <Handshake size={20} />
                </div>

                <h3 className="text-xl font-bold text-[#0B2341]">
                  Building Long-Term Business Relationships
                </h3>
              </div>

              <p className="mt-3 text-sm leading-7 text-[#55708F]">
                We aim to develop reliable business partnerships that can
                support the company and its partners as the business
                network continues to grow. Suitable partners may also
                benefit from future business and collaboration opportunities.
              </p>

            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center rounded-full border border-[#C6922B]/30 bg-[#C6922B]/5 px-4 py-2 text-xs font-semibold text-[#C6922B]">
                Professional Partnership
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Shops;