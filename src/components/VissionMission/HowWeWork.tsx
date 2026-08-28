import React from "react";

interface WorkItem {
  number: string;
  title: string;
  description: string;
}

const workItems: WorkItem[] = [
  {
    number: "01",
    title: "Easy Access",
    description:
      "Reaching our programs and services is made simple for every customer.",
  },
  {
    number: "02",
    title: "Clear Information",
    description:
      "Every program's requirements and terms are shared in a clear, upfront way.",
  },
  {
    number: "03",
    title: "Organized System",
    description:
      "A properly connected system for customers, businesses and dealer partners alike.",
  },
  {
    number: "04",
    title: "Modern Facilities",
    description:
      "Better experiences for customers, built with attention to modern technology.",
  },
];

const HowWeWork: React.FC = () => {
  return (
    <section className="px-8 py-28 text-center">
      <div className="mx-auto max-w-[1000px]">
      
        <span className="inline-flex items-center gap-2.5 font-sans text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#b8892f]">
          <span className="h-px w-[22px] bg-[#b8892f]" />
          Our Approach
        </span>

        <h2 className="mt-3 text-3xl font-semibold text-[#0e1b30] sm:text-4xl">
          How We Work
        </h2>

        <p className="mx-auto mt-3 max-w-[560px] text-[#5b6472]">
          Every program we run is built around the same four
          commitments.
        </p>

        
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {workItems.map((item, index) => (
            <div
              key={item.number}
              className="relative px-[18px]"
            >
            
              {index !== workItems.length - 1 && (
                <div className="absolute left-1/2 top-[23px] hidden h-px w-full bg-[#e7e3da] lg:block" />
              )}

            
              <div className="relative z-10 mx-auto flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#0e1b30] font-serif text-[0.85rem] font-semibold text-[#d8ad5e]">
                {item.number}
              </div>

              <h3 className="mt-[18px] text-base font-semibold text-[#0e1b30]">
                {item.title}
              </h3>

              <p className="mx-auto mt-2 max-w-[220px] text-[0.88rem] leading-relaxed text-[#5b6472]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;