import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Code2,
  GraduationCap,
  Layers3,
  MapPin,
  Sparkles,
  Headphones,
  Wrench,
} from "lucide-react";

const experiences = [
  {
    number: "01",
    role: "IT Intern / Software Developer",
    organization: "Centre for Quality Assurance and Learning Development (P4M)",
    type: "Internship",
    period: "September 2026 — Present",
    location: "Politeknik Negeri Batam",
    description:
      "Contributing to the development of digital solutions and internal systems while gaining hands-on experience in software development, system implementation, collaboration, and problem-solving.",
    contributions: [
      "Contribute to the development and improvement of web-based applications.",
      "Work with frontend and backend technologies during application development.",
      "Participate in system discussions, feedback sessions, and development revisions.",
      "Learn to translate operational needs into practical digital solutions.",
    ],
    tags: ["Software Development", "Web Development", "Team Collaboration"],
    icon: Code2,
  },
  {
    number: "02",
    role: "Remote Administrative & Customer Support",
    organization: "PT MULYA PERKASA ANUGERAH",
    type: "Remote Work",
    period: "Nov 2025 — Present",
    location: "Remote",
    description:
      "Supporting the company's equipment rental operations remotely — handling customer inquiries, guiding customers through the rental process, and helping maintain the company's online presence and customer engagement.",
    contributions: [
      "Handle customer inquiries regarding equipment rental, including availability, specifications, and rental requirements.",
      "Assist customers throughout the rental process, from initial inquiries and equipment selection to coordination and follow-up.",
      "Communicate with prospective customers to identify their equipment needs and provide relevant rental information.",
      "Manage and maintain the company's Google Business Profile to support its online business presence and customer engagement.",
      "Support promotional activities to increase the company's online visibility and reach potential customers.",
    ],
    tags: ["Customer Support", "Administration", "Remote Work", "Communication"],
    icon: Headphones,
  },
  {
    number: "03",
    role: "Programming Division Member",
    organization: "Batam Linux User Group (BLUG)",
    type: "Student Organization",
    period: "Nov 2025 — Present",
    location: "Politeknik Negeri Batam",
    description:
      "Being part of a programming community that encourages technical development, collaborative learning, and exploration of programming concepts and technologies.",
    contributions: [
      "Explore programming and software development concepts.",
      "Develop technical knowledge through community activities.",
      "Participate in collaborative learning and knowledge sharing.",
    ],
    tags: ["Programming", "Community", "Learning"],
    icon: Code2,
  },
  {
    number: "04",
    role: "Student Member",
    organization: "ITERATI — The Institution of Engineering Technicians and Engineering Technologists",
    type: "Professional Organization",
    period: "2024 — Present",
    location: "Politeknik Negeri Batam, Indonesia",
    description:
      "A student member of a professional engineering institution focused on engineering technicians and technologists, supporting technical development, professional growth, and connection within the engineering and technology community.",
    contributions: [
      "Engage with engineering and technology-oriented professional activities.",
      "Expand technical perspectives and professional knowledge.",
      "Build connections with fellow engineering and technology enthusiasts.",
    ],
    tags: ["Engineering", "Professional Organization", "Networking"],
    icon: Wrench,
  },
  {
    number: "05",
    role: "GDSC Member",
    organization: "Google for Developers Community",
    type: "Technology Community",
    period: "2024 — Present",
    location: "Student Developer Community",
    description:
      "Engaging with a student developer community focused on technology, software development, and continuous learning through developer-oriented activities.",
    contributions: [
      "Explore new technologies and developer tools.",
      "Stay connected with the developer community.",
      "Expand knowledge of software engineering and technology.",
    ],
    tags: ["Technology", "Developer Community", "Innovation"],
    icon: Layers3,
  },
];

