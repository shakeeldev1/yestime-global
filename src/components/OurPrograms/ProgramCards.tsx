import React from "react";
import {
  CarFront,
  House,
  Bike,
  UserRound,
  Check,
} from "lucide-react";

interface Program {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: React.ReactNode;
  points: string[];
  note: string;
}

const programs: Program[] = [
  {
    number: "01 — Vehicle Plan",
    title: "Vehicle Plan",
    description:
      "Installment based plans for buying a vehicle, chosen according to your budget and need, with every plan's price, duration, eligibility and terms set out clearly upfront.",

    image: "/img1.png",

    alt: "Car showroom for the Yes Time Global Vehicle Plan",

    icon: <CarFront size={22} />,

    points: [
      "Plans from Rs. 30 Lakh up to Rs. 2.1 Crore vehicles",
      "Fixed monthly installment e.g. Rs. 36,000/month for a 30 Lakh plan",
      "Every plan's amount, duration & eligibility shown upfront",
      "Payment record kept safe against your account",
    ],

    note:
      "Vehicle price, installment, method of work and other terms will differ per plan and are shared clearly before you join.",
  },

  {
    number: "02 — Property Plan",
    title: "Property Plan",
    description:
      "A modern platform for people who want to buy, sell or invest in property bringing buyers, owners and business partners together with clear, verified information.",

    image: "/img2.png",

    alt: "Modern property for the Yes Time Global Property Plan",

    icon: <House size={22} />,

    points: [
      "Residential property homes, flats & more",
      "Commercial property shops, offices, plazas, markets",
      "Agricultural land & related opportunities",
      "Future construction & development plans, where applicable",
    ],

    note:
      "Every deal is confirmed only after buyer, seller and legal documents are verified — the company does not guarantee legal title on its own.",
  },

  {
    number: "03 — New Vehicle",
    title: "New Vehicle",
    description:
      "An organized, easy digital platform to buy and sell new or used cars, motorcycles and scooters with genuine listing details for every vehicle.",

    image: "/img3.png",

    alt: "New and used vehicles lot",

    icon: <Bike size={22} />,

    points: [
      "Cars, motorcycles & scooters new and used",
      "Listings include model, year, condition, price & photos",
      "Direct contact with the seller or their representative",
      "Buyers are encouraged to verify condition & documents themselves",
    ],

    note:
      "Listing information is provided to help your search it is not a substitute for your own inspection before purchase.",
  },

  {
    number: "04 — Buy & Sell Program",
    title: "Buy & Sell Program",
    description:
      "Connects customers with registered dealers on one organized platform built to bring buying and selling together, according to the company's set rules.",

    image: "/img4.png",

    alt: "Dealer and customer completing a Buy and Sell deal",

    icon: <UserRound size={22} />,

    points: [
      "Search or register as a company verified dealer",
      "A personal dashboard to track your buying record",
      "View program announcements & results in one place",
      "Buying eligibility set per the company's system",
    ],

    note:
      "Benefit, eligibility and outcomes under this program follow the company's set terms and applicable law.",
  },
];

const ProgramCards: React.FC = () => {
  return (
    <section className="px-6 pb-[110px] pt-[56px] lg:px-8">
      <div className="mx-auto max-w-[1160px]">

        <div className="grid gap-6 md:grid-cols-2">

          {programs.map((program) => (
            <article
              key={program.number}
              className="
                flex
                flex-col
                overflow-hidden
                rounded
                border
                border-[#1e3a5f]
                border-t-[3px]
                border-t-[#f5c54e]
                bg-[#020c1c]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)]
              "
            >

      <div className="flex h-[280px] w-full items-center justify-center overflow-hidden bg-[#07182d]">
                <img
                  src={program.image}
                  alt={program.alt}
                  loading="lazy"
                  className="
                    block
                    h-full
                    w-full
                    object-center
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>

              {/* ================= CONTENT ================= */}
              <div className="flex flex-1 flex-col px-[34px] pb-[38px] pt-7">

                {/* Icon + Title */}
                <div className="mb-[18px] flex items-center gap-4">

                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-[52px]
                      w-[52px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0b3b6e]
                      text-[#f0c75e]
                    "
                  >
                    {program.icon}
                  </div>

                  {/* Number + Heading */}
                  <div>
                    <span
                      className="
                        mb-1
                        block
                        font-serif
                        text-[0.78rem]
                        font-semibold
                        tracking-[0.08em]
                        text-[#f5c54e]
                      "
                    >
                      {program.number}
                    </span>

                    <h3
                      className="
                        text-[1.3rem]
                        font-semibold
                        text-white
                      "
                    >
                      {program.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="
                    mb-[18px]
                    text-[0.95rem]
                    leading-7
                    text-slate-300
                  "
                >
                  {program.description}
                </p>

                {/* Points */}
                <ul className="mb-[22px]">
                  {program.points.map((point) => (
                    <li
                      key={point}
                      className="
                        flex
                        gap-2.5
                        border-t
                        border-[#1e3a5f]
                        py-2
                        text-[0.88rem]
                        text-white
                      "
                    >
                      <Check
                        size={17}
                        className="
                          mt-0.5
                          shrink-0
                          text-[#f5c54e]
                        "
                      />

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Note */}
                <p
                  className="
                    mt-auto
                    border-t
                    border-dashed
                    border-[#1e3a5f]
                    pt-3.5
                    text-[0.78rem]
                    italic
                    leading-5
                    text-slate-400
                  "
                >
                  {program.note}
                </p>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProgramCards;