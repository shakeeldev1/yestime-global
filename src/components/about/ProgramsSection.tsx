import React from "react";

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      number: "01",
      title: "Shopping Savings",
      description:
        "Explore shopping participation and savings opportunities with a simple member-focused experience.",
      link: "#",
    },
    {
      number: "02",
      title: "Car Program",
      description:
        "Vehicle-focused participation designed around accessible plans and clear processes.",
      link: "#",
    },
    {
      number: "03",
      title: "Motorcycle / Scooter",
      description:
        "Flexible participation options for motorcycle and scooter ownership goals.",
      link: "#",
    },
    {
      number: "04",
      title: "Property Program",
      description:
        "Explore structured opportunities connected to property and real estate goals.",
      link: "#",
    },
    {
      number: "05",
      title: "Crop Savings",
      description:
        "A dedicated program concept built around agricultural participation and savings.",
      link: "#",
    },
    {
      number: "06",
      title: "Self Service Savings",
      description:
        "Member-focused tools and participation designed for convenient access and control.",
      link: "#",
    },
  ];

  return (
    <section className="bg-[#f5f8fc] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center">
          <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#e0ad38]">
            Our Programs
          </span>

          <h2 className="mt-3 font-serif text-[32px] font-bold leading-tight text-[#102742] sm:text-[40px] lg:text-[46px]">
            Opportunity Meets
            <br />
            <span className="text-[#dca936]">Participation & Savings.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[580px] text-[12px] leading-relaxed text-[#6d7e92] sm:text-[13px]">
            Explore programs designed around practical goals, participation and long term value.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between rounded-2xl bg-white p-7 shadow-[0_10px_30px_rgba(10,35,55,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(10,35,55,0.08)]"
            >
              <div>
                {/* Number Indicator */}
                <span className="text-[11px] font-bold text-[#e0ad38]">
                  {program.number}
                </span>

                {/* Card Title */}
                <h3 className="mt-3 text-[18px] font-bold text-[#102742]">
                  {program.title}
                </h3>

                {/* Card Description */}
                <p className="mt-2 text-[12px] leading-relaxed text-[#6d7e92]">
                  {program.description}
                </p>
              </div>

              {/* Bottom Arrow Indicator */}
              <div className="mt-6 flex justify-end">
                <a
                  href={program.link}
                  className="text-[14px] font-bold text-[#e0ad38] transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;