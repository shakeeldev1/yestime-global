import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

interface DropdownItem {
  name: string;
  path: string;
}

interface DropdownProps {
  title: string;
  items: DropdownItem[];
  isOpen: boolean;
  onToggle: () => void;
}

const Dropdown = ({
  title,
  items,
  isOpen,
  onToggle,
}: DropdownProps) => {
  const location = useLocation();

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white transition duration-300 hover:text-[#c5a06a]"
      >
        {title}

        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-lg border border-[#c5a06a]/30 bg-[#071a31] shadow-2xl">
          {items.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-5 py-3 text-sm transition duration-300 ${
                  active
                    ? "bg-[#c5a06a]/15 text-[#c5a06a]"
                    : "text-white hover:bg-[#c5a06a]/10 hover:pl-7 hover:text-[#c5a06a]"
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

const Navbaar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const location = useLocation();

  const toggleDropdown = (name: string) => {
    setOpenDropdown(
      openDropdown === name ? null : name
    );
  };

  const closeMenu = () => {
    setOpenDropdown(null);
    setMobileMenu(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const aboutItems: DropdownItem[] = [
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Vision & Mission",
      path: "/vision-mission",
    },
  ];

  const programItems: DropdownItem[] = [
    {
      name: "Our Programs",
      path: "/our-programs",
    },
    {
      name: "How It Works",
      path: "/how-it-works",
    },
  ];

  const businessItems: DropdownItem[] = [
    {
      name: "Business Partners",
      path: "/business-partners",
    },
    {
      name: "Global Expansion",
      path: "/global-expansion",
    },
  ];

  const financeItems: DropdownItem[] = [
    {
      name: "Investors",
      path: "/investors",
    },
    {
      name: "Banks & Financial",
      path: "/banks-financial",
    },
  ];

  const supportItems: DropdownItem[] = [
    {
      name: "Customer",
      path: "/customer",
    },
    {
      name: "FAQs",
      path: "/faqs",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#c5a06a]/30 bg-[#061326]/95 shadow-lg backdrop-blur-md">

      <div className="mx-auto flex h-20 max-w-[1450px] items-center justify-between px-5 md:px-8 lg:px-10">

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center"
        >
          <img
            src="/logo.png"
            alt="Yes Time Global"
            className="h-16 w-auto object-contain transition duration-300 hover:scale-105"
          />
        </Link>

        {/* ================= DESKTOP NAVBAR ================= */}

        <div className="hidden items-center gap-1 lg:flex">

          {/* HOME */}

          <Link
            to="/"
            className={`px-3 py-2 text-sm font-medium transition duration-300 ${
              isActive("/")
                ? "text-[#c5a06a]"
                : "text-white hover:text-[#c5a06a]"
            }`}
          >
            Home
          </Link>

          {/* ABOUT */}

          <Dropdown
            title="About"
            items={aboutItems}
            isOpen={openDropdown === "about"}
            onToggle={() => toggleDropdown("about")}
          />

          {/* PROGRAMS */}

          <Dropdown
            title="Programs"
            items={programItems}
            isOpen={openDropdown === "programs"}
            onToggle={() => toggleDropdown("programs")}
          />

          {/* BUSINESS */}

          <Dropdown
            title="Business"
            items={businessItems}
            isOpen={openDropdown === "business"}
            onToggle={() => toggleDropdown("business")}
          />

          {/* FINANCE */}

          <Dropdown
            title="Finance"
            items={financeItems}
            isOpen={openDropdown === "finance"}
            onToggle={() => toggleDropdown("finance")}
          />

          {/* SUPPORT */}

          <Dropdown
            title="Support"
            items={supportItems}
            isOpen={openDropdown === "support"}
            onToggle={() => toggleDropdown("support")}
          />

          {/* CONTACT */}

          <Link
            to="/contact-us"
            className={`ml-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-300 ${
              isActive("/contact-us")
                ? "border-[#c5a06a] bg-[#c5a06a] text-[#061326]"
                : "border-[#c5a06a] text-[#c5a06a] hover:bg-[#c5a06a] hover:text-[#061326]"
            }`}
          >
            Contact Us
          </Link>

          {/* LEGAL */}

          <Link
            to="/legal-pages"
            className={`ml-2 px-3 py-2 text-sm font-medium transition duration-300 ${
              isActive("/legal-pages")
                ? "text-[#c5a06a]"
                : "text-white hover:text-[#c5a06a]"
            }`}
          >
            Legal
          </Link>

        </div>

        {/* ================= MOBILE BUTTON ================= */}

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenu ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}

      {mobileMenu && (
        <div className="border-t border-[#c5a06a]/20 bg-[#061326] px-5 pb-6 pt-4 lg:hidden">

          {/* HOME */}

          <Link
            to="/"
            onClick={closeMenu}
            className={`block border-b border-white/10 py-3 text-sm font-medium ${
              isActive("/")
                ? "text-[#c5a06a]"
                : "text-white"
            }`}
          >
            Home
          </Link>

          {/* ABOUT */}

          <MobileDropdown
            title="About"
            items={aboutItems}
            isOpen={openDropdown === "mobile-about"}
            onToggle={() => toggleDropdown("mobile-about")}
            onNavigate={closeMenu}
          />

          {/* PROGRAMS */}

          <MobileDropdown
            title="Programs"
            items={programItems}
            isOpen={openDropdown === "mobile-programs"}
            onToggle={() => toggleDropdown("mobile-programs")}
            onNavigate={closeMenu}
          />

          {/* BUSINESS */}

          <MobileDropdown
            title="Business"
            items={businessItems}
            isOpen={openDropdown === "mobile-business"}
            onToggle={() => toggleDropdown("mobile-business")}
            onNavigate={closeMenu}
          />

          {/* FINANCE */}

          <MobileDropdown
            title="Finance"
            items={financeItems}
            isOpen={openDropdown === "mobile-finance"}
            onToggle={() => toggleDropdown("mobile-finance")}
            onNavigate={closeMenu}
          />

          {/* SUPPORT */}

          <MobileDropdown
            title="Support"
            items={supportItems}
            isOpen={openDropdown === "mobile-support"}
            onToggle={() => toggleDropdown("mobile-support")}
            onNavigate={closeMenu}
          />

          {/* CONTACT */}

          <Link
            to="/contact-us"
            onClick={closeMenu}
            className="mt-4 block rounded-full bg-[#c5a06a] px-5 py-3 text-center text-sm font-semibold text-[#061326] transition hover:bg-[#d8b87b]"
          >
            Contact Us
          </Link>

          {/* LEGAL */}

          <Link
            to="/legal-pages"
            onClick={closeMenu}
            className="mt-3 block py-3 text-center text-sm text-white hover:text-[#c5a06a]"
          >
            Legal Pages
          </Link>

        </div>
      )}
    </nav>
  );
};

/* ================= MOBILE DROPDOWN ================= */

interface MobileDropdownProps {
  title: string;
  items: DropdownItem[];
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}

const MobileDropdown = ({
  title,
  items,
  isOpen,
  onToggle,
  onNavigate,
}: MobileDropdownProps) => {
  return (
    <div className="border-b border-white/10">

      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-3 text-sm font-medium text-white"
      >
        {title}

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#c5a06a]" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="mb-2 rounded-lg bg-white/5">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onNavigate}
              className="block px-5 py-3 text-sm text-gray-300 transition hover:bg-[#c5a06a]/10 hover:text-[#c5a06a]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbaar;