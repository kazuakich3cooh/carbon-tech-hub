"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Insights", href: "/insights" },
  { label: "Solutions", href: "/solutions" },
  { label: "Submit", href: "/submit" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="CarbonTech Hub logo"
            width={48}
            height={48}
          />

          <span className="text-2xl font-bold text-slate-950">
            CarbonTech Hub
          </span>
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden gap-10 font-medium md:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={
                    isActive
                      ? "font-bold text-emerald-600"
                      : "text-slate-700 transition hover:text-emerald-600"
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <a
            href="/solutions"
            className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/40 transition hover:-translate-y-0.5 hover:bg-emerald-500"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}