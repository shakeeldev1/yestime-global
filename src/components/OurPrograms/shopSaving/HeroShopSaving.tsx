import { ChevronRight, Play, Tag, ShoppingBag, ShieldCheck } from 'lucide-react';

function HeroShopSaving() {
  return (
    <section className="relative min-h-[500px] w-full overflow-hidden bg-[#000000] px-4 py-8 text-white sm:px-8 lg:px-16">
      

      <div className="mx-auto max-w-7xl">
        

        <div className="grid items-center gap-8 lg:grid-cols-12">
          {/* Left Content Column */}
          <div className="lg:col-span-7">
            {/* Title with Badge */}
            <div className="mb-2 flex items-center gap-3">
              <span className="flex h-10 w-12 items-center justify-center rounded-xl border border-[#DFA42D] bg-[#DFA42D]/10 font-mono text-lg font-bold text-[#DFA42D] shadow-inner">
                01
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Shopping <span className="text-amber-500">Saving</span>
              </h1>
            </div>

            {/* Urdu Subtitle */}
            <p className="mb-4 text-2xl font-bold text-white dir-rtl">
              شاپنگ سیونگ
            </p>

            {/* Main Description */}
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Shop smart, save more and enjoy exclusive opportunities through our member-focused shopping saving program.
            </p>

            {/* Feature Badges */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500">
                  <Tag size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Exclusive Discounts</h4>
                  <p className="text-[10px] text-slate-400">Special member discounts and cashback</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500">
                  <ShoppingBag size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Daily Essentials</h4>
                  <p className="text-[10px] text-slate-400">Groceries, clothing, electronics & more</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Trusted Platform</h4>
                  <p className="text-[10px] text-slate-400">100% trusted and secure shopping experience</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:brightness-110 active:scale-95">
                <span>Join Now</span>
                <ChevronRight size={14} />
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3 text-xs font-bold text-white transition hover:border-amber-500 active:scale-95">
                <span>How It Works</span>
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-slate-950">
                  <Play size={8} className="fill-current ml-0.5" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: IMAGE ONLY */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-2xl">
              <img
                src="https://i.pinimg.com/1200x/dd/ba/95/ddba951d66f00304c81fe2cd50557c6f.jpg"
                alt="Shopping Cart with Bags"
                className="h-[400px] w-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroShopSaving;