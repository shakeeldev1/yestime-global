import {
  Tag,
  Coins,
  ShoppingBag,
  Gift,
  ShieldCheck,
  Lock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function BenefitsAndHowItWorks() {
  const benefits = [
    {
      icon: Tag,
      title: "Exclusive Discounts",
      description:
        "Get special member-only discounts across a wide range of products and services.",
    },
    {
      icon: Coins,
      title: "Cashback Rewards",
      description:
        "Earn valuable cashback and get more back from your everyday purchases.",
    },
    {
      icon: ShoppingBag,
      title: "Wide Variety",
      description:
        "Explore thousands of products across multiple shopping categories.",
    },
    {
      icon: Gift,
      title: "Special Offers",
      description:
        "Enjoy seasonal, festival and limited-time offers available to members.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Brands",
      description:
        "Shop confidently with trusted brands and verified partner sellers.",
    },
    {
      icon: Lock,
      title: "Safe & Secure",
      description:
        "Enjoy a simple, secure and hassle-free shopping experience.",
    },
  ];

  

  const whoCanJoin = [
    "Anyone who wants to save more while shopping.",
    "Individuals and families looking for better value.",
    "Members who want simple and hassle-free savings.",
    "Anyone ready to make everyday shopping more rewarding.",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#f8fafc] px-4 py-12 sm:px-8 lg:px-16 ">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#DFA42D]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            SECTION 1 — BENEFITS
        ====================================================== */}

        <div className="mb-24">

          {/* Section Label */}
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#DFA42D]" />

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B17F08]">
              <Sparkles size={15} />
              Benefits For You
            </div>

            <span className="h-px w-8 bg-[#DFA42D]" />
          </div>

          {/* Heading */}
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            More Reasons to
            <span className="text-[#DFA42D]"> Shop & Save</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-slate-500 sm:text-base">
            Enjoy exclusive benefits designed to make your everyday shopping
            experience smarter, easier and more rewarding.
          </p>

          {/* Benefits Grid */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#DFA42D]/40 hover:shadow-xl"
                >

                  {/* Number */}
                  <span className="absolute right-5 top-4 text-4xl font-black text-slate-100 transition group-hover:text-[#DFA42D]/10">
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DFA42D]/10 text-[#B17F08] transition duration-300 group-hover:bg-[#DFA42D] group-hover:text-slate-950">
                    <Icon size={25} strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="relative mb-2 text-base font-extrabold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="relative text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#DFA42D] transition-all duration-300 group-hover:w-full" />
                </div>
              );
            })}

          </div>
        </div>

      
        {/* =====================================================
            SECTION 3 — WHO CAN JOIN
        ====================================================== */}

        <div className="grid items-stretch gap-8 lg:grid-cols-12">

          {/* LEFT — WHO CAN JOIN */}
          <div className="relative overflow-hidden rounded-[2rem] bg-[#000000] p-7 text-white shadow-xl sm:p-10 lg:col-span-5">

            {/* Decorative Circle */}
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#DFA42D]/10 blur-2xl" />

            <div className="relative">

              <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#DFA42D]">
                <UsersIcon />
                Who Can Join?
              </div>

              <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                Savings Are
                <span className="block text-[#DFA42D]">
                  For Everyone.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                Whether you're shopping for yourself or your family, our
                program is designed to help you get more value from your
                everyday purchases.
              </p>

              <div className="mt-7 space-y-4">

                {whoCanJoin.map((text, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DFA42D] text-slate-950">
                      <CheckCircle2 size={14} />
                    </div>

                    <p className="text-sm leading-6 text-slate-300">
                      {text}
                    </p>
                  </div>
                ))}

              </div>

              <button className="mt-8 flex items-center gap-2 rounded-xl border border-[#DFA42D]/50 bg-[#DFA42D]/10 px-5 py-3 text-xs font-bold text-[#DFA42D] transition hover:bg-[#DFA42D] hover:text-slate-950">
                Become a Member
                <ArrowRight size={15} />
              </button>

            </div>
          </div>

          {/* RIGHT — IMAGE COLLAGE */}
          <div className="grid min-h-[420px] gap-4 sm:grid-cols-2 lg:col-span-7">

            {/* Large Image */}
            <div className="group relative overflow-hidden rounded-[2rem] sm:row-span-2">
              <img
                src="https://i.pinimg.com/736x/14/c3/6e/14c36edcba1c8933bf4c95502a5b408e.jpg"
                alt="Happy family"
                className="h-full min-h-[300px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="mb-2 inline-block rounded-full bg-[#DFA42D] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-950">
                  Family Savings
                </span>

                <h3 className="text-xl font-black text-white sm:text-2xl">
                  Better Shopping.
                  <span className="text-[#DFA42D]"> Better Living.</span>
                </h3>
              </div>
            </div>

            {/* Small Image 1 */}
            <div className="group relative min-h-[200px] overflow-hidden rounded-[2rem]">
              <img
                src="https://i.pinimg.com/736x/ec/91/c1/ec91c1290b7d7596d564f1774d618573.jpg"
                alt="Fresh grocery shopping"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/5" />

              <div className="absolute bottom-4 left-4 rounded-xl bg-black/60 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                Grocery Savings
              </div>
            </div>

            {/* Small Image 2 */}
            <div className="group relative min-h-[200px] overflow-hidden rounded-[2rem]">
              <img
                src="https://i.pinimg.com/736x/c4/19/ba/c419ba91a367dc4ee7de31219c3a6943.jpg"
                alt="Fashion shopping"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/5" />

              <div className="absolute bottom-4 left-4 rounded-xl bg-black/60 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                Fashion Deals
              </div>
            </div>

          </div>
        </div>

        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}

        <div className="mt-16 text-center">

          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[#DFA42D]/30 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 shadow-sm">
            <Sparkles size={15} className="text-[#DFA42D]" />
            Shop More
            <span className="text-[#DFA42D]">•</span>
            Save More
            <span className="text-[#DFA42D]">•</span>
            Live Better
          </div>

        </div>

      </div>
    </section>
  );
}

/* Small reusable icon for the Who Can Join heading */
function UsersIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default BenefitsAndHowItWorks;

