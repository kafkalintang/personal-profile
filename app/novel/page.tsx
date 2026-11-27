
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Feather,
  Library,
  Sparkles,
} from "lucide-react";

const novels = [
  {
    id: "seandainya",
    title: "Seandainya Aku Boleh Lelah",
    subtitle: "tentang lelah yang tidak selalu bisa dijelaskan",
    genre: "Drama · Fiction",
    status: "Draft",
    cover: "/ko.jpg",
    pdf: "/novels/seandainya.pdf",
    description:
      "Sebuah cerita tentang seseorang yang mencoba bertahan di tengah hal-hal yang tidak selalu berjalan sesuai harapan.",
  },
  {
    id: "mungkin-ini",
    title: "Mungkin Ini Tentang Kamu",
    subtitle: "beberapa perasaan memang tidak pernah selesai",
    genre: "Romance · Fiction",
    status: "Concept",
    cover: "/mungkin.jpg",
    pdf: "/novels/mungkin-ini.pdf",
    description:
      "Tentang perasaan, pertemuan, dan seseorang yang mungkin selalu menjadi bagian dari cerita.",
  },
  {
    id: "ternyata",
    title: "Aku Yang Terlambat Sadar",
    subtitle: "tentang sesuatu yang terasa nyata, tetapi tidak pernah menjadi milik",
    genre: "Romance · Drama",
    status: "Concept",
    cover: "/gambar3.jpg",
    pdf: "/novels/ternyata.pdf",
    description:
      "Sebuah kisah mengenai harapan, kehilangan, dan kenyataan bahwa tidak semua hal yang terasa dekat benar-benar bisa dimiliki.",
  },
];

const featured = {
  title: "Chori Chori Chupke Chupke",
  subtitle: "tiga hati, satu cerita yang rumit",
  genre: "Romantic Comedy · Campus Life",
  status: "In Progress",
  cover: "/ALN.jpg",
  pdf: "/novels/chori-chori.pdf",
  description:
    "Di antara tugas kuliah, dunia teknologi, persahabatan, dan perasaan yang tidak pernah sederhana, ada tiga orang yang perlahan terjebak dalam cerita mereka sendiri. Sebuah cerita tentang cinta, salah paham, kecemburuan, dan hal-hal kecil yang justru membuat semuanya semakin rumit.",
};

function BookCover({
  cover,
  title,
  className = "",
}: {
  cover: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 shadow-sm ring-1 ring-gray-200 ${className}`}
    >
      <Image
        src={cover}
        alt={`Cover novel ${title}`}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 400px"
        className="object-cover transition-transform duration-500 hover:scale-[1.03]"
      />
    </div>
  );
}

function ReadButton({ pdf }: { pdf: string }) {
  return (
    <a
      href={pdf}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
    >
      <BookOpen size={16} />
      Read Novel
      <ArrowUpRight size={15} />
    </a>
  );
}

export default function NovelPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">

          <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
            <Library size={16} />
            <span>Personal Literary Corner</span>
          </div>

          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
              Stories & Imagination
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Stories I write,
              <br />
              <span className="text-slate-400">worlds I imagine.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              A small collection of stories, fictional worlds, unfinished
              thoughts, and characters that once lived inside my imagination
              and eventually found their way onto paper.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#featured"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-sm font-medium transition hover:bg-gray-50"
              >
                Explore Stories
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* FEATURED NOVEL */}
      <section
        id="featured"
        className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24"
      >
        <div className="mb-10 flex items-center gap-3">
          <Sparkles size={18} className="text-slate-500" />

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Featured Story
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">

          {/* COVER */}
          <div className="mx-auto w-full max-w-sm">
            <BookCover
              cover={featured.cover}
              title={featured.title}
            />
          </div>

          {/* CONTENT */}
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                {featured.status}
              </span>

              <span className="text-sm text-slate-400">
                {featured.genre}
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              {featured.title}
            </h2>

            <p className="mt-3 text-lg italic text-slate-500">
              {featured.subtitle}
            </p>

            <div className="my-7 h-px w-16 bg-slate-300" />

            <p className="text-base leading-8 text-slate-600">
              {featured.description}
            </p>

            <div className="mt-8">
              <ReadButton pdf={featured.pdf} />
            </div>

            <p className="mt-4 text-xs leading-6 text-slate-400">
              Opens the novel in PDF format.
            </p>
          </div>

        </div>
      </section>

      {/* OTHER NOVELS */}
      <section className="border-t border-gray-100 bg-gray-50/70">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24">

          <div className="mb-12">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              The Collection
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Other stories
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Stories that are still growing, waiting to be finished,
              or simply written because some ideas deserve their own world.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {novels.map((novel) => (
              <article
                key={novel.id}
                className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                {/* COVER */}
                <BookCover
                  cover={novel.cover}
                  title={novel.title}
                  className="rounded-xl"
                />

                {/* INFO */}
                <div className="mt-6">

                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {novel.status}
                    </span>

                    <span className="text-xs text-slate-400">
                      {novel.genre}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold leading-snug">
                    {novel.title}
                  </h3>

                  <p className="mt-2 text-sm italic leading-6 text-slate-500">
                    {novel.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {novel.description}
                  </p>

                  <div className="mt-6">
                    <ReadButton pdf={novel.pdf} />
                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* WRITING PHILOSOPHY */}
      <section className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24">

          <div className="mx-auto max-w-2xl text-center">

            <Feather
              size={26}
              className="mx-auto mb-6 text-slate-400"
            />

            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Some stories are meant to be written.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Not every thought can be expressed out loud. Some find their
              way into fictional characters, unexpected plot twists,
              conversations, and stories that may never be perfect,
              but are worth telling anyway.
            </p>

            <p className="mt-4 text-sm italic text-slate-400">
              Written with imagination, one story at a time.
            </p>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center md:flex-row md:px-12 md:text-left">

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Literary Corner.
          </p>

          <Link
            href="/"
            className="text-sm text-slate-500 transition hover:text-slate-900"
          >
            Back to Personal Website
          </Link>

        </div>
      </footer>

    </main>
  );
}
