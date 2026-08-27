import React from "react";
import {
  Car,
  Home,
  Bike,
  ShoppingBag,
  ArrowRight,
  Check,
} from "lucide-react";

const ProgramsGrid: React.FC = () => {
  const programs = [
    {
      number: "01",
      title: "Car Program",
      description:
        "Choose the car plan that suits your needs and budget. Easy installment plans with flexible payment options and full transparency.",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=85",
      icon: <Car size={24} />,
      features: [
        "Multiple car plans available",
        "Affordable installment options",
        "Transparent process",
        "Hassle-free documentation",
      ],
    },
    {
      number: "02",
      title: "Property Program",
      description:
        "Buy, sell or invest in properties with complete transparency and verified information on our platform.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
      icon: <Home size={24} />,
      features: [
        "Verified property listings",
        "Buy, sell & invest options",
        "Detailed property information",
        "Secure & transparent process",
      ],
    },
    {
      number: "03",
      title: "Motorcycle & Scooter Program",
      description:
        "Buy and sell new or used motorcycles and scooters with verified details and a secure process.",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85",
      icon: <Bike size={24} />,
      features: [
        "New & used vehicles",
        "Verified details & documents",
        "Safe & secure transactions",
        "Wide range of options",
      ],
    },
    {
      number: "04",
      title: "Shop & Savings Program",
      description:
        "Shop from our registered merchants and enjoy savings, rewards and exciting lucky draws.",
      image:
        "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=900&q=85",
      icon: <ShoppingBag size={24} />,
      features: [
        "Shop from verified merchants",
        "Earn rewards & savings",
        "Exciting lucky draws",
        "Referral benefits available",
      ],
    },
  ];

  return (
    <section className="bg-[#fbfaf7] px-5 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b4872a]">
            Explore Our Programs
          </span>

          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#12172a] md:text-4xl">
            Opportunities Built Around
            <span className="block italic text-[#b4872a]">
              Your Everyday Needs
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#6b7280]">
            From smart mobility to property solutions and rewarding
            savings, our programs are designed to add real value to
            your life.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {programs.map((program) => (
            <article
              key={program.number}
              className="group overflow-hidden rounded-xl border border-[#0d1836]/10 bg-white shadow-[0_10px_35px_rgba(6,11,31,0.07)] transition-all duration-300 hover:-translate-y-2 hover:border-[#d4af37]/50"
            >
              <div className="relative p-3 pb-0">
                <div className="relative h-52 overflow-hidden rounded-lg">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#060b1f]/30 to-transparent" />
                </div>

                <div className="absolute bottom-[-22px] left-7 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[#060b1f] text-[#f2cb61]">
                  {program.icon}
                </div>
              </div>

              <div className="p-6 pt-9">

                <div className="flex items-center gap-4">
                  <span className="font-serif text-3xl text-[#b4872a]">
                    {program.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#12172a]">
                      {program.title}
                    </h3>

                    <div className="mt-2 h-px w-10 bg-[#d4af37]" />
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-[#6b7280]">
                  {program.description}
                </p>

                <ul className="mt-4 space-y-2 border-t border-[#12172a]/10 pt-4">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs text-[#4b5563]"
                    >
                      <Check
                        size={14}
                        className="mt-0.5 shrink-0 text-[#b4872a]"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="mt-6 flex w-full items-center justify-center gap-3 rounded-md bg-[#060b1f] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-[#f2cb61] transition hover:bg-[#0d1836]"
                >
                  Explore Program

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsGrid;