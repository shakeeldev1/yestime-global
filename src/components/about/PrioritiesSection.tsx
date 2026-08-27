export default function PrioritiesSection() {
  const priorities = [
    {
      number: "01",
      title: "Trust",
      description: "Building strong relationships with customers and business partners."
    },
    {
      number: "02",
      title: "Transparency",
      description: "Providing customers with necessary information and guidance clearly."
    },
    {
      number: "03",
      title: "Convenience",
      description: "Making access to services and programs easier for customers."
    },
    {
      number: "04",
      title: "Modern Technology",
      description: "Improving business operations through modern digital tools."
    },
    {
      number: "05",
      title: "Sustainability",
      description: "Expanding business opportunities across countries and business sectors in the future."
    }
  ];

  return (
    <section className="bg-[#FAF9F5] py-16 px-6">
      <div className="mx-auto max-w-7xl text-center">
        {/* Eyebrow Header */}
        <p className="text-xs font-semibold tracking-[0.25em] text-[#C4A052] uppercase mb-2">
          OUR PRIORITIES
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-[#1B2534] mb-3">
          Our Core Priorities
        </h2>

        {/* Subtitle */}
        <p className="text-[#5B6B7C] text-base mb-12">
          Our priorities in business relationships and services
        </p>

        {/* Priorities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {priorities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Circle Badge */}
              <div className="w-12 h-12 rounded-full border border-[#F3C262] text-[#F3C262] font-semibold text-sm flex items-center justify-center mb-6">
                {item.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1B2534] mb-4 min-h-[56px] flex items-center justify-center">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#5B6B7C] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}