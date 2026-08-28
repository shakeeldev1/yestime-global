import React from "react";
import {
  ArrowDown,
  Handshake,
  Store,
  Building2,
  Users,
  BriefcaseBusiness,
  TrendingUp,
  Laptop,
  type LucideIcon,
} from "lucide-react";

interface PartnerCard {
  icon: LucideIcon;
  title: string;
  text: string;
}

const partnerCards: PartnerCard[] = [
  {
    icon: Store,
    title: "Shops",
    text: "Retail shops can join our business network and grow through partnership.",
  },
  {
    icon: Building2,
    title: "Business Partners",
    text: "Businesses can work with us to support expansion and long-term growth.",
  },
  {
    icon: TrendingUp,
    title: "Investors",
    text: "Business investors can explore opportunities created through our expanding system.",
  },
  {
    icon: Users,
    title: "Dealers",
    text: "Dealers and distribution partners can become part of our growing network.",
  },
];

const BusinessPartnersHero: React.FC = () => {
  return (
    <section className="relative min-h-[75vh] overflow-hidden bg-white text-[#0B2341]">
      {/* Background Glow */}
      <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#C6922B]/5 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#0B2341]/5 blur-3xl" />

      <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-center px-6 py-12 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#C6922B]/30 bg-[#C6922B]/5 px-5 py-2 text-sm font-semibold text-[#C6922B]">
              <Handshake size={18} strokeWidth={2} />
              Business Partnership
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-normal leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              Build Stronger
              <span className="block text-[#C6922B]">
                Business Partnerships.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-[#31527A] sm:text-lg">
              We aim to build strong and sustainable business relationships
              with shops, business partners, investors, dealers and service
              providers. As our business network expands, new opportunities
              for growth, collaboration and business development may arise.
            </p>

            {/* Supporting Points */}
            <div className="mt-7 grid max-w-xl gap-3 sm:grid-cols-2">

              {/* Point 1 */}
              <div className="flex items-center gap-3 text-sm text-[#31527A]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#C6922B]/10 text-[#C6922B]">
                  <Handshake size={16} strokeWidth={2} />
                </div>

                <span>Long-Term Partnerships</span>
              </div>

              {/* Point 2 */}
              <div className="flex items-center gap-3 text-sm text-[#31527A]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#C6922B]/10 text-[#C6922B]">
                  <TrendingUp size={16} strokeWidth={2} />
                </div>

                <span>Business Growth</span>
              </div>

              {/* Point 3 */}
              <div className="flex items-center gap-3 text-sm text-[#31527A]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#C6922B]/10 text-[#C6922B]">
                  <BriefcaseBusiness size={16} strokeWidth={2} />
                </div>

                <span>New Opportunities</span>
              </div>

              {/* Point 4 */}
              <div className="flex items-center gap-3 text-sm text-[#31527A]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#C6922B]/10 text-[#C6922B]">
                  <Laptop size={16} strokeWidth={2} />
                </div>

                <span>Digital &amp; Technical Support</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-full bg-[#0B2341] px-7 py-3.5 font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#16385F]"
              >
                Become a Partner
              </button>

              <button
                type="button"
                className="rounded-full border border-[#C6922B] px-7 py-3.5 font-semibold text-[#0B2341] transition-all duration-300 hover:bg-[#C6922B] hover:text-white"
              >
                Explore Partnership
              </button>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="relative">
            <div className="rounded-[28px] border border-[#D9E3EF] bg-[#F8FAFC] p-5 sm:p-7">

              {/* Right Header */}
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6922B]">
                  Who Can Partner
                </span>

                <h2 className="mt-2 text-2xl font-semibold text-[#0B2341] sm:text-3xl">
                  Grow With Our Business Network
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#55708F]">
                  Partnership opportunities may be available for different
                  businesses and professionals according to company needs.
                </p>
              </div>

              {/* Partner Cards */}
             {/* Partner Cards */}
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
  {partnerCards.map((partner) => {
    const Icon = partner.icon;

    return (
      <div
        key={partner.title}
        className="group flex h-[230px] flex-col rounded-2xl border border-[#D9E3EF] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C6922B] hover:shadow-md"
      >
        {/* Icon */}
        <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B2341]/5 text-[#0B2341] transition-all duration-300 group-hover:bg-[#C6922B]/10 group-hover:text-[#C6922B]">
          <Icon
            size={23}
            strokeWidth={2}
          />
        </div>

        {/* Heading */}
        <h3 className="text-lg font-semibold text-[#0B2341] transition-colors duration-300 group-hover:text-[#C6922B]">
          {partner.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-6 text-[#55708F]">
          {partner.text}
        </p>
      </div>
    );
  })}
</div>

              {/* Bottom Info */}
              <div className="mt-5 rounded-2xl border border-[#C6922B]/20 bg-[#C6922B]/5 p-4">
                <div className="flex items-start gap-3">

                  <div className="mt-0.5 shrink-0 text-[#C6922B]">
                    <BriefcaseBusiness
                      size={20}
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#0B2341]">
                      More Partnership Opportunities
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-[#55708F]">
                      Service providers, corporate partners and other relevant
                      business associates may also become part of the network
                      according to company requirements.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 md:block">
        <ArrowDown
          className="animate-bounce text-[#C6922B]"
          size={21}
          strokeWidth={2}
        />
      </div>
    </section>
  );
};

export default BusinessPartnersHero;