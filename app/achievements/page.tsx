
"use client";

import {
  Award,
  Trophy,
  Medal,
  GraduationCap,
  Star,
  ArrowUpRight,
  Sparkles,
  Target,
  ExternalLink,
  CalendarDays,
  FileBadge,
} from "lucide-react";
import Link from "next/link";

const achievements = [
  {
    category: "Scholarship",
    title: "Mahasiswa Berprestasi Unggulan",
    organization: "Politeknik Negeri Batam",
    year: "2026",
    description:
      "Received a scholarship award in recognition of academic performance, dedication, and potential for growth.",
    icon: GraduationCap,
    featured: true,
  },
  {
    category: "Academic",
    title: "Academic Achievement",
    organization: "Politeknik Negeri Batam",
    year: "2026",
    description:
      "Maintaining academic performance throughout my Informatics Engineering diploma studies.",
    icon: Award,
    featured: false,
  },
  {
    category: "Technology",
    title: "Technology & Development Projects",
    organization: "Independent & Academic Projects",
    year: "2026",
    description:
      "Developed and explored software development, IoT simulations, and technology-based solutions through various projects.",
    icon: Trophy,
    featured: false,
  },
  {
    category: "Professional",
    title: "Professional Development",
    organization: "Community & Internship Experience",
    year: "2026",
    description:
      "Continuously developing technical, communication, teamwork, and professional skills through organizational and workplace experiences.",
    icon: Star,
    featured: false,
  },
];

const milestones = [
  {
    year: "2024",
    title: "Started Informatics Engineering",
    description:
      "Beginning my journey in programming, technology, and software development.",
  },
  {
    year: "2025",
    title: "Exploring Technology & Projects",
    description:
      "Building projects, joining technology communities, and developing new technical skills.",
  },
  {
    year: "2026",
    title: "Professional Experience & Recognition",
    description:
      "Expanding my experience through internship, projects, scholarships, and continuous learning.",
  },
];

const categories = [
  { label: "Recognition", icon: Trophy },
  { label: "Scholarships", icon: GraduationCap },
  { label: "Academic", icon: Award },
  { label: "Milestones", icon: Target },
];

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-20">

        {/* HERO */}
        <section className="animate-[fadeIn_0.8s_ease-out]">
          <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
            <Award size={16} />
            <span>Achievements & Recognition</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
                Moments that
                <span className="mt-2 block text-slate-400">
                  mark the journey.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
                A collection of milestones, recognitions, and experiences that
                reflect my learning journey, dedication, and continuous growth
                in technology.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-slate-100 p-3">
                  <Sparkles size={22} className="text-slate-700" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  My perspective
                </span>
              </div>

              <h2 className="mt-6 text-xl font-semibold text-slate-900">
                Progress over perfection.
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Every achievement is a reminder that growth comes from showing
                up, learning from challenges, and taking the next step.
              </p>
            </div>
          </div>
        </section>

        {/* CATEGORY NAV */}
        <section className="mt-16 border-y border-slate-200 py-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 transition duration-300 hover:border-slate-400 hover:bg-slate-50"
                  style={{
                    animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <Icon size={15} />
                  {item.label}
                </div>
              );
            })}
          </div>
        </section>

        {/* FEATURED */}
        <section className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                Highlights
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Featured recognition
              </h2>
            </div>

            <span className="hidden text-sm text-slate-400 md:block">
              A moment worth remembering
            </span>
          </div>

          <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-500 hover:shadow-xl md:p-12">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-slate-100 transition duration-700 group-hover:scale-125" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-600">
                  <Trophy size={14} />
                  Scholarship Award
                </div>

                <h3 className="mt-7 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl">
                  Mahasiswa Berprestasi Unggulan
                </h3>

                <p className="mt-4 text-sm text-slate-500">
                  Politeknik Negeri Batam · 2026
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
                  A scholarship recognition that supports my academic journey
                  and motivates me to keep pursuing excellence, exploring
                  opportunities, and creating meaningful work in technology.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
                    Academic Recognition
                  </span>
                  <span className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
                    Scholarship
                  </span>
                </div>
              </div>

              <div className="relative flex h-48 w-48 items-center justify-center justify-self-center rounded-full border border-slate-200 bg-slate-50 lg:h-64 lg:w-64">
                <div className="absolute inset-4 rounded-full border border-dashed border-slate-300" />
                <div className="absolute inset-8 rounded-full border border-slate-200" />

                <div className="flex flex-col items-center">
                  <Trophy
                    size={72}
                    strokeWidth={1}
                    className="text-slate-700 transition duration-500 group-hover:-translate-y-2"
                  />
                  <span className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                    Recognition
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACHIEVEMENT LIST */}
        <section className="mt-20">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              Collection
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Achievements & experiences
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Recognition and experiences that have become part of my personal
              and professional development.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;

              return (
                <article
                  key={achievement.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
                  style={{
                    animation: `fadeIn 0.7s ease-out ${index * 0.12}s both`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="rounded-2xl bg-slate-100 p-3 transition duration-300 group-hover:bg-slate-200">
                      <Icon size={22} className="text-slate-700" />
                    </div>

                    <span className="rounded-full bg-slate-50 px-3 py-1.5 text-xs text-slate-500">
                      {achievement.year}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                    {achievement.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold leading-snug text-slate-900">
                    {achievement.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {achievement.organization}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-slate-500">
                    {achievement.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-xs text-slate-400">
                      Achievement
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-slate-400 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-800"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* TIMELINE */}
        <section className="mt-24">
          <div className="mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              The journey so far
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Milestones
            </h2>
          </div>

          <div className="relative ml-3 border-l border-slate-200 md:ml-6">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="relative pb-12 pl-8 last:pb-0 md:pl-12"
                style={{
                  animation: `fadeIn 0.7s ease-out ${index * 0.15}s both`,
                }}
              >
                <div className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-slate-400 bg-[#f8fafc]" />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-8">
                  <span className="min-w-20 text-sm font-medium text-slate-400">
                    {milestone.year}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {milestone.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-slate-500">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="mt-24 rounded-[2rem] border border-slate-200 bg-white p-8 text-center md:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
            <FileBadge size={24} className="text-slate-700" />
          </div>

          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Still growing, still achieving.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
            This collection is only a part of my journey. I am always open
            to learning, building, collaborating, and discovering new
            opportunities.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-slate-700 hover:shadow-lg"
          >
            Let's connect
            <ArrowUpRight size={16} />
          </Link>
        </section>

      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
}
