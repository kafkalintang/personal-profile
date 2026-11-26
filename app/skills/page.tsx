
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Database,
  Cpu,
  Globe,
  Layers3,
  Terminal,
  Workflow,
  BrainCircuit,
  Monitor,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building responsive interfaces and web-based applications with modern development tools.",
    icon: Globe,
    skills: [
      { name: "HTML5", level: "Comfortable", detail: "Web structure" },
      { name: "CSS3", level: "Comfortable", detail: "Styling & layout" },
      { name: "JavaScript", level: "Comfortable", detail: "Interactive applications" },
      { name: "TypeScript", level: "Learning", detail: "Type-safe development" },
      { name: "React", level: "Learning", detail: "Component-based UI" },
      { name: "Next.js", level: "Learning", detail: "Full-stack web framework" },
    ],
  },
  {
    number: "02",
    title: "Programming & Backend",
    description:
      "Exploring application logic, server-side development, and programming fundamentals.",
    icon: Terminal,
    skills: [
      { name: "Node.js", level: "Learning", detail: "JavaScript runtime" },
      { name: "Express.js", level: "Learning", detail: "Backend development" },
      { name: "Java", level: "Foundational", detail: "Programming fundamentals" },
      { name: "Python", level: "Foundational", detail: "Programming fundamentals" },
    ],
  },
  {
    number: "03",
    title: "Database & Data",
    description:
      "Working with data structures, database management, and understanding how applications store information.",
    icon: Database,
    skills: [
      { name: "MySQL", level: "Comfortable", detail: "Relational database" },
      { name: "SQL", level: "Comfortable", detail: "Queries & data management" },
      { name: "Database Design", level: "Learning", detail: "Data modeling" },
    ],
  },
  {
    number: "04",
    title: "IoT & Hardware",
    description:
      "Experimenting with hardware components, simulation, and the connection between software and physical devices.",
    icon: Cpu,
    skills: [
      { name: "Arduino", level: "Learning", detail: "Microcontroller concepts" },
      { name: "Wokwi", level: "Comfortable", detail: "IoT simulation" },
      { name: "IoT Concepts", level: "Learning", detail: "Hardware & software integration" },
    ],
  },
  {
    number: "05",
    title: "Tools & Workflow",
    description:
      "Using development tools, collaboration platforms, and design utilities throughout the development process.",
    icon: Workflow,
    skills: [
      { name: "Git & GitHub", level: "Comfortable", detail: "Version control" },
      { name: "VS Code", level: "Comfortable", detail: "Development environment" },
      { name: "Figma", level: "Learning", detail: "UI/UX prototyping" },
      { name: "Postman", level: "Learning", detail: "API testing" },
    ],
  },
];

const softSkills = [
  {
    title: "Problem Solving",
    description:
      "Approaching challenges through logical thinking, experimentation, and continuous improvement.",
  },
  {
    title: "Adaptability",
    description:
      "Learning new tools, technologies, and workflows in changing environments.",
  },
  {
    title: "Collaboration",
    description:
      "Working with others, exchanging ideas, and contributing to shared goals.",
  },
  {
    title: "Continuous Learning",
    description:
      "Building knowledge through projects, experiences, communities, and self-learning.",
  },
  {
    title: "Communication",
    description:
      "Sharing ideas, discussing solutions, and communicating during collaborative work.",
  },
  {
    title: "Initiative",
    description:
      "Exploring opportunities, experimenting with ideas, and taking initiative to learn.",
  },
];

