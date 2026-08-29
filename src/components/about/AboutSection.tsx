import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-[#f6f8fb] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">

        {/* Main Card */}
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-[0_15px_45px_rgba(10,35,55,0.08)] lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

            {/* Small Label */}
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-7 bg-[#e0ad38]" />

              <span className="text-[9px] font-bold uppercase tracking-[2px] text-[#d29b28]">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[520px] font-serif text-[30px] font-bold leading-[1.15] text-[#102742] sm:text-[36px] lg:text-[42px]">
              Connecting People,
              <br />
              <span className="text-[#dca936]">
                Businesses & Opportunities.
              </span>
            </h2>

            {/* First Paragraph */}
            <p className="mt-5 max-w-[530px] text-[12px] leading-6 text-[#6d7e92] sm:text-[13px]">
              At{" "}
              <span className="font-semibold text-[#102742]">
                YES TIME GLOBAL
              </span>
              , we are committed to connecting people, businesses, and
              opportunities across the globe through one trusted and
              transparent platform.
            </p>

            {/* Second Paragraph */}
            <p className="mt-3 max-w-[530px] text-[12px] leading-6 text-[#6d7e92] sm:text-[13px]">
              Our mission is to create accessible programs and strategic
              partnerships that empower individuals and businesses to grow,
              achieve, and succeed together.
            </p>

            {/* ================= FEATURES ================= */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">

              {/* Feature 1 */}
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fff5d9] text-[10px] font-bold text-[#d49d28]">
                  ✓
                </span>

                <span className="text-[11px] font-semibold text-[#263b54]">
                  Global Opportunities
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fff5d9] text-[10px] font-bold text-[#d49d28]">
                  ✓
                </span>

                <span className="text-[11px] font-semibold text-[#263b54]">
                  Transparent Process
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fff5d9] text-[10px] font-bold text-[#d49d28]">
                  ✓
                </span>

                <span className="text-[11px] font-semibold text-[#263b54]">
                  Member Focused
                </span>
              </div>

              {/* Feature 4 */}
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fff5d9] text-[10px] font-bold text-[#d49d28]">
                  ✓
                </span>

                <span className="text-[11px] font-semibold text-[#263b54]">
                  Trusted Platform
                </span>
              </div>

            </div>

            {/* ================= BUTTON ================= */}
            <div className="mt-8">
              <a
                href="/programs"
                className="group inline-flex items-center gap-3 rounded-lg px-6 py-3 text-xs font-semibold shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  backgroundColor: "#0b1b2d",
                  color: "#facc15",
                }}
              >
                <span style={{ color: "#facc15" }}>
                  Discover Our Programs
                </span>

                <span
                  style={{ color: "#facc15" }}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative min-h-[320px] overflow-hidden sm:min-h-[400px] lg:min-h-[500px]">

            <img
              src="/about-global.png"
              alt="YES TIME GLOBAL connecting people and businesses"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061a35cc] via-transparent to-transparent" />

            {/* ================= IMAGE BADGE ================= */}
            <div className="absolute bottom-6 left-6 rounded-xl border border-white/20 bg-[#061a35dd] px-5 py-3 backdrop-blur-md">

              <p className="text-[9px] uppercase tracking-[2px] text-[#f3c75d]">
                YES TIME GLOBAL
              </p>

              <p className="mt-1 text-[11px] font-semibold text-white">
                Connecting Opportunities Worldwide
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;