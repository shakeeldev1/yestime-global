export default function MessageSection() {
  return (
    <section className="bg-[#FAF9F5] py-16 px-6">
      <div className="mx-auto max-w-5xl text-center">
        {/* Eyebrow Header */}
        <p className="text-xs font-semibold tracking-[0.25em] text-[#C4A052] uppercase mb-2">
          OUR MESSAGE
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-[#1B2534] mb-10">
          Our Message
        </h2>

        {/* Quote Card */}
        <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 max-w-4xl mx-auto">
          {/* Quote Icon */}
          <span className="absolute top-4 right-6 text-5xl text-[#F3C262] opacity-80 select-none">
            “
          </span>

          {/* Main Quote Text */}
          <p className="text-[#3E526D] text-base md:text-lg font-normal mb-6">
            "Connect opportunities, move business forward, and take a step toward the future."
          </p>

          {/* Gold Highlighted Sub-text */}
          <p className="text-[#F3C262] text-base md:text-lg font-normal">
            With a mission to bring people around the world closer together.
          </p>
        </div>
      </div>
    </section>
  );
}