const statusStyles: Record<string, string> = {
  Comfortable: "bg-slate-900 text-white",
  Learning: "bg-slate-100 text-slate-700",
  Foundational: "bg-white border border-slate-200 text-slate-500",
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] overflow-hidden">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16">
        <div className="max-w-3xl animate-[fadeIn_0.8s_ease-out]">

          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 mb-6">
            <Code2 size={15} />
            Technical capabilities
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight text-slate-950">
            Skills &
            <br />
            <span className="text-slate-400">technologies.</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-500 leading-8 max-w-2xl">
            A growing collection of technologies, tools, and skills
            I've explored through coursework, projects, internship
            experience, experimentation, and continuous learning.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600">
              <Code2 size={15} />
              Technical Skills
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600">
              <Sparkles size={15} />
              Always Learning
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6">

          {/* MAIN CARD */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-slate-50 group-hover:scale-125 transition-transform duration-700" />

            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center">
                <BrainCircuit size={24} className="text-slate-700" />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mt-8">
                My learning philosophy
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mt-4 text-slate-950 max-w-xl">
                Skills are built through curiosity, practice, and experience.
              </h2>

              <p className="text-sm text-slate-500 leading-8 mt-5 max-w-xl">
                I don't believe learning technology stops at knowing
                the syntax. I enjoy exploring how things work, building
                projects, solving problems, and continuously improving
                the way I develop digital solutions.
              </p>
            </div>
          </div>

          {/* SECOND CARD */}
          <div className="bg-[#f1f5f9] border border-slate-200 rounded-3xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">
                <Layers3 size={24} className="text-slate-700" />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mt-8">
                Areas of exploration
              </p>

              <h2 className="text-2xl font-semibold tracking-tight mt-4 text-slate-950">
                Across different fields of technology.
              </h2>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {[
                "Web",
                "Software",
                "Database",
                "IoT",
                "UI/UX",
                "Technology",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">

        {/* SECTION HEADER */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
            Technical stack
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-950 mt-3">
            Technologies I work with.
          </h2>

          <p className="text-sm text-slate-500 leading-7 mt-5 max-w-2xl">
            Technologies and tools I've encountered and developed
            familiarity with throughout my learning journey.
          </p>
        </div>

        {/* SKILL GROUPS */}
        <div className="space-y-6">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <div
                key={group.number}
                className="bg-white border border-slate-200 rounded-3xl p-7 md:p-9 hover:border-slate-300 hover:shadow-md transition-all duration-300"
                style={{
                  animation: `fadeIn 0.7s ease-out ${index * 0.12}s both`,
                }}
              >

                {/* GROUP HEADER */}
                <div className="flex flex-col md:flex-row md:items-start gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0">
                    <Icon size={23} className="text-slate-700" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xs text-slate-400 tracking-widest">
                        {group.number}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-950 mt-2">
                      {group.title}
                    </h3>

                    <p className="text-sm text-slate-500 leading-7 mt-3 max-w-2xl">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* SKILL ITEMS */}
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">

                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-5 rounded-2xl border border-slate-100 bg-[#f8fafc] hover:bg-white hover:border-slate-300 transition-all duration-300 group/skill"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900">
                            {skill.name}
                          </h4>

                          <p className="text-xs text-slate-400 mt-2">
                            {skill.detail}
                          </p>
                        </div>

                        <ChevronRight
                          size={16}
                          className="text-slate-300 group-hover/skill:text-slate-600 group-hover/skill:translate-x-1 transition-all"
                        />
                      </div>

                      <div className="mt-5">
                        <span
                          className={`inline-flex px-3 py-1.5 rounded-full text-xs font-medium ${statusStyles[skill.level]}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* PROFESSIONAL SKILLS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">

          {/* HEADER */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              <Sparkles size={15} />
              Beyond technical skills
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-950 mt-5">
              Skills that shape
              <span className="text-slate-400"> how I work.</span>
            </h2>

            <p className="text-sm md:text-base text-slate-500 leading-8 mt-5 max-w-2xl">
              Technology is only part of the journey. The way we
              communicate, collaborate, approach problems, and learn
              also plays an important role in creating meaningful work.
            </p>
          </div>

          {/* SOFT SKILLS */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-12">

            {softSkills.map((skill, index) => (
              <div
                key={skill.title}
                className="p-7 border border-slate-200 rounded-2xl hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                style={{
                  animation: `fadeIn 0.7s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                  <Sparkles size={17} className="text-slate-700" />
                </div>

                <h3 className="text-lg font-semibold tracking-tight text-slate-900 mt-5">
                  {skill.title}
                </h3>

                <p className="text-sm text-slate-500 leading-7 mt-3">
                  {skill.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CURRENT LEARNING */}
      <section className="border-t border-slate-200 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
                <Monitor size={15} />
                Currently exploring
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-950 leading-tight mt-5">
                The next things
                <span className="text-slate-400"> I'm learning.</span>
              </h2>

              <p className="text-sm text-slate-500 leading-8 mt-5 max-w-xl">
                My learning journey is constantly evolving.
                I'm interested in expanding my knowledge in
                software engineering, data, intelligent systems,
                and modern development technologies.
              </p>
            </div>

            {/* RIGHT */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10">

              <div className="space-y-6">

                {[
                  {
                    title: "Flutter",
                    desc: "Cross-platform mobile application development",
                  },
                  {
                    title: "Artificial Intelligence",
                    desc: "AI concepts and intelligent applications",
                  },
                  {
                    title: "Data Analytics",
                    desc: "Data visualization, analysis, and reporting",
                  },
                  {
                    title: "Advanced Web Development",
                    desc: "Modern frontend and backend architecture",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 group"
                    style={{
                      animation: `fadeIn 0.7s ease-out ${index * 0.15}s both`,
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                      <ArrowUpRight size={17} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-500 mt-2 leading-6">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400">
                Always evolving
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-950 mt-4">
                Learning never stops.
              </h2>

              <p className="text-slate-500 mt-4 leading-7 max-w-xl">
                Every technology I explore is another opportunity
                to build something better and expand my perspective.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white rounded-xl px-6 py-3.5 text-sm font-medium hover:bg-slate-700 transition-all hover:-translate-y-0.5 shrink-0"
            >
              Explore my projects
              <ArrowUpRight size={17} />
            </Link>

          </div>
        </div>
      </section>

      {/* ANIMATION */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
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
