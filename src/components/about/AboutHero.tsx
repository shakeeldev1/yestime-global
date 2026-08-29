
import React from "react";

const AboutHero: React.FC = () => {
  return (
    <section
      className="relative min-h-[500px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/about-hero.png')",
      }}
    >
      {/* Hero Container */}
      <div
        className="
          relative z-10 mx-auto flex min-h-[500px]
          max-w-[1200px] items-center justify-center
          px-5 py-16 text-center sm:px-8 lg:px-10
        "
      >
        <div className="mx-auto flex max-w-[800px] flex-col items-center">

          {/* Badge */}
          <div
            className="
              mb-4 inline-flex rounded-full
              border border-[#d6a43166]
              bg-[#061a35aa]
              px-3.5 py-1.5
              backdrop-blur-sm
            "
          >
            <span
              className="
                text-[10px] font-bold
                uppercase tracking-[2.5px]
                text-[#f3d38a]
              "
            >
              ✦ About Yes Time Global
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              font-serif font-extrabold
              leading-[1.15] tracking-tight
              text-white
              text-[36px]
              sm:text-[46px]
              md:text-[56px]
            "
          >
            <span className="block">
              Connecting People,
            </span>

            <span className="block whitespace-nowrap text-[#f2c45c]">
              Businesses & Global Opportunities
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-4 max-w-[550px]
              text-[12px] leading-relaxed
              text-white
              sm:text-[13px]
            "
          >
            Building a trusted global ecosystem from Pakistan with strategic
            partnerships and accessible programs.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">

            {/* Explore Programs */}
            <a
              href="/programs"
              className="
                inline-flex h-[44px] min-w-[160px]
                items-center justify-center gap-2
                rounded-lg
                bg-[#e0ad38]
                px-6
                text-[12px] font-bold
                text-[#07172d]
                shadow-lg shadow-black/20
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#f3c75d]
                hover:shadow-xl
              "
            >
              <span>Explore Programs</span>

              <span
                className="text-base font-bold"
                style={{ color: "#07172d" }}
              >
                →
              </span>
            </a>

            {/* Contact Us */}
           <a
  href="/contact"
  className="
    inline-flex h-[44px] min-w-[160px]
    items-center justify-center
    rounded-lg
    bg-[#e0ad38]
    px-6
    text-[12px] font-bold
    text-[#07172d]
    shadow-lg shadow-black/20
    transition-all duration-300
    hover:-translate-y-1
    hover:bg-[#f3c75d]
    hover:shadow-xl
  "
>
  Contact Us
</a>

          </div>

          {/* Stats */}
          <div
            className="
              mt-8 grid grid-cols-2 gap-3
              sm:flex sm:flex-wrap sm:justify-center
            "
          >

            {/* Global */}
            <div
              className="
                min-w-[130px]
                rounded-lg border
                border-[#d9aa3a55]
                bg-[#061a35cc]
                px-4 py-2.5
                backdrop-blur-md
              "
            >
              <strong className="block text-[15px] font-bold text-white">
                Global
              </strong>

              <span className="text-[9px] text-[#aebdd0]">
                Opportunities
              </span>
            </div>

            {/* Trusted */}
            <div
              className="
                min-w-[130px]
                rounded-lg border
                border-[#d9aa3a55]
                bg-[#061a35cc]
                px-4 py-2.5
                backdrop-blur-md
              "
            >
              <strong className="block text-[15px] font-bold text-white">
                Trusted
              </strong>

              <span className="text-[9px] text-[#aebdd0]">
                Platform
              </span>
            </div>

            {/* Transparent */}
            <div
              className="
                min-w-[130px]
                rounded-lg border
                border-[#d9aa3a55]
                bg-[#061a35cc]
                px-4 py-2.5
                backdrop-blur-md
              "
            >
              <strong className="block text-[15px] font-bold text-white">
                Transparent
              </strong>

              <span className="text-[9px] text-[#aebdd0]">
                Process
              </span>
            </div>

            {/* Support */}
            <div
              className="
                min-w-[130px]
                rounded-lg border
                border-[#d9aa3a55]
                bg-[#061a35cc]
                px-4 py-2.5
                backdrop-blur-md
              "
            >
              <strong className="block text-[15px] font-bold text-white">
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

