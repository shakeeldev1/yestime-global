import { useEffect, useState } from "react";

const timeZones = [
  {
    city: "Karachi",
    timezone: "Asia/Karachi",
  },
  {
    city: "Dubai",
    timezone: "Asia/Dubai",
  },
  {
    city: "London",
    timezone: "Europe/London",
  },
  {
    city: "Singapore",
    timezone: "Asia/Singapore",
  },
  {
    city: "New York",
    timezone: "America/New_York",
  },
];

type Clock = {
  time: string;
  date: string;
};

export default function LiveClocks() {
  const [clocks, setClocks] = useState<Clock[]>(
    timeZones.map(() => ({
      time: "--:--:--",
      date: "--",
    }))
  );

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();

      const updatedClocks = timeZones.map((zone) => {
        const time = new Intl.DateTimeFormat("en-GB", {
          timeZone: zone.timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);

        const date = new Intl.DateTimeFormat("en-GB", {
          timeZone: zone.timezone,
          day: "2-digit",
          month: "short",
          year: "numeric",
        }).format(now);

        return {
          time,
          date,
        };
      });

      setClocks(updatedClocks);
    };

    // Initial update
    updateClocks();

    // Update every second
    const interval = setInterval(updateClocks, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="bg-[#060b1f] px-5 pb-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#f2cb61]/70">
            Global Time
          </p>

          <h2 className="mt-2 font-serif text-2xl text-white md:text-3xl">
            Connected Across Time Zones
          </h2>
        </div>

        {/* Clock Cards */}
        <div className="grid grid-cols-2 overflow-hidden border border-white/10 sm:grid-cols-3 lg:grid-cols-5">

          {timeZones.map((zone, index) => (
            <div
              key={zone.city}
              className={`
                group
                relative
                px-4
                py-6
                text-center
                transition-all
                duration-300
                hover:bg-white/[0.03]

                border-white/10

                ${index > 0 ? "border-l" : ""}

                ${
                  index >= 2
                    ? "border-t sm:border-t-0"
                    : ""
                }
              `}
            >

              {/* Top Gold Line */}
              <div className="absolute left-1/2 top-0 h-px w-0 -translate-x-1/2 bg-[#d4af37] transition-all duration-500 group-hover:w-1/2" />

              {/* City */}
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#cdd3dc]/60">
                {zone.city}
              </p>

              {/* Live Indicator */}
              <div className="mt-3 flex items-center justify-center gap-1.5">

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f2cb61] shadow-[0_0_8px_2px_rgba(242,203,97,.5)]" />

                <span className="text-[8px] uppercase tracking-wider text-[#cdd3dc]/40">
                  Live
                </span>

              </div>

              {/* Time */}
              <div className="mt-3 font-mono text-lg font-medium tracking-wider text-[#f2cb61] md:text-xl">
                {clocks[index].time}
              </div>

              {/* Date */}
              <p className="mt-1 font-mono text-[9px] text-[#cdd3dc]/40">
                {clocks[index].date}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}