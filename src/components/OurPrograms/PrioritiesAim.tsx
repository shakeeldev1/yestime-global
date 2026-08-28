import React from "react";

interface Priority {
  title: string;
  description: string;
}

const priorities: Priority[] = [
  {
    title: "Trust",
    description:
      "a relationship of confidence with every customer and partner.",
  },
  {
    title: "Transparency",
    description:
      "every program's terms shared clearly, upfront.",
  },
  {
    title: "Ease",
    description:
      "simple access to our services and programs.",
  },
  {
    title: "Modern Technology",
    description:
      "digital tools behind a better system.",
  },
  {
    title: "Global Reach",
    description:
      "a vision that looks beyond one market.",
  },
];

const PrioritiesAim: React.FC = () => {
  return (
    <section className="bg-[#f8f6f1] px-6 py-[100px] lg:px-8">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid gap-6 md:grid-cols-2">
         
          <div className="rounded border border-[#e7e3da] border-t-[3px] border-t-[#b8892f] bg-white p-8 md:p-[38px]">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#b8892f]">
              <span className="h-px w-5 bg-[#b8892f]" />
              Why Choose Yes Time Global
            </span>

            <h3 className="mt-[14px] text-2xl font-semibold text-[#0e1b30]">
              Our Basic Priorities
            </h3>

            <p className="mt-3 text-[0.95rem] leading-6 text-[#5b6472]">
              The principles that shape every program we run.
            </p>

            <ul className="mt-5">
              {priorities.map((priority) => (
                <li
                  key={priority.title}
                  className="flex gap-3 border-t border-[#e7e3da] py-3 text-[0.92rem] leading-6"
                >
                  <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[#b8892f]" />

                  <span className="text-[#5b6472]">
                    <strong className="text-[#0e1b30]">
                      {priority.title}
                    </strong>{" "}
                    — {priority.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded border-t-[3px] border-t-[#b8892f] bg-[#0e1b30] p-8 text-white md:p-[38px]">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#d8ad5e]">
              <span className="h-px w-5 bg-[#d8ad5e]" />
              Our Commitment
            </span>

            <h3 className="mt-[14px] text-2xl font-semibold text-white">
              Our Aim
            </h3>

            <p className="mt-5 text-[0.95rem] leading-7 text-[#b9c0cf]">
              Yes Time Global's aim is to run every program in an organized
              way, according to set principles, rules, and the company's terms
              and conditions.
            </p>

            <p className="mt-[14px] text-[0.95rem] leading-7 text-[#b9c0cf]">
              We place real importance on giving customers and partners clear
              information, better facilities, and a responsible way of doing
              business — at every stage of the journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrioritiesAim;