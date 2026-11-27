"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode, MouseEvent } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Code2,
  Terminal,
  Layers3,
  MapPin,
  GraduationCap,
  Sparkles,
  Download,
} from "lucide-react";

const stats = [
  { value: "3.66", label: "GPA", to: 3.66, decimals: 2, suffix: "", from: 0 },
  { value: "D3", label: "Informatics Engineering" },
  { value: "2024", label: "Started at Polibatam", to: 2024, decimals: 0, suffix: "", from: 2000 },
  { value: "10+", label: "Projects built", to: 10, decimals: 0, suffix: "+", from: 0 },
];

const interests = [
  {
    icon: Code2,
    title: "Software Development",
    desc: "Developing web applications, exploring modern frameworks, and creating user-centered digital experiences.",
  },
  {
    icon: Layers3,
    title: "Technology & AI",
    desc: "Exploring artificial intelligence, data, automation, and technology that makes processes more efficient.",
  },
  {
    icon: Terminal,
    title: "Innovation",
    desc: "Turning ideas into projects, experimenting with solutions, and continuously growing as an engineer.",
  },
];

const stack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma",
  "PHP",
  "MySQL",
];

const projects = [
  {
    name: "Requify",
    tag: "AI Platform",
    desc: "An AI-assisted platform designed to support software requirement analysis and quality assessment.",
    tech: ["AI", "NLP", "Web Development"],
  },
  {
    name: "Archiva",
    tag: "Personal Project",
    desc: "A personal digital archive for organizing notes, files, collections, and meaningful digital memories.",
    tech: ["Next.js", "UI/UX", "Personal Project"],
  },
];

/* ------------------------------------------------------------------ */
/* HELPER COMPONENTS                                                   */
/* ------------------------------------------------------------------ */

/** Muncul halus saat masuk viewport */
function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref}
      className={`l-reveal ${shown ? "l-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

/** Efek tilt 3D mengikuti kursor */
function Tilt({
  children,
  className = "",
  max = 8,
  scale = 1.02,
  glare = false,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  scale?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - py) * max * 2}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * max * 2}deg`);
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
    el.style.setProperty("--s", `${scale}`);
    el.style.setProperty("--go", "1");
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--s", "1");
    el.style.setProperty("--go", "0");
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`l-tilt ${className}`}
    >
      <div className="l-tilt-inner">
        {children}
        {glare && <div aria-hidden className="l-glare" />}
      </div>
    </div>
  );
}

