"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Sparkles,
  Code2,
  Lightbulb,
  Rocket,
  Laptop,
  Heart,
  GraduationCap,
  Layers3,
  Compass,
  Coffee,
} from "lucide-react";

const journey = [
  {
    year: "2021 — 2024",
    title: "High School",
    subtitle: "Science Major · SMAN 18 Batam",
    description:
      "Building my academic foundation, exploring different interests, and beginning to discover my curiosity for technology and problem-solving.",
    icon: GraduationCap,
  },
  {
    year: "2024 — Present",
    title: "Informatics Engineering",
    subtitle: "Diploma · Politeknik Negeri Batam",
    description:
      "Learning software development, information systems, programming, databases, and how technology can be transformed into practical solutions.",
    icon: Laptop,
  },
  {
    year: "2026 — Present",
    title: "Professional Experience",
    subtitle: "IT Intern · Software Development",
    description:
      "Experiencing real working environments, contributing to software projects, collaborating with others, and learning how development works beyond the classroom.",
    icon: Code2,
  },
];

const interests = [
  {
    title: "Software Development",
    description:
      "Creating digital products, building web applications, and transforming ideas into functional experiences.",
    icon: Code2,
  },
  {
    title: "Artificial Intelligence",
    description:
      "Exploring intelligent systems, AI applications, and how technology can make processes more efficient.",
    icon: Sparkles,
  },
  {
    title: "Product & Innovation",
    description:
      "Thinking about user experiences, product development, meaningful solutions, and ideas worth building.",
    icon: Lightbulb,
  },
  {
    title: "Entrepreneurship",
    description:
      "Learning to see opportunities, developing ideas, and someday building something of my own.",
    icon: Rocket,
  },
];

