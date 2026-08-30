import { Sparkles } from "lucide-react";
import EventCard from "./EventCard";

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";
import video5 from "../../assets/video5.mp4";
import video6 from "../../assets/video6.mp4";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;

  media: {
    type: "video";
    src: string;
  };

  category:
    | "seminar"
    | "workshop"
    | "networking"
    | "conference";

  description: string;
  isUpcoming?: boolean;
}

const UPCOMING_EVENTS: Event[] = [
  {
    id: "1",
    title: "Global Business Summit 2025",
    date: "September 15, 2025",
    time: "09:00 AM - 05:00 PM",
    location: "Dubai, UAE",
    attendees: 500,

    media: {
      type: "video",
      src: video1,
    },

    category: "conference",

    description:
      "Experience global business conversations, connect with industry leaders, and discover new opportunities shaping the future of international business.",

    isUpcoming: true,
  },

  {
    id: "2",
    title: "Entrepreneurship Workshop",
    date: "September 22, 2025",
    time: "10:00 AM - 04:00 PM",
    location: "Mumbai, India",
    attendees: 200,

    media: {
      type: "video",
      src: video2,
    },

    category: "workshop",

    description:
      "Explore practical entrepreneurship strategies, business ideas, and valuable insights designed to help you build and scale a successful business.",

    isUpcoming: true,
  },

  {
    id: "3",
    title: "Financial Insights Seminar",
    date: "October 5, 2025",
    time: "02:00 PM - 05:00 PM",
    location: "Singapore",
    attendees: 300,

    media: {
      type: "video",
      src: video3,
    },

    category: "seminar",

    description:
      "Gain valuable financial perspectives, explore smart investment approaches, and learn how strategic financial decisions can support long-term growth.",

    isUpcoming: true,
  },

  {
    id: "4",
    title: "Women Leaders Networking Brunch",
    date: "October 12, 2025",
    time: "10:30 AM - 01:00 PM",
    location: "London, UK",
    attendees: 150,

    media: {
      type: "video",
      src: video4,
    },

    category: "networking",

    description:
      "Meet inspiring women leaders, exchange ideas, share experiences, and build meaningful professional relationships in an engaging environment.",

    isUpcoming: true,
  },

  {
    id: "5",
    title: "Digital Transformation Forum",
    date: "October 20, 2025",
    time: "09:00 AM - 06:00 PM",
    location: "New York, USA",
    attendees: 400,

    media: {
      type: "video",
      src: video5,
    },

    category: "conference",

    description:
      "Discover how digital innovation, emerging technologies, and modern business solutions are transforming organizations around the world.",

    isUpcoming: true,
  },

  {
    id: "6",
    title: "Partnership & Growth Summit",
    date: "November 1, 2025",
    time: "08:30 AM - 05:30 PM",
    location: "Tokyo, Japan",
    attendees: 350,

    media: {
      type: "video",
      src: video6,
    },

    category: "conference",

    description:
      "Explore strategic partnerships, connect with ambitious business leaders, and discover opportunities that can accelerate sustainable business growth.",

    isUpcoming: true,
  },
];

const UpcomingEvents = () => {
  return (
    <section
      id="upcoming-events"
      className="
        relative
        w-full
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-slate-50
        to-slate-100
        py-10
        md:py-16
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-amber-300
              bg-amber-50
              px-4
              py-1.5
              text-xs
              font-bold
              text-amber-700
              shadow-sm
            "
          >
            <Sparkles
              size={14}
              className="text-[#E2A22C]"
            />

            <span className="uppercase tracking-[0.15em]">
              Featured Events
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-4
              text-3xl
              font-black
              tracking-tight
              text-[#061832]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Global Events
          </h2>

          {/* Description */}
          <p
            className="
              mt-3
              max-w-2xl
              text-xs
              font-medium
              leading-6
              text-slate-600
              sm:text-sm
              sm:leading-7
            "
          >
            Explore our featured events through engaging videos,
            discover new opportunities, and connect with global
            business leaders, entrepreneurs, and professionals.
          </p>
        </div>

        {/* ================= EVENTS GRID ================= */}
        <div
          className="
            mt-10
            grid
            gap-6
            sm:grid-cols-2
            lg:mt-12
            lg:grid-cols-3
          "
        >
          {UPCOMING_EVENTS.map((event) => (
            <EventCard
              key={event.id}
              {...event}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;