export default function ProgramsSection() {
  const programs = [
    {
      number: "01",
      title: "Vehicle program",
      description:
        "Defined plans for vehicles of different values, giving customers a clear path to acquiring the car they need.",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
      alt: "Vehicle showroom",
    },
    {
      number: "02",
      title: "Property program",
      description:
        "An organized platform for buying, selling and related business opportunities in real estate.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
      alt: "Modern buildings",
    },
    {
      number: "03",
      title: "New vehicles",
      description:
        "Facilitating the buying and selling of new and used cars, motorcycles and scooters.",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=900&q=80",
      alt: "White car",
    },
    {
      number: "04",
      title: "Buying and savings program",
      description:
        "A savings program, under the company's set principles, for customers buying through registered dealers.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
      alt: "Digital savings and finance",
    },
  ];

  return (
    <section className="w-full bg-[#FBFAF7] px-4 pt-6 pb-2 sm:px-6 sm:pt-6 lg:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
            OUR PROGRAMS
          </p>

          <h2 className="font-serif text-4xl font-semibold leading-[1.15] tracking-tight text-[#102A43] sm:text-5xl">
            Where opportunity meets
            <span className="block">
              organization
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#52606D] sm:text-base">
            The everyday programs that carry our mission — designed around
            what customers actually need.
          </p>

        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {programs.map((program) => (
            <div
              key={program.number}
              className="group flex min-h-[500px] flex-col overflow-hidden rounded-2xl border border-[#102A43]/10 bg-[#102A43] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image */}
              <div className="h-[175px] overflow-hidden">

                <img
                  src={program.image}
                  alt={program.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-6">

                {/* Number */}
                <span className="mb-4 text-sm font-semibold tracking-wide text-[#D5A843]">
                  {program.number}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold leading-tight text-white">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-white/75">
                  {program.description}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}