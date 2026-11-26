import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Code2,
  Terminal,
  Layers3,
  MapPin,
  GraduationCap,
  Sparkles,
  Download,
} from "lucide-react";

const stats = [
  { value: "3.66", label: "GPA" },
  { value: "D3", label: "Informatics Engineering" },
  { value: "2024", label: "Started at Polibatam" },
  { value: "10+", label: "Projects built" },
];

const interests = [
  {
    icon: Code2,
    title: "Software Development",
    desc: "Developing web applications, exploring modern frameworks, and creating user-centered digital experiences.",
  },
  {
    icon: Layers3,
    title: "Technology & AI",
    desc: "Exploring artificial intelligence, data, automation, and technology that makes processes more efficient.",
  },
  {
    icon: Terminal,
    title: "Innovation",
    desc: "Turning ideas into projects, experimenting with solutions, and continuously growing as an engineer.",
  },
];

const stack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma",
  "PHP",
  "MySQL",
];

const projects = [
  {
    name: "Requify",
    tag: "AI Platform",
    desc: "An AI-assisted platform designed to support software requirement analysis and quality assessment.",
    tech: ["AI", "NLP", "Web Development"],
  },
  {
    name: "Archiva",
    tag: "Personal Project",
    desc: "A personal digital archive for organizing notes, files, collections, and meaningful digital memories.",
    tech: ["Next.js", "UI/UX", "Personal Project"],
  },
];

