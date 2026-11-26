
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  CalendarDays,
  BookOpen,
  Code2,
  Cpu,
  Coffee,
} from "lucide-react";

const articles = [
  {
    category: "Development",
    date: "November 2026",
    readTime: "6 min read",
    title: "Building Things That Matter",
    description:
      "A little reflection on building software, solving problems, and learning to become a better developer along the way.",
    slug: "building-things-that-matter",
    icon: Code2,
    accent: "bg-slate-100",
    number: "01",
  },
  {
    category: "Technology",
    date: "October 2026",
    readTime: "5 min read",
    title: "My Journey Into Artificial Intelligence",
    description:
      "Exploring AI, understanding its potential, and discovering how intelligent systems can help solve real-world problems.",
    slug: "my-journey-into-ai",
    icon: Cpu,
    accent: "bg-[#eef2ff]",
    number: "02",
  },
  {
    category: "Career",
    date: "October 2026",
    readTime: "4 min read",
    title: "Learning Beyond the Classroom",
    description:
      "Lessons from projects, internships, communities, and the experiences that shape my growth in technology.",
    slug: "learning-beyond-the-classroom",
    icon: BookOpen,
    accent: "bg-[#f1f5f9]",
    number: "03",
  },
  {
    category: "Personal",
    date: "September 2026",
    readTime: "3 min read",
    title: "A Note to My Future Self",
    description:
      "A reminder that growth is rarely linear, and every small step still counts toward the person I want to become.",
    slug: "a-note-to-my-future-self",
    icon: Coffee,
    accent: "bg-[#f5f5f4]",
    number: "04",
  },
];

const categories = ["All Posts", "Development", "Technology", "Career", "Personal"];

export default function BlogPage() {
  const featured = articles[0];

  return (
    <main className="min-h-screen bg-[#f8fafc]">

      {/* PAGE INTRO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-slate-400 mb-6">
            <BookOpen size={15} />
            Thoughts, stories & ideas
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-950 leading-tight">
            The Blog
            <span className="text-slate-400">.</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-500 leading-8 max-w-2xl">
            A collection of thoughts, lessons, experiments, and stories
            from my journey in technology, development, and life.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="grid lg:grid-cols-[1.15fr_1fr] border border-slate-200 bg-white rounded-3xl overflow-hidden">

          {/* FEATURED VISUAL */}
          <div className="relative min-h-[300px] lg:min-h-[440px] bg-[#0f172a] overflow-hidden flex items-center justify-center p-10">

            {/* DECORATIVE ELEMENTS */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-48 h-48 border border-white rounded-full" />
              <div className="absolute bottom-10 right-10 w-72 h-72 border border-white rounded-full" />
              <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="relative text-center">
              <Code2
                size={60}
                strokeWidth={1}
                className="text-slate-300 mx-auto"
              />

              <p className="mt-8 text-xs tracking-[0.3em] uppercase text-slate-400">
                Notes from a developer
              </p>

              <p className="mt-3 text-3xl md:text-5xl font-semibold text-white tracking-tight">
                Build.
                <span className="text-slate-400"> Learn.</span>
                <br />
                Repeat.
              </p>
            </div>
          </div>

          {/* FEATURED CONTENT */}
          <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">

            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-medium">
                Featured
              </span>

              <span className="text-xs text-slate-400">
                {featured.category}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-slate-950">
              {featured.title}
            </h2>

            <p className="mt-5 text-slate-500 leading-8">
              {featured.description}
            </p>

            <div className="flex flex-wrap items-center gap-5 mt-7 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CalendarDays size={15} />
                {featured.date}
              </div>

              <div className="flex items-center gap-2">
                <Clock3 size={15} />
                {featured.readTime}
              </div>
            </div>

            <Link
              href={`/blog/${featured.slug}`}
              className="inline-flex items-center gap-2 mt-9 text-sm font-medium text-slate-900 group"
            >
              Read featured article
              <ArrowUpRight
                size={17}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ARTICLES SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">

          <div>
            <p className="text-xs tracking-[0.2em] uppercase font-semibold text-slate-400">
              Writing archive
            </p>

            <h2 className="text-3xl font-semibold tracking-tight mt-3">
              Latest articles
            </h2>
          </div>

          <p className="text-sm text-slate-500">
            Thoughts worth sharing.
          </p>
        </div>

        {/* CATEGORY NAVIGATION */}
        <div className="flex gap-2 overflow-x-auto whitespace-nowrap pb-3 mb-8 scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all shrink-0 ${
                index === 0
                  ? "bg-slate-900 text-white"
                  : "bg-white border border-slate-200 text-slate-500 hover:border-slate-400 hover:text-slate-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ARTICLE GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {articles.map((article) => {
            const Icon = article.icon;

            return (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-400 hover:-translate-y-1 transition-all duration-300"
              >
                {/* CARD VISUAL */}
                <div
                  className={`relative ${article.accent} aspect-[16/9] flex items-center justify-center overflow-hidden`}
                >
                  <span className="absolute top-5 left-5 text-xs font-medium text-slate-400 tracking-widest">
                    ARTICLE / {article.number}
                  </span>

                  <Icon
                    size={55}
                    strokeWidth={1}
                    className="text-slate-400 group-hover:scale-110 transition-transform duration-300"
                  />

                  <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-white/80 border border-white flex items-center justify-center">
                    <ArrowUpRight
                      size={18}
                      className="text-slate-600 group-hover:text-slate-950 transition"
                    />
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="p-6">

                  {/* META */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs font-medium text-slate-700">
                      {article.category}
                    </span>

                    <span className="w-1 h-1 rounded-full bg-slate-300" />

                    <span className="text-xs text-slate-400">
                      {article.date}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-semibold tracking-tight mt-5 text-slate-900 group-hover:text-slate-600 transition-colors">
                    {article.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-slate-500 leading-7 mt-3">
                    {article.description}
                  </p>

                  {/* READ TIME */}
                  <div className="flex items-center gap-2 mt-6 text-xs text-slate-400">
                    <Clock3 size={14} />
                    {article.readTime}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400">
                Let's connect
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-4">
                Have something to discuss?
              </h2>

              <p className="text-slate-500 mt-4 leading-7 max-w-xl">
                I'm always open to conversations, collaborations,
                new ideas, and opportunities to learn from others.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white rounded-xl px-6 py-3.5 text-sm font-medium hover:bg-slate-700 transition shrink-0"
            >
              Get in touch
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}