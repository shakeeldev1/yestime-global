export default function MissionSection() {
  return (
    <section className="w-full bg-[#FBFAF7] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
            VISION AND MISSION
          </p>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#102A43] sm:text-4xl">
            What we're working toward
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">

          {/* Vision Card */}
          <div className="overflow-hidden rounded-xl border border-[#102A43]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

            {/* Vision Image */}
            <div className="h-[200px] overflow-hidden sm:h-[220px]">
              <img
                src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?auto=format&fit=crop&w=1200&q=80"
                alt="Global vision"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Vision Content */}
            <div className="p-6 sm:p-7">

              {/* Icon */}
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-[#F6E8BF] text-[#B08D57]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12s3.75-6 9.75-6 9.75 6 9.75 6-3.75 6-9.75 6-9.75-6-9.75-6z"
                  />

                  <circle cx="12" cy="12" r="2.5" />
                </svg>
              </div>

              <h3 className="font-serif text-xl font-semibold text-[#102A43]">
                Our vision
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#52606D]">
                To build a modern business platform that helps connect people,
                business institutions, business partners, dealers, vehicle
                buyers and property-related individuals with business
                opportunities — across Pakistan, and in time, around the world.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="overflow-hidden rounded-xl border border-[#102A43]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

            {/* Mission Image */}
            <div className="h-[200px] overflow-hidden sm:h-[220px]">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
                alt="Business team working together"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Mission Content */}
            <div className="p-6 sm:p-7">

              {/* Icon */}
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-[#F6E8BF] text-[#B08D57]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                  />
                </svg>
              </div>

              <h3 className="font-serif text-xl font-semibold text-[#102A43]">
                Our mission
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#52606D]">
                To use modern technology to provide facilities that make
                things easier for our customers, and to help move business
                activities forward in a more organized, dependable way.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}