const highlights = [
  {
    icon: BriefcaseBusiness,
    title: "Professional Experience",
    description: "Real-world exposure to software development and workplace collaboration.",
  },
  {
    icon: Code2,
    title: "Technical Growth",
    description: "Continuously exploring tools, technologies, and practical development.",
  },
  {
    icon: GraduationCap,
    title: "Community Learning",
    description: "Learning through organizations, developer communities, and shared experiences.",
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] overflow-hidden">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16">
        <div className="max-w-3xl animate-[fadeIn_0.8s_ease-out]">

          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 mb-6">
            <BriefcaseBusiness size={15} />
            Experience & involvement
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight text-slate-950">
            Where I've
            <br />
            <span className="text-slate-400">been involved.</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-500 leading-8 max-w-2xl">
            Experiences that have shaped how I learn, collaborate,
            build, and grow — from working on real-world projects
            to being part of technology communities.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Currently gaining experience
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600">
              <Code2 size={15} />
              Software & Technology
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid md:grid-cols-3 gap-5">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                style={{
                  animation: `fadeIn 0.7s ease-out ${index * 0.15}s both`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                  <Icon size={21} className="text-slate-700" />
                </div>

                <h3 className="text-lg font-semibold tracking-tight mt-5 text-slate-900">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-7 mt-3">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
              My journey
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-950 mt-3">
              Experience timeline
            </h2>
          </div>

          <p className="text-sm text-slate-500 max-w-md leading-7">
            A collection of professional experiences, communities,
            and activities that contribute to my personal and technical growth.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* TIMELINE LINE */}
          <div className="absolute left-[19px] md:left-[27px] top-5 bottom-5 w-px bg-slate-200" />

          <div className="space-y-10">

            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <article
                  key={experience.number}
                  className="relative pl-14 md:pl-20 group"
                  style={{
                    animation: `fadeIn 0.8s ease-out ${index * 0.15}s both`,
                  }}
                >

                  {/* TIMELINE ICON */}
                  <div className="absolute left-0 top-7 w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:border-slate-400 group-hover:scale-105 transition-all duration-300">
                    <Icon
                      size={20}
                      className="text-slate-700 md:w-[22px] md:h-[22px]"
                    />
                  </div>

                  {/* CARD */}
                  <div className="bg-white border border-slate-200 rounded-3xl p-7 md:p-9 hover:border-slate-300 hover:shadow-lg transition-all duration-300">

                    {/* TOP META */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="px-3 py-1.5 bg-slate-100 rounded-full text-xs font-medium text-slate-700">
                        {experience.type}
                      </span>

                      <span className="text-xs tracking-widest text-slate-300">
                        {experience.number}
                      </span>
                    </div>

                    {/* ROLE */}
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-950">
                      {experience.role}
                    </h3>

                    {/* ORGANIZATION */}
                    <p className="text-base md:text-lg font-medium text-slate-500 mt-3">
                      {experience.organization}
                    </p>

                    {/* DETAILS */}
                    <div className="flex flex-wrap gap-x-6 gap-y-3 mt-6 text-xs text-slate-400">

                      <div className="flex items-center gap-2">
                        <CalendarDays size={15} />
                        {experience.period}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={15} />
                        {experience.location}
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-sm md:text-base text-slate-500 leading-8 mt-7 max-w-3xl">
                      {experience.description}
                    </p>

                    {/* CONTRIBUTIONS */}
                    <div className="mt-8">
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-400 mb-5">
                        Activities & contributions
                      </p>

                      <div className="space-y-4">
                        {experience.contributions.map((contribution, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3"
                          >
                            <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                              <ArrowUpRight
                                size={14}
                                className="text-slate-600"
                              />
                            </div>

                            <p className="text-sm text-slate-600 leading-7">
                              {contribution}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 mt-8 pt-7 border-t border-slate-100">
                      {experience.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-2 rounded-lg bg-[#f8fafc] border border-slate-100 text-xs text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* WHAT I VALUE */}
      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
                <Sparkles size={15} />
                Beyond the job title
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mt-5 text-slate-950">
                Every experience
                <span className="text-slate-400"> teaches something.</span>
              </h2>
            </div>

            {/* RIGHT */}
            <div>
              <p className="text-slate-500 leading-8">
                I believe professional growth is not only about the roles
                we hold, but also about the problems we solve, the people
                we work with, the mistakes we learn from, and the curiosity
                we bring into every opportunity.
              </p>

              <p className="text-slate-500 leading-8 mt-5">
                Each experience is another step toward becoming a better
                developer, collaborator, and technology professional.
              </p>

              <div className="flex items-center gap-3 mt-8">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                  <Building2 size={18} className="text-slate-700" />
                </div>

                <p className="text-sm font-medium text-slate-700">
                  Learning through real experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-slate-200 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400">
                What's next?
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-slate-950">
                Still growing. Still building.
              </h2>

              <p className="text-slate-500 mt-4 leading-7 max-w-xl">
                I'm always looking forward to new challenges, collaborations,
                and experiences that help me grow further.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white rounded-xl px-6 py-3.5 text-sm font-medium hover:bg-slate-700 transition-all hover:-translate-y-0.5 shrink-0"
            >
              Let's connect
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