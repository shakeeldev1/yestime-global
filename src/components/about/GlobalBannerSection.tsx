export default function GlobalBannerSection() {
  return (
    <section className="bg-[#131B2E] py-16 px-6 text-center">
      <div className="mx-auto max-w-4xl flex flex-col items-center justify-center">
        {/* Brand Name */}
        <h2 className="text-3xl md:text-4xl font-medium tracking-[0.2em] text-[#D9A928] mb-3">
          YES TIME
        </h2>

        {/* Tagline */}
        <p className="text-xs md:text-sm font-normal tracking-[0.15em] text-[#8C9BAE] uppercase mb-6">
          CONNECTING OPPORTUNITIES WORLDWIDE
        </p>

        {/* Copyright / Subtext */}
        <p className="text-xs md:text-sm text-[#8C9BAE]/80 font-light">
          © 2026 YES TIME GLOBAL — All Rights Reserved
        </p>
      </div>
    </section>
  );
}