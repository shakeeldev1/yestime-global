import React from "react";

const VisionMission: React.FC = () => {
  return (
    <section
      id="vision-mission"
      className="bg-[#f8f6f1] px-8 py-24 text-center"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Heading */}
        <div className="mx-auto max-w-[650px]">
          <span className="inline-flex items-center gap-2.5 font-sans text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#b8892f]">
            <span className="h-px w-[22px] bg-[#b8892f]" />
            What Drives Us
          </span>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0e1b30] sm:text-4xl">
            Vision & Mission
          </h2>

          <p className="mt-3 text-[#5b6472]">
            Our vision defines where we are going. Our mission defines
            how we get there — with organization, trust and modern
            tools.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 text-left md:grid-cols-2">

          <div className="rounded-[4px] border border-[#e7e3da] border-t-[3px] border-t-[#b8892f] bg-white p-8 sm:p-10">
            <span className="font-serif text-[0.8rem] font-semibold tracking-wider text-[#b8892f]">
              01 — Vision
            </span>

            <h3 className="mt-[18px] text-2xl font-semibold text-[#0e1b30]">
              Our Vision
            </h3>

            <p className="mt-[18px] text-[0.98rem] leading-relaxed text-[#5b6472]">
              To build a modern business platform that helps connect
              people, businesses, institutions, dealers and buyers of
              vehicles and property with genuine opportunities —
              starting in Pakistan, and reaching markets around the
              world.
            </p>

            <div className="mt-6 border-t border-[#e7e3da] pt-[18px] text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#8a92a0]">
              Where We Are Going
            </div>
          </div>

          <div className="rounded-[4px] border-t-[3px] border-t-[#b8892f] bg-[#0e1b30] p-8 text-white sm:p-10">
            <span className="font-serif text-[0.8rem] font-semibold tracking-wider text-[#b8892f]">
              02 — Mission
            </span>

            <h3 className="mt-[18px] text-2xl font-semibold text-white">
              Our Mission
            </h3>

            <p className="mt-[18px] text-[0.98rem] leading-relaxed text-[#b9c0cf]">
              To use modern technology to provide easy facilities and
              programs for our customers — so they can benefit without
              complication, and take a more organized, confident part
              in every business activity.
            </p>

            <div className="mt-6 border-t border-white/15 pt-[18px] text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#8b93a5]">
              How We Get There
            </div>
          </div>
        </div>

      
        <div className="mx-auto mt-16 max-w-[640px]">
          <p className="font-serif text-xl italic leading-relaxed text-[#0e1b30]">
            "Join opportunities, grow your business, and take a step
            forward toward the future."
          </p>

          <span className="mt-3 block font-sans text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#b8892f]">
            Our Message — Yes Time Global
          </span>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
