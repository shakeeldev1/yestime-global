import {
    Award,
    Globe2,
    HeartHandshake,
    Lightbulb,
    ShieldCheck,
    Sparkles,
    Users,
} from 'lucide-react'

const FEATURES = [
    {
        title: 'Global Networking',
        text: 'Connect directly with visionary entrepreneurs, experienced investors, and strategic industry partners hailing from over 30 countries worldwide to expand your international reach.',
        icon: Globe2,
        image: 'https://i.pinimg.com/1200x/dc/9f/79/dc9f79b5ac6faa63db23a192300553a6.jpg',
    },
    {
        title: 'Expert Insights',
        text: 'Learn from seasoned industry leaders and successful entrepreneurs who have scaled empires, sharing proven frameworks, hard-earned wisdom, and actionable market strategies.',
        icon: Lightbulb,
        image: 'https://i.pinimg.com/1200x/b9/5f/e6/b95fe60ff7b221ff36bfdb68b6c7b4e3.jpg',
    },
    {
        title: 'Secure & Inclusive',
        text: 'Experience a welcoming, professionally managed environment where diverse backgrounds are celebrated, ensuring everyone receives an equal opportunity to thrive and succeed securely.',
        icon: ShieldCheck,
        image: 'https://i.pinimg.com/1200x/b9/07/aa/b907aab49b75f80838fab3523b1a3ba4.jpg',
    },
    {
        title: 'Business Growth',
        text: 'Discover real, high-impact business opportunities, funding channels, and disruptive ideas specifically curated to dramatically accelerate your personal trajectory and corporate expansion.',
        icon: Users,
        image: 'https://i.pinimg.com/1200x/a4/74/7a/a4747a9d6ba4a858a620fd2c10fda2b9.jpg',
    },
    {
        title: 'Lasting Partnerships',
        text: 'Build deep, meaningful professional relationships that effortlessly evolve past casual networking events into long-term, profitable business collaborations and joint ventures.',
        icon: HeartHandshake,
        image: 'https://i.pinimg.com/1200x/ce/51/8e/ce518ea13256bc8411d7cc35f9c33b44.jpg',
    },
    {
        title: 'Exclusive Resources',
        text: 'Gain privileged entry to premium downloadable toolkits, proprietary strategic templates, and comprehensive market research reports designed to give your venture a competitive edge.',
        icon: Award,
        image: 'https://i.pinimg.com/736x/58/26/e0/5826e0b806d7a830fe2f2847ec06b305.jpg',
    },
]

export const EventsHighlights = () => {
    return (
        <section id="event-highlights" className="relative w-full overflow-hidden bg-slate-100/70 py-12 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Main Section Header */}
                <div className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-500/10 px-4 py-1.5 text-sm font-bold text-amber-700 shadow-xs">
                        <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                        <span className="uppercase tracking-widest">Why Attend</span>
                    </div>

                    <h2 className="mt-4 text-4xl font-black tracking-tight text-[#061832] sm:text-5xl">
                        Why Join Our <span className="text-[#E2A22C]">Events?</span>
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        Our events are carefully designed to create meaningful connections and provide actionable insights that transform your business and personal growth.
                    </p>
                </div>

                {/* 6 Cards Grid with increased gap (gap-8) */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map(({ title, text, icon: Icon, image }, index) => (
                        <div
                            key={title}
                            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#E2A22C] hover:shadow-xl hover:shadow-amber-500/10"
                        >
                            {/* Top border gradient accent on hover */}
                            <div className="absolute inset-x-0 top-0 z-20 h-1 bg-gradient-to-r from-transparent via-[#E2A22C] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="flex h-full flex-col">
                                {/* Image Showcase Header */}
                                <div className="relative h-48 w-full shrink-0 overflow-hidden bg-slate-100">
                                    <img
                                        src={image}
                                        alt={title}
                                        loading="lazy"
                                        className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                                    />
                                    {/* Subtle gradient overlay to make icons stand out */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#061832]/40 via-transparent to-transparent" />

                                    {/* Floating Icon Badge Inside Image (Bottom Right) */}
                                    <div className="absolute bottom-3 right-3 z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-[#061832] text-[#E2A22C] shadow-lg ring-2 ring-white/80 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E2A22C] group-hover:text-[#061832]">
                                        <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" aria-hidden="true" />
                                    </div>

                                    {/* Badge Number Index */}
                                    <div className="absolute top-3 left-3 z-10 rounded-md bg-[#061832]/80 px-2 py-1 text-[10px] font-bold tracking-wider text-[#E2A22C] backdrop-blur-xs">
                                        0{index + 1}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-1 flex-col justify-between p-5">
                                    <div>
                                        <h3 className="text-xl font-extrabold tracking-tight text-[#061832] transition-colors duration-300 group-hover:text-[#E2A22C]">
                                            {title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                            {text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EventsHighlights