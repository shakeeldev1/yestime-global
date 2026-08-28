import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#faf9f6] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">

        <div className="text-left lg:col-span-7">

          <span
            className="
              inline-flex
              items-center
              gap-2.5
              font-sans
              text-[0.72rem]
              font-bold
              uppercase
              tracking-[0.22em]
              text-[#b8892f]
            "
          >
  
            Our Purpose
          </span>

          <h1
            className="
              mt-[18px]
              text-4xl
              font-semibold
              leading-tight
              tracking-tight
              text-[#0e1b30]
              sm:text-5xl
              lg:text-[4.1rem]
            "
          >
            Vision & Mission
          </h1>

          <p
            className="
              mt-[22px]
              max-w-[580px]
              text-[1.08rem]
              leading-relaxed
              text-[#5b6472]
            "
          >
            Yes Time Global (Private) Limited was built on one idea:
            every worthwhile opportunity has a right time and a right
            place. We exist to bring people, vehicles and property
            together easily, transparently, and on organized terms.
          </p>

          <div className="mt-8 flex items-center gap-4 sm:mt-10">
            <div
              className="
                h-[9px]
                w-[9px]
                rounded-full
                bg-[#b8892f]
                shadow-[0_0_0_8px_rgba(184,137,47,0.12)]
              "
            />

            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-widest
                text-[#8a94a6]
              "
            >
              Establishing New Standards
            </span>
          </div>
        </div>

        <div className="relative lg:col-span-5">

          <div
            className="
              absolute
              -right-2
              -top-2
              z-10
              h-16
              w-16
              border-r-2
              border-t-2
              border-[#b8892f]
              opacity-80
            "
          />

          <div className="relative mx-auto max-w-md lg:max-w-none">
            <img
              src="/img5.png"
              alt="Yes Time Global - Global Opportunities"
              className="
                h-full
                w-full
                rounded-2xl
                object-cover
                object-center
                shadow-[0_20px_45px_rgba(14,27,48,0.15)]
                transition-transform
                duration-700
                hover:scale-[1.02]
              "
            />
          </div>

          <div
            className="
              absolute
              -bottom-3
              -left-3
              h-8
              w-8
              rounded-full
              border
              border-[#b8892f]
              bg-[#faf9f6]
            "
          >
            <div className="m-auto mt-[9px] h-2 w-2 rounded-full bg-[#b8892f]" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;