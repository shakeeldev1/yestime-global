import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

interface DropdownItem {
  name: string;
  path: string;
}

interface NavSection {
  id: string;
  title: string;
  items?: DropdownItem[];
  path?: string;
}

const LANGUAGE_OPTIONS = [
  { code: "en", label: "English" },
  { code: "ur", label: "Urdu" },
] as const;

/* ================= DESKTOP HOVER DROPDOWN ================= */

const Dropdown = ({
  title,
  items,
  onClose,
}: {
  title: string;
  items: DropdownItem[];
  onClose: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isParentActive = items.some((item) => item.path === location.pathname);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={`flex items-center gap-1.5 px-3.5 py-6 text-base font-semibold transition-colors duration-200 ${isParentActive || isOpen ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
          }`}
      >
        {title}
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180 text-[#D4AF37]" : ""}`}
        />
      </button>

      {/* DROPDOWN MENU */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full w-60 overflow-hidden rounded-xl border border-[#D4AF37]/30 bg-[#0a0a0a] shadow-2xl backdrop-blur-md transition-all duration-200 ${isOpen
          ? "visible opacity-100 translate-y-0"
          : "invisible opacity-0 -translate-y-2 pointer-events-none"
          }`}
      >
        {items.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => {
                setIsOpen(false);
                onClose();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`block px-5 py-3.5 text-base transition-colors duration-200 ${active
                ? "bg-[#D4AF37]/20 text-[#D4AF37] font-semibold"
                : "text-gray-200 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

/* ================= MOBILE ACCORDION DROPDOWN ================= */

const MobileDropdown = ({
  title,
  items,
  isOpen,
  onToggle,
  onNavigate,
}: {
  title: string;
  items: DropdownItem[];
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) => {
  const location = useLocation();
  const isParentActive = items.some((item) => item.path === location.pathname);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className={`flex w-full items-center justify-between py-3.5 text-base font-semibold transition-colors ${isParentActive ? "text-[#D4AF37]" : "text-white"
          }`}
      >
        {title}
        <ChevronDown
          size={20}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180 text-[#D4AF37]" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="mb-2 space-y-1 rounded-lg bg-white/5 p-1.5">
          {items.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  onNavigate();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`block rounded-md px-4 py-3 text-base transition-colors ${active ? "bg-[#D4AF37]/20 text-[#D4AF37] font-medium" : "text-gray-300 hover:text-[#D4AF37]"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

/* ================= MAIN NAVBAR ================= */

const Navbar = () => {
  const { t, i18n } = useTranslation("common");
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const location = useLocation();

  const currentLanguage =
    LANGUAGE_OPTIONS.find((language) => i18n.language?.startsWith(language.code)) ??
    LANGUAGE_OPTIONS[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLanguageMenuOpen(false);
  };

  const NAV_SECTIONS: NavSection[] = [
    {
      id: "programs",
      title: t("nav.programs"),
      items: [
        { name: t("nav.items.ourPrograms"), path: "/OurPrograms" },
        { name: t("nav.items.howItWorks"), path: "/how-it-works" },
      ],
    },
    {
      id: "business",
      title: t("nav.business"),
      items: [
        { name: t("nav.items.businessPartners"), path: "/business-partners" },
        { name: t("nav.items.globalExpansion"), path: "/global-expansion" },
      ],
    },
    {
      id: "finance",
      title: t("nav.finance"),
      items: [
        { name: t("nav.items.investors"), path: "/investors" },
        { name: t("nav.items.banksFinancial"), path: "/banks-financial" },
      ],
    },
    {
      id: "events",
      title: t("nav.events"),
      path: "/events",
    },
    {
      id: "support",
      title: t("nav.support"),
      items: [
        { name: t("nav.items.customerSupport"), path: "/customer" },
        { name: t("nav.items.faqs"), path: "/faqs" },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = () => {
    closeMenu();
    scrollToTop();
  };

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown((prev) => (prev === name ? null : name));
  };

  const closeMenu = () => {
    setOpenMobileDropdown(null);
    setMobileMenu(false);
    setLanguageMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#D4AF37]/30 bg-black text-white shadow-xl backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1450px] items-center justify-between px-5 md:px-8 lg:px-10">

        {/* LEFT: LOGO */}
        <div className="flex-1 flex justify-start">
          <Link to="/" onClick={handleNavigate} className="flex items-center">
            <img
              src="/logo.png"
              alt="Yes Time Global"
              className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* CENTER: DESKTOP MENU */}
        <div className="hidden items-center justify-center gap-1 lg:flex flex-none">
          <Link
            to="/"
            onClick={handleNavigate}
            className={`px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${isActive("/") ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
              }`}
          >
            {t("nav.home")}
          </Link>

          <Link
            to="/about"
            onClick={handleNavigate}
            className={`px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${isActive("/about") ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
              }`}
          >
            {t("nav.about")}
          </Link>



          {NAV_SECTIONS.map((section) => {
            if (!section.items || section.items.length === 0) {
              return (
                <Link
                  key={section.id}
                  to={section.path || "/"}
                  onClick={handleNavigate}
                  className={`px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${isActive(section.path || "/") ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"}`}
                >
                  {section.title}
                </Link>
              )
            }

            return (
              <Dropdown
                key={section.id}
                title={section.title}
                items={section.items}
                onClose={closeMenu}
              />
            )
          })}
        </div>

        {/* RIGHT: CONTACT & LANGUAGE */}
        <div className="hidden items-center justify-end gap-4 lg:flex flex-1">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLanguageMenuOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-full border border-[#D4AF37]/60 bg-white/5 px-3 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#F5E6A6] transition-all duration-200 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
              aria-label={t("nav.selectLanguage")}
            >
              <span>{currentLanguage.code}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${languageMenuOpen ? "rotate-180" : ""}`}
              />
            </button>

            {languageMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-36 overflow-hidden rounded-xl border border-[#D4AF37]/30 bg-[#0a0a0a] shadow-2xl">
                {LANGUAGE_OPTIONS.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    onClick={() => changeLanguage(language.code)}
                    className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm font-medium transition-colors ${currentLanguage.code === language.code
                      ? "bg-[#D4AF37]/20 text-[#D4AF37]"
                      : "text-gray-200 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                      }`}
                  >
                    <span>{t(`languages.${language.code}`)}</span>
                    <span className="text-[10px] uppercase tracking-[0.18em]">{language.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact-us"
            onClick={handleNavigate}
            className={`rounded-full border border-[#D4AF37] px-4 text-nowrap py-2.5 text-sm font-bold transition-all duration-300 ${isActive("/contact-us")
              ? "bg-[#D4AF37] text-black"
              : "text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
              }`}
          >
            {t("nav.contactUs")}
          </Link>
        </div>

        {/* MOBILE TRIGGER */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label={t("nav.toggleMenu")}
        >
          {mobileMenu ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-[#D4AF37]/20 bg-black px-5 pb-6 pt-2 lg:hidden">
          <Link
            to="/"
            onClick={handleNavigate}
            className={`block border-b border-white/10 py-3.5 text-base font-semibold ${isActive("/") ? "text-[#D4AF37]" : "text-white"
              }`}
          >
            {t("nav.home")}
          </Link>

          <Link
            to="/about"
            onClick={handleNavigate}
            className={`block border-b border-white/10 py-3.5 text-base font-semibold ${isActive("/about") ? "text-[#D4AF37]" : "text-white"
              }`}
          >
            {t("nav.about")}
          </Link>

          <Link
            to="/events"
            onClick={handleNavigate}
            className={`block border-b border-white/10 py-3.5 text-base font-semibold ${isActive("/events") ? "text-[#D4AF37]" : "text-white"
              }`}
          >
            {t("nav.events")}
          </Link>

          {NAV_SECTIONS.map((section) => {
            if (!section.items || section.items.length === 0) {
              return (
                <Link
                  key={section.id}
                  to={section.path || "/"}
                  onClick={handleNavigate}
                  className={`block border-b border-white/10 py-3.5 text-base font-semibold ${isActive(section.path || "/") ? "text-[#D4AF37]" : "text-white"}`}
                >
                  {section.title}
                </Link>
              )
            }

            return (
              <MobileDropdown
                key={section.id}
                title={section.title}
                items={section.items}
                isOpen={openMobileDropdown === section.id}
                onToggle={() => toggleMobileDropdown(section.id)}
                onNavigate={closeMenu}
              />
            )
          })}

          <div className="mt-5 rounded-xl border border-[#D4AF37]/20 bg-white/5 p-3">
            <div className="relative">
              <button
                type="button"
                onClick={() => setLanguageMenuOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-lg border border-[#D4AF37]/40 bg-black px-4 py-3 text-left text-base font-semibold text-[#F5E6A6]"
              >
                <span>{t("nav.language")}</span>
                <span className="flex items-center gap-2">
                  <span className="uppercase tracking-[0.2em]">{currentLanguage.code}</span>
                  <ChevronDown size={18} className={`transition-transform duration-200 ${languageMenuOpen ? "rotate-180" : ""}`} />
                </span>
              </button>

              {languageMenuOpen && (
                <div className="mt-2 overflow-hidden rounded-lg border border-[#D4AF37]/30 bg-[#0a0a0a] shadow-xl">
                  {LANGUAGE_OPTIONS.map((language) => (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() => changeLanguage(language.code)}
                      className={`flex w-full items-center justify-between px-4 py-3 text-left text-base transition-colors ${currentLanguage.code === language.code
                        ? "bg-[#D4AF37]/20 text-[#D4AF37]"
                        : "text-gray-200 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                        }`}
                    >
                      <span>{t(`languages.${language.code}`)}</span>
                      <span className="uppercase tracking-[0.15em]">{language.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <Link
            to="/contact-us"
            onClick={handleNavigate}
            className="mt-6 block rounded-full bg-[#D4AF37] px-6 py-3.5 text-center text-base font-bold text-black transition-colors hover:bg-[#c5a06a]"
          >
            {t("nav.contactUs")}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