export default function Home() {
  return (
    <main className="relative bg-[#f8fafc] text-[#0f172a] overflow-hidden">
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[780px] opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-sky-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-48 h-[420px] w-[420px] rounded-full bg-indigo-200/40 blur-3xl"
      />

      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20 md:pt-36 md:pb-28">
        <div className="grid md:grid-cols-[1.4fr_0.8fr] gap-16 items-center">
          {/* INTRODUCTION */}
          <div className="fade-up">
            <div className="inline-flex items-center gap-2.5 border border-slate-200 bg-white/80 backdrop-blur rounded-full pl-2 pr-4 py-1.5 mb-8 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold tracking-[0.12em] text-slate-600">
                OPEN TO OPPORTUNITIES
              </span>
            </div>

            <p className="text-sm font-medium text-slate-500 mb-4 tracking-[0.18em]">
              HELLO, I&apos;M
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.02] text-slate-950">
              Lintang
              <br />
              <span className="text-slate-950">
                Maharani.
              </span>
            </h1>

            <h2 className="mt-8 text-xl md:text-2xl text-slate-800 font-medium">
              Software Developer &amp; Technology Enthusiast
            </h2>

            <p className="mt-5 max-w-xl text-base md:text-lg leading-8 text-slate-500">
              I build digital experiences, explore emerging technologies, and
              turn ideas into meaningful solutions through code, creativity,
              and continuous learning.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3.5 rounded-xl text-sm font-medium shadow-lg shadow-slate-900/10 hover:bg-slate-800 hover:-translate-y-0.5 transition-all"
              >
                Explore my profile
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-slate-300 bg-white text-slate-700 px-6 py-3.5 rounded-xl text-sm font-medium hover:border-slate-900 hover:text-slate-900 hover:-translate-y-0.5 transition-all"
              >
                View projects
              </Link>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex flex-wrap items-center gap-3 mt-12">
              <Link
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:border-slate-900 hover:text-slate-900 transition"
                aria-label="GitHub"
              >
                <span className="text-xs font-bold">GH</span>
              </Link>

              <Link
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:border-slate-900 hover:text-slate-900 transition"
                aria-label="LinkedIn"
              >
                <span className="text-xs font-bold">in</span>
              </Link>

              <Link
                href="/contact"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:border-slate-900 hover:text-slate-900 transition"
                aria-label="Email"
              >
                <Mail size={17} />
              </Link>

              <div className="mx-2 h-5 w-px bg-slate-300" />

              <span className="inline-flex items-center gap-1.5 text-xs tracking-[0.12em] text-slate-500">
                <MapPin size={14} />
                BATAM, INDONESIA
              </span>
            </div>
          </div>

          {/* PROFILE CARD */}
          <div className="relative mx-auto w-full max-w-sm fade-up" style={{ animationDelay: "180ms" }}>
            <div
              aria-hidden
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-gradient-to-br from-sky-200 to-indigo-200 opacity-70"
            />
            <div className="relative bg-white border border-slate-200 rounded-3xl p-5 shadow-xl shadow-slate-900/5">
              {/* PROFILE PHOTO: place your image at public/profile.jpg */}
              <div className="relative aspect-[4/5] rounded-2xl bg-slate-100 overflow-hidden">
                <Image
                  src="/lintang.png"
                  alt="Portrait of Lintang Maharani"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              {/* PROFILE DETAILS */}
              <div className="pt-5 px-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Lintang Maharani
                    </h3>

                    <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-500">
                      <GraduationCap size={15} />
                      Informatics Engineering
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    <Code2 size={19} className="text-slate-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 -left-5 md:-left-10 bg-white/90 backdrop-blur border border-slate-200 rounded-2xl p-4 shadow-lg shadow-slate-900/5 float-gently">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center">
                  <Terminal size={18} className="text-white" />
                </div>

                <div>
                  <p className="text-xs text-slate-400">Currently</p>

                  <p className="text-sm font-medium text-slate-800">
                    Building &amp; Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-200 border border-slate-200 bg-white rounded-2xl shadow-sm overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-7 text-center md:text-left transition-all duration-500 hover:bg-slate-50 hover:-translate-y-0.5">
              <p className="text-3xl font-semibold tracking-tight text-slate-950">
                {s.value}
              </p>
              <p className="mt-1.5 text-xs tracking-wide text-slate-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AREAS OF INTEREST */}
      <section className="relative border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          {/* SECTION HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs tracking-[0.2em] font-semibold text-sky-600">
                WHAT I DO
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3">
                Areas of interest
              </h2>
            </div>

            <p className="text-slate-500 text-sm max-w-md leading-7">
              Constantly exploring different areas of technology to build
              practical, thoughtful, and impactful solutions.
            </p>
          </div>

          {/* INTEREST CARDS */}
          <div className="grid md:grid-cols-3 gap-5">
            {interests.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative border border-slate-200 rounded-2xl p-7 bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-900/5 hover:-translate-y-1 transition-all duration-500 fade-up"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white group-hover:bg-sky-600 transition-colors">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-semibold tracking-widest text-slate-300">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-semibold text-lg">{item.title}</h3>

                  <p className="text-sm text-slate-500 leading-7 mt-3">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-[0.8fr_1.4fr] gap-10 items-start">
          <div>
            <p className="text-xs tracking-[0.2em] font-semibold text-sky-600">
              TOOLBOX
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3">
              Tech I work with
            </h2>
            <p className="mt-4 text-sm text-slate-500 leading-7 max-w-sm">
              A modern stack for building fast, maintainable, and polished
              products from interface to database.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {stack.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm hover:border-slate-900 hover:text-slate-900 transition"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="relative border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          {/* SECTION HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs tracking-[0.2em] font-semibold text-sky-600">
                PORTFOLIO
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3">
                Selected projects
              </h2>
            </div>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950 transition"
            >
              Explore all projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* PROJECT GRID */}
          <div className="grid md:grid-cols-2 gap-7">
            {projects.map((p) => (
              <Link
                key={p.name}
                href="/projects"
                className="group border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1 transition-all duration-500 fade-up"
              >
                {/* PREVIEW */}
                <div className="relative aspect-[16/9] bg-gradient-to-br from-[#e9eef5] via-[#dfe8f3] to-[#cfdcee] flex items-center justify-center overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage:
                        "radial-gradient(#94a3b8 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="relative w-[68%] rounded-xl border border-white/70 bg-white/80 backdrop-blur shadow-lg p-4 group-hover:scale-105 transition-transform duration-500">
                    <div className="flex gap-1.5 mb-3">
                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                    </div>
                    <p className="text-xl font-semibold tracking-tight text-slate-500 uppercase">
                      {p.name}
                    </p>
                    <div className="mt-3 space-y-1.5">
                      <div className="h-1.5 w-full rounded bg-slate-200" />
                      <div className="h-1.5 w-4/5 rounded bg-slate-200" />
                      <div className="h-1.5 w-3/5 rounded bg-slate-200" />
                    </div>
                  </div>

                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                    <Sparkles size={12} />
                    {p.tag}
                  </span>
                </div>

                {/* DETAILS */}
                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-xl">{p.name}</h3>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 mt-3 leading-7">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {p.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5 text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-16 md:px-16 md:py-20 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative">
            <p className="text-xs tracking-[0.2em] font-semibold text-sky-400">
              LET&apos;S WORK TOGETHER
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Have an idea or opportunity?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400">
              I&apos;m open to internships, collaborations, and new
              challenges. Let&apos;s build something meaningful together.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-slate-900 hover:bg-slate-100 hover:-translate-y-0.5 transition-all"
              >
                <Mail size={17} />
                Get in touch
              </Link>

              <Link
                href="/cv"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3.5 text-sm font-medium text-slate-200 hover:border-slate-400 hover:-translate-y-0.5 transition-all"
              >
                <Download size={17} />
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}