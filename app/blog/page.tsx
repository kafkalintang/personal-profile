import Link from "next/link";
import { ArrowUpRight, PenLine, Sparkles, BookOpen } from "lucide-react";

// Data Dummy Artikel Blog
const featuredPost = {
  title: "Membangun Karir di Dunia Teknologi Tanpa Kehilangan Arah",
  category: "Karier & Kehidupan",
  date: "25 November 2026",
  excerpt:
    "Banyak orang terjebak mengejar standar orang lain hingga lupa apa yang sebenarnya mereka inginkan. Tulisan ini membahas tentang bagaimana bertahan di industri teknologi yang bergerak cepat tanpa harus kehilangan jati diri dan ketenangan.",
};

const posts = [
  {
    id: "belajar-nextjs",
    title: "Belajar Next.js dari Nol",
    category: "Teknologi",
    date: "20 Nov 2026",
    excerpt:
      "Pengalaman pertamaku menyentuh framework React yang satu ini. Mulai dari bingung App Router sampai akhirnya paham konsep Server Component.",
  },
  {
    id: "portofolio-menarik",
    title: "Tips Membangun Portofolio yang Menarik",
    category: "Karier",
    date: "15 Nov 2026",
    excerpt:
      "Portofolio bukan cuma soal desain yang keren, tapi soal bagaimana kamu bercerita. Gimana caranya bikin recruiter betah scroll sampai bawah?",
  },
  {
    id: "setup-kerja",
    title: "Review Setup Kerja Minimalis",
    category: "Lifestyle",
    date: "10 Nov 2026",
    excerpt:
      "Barang mahal belum tentu bikin produktif. Ini dia setup meja kerja simple yang bikin fokus meningkat dan pikiran lebih tenang.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
            <PenLine size={16} />
            <span>Personal Journal & Thoughts</span>
          </div>

          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
              Catatan & Cerita
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Tulisan yang lahir,
              <br />
              <span className="text-slate-400">dari pikiran yang tenang.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Tempat aku menuangkan ide, tutorial, pengalaman kerja, dan
              hal-hal kecil yang mungkin tidak sempat aku ceritakan secara
              langsung.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24">
        <div className="mb-10 flex items-center gap-3">
          <Sparkles size={18} className="text-slate-500" />
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Artikel Pilihan
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          {/* Kiri: Info Artikel */}
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                {featuredPost.category}
              </span>
              <span className="text-sm text-slate-400">
                {featuredPost.date}
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              {featuredPost.title}
            </h2>

            <div className="my-7 h-px w-16 bg-slate-300" />

            <p className="text-base leading-8 text-slate-600">
              {featuredPost.excerpt}
            </p>

            <div className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                <BookOpen size={16} />
                Baca Artikel
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          {/* Kanan: Ilustrasi / Elemen Visual (Opsional, biar seimbang) */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full max-w-md aspect-square bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center">
              <span className="text-slate-300 font-medium tracking-widest uppercase text-sm">
                Visual / Ilustrasi
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DAFTAR POST LAINNYA */}
      <section className="border-t border-gray-100 bg-gray-50/70">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24">
          <div className="mb-12">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              Arsip Tulisan
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Artikel Lainnya
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">{post.date}</span>
                  </div>

                  <h3 className="text-xl font-semibold leading-snug group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link
                    href="#"
                    className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 group-hover:text-blue-600"
                  >
                    Baca selengkapnya <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PENUTUP */}
      <section className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-12 md:py-24">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Terima kasih sudah membaca.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 max-w-2xl mx-auto">
            Menulis adalah cara saya memahami dunia. Semoga tulisan-tulisan
            kecil ini bisa memberikan perspektif baru atau setidaknya menemani
            harimu.
          </p>
        </div>
      </section>
    </main>
  );
}