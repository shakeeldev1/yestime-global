import React from "react";
import {
  Handshake,
  ShieldCheck,
  Heart,
  Cpu,
  Globe2,
  Building2,
} from "lucide-react";

const BasicPriorities: React.FC = () => {
  const priorities = [
    {
      number: "01",
      title: "Trust",
      text: "We build genuine relationships and operate with honesty, reliability, and accountability in every experience.",
      image: "/img9.png",
      icon: Handshake,
    },
    {
      number: "02",
      title: "Transparency",
      text: "We ensure clear policies, open communication, and fair processes for all our members.",
      image: "/vs3.png",
      icon: ShieldCheck,
    },
    {
      number: "03",
      title: "Care",
      text: "We value our members and programs, offering support and solutions that truly matter.",
      image: "/vs4.png",
      icon: Heart,
    },
    {
      number: "04",
      title: "Modern Technology",
      text: "We use smart systems and secure platforms for a smooth and reliable experience.",
      image: "/vs5.png",
      icon: Cpu,
    },
    {
      number: "05",
      title: "Global Reach",
      text: "We aim to bring opportunities to every corner of the world, connecting people across borders.",
      image: "/img12.png",
      icon: Globe2,
    },
    {
      number: "06",
      title: "Yes Time Global",
      text: "We are committed to innovation, growth and creating long-term value for our community.",
      image: "/variant2_square.webp",
      icon: Building2,
    },
  ];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px]">

        {/* ================= HEADER ================= */}
        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d69b22] md:text-sm">
            WHAT WE STAND FOR
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#142238] md:text-4xl">
            Our{" "}
            <span className="text-[#d69b22]">
              Basic Priorities
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[700px] text-sm leading-6 text-gray-500 md:text-base md:leading-7">
            Our priorities guide the way we work, helping us build trust,
            create opportunities, and deliver meaningful value to our
            community.
          </p>

        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {priorities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_3px_15px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]"
              >

                {/* ================= IMAGE ================= */}
                <div className="relative h-[210px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Number */}
                  <span className="absolute left-4 top-4 rounded-full bg-[#e5aa2d] px-3 py-1 text-xs font-bold text-white">
                    {item.number}
                  </span>

                </div>

                {/* ================= CONTENT ================= */}
                <div className="p-7 sm:p-8">

                  {/* Icon + Title */}
                  <div className="flex items-center gap-3.5">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fdf5e3]">
                      <Icon className="h-6 w-6 text-[#d69b22]" />
                    </div>

                    <h3 className="text-lg font-bold text-[#172235] md:text-xl">
                      {item.title}
                    </h3>

                  </div>

                  {/* Gold Line */}
                  <div className="mt-4 h-[2px] w-10 bg-[#e5aa2d]" />

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-gray-600 md:text-[15px]">
                    {item.text}
                  </p>

                </div>

              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default BasicPriorities;