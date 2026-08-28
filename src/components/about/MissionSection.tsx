import React from "react";

const MissionSection: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "Empowering people and businesses through accessible opportunities and strategic partnerships.",
      image:
        "data:image/jpeg;base64,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",
      color: "#f59e0b",
      icon: "person",
      points: [
        "Inclusive Opportunities",
        "Strategic Partnerships",
        "Community Empowerment",
        "Positive Impact",
      ],
      button: "Explore Our Mission",
    },
    {
      id: 2,
      title: "Our Vision",
      description:
        "A connected world where opportunity, progress and growth are accessible to everyone.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qBANjINvyC0Uaz1UgK1d8zD2r8Nnj_-FGpW3QCNXYY-rYXkV8DKX0Yaj&s=10",
      color: "#0969d8",
      icon: "eye",
      points: [
        "Global Connectivity",
        "Sustainable Growth",
        "Innovation for All",
        "Better Tomorrow",
      ],
      button: "Discover Our Vision",
    },
    {
      id: 3,
      title: "Our Values",
      description:
        "Built on trust, integrity, transparency and long-term relationships with our members.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcL224qarSV989YG8BNMYjQhLVO8qGP6OQtFx4uVFkemjjx8efaC7HF26&s=10",
      color: "#059669",
      icon: "shield",
      points: [
        "Trust & Integrity",
        "Transparency",
        "Innovation",
        "Commitment",
      ],
      button: "Explore Our Values",
    },
    {
      id: 4,
      title: "Global Reach",
      description:
        "Starting from Pakistan, we are building pathways toward international opportunities.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/052/074/090/small/hand-holding-a-glowing-globe-with-network-connections-concept-of-global-connectivity-and-digital-world-photo.jpg",
      color: "#7c1f91",
      icon: "globe",
      points: [
        "Global Opportunities",
        "International Partnerships",
        "Worldwide Network",
        "Beyond Borders",
      ],
      button: "Explore Global Reach",
    },
  ];

  // Card Icons
  const CardIcon = ({ type }: { type: string }) => {
    if (type === "person") {
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 20c.7-4 3-6 7-6s6.3 2 7 6" />
        </svg>
      );
    }

    if (type === "eye") {
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    }

    if (type === "shield") {
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 3 20 6v5c0 5-3.4 8.3-8 10-4.6-1.7-8-5-8-10V6l8-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    }

    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9S9.5 5.5 12 3Z" />
      </svg>
    );
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="text-center">
          <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#e0ad38]">
            What Drives Us
          </span>

          <h2 className="mt-3 font-serif text-[30px] font-bold leading-tight text-[#07172d] sm:text-[38px] lg:text-[44px]">
            Our Mission, Vision &<br />
            Values
          </h2>

          <p className="mx-auto mt-4 max-w-[580px] text-[12px] leading-relaxed text-[#687b92] sm:text-[13px]">
            Everything we build is guided by trust, transparency, innovation
            and a commitment to meaningful growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {cards.map((card) => (
            <div
              key={card.id}
              className="
                group relative flex min-h-[570px]
                flex-col overflow-visible
                rounded-2xl border border-[#e5e9ef]
                bg-white
                shadow-[0_8px_30px_rgba(7,23,45,0.08)]
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_18px_45px_rgba(7,23,45,0.14)]
              "
            >

              {/* IMAGE AREA */}
              <div className="relative h-[165px] w-full shrink-0">

                {/* Image Wrapper */}
                <div className="h-full w-full overflow-hidden rounded-t-2xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="
                      h-full w-full object-cover
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-black/5" />
                </div>

                {/* Number Badge */}
                <div
                  className="
                    absolute left-3 top-3 z-10
                    flex h-7 w-7
                    items-center justify-center
                    rounded-full
                    bg-white
                    text-[10px]
                    font-bold
                    text-[#07172d]
                    shadow-md
                  "
                >
                  0{card.id}
                </div>

                {/* CENTER ICON */}
                <div
                  className="
                    absolute
                    -bottom-6
                    left-1/2
                    z-30
                    flex h-12 w-12
                    -translate-x-1/2
                    items-center justify-center
                    rounded-full
                    border-[4px]
                    border-white
                    text-white
                    shadow-lg
                  "
                  style={{
                    backgroundColor: card.color,
                  }}
                >
                  <CardIcon type={card.icon} />
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="flex flex-1 flex-col px-5 pb-5 pt-10">

                {/* Accent Line */}
                <div
                  className="mb-3 h-[2px] w-7"
                  style={{
                    backgroundColor: card.color,
                  }}
                />

                {/* Title */}
                <h3 className="text-[16px] font-bold text-[#07172d]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-2 min-h-[58px] text-[11px] leading-relaxed text-[#687b92]">
                  {card.description}
                </p>

                {/* Checklist */}
                <div className="mt-4 space-y-3">
                  {card.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2"
                    >
                      {/* Check Circle */}
                      <span
                        className="
                          flex h-[15px] w-[15px]
                          shrink-0 items-center
                          justify-center
                          rounded-full
                          border
                        "
                        style={{
                          borderColor: card.color,
                          color: card.color,
                        }}
                      >
                        <svg
                          viewBox="0 0 12 12"
                          className="h-[9px] w-[9px]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="m2.5 6 2.2 2.2L9.5 3.5" />
                        </svg>
                      </span>

                      <span className="text-[10px] font-medium text-[#26384d]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <a
                  href="#"
                  className="
                    mt-auto flex w-full
                    items-center justify-center
                    gap-2
                    rounded-lg
                    px-3 py-2.5
                    text-[10px]
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:brightness-95
                    hover:shadow-md
                  "
                  style={{
                    backgroundColor: card.color,
                  }}
                >
                  {card.button}

                  <span className="text-sm">
                    →
                  </span>
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default MissionSection;