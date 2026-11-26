
import {
  ArrowUpRight,
  GraduationCap,
  BookOpen,
  CalendarDays,
  Award,
  School,
  Laptop,
  Sparkles,
} from "lucide-react";

const education = [
  {
    level: "Higher Education",
    period: "2024 — Present",
    status: "Currently Studying",
    institution: "Politeknik Negeri Batam",
    program: "Diploma III — Informatics Engineering",
    location: "Batam, Indonesia",
    description:
      "Currently pursuing a Diploma III in Informatics Engineering, focusing on software development, information technology, programming, and practical problem-solving through projects and academic activities.",
    highlights: [
      "Software Development",
      "Web Programming",
      "Database Management",
      "Information Technology",
    ],
    icon: GraduationCap,
    number: "01",
  },
  {
    level: "Secondary Education",
    period: "2021 — 2024",
    status: "Graduated",
    institution: "SMAN 18 Batam",
    program: "Mathematics and Natural Sciences (MIPA)",
    location: "Batam, Indonesia",
    description:
      "Completed senior high school education in the Mathematics and Natural Sciences stream, developing foundational knowledge, analytical thinking, problem-solving skills, and discipline.",
    highlights: [
      "Mathematics",
      "Natural Sciences",
      "Analytical Thinking",
      "Problem Solving",
    ],
    icon: School,
    number: "02",
  },
];

const learningAreas = [
  {
    title: "Software Development",
    description:
      "Exploring software engineering principles, application development, and building practical digital solutions.",
    icon: Laptop,
  },
  {
    title: "Technology & Computing",
    description:
      "Learning about computer systems, programming, databases, and emerging technologies.",
    icon: BookOpen,
  },
  {
    title: "Continuous Learning",
    description:
      "Expanding knowledge through independent learning, projects, communities, and hands-on experience.",
    icon: Sparkles,
  },
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] overflow-hidden">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16">
        <div className="max-w-3xl animate-[fadeInUp_0.7s_ease-out]">

          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-slate-400 mb-6">
            <GraduationCap size={16} />
            Academic journey
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-950 leading-tight">
            Education
            <span className="text-slate-400">.</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-500 leading-8 max-w-2xl">
            Every classroom, project, and learning experience has
            contributed to the person I am becoming. Here is a
            glimpse of my academic journey so far.
          </p>

          <div className="flex items-center gap-3 mt-8">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
              <BookOpen size={18} className="text-slate-700" />
            </div>

            <div>
              <p className="text-sm font-medium text-slate-800">
                Learning by doing
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Education, experience & growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">

        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400">
              My background
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 mt-3">
              Academic history
            </h2>
          </div>

          <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-white border border-slate-200 items-center justify-center">
            <GraduationCap size={22} className="text-slate-500" />
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* TIMELINE LINE */}
          <div className="absolute left-[19px] md:left-[27px] top-8 bottom-8 w-px bg-slate-200" />

          <div className="space-y-10">

            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="relative pl-14 md:pl-20 group animate-[fadeInUp_0.8s_ease-out]"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >

                  {/* TIMELINE ICON */}
                  <div className="absolute left-0 top-7 w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center z-10 group-hover:border-slate-400 group-hover:scale-105 transition-all duration-300">
                    <Icon
                      size={20}
                      className="text-slate-600 md:w-6 md:h-6"
                    />
                  </div>

                  {/* CARD */}
                  <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">

                    {/* CARD HEADER */}
                    <div className="p-7 md:p-10">

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
                            {item.level}
                          </span>

                          <span className="w-1 h-1 rounded-full bg-slate-300" />

                          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
                            {item.status}
                          </span>
                        </div>

                        <div className="inline-flex items-center gap-2 text-xs text-slate-400">
                          <CalendarDays size={15} />
                          {item.period}
                        </div>
                      </div>

                      {/* INSTITUTION */}
                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-950 mt-7">
                        {item.institution}
                      </h3>

                      {/* PROGRAM */}
                      <p className="text-base md:text-lg text-slate-500 mt-3">
                        {item.program}
                      </p>

                      {/* LOCATION */}
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-4">
                        <School size={15} />
                        {item.location}
                      </div>

                      {/* DESCRIPTION */}
                      <p className="text-sm text-slate-500 leading-8 mt-7 max-w-3xl">
                        {item.description}
                      </p>

                      {/* HIGHLIGHTS */}
                      <div className="mt-8">

                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 mb-4">
                          Areas of learning
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="px-3 py-2 text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CARD FOOTER */}
                    <div className="px-7 md:px-10 py-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        Academic journey / {item.number}
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="text-slate-400 group-hover:text-slate-700 transition"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEARNING SECTION */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">

          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400">
              Beyond the classroom
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-950 mt-4">
              What I continue to learn.
            </h2>

            <p className="text-sm text-slate-500 leading-7 mt-5">
              Education doesn't stop at lectures or textbooks.
              I continue to explore different areas of technology
              through projects, practice, and independent learning.
            </p>
          </div>

          {/* LEARNING CARDS */}
          <div className="grid md:grid-cols-3 gap-6">

            {learningAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="group p-7 border border-slate-200 rounded-3xl hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 animate-[fadeInUp_0.7s_ease-out]"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >

                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition">
                    <Icon size={22} className="text-slate-700" />
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight text-slate-950 mt-6">
                    {area.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-7 mt-3">
                    {area.description}
                  </p>

                  <div className="mt-6 w-8 h-px bg-slate-300 group-hover:w-14 transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">

        <div className="bg-[#f1f5f9] rounded-3xl p-8 md:p-14 relative overflow-hidden">

          {/* DECORATION */}
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border border-slate-300/60" />
          <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full border border-slate-300/60" />

          <div className="relative max-w-2xl">

            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              <Award size={15} />
              The journey continues
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-950 mt-5">
              More than a degree,
              <span className="text-slate-400"> a journey of growth.</span>
            </h2>

            <p className="text-sm md:text-base text-slate-500 leading-8 mt-5">
              I believe every opportunity to learn is an opportunity
              to grow. My academic journey is still unfolding,
              and I look forward to discovering, building, and
              contributing more along the way.
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}
