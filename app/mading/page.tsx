
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Heart,
  Plus,
  Sparkles,
  X,
  RotateCcw,
  Pin,
  Quote,
  BookOpen,
  Coffee,
  Star,
  Feather,
} from "lucide-react";

type Note = {
  id: number;
  text: string;
  author: string;
  color: string;
  rotation: number;
};

const originalNotes: Note[] = [
  {
    id: 1,
    text: "semesta memang punya selera humor. mempertemukan orang-orang yang kisahnya tak pernah benar-benar selesai, lalu membiarkan mereka duduk berdekatan seolah tak ada apa-apa.",
    author: "a thought",
    color: "blue",
    rotation: -2,
  },
  {
    id: 2,
    text: "kalau mimpi cukup besar untuk disebut dalam doa, maka usaha harus cukup kuat untuk mengiringinya.",
    author: "a reminder",
    color: "green",
    rotation: 1.5,
  },
  {
    id: 3,
    text: "aku tidak sedang belajar tanpa alasan. aku sedang mempersiapkan diri untuk kehidupan yang selama ini kuimpikan. itb, tunggu aku. kali ini, aku akan berusaha lebih keras.",
    author: "one day",
    color: "cream",
    rotation: -1,
  },
  {
    id: 4,
    text: "tidak semua hal harus selesai hari ini. terkadang bertahan dan mencoba lagi esok hari sudah cukup.",
    author: "gentle reminder",
    color: "pink",
    rotation: 2,
  },
  {
    id: 5,
    text: "aku ingin hidup yang suatu hari nanti membuatku tersenyum saat mengingat betapa kerasnya aku berjuang untuk sampai ke sana.",
    author: "note to self",
    color: "lavender",
    rotation: -1.5,
  },
  {
    id: 6,
    text: "jangan kecilkan mimpimu hanya karena saat ini kamu belum tahu bagaimana cara mencapainya.",
    author: "keep going",
    color: "yellow",
    rotation: 1,
  },
  {
    id: 7,
    text: "pelan-pelan saja. kamu bukan terlambat, kamu sedang menjalani perjalananmu sendiri.",
    author: "gentle reminder",
    color: "green",
    rotation: -2,
  },
  {
    id: 8,
    text: "suatu hari nanti, semoga semua hal yang sekarang hanya bisa aku doakan menjadi sesuatu yang benar-benar aku jalani.",
    author: "a little hope",
    color: "blue",
    rotation: 1.5,
  },
];

const colorClasses: Record<string, string> = {
  blue: "bg-[#dceafe]",
  green: "bg-[#dcfce7]",
  cream: "bg-[#fffdf5]",
  pink: "bg-[#ffe4e9]",
  lavender: "bg-[#e9e2ff]",
  yellow: "bg-[#fff1bd]",
};

const colorOptions = [
  { name: "blue", color: "#dceafe" },
  { name: "green", color: "#dcfce7" },
  { name: "cream", color: "#fffdf5" },
  { name: "pink", color: "#ffe4e9" },
  { name: "lavender", color: "#e9e2ff" },
  { name: "yellow", color: "#fff1bd" },
];

const reflections = [
  {
    title: "On becoming",
    text: "i don't have to become everything at once. i only need to keep becoming a little better than yesterday.",
  },
  {
    title: "On dreams",
    text: "some dreams take longer than expected. that doesn't make them any less worth pursuing.",
  },
  {
    title: "On life",
    text: "i hope i never get so busy chasing the future that i forget to appreciate the life i have today.",
  },
];

