
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Home, ArrowUpRight } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Personal Profile | Lintang Maharani",
    template: "%s | Lintang Maharani",
  },
  description:
    "Personal website of Lintang Maharani, showcasing her profile, education, experiences, skills, projects, achievements, blog, and literary works.",
};

const navigation = [
  { label: "About", href: "/about" },
  { label: "Education", href: "/education" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Achievements", href: "/achievements" },
  { label: "Interests", href: "/interests" },
  { label: "Goals", href: "/goals" },
  { label: "Blog", href: "/blog" },
  { label: "Novel", href: "/novel" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f8fafc] text-slate-900 flex flex-col min-h-screen`}
      >
        {/* GLOBAL NAVBAR */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
          <nav
            aria-label="Main navigation"
            className="max-w-[1600px] mx-auto px-5 lg:px-10"
          >
            <div className="min-h-[84px] flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5 py-5 xl:py-0">

              {/* BRAND */}
              <Link
                href="/"
                className="group flex items-center gap-3 shrink-0"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                  <Home size={18} className="text-white" />
                </div>

                <div>
                  <h1 className="text-sm font-semibold tracking-tight text-slate-900">
                    Personal Profile
                  </h1>

                  <p className="text-xs text-slate-400 mt-1">
                    Lintang Maharani
                  </p>
                </div>
              </Link>

              {/* NAVIGATION LINKS */}
              <div className="flex items-center gap-1 overflow-x-auto whitespace-nowrap scrollbar-hide xl:justify-end">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="shrink-0 px-3 py-2 rounded-lg text-[13px] font-medium text-slate-500 hover:text-slate-950 hover:bg-slate-100 transition-all duration-200"
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
          <div className="max-w-7xl mx-auto px-6 md:px-10">

            {/* FOOTER CONTENT */}
            <div className="py-10 flex flex-col md:flex-row justify-between items-start gap-8">

              {/* FOOTER BRAND */}
              <div className="max-w-sm">
                <Link
                  href="/"
                  className="text-lg font-bold tracking-tight text-slate-900"
                >
                  Personal Profile
                  <span className="text-slate-400">.</span>
                </Link>

                <p className="mt-3 text-sm text-slate-500 leading-7">
                  A personal space to share my journey, projects,
                  experiences, ideas, writings, and creative stories.
                </p>
              </div>

              {/* FOOTER NAVIGATION */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-4">
                  Explore
                </p>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-8 gap-y-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-slate-500 hover:text-slate-950 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* FOOTER BOTTOM */}
            <div className="border-t border-slate-100 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">

              {/* COPYRIGHT */}
              <p className="text-xs text-slate-400">
                © 2026 Lintang Maharani. All rights reserved.
              </p>

              {/* CREDIT */}
              <p className="text-xs text-slate-400">
                Designed & built with intention.
              </p>

              {/* ADMIN LOGIN */}
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
              >
                Admin Login
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