const values = [
  {
    number: "01",
    title: "Stay curious",
    description:
      "I believe curiosity is one of the most valuable things a person can have. There is always something new to learn, explore, and understand.",
  },
  {
    number: "02",
    title: "Build with purpose",
    description:
      "I want to build things that are not only technically functional but also useful, thoughtful, and meaningful to the people who use them.",
  },
  {
    number: "03",
    title: "Keep growing",
    description:
      "Growth takes time. I embrace challenges, mistakes, new experiences, and the process of becoming better than I was yesterday.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] overflow-hidden">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-20">

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-center">

          {/* INTRO */}

          <div className="animate-[fadeInUp_0.8s_ease-out]">

            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-slate-400 mb-7">
              <Sparkles size={15} />
              A little about me
            </div>

            <h1 className="text-5xl md:text-7xl xl:text-8xl font-semibold tracking-tight leading-[1.05] text-slate-950">
              More than
              <br />

              <span className="text-slate-400">
                just code.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mt-8 leading-8 max-w-2xl">
              I'm Lintang Maharani, an Informatics Engineering
              student who enjoys exploring technology,
              creating things, and figuring out how ideas
              can become something real.
            </p>

            <p className="text-sm md:text-base text-slate-500 mt-5 leading-8 max-w-2xl">
              Somewhere between writing code, learning new
              technologies, making mistakes, and starting
              over again, I found myself enjoying the process
              of building things. And I'm still discovering
              where that journey will take me.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-9">

              <a
                href="#my-story"
                className="inline-flex items-center gap-2 bg-slate-950 text-white px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1"
              >
                Discover my story
                <ArrowUpRight size={17} />
              </a>

              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:border-slate-400 transition-all duration-300"
              >
                Explore my work
              </a>

            </div>

          </div>

          {/* PROFILE PHOTO */}

          <div className="relative max-w-md mx-auto w-full animate-[fadeIn_1.2s_ease-out]">

            <div className="absolute -top-7 -right-7 w-32 h-32 border border-slate-200 rounded-full animate-[spin_25s_linear_infinite]" />

            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-slate-100 rounded-full blur-3xl opacity-70" />

            <div className="relative bg-white p-4 md:p-5 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-700">

              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-slate-100">

                <Image
                  src="/lintang.png"
                  alt="Lintang Maharani"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 450px"
                />

              </div>

              <div className="flex items-center justify-between gap-4 px-2 pt-5 pb-2">

                <div>
                  <h2 className="text-lg font-semibold text-slate-950">
                    Lintang Maharani
                  </h2>

                  <p className="text-sm text-slate-500 mt-1">
                    Informatics Engineering Student
                  </p>
                </div>

                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-100">
                  <Code2
                    size={20}
                    className="text-slate-700"
                  />
                </div>

              </div>

            </div>

            {/* FLOATING CARD */}

            <div className="absolute -bottom-5 -right-3 md:-right-8 bg-white border border-slate-200 shadow-lg rounded-2xl px-5 py-4 animate-[float_4s_ease-in-out_infinite]">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                  <Lightbulb size={18} className="text-slate-700" />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Currently
                  </p>

                  <p className="text-sm font-medium text-slate-800">
                    Exploring & Building
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* PERSONAL INTRO */}

      <section
        id="my-story"
        className="border-y border-slate-200 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20">

            {/* SECTION LABEL */}

            <div>

              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
                01 / My story
              </p>

              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-950 mt-5 leading-tight">
                The person
                behind the
                projects.
              </h2>

            </div>

            {/* STORY */}

            <div className="space-y-6 text-slate-500 leading-8 text-sm md:text-base">

              <p>
                My journey in technology started with curiosity.
                I was fascinated by how applications, websites,
                and digital systems could be created to solve
                everyday problems. That curiosity gradually
                became an interest in software development
                and the world of information technology.
              </p>

              <p>
                Currently, I'm pursuing a Diploma in Informatics
                Engineering at Politeknik Negeri Batam.
                Throughout my academic journey, I've been
                exploring programming, software development,
                databases, web technologies, and different
                areas of computer science.
              </p>

              <p>
                Outside the classroom, I enjoy learning through
                personal projects, organizations, internships,
                competitions, and new experiences. I believe
                some of the most valuable lessons don't always
                come from textbooks, but from actually trying,
                building, collaborating, and making mistakes.
              </p>

              <p>
                I don't have everything figured out yet, and
                honestly, I think that's part of the beauty
                of the journey. I'm here to learn, grow,
                experiment, and create opportunities for
                myself along the way.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* JOURNEY TIMELINE */}

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">

        <div className="mb-14">

          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
            02 / The journey so far
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-950 mt-5">
            Chapters of growth.
          </h2>

          <p className="text-slate-500 mt-5 leading-7 max-w-2xl">
            Every experience has played a part in shaping
            the way I learn, think, and approach technology.
          </p>

        </div>

        <div className="relative">

          {/* TIMELINE LINE */}

          <div className="absolute left-[23px] md:left-[31px] top-6 bottom-6 w-px bg-slate-200" />

          <div className="space-y-12">

            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative grid md:grid-cols-[100px_1fr] gap-6 md:gap-10 group"
                >

                  {/* ICON */}

                  <div className="relative z-10">

                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl border border-slate-200 bg-white flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all duration-500">

                      <Icon
                        size={22}
                        strokeWidth={1.5}
                      />

                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="bg-white border border-slate-200 rounded-3xl p-7 md:p-9 hover:border-slate-400 hover:shadow-md transition-all duration-500">

                    <p className="text-xs tracking-widest uppercase text-slate-400 font-medium">
                      {item.year}
                    </p>

                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-950 mt-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-400 mt-2">
                      {item.subtitle}
                    </p>

                    <p className="text-sm text-slate-500 leading-7 mt-5 max-w-2xl">
                      {item.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* WHAT I'M INTERESTED IN */}

      <section className="bg-white border-y border-slate-200">

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">

          <div className="max-w-3xl mb-14">

            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
              03 / Things I love exploring
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-950 mt-5">
              Driven by curiosity.
            </h2>

            <p className="text-slate-500 mt-5 leading-7">
              Technology is a broad world, and these are some
              of the areas that continuously inspire me to
              explore, learn, and build.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">

            {interests.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group bg-[#f8fafc] border border-slate-200 rounded-3xl p-7 hover:bg-white hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-500"
                >

                  <div className="flex justify-between items-center">

                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white transition-all duration-500">

                      <Icon size={21} />

                    </div>

                    <span className="text-xs text-slate-300 tracking-widest">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="text-lg font-semibold text-slate-950 mt-7">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-7 mt-4">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* MY PRINCIPLES */}

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">

          {/* LEFT */}

          <div>

            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
              04 / What I believe
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-950 mt-5 leading-tight">
              A few things
              I carry with me.
            </h2>

            <div className="mt-8 w-16 h-1 bg-slate-950 rounded-full" />

            <p className="text-sm text-slate-500 leading-7 mt-7">
              These are not rules, but reminders of the
              kind of person and developer I hope to become.
            </p>

          </div>

          {/* RIGHT */}

          <div className="space-y-5">

            {values.map((item) => (
              <div
                key={item.number}
                className="group border-b border-slate-200 pb-7"
              >

                <div className="flex gap-6">

                  <span className="text-xs tracking-widest text-slate-400 pt-1">
                    {item.number}
                  </span>

                  <div>

                    <h3 className="text-xl font-semibold tracking-tight text-slate-950 group-hover:text-slate-500 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-500 leading-7 mt-4">
                      {item.description}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* PERSONAL NOTE */}

      <section className="bg-white border-t border-slate-200">

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">

          <div className="max-w-4xl mx-auto text-center">

            <Coffee
              size={28}
              strokeWidth={1.4}
              className="mx-auto text-slate-400"
            />

            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mt-6">
              A note from me
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-slate-950 mt-6">
              I'm not just learning
              how to build software.
              <span className="text-slate-400">
                {" "}I'm learning how
              </span>
              to build a life, too.
            </h2>

            <p className="text-sm md:text-base text-slate-500 leading-8 mt-8 max-w-2xl mx-auto">
              A life filled with meaningful work, continuous
              learning, opportunities to make a difference,
              and the courage to dream a little bigger.
            </p>

          </div>

        </div>

      </section>


      {/* FOOTER CTA */}

      <section className="border-t border-slate-200">

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            <div>

              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400">
                What comes next?
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-slate-950">
                Still learning. Still building.
              </h2>

              <p className="text-sm text-slate-500 leading-7 mt-4 max-w-xl">
                Explore some of the things I've been working
                on and the ideas I've turned into projects.
              </p>

            </div>

            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-2 bg-slate-950 text-white rounded-xl px-6 py-3.5 text-sm font-medium hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1 shrink-0"
            >
              Explore my projects
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

      </section>


      {/* ANIMATIONS */}

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

    </main>
  );
}