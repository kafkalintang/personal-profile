
"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Target,
  Rocket,
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Globe,
  Lightbulb,
  TrendingUp,
  Compass,
  Sparkles,
  CircleDot,
} from "lucide-react";

const goals = [
  {
    number: "01",
    category: "Career",
    title: "Become a Software Engineer",
    description:
      "Build a strong foundation in software engineering, develop scalable applications, and contribute to products that solve real problems.",
    icon: Code2,
    status: "In progress",
    steps: ["Strengthen fundamentals", "Build real projects", "Gain experience"],
  },
  {
    number: "02",
    category: "Education",
    title: "Continue to a Bachelor's Degree",
    description:
      "Continue my academic journey, deepen my understanding of technology, and explore opportunities for higher education.",
    icon: GraduationCap,
    status: "Future goal",
    steps: ["Explore universities", "Prepare academically", "Pursue further study"],
  },
  {
    number: "03",
    category: "Technology",
    title: "Build Meaningful Products",
    description:
      "Create useful digital products by combining software engineering, thoughtful design, innovation, and user-centered thinking.",
    icon: Rocket,
    status: "In progress",
    steps: ["Explore problems", "Develop prototypes", "Improve through feedback"],
  },
  {
    number: "04",
    category: "Entrepreneurship",
    title: "Build My Own Startup",
    description:
      "Turn ideas into sustainable products or businesses, learn how to build a company, and create solutions that bring real value.",
    icon: Lightbulb,
    status: "Long-term goal",
    steps: ["Explore ideas", "Validate opportunities", "Build a business"],
  },
  {
    number: "05",
    category: "Personal Growth",
    title: "Become Globally Competitive",
    description:
      "Improve my communication, technical knowledge, and confidence to collaborate with people and opportunities across the world.",
    icon: Globe,
    status: "In progress",
    steps: ["Improve English", "Learn continuously", "Explore global opportunities"],
  },
  {
    number: "06",
    category: "Financial",
    title: "Build Financial Independence",
    description:
      "Develop multiple income opportunities, manage my finances wisely, and create a stable foundation for my future.",
    icon: TrendingUp,
    status: "In progress",
    steps: ["Manage savings", "Grow income", "Plan long-term"],
  },
];

const roadmap = [
  {
    period: "NOW",
    label: "Building the foundation",
    title: "Learn, build & explore",
    description:
      "Complete my diploma journey, gain professional experience, strengthen technical skills, and build a portfolio that reflects my capabilities.",
    items: [
      "Complete internship experience",
      "Develop portfolio projects",
      "Improve technical skills",
      "Prepare for graduation",
    ],
  },
  {
    period: "NEXT",
    label: "Taking the next step",
    title: "Career & higher education",
    description:
      "Transition into the professional world, explore opportunities for further education, and continue developing as an engineer.",
    items: [
      "Find a full-time opportunity",
      "Explore bachelor's degree pathways",
      "Expand professional network",
      "Build independent projects",
    ],
  },
  {
    period: "FUTURE",
    label: "Expanding possibilities",
    title: "Creating bigger opportunities",
    description:
      "Explore entrepreneurship, build innovative products, pursue global opportunities, and create a career that combines technology and business.",
    items: [
      "Build a startup",
      "Work on impactful products",
      "Explore international opportunities",
      "Achieve financial independence",
    ],
  },
];

export default function GoalsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 lg:px-20">

        {/* HERO */}
        <section className="animate-[fadeIn_0.8s_ease-out]">
          <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
            <Target size={16} />
            <span>Goals & Direction</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
                A direction worth
                <span className="mt-2 block text-slate-400">
                  working towards.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
                I may not have everything figured out yet, but I know the
                kind of future I want to build. These goals represent the
                direction I am moving towards, one step at a time.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-slate-100 p-3">
                  <Compass size={22} className="text-slate-700" />
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Direction
                </span>
              </div>

              <h2 className="mt-6 text-xl font-semibold text-slate-900">
                Purpose over pressure.
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                My goals are not deadlines for comparison. They are reminders
                of what I want to work towards and why I keep learning.
              </p>
            </div>
          </div>
        </section>

        {/* VISION */}
        <section className="mt-16 border-y border-slate-200 py-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-sm leading-7 text-slate-500">
              A personal roadmap shaped by ambition, curiosity, discipline,
              and the willingness to keep learning.
            </p>

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Personal roadmap · 2026+
            </span>
          </div>
        </section>

        {/* GOALS GRID */}
        <section className="mt-20">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              What I am working towards
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              My aspirations
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Different ambitions, one continuous journey of growth.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {goals.map((goal, index) => {
              const Icon = goal.icon;

              return (
                <article
                  key={goal.number}
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
                      {goal.number}
                    </span>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                      {goal.category}
                    </span>

                    <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500">
                      {goal.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold leading-snug text-slate-900 md:text-2xl">
                    {goal.title}
                  </h3>

                  <p className="mt-5 text-sm leading-8 text-slate-500">
                    {goal.description}
                  </p>

                  <div className="mt-7 space-y-3 border-t border-slate-100 pt-6">
                    {goal.steps.map((step) => (
                      <div
                        key={step}
                        className="flex items-center gap-3 text-sm text-slate-500"
                      >
                        <CircleDot size={15} className="text-slate-300" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-end">
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

        {/* ROADMAP */}
        <section className="mt-24">
          <div className="mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              The bigger picture
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              My roadmap
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Not everything happens at once. I am learning to focus on the
              next step while keeping the bigger picture in mind.
            </p>
          </div>

          <div className="relative ml-3 border-l border-slate-200 md:ml-6">
            {roadmap.map((item, index) => (
              <div
                key={item.period}
                className="relative pb-14 pl-8 last:pb-0 md:pl-12"
                style={{
                  animation: `fadeIn 0.7s ease-out ${index * 0.15}s both`,
                }}
              >
                <div className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-slate-400 bg-[#f8fafc]" />

                <div className="grid gap-8 lg:grid-cols-[180px_1fr]">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                      {item.period}
                    </span>

                    <p className="mt-3 text-sm text-slate-500">
                      {item.label}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-500">
                      {item.description}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {item.items.map((step) => (
                        <div
                          key={step}
                          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 transition hover:border-slate-300"
                        >
                          <CircleDot
                            size={15}
                            className="shrink-0 text-slate-400"
                          />
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MOTIVATION */}
        <section className="mt-24 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 md:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div className="flex h-56 items-center justify-center rounded-3xl bg-slate-50">
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-slate-200">
                <div className="absolute inset-4 rounded-full border border-dashed border-slate-300" />
                <Rocket
                  size={52}
                  strokeWidth={1}
                  className="text-slate-700"
                />
              </div>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                A reminder to myself
              </p>

              <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl">
                Small steps are still progress.
              </h2>

              <p className="mt-6 text-sm leading-8 text-slate-500 md:text-base">
                I know that building the future I dream of takes time.
                There will be uncertain days, unexpected challenges, and
                plans that change. But I want to keep showing up, keep
                learning, and keep believing that the effort I put in
                today will mean something tomorrow.
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
            The journey is still unfolding.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
            I am always looking for opportunities to learn, collaborate,
            grow, and take another step towards the things I believe in.
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