/** Angka menghitung naik saat terlihat */
function CountUp({
  to,
  from = 0,
  decimals = 0,
  suffix = "",
  duration = 1600,
}: {
  to: number;
  from?: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(from);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setVal(from + (to - from) * eased);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, from, duration]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/** Progress bar scroll di atas halaman */
function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      el.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-[3px] w-full pointer-events-none">
      <div
        ref={ref}
        className="h-full origin-left bg-gradient-to-r from-sky-400 to-indigo-400"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  const onHeroMove = (e: MouseEvent<HTMLElement>) => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <main className="relative bg-[#f8fafc] text-[#0f172a] overflow-hidden">
      <style>{`
        /* ---------- reveal ---------- */
        .l-reveal {
          opacity: 0;
          transform: translateY(34px) scale(0.98);
          filter: blur(6px);
          transition: opacity .9s cubic-bezier(.2,.7,.2,1),
                      transform .9s cubic-bezier(.2,.7,.2,1),
                      filter .9s cubic-bezier(.2,.7,.2,1);
        }
        .l-reveal.l-in { opacity: 1; transform: none; filter: blur(0); }

        /* ---------- tilt 3D ---------- */
        .l-tilt { perspective: 1100px; }
        .l-tilt-inner {
          position: relative;
          transform-style: preserve-3d;
          transform: rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) scale(var(--s, 1));
          transition: transform .25s ease-out;
          will-change: transform;
        }
        .l-glare {
          position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
          background: radial-gradient(420px circle at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,.55), transparent 45%);
          opacity: var(--go, 0);
          transition: opacity .3s;
          mix-blend-mode: soft-light;
          transform: translateZ(1px);
        }

        /* ---------- keyframes ---------- */
        @keyframes l-spin { to { transform: rotate(360deg); } }
        @keyframes l-spin-rev { to { transform: rotate(-360deg); } }
        @keyframes l-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(2deg); }
        }
        @keyframes l-float-b {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(10px) translateX(-6px); }
        }
        @keyframes l-blob {
          0%, 100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(40px,-30px) scale(1.1); }
          66% { transform: translate(-30px,30px) scale(.95); }
        }
        @keyframes l-grid {
          from { background-position: 0 0, 0 0; }
          to { background-position: 56px 56px, 56px 56px; }
        }
        @keyframes l-shine {
          0%, 55% { transform: translateX(-130%) skewX(-18deg); }
          100% { transform: translateX(230%) skewX(-18deg); }
        }
        @keyframes l-pulse-ring {
          0% { transform: scale(.9); opacity: .7; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        @keyframes l-underline {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes l-card-in {
          from { opacity: 0; transform: translateY(40px) rotateX(18deg) scale(.95); }
          to { opacity: 1; transform: none; }
        }
        @keyframes l-orbit {
          from { transform: rotate(0deg) translateX(var(--orbit-r, 210px)) rotate(0deg); }
          to { transform: rotate(360deg) translateX(var(--orbit-r, 210px)) rotate(-360deg); }
        }

        .l-spin-slow { animation: l-spin 14s linear infinite; }
        .l-spin-rev  { animation: l-spin-rev 26s linear infinite; }
        .l-float     { animation: l-float 6s ease-in-out infinite; }
        .l-float-b   { animation: l-float-b 7s ease-in-out infinite; }
        .l-blob      { animation: l-blob 18s ease-in-out infinite; }
        .l-blob-b    { animation: l-blob 24s ease-in-out infinite reverse; }
        .l-grid-move { animation: l-grid 28s linear infinite; }
        .l-shine     { animation: l-shine 5.5s ease-in-out infinite; }
        .l-card-in   { animation: l-card-in 1.1s cubic-bezier(.2,.7,.2,1) both; }
        .l-orbit-dot { animation: l-orbit 12s linear infinite; }

        /* ---------- hero spotlight ---------- */
        .l-spot {
          background: radial-gradient(520px circle at var(--mx, 50%) var(--my, 20%), rgba(56,189,248,.16), transparent 60%);
        }

        /* ---------- text underline accent ---------- */
        .l-underline {
          transform-origin: left;
          animation: l-underline 1.2s .8s cubic-bezier(.2,.7,.2,1) both;
        }

        /* ---------- reduced motion ---------- */
        @media (prefers-reduced-motion: reduce) {
          .l-reveal { opacity: 1; transform: none; filter: none; transition: none; }
          .l-spin-slow, .l-spin-rev, .l-float, .l-float-b, .l-blob, .l-blob-b,
          .l-grid-move, .l-shine, .l-card-in, .l-orbit-dot, .l-underline { animation: none !important; }
          .l-tilt-inner { transform: none !important; }
        }
      `}</style>

      <ScrollProgress />

      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[780px] opacity-60 l-grid-move"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-sky-200/50 blur-3xl l-blob"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-48 h-[420px] w-[420px] rounded-full bg-indigo-200/40 blur-3xl l-blob-b"
      />

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        onMouseMove={onHeroMove}
        className="relative max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20 md:pt-36 md:pb-28"
      >
        {/* spotlight mengikuti kursor */}
        <div
          aria-hidden
          className="l-spot pointer-events-none absolute inset-0 hidden md:block"
        />

        <div className="relative grid md:grid-cols-[1.4fr_0.8fr] gap-16 items-center">
          {/* INTRODUCTION */}
          <div>
            <Reveal delay={0}>
              <div className="inline-flex items-center gap-2.5 border border-slate-200 bg-white/80 backdrop-blur rounded-full pl-2 pr-4 py-1.5 mb-8 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold tracking-[0.12em] text-slate-600">
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-sm font-medium text-slate-500 mb-4 tracking-[0.18em]">
                HELLO, I&apos;M
              </p>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.02] text-slate-950">
                Lintang
                <br />
                <span className="relative inline-block text-slate-950">
                  Maharani.
                  <span
                    aria-hidden
                    className="l-underline absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-gradient-to-r from-sky-300 via-sky-200 to-transparent md:h-[8px]"
                  />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={320}>
              <h2 className="mt-8 text-xl md:text-2xl text-slate-800 font-medium">
                Software Developer &amp; Technology Enthusiast
              </h2>
            </Reveal>

            <Reveal delay={420}>
              <p className="mt-5 max-w-xl text-base md:text-lg leading-8 text-slate-500">
                I build digital experiences, explore emerging technologies, and
                turn ideas into meaningful solutions through code, creativity,
                and continuous learning.
              </p>
            </Reveal>

            {/* ACTION BUTTONS */}
            <Reveal delay={520}>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  href="/about"
                  className="group relative inline-flex items-center gap-2 overflow-hidden bg-slate-900 text-white px-6 py-3.5 rounded-xl text-sm font-medium shadow-lg shadow-slate-900/10 hover:bg-slate-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/20 active:translate-y-0 transition-all duration-300"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  />
                  <span className="relative">Explore my profile</span>
                  <ArrowUpRight
                    size={17}
                    className="relative transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 border border-slate-300 bg-white text-slate-700 px-6 py-3.5 rounded-xl text-sm font-medium hover:border-slate-900 hover:text-slate-900 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5 active:translate-y-0 transition-all duration-300"
                >
                  View projects
                </Link>
              </div>
            </Reveal>

            {/* SOCIAL LINKS */}
            <Reveal delay={640}>
              <div className="flex flex-wrap items-center gap-3 mt-12">
                <Link
                  href="https://github.com/kafkalintang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:border-slate-900 hover:text-slate-900 hover:-translate-y-1 hover:rotate-3 hover:shadow-md transition-all duration-300"
                  aria-label="GitHub"
                >
                  <span className="text-xs font-bold">GH</span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/lintang-maharani-267036327/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:border-slate-900 hover:text-slate-900 hover:-translate-y-1 hover:-rotate-3 hover:shadow-md transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <span className="text-xs font-bold">in</span>
                </Link>

                <Link
                  href="/contact"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:border-slate-900 hover:text-slate-900 hover:-translate-y-1 hover:rotate-3 hover:shadow-md transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={17} />
                </Link>

                <div className="mx-2 h-5 w-px bg-slate-300" />

                <span className="inline-flex items-center gap-1.5 text-xs tracking-[0.12em] text-slate-500">
                  <MapPin size={14} />
                  BATAM, INDONESIA
                </span>
              </div>
            </Reveal>
          </div>

          {/* PROFILE CARD (3D) */}
          <div className="relative mx-auto w-full max-w-sm l-card-in" style={{ animationDelay: "250ms" }}>
            {/* orbit ring di belakang foto */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[135%] w-[135%] -translate-x-1/2 -translate-y-1/2 md:block"
            >
              <div className="l-spin-rev absolute inset-0 rounded-full border border-dashed border-slate-300/80" />
              <div className="absolute inset-[9%] rounded-full border border-slate-200/80" />
              <div className="absolute left-1/2 top-1/2 h-0 w-0">
                <div
                  className="l-orbit-dot"
                  style={{ ["--orbit-r" as string]: "min(240px, 21vw)" } as CSSProperties}
                >
                  <span className="absolute -left-1.5 -top-1.5 block h-3 w-3 rounded-full bg-sky-500 shadow-[0_0_18px_4px_rgba(14,165,233,.55)]" />
                </div>
              </div>
            </div>

            <Tilt max={11} scale={1.03} glare>
              {/* lapisan belakang bergradien */}
              <div style={{ transform: "translateZ(-50px)" }} className="absolute inset-0">
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-gradient-to-br from-sky-200 to-indigo-200 opacity-70"
                />
              </div>

              {/* kartu utama dengan border gradien berputar */}
              <div style={{ transform: "translateZ(20px)" }} className="relative">
                <div className="relative overflow-hidden rounded-3xl p-[2px] shadow-xl shadow-slate-900/10">
                  <div
                    aria-hidden
                    className="l-spin-slow absolute left-1/2 top-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2"
                    style={{
                      background:
                        "conic-gradient(from 0deg, transparent 0deg, #38bdf8 70deg, #818cf8 140deg, transparent 220deg, transparent 360deg)",
                    }}
                  />
                  <div className="relative rounded-[22px] bg-white p-5">
                    {/* PROFILE PHOTO */}
                    <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
                      <Image
                        src="/lintang.png"
                        alt="Portrait of Lintang Maharani"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
                      />
                      {/* kilau berkala */}
                      <div
                        aria-hidden
                        className="l-shine pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                      />
                      {/* vignette halus */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent"
                      />
                    </div>

                    {/* PROFILE DETAILS */}
                    <div className="px-1 pt-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-slate-900">
                            Lintang Maharani
                          </h3>

                          <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-500">
                            <GraduationCap size={15} />
                            Informatics Engineering
                          </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                          <Code2 size={19} className="text-slate-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ikon melayang - kedalaman berbeda */}
              <div
                style={{ transform: "translateZ(90px)" }}
                className="absolute -right-5 top-10 hidden md:block"
              >
                <div className="l-float flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 shadow-lg shadow-slate-900/10 backdrop-blur">
                  <Sparkles size={20} className="text-sky-600" />
                </div>
              </div>

              <div
                style={{ transform: "translateZ(70px)" }}
                className="absolute -left-6 top-24 hidden md:block"
              >
                <div
                  className="l-float-b flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 shadow-lg shadow-slate-900/10 backdrop-blur"
                  style={{ animationDelay: "1.2s" }}
                >
                  <Layers3 size={18} className="text-indigo-500" />
                </div>
              </div>

              <div
                style={{ transform: "translateZ(60px)" }}
                className="absolute -right-3 bottom-32 hidden md:block"
              >
                <div
                  className="l-float flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/90 shadow-lg shadow-slate-900/10 backdrop-blur"
                  style={{ animationDelay: "2.2s" }}
                >
                  <Terminal size={16} className="text-slate-700" />
                </div>
              </div>

              {/* FLOATING CARD */}
              <div
                style={{ transform: "translateZ(100px)" }}
                className="absolute -bottom-6 -left-5 md:-left-10"
              >
                <div className="l-float-b rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-lg shadow-slate-900/10 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-xl border border-sky-400"
                        style={{ animation: "l-pulse-ring 2.2s ease-out infinite" }}
                      />
                      <Terminal size={18} className="relative text-white" />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">Currently</p>

                      <p className="text-sm font-medium text-slate-800">
                        Building &amp; Learning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-200 border border-slate-200 bg-white rounded-2xl shadow-sm overflow-hidden">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group relative px-6 py-7 text-center md:text-left transition-all duration-500 hover:bg-slate-50"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-sky-400 to-indigo-400 transition-transform duration-500 group-hover:scale-x-100"
                />
                <p className="text-3xl font-semibold tracking-tight text-slate-950 transition-transform duration-500 group-hover:-translate-y-0.5">
                  {s.to !== undefined ? (
                    <CountUp
                      to={s.to}
                      from={s.from}
                      decimals={s.decimals}
                      suffix={s.suffix}
                    />
                  ) : (
                    s.value
                  )}
                </p>
                <p className="mt-1.5 text-xs tracking-wide text-slate-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* AREAS OF INTEREST */}
      <section className="relative border-y border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          {/* SECTION HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <Reveal>
              <p className="text-xs tracking-[0.2em] font-semibold text-sky-600">
                WHAT I DO
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3">
                Areas of interest
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-slate-500 text-sm max-w-md leading-7">
                Constantly exploring different areas of technology to build
                practical, thoughtful, and impactful solutions.
              </p>
            </Reveal>
          </div>

          {/* INTEREST CARDS */}
          <div className="grid md:grid-cols-3 gap-5">
            {interests.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 140}>
                  <Tilt max={7} scale={1.03} glare>
                    <div className="group relative rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/10">
                      <div className="mb-8 flex items-start justify-between">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white transition-all duration-500 group-hover:rotate-[8deg] group-hover:scale-110 group-hover:bg-sky-600"
                          style={{ transform: "translateZ(40px)" }}
                        >
                          <Icon size={22} />
                        </div>
                        <span className="text-xs font-semibold tracking-widest text-slate-300 transition-colors duration-500 group-hover:text-sky-400">
                          0{i + 1}
                        </span>
                      </div>

                      <h3
                        className="text-lg font-semibold"
                        style={{ transform: "translateZ(25px)" }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="mt-3 text-sm leading-7 text-slate-500"
                        style={{ transform: "translateZ(12px)" }}
                      >
                        {item.desc}
                      </p>

                      <span
                        aria-hidden
                        className="absolute bottom-0 left-7 right-7 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400 transition-transform duration-500 group-hover:scale-x-100"
                      />
                    </div>
                  </Tilt>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-[0.8fr_1.4fr] gap-10 items-start">
          <Reveal>
            <p className="text-xs tracking-[0.2em] font-semibold text-sky-600">
              TOOLBOX
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3">
              Tech I work with
            </h2>
            <p className="mt-4 text-sm text-slate-500 leading-7 max-w-sm">
              A modern stack for building fast, maintainable, and polished
              products from interface to database.
            </p>
          </Reveal>

          <div className="flex flex-wrap gap-3">
            {stack.map((t, i) => (
              <Reveal key={t} delay={i * 70} as="span">
                <span className="group inline-flex cursor-default items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:border-slate-900 hover:text-slate-900 hover:shadow-lg hover:shadow-slate-900/10">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-0 group-hover:animate-ping group-hover:opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-500" />
                  </span>
                  {t}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="relative border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          {/* SECTION HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <Reveal>
              <p className="text-xs tracking-[0.2em] font-semibold text-sky-600">
                PORTFOLIO
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3">
                Selected projects
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950 transition"
              >
                Explore all projects
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1.5"
                />
              </Link>
            </Reveal>
          </div>

          {/* PROJECT GRID */}
          <div className="grid md:grid-cols-2 gap-7">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 160}>
                <Tilt max={6} scale={1.02} glare>
                  <Link
                    href="/projects"
                    className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-500 hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-900/10"
                  >
                    {/* PREVIEW */}
                    <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-[#e9eef5] via-[#dfe8f3] to-[#cfdcee]">
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-50 transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage:
                            "radial-gradient(#94a3b8 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        }}
                      />

                      {/* kilau saat hover */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -translate-x-full skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-1000 group-hover:translate-x-[420%]"
                      />

                      <div
                        className="relative w-[68%] rounded-xl border border-white/70 bg-white/80 p-4 shadow-lg backdrop-blur transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-2xl"
                        style={{ transform: undefined }}
                      >
                        <div className="mb-3 flex gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-slate-300 transition-colors duration-300 group-hover:bg-rose-300" />
                          <span className="h-2 w-2 rounded-full bg-slate-300 transition-colors duration-300 delay-75 group-hover:bg-amber-300" />
                          <span className="h-2 w-2 rounded-full bg-slate-300 transition-colors duration-300 delay-150 group-hover:bg-emerald-300" />
                        </div>
                        <p className="text-xl font-semibold uppercase tracking-tight text-slate-500">
                          {p.name}
                        </p>
                        <div className="mt-3 space-y-1.5">
                          <div className="h-1.5 w-full rounded bg-slate-200 transition-all duration-700 group-hover:bg-sky-200" />
                          <div className="h-1.5 w-4/5 rounded bg-slate-200 transition-all duration-700 delay-100 group-hover:bg-sky-200" />
                          <div className="h-1.5 w-3/5 rounded bg-slate-200 transition-all duration-700 delay-200 group-hover:bg-sky-200" />
                        </div>
                      </div>

                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                        <Sparkles size={12} />
                        {p.tag}
                      </span>
                    </div>

                    {/* DETAILS */}
                    <div className="p-7">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">{p.name}</h3>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:rotate-45 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white">
                          <ArrowUpRight size={16} />
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        {p.desc}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600 transition-all duration-300 group-hover:border-sky-200 group-hover:bg-sky-50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-16 text-center md:px-16 md:py-20">
            <div
              aria-hidden
              className="l-blob pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/30 blur-3xl"
            />
            <div
              aria-hidden
              className="l-blob-b pointer-events-none absolute -bottom-32 right-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"
            />
            <div
              aria-hidden
              className="l-grid-move pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.2em] text-sky-400">
                LET&apos;S WORK TOGETHER
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Have an idea or opportunity?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400">
                I&apos;m open to internships, collaborations, and new
                challenges. Let&apos;s build something meaningful together.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-xl hover:shadow-sky-500/20"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-sky-200/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  />
                  <Mail size={17} className="relative" />
                  <span className="relative">Get in touch</span>
                </Link>

                <Link
                  href="/cv.pdf"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-lg hover:shadow-sky-500/10"
                >
                  <Download size={17} />
                  View CV
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}