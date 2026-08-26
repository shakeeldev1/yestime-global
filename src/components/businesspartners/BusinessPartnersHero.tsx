import React from "react";
import { ArrowDown, Handshake } from "lucide-react";

const BusinessPartnersHero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">

          {/* Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-medium text-amber-300">
              <Handshake size={18} />
              Business Partnership
            </div>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Grow Your Business
              <span className="block text-amber-400">
                With Us
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              We believe strong partnerships create stronger businesses.
              Join our growing network of shops, showrooms and dealers
              and become a valuable part of our business ecosystem.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-md bg-amber-400 px-7 py-3.5 font-semibold text-slate-950 transition duration-300 hover:bg-amber-300">
                Become a Partner
              </button>

              <button className="rounded-md border border-white/20 px-7 py-3.5 font-semibold text-white transition duration-300 hover:border-amber-400 hover:text-amber-400">
                Explore Partnership
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-5">

                {/* Shops */}
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/40">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                    <span className="text-xl font-bold">01</span>
                  </div>

                  <h3 className="text-lg font-semibold">
                    Shops
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Partner with us through retail shops.
                  </p>
                </div>

                {/* Showrooms */}
                <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/40">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                    <span className="text-xl font-bold">02</span>
                  </div>

                  <h3 className="text-lg font-semibold">
                    Showrooms
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Build a stronger showroom partnership.
                  </p>
                </div>

                {/* Dealers */}
                <div className="-mt-2 rounded-2xl border border-white/10 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/40">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                    <span className="text-xl font-bold">03</span>
                  </div>

                  <h3 className="text-lg font-semibold">
                    Dealers
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Join our professional dealer network.
                  </p>
                </div>

                {/* Partnership */}
                <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-slate-950">
                    <Handshake size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-amber-300">
                    Strong Partnership
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Together we create long-term success.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <ArrowDown
          className="animate-bounce text-amber-400"
          size={22}
        />
      </div>
    </section>
  );
};

export default BusinessPartnersHero;