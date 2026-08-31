import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

interface FooterLink {
  label: string;
  path: string;
}

const PROGRAM_LINKS: FooterLink[] = [
  { label: "Car Program", path: "/OurPrograms" },
  { label: "Real Estate Program", path: "/OurPrograms" },
  { label: "Vehicles", path: "/OurPrograms" },
  { label: "Shopping & Savings", path: "/OurPrograms" },
  { label: "Automated Savings System", path: "/how-it-works" },
];

const QUICK_LINKS: FooterLink[] = [
  { label: "About Us", path: "/about" },
  { label: "Vision & Mission", path: "/vision-mission" },
  { label: "Business Partners", path: "/business-partners" },
  { label: "Banks & Financial", path: "/banks-financial" },
  { label: "FAQs & Support", path: "/faqs" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#D4AF37]/40 bg-black text-white">
      {/* Top Gold Accent Line */}
      <div 
        className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-90" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-[1450px] px-6 py-14 md:px-10 lg:px-12 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Col 1: Brand Info & About */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block transition-transform duration-300 hover:scale-105">
              <img
                src="/logo.png"
                alt="Yes Time Global Logo"
                className="h-20 w-auto object-contain"
              />
            </Link>

            <p className="max-w-md text-base leading-relaxed text-gray-300 font-normal">
              Yes Time Global Private Limited — Connecting global opportunities with innovation, transparency, and trust through car programs, real estate ventures, and automated savings plans.
            </p>

            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#D4AF37]">
              <ShieldCheck className="h-5 w-5 shrink-0" />
              <span>Transparency • Trust • Accessibility</span>
            </div>
          </div>

          {/* Col 2: Our Programs */}
          <div>
            <h3 className="mb-5 text-lg font-bold uppercase tracking-wider text-[#D4AF37]">
              Our Programs
            </h3>
            <ul className="space-y-3.5 text-base">
              {PROGRAM_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-gray-200 transition-colors duration-200 hover:text-[#D4AF37]"
                  >
                    <ChevronRight className="h-4 w-4 text-[#D4AF37] transition-transform duration-200 group-hover:translate-x-1" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold uppercase tracking-wider text-[#D4AF37]">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-base">
              {QUICK_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-gray-200 transition-colors duration-200 hover:text-[#D4AF37]"
                  >
                    <ChevronRight className="h-4 w-4 text-[#D4AF37] transition-transform duration-200 group-hover:translate-x-1" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div>
            <h3 className="mb-5 text-lg font-bold uppercase tracking-wider text-[#D4AF37]">
              Contact Us
            </h3>
            <ul className="space-y-4 text-base text-gray-200">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#D4AF37]" />
                <span className="leading-snug font-medium">Yes Time Global Head Lahore, Pakistan</span>
              </li>
              <li>
                <a
                  href="mailto:info@yestimeglobal.com"
                  className="group flex items-center gap-3 font-medium transition-colors duration-200 hover:text-[#D4AF37]"
                >
                  <Mail className="h-5 w-5 shrink-0 text-[#D4AF37]" />
                  <span className="truncate">info@yestimeglobal.com</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="tel:+923196336984"
                  className="group flex items-center gap-3 font-medium transition-colors duration-200 hover:text-[#D4AF37]"
                >
                  <Phone className="h-5 w-5 shrink-0 text-[#D4AF37]" />
                  <span>+92 319 6336984</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923068509086"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-medium transition-colors duration-200 hover:text-[#25D366]"
                >
                  <BsWhatsapp className="h-5 w-5 shrink-0 text-[#25D366]" />
                  <span> +92 306 8509086</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-sm text-gray-300 sm:flex-row">
          <p className="font-medium">© {currentYear} Yes Time Global Private Limited. All rights reserved.</p>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-medium">
            <Link to="/privacy-policy" className="transition-colors duration-200 hover:text-[#D4AF37]">
              Privacy Policy
            </Link>
            <span className="text-gray-500" aria-hidden="true">•</span>
            <Link to="/terms-conditions" className="transition-colors duration-200 hover:text-[#D4AF37]">
              Terms & Conditions
            </Link>
            <span className="text-gray-500" aria-hidden="true">•</span>
            <Link to="/disclaimer" className="transition-colors duration-200 hover:text-[#D4AF37]">
              Legal Disclaimer
            </Link>
          </nav>
        </div>

      </div>
    </footer>
  );
};

export default Footer;