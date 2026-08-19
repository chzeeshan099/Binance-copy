import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPinned,
  Phone,
  Send,
} from "lucide-react";
import { navItems } from "@/lib/data";

export function Footer() {
  return (
<footer className="relative mt-10 overflow-hidden bg-blue-950 text-white">

  {/* Curved Top Background */}
  <div className="absolute left-0 top-0 z-0 h-[95px] w-full overflow-hidden">
    <svg
      className="absolute left-0 top-0 h-full w-full"
      viewBox="0 0 1440 95"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
          M0 0
          H1440
          V35
          C1360 58 1290 48 1210 38
          C1110 25 1030 12 930 38
          C830 64 760 78 650 48
          C550 20 470 12 370 40
          C270 68 190 72 100 48
          C55 36 25 31 0 42
          Z
        "
        fill="#eef6ff"
      />
    </svg>
  </div>

  {/* Main Footer */}
  <div className="relative z-10 pt-[125px]">
        <div className="container grid gap-10 px-5 pb-10 md:grid-cols-[1.4fr_0.8fr_1fr_1fr] md:px-6">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/80">
                  <span className="text-xl font-black tracking-tight">
                    BZ
                  </span>

                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[13px]">
                    🎓
                  </span>
                </div>

                <div>
                  <div className="text-sm font-extrabold tracking-wide">
                    BADDER ZAMAN
                  </div>

                  <div className="text-[8px] uppercase tracking-[0.12em] text-white/70">
                    Study Abroad Consultancy
                  </div>
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-[300px] text-xs leading-6 text-white/75">
              We are committed to helping students achieve their educational
              goals by providing the best guidance and opportunities to study
              abroad.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-950">
                <Facebook size={16} />
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-950">
                <Instagram size={16} />
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-950">
                <Send size={16} />
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-950">
                <Linkedin size={16} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-5 grid gap-3">
              {navItems?.map((nav) => (
                <Link
                  key={nav?.href}
                  href={nav?.href}
                  className="group relative w-fit text-xs text-white/70 transition-colors duration-200 hover:text-white"
                >
                 {nav?.label}

                <span className="absolute -bottom-1 left-0 h-[1px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Our Services
            </h3>

            <div className="mt-5 grid gap-3">
              {[
                "Scholarship Guidance",
                "Application Help",
                "Statement of Purpose",
                "Motivation Letter",
                "Letters of Recommendation",
              ].map((service) => (
                <Link
                  key={service}
                  href="/service-charges"
                  className="group relative w-fit text-xs text-white/70 transition-colors duration-200 hover:text-white"
                 >
                 {service}

                <span className="absolute -bottom-1 left-0 h-[1px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
               </Link>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Contact Us
            </h3>

            <div className="mt-5 grid gap-4">
              <a
                href="tel:+923001234567"
                className="flex items-start gap-3 text-xs text-white/70 transition-colors hover:text-white"
              >
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>+92 300 1234567</span>
              </a>

              <a
                href="mailto:info@bzconsultancy.com"
                className="flex items-start gap-3 text-xs text-white/70 transition-colors hover:text-white"
              >
                <Mail size={16} className="mt-0.5 shrink-0" />
                <span>info@bzconsultancy.com</span>
              </a>

              <div className="flex items-start gap-3 text-xs leading-5 text-white/70">
                <MapPinned size={16} className="mt-0.5 shrink-0" />

                <span>
                  123, Main Boulevard,
                  <br />
                  Lahore, Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/15">
          <div className="container flex flex-col items-center justify-center gap-3 px-5 py-5 text-center md:px-6">
            <p className="text-[10px] text-white/60">
              © 2026 Badder Zaman Study Abroad Consultancy. All Rights Reserved.
            </p>

            {/* <div className="flex flex-wrap justify-center gap-5 text-[10px] text-white/50">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="transition-colors hover:text-white"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/cookie-policy"
                className="transition-colors hover:text-white"
              >
                Cookie Policy
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}