import {
  ShieldCheck,
  LockKeyhole,
  Headphones,
  Globe2,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Secure & Reliable",
    text: "Your money, data, and progress are handled with care.",
    image: "https://i.pinimg.com/736x/04/40/26/0440261e033e3914da751f1d07a44fc6.jpg",
  },
  {
    icon: Users,
    number: "02",
    title: "Inclusive Community",
    text: "Find a welcoming network where every member can grow.",
    image: "https://i.pinimg.com/736x/d6/68/0b/d6680b6bd7072943f8c0bb9bf09d32ac.jpg",
  },
  {
    icon: LockKeyhole,
    number: "03",
    title: "Innovation Driven",
    text: "Better tools and smarter ways to move forward, every day.",
    image: "https://i.pinimg.com/736x/80/ec/94/80ec94ee4d43989dab3bb436a801f08d.jpg",
  },
  {
    icon: Globe2,
    number: "04",
    title: "Global Impact",
    text: "Access opportunities designed to create lasting change.",
    image: "https://i.pinimg.com/736x/c7/c3/9d/c7c39d0d81332644b52e98500834b0b2.jpg",
  },
  {
    icon: Headphones,
    number: "05",
    title: "Member Focused",
    text: "Your goals set the direction. Our support helps you get there.",
    image: "https://i.pinimg.com/736x/e3/88/7e/e3887ea6ed6ea175af9550ffd639564b.jpg",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#071426] px-5 py-20 text-white md:px-10 md:py-24 lg:px-16">
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full border border-[#e6aa33]/15" />
      <div className="absolute bottom-[-15rem] left-[-10rem] h-96 w-96 rounded-full bg-[#12345a]/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e6aa33]">
            Why join YES TIME GLOBAL?
          </p>
          <h2 className="mt-4 font-[Playfair_Display] text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Built for your next
            <span className="block italic text-[#f4c75e]">chapter of growth.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#b9c5d5] md:text-lg">
            One transparent platform to grow with confidence, connect globally,
            and turn ambition into progress.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="group overflow-hidden border border-white/10 bg-white/[0.06] transition duration-300 hover:-translate-y-2 hover:border-[#e6aa33]/70 hover:bg-white/[0.1]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={reason.image}
                    alt=""
                    className="h-full w-full object-cover grayscale-[30%] transition duration-500 group-hover:scale-110 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 text-xs font-bold tracking-[0.2em] text-[#f4c75e]">
                    {reason.number}
                  </span>
                </div>
                <div className="p-5">
                  <Icon size={22} strokeWidth={1.6} className="text-[#f4c75e]" />
                  <h3 className="mt-5 text-lg font-semibold leading-snug">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#b9c5d5]">{reason.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;