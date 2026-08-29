import React from "react";
import {
  Headphones,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const ProgramsCTA: React.FC = () => {
  return (
    <>
    
      <section
        className="relative overflow-hidden px-6 py-2 text-white lg:px-8"
        style={{
          backgroundImage: "url('/img11.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
       
        <div className="absolute inset-0 bg-[#071326]/60" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0e1b30]/75 via-[#0e1b30]/55 to-[#0e1b30]/70" />

  
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#b8892f]/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#d8ad5e]/10 blur-3xl" />

        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#d8ad5e]/70 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1120px]">

          <div className="hidden text-center">

            <div className="mb-4 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[#d8ad5e]">
              <Sparkles size={14} />
              Let’s Connect
            </div>

            <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.7rem]">
              Have Questions About Our{" "}
              <span className="text-[#d8ad5e]">
                Programs?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-[620px] text-sm leading-7 text-[#d5d9e2] sm:text-base">
              Whether you need more information about a program, eligibility,
              or the next steps, our team is ready to guide you.
            </p>

          </div>

          <div className="relative overflow-hidden rounded-lg border-2 border-[#b8892f] bg-[#0e1b30]/85 px-5 py-2 shadow-2xl shadow-black/30 backdrop-blur-md md:px-8 md:py-3">

            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#b8892f]/15 blur-3xl" />

            <div className="absolute bottom-0 left-0 h-[2px] w-32 bg-[#b8892f]" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">

              <div className="flex items-start gap-5">

                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d8ad5e]/80 bg-[#d8ad5e]/10 text-[#d8ad5e] shadow-lg shadow-[#b8892f]/10 sm:flex">
                  <Headphones
                    size={22}
                    strokeWidth={1.6}
                  />
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold text-white">
                    We Are Here to Help
                  </h3>

                  <p className="mt-2 max-w-[570px] text-sm leading-6 text-[#c3cad6]">
                    Questions about a plan or program? Our team can walk you
                    through the details and help you understand the
                    opportunities available to you.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">

                    <div className="flex items-center gap-2 text-xs text-[#d2d7df]">
                      <CheckCircle2
                        size={14}
                        className="text-[#d8ad5e]"
                      />
                      Clear Information
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#d2d7df]">
                      <CheckCircle2
                        size={14}
                        className="text-[#d8ad5e]"
                      />
                      Friendly Guidance
                    </div>

                  </div>
                </div>

              </div>

              <a
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-sm border border-[#d8ad5e] bg-[#b8892f] px-5 py-2 text-[9px] font-bold tracking-wide text-[#0e1b30] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8ad5e] hover:shadow-xl hover:shadow-[#b8892f]/30"
              >
                Contact Us

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>
          </div>

          <div className="hidden mt-12 items-center justify-center gap-4">

            <span className="hidden h-px w-16 bg-gradient-to-r from-transparent to-[#b8892f]/70 sm:block" />

            <p className="max-w-[650px] text-center font-serif text-sm italic leading-6 text-[#f0d08a] sm:text-base">
              "Bridging opportunities in the world, a new attempt at
              joining people."
            </p>

            <span className="hidden h-px w-16 bg-gradient-to-l from-transparent to-[#b8892f]/70 sm:block" />

          </div>

        </div>
      </section>

      <section className="hidden relative overflow-hidden border-t border-[#e7e3da] bg-[#faf9f6] px-6 py-14 text-center">

        <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b8892f]/10" />

        <div className="relative mx-auto max-w-[750px]">

          <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-[#b8892f]">
            Yes Time Global
          </span>

          <p className="mt-3 font-serif text-lg italic leading-8 text-[#7f6b4a] sm:text-xl">
            "Bridging opportunities in the world, a new attempt at joining
            people."
          </p>

          <div className="mx-auto mt-6 h-px w-12 bg-[#b8892f]" />

        </div>
      </section>
    </>
  );
};

export default ProgramsCTA;