import React from "react";

const AboutHero: React.FC = () => {
  return (
    <section
      className="relative min-h-[500px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/about-hero.png')",
      }}
    >
      {/* Dark Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#020e20]
          via-[#061d38e8]
          to-[#061a3580]
        "
      />

      {/* Hero Container */}
      <div
        className="
          relative z-10 mx-auto flex min-h-[500px]
          max-w-[1200px] items-center
          px-5 py-16 sm:px-8 lg:px-10
        "
      >
        <div className="max-w-[650px]">

          {/* Badge */}
          <div
            className="
              mb-4 inline-flex rounded-full
              border border-[#d6a43166]
              bg-[#061a35aa]
              px-3 py-1.5
              backdrop-blur-sm
            "
          >
            <span
              className="
                text-[9px] font-semibold
                uppercase tracking-[2px]
                text-[#f3d38a]
              "
            >
              ✦ About Yes Time Global
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              font-serif text-[36px]
              font-bold leading-[1.08]
              text-white
              sm:text-[42px]
              md:text-[50px]
              lg:text-[56px]
            "
          >
            Connecting People,
            <br />

            <span className="text-[#f2c45c]">
              Businesses & Global Opportunities.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-5 max-w-[570px]
              text-[12px] leading-6
              text-[#c5d1df]
              sm:text-[13px]
            "
          >
            We create accessible programs and strategic partnerships that
            connect people, businesses and opportunities — building a trusted
            ecosystem from Pakistan toward the world.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">

            {/* Explore Programs */}
            <a
              href="/programs"
              className="
                inline-flex items-center gap-2
                rounded-md bg-[#e0ad38]
                px-4 py-2.5
                text-[11px] font-bold
                shadow-lg
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#f3c75d]
              "
              style={{
                color: "#07172d",
              }}
            >
              <span style={{ color: "#07172d" }}>
                Explore Programs
              </span>

              <span
                className="text-sm font-bold"
                style={{
                  color: "#07172d",
                }}
              >
                →
              </span>
            </a>

            {/* Contact Us */}
            <a
              href="/contact"
              className="
                inline-flex items-center gap-2
                rounded-md border
                px-5 py-2.5
                text-[11px] font-bold
                shadow-lg
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#0b2a4e]
              "
              style={{
                color: "#ffffff",
                backgroundColor: "#061a35",
                borderColor: "#f3c75d",
              }}
            >
              <span
                className="whitespace-nowrap"
                style={{
                  color: "#ffffff",
                }}
              >
                Contact Us
              </span>

              <span
                className="text-sm font-bold"
                style={{
                  color: "#f3c75d",
                }}
              >
                →
              </span>
            </a>

          </div>

          {/* Stats */}
          <div
            className="
              mt-8 grid grid-cols-2
              gap-2
              sm:flex sm:flex-wrap
            "
          >

            {/* Global */}
            <div
              className="
                min-w-[120px]
                rounded-lg border
                border-[#d9aa3a55]
                bg-[#061a35cc]
                px-4 py-2.5
                backdrop-blur-md
              "
            >
              <strong className="block text-[15px] text-white">
                Global
              </strong>

              <span className="text-[9px] text-[#aebdd0]">
                Opportunities
              </span>
            </div>

            {/* Trusted */}
            <div
              className="
                min-w-[120px]
                rounded-lg border
                border-[#d9aa3a55]
                bg-[#061a35cc]
                px-4 py-2.5
                backdrop-blur-md
              "
            >
              <strong className="block text-[15px] text-white">
                Trusted
              </strong>

              <span className="text-[9px] text-[#aebdd0]">
                Platform
              </span>
            </div>

            {/* Transparent */}
            <div
              className="
                min-w-[120px]
                rounded-lg border
                border-[#d9aa3a55]
                bg-[#061a35cc]
                px-4 py-2.5
                backdrop-blur-md
              "
            >
              <strong className="block text-[15px] text-white">
                Transparent
              </strong>

              <span className="text-[9px] text-[#aebdd0]">
                Process
              </span>
            </div>

            {/* Support */}
            <div
              className="
                min-w-[120px]
                rounded-lg border
                border-[#d9aa3a55]
                bg-[#061a35cc]
                px-4 py-2.5
                backdrop-blur-md
              "
            >
              <strong className="block text-[15px] text-white">
                24/7
              </strong>

              <span className="text-[9px] text-[#aebdd0]">
                Member Support
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;