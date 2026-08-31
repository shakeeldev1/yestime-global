import React from "react";
import {
  Eye,
  Target,
  UsersRound,
  BarChart3,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const VisionMission: React.FC = () => {
  const { t } = useTranslation("vision");

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px]">

        {/* Section Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d69b22]">
            {t("visionMission.eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#132033] md:text-4xl">
            {t("visionMission.headingLine1")}{" "}
            <span className="text-[#d69b22]">
              {t("visionMission.headingHighlight")}
            </span>
          </h2>
        </div>

        {/* Side-by-Side Cards Container */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          {/* ================= VISION CARD ================= */}
          <div className="flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            {/* Image on Left / Top */}
            <div
              className="min-h-[340px] sm:min-h-[400px] sm:w-[45%] bg-cover bg-center"
              style={{ backgroundImage: "url('/vs2.png')" }}
            />
            {/* Content on Right / Bottom */}
            <div className="flex flex-col justify-between p-7 sm:p-9 sm:w-[55%]">
              <div>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#071a31] p-3">
                    <Eye className="h-6 w-6 text-[#e5aa2d]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#111c2c]">
                      {t("visionMission.vision.title")}
                    </h3>
                    <div className="mt-1.5 h-[2px] w-10 bg-[#e5aa2d]" />
                  </div>
                </div>

                <p className="mt-5 text-sm sm:text-base leading-7 text-gray-600">
                  {t("visionMission.vision.description")}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3.5 rounded-xl border border-gray-100 bg-gray-50 p-4">
                <UsersRound className="h-6 w-6 shrink-0 text-[#d69b22]" />
                <p className="text-sm text-gray-600">
                  {t("visionMission.vision.highlight")}
                </p>
              </div>
            </div>
          </div>


          {/* ================= MISSION CARD ================= */}
          <div className="flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-gray-200 bg-[#07172c] text-white shadow-md">
            {/* Image on Left / Top */}
            <div
              className="min-h-[340px] sm:min-h-[400px] sm:w-[45%] bg-cover bg-center"
              style={{ backgroundImage: "url('/vs1.png')" }}
            />
            {/* Content on Right / Bottom */}
            <div className="flex flex-col justify-between p-7 sm:p-9 sm:w-[55%]">
              <div>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#172c48] p-3">
                    <Target className="h-6 w-6 text-[#e5aa2d]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {t("visionMission.mission.title")}
                    </h3>
                    <div className="mt-1.5 h-[2px] w-10 bg-[#e5aa2d]" />
                  </div>
                </div>

                <p className="mt-5 text-sm sm:text-base leading-7 text-gray-300">
                  {t("visionMission.mission.description")}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3.5 rounded-xl border border-white/10 bg-white/5 p-4">
                <BarChart3 className="h-6 w-6 shrink-0 text-[#e5aa2d]" />
                <p className="text-sm text-gray-300">
                  {t("visionMission.mission.highlight")}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;