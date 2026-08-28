import React from "react";
import {
  Globe2,
  ShieldCheck,
  Users,
  TrendingUp,
} from "lucide-react";

const WhyWeExist: React.FC = () => {
  return (
    <section className="bg-white px-5 py-14 md:px-10">

      <div className="mx-auto max-w-[1100px] text-center">

        {/* Label */}
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d69b22]">
          OUR PURPOSE
        </p>

        {/* Heading */}
        <h2 className="mt-3 text-3xl font-bold text-[#122033] md:text-4xl">
          Why We Exist
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-[760px] text-sm leading-6 text-gray-500 md:text-base md:leading-7">
          Our purpose is to build an organized, transparent, and accessible
          platform that connects people with the right opportunities to grow,
          save, and succeed together with trust, transparency, and innovation.
        </p>

        {/* Cards */}
        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">

          {/* Card 1 */}
          <div className="flex min-h-[90px] items-center justify-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-5 shadow-[0_3px_15px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <Globe2 className="h-6 w-6 shrink-0 text-[#d69b22]" />

            <p className="text-sm font-semibold text-gray-700 md:text-base">
              Global Opportunities
            </p>

          </div>

          {/* Card 2 */}
          <div className="flex min-h-[90px] items-center justify-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-5 shadow-[0_3px_15px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <ShieldCheck className="h-6 w-6 shrink-0 text-[#d69b22]" />

            <p className="text-sm font-semibold text-gray-700 md:text-base">
              Transparent Process
            </p>

          </div>

          {/* Card 3 */}
          <div className="flex min-h-[90px] items-center justify-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-5 shadow-[0_3px_15px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <ShieldCheck className="h-6 w-6 shrink-0 text-[#d69b22]" />

            <p className="text-sm font-semibold text-gray-700 md:text-base">
              Secure &amp; Trusted
            </p>

          </div>

          {/* Card 4 */}
          <div className="flex min-h-[90px] items-center justify-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-5 shadow-[0_3px_15px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <Users className="h-6 w-6 shrink-0 text-[#d69b22]" />

            <p className="text-sm font-semibold text-gray-700 md:text-base">
              Everyone Can Join
            </p>

          </div>

          {/* Card 5 */}
          <div className="flex min-h-[90px] items-center justify-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-5 shadow-[0_3px_15px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">

            <TrendingUp className="h-6 w-6 shrink-0 text-[#d69b22]" />

            <p className="text-sm font-semibold text-gray-700 md:text-base">
              Long-Term Growth
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;