import React from "react";

interface Program {
  number: string;
  title: string;
  description: string;
  image: string;
}

const programs: Program[] = [
  {
    number: "01",
    title: "Vehicle Plan",
    description:
      "Installment based vehicle plans, tailored to each customer's need and affordability with amount, duration, eligibility and terms set out clearly upfront.",
    image: "/img6.png",
  },
  {
    number: "02",
    title: "Property Plan",
    description:
      "An organized platform that gives customers access to genuine property buying and selling opportunities, connected through one clear process.",
    image: "/img7.png",
  },
  {
    number: "03",
    title: "New Vehicles",
    description:
      "Facilities for buying and selling new and used vehicles, motorbikes and scooters matched to what each customer is actually looking for.",
    image: "/img8.png",
  },
  {
    number: "04",
    title: "Buy & Sell Program",
    description:
      "Registering dealers who want to buy vehicles from customers, and running the exchange according to the company's set principles.",
    image: "/img9.png",
  },
];

const Programs: React.FC = () => {
  return (
    <section
      id="programs"
      className="bg-[#f8f6f1] px-8 py-28"
    >
      <div className="mx-auto max-w-[1120px]">
        <div className="mx-auto max-w-[620px] text-center">
          <span className="inline-flex items-center gap-2.5 font-sans text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#b8892f]">
            What We Offer
          </span>

          <h2 className="mt-3 text-3xl font-semibold text-[#0e1b30] sm:text-4xl">
            Our Programs
          </h2>

          <p className="mt-3 text-[#5b6472]">
            Four organized programs, each designed around one goal:
            putting the right opportunity in front of the right
            person, at the right time.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {programs.map((program) => (
            <div
              key={program.number}
              className="overflow-hidden rounded-[4px] border border-[#e7e3da] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
             
              <div className="h-[210px] w-full overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="flex gap-5 p-8">
                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-[#b8892f] font-serif font-semibold text-[#b8892f]">
                  {program.number}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#0e1b30]">
                    {program.title}
                  </h3>

                  <p className="mt-2 text-[0.93rem] leading-relaxed text-[#5b6472]">
                    {program.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;