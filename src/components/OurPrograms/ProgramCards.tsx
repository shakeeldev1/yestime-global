import React from "react";
import {
  ShoppingCart,
  Package,
  Fuel,
  Bike,
  Car,
  Home,
  Wheat,
  UserRound,
  ArrowRight,
  Clock3,
} from "lucide-react";

interface Program {
  number: string;
  title: string;
  image: string;
  description: string;
  points: string[];
  icon: React.ReactNode;
}

const programs: Program[] = [
  {
    number: "01",
    title: "Shopping Saving",
    image: "/images/programs/shopping.jpg",
    description: "Daily Essentials",
    points: [
      "Everyday shopping made easy and affordable",
      "Save more on daily essentials",
      "Participate every 1 minute",
    ],
    icon: <ShoppingCart size={18} />,
  },
  {
    number: "02",
    title: "Wholesale Saving",
    image: "/images/programs/wholesale.jpg",
    description: "Bulk Purchases",
    points: [
      "Best option for bulk buyers",
      "Save big on wholesale orders",
      "Participate every 1 minute",
    ],
    icon: <Package size={18} />,
  },
  {
    number: "03",
    title: "Petrol & Diesel Saving",
    image: "/images/programs/fuel.jpg",
    description: "Fuel Purchases",
    points: [
      "Save more on fuel expenses",
      "For petrol and diesel",
      "Participate every 1 minute",
    ],
    icon: <Fuel size={18} />,
  },
  {
    number: "04",
    title: "Motorcycle & Scooty Saving",
    image: "/images/programs/bikes.jpg",
    description: "New or Used",
    points: [
      "Buy new or used motorcycles and scooties",
      "Great offers for all",
      "Participate every 1 minute",
    ],
    icon: <Bike size={18} />,
  },
  {
    number: "05",
    title: "Car Saving",
    image: "/images/programs/cars.jpg",
    description: "New or Used Cars",
    points: [
      "Buy new or used cars",
      "Best deals for everyone",
      "Participate every 1 minute",
    ],
    icon: <Car size={18} />,
  },
  {
    number: "06",
    title: "Property Saving",
    image: "/images/programs/property.jpg",
    description: "Buy / Sell Property",
    points: [
      "Buy or sell property easily",
      "Good opportunities, great deals",
      "Participate every 1 minute",
    ],
    icon: <Home size={18} />,
  },
  {
    number: "07",
    title: "Crop Saving",
    image: "/images/programs/crops.jpg",
    description: "Buy / Sell Crops",
    points: [
      "Buy or sell crops",
      "Support for farmers & buyers",
      "Participate every 1 minute",
    ],
    icon: <Wheat size={18} />,
  },
  {
    number: "08",
    title: "Self-Service Saving",
    image: "/images/programs/self-service.jpg",
    description: "Buy or Sell Yourself",
    points: [
      "Buy or sell by yourself",
      "You are in full control",
      "Participate every 1 minute",
    ],
    icon: <UserRound size={18} />,
  },
];

const ProgramCards: React.FC = () => {
  return (
    <section className="bg-[#faf9f6] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1250px]">

        {/* ================= HEADING ================= */}
        <div className="mx-auto max-w-[700px] text-center">
          <span className="inline-flex rounded-full border border-[#e6d9bd] bg-[#fffaf0] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8892f]">
            What We Offer
          </span>

          <h2 className="mt-4 text-2xl font-semibold leading-tight text-[#0e1b30] sm:text-3xl">
            Programs Built for{" "}
            <span className="font-serif italic text-[#b8892f]">
              Real Opportunities
            </span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#68717f] sm:text-[15px]">
            Our programs are designed to give you real chances every 1 minute.
            Choose any option, participate and win rewards.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <article
              key={program.number}
              className="
                group
                overflow-hidden
                rounded-lg
                border
                border-[#e5e2db]
                bg-white
                shadow-[0_4px_18px_rgba(14,27,48,0.05)]
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(14,27,48,0.1)]
              "
            >
              {/* ================= IMAGE ================= */}
              <div className="relative h-[165px] overflow-hidden bg-[#f2f1ed]">
                <img
                  src={program.image}
                  alt={program.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Number */}
                <span
                  className="
                    absolute
                    left-3
                    top-3
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#061225]
                    text-[11px]
                    font-bold
                    text-white
                  "
                >
                  {program.number}
                </span>
              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-5">

                {/* Title */}
                <div className="flex items-start gap-3">
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#f5f0e4]
                      text-[#b8892f]
                    "
                  >
                    {program.icon}
                  </span>

                  <h3
                    className="
                      pt-1
                      text-[15px]
                      font-bold
                      leading-snug
                      text-[#0e1b30]
                    "
                  >
                    {program.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="
                    mt-4
                    text-[12px]
                    font-semibold
                    text-[#465064]
                  "
                >
                  {program.description}
                </p>

                {/* Points */}
                <ul className="mt-3 space-y-2.5">
                  {program.points.map((point) => (
                    <li
                      key={point}
                      className="
                        flex
                        gap-2.5
                        text-[11px]
                        leading-[1.55]
                        text-[#68717f]
                      "
                    >
                      <span
                        className="
                          mt-[7px]
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-[#b8892f]
                        "
                      />

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* ================= BOTTOM ================= */}
                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    border-t
                    border-[#eeeae2]
                    pt-4
                  "
                >
                  <div className="flex items-center gap-2">
                    <Clock3
                      size={15}
                      strokeWidth={1.8}
                      className="text-[#596476]"
                    />

                    <div>
                      <p
                        className="
                          text-[10px]
                          font-bold
                          leading-tight
                          text-[#172238]
                        "
                      >
                        Every 1 Minute
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-[10px]
                          leading-tight
                          text-[#8b929d]
                        "
                      >
                        ہر 1 منٹ میں
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <button
                    aria-label={`Explore ${program.title}`}
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#061225]
                      text-[#d3a344]
                      transition
                      duration-300
                      group-hover:bg-[#b8892f]
                      group-hover:text-white
                    "
                  >
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCards;