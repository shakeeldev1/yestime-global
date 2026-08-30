import { useEffect, useRef, useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  X,
} from "lucide-react";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  image?: string;

  media?: {
    type: "image" | "video";
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

const categoryStyles = {
  seminar: {
    badge:
      "bg-blue-100 text-blue-500 border-blue-300",
  },

  workshop: {
    badge:
      "bg-purple-100 text-purple-500 border-purple-300",
  },

  networking: {
    badge:
      "bg-green-100 text-green-500 border-green-300",
  },

  conference: {
    badge:
      "bg-amber-100 text-amber-500 border-amber-300",
  },
};

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
  title: string;
}

const VideoModal = ({
  isOpen,
  onClose,
  videoSrc,
  title,
}: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoSrc) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-[#061832] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <h3 className="truncate pr-4 text-base font-bold text-white sm:text-lg">
            {title}
          </h3>

          <button
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-[#E2A22C] hover:text-[#061832]"
            aria-label="Close video"
          >
            <X size={19} />
          </button>
        </div>

        {/* Video */}
        <div className="flex aspect-video w-full items-center justify-center bg-black">
          <video
            ref={videoRef}
            src={videoSrc}
            className="h-full w-full object-contain"
            controls
            autoPlay
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

const EventCard = ({
  title,
  date,
  time,
  location,
  attendees,
  image,
  media,
  category,
  description,
  isUpcoming = false,
}: EventCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hasVideo = media?.type === "video" && media.src;

  const handleVideoClick = () => {
    if (hasVideo) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <article
        className="
          group
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white
          shadow-md
          transition-all
          duration-300
          hover:-translate-y-1.5
          hover:border-[#E2A22C]
          hover:shadow-xl
        "
      >
        {/* Top Hover Line */}
        <div
          className="
            absolute
            left-0
            right-0
            top-0
            z-30
            h-1
            bg-[#E2A22C]
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />

        {/* ================= MEDIA ================= */}
        <div
          className="
            relative
            h-44
            w-full
            overflow-hidden
            bg-slate-900
            sm:h-48
          "
          onClick={handleVideoClick}
        >
          {/* VIDEO */}
          {hasVideo ? (
            <video
              src={media.src}
              className="
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-700
                group-hover:scale-105
              "
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : image ? (
            /* IMAGE FALLBACK */
            <img
              src={image}
              alt={title}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-100">
              <span className="text-sm text-slate-400">
                Event Media
              </span>
            </div>
          )}

          {/* Dark Gradient */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/60
              via-black/10
              to-black/10
            "
          />

          {/* Upcoming Badge */}
          {isUpcoming && (
            <div
              className="
                absolute
                left-4
                top-4
                z-20
                rounded-full
                border
                border-[#E2A22C]
                bg-white/90
                px-3
                py-1.5
                text-[10px]
                font-extrabold
                uppercase
                tracking-wider
                text-[#E2A22C]
                shadow-sm
                backdrop-blur-sm
              "
            >
              Upcoming
            </div>
          )}

          {/* Category */}
          {category && (
            <div
              className={`
                absolute
                right-4
                top-4
                z-20
                rounded-full
                border
                px-3
                py-1.5
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                ${categoryStyles[category].badge}
              `}
            >
              {category}
            </div>
          )}

          {/* VIDEO PLAY BUTTON */}
          {hasVideo && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleVideoClick();
              }}
              className="
                absolute
                left-1/2
                top-1/2
                z-20
                flex
                h-16
                w-16
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-[#E2A22C]
                shadow-xl
                ring-4
                ring-white/20
                transition-all
                duration-300
                hover:scale-110
                hover:bg-[#f0b238]
                active:scale-95
              "
              aria-label={`Play ${title}`}
            >
              <svg
                className="ml-1 h-7 w-7 fill-[#061832]"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}

          {/* Bottom Video Label */}
          {hasVideo && (
            <div
              className="
                absolute
                bottom-3
                left-4
                z-20
                rounded-full
                bg-black/40
                px-2.5
                py-1
                text-[9px]
                font-semibold
                uppercase
                tracking-wider
                text-white
                backdrop-blur-sm
              "
            >
              Watch Video
            </div>
          )}
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex flex-1 flex-col p-4 sm:p-5">
          {/* Title */}
          <h3
            className="
              text-base
              font-bold
              leading-snug
              text-[#061832]
              transition-colors
              duration-300
              group-hover:text-[#E2A22C]
              sm:text-lg
            "
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="
              mt-2
              line-clamp-2
              flex-1
              text-xs
              leading-5
              text-slate-600
              sm:text-sm
              sm:leading-6
            "
          >
            {description}
          </p>

          {/* Details */}
          <div
            className="
              mt-4
              space-y-3
              border-t
              border-slate-100
              pt-4
            "
          >
            {/* Date + Time */}
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-amber-50
                "
              >
                <Calendar
                  className="text-[#E2A22C]"
                  size={16}
                />
              </div>

              <div className="min-w-0">
                <div className="truncate text-xs font-bold text-[#061832] sm:text-sm">
                  {date}
                </div>

                <div className="mt-0.5 flex items-center gap-1 text-[10px] text-slate-500 sm:text-xs">
                  <Clock size={11} />
                  <span className="truncate">
                    {time}
                  </span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-blue-50
                "
              >
                <MapPin
                  className="text-blue-600"
                  size={16}
                />
              </div>

              <div className="truncate text-xs font-medium text-[#061832] sm:text-sm">
                {location}
              </div>
            </div>

            {/* Attendees */}
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-green-50
                "
              >
                <Users
                  className="text-green-600"
                  size={16}
                />
              </div>

              <div className="text-xs sm:text-sm">
                <span className="font-bold text-[#061832]">
                  {attendees}
                </span>

                <span className="ml-1 text-slate-500">
                  attendees
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ================= VIDEO MODAL ================= */}
      {hasVideo && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          videoSrc={media.src}
          title={title}
        />
      )}
    </>
  );
};

export default EventCard;