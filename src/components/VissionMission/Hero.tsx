import {
  CalendarDays,
  Layers3,
  Globe2,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative overflow-hidden text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "linear-gradient(to right, rgba(6, 19, 44, 0.9), rgba(6, 19, 44, 0.75)), url('/img12.png')" }}
    >

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(245,181,27,.18),transparent_35%)]" />

      <div className="relative mx-auto grid min-h-[570px] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:px-10">

        {/* Left */}
        <div className="relative z-10">

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#f5b51b]">
            Our Purpose
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.05] sm:text-6xl">
            Vision &{" "}
            <span className="text-[#f5b51b]">
              Mission
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/75">
            At YES TIME GLOBAL, our vision and mission are the core of
            everything we do. They guide our decisions, shape our programs,
            and drive us to create opportunities that empower people,
            businesses, and communities across the world.
          </p>

          {/* Statistics */}
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">

            <div className="flex items-center gap-2">
              <CalendarDays className="h-7 w-7 text-[#f5b51b]" />
              <div>
                <strong className="block text-sm text-[#f5b51b]">
                  1400+
                </strong>
                <span className="text-[11px] text-white/60">
                  Daily Draws
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Layers3 className="h-7 w-7 text-[#f5b51b]" />
              <div>
                <strong className="block text-sm text-[#f5b51b]">
                  8
                </strong>
                <span className="text-[11px] text-white/60">
                  Saving Programs
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Globe2 className="h-7 w-7 text-[#f5b51b]" />
              <div>
                <strong className="block text-sm text-[#f5b51b]">
                  Global
                </strong>
                <span className="text-[11px] text-white/60">
                  Opportunities
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="h-7 w-7 text-[#f5b51b]" />
              <div>
                <strong className="block text-sm text-[#f5b51b]">
                  Trusted
                </strong>
                <span className="text-[11px] text-white/60">
                  Platform
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side (Agar aap yahan koi aur illustration ya card rakhna chahein) */}
        <div className="relative hidden lg:flex justify-center lg:justify-end">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-[#f5b51b]/10 blur-3xl" />
        </div>

      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-[#f5b51b]" />

    </section>
  );
}