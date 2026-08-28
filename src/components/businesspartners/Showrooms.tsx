import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileCheck,
  Handshake,
  Target,
  TrendingUp,
} from "lucide-react";

interface ShowroomBenefit {
  icon: React.ElementType;
  title: string;
  text: string;
}

const showroomBenefits: ShowroomBenefit[] = [
  {
    icon: Handshake,
    title: "Business Collaboration",
    text: "Showrooms can work with the company as business partners and build a professional, long-term relationship.",
  },
  {
    icon: Target,
    title: "Market Reach",
    text: "Suitable showrooms can help strengthen market presence and improve customer access.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    text: "Partnership can create opportunities for business development and market expansion.",
  },
  {
    icon: BadgeCheck,
    title: "Approved Partnership",
    text: "Showroom partnerships are considered based on company requirements and agreed terms.",
  },
];

const Showrooms: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Glow */}
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#0B2341]/5 blur-[120px]" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#C6922B]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#C6922B]">
            Showroom Partnership
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B2341] sm:text-5xl">
            Build Your{" "}
            <span className="text-[#C6922B]">Business</span>{" "}
            With Our Partnership
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#55708F] sm:text-lg">
            Join our showroom network to build strong partnerships,
            expand market reach and support long-term business growth.
          </p>

        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-5">

            {/* Text Card */}
            <div className="relative overflow-hidden rounded-3xl border border-[#D9E3EF] bg-[#F8FAFC] p-8 shadow-xl shadow-[#0B2341]/5 sm:p-10">

              {/* Decorative Glow */}
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#C6922B]/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#0B2341]/5 blur-3xl" />

              <div className="relative">

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B2341] text-[#C6922B] shadow-lg shadow-[#0B2341]/10">
                  <Building2 size={32} />
                </div>

                {/* Heading */}
                <h3 className="mt-7 text-3xl font-bold text-[#0B2341]">
                  Become a Showroom Partner
                </h3>

                {/* Description */}
                <p className="mt-5 leading-8 text-[#55708F]">
                  Showroom owners can submit their business information
                  for review and become part of our growing partnership network.
                </p>

                <p className="mt-4 leading-8 text-[#55708F]">
                  Approved partnerships are established through mutually
                  agreed terms and conditions.
                </p>

                {/* Partnership Process */}
                <div className="mt-7 rounded-2xl border border-[#C6922B]/20 bg-white p-4 shadow-sm">

                  <div className="flex items-start gap-3">

                    {/* Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C6922B]/10 text-[#C6922B]">
                      <FileCheck size={20} />
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="text-sm font-bold text-[#0B2341]">
                        Partnership Process
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-[#55708F]">
                        Submit details → review → approval → agreed terms → partnership.
                      </p>
                    </div>

                  </div>

                </div>

                {/* Bottom Label */}
                <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-[#C6922B]">
                  <span className="h-px w-10 bg-[#C6922B]" />
                  Long-Term Business Collaboration
                </div>

              </div>
            </div>

            {/* ================= IMAGE CARD ================= */}
            <div className="group relative overflow-hidden rounded-3xl border border-[#D9E3EF] bg-white p-2 shadow-xl shadow-[#0B2341]/5 transition-all duration-500 hover:border-[#C6922B]/40 hover:shadow-2xl hover:shadow-[#C6922B]/10">

              {/* Image */}
              <div className="relative overflow-hidden rounded-[22px]">
                <img
                  src="https://media.istockphoto.com/id/1156318952/photo/happy-expecting-couple-communicating-with-manager-while-buying-a-car-in-a-showroom.jpg?s=612x612&w=0&k=20&c=YvMnoMNDt2SghkZzFecADg0ywjQb55_OXCau7VwXre4="
                  alt="Showroom Partnership"
                  className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[340px]"
                />

                {/* Subtle Glass Overlay on Hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-[#0B2341]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Glass Shine */}
                <div className="pointer-events-none absolute -left-[100%] top-0 h-full w-[50%] rotate-12 bg-white/20 blur-xl transition-all duration-1000 group-hover:left-[120%]" />
              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-5">

            {/* Benefits */}
            {showroomBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group flex gap-6 rounded-2xl border border-[#D9E3EF] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C6922B] hover:shadow-lg hover:shadow-[#0B2341]/5"
                >

                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#0B2341]/5 text-[#0B2341] transition-all duration-300 group-hover:bg-[#C6922B] group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  {/* Content */}
                  <div>

                    <h3 className="text-xl font-bold text-[#0B2341] transition-colors duration-300 group-hover:text-[#C6922B]">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 leading-7 text-[#55708F]">
                      {benefit.text}
                    </p>

                  </div>
                </div>
              );
            })}

            {/* Bottom CTA */}
            <div className="rounded-2xl border border-[#D9E3EF] bg-[#F8FAFC] p-6">

              <div className="flex items-start gap-4">

                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B2341] text-[#C6922B]">
                  <Handshake size={21} />
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-lg font-bold text-[#0B2341]">
                    A Partnership Built for Growth
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-[#55708F]">
                    We seek professional showroom partners who can
                    contribute to business development and network growth.
                  </p>
                </div>

              </div>

            </div>

            {/* Button */}
            <button className="group inline-flex items-center gap-3 rounded-md bg-[#0B2341] px-7 py-4 font-semibold text-white shadow-lg shadow-[#0B2341]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6922B] hover:shadow-[#C6922B]/20">
              Become a Showroom Partner

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

export default Showrooms;