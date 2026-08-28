import React from "react";
import {
  Target,
  Users,
  Lightbulb,
  Globe2,
  ArrowRight,
} from "lucide-react";

interface Priority {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const priorities: Priority[] = [
  {
    number: "01",
    title: "People First",
    description:
      "We put people at the center of everything we do, creating meaningful opportunities and lasting impact.",
    icon: <Users size={24} />,
  },
  {
    number: "02",
    title: "Purpose Driven",
    description:
      "Our work is guided by clear goals and a commitment to creating positive change in communities.",
    icon: <Target size={24} />,
  },
  {
    number: "03",
    title: "Innovation",
    description:
      "We embrace new ideas, technology, and creative solutions to address today's challenges.",
    icon: <Lightbulb size={24} />,
  },
  {
    number: "04",
    title: "Global Impact",
    description:
      "We aim to build solutions that create sustainable impact locally and across borders.",
    icon: <Globe2 size={24} />,
  },
];

const PrioritiesAim: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#faf9f6] px-6 py-20 lg:px-8 lg:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#d8b46a]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-blue-900/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#b8944e]" />
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a783b]">
              Our Priorities
            </span>
          </div>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-blue-950 md:text-5xl lg:text-6xl">
            Focused on what
            <span className="block text-[#b8944e]">matters most.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
            Our priorities shape the way we work, the decisions we make, and
            the impact we strive to create every day.
          </p>
        </div>

        {/* Priority Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {priorities.map((priority) => (
            <div
              key={priority.number}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#b8944e]/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              {/* Number */}
              <div className="absolute right-5 top-5 font-serif text-5xl font-bold text-gray-100 transition-colors duration-500 group-hover:text-[#b8944e]/15">
                {priority.number}
              </div>

              {/* Icon */}
              <div className="relative mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950 text-white transition-all duration-500 group-hover:bg-[#b8944e]">
                {priority.icon}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-blue-950">
                {priority.title}
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                {priority.description}
              </p>

              {/* Bottom Arrow */}
              <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#9a783b]">
                <span>Learn more</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#b8944e] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <p className="max-w-2xl font-serif text-2xl leading-relaxed text-blue-950 md:text-3xl">
              "Our aim is not simply to make a difference,
              <span className="text-[#b8944e]"> but to make it lasting.</span>"
            </p>

            <button className="group flex w-fit items-center gap-3 rounded-full bg-blue-950 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#b8944e]">
              Discover Our Aim
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrioritiesAim;