
"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Layers3,
  FolderKanban,
  Sparkles,
  Globe2,
  Database,
  Smartphone,
  Terminal,
  Lightbulb,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Requify",
    category: "AI · Software Engineering",
    description:
      "An AI-assisted platform designed to analyze software requirements, helping identify functional and non-functional requirements, ambiguity, duplication, and incompleteness.",
    tags: ["Next.js", "AI", "NLP", "Software Engineering"],
    icon: Sparkles,
    status: "In Development",
    featured: true,
  },
  {
    number: "02",
    name: "Personal Savings",
    category: "Web Application",
    description:
      "A personal finance dashboard designed to organize multiple accounts, monitor balances, and manage financial activities through a simple interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: Database,
    status: "In Development",
    featured: false,
  },
  {
    number: "03",
    name: "IoT Experiments",
    category: "Internet of Things",
    description:
      "A collection of IoT experiments and simulations exploring hardware interaction, sensors, electronic components, and embedded systems.",
    tags: ["IoT", "Wokwi", "Arduino"],
    icon: Cpu,
    status: "Exploration",
    featured: false,
  },
  {
    number: "04",
    name: "Personal Profile",
    category: "Web Development",
    description:
      "A personal digital space showcasing my journey, projects, experiences, ideas, and interests in technology and software development.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    icon: Globe2,
    status: "In Development",
    featured: false,
  },
];

const explorations = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building web applications with modern frameworks, structured code, and thoughtful user experiences.",
  },
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    description:
      "Exploring AI, natural language processing, and practical applications of intelligent systems.",
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description:
      "Learning to create accessible, intuitive, and functional digital products across platforms.",
  },
  {
    icon: Layers3,
    title: "Systems & Technology",
    description:
      "Exploring the intersection of software, hardware, system architecture, and technology.",
  },
];

export default function ProjectsPage() {
  const featuredProject = projects.find((project) => project.featured)!;
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#1e293b]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12">

        {/* HEADER */}
        <section className="animate-[fadeIn_0.7s_ease-out]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-slate-400" />
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Selected works & experiments
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                Things I&apos;ve
                <br />
                been building.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">
                A collection of projects, ideas, and experiments shaped by
                curiosity, learning, and my interest in technology.
              </p>
            </div>

            <div className="flex items-center gap-3 pb-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <FolderKanban size={21} className="text-slate-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-slate-900">
                  04
                </p>
                <p className="text-xs text-slate-500">
                  Projects & experiments
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Code2,
              title: "Development",
              text: "Building digital products",
            },
            {
              icon: Lightbulb,
              title: "Experimentation",
              text: "Learning through exploration",
            },
            {
              icon: Sparkles,
              title: "Innovation",
              text: "Turning ideas into possibilities",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <item.icon
                size={20}
                className="mb-5 text-slate-500 transition-colors group-hover:text-slate-900"
              />

              <h3 className="text-sm font-semibold text-slate-800">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        {/* FEATURED PROJECT */}
        <section className="mt-20">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Spotlight
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-900">
                Featured project
              </h2>
            </div>

            <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-500">
              01 / 04
            </span>
          </div>

          <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white">
            <div className="grid lg:grid-cols-2">

              {/* PROJECT VISUAL */}
              <div className="relative min-h-[320px] overflow-hidden bg-[#eef2f6] p-8 sm:p-12">
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/70 blur-3xl" />
                <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-slate-300/30 blur-3xl" />

                <div className="relative flex h-full min-h-[260px] flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
                        <Sparkles size={17} />
                      </div>

                      <span className="text-sm font-semibold text-slate-700">
                        Requify
                      </span>
                    </div>

                    <span className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-500">
                      AI-powered
                    </span>
                  </div>

                  <div className="my-8 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
                    <div className="mb-5 flex items-center justify-between">
                      <p className="text-xs font-medium text-slate-600">
                        Requirement Analysis
                      </p>

                      <span className="flex items-center gap-1.5 text-[10px] text-slate-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                        Analysis
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-slate-700" />
                          <span className="text-[10px] font-semibold text-slate-700">
                            Functional Requirement
                          </span>
                        </div>

                        <p className="text-xs leading-5 text-slate-500">
                          System shall allow users to manage their account.
                        </p>
                      </div>

                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-slate-400" />
                          <span className="text-[10px] font-semibold text-slate-700">
                            Quality Analysis
                          </span>
                        </div>

                        <div className="flex gap-2">
                          <span className="rounded-md bg-slate-200 px-2 py-1 text-[10px] text-slate-600">
                            Ambiguity
                          </span>
                          <span className="rounded-md bg-slate-200 px-2 py-1 text-[10px] text-slate-600">
                            Completeness
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400">
                    Turning requirements into clearer insights.
                  </p>
                </div>
              </div>

              {/* PROJECT DETAILS */}
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <div className="mb-6 flex items-center gap-3">
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                    {featuredProject.category}
                  </span>

                  <span className="text-xs text-slate-400">
                    {featuredProject.status}
                  </span>
                </div>

                <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
                  {featuredProject.name}
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  {featuredProject.description}
                </p>

                <div className="mt-7">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-400">
                    Technology
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-9 flex items-center gap-2 text-sm text-slate-400">
                  <Terminal size={16} />
                  <span>Currently being developed</span>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* OTHER PROJECTS */}
        <section className="mt-20">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              More explorations
            </p>

            <h2 className="mt-2 text-xl font-semibold text-slate-900">
              Other projects
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <article
                key={project.number}
                className="group rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40 sm:p-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-7 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white">
                    <project.icon size={21} />
                  </div>

                  <span className="text-xs text-slate-400">
                    {project.number}
                  </span>
                </div>

                <p className="text-xs text-slate-400">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {project.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-xs text-slate-400">
                    {project.status}
                  </span>

                  <div className="flex items-center gap-1 text-xs text-slate-500 transition-all group-hover:gap-2 group-hover:text-slate-900">
                    Explore project
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPLORATION */}
        <section className="mt-20">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 sm:p-12">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Beyond the projects
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                What I&apos;m exploring.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Technology is a constantly evolving field. These are some of
                the areas I am currently curious about and working to
                understand better.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {explorations.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                    <item.icon size={19} className="text-slate-600" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 border-t border-slate-200 pt-12">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Have something in mind?
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                Let&apos;s create something meaningful.
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
                I&apos;m always open to ideas, collaborations, and opportunities
                to learn something new.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-xl bg-slate-900 px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-slate-700"
            >
              Get in touch
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 flex flex-col justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-400">
            Designed & built with curiosity.
          </p>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Lintang Maharani
          </p>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
