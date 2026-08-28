import React from "react";
import {
  ShieldCheck,
  FileCheck2,
  Sparkles,
  Cpu,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Trust",
    description: "A relationship built on confidence",
    icon: <ShieldCheck size={20} strokeWidth={1.7} />,
  },
  {
    title: "Transparency",
    description: "Clear terms, no hidden details",
    icon: <FileCheck2 size={20} strokeWidth={1.7} />,
  },
  {
    title: "Ease",
    description: "Simple access to every program",
    icon: <Sparkles size={20} strokeWidth={1.7} />,
  },
  {
    title: "Modern Technology",
    description: "A digital system behind every step",
    icon: <Cpu size={20} strokeWidth={1.7} />,
  },
];

const ProgramsHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white h-[98vh]">
   

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-105px]
          z-0
          h-[650px]
          w-[650px]
          -translate-x-1/2
          opacity-80
          sm:top-[-95px]
          sm:h-[700px]
          sm:w-[700px]
        "
      >
        <div className="absolute inset-0 rounded-full border border-[#eeeae1]" />

        <div className="absolute inset-[70px] rounded-full border border-[#eeeae1]" />

        <div className="absolute inset-[145px] rounded-full border border-[#ead9b6]" />

        <span className="absolute left-[50%] top-[8px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#b8892f]" />

        <span className="absolute bottom-[18%] left-[11%] h-1.5 w-1.5 rounded-full bg-[#ead9b6]" />

        <span className="absolute right-[11%] top-[35%] h-1.5 w-1.5 rounded-full bg-[#ead9b6]" />
      </div>

     

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[590px]
          max-w-[1400px]
          flex-col
          items-center
          px-4
          pb-10
          pt-[78px]
          sm:min-h-[620px]
          sm:px-6
          sm:pt-[90px]
          lg:px-8
        "
      >
  

        <div className="flex items-center gap-2">
          <span className="h-px w-7 bg-[#b8892f]" />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.24em]
              text-[#b8892f]
              sm:text-[11px]
            "
          >
            Our Programs
          </span>

          <span className="h-px w-7 bg-[#b8892f]" />
        </div>


        <h1
          className="
            mx-auto
            mt-5
            max-w-[800px]
            text-center
            text-[2.15rem]
            font-semibold
            leading-[1.08]
            tracking-[-0.035em]
            text-[#0e1b30]
            sm:mt-6
            sm:text-[3rem]
            lg:text-[3.65rem]
          "
        >
          Four Programs, Built
          <br />

          <span className="text-[#0e1b30]">
            Around{" "}
          </span>

          <em className="font-serif font-semibold text-[#b8892f]">
            Real
          </em>

          <br className="sm:hidden" />

          <em className="font-serif font-semibold text-[#b8892f]">
            {" "}Opportunities
          </em>
        </h1>


        <p
          className="
            mx-auto
            mt-5
            max-w-[700px]
            text-center
            text-[0.86rem]
            leading-6
            text-[#68717f]
            sm:mt-6
            sm:text-[0.96rem]
            sm:leading-7
          "
        >
          Yes Time Global (Private) Limited was set up to give buyers,
          businessmen, dealers and customers an organized, easy path into
          vehicles and property through modern, transparent programs.
        </p>

        <div
          className="
            mt-10
            grid
            w-full
            max-w-[1250px]
            overflow-hidden
            rounded-[4px]
            border
            border-[#e8e4dc]
            bg-[#f8f6f1]
            shadow-[0_8px_25px_rgba(14,27,48,0.03)]
            sm:mt-12
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`
                flex
                min-h-[88px]
                items-center
                gap-4
                px-5
                py-5
                sm:px-6
                ${
                  index !== features.length - 1
                    ? "border-b border-[#e8e4dc] lg:border-b-0 lg:border-r"
                    : ""
                }
              `}
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#e6dfd0]
                  bg-white
                  text-[#b8892f]
                  shadow-sm
                "
              >
                {feature.icon}
              </div>


              <div className="min-w-0">
                <h3
                  className="
                    text-left
                    text-[0.92rem]
                    font-bold
                    leading-snug
                    text-[#172238]
                    sm:text-[0.98rem]
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-0.5
                    text-left
                    text-[0.8rem]
                    leading-relaxed
                    text-[#68717f]
                    sm:text-[0.85rem]
                  "
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-10 flex items-center gap-2 opacity-70">
          <span className="h-px w-8 bg-[#e7e3da]" />
          <span className="h-1 w-1 rounded-full bg-[#b8892f]" />
          <span className="h-px w-8 bg-[#e7e3da]" />
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;