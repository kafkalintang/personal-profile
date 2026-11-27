"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  UserRound,
  GraduationCap,
  BriefcaseBusiness,
  Trophy,
  FolderKanban,
  Code2,
  BookOpen,
  Settings,
  LogOut,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Profile",
    href: "/dashboard/about",
    icon: UserRound,
  },
  {
    title: "Education",
    href: "/dashboard/education",
    icon: GraduationCap,
  },
  {
    title: "Experience",
    href: "/dashboard/experience",
    icon: BriefcaseBusiness,
  },
  {
    title: "Achievements",
    href: "/dashboard/achievements",
    icon: Trophy,
  },
  {
    title: "Projects",
    href: "/dashboard/projects",
    icon: FolderKanban,
  },
  {
    title: "Skills",
    href: "/dashboard/skills",
    icon: Code2,
  },
  {
    title: "Blog & Notes",
    href: "/dashboard/blog",
    icon: BookOpen,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-800">
      {sidebarOpen && (
        <button
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[268px] flex-col overflow-hidden
        bg-gradient-to-b from-[#19345f] via-[#214d83] to-[#3977b5]
        text-white shadow-xl transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-24 -left-24 h-80 w-[450px] rotate-[-28deg] rounded-[45%] bg-white/[0.045]" />
          <div className="absolute -bottom-36 -left-20 h-80 w-[450px] rotate-[-28deg] rounded-[45%] bg-white/[0.055]" />
          <div className="absolute -bottom-48 -left-16 h-80 w-[450px] rotate-[-28deg] rounded-[45%] bg-white/[0.045]" />
        </div>

        {/* Brand */}
        <div className="relative flex h-[82px] items-center justify-between px-7">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 shadow-lg ring-1 ring-white/20 backdrop-blur-sm">
              <UserRound size={21} strokeWidth={2.2} />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-wide">
                My Space
              </h1>
              <p className="text-[10px] tracking-[2px] text-blue-100/70">
                PERSONAL DASHBOARD
              </p>
            </div>
          </Link>

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-white/80 hover:bg-white/10 lg:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="relative mx-5 border-t border-white/10" />

        {/* Navigation */}
        <nav className="relative flex-1 space-y-1 overflow-y-auto px-4 py-6">
          <p className="mb-4 px-3 text-[10px] font-semibold uppercase tracking-[2px] text-blue-100/55">
            Workspace
          </p>

          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] transition-all duration-200 ${
                  active
                    ? "bg-white font-semibold text-[#19345f] shadow-md shadow-blue-950/20"
                    : "text-blue-50/85 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon
                  size={18}
                  strokeWidth={active ? 2.3 : 1.8}
                  className={`shrink-0 transition-colors ${
                    active ? "text-[#19345f]" : "text-blue-100/70 group-hover:text-white"
                  }`}
                />
                <span>{item.title}</span>
                {active && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#397bc9]" />
                )}
              </Link>
            );
          })}

          <div className="!mt-8 border-t border-white/10 pt-5">
            <p className="mb-4 px-3 text-[10px] font-semibold uppercase tracking-[2px] text-blue-100/55">
              Preferences
            </p>

            <Link
              href="/dashboard/settings"
              onClick={() => setSidebarOpen(false)}
              className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] transition-all duration-200 ${
                pathname === "/dashboard/settings"
                  ? "bg-white font-semibold text-[#19345f] shadow-md shadow-blue-950/20"
                  : "text-blue-50/85 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Settings size={18} strokeWidth={pathname === "/dashboard/settings" ? 2.3 : 1.8} className="shrink-0" />
              Settings
              {pathname === "/dashboard/settings" && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#397bc9]" />
              )}
            </Link>
          </div>
        </nav>

        {/* Bottom */}
        <div className="relative border-t border-white/10 p-4">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-[13px] text-blue-50/90 transition hover:bg-white/10 hover:text-white"
          >
            <LogOut size={18} />
            <span>Back to Website</span>
            <ArrowUpRight size={15} className="ml-auto opacity-70" />
          </Link>

          <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.07] p-3">
            <p className="text-xs font-medium">Personal Space</p>
            <p className="mt-1 text-[10px] text-blue-100/65">
              Your story, your journey.
            </p>
          </div>
        </div>
      </aside>

      {/* Main area */}
      <div className="min-h-screen lg:ml-[268px]">
        <header className="sticky top-0 z-30 flex h-[70px] items-center justify-between border-b border-slate-200/80 bg-white/90 px-5 backdrop-blur-md sm:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>

            <div>
              <p className="text-sm font-semibold text-slate-800">
                Personal Dashboard
              </p>
              <p className="text-[11px] text-slate-400">
                Manage your personal website
              </p>
            </div>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700 ring-1 ring-blue-100">
            R
          </div>
        </header>

        <main className="mx-auto max-w-[1500px] p-5 sm:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}