export default function MadingPage() {
  const [notes, setNotes] = useState(originalNotes);
  const [showForm, setShowForm] = useState(false);
  const [newText, setNewText] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newColor, setNewColor] = useState("blue");

  function addNote() {
    if (!newText.trim()) return;

    const note: Note = {
      id: Date.now(),
      text: newText.trim(),
      author: newAuthor.trim() || "a little thought",
      color: newColor,
      rotation: Math.random() * 4 - 2,
    };

    setNotes((previous) => [...previous, note]);
    setNewText("");
    setNewAuthor("");
    setNewColor("blue");
    setShowForm(false);
  }

  function removeNote(id: number) {
    setNotes((previous) => previous.filter((note) => note.id !== id));
  }

  function resetBoard() {
    setNotes(originalNotes);
  }

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">

        {/* HERO */}
        <section className="animate-[fadeIn_0.8s_ease-out]">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Heart size={16} />
            <span>A personal space</span>
          </div>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                Welcome to
              </p>

              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-900 md:text-7xl">
                My Corner
                <span className="text-slate-400">.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
                little thoughts, big dreams, random reminders, favorite
                words, and pieces of life i want to keep somewhere safe.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  <Plus size={17} />
                  Add a thought
                </button>

                <a
                  href="#pinboard"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
                >
                  Explore my board
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* INTRO CARD */}
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-1">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-slate-50" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                  <Feather size={22} className="text-slate-700" />
                </div>

                <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                  A little reminder
                </p>

                <p className="mt-4 text-xl font-medium leading-8 text-slate-800">
                  "you are allowed to dream of a life you have never seen
                  before."
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm text-slate-400">
                  <Heart size={14} />
                  <span>keep this close.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO STRIP */}
        <section className="mt-16 border-y border-slate-200 py-7">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 text-slate-500">
                <Pin size={16} />
                <span className="text-xs font-medium uppercase tracking-[0.15em]">
                  On the board
                </span>
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                words and reminders that deserve a place to stay.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-slate-500">
                <BookOpen size={16} />
                <span className="text-xs font-medium uppercase tracking-[0.15em]">
                  In my mind
                </span>
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                thoughts about growing, dreaming, and figuring things out.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-slate-500">
                <Coffee size={16} />
                <span className="text-xs font-medium uppercase tracking-[0.15em]">
                  Just because
                </span>
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                not everything needs a reason to be kept.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED QUOTE */}
        <section className="mt-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                Featured thought
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                A word to carry
              </h2>
            </div>

            <Sparkles size={20} className="text-slate-400" />
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 md:p-14">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-slate-50" />

            <Quote
              size={44}
              strokeWidth={1}
              className="relative text-slate-300"
            />

            <blockquote className="relative mt-8 max-w-4xl text-2xl font-medium leading-relaxed tracking-tight text-slate-800 md:text-4xl">
              "you don't need to have the whole staircase figured out.
              just keep taking the steps that bring you closer to the life
              you want."
            </blockquote>

            <div className="relative mt-8 flex items-center gap-3">
              <div className="h-px w-10 bg-slate-300" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                A reminder to myself
              </p>
            </div>
          </div>
        </section>

        {/* REFLECTIONS */}
        <section className="mt-20">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              Pages of thought
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Things I remind myself of
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Some things I need to hear more than once. Some words I
              want to remember when life gets a little overwhelming.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {reflections.map((reflection, index) => (
              <article
                key={reflection.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  animation: `fadeIn 0.7s ease-out ${index * 0.12}s both`,
                }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100">
                  <Star size={19} className="text-slate-700" />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  {reflection.title}
                </h3>

                <p className="mt-4 text-sm leading-8 text-slate-500">
                  "{reflection.text}"
                </p>

                <div className="mt-7 border-t border-slate-100 pt-5">
                  <span className="text-xs text-slate-400">
                    words to keep
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PINBOARD */}
        <section id="pinboard" className="mt-24 scroll-mt-28">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                My collection
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                The pinboard
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                A little wall of thoughts, dreams, and reminders.
                Every note has a place here.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={resetBoard}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 transition hover:bg-slate-100"
              >
                <RotateCcw size={15} />
                Reset
              </button>

              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                <Plus size={16} />
                Pin something
              </button>
            </div>
          </div>

          {/* BOARD */}
          <div className="relative overflow-hidden rounded-[1.5rem] border border-[#c5a77e] bg-[#d2b48c] p-6 shadow-inner md:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "radial-gradient(#8c6845 0.7px, transparent 0.7px)",
                backgroundSize: "8px 8px",
              }}
            />

            <div className="relative mb-10 flex flex-col gap-3 border-b border-[#b69770]/60 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#775c40]">
                  Personal collection
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#634a32] md:text-2xl">
                  things worth remembering
                </h3>
              </div>

              <span className="text-xs text-[#775c40]">
                {notes.length} notes
              </span>
            </div>

            <div className="relative grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {notes.map((note, index) => (
                <article
                  key={note.id}
                  className={`group relative min-h-[240px] rounded-sm p-7 ${
                    colorClasses[note.color] || colorClasses.blue
                  } shadow-[0_5px_12px_rgba(0,0,0,0.12)] transition duration-300 hover:z-10 hover:-translate-y-2 hover:rotate-0 hover:shadow-[0_14px_28px_rgba(0,0,0,0.18)]`}
                  style={{
                    transform: `rotate(${note.rotation}deg)`,
                    animation: `noteIn 0.6s ease-out ${index * 0.08}s both`,
                  }}
                >
                  {/* PIN */}
                  <div className="absolute -top-[17px] left-1/2 z-20 -translate-x-1/2">
                    <div className="h-[27px] w-[27px] rounded-full border border-[#8d1010] bg-gradient-to-br from-[#ff7777] via-[#e31b23] to-[#920000] shadow-[0_3px_5px_rgba(0,0,0,0.3)]">
                      <div className="absolute left-[5px] top-[4px] h-[8px] w-[8px] rounded-full bg-white/70 blur-[1px]" />
                    </div>

                    <div className="mx-auto h-[12px] w-[3px] bg-[#7c6251]" />
                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() => removeNote(note.id)}
                    aria-label="Remove note"
                    className="absolute right-3 top-3 rounded-full p-1.5 text-slate-500/50 opacity-0 transition hover:bg-black/5 hover:text-slate-700 group-hover:opacity-100"
                  >
                    <X size={15} />
                  </button>

                  <div className="flex h-full flex-col justify-between">
                    <p className="whitespace-pre-wrap text-[14px] leading-[1.85] text-slate-800 md:text-[15px]">
                      "{note.text}"
                    </p>

                    <p className="mt-6 text-xs font-medium tracking-wide text-slate-600">
                      — {note.author}
                    </p>
                  </div>

                  <div className="absolute bottom-3 right-3 opacity-[0.13]">
                    <Sparkles size={16} />
                  </div>
                </article>
              ))}
            </div>

            <div className="relative mt-16 border-t border-[#b69770]/60 pt-6 text-center">
              <p className="text-sm italic text-[#775c40]">
                "collecting words, saving dreams, and reminding myself
                why i started."
              </p>
            </div>
          </div>
        </section>

        {/* ENDING */}
        <section className="mt-24">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center md:p-14">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
              <Heart size={23} className="text-slate-700" />
            </div>

            <p className="mt-7 text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              Before you leave
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Some words are simply meant to stay.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-500">
              This little corner is a reminder that life is more than
              deadlines, achievements, and plans. Sometimes, we just
              need a few words to help us remember who we are and
              where we want to go.
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400">
              <Heart size={15} />
              <span>with love, to myself.</span>
            </div>
          </div>
        </section>

      </div>

      {/* ADD NOTE MODAL */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-lg animate-[fadeIn_0.3s_ease-out] rounded-3xl border border-slate-200 bg-white p-7 shadow-2xl md:p-9">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                  A new little thought
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                  Add to your board
                </h2>
              </div>

              <button
                onClick={() => setShowForm(false)}
                className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-7 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Your words
                </label>

                <textarea
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  placeholder="write something worth remembering..."
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 outline-none transition focus:border-slate-400 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Signature or source
                </label>

                <input
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  placeholder="a note to myself..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium text-slate-700">
                  Note color
                </label>

                <div className="flex flex-wrap gap-3">
                  {colorOptions.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => setNewColor(item.name)}
                      title={item.name}
                      className={`h-10 w-10 rounded-full border transition hover:scale-110 ${
                        newColor === item.name
                          ? "border-slate-700 ring-2 ring-slate-300 ring-offset-2"
                          : "border-slate-200"
                      }`}
                      style={{ backgroundColor: item.color }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setShowForm(false)}
                className="flex-1 rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                onClick={addNote}
                disabled={!newText.trim()}
                className="flex-1 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Pin it
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ANIMATIONS */}
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

        @keyframes noteIn {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
}
