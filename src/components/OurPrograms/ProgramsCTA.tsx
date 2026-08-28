import React from "react";
import { Headphones, ArrowRight } from "lucide-react";

const ProgramsCTA: React.FC = () => {
  return (
    <>
   
      <section className="bg-[#0e1b30] px-6 py-[70px] text-white lg:px-8">
        <div className="mx-auto flex max-w-[1000px] flex-wrap items-center justify-between gap-6 rounded border border-white/10 bg-white/[0.03] px-7 py-[30px] md:px-9">
         
          <div className="flex items-center gap-[18px]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d8ad5e] text-[#d8ad5e]">
              <Headphones size={20} />
            </div>

            <div>
              <h4 className="font-serif text-[1.05rem] font-semibold text-white">
                We Are Here to Help
              </h4>

              <p className="mt-1 text-[0.88rem] text-[#9aa2b3]">
                Questions about a plan or program? Our team can walk you
                through the details.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-sm bg-[#b8892f] px-[26px] py-[14px] text-[0.85rem] font-bold tracking-[0.02em] text-[#0e1b30] transition hover:-translate-y-0.5 hover:bg-[#d8ad5e]"
          >
            Contact Us
            <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <div className="border-t border-[#e7e3da] px-6 py-11 text-center font-serif text-base italic text-[#b8892f]">
        "Bridging opportunities in the world — a new attempt at joining people."
      </div>

    </>
  );
};

export default ProgramsCTA;