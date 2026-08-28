export default function AboutSection() {
  return (
    <section className="w-full bg-[#FBFAF7] px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
            WHO WE ARE
          </p>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#102A43] sm:text-4xl">
            The Yes Time Global concept
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#52606D]">
            Our core idea is simple: bring different business facilities and
            programs to people through one connected, organized system.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-5 lg:grid-cols-[325px_1fr]">

          {/* Left Image */}
          <div className="relative h-[480px] overflow-hidden rounded-xl">
            <img
              src="https://i.pinimg.com/736x/3f/ee/e5/3feee507a07c642e33f9b2af47caa14e.jpg"
              alt="Yes Time Global team"
              className="h-full w-full object-cover"
            />

            {/* Image Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102A43]/90 via-[#102A43]/20 to-transparent p-5 pt-20">
              <p className="text-xs font-medium text-white">
                Built on trust between customers and business partners
              </p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-5">

            {/* Who We Are */}
            <div className="min-h-[230px] rounded-xl border border-[#102A43]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7">

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
                    d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"
                  />
                  <circle cx="9" cy="7" r="4" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                  />
                </svg>
              </div>

              <h3 className="font-serif text-xl font-semibold text-[#102A43]">
                Who we are
              </h3>

              <p className="mt-3 max-w-2xl text-xs leading-6 text-[#52606D] sm:text-sm">
                Yes Time Global Private Limited is a modern business company.
                Our goal is to create new opportunities for customers and
                business individuals across different sectors, using modern
                technology and an organized business system that makes
                activities easier, clearer and more effective.
              </p>
            </div>

            {/* Our Purpose */}
            <div className="min-h-[180px] rounded-xl border border-[#102A43]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7">

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
                Our purpose
              </h3>

              <p className="mt-3 max-w-2xl text-xs leading-6 text-[#52606D] sm:text-sm">
                Our purpose is to provide a simple, organized system where
                people can benefit from different programs according to their
                needs — gaining easy access to business opportunities,
                wherever they are.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}