export default function CommitmentSection() {
  return (
    <section className="bg-[#F1EEE5] py-20 px-6">
      <div className="mx-auto max-w-4xl text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#F3C262] mb-6">
          Our Commitment
        </h2>

        {/* Description Text */}
        <p className="text-[#3E526D] text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
          We are working to build a reliable platform where all programs, facilities, 
          and business activities move forward in an organized manner according to 
          relevant laws and regulations, creating trust and convenience for our 
          customers and business partners.
        </p>

        {/* Pill Badge */}
        <div className="inline-block rounded-full border border-[#F3C262]/60 px-6 py-2">
          <span className="text-xs font-semibold tracking-wider text-[#F3C262] uppercase">
            YES TIME GLOBAL
          </span>
        </div>
      </div>
    </section>
  );
}