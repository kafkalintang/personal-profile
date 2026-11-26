
"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Brain,
  Code2,
  Cpu,
  Globe2,
  Lightbulb,
  LineChart,
  Rocket,
  BookOpen,
  Camera,
  BriefcaseBusiness,
  Sparkles,
  Heart,
} from "lucide-react";

const interests = [
  {
    number: "01",
    title: "Software Engineering",
    subtitle: "Building things that work",
    description:
      "I enjoy turning ideas into functional digital products. From frontend development to backend logic, I love exploring how software can solve everyday problems.",
    icon: Code2,
    tags: ["Web Development", "Flutter", "System Design"],
  },
  {
    number: "02",
    title: "Artificial Intelligence",
    subtitle: "Exploring the future",
    description:
      "AI fascinates me because of its potential to change how people work, learn, and create. I am interested in intelligent systems, NLP, and responsible AI development.",
    icon: Brain,
    tags: ["AI", "NLP", "Responsible AI"],
  },
  {
    number: "03",
    title: "Internet of Things",
    subtitle: "Connecting the physical & digital",
    description:
      "Exploring how hardware, sensors, software, and connectivity can work together to create smarter and more meaningful solutions.",
    icon: Cpu,
    tags: ["IoT", "Automation", "Embedded Systems"],
  },
  {
    number: "04",
    title: "Data & Analytics",
    subtitle: "Finding meaning in data",
    description:
      "I am curious about how data can reveal patterns, support decisions, and help people understand problems through meaningful visualizations.",
    icon: LineChart,
    tags: ["Power BI", "Data Visualization", "Analytics"],
  },
  {
    number: "05",
    title: "Entrepreneurship",
    subtitle: "Ideas into opportunities",
    description:
      "I love thinking about products, startups, business models, and how technology can become something useful, sustainable, and impactful.",
    icon: Rocket,
    tags: ["Startups", "Product", "Innovation"],
  },
  {
    number: "06",
    title: "Product & Management",
    subtitle: "Beyond writing code",
    description:
      "I am interested in understanding users, organizing ideas, managing projects, and connecting technology with real-world needs.",
    icon: BriefcaseBusiness,
    tags: ["Product Management", "Strategy", "UX"],
  },
];

const explorations = [
  {
    title: "Languages",
    description:
      "Learning English and exploring Mandarin to communicate across cultures and broaden my opportunities.",
    icon: Globe2,
  },
  {
    title: "Reading & Learning",
    description:
      "Collecting ideas from books, articles, technology, business, and the experiences of other people.",
    icon: BookOpen,
  },
  {
    title: "Creative Ideas",
    description:
      "Writing, designing, imagining projects, and finding inspiration in little things around me.",
    icon: Lightbulb,
  },
  {
    title: "Capturing Moments",
    description:
      "Keeping memories, documenting experiences, and appreciating the details of everyday life.",
    icon: Camera,
  },
];

export default function InterestsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-20">

        {/* HERO */}
        <section className="animate-[fadeIn_0.8s_ease-out]">
          <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
            <Sparkles size={16} />
            <span>Interests & Curiosity</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
                Curious about
                <span className="mt-2 block text-slate-400">
                  more than code.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
                Technology is where my curiosity begins, but it doesn't end
                there. I am interested in ideas, people, business, creativity,
                and the possibilities that emerge when different fields come
                together.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-slate-100 p-3">
                  <Heart size={22} className="text-slate-700" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  A little about me
                </span>
              </div>

              <h2 className="mt-6 text-xl font-semibold text-slate-900">
                Always exploring.
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                I believe being curious makes us better builders, thinkers,
                collaborators, and human beings.
              </p>
            </div>
          </div>
        </section>

        {/* INTEREST INTRO */}
        <section className="mt-16 border-y border-slate-200 py-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-sm leading-7 text-slate-500">
              Fields I enjoy exploring, ideas I keep coming back to, and
              things I would love to learn more about.
            </p>

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Areas of curiosity · 06
            </span>
          </div>
        </section>

        {/* INTEREST CARDS */}
        <section className="mt-20">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              The things I explore
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Areas of interest
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {interests.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg md:p-8"
                  style={{
                    animation: `fadeIn 0.7s ease-out ${index * 0.12}s both`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="rounded-2xl bg-slate-100 p-3 transition duration-300 group-hover:bg-slate-200">
                      <Icon size={22} className="text-slate-700" />
                    </div>

                    <span className="text-sm font-medium text-slate-300">
                      {item.number}
                    </span>
                  </div>

                  <p className="mt-7 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-slate-900 md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-8 text-slate-500">
                    {item.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-500 transition hover:bg-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-end border-t border-slate-100 pt-5">
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

        {/* BEYOND TECHNOLOGY */}
        <section className="mt-24">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              Outside the technical side
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Beyond technology
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Other things that keep me inspired, help me grow, and make
              life a little more interesting.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {explorations.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    animation: `fadeIn 0.7s ease-out ${index * 0.12}s both`,
                  }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 transition duration-300 group-hover:bg-slate-200">
                    <Icon size={20} className="text-slate-700" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* PERSONAL PHILOSOPHY */}
        <section className="mt-24 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 md:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div className="flex h-56 items-center justify-center rounded-3xl bg-slate-50">
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-slate-200">
                <div className="absolute inset-4 rounded-full border border-dashed border-slate-300" />
                <Lightbulb
                  size={52}
                  strokeWidth={1}
                  className="text-slate-700"
                />
              </div>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                My philosophy
              </p>

              <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl">
                Learning doesn't have to stay inside one box.
              </h2>

              <p className="mt-6 text-sm leading-8 text-slate-500 md:text-base">
                I want to keep learning across disciplines, challenge my
                perspectives, and connect seemingly unrelated ideas. Sometimes
                the most interesting solutions come from looking beyond what
                we already know.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 rounded-[2rem] border border-slate-200 bg-white p-8 text-center md:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
            <Sparkles size={24} className="text-slate-700" />
          </div>

          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Always open to new ideas.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
            If you share similar interests or have an idea worth exploring,
            I would love to hear from you.
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
