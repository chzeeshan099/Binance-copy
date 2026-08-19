"use client";

import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";
import { navItems } from "@/lib/data";
import { useApplyModal } from "@/components/providers/apply-modal-provider";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { open } = useApplyModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 px-3 pt-3">
      <div className="container rounded-[26px] bg-blue-900 px-4 py-3 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-900/15">
              <Sparkles size={19} />
            </div>

            <div>
              <div className="font-semibold text-white">
                Badar Study Abroad
              </div>
              <div className="text-xs text-white/80">
                International education advisors
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-2 text-sm font-semibold !text-white",
                    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-white after:transition-transform after:duration-300",
                    isActive
                      ? "after:scale-x-100"
                      : "after:scale-x-0 hover:after:scale-x-100",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => open()}
              className="btn-primary"
            >
              Apply Now
            </button>
          </div>

          <button
            type="button"
            className="rounded-full border border-slate-200 bg-white/90 p-2.5 text-slate-800 lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            <Menu size={18} />
          </button>
        </div>

        {menuOpen ? (
          <div className="mt-4 grid gap-2 border-t border-slate-200/70 pt-4 lg:hidden">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-2xl px-3 py-2 text-sm font-medium transition",
                    isActive
                      ? "!text-white !underline !underline-offset-4"
                      : "!text-white/90 !hover:text-white !hover:underline !hover:underline-offset-4",
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <button
              type="button"
              onClick={() => open()}
              className="btn-primary mt-2"
            >
              Apply Now
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
}