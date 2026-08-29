import React from "react";
import {
  Target,
  Eye,
  Sparkles,
  Globe,
  ShieldCheck,
  Handshake,
  ChevronRight,
  ShoppingBag,
  Car,
  Bike,
  PiggyBank,
  ArrowUpRight,
} from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-12 text-slate-800 ">
      <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-12 relative z-10">

        {/* ========== WHO WE ARE SECTION ========== */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center mb-24">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-amber-500/30 bg-amber-50 px-4 py-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-[10px] font-black text-white">
                W
              </span>
              <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                WHO WE ARE
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl font-bold text-slate-900  mb-6 ">
              Connecting People,<br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 bg-clip-text text-transparent">
                Businesses & Opportunities.
              </span>
            </h2>

            {/* Story Card */}
            <div className="mb-4 p-6 rounded-2xl bg-amber-50/50 border border-amber-200/60 shadow-sm relative overflow-hidden group hover:border-amber-300 transition-all">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-amber-500 to-emerald-500" />
              <p className="text-base leading-relaxed text-slate-800 font-medium mb-3">
                Founded in <span className="font-bold text-amber-600 underline decoration-amber-500/40 underline-offset-4">2023</span>, YES TIME GLOBAL PRIVATE LIMITED emerged with a bold vision: to revolutionize how people, businesses, and communities connect.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                What started as an ambitious idea has grown into a trusted platform, connecting thousands of users to life-changing opportunities in shopping, vehicles, property, agriculture, and more.
              </p>
            </div>

            {/* Main Description */}
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              At <strong className="text-slate-900 font-semibold">YES TIME GLOBAL PRIVATE LIMITED</strong>, we empower individuals through trusted programs, strategic partnerships, and transparent processes—helping you save more, invest smarter, and build lasting success.
            </p>

            {/* Values Grid */}
            <div className="mb-8 p-6 rounded-2xl border border-slate-200 bg-slate-50/80 shadow-sm">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-4">
                Our Core Pillars
              </span>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-amber-400 transition">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600 mb-2">
                    <Target size={20} />
                  </span>
                  <span className="text-xs font-bold text-slate-900">Mission</span>
                  <span className="text-[11px] text-slate-500 mt-0.5">Connect & Empower</span>
                </div>

                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-amber-400 transition">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600 mb-2">
                    <Eye size={20} />
                  </span>
                  <span className="text-xs font-bold text-slate-900">Vision</span>
                  <span className="text-[11px] text-slate-500 mt-0.5">Global Leadership</span>
                </div>

                <div className="flex flex-col items-center text-center p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-amber-400 transition">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600 mb-2">
                    <Sparkles size={20} />
                  </span>
                  <span className="text-xs font-bold text-slate-900">Values</span>
                  <span className="text-[11px] text-slate-500 mt-0.5">Trust & Innovation</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 pb-8 border-b border-slate-200 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200">
                <Globe size={16} className="text-amber-500" />
                <span>Global Reach</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200">
                <ShieldCheck size={16} className="text-emerald-600" />
                <span>100% Transparent</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200">
                <Handshake size={16} className="text-amber-500" />
                <span>Strategic Partners</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="/about"
                className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <span className="text-white">Discover Our Full Story</span>
                <ChevronRight className="h-4 text-white w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE BENTO GRID */}
          <div className="lg:col-span-5">
            <div className="grid gap-4">
              {/* Top Large Image */}
              <div className="group relative h-[280px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
                <img
                  src="/programs.png"
                  alt="Programs Header"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 rounded-full border border-amber-300 bg-white/90 px-4 py-1.5 backdrop-blur-md shadow-sm">
                  <span className="text-xs font-extrabold text-amber-600">Since 2023</span>
                </div>
              </div>

              {/* Bottom Split Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group relative h-[180px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">
                  <img
                    src="/img.webp"
                    alt="Global Network"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-bold text-amber-700 backdrop-blur-md shadow-sm">
                    Global Network
                  </span>
                </div>

                <div className="group relative h-[180px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">
                  <img
                    src="/img1.png"
                    alt="Community Impact"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-bold text-emerald-700 backdrop-blur-md shadow-sm">
                    Community First
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ========== OUR PROGRAMS SECTION ========== */}
        <div className="pt-4 ">
          {/* Section Header */}
          <div className="mb-4 text-center max-w-xl mx-auto">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-4 py-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-black text-white">
                P
              </span>
              <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase">
                OUR PROGRAMS
              </span>
            </div>

            <h3 className="text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl tracking-tight">
              Programs Designed <br />
              <span className="text-amber-500">For Your Success.</span>
            </h3>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Shopping Program",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
                icon: <ShoppingBag size={20} />,
              },
              {
                number: "02",
                title: "Car Program",
                image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=85",
                icon: <Car size={20} />,
              },
              {
                number: "03",
                title: "Motorcycle Program",
                image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85",
                icon: <Bike size={20} />,
              },
              {
                number: "04",
                title: "Savings Programs",
                image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=900&q=85",
                icon: <PiggyBank size={20} />,
              },
            ].map((program) => (
              <div
                key={program.number}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl"
              >
                {/* Card Image Container */}
                <div className="relative h-48 w-full overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />

                  {/* Number Badge */}
                  <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/90 font-mono text-xs font-bold text-amber-600 backdrop-blur-md border border-amber-200 shadow-sm">
                    {program.number}
                  </div>

                  {/* Floating Category Icon */}
                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md">
                    {program.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {program.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Explore benefits & access</p>
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Footer Note */}
          <div className="mt-12 text-center">
            <span className="inline-block rounded-full bg-slate-100 border border-slate-200 px-6 py-2 text-xs font-medium text-slate-600">
              Trusted programs • Sustainable growth • Better opportunities
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;