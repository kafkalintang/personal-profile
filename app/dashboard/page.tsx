
import Link from "next/link";
import {
  UserRound,
  FolderKanban,
  Trophy,
  BookOpen,
  ArrowUpRight,
  Eye,
  Sparkles,
  Clock3,
  ExternalLink,
} from "lucide-react";

const overviewCards = [
  {
    title: "Profile",
    description: "Manage your personal information",
    icon: UserRound,
    href: "/about",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Projects",
    description: "Explore your creative works",
    icon: FolderKanban,
    href: "/projects",
    color: "bg-violet-50 text-violet-600",
  },
  {
    title: "Achievements",
    description: "Your milestones and accomplishments",
    icon: Trophy,
    href: "/achievements",
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Blog & Notes",
    description: "Your thoughts, stories, and ideas",
    icon: BookOpen,
    href: "/blog",
    color: "bg-emerald-50 text-emerald-600",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <section className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-r from-white via-white to-blue-50 p-6 shadow-sm sm:p-8">
        <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative z-10 max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-[11px] font-medium text-blue-600">
            <Sparkles size={13} />
            YOUR PERSONAL SPACE
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            Welcome to Your Dashboard!
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
            A little space to organize your profile, showcase your journey,
            and keep everything about your personal website in one place.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-[#285b96] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#1d477a]"
            >
              View Website
              <ExternalLink size={14} />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              My Profile
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section heading */}
      <section>
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-800">
              Your Workspace
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              Quick access to your personal website sections.
            </p>
          </div>

          <span className="hidden rounded-lg bg-blue-50 px-3 py-1.5 text-[11px] font-medium text-blue-600 sm:block">
            Personal Overview
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {overviewCards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className={`rounded-xl p-3 ${card.color}`}>
                    <Icon size={21} />
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-slate-300 transition group-hover:text-blue-500"
                  />
                </div>

                <h3 className="mt-5 text-sm font-bold text-slate-800">
                  {card.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-400">
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Bottom section */}
      <section className="grid gap-5 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
              <Clock3 size={17} />
            </div>
            <h2 className="text-sm font-bold text-slate-800">
              Recent Activity
            </h2>
          </div>

          <div className="mt-6 flex min-h-[130px] flex-col items-center justify-center text-center">
            <div className="rounded-full bg-slate-50 p-4 text-slate-300">
              <Clock3 size={23} />
            </div>
            <p className="mt-3 text-sm font-medium text-slate-600">
              Your activity will appear here
            </p>
            <p className="mt-1 text-xs text-slate-400">
              There is no activity to display yet.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-violet-50 p-2 text-violet-600">
              <Eye size={17} />
            </div>
            <h2 className="text-sm font-bold text-slate-800">
              Website Preview
            </h2>
          </div>

          <div className="mt-5 rounded-xl bg-gradient-to-br from-[#19345f] to-[#3977b5] p-5 text-white">
            <p className="text-[10px] font-medium tracking-[2px] text-blue-100/70">
              PERSONAL WEBSITE
            </p>
            <h3 className="mt-3 text-lg font-bold">Your Story.</h3>
            <p className="mt-1 text-xs text-blue-100/80">
              Your journey, projects, and ideas.
            </p>
            <div className="mt-5 flex items-center gap-2 text-[10px] text-blue-100">
              <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
              Website preview
            </div>
          </div>

          <Link
            href="/"
            className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Open Website
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 pt-5 text-center text-[11px] text-slate-400">
        Made with care · Your Personal Space
      </footer>
    </div>
  );
}
