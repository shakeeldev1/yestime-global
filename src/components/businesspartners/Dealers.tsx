import React from "react";
import {
  ArrowUpRight,
  Handshake,
  FileCheck,
  Network,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface DealerBenefit {
  icon: React.ElementType;
  title: string;
  image: string;
  description: string;
}

const Dealers: React.FC = () => {
  const { t } = useTranslation("business");

  const dealerBenefits: DealerBenefit[] = [
    {
      icon: Network,
      title: t("dealers.benefits.0.title"),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDj0SFOiYx5AjcQQ3SG01ME_gET6r7nY5kwoQ0wHpxv8swCiiPHSru7C0&s=10",
      description: t("dealers.benefits.0.description"),
    },
    {
      icon: TrendingUp,
      title: t("dealers.benefits.1.title"),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGp82fhEWXATVgJ0FQJNOL_7Kajz1pl9ksi3ER4jJFrQbIr7t0uvWPS5rH&s=10",
      description: t("dealers.benefits.1.description"),
    },
    {
      icon: ShieldCheck,
      title: t("dealers.benefits.2.title"),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7QGCuHT0zQz5jH7DSY4lM9XuZ23m5X8-nczwHXUqdxX-AoxNPoQls8BhX&s=10",
      description: t("dealers.benefits.2.description"),
    },
    {
      icon: FileCheck,
      title: t("dealers.benefits.3.title"),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZFZc30J4fo48tm10LxsqD7zE0lPqGU2D0J6Tiz_QYwiDmDUlGf4mwtTP&s=10",
      description: t("dealers.benefits.3.description"),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Glow */}
      <div className="absolute left-[-150px] top-[-100px] h-[400px] w-[400px] rounded-full bg-[#000000]/5 blur-[120px]" />
      <div className="absolute right-[-150px] bottom-[-100px] h-[400px] w-[400px] rounded-full bg-[#C6922B]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#C6922B]">
              {t("dealers.badge")}
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#000000] sm:text-5xl">
              {t("dealers.title.line1")}
              <span className="block text-[#C6922B]">
                {t("dealers.title.line2")}
              </span>
            </h2>
          </div>

          <p className="text-lg leading-8 text-[#55708F]">
            {t("dealers.intro")}
          </p>
        </div>

        {/* Dealer Banner */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-[#D9E3EF] bg-[#F8FAFC] p-8 shadow-xl shadow-[#000000]/5 sm:p-12 lg:p-14">
          {/* Decorative Glows */}
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#000000]/5 blur-3xl" />
          <div className="absolute -bottom-32 left-20 h-80 w-80 rounded-full bg-[#C6922B]/10 blur-3xl" />

          {/* Decorative Circle */}
          <div className="absolute right-[-100px] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full border border-[#C6922B]/10" />
          <div className="absolute right-[-50px] top-1/2 h-[250px] w-[250px] -translate-y-1/2 rounded-full border border-[#000000]/10" />

          <div className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* Intro */}
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#000000] text-[#C6922B] shadow-lg shadow-[#000000]/10">
                <Handshake size={31} />
              </div>

              <h3 className="mt-7 text-3xl font-bold text-[#000000] sm:text-4xl">
                {t("dealers.becomeHeading")}
              </h3>

              <p className="mt-5 leading-8 text-[#55708F]">
                {t("dealers.becomeText1")}
              </p>

              <p className="mt-4 leading-8 text-[#55708F]">
                {t("dealers.becomeText2")}
              </p>

              <div className="mt-7 rounded-2xl border border-[#C6922B]/20 bg-[#C6922B]/5 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#C6922B] shadow-sm">
                    <FileCheck size={20} />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#000000]">
                      {t("dealers.process.title")}
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-[#55708F]">
                      {t("dealers.process.text")}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact-us"
                className="group mt-8 inline-flex items-center gap-2 rounded-md bg-[#000000] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#000000]/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#C6922B] hover:shadow-[#C6922B]/20"
              >
              <span className="text-white">  {t("dealers.becomeCta")}</span>

                <ArrowUpRight
                  size={19}
                  className="transition-transform text-white duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* Benefits With Background Images */}
            <div className="grid gap-4 sm:grid-cols-2">
              {dealerBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="group relative overflow-hidden rounded-2xl border border-[#D9E3EF] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C6922B] hover:shadow-lg hover:shadow-[#000000]/10"
                    style={{
                      backgroundImage: `url(${benefit.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      minHeight: "250px",
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#000000]/80 transition-all duration-300 group-hover:bg-[#000000]/70" />

                    {/* Content */}
                    <div className="relative z-10 flex h-full flex-col p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-[#C6922B]/20 group-hover:text-[#C6922B]">
                        <Icon size={22} />
                      </div>

                      <h4 className="mt-5 text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#C6922B]">
                        {benefit.title}
                      </h4>

                      <p className="mt-3 text-sm leading-6 text-white/85">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Highlight */}
          <div className="relative mt-10 border-t border-[#D9E3EF] pt-8">
            <div className="grid gap-5 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <Handshake
                  size={20}
                  className="mt-1 shrink-0 text-[#C6922B]"
                />
                <div>
                  <h5 className="font-semibold text-[#000000]">
                    {t("dealers.highlights.0.title")}
                  </h5>
                  <p className="mt-1 text-sm leading-6 text-[#55708F]">
                    {t("dealers.highlights.0.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp
                  size={20}
                  className="mt-1 shrink-0 text-[#C6922B]"
                />
                <div>
                  <h5 className="font-semibold text-[#000000]">
                    {t("dealers.highlights.1.title")}
                  </h5>
                  <p className="mt-1 text-sm leading-6 text-[#55708F]">
                    {t("dealers.highlights.1.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={20}
                  className="mt-1 shrink-0 text-[#C6922B]"
                />
                <div>
                  <h5 className="font-semibold text-[#000000]">
                    {t("dealers.highlights.2.title")}
                  </h5>
                  <p className="mt-1 text-sm leading-6 text-[#55708F]">
                    {t("dealers.highlights.2.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dealers;
