import React from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  FileCheck,
  Handshake,
  SearchCheck,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Globe2,
} from "lucide-react";

interface PartnerType {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ProcessStep {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Highlight {
  icon: React.ElementType;
  title: string;
  description: string;
}

const partnerTypes: PartnerType[] = [
  {
    icon: TrendingUp,
    title: "Investors",
    description:
      "Business investors can explore suitable opportunities and potential collaboration as the company continues to grow.",
  },
  {
    icon: Users,
    title: "Service Providers",
    description:
      "Professional service providers can collaborate with us to support relevant business activities and operations.",
  },
  {
    icon: Building2,
    title: "Corporate Partners",
    description:
      "Corporate organizations can build professional partnerships with us for mutual business development and long-term cooperation.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Associates",
    description:
      "Relevant businesses and organizations may become partners according to business requirements and mutual understanding.",
  },
];

const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: FileCheck,
    title: "Submit Information",
    description:
      "Interested partners provide the required business information for consideration.",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "Review",
    description:
      "The submitted information is reviewed according to the company's business requirements.",
  },
  {
    number: "03",
    icon: Target,
    title: "Assessment",
    description:
      "The potential partnership is assessed according to relevant business and partnership criteria.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Approval",
    description:
      "Suitable partners may be approved for the relevant business partnership opportunity.",
  },
  {
    number: "05",
    icon: Handshake,
    title: "Agreement",
    description:
      "Partnership terms and conditions are discussed and mutually agreed upon.",
  },
  {
    number: "06",
    icon: CheckCircle2,
    title: "Partnership",
    description:
      "A formal business relationship is established between the company and partner.",
  },
];

const highlights: Highlight[] = [
  {
    icon: TrendingUp,
    title: "Business Expansion",
    description:
      "Build stronger business connections and support wider market development.",
  },
  {
    icon: Handshake,
    title: "Long-Term Relations",
    description:
      "Develop professional relationships focused on sustainable business cooperation.",
  },
  {
    icon: Target,
    title: "Mutual Success",
    description:
      "Create opportunities through collaboration, trust and shared business objectives.",
  },
  {
    icon: Globe2,
    title: "Future Opportunities",
    description:
      "As the business grows, new opportunities for collaboration and development may arise.",
  },
];

const MorePartnershipOpportunities: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-10">

      {/* Background Glows */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#C6922B]/5 blur-[130px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#0B2341]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =========================================================
            SECTION HEADER
        ========================================================= */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-[#C6922B]">
            <span className="h-px w-7 bg-[#C6922B]" />
            Business Opportunities
            <span className="h-px w-7 bg-[#C6922B]" />
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[#0B2341] sm:text-5xl">
            More Partnership{" "}
            <span className="text-[#C6922B]">
              Opportunities
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#55708F]">
            We build long-term partnerships with organizations and professionals, creating opportunities for collaboration and growth.

          </p>

        </div>


        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {partnerTypes.map((partner) => {
            const Icon = partner.icon;

            return (
              <div
                key={partner.title}
                className="group relative overflow-hidden rounded-3xl border border-[#D9E3EF] bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C6922B]/50 hover:shadow-xl hover:shadow-[#0B2341]/10"
              >

                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#C6922B] transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B2341] text-[#C6922B] shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:bg-[#C6922B] group-hover:text-white">
                  <Icon size={25} strokeWidth={2} />
                </div>

                {/* Number */}
                <span className="absolute right-6 top-6 text-xs font-bold tracking-widest text-[#D9E3EF]">
                  0{partnerTypes.indexOf(partner) + 1}
                </span>

                <h3 className="mt-7 text-xl font-bold text-[#0B2341] transition-colors duration-300 group-hover:text-[#C6922B]">
                  {partner.title}
                </h3>

                <div className="mt-3 h-px w-8 bg-[#C6922B] transition-all duration-300 group-hover:w-14" />

                <p className="mt-4 text-sm leading-7 text-[#55708F]">
                  {partner.description}
                </p>

              </div>
            );
          })}

        </div>


        <div className="mt-10">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#C6922B]">
              How It Works
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#0B2341] sm:text-4xl">
              Our Partnership Process
            </h2>

            <p className="mt-4 text-base leading-7 text-[#55708F]">
              A clear and professional process helps us evaluate suitable
              business partnerships and establish mutually agreed terms.
            </p>

          </div>

          {/* Process Card */}
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-[#D9E3EF] bg-[#F8FAFC] p-7 sm:p-10 lg:p-12">

            {/* Decorative Glow */}
            <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#C6922B]/10 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {processSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="group relative rounded-2xl border border-[#D9E3EF] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C6922B] hover:shadow-lg hover:shadow-[#0B2341]/5"
                  >

                    {/* Number */}
                    <div className="flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B2341]/5 text-[#0B2341] transition-all duration-300 group-hover:bg-[#C6922B] group-hover:text-white">
                        <Icon size={22} />
                      </div>

                      <span className="text-sm font-bold tracking-widest text-[#C6922B]">
                        {step.number}
                      </span>

                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#0B2341] transition-colors duration-300 group-hover:text-[#C6922B]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#55708F]">
                      {step.description}
                    </p>

                  </div>
                );
              })}

            </div>
          </div>

        </div>

        {/* =========================================================
            PARTNERSHIP HIGHLIGHTS
        ========================================================= */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-[#0B2341] shadow-2xl shadow-[#0B2341]/10">

          <div className="relative px-7 py-12 sm:px-10 lg:px-14">

            {/* Background Decoration */}
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#C6922B]/10" />
            <div className="absolute -left-20 -bottom-32 h-72 w-72 rounded-full border border-white/5" />

            <div className="relative">

              {/* Heading */}
              <div className="text-center">

                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#C6922B]">
                  Partnership Highlights
                </span>

                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Building Business Together
                </h2>

              </div>

              {/* Highlights */}
              <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                {highlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={`group text-center lg:px-5 ${index !== 0
                        ? "lg:border-l lg:border-white/10"
                        : ""
                        }`}
                    >

                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#C6922B]/40 bg-[#C6922B]/10 text-[#C6922B] transition-all duration-300 group-hover:bg-[#C6922B] group-hover:text-white">
                        <Icon size={24} />
                      </div>

                      <h3 className="mt-5 text-lg font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-white/65">
                        {item.description}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>
          </div>
        </div>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <div className="relative mt-10 overflow-hidden rounded-3xl border border-[#D9E3EF] bg-white p-7 shadow-lg sm:p-10">

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

            {/* CTA Content */}
            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0B2341] text-[#C6922B]">
                <Handshake size={27} />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C6922B]">
                  Start a Partnership
                </span>

                <h3 className="mt-2 text-2xl font-bold text-[#0B2341] sm:text-3xl">
                  Become Our Business Partner
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#55708F]">
                  Join our growing business network and explore suitable
                  opportunities for professional and long-term collaboration.
                </p>
              </div>

            </div>

            {/* CTA Button */}
            <button className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#C6922B] px-7 py-4 font-semibold text-white shadow-lg shadow-[#C6922B]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B2341] hover:shadow-[#0B2341]/20">

              Get Started

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MorePartnershipOpportunities;