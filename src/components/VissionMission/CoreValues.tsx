import React from "react";

interface Value {
  number: string;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    number: "01",
    title: "Trust",
    description:
      "We build a genuine relationship of trust with every customer and business partner we work with.",
  },
  {
    number: "02",
    title: "Transparency",
    description:
      "The terms and conditions of every program are shared clearly, in plain and understandable language.",
  },
  {
    number: "03",
    title: "Ease",
    description:
      "Access to our services and programs is made simple, so customers can reach what they need quickly.",
  },
  {
    number: "04",
    title: "Modern Technology",
    description:
      "We use modern digital tools and resources to keep improving how our business system works.",
  },
  {
    number: "05",
    title: "Global Reach",
    description:
      "We're building toward the future — extending these business opportunities into new countries and markets.",
  },
];

const CoreValues: React.FC = () => {
  return (
    <section className="px-8 py-28 text-center">
      <div className="mx-auto max-w-[1120px]">
       
        <div className="mx-auto max-w-[600px]">
          <span className="inline-flex items-center gap-2.5 font-sans text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#b8892f]">
            <span className="h-px w-[22px] bg-[#b8892f]" />
            What We Stand For
          </span>

          <h2 className="mt-3 text-3xl font-semibold text-[#0e1b30] sm:text-4xl">
            Our Basic Priorities
          </h2>

          <p className="mt-3 text-[#5b6472]">
            The principles that guide every program we run and every
            relationship we build.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-[#e7e3da] bg-[#e7e3da] text-left sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.number}
              className="bg-white p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="font-serif text-[0.82rem] font-semibold text-[#b8892f]">
                {value.number}
              </span>

              <h3 className="mt-3 text-lg font-semibold text-[#0e1b30]">
                {value.title}
              </h3>

              <p className="mt-2 text-[0.93rem] leading-relaxed text-[#5b6472]">
                {value.description}
              </p>
            </div>
          ))}

          <div className="bg-white p-8">
            <span className="font-serif text-[0.82rem] font-semibold text-[#b8892f]">
              —
            </span>

            <h3 className="mt-3 text-lg font-semibold text-[#0e1b30]">
              Yes Time Global
            </h3>

            <p className="mt-2 text-[0.93rem] leading-relaxed text-[#5b6472]">
              A new attempt at joining people and opportunities
              across the world starting from Pakistan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;