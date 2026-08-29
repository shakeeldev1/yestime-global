export default function CorePrioritiesSection() {
  const priorities = [
    {
      title: "Trust",
      description:
        "Building a relationship of trust with customers and business partners.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=500&q=80",
      alt: "Business partnership",
    },
    {
      title: "Transparency",
      description:
        "Clear information about the process, terms and requirements of every program.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
      alt: "Business discussion",
    },
    {
      title: "Ease",
      description:
        "Making it simple for customers to access our services and programs.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=500&q=80",
      alt: "Modern workspace",
    },
    {
      title: "Modern technology",
      description:
        "Improving our business system using modern digital resources.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
      alt: "Modern technology",
    },
    {
      title: "Global reach",
      description:
        "Expanding business opportunities to new countries and markets over time.",
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=500&q=80",
      alt: "Global world",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
            OUR CORE PRIORITIES
          </p>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#102A43] sm:text-4xl lg:text-5xl">
            What guides every program
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#52606D] sm:text-base">
            Five principles connect every part of how we work with customers
            and business partners.
          </p>

        </div>

        {/* Priorities */}
        <div className="relative mx-auto mt-20 max-w-6xl">

          {/* Connecting Line */}
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-[38px] hidden border-t border-dashed border-[#D5A843] lg:block" />

          {/* Priority Items */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">

            {priorities.map((priority, index) => (
              <div
                key={priority.title}
                className="relative z-10 flex flex-col items-center text-center"
              >

                {/* Circular Image */}
                <div className="group relative mb-6 h-[78px] w-[78px] shrink-0 rounded-full border border-[#D5A843] bg-[#FBFAF7] p-1.5 shadow-sm">
                  
                  <div className="h-full w-full overflow-hidden rounded-full">
                    <img
                      src={priority.image}
                      alt={priority.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Number */}
                  <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#102A43] text-[9px] font-semibold text-white">
                    {index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-[#102A43] sm:text-lg">
                  {priority.title}
                </h3>

                {/* Description */}
                <p className="mt-3 max-w-[210px] text-sm leading-6 text-[#52606D]">
                  {priority.description}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}