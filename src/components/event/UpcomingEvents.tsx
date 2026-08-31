import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
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

const UpcomingEvents = () => {
  const { t } = useTranslation("event");

  const UPCOMING_EVENTS: Event[] = [
    {
      id: "1",
      title: t("upcoming.events.0.title"),
      date: t("upcoming.events.0.date"),
      time: t("upcoming.events.0.time"),
      location: t("upcoming.events.0.location"),
      attendees: 500,

      media: {
        type: "video",
        src: video1,
      },

      category: "conference",

      description: t("upcoming.events.0.description"),

      isUpcoming: true,
    },

    {
      id: "2",
      title: t("upcoming.events.1.title"),
      date: t("upcoming.events.1.date"),
      time: t("upcoming.events.1.time"),
      location: t("upcoming.events.1.location"),
      attendees: 200,

      media: {
        type: "video",
        src: video2,
      },

      category: "workshop",

      description: t("upcoming.events.1.description"),

      isUpcoming: true,
    },

    {
      id: "3",
      title: t("upcoming.events.2.title"),
      date: t("upcoming.events.2.date"),
      time: t("upcoming.events.2.time"),
      location: t("upcoming.events.2.location"),
      attendees: 300,

      media: {
        type: "video",
        src: video3,
      },

      category: "seminar",

      description: t("upcoming.events.2.description"),

      isUpcoming: true,
    },

    {
      id: "4",
      title: t("upcoming.events.3.title"),
      date: t("upcoming.events.3.date"),
      time: t("upcoming.events.3.time"),
      location: t("upcoming.events.3.location"),
      attendees: 150,

      media: {
        type: "video",
        src: video4,
      },

      category: "networking",

      description: t("upcoming.events.3.description"),

      isUpcoming: true,
    },

    {
      id: "5",
      title: t("upcoming.events.4.title"),
      date: t("upcoming.events.4.date"),
      time: t("upcoming.events.4.time"),
      location: t("upcoming.events.4.location"),
      attendees: 400,

      media: {
        type: "video",
        src: video5,
      },

      category: "conference",

      description: t("upcoming.events.4.description"),

      isUpcoming: true,
    },

    {
      id: "6",
      title: t("upcoming.events.5.title"),
      date: t("upcoming.events.5.date"),
      time: t("upcoming.events.5.time"),
      location: t("upcoming.events.5.location"),
      attendees: 350,

      media: {
        type: "video",
        src: video6,
      },

      category: "conference",

      description: t("upcoming.events.5.description"),

      isUpcoming: true,
    },
  ];

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
              {t("upcoming.badge")}
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
            {t("upcoming.heading")}
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
            {t("upcoming.description")}
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
