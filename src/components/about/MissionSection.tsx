export default function MissionSection() {
  return (
    <section className="bg-[#FAF9F5] py-16 px-6">
      <div className="mx-auto max-w-5xl text-center">
        {/* Sub-heading / Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.25em] text-[#C4A052] uppercase mb-2">
          OUR MISSION
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-[#1B2534] mb-10">
          Our Mission
        </h2>

        {/* Content Card */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 max-w-4xl mx-auto">
          <p className="text-[#4A5568] text-base md:text-lg leading-relaxed font-normal">
            Our mission is to utilize modern technology and best practices to 
            provide our programs and facilities, creating convenience for users 
            and making business activities more organized and efficient.
          </p>
        </div>
      </div>
    </section>
  );
}