"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Code2,
  Lightbulb,
  Rocket,
  Laptop,
  GraduationCap,
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
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <main className="relative min-h-screen bg-[#f8fafc] overflow-hidden">
      {/* ===== BACKGROUND DECORATION ===== */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[900px] opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 0%, #000 35%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 0%, #000 35%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-sky-200/40 blur-3xl animate-[blobFloat_18s_ease-in-out_infinite]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-52 -left-48 h-[440px] w-[440px] rounded-full bg-indigo-200/35 blur-3xl animate-[blobFloat_22s_ease-in-out_infinite_reverse]"
      />

      {/* HERO */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-20">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-center">
          
          {/* INTRO */}
          <div className="animate-[fadeInUp_0.8s_ease-out_both] z-10 relative pointer-events-none">
            <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-slate-400 mb-7">
              <Sparkles size={15} className="animate-[sparkle_2.5s_ease-in-out_infinite]" />
              A little about me
            </div>

            <h1 className="text-5xl md:text-7xl xl:text-8xl font-semibold tracking-tight leading-[1.05] text-slate-950">
              More than
              <br />
              <span className="text-slate-400">just code.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mt-8 leading-8 max-w-2xl">
              I'm Lintang Maharani, a Software Engineer who enjoys exploring
              technology, creating things, and figuring out how ideas
              can become something real.
            </p>

            <p className="text-sm md:text-base text-slate-500 mt-5 leading-8 max-w-2xl">
              Somewhere between writing code, learning new technologies,
              making mistakes, and starting over again, I found myself
              enjoying the process of building things. And I'm still
              discovering where that journey will take me.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-9 pointer-events-auto">
              <a
                href="#my-story"
                className="group inline-flex items-center gap-2 bg-slate-950 text-white px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/20"
              >
                Discover my story
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:border-slate-400 hover:-translate-y-1 transition-all duration-300"
              >
                Explore my work
              </a>
            </div>
          </div>

          {/* ========================================= */}
          {/* INTERACTIVE 3D LANYARD / ID CARD */}
          {/* ========================================= */}
          <div className="relative w-full max-w-md mx-auto flex justify-center min-h-[600px]">
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-200/50 rounded-full blur-3xl animate-[pulseGlow_6s_ease-in-out_infinite] pointer-events-none" />

            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative flex justify-center w-full pointer-events-auto mt-[100px]"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                animate={{ rotateZ: [-3, 3, -3] }}
                transition={{
                  duration: 7,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
                className="relative flex flex-col items-center"
              >
                <motion.div
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative flex flex-col items-center"
                >
                  
                  <div className="relative flex flex-col items-center z-10">
                    
                    {/* TALI LANYARD */}
                    <div 
                      className="absolute bottom-[100%] w-8 bg-slate-900 flex justify-center shadow-2xl border-x border-slate-700 overflow-hidden"
                      style={{ 
                        height: "calc(50vh + 400px)", 
                        marginBottom: "10px" 
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-[10px] font-bold text-white/50 tracking-[0.3em] uppercase rotate-90 whitespace-nowrap">
                          LINTANG MAHARANI • SOFTWARE DEVELOPER • LINTANG MAHARANI • SOFTWARE DEVELOPER • LINTANG MAHARANI
                        </p>
                      </div>
                    </div>

                    {/* Klip Besi */}
                    <div className="relative flex flex-col items-center">
                      <div className="w-6 h-6 rounded-full border-4 border-slate-400 bg-transparent shadow-inner" />
                      <div className="w-12 h-6 bg-gradient-to-b from-slate-200 to-slate-400 rounded-sm shadow-md border-b-2 border-slate-500 -mt-2" />
                    </div>

                    {/* Kartu ID */}
                    <div 
                      className="relative bg-white w-56 md:w-64 h-[380px] md:h-[420px] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-200 p-2 -mt-1 overflow-hidden"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      
                      {/* Header Kartu */}
                      <div className="w-full bg-slate-900 text-white text-[10px] font-bold text-center py-1.5 rounded-t-xl tracking-widest mb-2 z-10 relative">
                        ID CARD
                      </div>

                      {/* Foto (Diperbesar dan diubah object-contain agar baju/dasi terlihat) */}
                      <div className="relative w-full h-[220px] md:h-[260px] bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                        <Image
                          src="/lintang.png"
                          alt="Lintang Maharani"
                          fill
                          priority
                          className="object-contain object-top" // <-- PERUBAHAN PENTING DI SINI
                          sizes="(max-width: 768px) 100vw, 300px"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

                        <div className="absolute bottom-2 right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white shadow-md">
                          <Sparkles size={14} className="text-white" />
                        </div>
                      </div>

                      {/* Teks di Kartu */}
                      <div className="mt-2 md:mt-3 px-2 text-center relative z-10">
                        <h2 className="text-base md:text-lg font-black text-slate-900 tracking-tight uppercase">
                          Software Engineer
                        </h2>
                        <p className="text-xs md:text-sm font-semibold text-slate-800 mt-1 uppercase tracking-wide">
                          Lintang Maharani
                        </p>
                      </div>

                      {/* Pita Hitam Bawah */}
                      <div className="absolute bottom-0 left-0 w-full bg-slate-900 text-white text-[8px] md:text-[9px] font-bold py-2.5 md:py-3 text-center tracking-widest uppercase">
                        Informatics Engineering
                      </div>
                    </div>

                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* PERSONAL INTRO */}
      <section
        id="my-story"
        className="relative border-y border-slate-200 bg-white/80 backdrop-blur-sm z-10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20">
            <div className="animate-[fadeInUp_0.8s_ease-out_both]">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
                01 / My story
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-950 mt-5 leading-tight">
                The person behind the projects.
              </h2>
            </div>

            <div className="space-y-6 text-slate-500 leading-8 text-sm md:text-base animate-[fadeInUp_1s_ease-out_0.15s_both]">
              <p>
                My journey in technology started with curiosity. I was
                fascinated by how applications, websites, and digital systems
                could be created to solve everyday problems. That curiosity
                gradually became an interest in software development and the
                world of information technology.
              </p>
              <p>
                Currently, I'm pursuing a Diploma in Informatics Engineering at
                Politeknik Negeri Batam. Throughout my academic journey, I've
                been exploring programming, software development, databases, web
                technologies, and different areas of computer science.
              </p>
              <p>
                Outside the classroom, I enjoy learning through personal
                projects, organizations, internships, competitions, and new
                experiences. I believe some of the most valuable lessons don't
                always come from textbooks, but from actually trying, building,
                collaborating, and making mistakes.
              </p>
              <p>
                I don't have everything figured out yet, and honestly, I think
                that's part of the beauty of the journey. I'm here to learn,
                grow, experiment, and create opportunities for myself along the
                way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 z-10 bg-[#f8fafc]">
        <div className="mb-14 animate-[fadeInUp_0.8s_ease-out_both]">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
            02 / The journey so far
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-950 mt-5">
            Chapters of growth.
          </h2>
          <p className="text-slate-500 mt-5 leading-7 max-w-2xl">
            Every experience has played a part in shaping the way I learn,
            think, and approach technology.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[23px] md:left-[31px] top-6 bottom-6 w-px bg-slate-200">
            <div className="absolute inset-0 bg-gradient-to-b from-sky-400 via-slate-400 to-transparent animate-[lineGrow_2s_ease-out_both]" />
          </div>

          <div className="space-y-12">
            {journey.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative grid md:grid-cols-[100px_1fr] gap-6 md:gap-10 group animate-[fadeInUp_0.8s_ease-out_both]"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative z-10">
                    <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-2xl border border-slate-200 bg-white flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 group-hover:scale-110 transition-all duration-500">
                      <Icon
                        size={22}
                        strokeWidth={1.5}
                        className="group-hover:animate-[iconWiggle_0.6s_ease-in-out]"
                      />
                      <span className="absolute inset-0 rounded-2xl border-2 border-sky-400/0 group-hover:border-sky-400/40 group-hover:animate-[ping_1.5s_ease-out_infinite]" />
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-3xl p-7 md:p-9 hover:border-slate-400 hover:shadow-md hover:-translate-y-1 transition-all duration-500">
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
      <section className="relative bg-white/80 backdrop-blur-sm border-y border-slate-200 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-3xl mb-14 animate-[fadeInUp_0.8s_ease-out_both]">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
              03 / Things I love exploring
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-950 mt-5">
              Driven by curiosity.
            </h2>
            <p className="text-slate-500 mt-5 leading-7">
              Technology is a broad world, and these are some of the areas that
              continuously inspire me to explore, learn, and build.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {interests.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group bg-[#f8fafc] border border-slate-200 rounded-3xl p-7 hover:bg-white hover:border-slate-400 hover:-translate-y-2 hover:shadow-lg transition-all duration-500 animate-[fadeInUp_0.8s_ease-out_both]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                      <Icon size={21} />
                    </div>
                    <span className="text-xs text-slate-300 tracking-widest group-hover:text-slate-500 transition-colors">
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
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 z-10 bg-[#f8fafc]">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
          <div className="animate-[fadeInUp_0.8s_ease-out_both]">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
              04 / What I believe
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-950 mt-5 leading-tight">
              A few things I carry with me.
            </h2>
            <div className="mt-8 w-16 h-1 bg-slate-950 rounded-full animate-[lineGrow_1.2s_ease-out_0.3s_both]" />
            <p className="text-sm text-slate-500 leading-7 mt-7">
              These are not rules, but reminders of the kind of person and
              developer I hope to become.
            </p>
          </div>

          <div className="space-y-5">
            {values.map((item, index) => (
              <div
                key={item.number}
                className="group border-b border-slate-200 pb-7 hover:border-slate-400 transition-colors duration-300 animate-[fadeInUp_0.7s_ease-out_both]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-xs tracking-widest text-slate-400 pt-1 transition-colors group-hover:text-sky-500">
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
      <section className="relative bg-white/80 backdrop-blur-sm border-t border-slate-200 z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
          <div className="max-w-4xl mx-auto text-center animate-[fadeInUp_0.8s_ease-out_both]">
            <Coffee
              size={28}
              strokeWidth={1.4}
              className="mx-auto text-slate-400 animate-[float_3s_ease-in-out_infinite]"
            />
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mt-6">
              A note from me
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-slate-950 mt-6">
              I'm not just learning how to build software.
              <span className="text-slate-400"> I'm learning how</span>
              to build a life, too.
            </h2>
            <p className="text-sm md:text-base text-slate-500 leading-8 mt-8 max-w-2xl mx-auto">
              A life filled with meaningful work, continuous learning,
              opportunities to make a difference, and the courage to dream a
              little bigger.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="relative border-t border-slate-200 z-10 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 animate-[fadeInUp_0.8s_ease-out_both]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400">
                What comes next?
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-4 text-slate-950">
                Still learning. Still building.
              </h2>
              <p className="text-sm text-slate-500 leading-7 mt-4 max-w-xl">
                Explore some of the things I've been working on and the ideas
                I've turned into projects.
              </p>
            </div>
            <a
              href="/projects"
              className="group inline-flex items-center justify-center gap-2 bg-slate-950 text-white rounded-xl px-6 py-3.5 text-sm font-medium hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/20 shrink-0"
            >
              Explore my projects
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ===== ANIMATIONS (CSS STANDAR UNTUK SECTION LAIN) ===== */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes blobFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.15); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.9); }
        }
        @keyframes lineGrow {
          from { transform: scaleY(0); transform-origin: top; opacity: 0; }
          to { transform: scaleY(1); transform-origin: top; opacity: 1; }
        }
        @keyframes iconWiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-8deg); }
          75% { transform: rotate(8deg); }
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.6; }
          80%, 100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </main>
  );
}