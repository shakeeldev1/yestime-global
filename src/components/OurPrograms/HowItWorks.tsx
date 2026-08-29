import React from "react";
import {
  MousePointerClick,
  Ticket,
  Clock3,
  Target,
  Trophy,
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Choose Your Option",
    description: "Pick any of the 8 programs you like.",
    icon: <MousePointerClick size={24} strokeWidth={1.8} />,
  },
  {
    number: "02",
    title: "Token Is All You Need",
    description: "Your token is valid for lifetime.",
    icon: <Ticket size={24} strokeWidth={1.8} />,
  },
  {
    number: "03",
    title: "Every 1 Minute",
    description: "You get a chance in the live draw.",
    icon: <Clock3 size={24} strokeWidth={1.8} />,
  },
  {
    number: "04",
    title: "7 Chances Per Draw",
    description: "More chances, more possibilities.",
    icon: <Target size={24} strokeWidth={1.8} />,
  },
  {
    number: "05",
    title: "Win Amazing Rewards",
    description: "Real rewards for real people.",
    icon: <Trophy size={24} strokeWidth={1.8} />,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#061225] px-5 py-14 sm:px-8 lg:px-12">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#b8892f]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1250px]">

        {/* ================= HEADING ================= */}
        <div className="mx-auto max-w-[720px] text-center">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-[#b8892f]/40
              bg-[#b8892f]/10
              px-4
              py-1.5
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#d3a344]
            "
          >
            Our Simple Process
          </span>

          <h2
            className="
              mt-4
              text-2xl
              font-semibold
              leading-tight
              text-white
              sm:text-3xl
              lg:text-[34px]
            "
          >
            Simple Steps.{" "}
            <span className="font-serif italic text-[#d3a344]">
              Clear Process.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-[650px]
              text-sm
              leading-6
              text-[#b7c0ce]
            "
          >
            You choose your option, you get a chance every 1 minute.
            It's that simple!
          </p>
        </div>

        {/* ================= STEPS ================= */}
        <div className="relative mt-12">

          {/* Connecting Line - Desktop */}
          <div
            className="
              absolute
              left-[10%]
              right-[10%]
              top-[38px]
              hidden
              h-px
              bg-[#b8892f]/40
              lg:block
            "
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  group
                  relative
                  text-center
                "
              >
                {/* Icon Circle */}
                <div className="relative z-10 mx-auto flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#b8892f] bg-[#061225] text-[#d3a344] shadow-[0_0_0_7px_rgba(184,137,47,0.05)] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#b8892f] group-hover:text-[#061225]">
                  {step.icon}
                </div>

                {/* Number */}
                <div
                  className="
                    mx-auto
                    mt-4
                    text-[11px]
                    font-bold
                    tracking-[0.15em]
                    text-[#d3a344]
                  "
                >
                  STEP {step.number}
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-2
                    text-[15px]
                    font-bold
                    leading-snug
                    text-white
                  "
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mx-auto
                    mt-2
                    max-w-[180px]
                    text-[11px]
                    leading-5
                    text-[#aeb8c7]
                  "
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}
        <div
          className="
            mx-auto
            mt-12
            max-w-[850px]
            rounded-lg
            border
            border-[#b8892f]/20
            bg-white/[0.03]
            px-5
            py-4
            text-center
          "
        >
          <p className="text-xs leading-6 text-[#c3cad5] sm:text-sm">
            <span className="font-semibold text-[#d3a344]">
              Simple, transparent and accessible.
            </span>{" "}
            Choose your preferred program, participate every minute and
            enjoy opportunities designed for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;