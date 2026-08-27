export default function AboutSection() {
  return (
    <section className="bg-[#FAF9F5] py-16 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#C4A052] uppercase mb-2">
            Who We Are
          </p>
          <h2 className="text-4xl font-bold text-[#1B2534] mb-3">
            About Us
          </h2>
          <p className="text-[#5B6B7C] text-lg font-normal">
            The YES TIME GLOBAL Concept
          </p>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Who We Are */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-start">
            <h3 className="text-2xl font-bold text-[#F3C262] mb-5">
              Who We Are
            </h3>
            <p className="text-[#4A5568] text-base leading-relaxed">
              We are working as a modern business platform to bring different
              business facilities and programs to people through an integrated,
              reliable and organized system. Our aim is to make business
              activities easier, clearer and more effective.
            </p>
          </div>

          {/* Card 2: Our Vision */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-start">
            <h3 className="text-2xl font-bold text-[#F3C262] mb-5">
              Our Vision
            </h3>
            <p className="text-[#4A5568] text-base leading-relaxed">
              Our vision is to build an integrated business platform, including Pakistan, 
              that provides people, business organizations, and buyers from various 
              countries with better access to business opportunities and information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}