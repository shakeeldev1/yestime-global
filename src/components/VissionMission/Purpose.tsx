import React from "react";

const Purpose: React.FC = () => {
  const tags = [
    "The Vehicle Plans",
    "The Property Plans",
    "New Vehicles",
    "Dealer & Buy-Sell Programs",
  ];

  return (
    <section className="px-8 pb-24 pt-5 text-center">
      <div className="mx-auto max-w-[760px]">
       
        <span className="inline-flex items-center gap-2.5 font-sans text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#b8892f]">
          <span className="h-px w-[22px] bg-[#b8892f]" />
          Why We Exist
        </span>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0e1b30] sm:text-4xl">
          Our Purpose
        </h2>

        <p className="mt-5 text-[1.05rem] leading-relaxed text-[#5b6472]">
          Our purpose is to build an organized, easy-to-use system
          that connects people with what they actually need — so
          customers and business owners alike can benefit from a
          range of programs and reach real business opportunities,
          without the usual friction of buying, selling or financing
          a vehicle or a property.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#e7e3da] bg-[#f8f6f1] px-[18px] py-[9px] text-[0.78rem] font-bold uppercase tracking-wider text-[#0e1b30]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Purpose;