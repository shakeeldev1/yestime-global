import React from "react";
import {
  CalendarDays,
  Clock3,
  Target,
  Trophy,
} from "lucide-react";

interface Stat {
  title: string;
  line1: string;
  line2: string;
  urduLine?: string;
  icon: React.ReactNode;
  iconBgClass?: string;
  iconColor: string;
}

const stats: Stat[] = [
  {
    title: "Live Draw",
    line1: "Join our live draw",
    line2: "every 5 minute",
    icon: <span className="text-[9px] font-black tracking-wider text-white">LIVE</span>,
    iconBgClass: "bg-red-600 rounded-[4px] shadow-sm",
    iconColor: "text-white",
  },
  {
    title: "1,400",
    line1: "Daily Draws",
    line2: "Across 8 Programs",
    urduLine: "کل روزانہ ڈرا",
    icon: <CalendarDays size={20} strokeWidth={1.8} />,
    iconColor: "text-blue-400",
  },
  {
    title: "Draw Interval",
    line1: "Every 1 Minute",
    line2: "Per Option",
    urduLine: "ہر آپشن کے لیے 1 منٹ",
    icon: <Clock3 size={20} strokeWidth={1.8} />,
    iconColor: "text-green-400",
  },
  {
    title: "Your Chances",
    line1: "7 Chances",
    line2: "Per Draw",
    urduLine: "آپ کے موقع 7",
    icon: <Target size={20} strokeWidth={1.8} />,
    iconColor: "text-orange-400",
  },
  {
    title: "Lifetime Active",
    line1: "Your Token",
    line2: "Never Expires",
    icon: <Trophy size={20} strokeWidth={1.8} />,
    iconColor: "text-[#d3a344]",
  },
];

const ProgramsHero: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#020a18] text-white h-[90vh] p-6">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,#12345c_0%,#061426_38%,#020817_75%,#01040a_100%)]" />
        <div className="absolute left-[35%] top-0 h-[300px] w-[400px] rounded-full bg-[#0c3766]/20 blur-[100px]" />
        <div className="absolute right-[5%] top-[5%] h-[180px] w-[180px] rounded-full bg-[#d3a344]/10 blur-[80px]" />
      </div>

      {/* GLOBE / WORLD IMAGE */}
      <div className="pointer-events-none absolute right-0 top-0 -z-[1] h-full w-[60%] opacity-95 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat mix-blend-screen opacity-75"
          style={{
            backgroundImage: "url('/img12.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020a18] via-[#020a18]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020a18] via-transparent to-transparent" />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative mx-auto min-h-[340px] max-w-[1400px] px-5 pb-32 pt-10 sm:px-8 sm:pt-12 lg:px-12">
        {/* Left text content */}
        <div className="relative z-10 max-w-[520px]">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-6 bg-[#d3a344]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d3a344]">
              Our Programs
            </span>
          </div>

          <h1 className="text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-[2.6rem] lg:text-[3rem]">
            Our Programs,
            <br />
            Built Around
            <br />
            <span className="font-serif italic text-[#d3a344]">
              Real Opportunities
            </span>
          </h1>

          <p className="mt-4 max-w-[450px] text-[0.75rem] leading-relaxed text-[#b8c2d0] sm:text-[0.8rem]">
            Yes Time Global believes that every 5 minute is an opportunity to save,
            win and create a better life. We bring you powerful programs designed
            for everyone to participate and grow together.
          </p>
        </div>

        {/* STATS BAR */}
        <div className="absolute bottom-[-1px] left-1/2 z-20 w-[calc(100%-32px)] max-w-[1250px] -translate-x-1/2 overflow-hidden rounded-t-[14px] border border-white/15 bg-[#061325]/95 shadow-[0_-10px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <div className="grid grid-cols-2 lg:grid-cols-5">
            {stats.map((stat, index) => (
              <div
                key={stat.title}
                className={`flex min-h-[72px] items-center gap-3 px-4 py-3 sm:px-5 ${
                  index !== stats.length - 1
                    ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                    : ""
                } ${index === 4 ? "col-span-2 lg:col-span-1" : ""}`}
              >
                {/* Icon Container */}
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.04] ${
                    stat.iconBgClass || ""
                  } ${stat.iconColor}`}
                >
                  {stat.icon}
                </div>

                {/* Text Content */}
                <div className="min-w-0">
                  <h3 className="text-[0.75rem] font-bold leading-tight text-white sm:text-[0.8rem]">
                    {stat.title}
                  </h3>
                  <p className="mt-0.5 text-[0.65rem] leading-tight text-[#d4dae3]">
                    {stat.line1}
                  </p>
                  <p className="text-[0.6rem] leading-tight text-[#8995a6]">
                    {stat.line2}
                  </p>
                  {stat.urduLine && (
                    <p className="mt-0.5 text-[0.6rem] font-medium text-[#c69738]">
                      {stat.urduLine}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CORRECTED GOLD CURVED BOTTOM EDGE */}
      <div className="relative h-6 w-full overflow-hidden bg-transparent">
        <div className="absolute left-1/2 top-0 h-12 w-[120%] -translate-x-1/2 rounded-b-[100%] border-b-2 border-[#c69738] bg-[#020a18]" />
      </div>
    </section>
  );
};

export default ProgramsHero;