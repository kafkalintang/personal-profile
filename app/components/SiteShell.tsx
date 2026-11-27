
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Education", href: "/education" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Achievements", href: "/achievements" },
  { label: "Interests", href: "/interests" },
  { label: "Goals", href: "/goals" },
  { label: "Mading", href: "/mading" },
  { label: "Blog", href: "/blog" },
  { label: "Novel", href: "/novel" },
  { label: "Contact", href: "/contact" },
];

export default function SiteShell({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  // Pages with their own independent layouts
  if (
    pathname === "/login" ||
    pathname.startsWith("/dashboard")
  ) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] text-slate-900">

      {/* GLOBAL NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto max-w-[1600px] px-5 lg:px-10"
        >
          <div className="flex min-h-[84px] flex-col gap-5 py-5 xl:flex-row xl:items-center xl:justify-between xl:py-0">

            {/* BRAND */}
            <Link href="/" className="group flex shrink-0 items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 transition-colors group-hover:bg-slate-700">
                <Home size={18} className="text-white" />
              </div>

              <div>
                <h1 className="text-sm font-semibold tracking-tight text-slate-900">
                  Personal Profile
                </h1>
                <p className="mt-1 text-xs text-slate-400">
                  Lintang Maharani
                </p>
              </div>
            </Link>

            {/* NAVIGATION */}
            <div className="scrollbar-hide flex items-center gap-1 overflow-x-auto whitespace-nowrap xl:justify-end">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="shrink-0 rounded-lg px-3 py-2 text-[13px] font-medium text-slate-500 transition-all duration-200 hover:bg-slate-100 hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ))}
            </div>

          </div>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        {children}
      </main>

      {/* GLOBAL FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          {/* FOOTER CONTENT */}
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:items-start lg:justify-between">

            {/* FOOTER BRAND */}
            <div className="max-w-sm">
              <Link
                href="/"
                className="text-lg font-bold tracking-tight text-slate-900 transition hover:text-slate-600"
              >
                Personal Profile
                <span className="text-slate-400">.</span>
              </Link>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                A personal space to share my journey, projects, experiences,
                ideas, writings, and creative stories.
              </p>
            </div>

            {/* FOOTER NAVIGATION */}
            <div className="w-full lg:max-w-2xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                Explore
              </p>

              <div className="grid grid-cols-3 gap-x-6 gap-y-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-4">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-950"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="flex flex-col gap-5 border-t border-slate-100 py-5 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-xs text-slate-400">
              © 2026 Lintang Maharani. All rights reserved.
            </p>

            <p className="text-xs text-slate-400">
              Designed & built with intention.
            </p>

            {/* LOGIN */}
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              Login
              <ArrowUpRight size={15} />
            </Link>

          </div>
        </div>
      </footer>
    </div>
  );
}
