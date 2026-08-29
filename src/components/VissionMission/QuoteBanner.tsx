import React from "react";
import { Quote, Sparkles } from "lucide-react";

const QuoteBanner: React.FC = () => {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        
        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/vs5.png')" }}
          />

          {/* Dark Overlay taake text clearly parha ja sakay */}
          <div className="absolute inset-0 bg-[#06132c]/85" />

          {/* Decorative Glow Elements */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#f5b51b]/20 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#f5b51b]/15 blur-3xl" />

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-12 md:px-14 md:py-16 text-white">
            
            {/* Left Side: Quote Text */}
            <div className="max-w-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5b51b]/10 border border-[#f5b51b]/20 mb-6">
                <Quote className="h-6 w-6 text-[#f5b51b]" />
              </div>

              <p className="text-xl font-medium italic leading-relaxed sm:text-2xl md:text-3xl text-white/95">
                “Take every opportunity to grow your business, and take a step forward toward the future.”
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-1 w-10 bg-[#f5b51b]" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5b51b]">
                  YES TIME GLOBAL
                </span>
              </div>
            </div>

            {/* Right Side: Action / Badge */}
            <div className="shrink-0">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
                <Sparkles className="h-6 w-6 text-[#f5b51b]" />
                <div>
                  <span className="block text-sm font-bold text-white">Build Your Future</span>
                  <span className="text-xs text-white/60">Empowering Communities</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default QuoteBanner;