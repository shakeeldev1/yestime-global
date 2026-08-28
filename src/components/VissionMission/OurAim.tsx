import React from "react";

const OurAim: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden px-8 py-24 text-[#e7e9ef]"
      style={{
        backgroundImage: "url('/img10.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
     
      <div className="absolute inset-0 bg-[#0e1b30]/90" />

      <div className="relative z-10 mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        
        <div>
          <span className="inline-flex items-center gap-2.5 font-sans text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#d8ad5e]">
            Our Commitment
          </span>

          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Built Around{" "}
            <em className="not-italic text-[#d8ad5e]">
              Our Aim
            </em>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[#b9c0cf]">
            Yes Time Global's aim is to run every program in an
            organized way, according to set principles, rules, and the
            company's terms and conditions.
          </p>

          <p className="mt-4 text-base leading-relaxed text-[#b9c0cf]">
            We place real importance on giving customers and partners
            clear information, better facilities, and a responsible
            way of doing business at every stage of the journey.
          </p>
        </div>

        <div className="rounded-[2px] border border-white/10 border-l-[3px] border-l-[#b8892f] bg-white/[0.06] p-8 backdrop-blur-[2px]">
          <p className="font-serif text-xl italic leading-relaxed text-white">
            "Join opportunities, grow your business, and take a step
            forward toward the future."
          </p>

          <span className="mt-4 block font-sans text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#d8ad5e]">
            Our Message
          </span>
        </div>
      </div>
    </section>
  );
};

export default OurAim;