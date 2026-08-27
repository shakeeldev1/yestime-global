import { Link } from "react-router-dom";
import {
  Car,
  Building2,
  ShoppingBag,
  Briefcase,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-[#D4AF37]/20 bg-[#000000] text-white">
      {/* Top Decorative Line / Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1450px] px-5 py-12 md:px-8 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* Col 1: Brand Info & About */}
          <div className="lg:col-span-2">
            <Link to="/" className="mb-4 inline-block">
              <img
                src="/logo.png"
                alt="Yes Time Global"
                className="h-16 w-auto object-contain transition duration-300 hover:scale-105"
              />
            </Link>
            <p className="mb-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Yes Time Global Private Limited — Connecting global opportunities with innovation, transparency, and trust through car programs, real estate ventures, and automated savings plans.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#D4AF37]">
              <ShieldCheck className="h-4 w-4" />
              <span>Transparency • Trust • Accessibility</span>
            </div>
          </div>

          {/* Col 2: Our Programs */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-[#D4AF37]">
              Our Programs
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link
                  to="/our-programs"
                  className="group flex items-center gap-1.5 transition duration-300 hover:text-[#D4AF37]"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
                  <span>Car Program</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/our-programs"
                  className="group flex items-center gap-1.5 transition duration-300 hover:text-[#D4AF37]"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
                  <span>Real Estate Program</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/our-programs"
                  className="group flex items-center gap-1.5 transition duration-300 hover:text-[#D4AF37]"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
                  <span>Vehicles</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/our-programs"
                  className="group flex items-center gap-1.5 transition duration-300 hover:text-[#D4AF37]"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
                  <span>Shopping & Savings</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="group flex items-center gap-1.5 transition duration-300 hover:text-[#D4AF37]"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
                  <span>Automated Savings System</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-[#D4AF37]">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link
                  to="/about"
                  className="group flex items-center gap-1.5 transition duration-300 hover:text-[#D4AF37]"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/vision-mission"
                  className="group flex items-center gap-1.5 transition duration-300 hover:text-[#D4AF37]"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
                  <span>Vision & Mission</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/business-partners"
                  className="group flex items-center gap-1.5 transition duration-300 hover:text-[#D4AF37]"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
                  <span>Business Partners</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/banks-financial"
                  className="group flex items-center gap-1.5 transition duration-300 hover:text-[#D4AF37]"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
                  <span>Banks & Financial</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="group flex items-center gap-1.5 transition duration-300 hover:text-[#D4AF37]"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
                  <span>FAQs & Support</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-[#D4AF37]">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" />
                <span>Yes Time Global Head Office, Pakistan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                <a
                  href="mailto:support@yestimeglobal.com"
                  className="transition hover:text-[#D4AF37]"
                >
                  support@yestimeglobal.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#D4AF37]" />
                <a
                  href="tel:+920000000000"
                  className="transition hover:text-[#D4AF37]"
                >
                  +92 (0)00 0000000
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Feature Highlights Bar */}
        <div className="mt-12 rounded-xl border border-[#D4AF37]/20 bg-[#0a0a0a] p-4 backdrop-blur-md">
          <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
            <div className="flex flex-col items-center justify-center border-r border-white/10 last:border-r-0">
              <Car className="mb-1 h-5 w-5 text-[#D4AF37]" />
              <span className="text-xs text-gray-300">Vehicle Schemes</span>
            </div>
            <div className="flex flex-col items-center justify-center border-r border-white/10 sm:border-r last:border-r-0">
              <Building2 className="mb-1 h-5 w-5 text-[#D4AF37]" />
              <span className="text-xs text-gray-300">Real Estate</span>
            </div>
            <div className="flex flex-col items-center justify-center border-r border-white/10 last:border-r-0">
              <ShoppingBag className="mb-1 h-5 w-5 text-[#D4AF37]" />
              <span className="text-xs text-gray-300">Shopping & Savings</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Briefcase className="mb-1 h-5 w-5 text-[#D4AF37]" />
              <span className="text-xs text-gray-300">Banking & Partners</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Yes Time Global Private Limited. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/legal-pages" className="transition hover:text-[#D4AF37]">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/legal-pages" className="transition hover:text-[#D4AF37]">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link to="/legal-pages" className="transition hover:text-[#D4AF37]">
              Legal Disclaimer
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;