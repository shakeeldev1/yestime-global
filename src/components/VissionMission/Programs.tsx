import React from "react";
import {
  ShoppingBag,
  Car,
  Building2,
  Bike,
  PiggyBank,
  UserRound,
} from "lucide-react";

const Programs: React.FC = () => {
  const programs = [
    {
      title: "Shopping\n& Savings",
      image: "/vs7.png",
      icon: ShoppingBag,
    },
    {
      title: "Car\nProgram",
      image: "/vs6.png",
      icon: Car,
    },
    {
      title: "Property\nProgram",
      image: "/vs11.png",
      icon: Building2,
    },
    {
      title: "Motorcycle /\nScooter Program",
      image: "/vs8.png",
      icon: Bike,
    },
    {
      title: "Saving\nPrograms",
      image: "/vs9.png",
      icon: PiggyBank,
    },
    {
      title: "Self-Service\nSaving",
      image: "/vs10.png",
      icon: UserRound,
    },
  ];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <h2 className="text-center text-xl font-bold text-[#172238] md:text-2xl">
          Our Programs That Create Opportunities
        </h2>

        {/* Programs */}
        <div className="mt-8 grid grid-cols-2 divide-x divide-y divide-gray-200 overflow-hidden rounded-xl border border-gray-200 bg-[#F7F7F7] sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">

          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.title}
                className="flex min-h-[180px] w-full flex-col items-center justify-center p-5 text-center"
              >

                {/* Image */}
                <div className="relative h-20 w-24">
                  <img
                    src={program.image}
                    alt={program.title.replace("\n", " ")}
                    className="h-full w-full rounded-md object-contain"
                  />
                </div>

                {/* Title */}
                <div className="mt-4 flex items-center justify-center gap-2">
                  <Icon className="h-4 w-4 shrink-0 text-[#d69b22]" />
                  <p className="whitespace-pre-line text-sm font-semibold leading-5 text-[#222c3c] md:text-[15px]">
                    {program.title}
                  </p>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Programs;