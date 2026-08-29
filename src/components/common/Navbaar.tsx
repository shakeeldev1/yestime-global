import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

interface DropdownItem {
  name: string;
  path: string;
}

interface NavSection {
  id: string;
  title: string;
  items: DropdownItem[];
}

const NAV_SECTIONS: NavSection[] = [
  {
    id: "programs",
    title: "Programs",
    items: [
      { name: "Our Programs", path: "/OurPrograms" },
      { name: "How It Works", path: "/how-it-works" },
    ],
  },
  {
    id: "business",
    title: "Business",
    items: [
      { name: "Business Partners", path: "/business-partners" },
      { name: "Global Expansion", path: "/global-expansion" },
    ],
  },
  {
    id: "finance",
    title: "Finance",
    items: [
      { name: "Investors", path: "/investors" },
      { name: "Banks & Financial", path: "/banks-financial" },
    ],
  },
  {
    id: "support",
    title: "Support",
    items: [
      { name: "Customer Support", path: "/customer" },
      { name: "FAQs", path: "/faqs" },
    ],
  },
];

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
        className={`flex items-center gap-1.5 px-3.5 py-6 text-base font-semibold transition-colors duration-200 ${
          isParentActive || isOpen ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
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
        className={`absolute left-1/2 -translate-x-1/2 top-full w-60 overflow-hidden rounded-xl border border-[#D4AF37]/30 bg-[#0a0a0a] shadow-2xl backdrop-blur-md transition-all duration-200 ${
          isOpen
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
              className={`block px-5 py-3.5 text-base transition-colors duration-200 ${
                active
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
        className={`flex w-full items-center justify-between py-3.5 text-base font-semibold transition-colors ${
          isParentActive ? "text-[#D4AF37]" : "text-white"
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
                className={`block rounded-md px-4 py-3 text-base transition-colors ${
                  active ? "bg-[#D4AF37]/20 text-[#D4AF37] font-medium" : "text-gray-300 hover:text-[#D4AF37]"
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
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

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
        <div className="hidden items-center justify-center gap-1.5 lg:flex flex-none">
          <Link
            to="/"
            onClick={handleNavigate}
            className={`px-3.5 py-2 text-base font-semibold transition-colors duration-200 ${
              isActive("/") ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={handleNavigate}
            className={`px-3.5 py-2 text-base font-semibold transition-colors duration-200 ${
              isActive("/about") ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
            }`}
          >
            About
          </Link>

          {NAV_SECTIONS.map((section) => (
            <Dropdown
              key={section.id}
              title={section.title}
              items={section.items}
              onClose={closeMenu}
            />
          ))}
        </div>

        {/* RIGHT: CONTACT & LEGAL */}
        <div className="hidden items-center justify-end gap-4 lg:flex flex-1">
          <Link
            to="/contact-us"
            onClick={handleNavigate}
            className={`rounded-full border border-[#D4AF37] px-6 py-2.5 text-base font-bold transition-all duration-300 ${
              isActive("/contact-us")
                ? "bg-[#D4AF37] text-black"
                : "text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
            }`}
          >
            Contact Us
          </Link>

          <Link
            to="/legal-pages"
            onClick={handleNavigate}
            className={`px-3 py-2 text-base font-semibold transition-colors duration-200 ${
              isActive("/legal-pages") ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"
            }`}
          >
            Legal
          </Link>
        </div>

        {/* MOBILE TRIGGER */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Toggle menu"
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
            className={`block border-b border-white/10 py-3.5 text-base font-semibold ${
              isActive("/") ? "text-[#D4AF37]" : "text-white"
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={handleNavigate}
            className={`block border-b border-white/10 py-3.5 text-base font-semibold ${
              isActive("/about") ? "text-[#D4AF37]" : "text-white"
            }`}
          >
            About
          </Link>

          {NAV_SECTIONS.map((section) => (
            <MobileDropdown
              key={section.id}
              title={section.title}
              items={section.items}
              isOpen={openMobileDropdown === section.id}
              onToggle={() => toggleMobileDropdown(section.id)}
              onNavigate={closeMenu}
            />
          ))}

          <Link
            to="/contact-us"
            onClick={handleNavigate}
            className="mt-6 block rounded-full bg-[#D4AF37] px-6 py-3.5 text-center text-base font-bold text-black transition-colors hover:bg-[#c5a06a]"
          >
            Contact Us
          </Link>

          <Link
            to="/legal-pages"
            onClick={handleNavigate}
            className="mt-2 block py-3.5 text-center text-base font-medium text-gray-300 transition-colors hover:text-[#D4AF37]"
          >
            Legal Pages
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;