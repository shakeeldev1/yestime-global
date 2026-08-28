import React from "react";

const WhereWeOperate: React.FC = () => {
  return (
    <section className="px-8 py-28 text-center">
      <div className="mx-auto max-w-[1120px]">
      
        <span className="inline-flex items-center gap-2.5 font-sans text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#b8892f]">
          <span className="h-px w-[22px] bg-[#b8892f]" />
          Beyond Borders
        </span>

        <h2 className="mt-3 text-3xl font-semibold text-[#0e1b30] sm:text-4xl">
          Where We Operate
        </h2>

        <p className="mx-auto mt-3 max-w-[520px] text-[#5b6472]">
          We're building from Pakistan today, with a clear vision for
          what comes next.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 text-left md:grid-cols-2">
        
          <div className="rounded-[4px] border border-[#e7e3da] border-t-[3px] border-t-[#b8892f] bg-[#f8f6f1] p-9">
            <span className="mb-4 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#b8892f]">
              <i className="h-[7px] w-[7px] rounded-full bg-[#b8892f]" />
              Today
            </span>

            <h3 className="text-[1.4rem] font-semibold text-[#0e1b30]">
              Pakistan
            </h3>

            <p className="mt-2 text-[0.95rem] leading-relaxed text-[#5b6472]">
              Our home market — where Yes Time Global connects
              customers, dealers and property seekers with real,
              organized opportunities every day.
            </p>
          </div>

          
          <div className="rounded-[4px] border border-[#e7e3da] bg-[#f8f6f1] p-9">
            <span className="mb-4 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#b8892f]">
              <i className="h-[7px] w-[7px] rounded-full bg-[#b8892f]" />
              Our Vision
            </span>

            <h3 className="text-[1.4rem] font-semibold text-[#0e1b30]">
              Global Markets
            </h3>

            <p className="mt-2 text-[0.95rem] leading-relaxed text-[#5b6472]">
              Looking ahead, our vision reaches beyond one country —
              extending these same programs and opportunities into new
              markets around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeOperate;