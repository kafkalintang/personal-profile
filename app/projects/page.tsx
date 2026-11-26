
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Layers3,
  FolderKanban,
  Sparkles,
  Globe2,
  Database,
  Smartphone,
  Terminal,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Monitor,
  Wallet,
  CircuitBoard,
  PanelsTopLeft,
  ArrowRight,
  Braces,
  Activity,
  CircleDot,
  Zap,
  Wifi,
  Gauge,
  ShoppingCart,
  Brain,
  Map,
  BarChart3,
  ShieldCheck,
  MessageCircle,
  Server,
  LockKeyhole,
  Cloud,
  Fingerprint,
  TrendingUp,
  Bot,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Requify",
    category: "AI · Software Engineering",
    description:
      "An AI-assisted platform designed to analyze software requirements, helping identify functional and non-functional requirements, ambiguity, duplication, and incompleteness.",
    tags: ["Next.js", "AI", "NLP", "Software Engineering"],
    icon: Sparkles,
    status: "In Development",
    featured: true,
  },
  {
    number: "02",
    name: "Personal Savings",
    category: "Web Application",
    description:
      "A personal finance dashboard designed to organize multiple accounts, monitor balances, and manage financial activities through a simple interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: Database,
    status: "In Development",
    featured: false,
  },
  {
    number: "03",
    name: "IoT Experiments",
    category: "Internet of Things",
    description:
      "A collection of IoT experiments and simulations exploring hardware interaction, sensors, electronic components, and embedded systems.",
    tags: ["IoT", "Wokwi", "Arduino"],
    icon: Cpu,
    status: "Exploration",
    featured: false,
  },
  {
    number: "04",
    name: "Personal Profile",
    category: "Web Development",
    description:
      "A personal digital space showcasing my journey, projects, experiences, ideas, and interests in technology and software development.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    icon: Globe2,
    status: "In Development",
    featured: false,
  },
];

const explorations = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building web applications with modern frameworks, structured code, and thoughtful user experiences.",
  },
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    description:
      "Exploring AI, natural language processing, and practical applications of intelligent systems.",
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description:
      "Learning to create accessible, intuitive, and functional digital products across platforms.",
  },
  {
    icon: Layers3,
    title: "Systems & Technology",
    description:
      "Exploring the intersection of software, hardware, system architecture, and technology.",
  },
];

/* =========================================================
   PROJECT SHOWCASE DATA
   Tambahkan project baru di sini.
   image: path gambar dari folder public.
   Jika belum punya gambar, isi string kosong.
========================================================= */

const showcaseProjects = [
  {
    number: "02",
    name: "Personal Savings",
    category: "PERSONAL FINANCE · WEB APP",
    description:
      "A personal financial space built to bring multiple accounts into one place. The idea is to make saving, monitoring balances, and understanding money habits feel simpler and more organized.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "In Development",
    visual: "savings",
    image: "/projects/personal-savings.png",
    metrics: ["Multiple accounts", "Balance tracking", "Financial overview"],
    icon: Wallet,
  },
  {
    number: "03",
    name: "IoT Experiments",
    category: "EMBEDDED SYSTEMS · IOT",
    description:
      "A playground for learning how software interacts with physical devices. Through simulations and hardware experiments, I explore sensors, microcontrollers, logic, and the possibilities of connected systems.",
    tags: ["Wokwi", "Arduino", "IoT"],
    status: "Exploration",
    visual: "iot",
    image: "",
    metrics: ["Sensor simulation", "Hardware logic", "Embedded systems"],
    icon: CircuitBoard,
  },
  {
    number: "04",
    name: "Personal Profile",
    category: "WEB DEVELOPMENT · PORTFOLIO",
    description:
      "More than a portfolio, this website is a digital space to document my journey, showcase what I build, share things I learn, and explore the ideas I hope to bring to life.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In Development",
    visual: "image",
    image: "/projects/personal-profile.png",
    metrics: ["Personal journey", "Project showcase", "Creative space"],
    icon: PanelsTopLeft,
  },
  {
    number: "05",
    name: "StarMart Platform",
    category: "E-COMMERCE · WEB PLATFORM",
    description:
      "A modern e-commerce platform concept featuring inventory management, online transactions, and seller-oriented analytics to support a more organized digital shopping experience.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
    status: "Project Concept",
    visual: "image",
    image: "/projects/starmart.png",
    metrics: ["Inventory management", "Online transactions", "Seller analytics"],
    icon: ShoppingCart,
  },
  {
    number: "06",
    name: "MediScan AI",
    category: "ARTIFICIAL INTELLIGENCE · HEALTH",
    description:
      "An AI-oriented concept for image-based skin condition analysis, combining machine learning and web technology to explore how intelligent systems could assist in preliminary information gathering.",
    tags: ["Python", "TensorFlow", "FastAPI", "React"],
    status: "Project Concept",
    visual: "image",
    image: "/projects/mediscan.png",
    metrics: ["Image classification", "Machine learning", "AI integration"],
    icon: Brain,
  },
  {
    number: "07",
    name: "WisataKu App",
    category: "MOBILE APPLICATION · TRAVEL",
    description:
      "A travel application concept that explores personalized destination recommendations through user preferences, weather information, and travel discovery features.",
    tags: ["Flutter", "Firebase", "Google Maps", "OpenWeather"],
    status: "Project Concept",
    visual: "image",
    image: "/projects/wisataku.png",
    metrics: ["Travel discovery", "Personalized suggestions", "Map integration"],
    icon: Map,
  },
  {
    number: "08",
    name: "FinTrack Dashboard",
    category: "DATA ANALYTICS · FINANCE",
    description:
      "An interactive financial dashboard concept focused on data visualization, financial trend exploration, and generating structured reports to support business insights.",
    tags: ["Python", "Pandas", "Plotly", "Streamlit"],
    status: "Project Concept",
    visual: "image",
    image: "/projects/fintrack.png",
    metrics: ["Financial visualization", "Trend exploration", "Reporting"],
    icon: BarChart3,
  },
  {
    number: "09",
    name: "SecureVault API",
    category: "BACKEND · API SECURITY",
    description:
      "A backend API concept exploring secure authentication, access control, API protection, and structured data handling for modern web applications.",
    tags: ["Node.js", "JWT", "MongoDB", "Docker"],
    status: "Project Concept",
    visual: "image",
    image: "/projects/securevault.png",
    metrics: ["Authentication", "API protection", "Backend architecture"],
    icon: ShieldCheck,
  },
  {
    number: "10",
    name: "ChatSpace Real-time",
    category: "REAL-TIME APPLICATION · CHAT",
    description:
      "A real-time messaging application concept exploring interactive communication, instant messaging, and scalable chat architecture through modern web technologies.",
    tags: ["Socket.io", "React", "WebRTC", "Node.js"],
    status: "Project Concept",
    visual: "image",
    image: "/projects/chatspace.png",
    metrics: ["Real-time messaging", "Communication", "Interactive systems"],
    icon: MessageCircle,
  },
];

/* =========================================================
   IOT VISUAL
========================================================= */

function IoTVisual() {
  return (
    <div className="relative flex min-h-[350px] w-full items-center justify-center overflow-hidden bg-[#f1f5f9] p-6 sm:min-h-[420px] sm:p-10">
      <div className="absolute inset-0 opacity-50">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.17) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.17) 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />
      </div>

      <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white blur-3xl" />
      <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-slate-300/50 blur-3xl" />

      <div className="relative w-full max-w-[470px] rotate-[-1deg] rounded-[26px] border border-slate-300 bg-[#202b3a] p-5 shadow-2xl shadow-slate-400/30 transition-transform duration-500 group-hover:rotate-0 sm:p-7">

        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-500 bg-slate-800 text-slate-100">
              <CircuitBoard size={20} />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                IoT Lab
              </p>
              <p className="text-[10px] tracking-wide text-slate-400">
                Embedded systems playground
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-3 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-[10px] text-slate-300">
              ACTIVE
            </span>
          </div>
        </div>

        <div className="relative rounded-2xl border border-slate-600 bg-[#17212e] p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Circuit overview
            </p>
            <Braces size={15} className="text-slate-400" />
          </div>

          <div className="relative mx-auto flex min-h-[230px] items-center justify-center">
            <svg
              viewBox="0 0 400 230"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <path d="M90 55 H155 V90" stroke="#64748b" strokeWidth="2" />
              <path d="M90 175 H155 V140" stroke="#64748b" strokeWidth="2" />
              <path d="M245 90 V55 H310" stroke="#64748b" strokeWidth="2" />
              <path d="M245 140 V175 H310" stroke="#64748b" strokeWidth="2" />
              <path d="M200 25 V60" stroke="#64748b" strokeWidth="2" />
              <path d="M200 170 V205" stroke="#64748b" strokeWidth="2" />

              <circle cx="155" cy="90" r="4" fill="#94a3b8" />
              <circle cx="155" cy="140" r="4" fill="#94a3b8" />
              <circle cx="245" cy="90" r="4" fill="#94a3b8" />
              <circle cx="245" cy="140" r="4" fill="#94a3b8" />
            </svg>

            <div className="relative z-10 flex h-[120px] w-[140px] flex-col items-center justify-center rounded-2xl border border-slate-500 bg-[#334155] shadow-xl">
              <Cpu size={32} className="text-white" />
              <p className="mt-3 text-xs font-semibold tracking-wider text-white">
                ESP32
              </p>
              <p className="mt-1 text-[9px] text-slate-400">
                Microcontroller
              </p>
            </div>

            <div className="absolute left-[2%] top-[8%] z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-500 bg-[#263445] shadow-lg">
              <Gauge size={19} className="text-slate-200" />
            </div>

            <div className="absolute left-[2%] bottom-[8%] z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-500 bg-[#263445] shadow-lg">
              <Activity size={19} className="text-slate-200" />
            </div>

            <div className="absolute right-[2%] top-[8%] z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-500 bg-[#263445] shadow-lg">
              <Wifi size={19} className="text-slate-200" />
            </div>

            <div className="absolute right-[2%] bottom-[8%] z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-500 bg-[#263445] shadow-lg">
              <Zap size={19} className="text-slate-200" />
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { label: "Sensors", value: "INPUT" },
            { label: "Controller", value: "PROCESS" },
            { label: "Output", value: "RESULT" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-slate-600 bg-slate-800 p-3"
            >
              <p className="text-[9px] text-slate-400">{item.label}</p>
              <p className="mt-2 text-[10px] font-medium tracking-wider text-slate-200">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-[10px] text-slate-400">
            SIMULATION / EXPERIMENT
          </span>
          <CircuitBoard size={15} className="text-slate-400" />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT IMAGE
========================================================= */

function ProjectImage({
  src,
  projectName,
}: {
  src: string;
  projectName: string;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative flex min-h-[350px] w-full items-center justify-center overflow-hidden bg-[#f1f5f9] sm:min-h-[420px]">
      <div className="absolute inset-0 opacity-40">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />
      </div>

      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white blur-3xl" />

      {!imageError && src ? (
        <img
          src={src}
          alt={`${projectName} preview`}
          onError={() => setImageError(true)}
          className="relative z-10 h-full min-h-[350px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:min-h-[420px]"
        />
      ) : (
        <div className="relative z-10 flex w-full max-w-md flex-col items-center px-8 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm">
            <Monitor size={26} />
          </div>

          <p className="mt-5 text-sm font-semibold text-slate-700">
            {projectName}
          </p>

          <p className="mt-2 text-xs leading-6 text-slate-400">
            Project preview will appear here
            <br />
            once the screenshot is added.
          </p>

          <div className="mt-5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-[10px] tracking-wider text-slate-400">
            IMAGE PLACEHOLDER
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   VISUAL ROUTER
========================================================= */

function ShowcaseVisual({
  type,
  image,
  name,
}: {
  type: string;
  image: string;
  name: string;
}) {
  if (type === "iot") return <IoTVisual />;

  return <ProjectImage src={image} projectName={name} />;
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function ProjectsPage() {
  const featuredProject = projects.find((project) => project.featured)!;
  const otherProjects = projects.filter((project) => !project.featured);

  const [showAll, setShowAll] = useState(false);

  const visibleShowcase = showAll
    ? showcaseProjects
    : showcaseProjects.slice(0, 2);

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#1e293b]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12">

        {/* HEADER */}
        <section className="animate-[fadeIn_0.7s_ease-out]">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-slate-400" />
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Selected works & experiments
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                Things I&apos;ve
                <br />
                been building.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">
                A collection of projects, ideas, and experiments shaped by
                curiosity, learning, and my interest in technology.
              </p>
            </div>

            <div className="flex items-center gap-3 pb-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <FolderKanban size={21} className="text-slate-600" />
              </div>

              <div>
                <p className="text-2xl font-semibold text-slate-900">
                  {String(projects.length + showcaseProjects.length - 1).padStart(
                    2,
                    "0"
                  )}
                </p>

                <p className="text-xs text-slate-500">
                  Projects & experiments
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Code2,
              title: "Development",
              text: "Building digital products",
            },
            {
              icon: Lightbulb,
              title: "Experimentation",
              text: "Learning through exploration",
            },
            {
              icon: Sparkles,
              title: "Innovation",
              text: "Turning ideas into possibilities",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <item.icon
                size={20}
                className="mb-5 text-slate-500 transition-colors group-hover:text-slate-900"
              />

              <h3 className="text-sm font-semibold text-slate-800">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {item.text}
              </p>
            </div>
          ))}
        </section>

        {/* FEATURED REQUIFY */}
        <section className="mt-20">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Spotlight
              </p>

              <h2 className="mt-2 text-xl font-semibold text-slate-900">
                Featured project
              </h2>
            </div>

            <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-500">
              01 / 10
            </span>
          </div>

          <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/40">
            <div className="grid lg:grid-cols-2">

              {/* REQUIFY VISUAL */}
              <div className="relative min-h-[320px] overflow-hidden bg-[#eef2f6] p-8 sm:p-12">
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/70 blur-3xl" />
                <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-slate-300/30 blur-3xl" />

                <div className="relative flex h-full min-h-[260px] flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
                        <Sparkles size={17} />
                      </div>

                      <span className="text-sm font-semibold text-slate-700">
                        Requify
                      </span>
                    </div>

                    <span className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-500">
                      AI-powered
                    </span>
                  </div>

                  <div className="my-8 rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
                    <div className="mb-5 flex items-center justify-between">
                      <p className="text-xs font-medium text-slate-600">
                        Requirement Analysis
                      </p>

                      <span className="flex items-center gap-1.5 text-[10px] text-slate-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                        Analysis
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-slate-700" />
                          <span className="text-[10px] font-semibold text-slate-700">
                            Functional Requirement
                          </span>
                        </div>

                        <p className="text-xs leading-5 text-slate-500">
                          System shall allow users to manage their account.
                        </p>
                      </div>

                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-slate-400" />
                          <span className="text-[10px] font-semibold text-slate-700">
                            Quality Analysis
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <span className="rounded-md bg-slate-200 px-2 py-1 text-[10px] text-slate-600">
                            Ambiguity
                          </span>
                          <span className="rounded-md bg-slate-200 px-2 py-1 text-[10px] text-slate-600">
                            Completeness
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400">
                    Turning requirements into clearer insights.
                  </p>
                </div>
              </div>

              {/* DETAILS */}
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <div className="mb-6 flex items-center gap-3">
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                    {featuredProject.category}
                  </span>

                  <span className="text-xs text-slate-400">
                    {featuredProject.status}
                  </span>
                </div>

                <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
                  {featuredProject.name}
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  {featuredProject.description}
                </p>

                <div className="mt-7">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-400">
                    Technology
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-9 flex items-center gap-2 text-sm text-slate-400">
                  <Terminal size={16} />
                  <span>Currently being developed</span>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* SHOWCASE */}
        <section className="mt-24">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-slate-400" />
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                  Project showcase
                </p>
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Ideas in progress.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                A closer look at some of the things I have been building,
                exploring, and learning along the way.
              </p>
            </div>

            <p className="text-xs tracking-wider text-slate-400">
              SELECTED PROJECTS · 02—10
            </p>
          </div>

          <div className="space-y-20 sm:space-y-28">
            {visibleShowcase.map((project, index) => (
              <article
                key={project.number}
                className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-0 animate-[fadeIn_0.7s_ease-out]"
              >
                {/* IMAGE */}
                <div
                  className={`relative overflow-hidden rounded-[28px] border border-slate-200 bg-white lg:col-span-7 ${
                    index % 2 === 0
                      ? "lg:col-start-1"
                      : "lg:col-start-6"
                  }`}
                >
                  <ShowcaseVisual
                    type={project.visual}
                    image={project.image}
                    name={project.name}
                  />

                  <div className="absolute left-5 top-5 z-20 rounded-full border border-slate-200/70 bg-white/90 px-3 py-1.5 backdrop-blur-sm sm:left-7 sm:top-7">
                    <span className="text-[10px] font-medium tracking-wider text-slate-500">
                      PROJECT {project.number}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className={`relative z-10 lg:col-span-6 ${
                    index % 2 === 0
                      ? "lg:col-start-7 lg:row-start-1 lg:pl-12"
                      : "lg:col-start-1 lg:row-start-1 lg:pr-12"
                  }`}
                >
                  <span className="text-xs font-medium tracking-[0.18em] text-slate-400">
                    {project.category}
                  </span>

                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600">
                      <project.icon size={20} />
                    </div>

                    <span className="text-xs text-slate-400">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                    {project.name}
                  </h3>

                  <p className="mt-5 text-sm leading-8 text-slate-500">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 border-t border-slate-200 pt-6">
                    <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                      Focus areas
                    </p>

                    <div className="space-y-3">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric}
                          className="flex items-center gap-3 text-sm text-slate-600"
                        >
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100">
                            <ArrowRight size={11} />
                          </span>
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-xs text-slate-400 transition-colors group-hover:text-slate-700">
                    <span>Exploring possibilities</span>
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* SHOW MORE */}
          {showcaseProjects.length > 2 && (
            <div className="mt-14 flex justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-medium text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/40"
              >
                {showAll ? "Show less projects" : "Show more projects"}

                {showAll ? (
                  <ChevronUp size={17} />
                ) : (
                  <ChevronDown
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                )}
              </button>
            </div>
          )}
        </section>

        {/* ORIGINAL PROJECT CARDS */}
        <section className="mt-24">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              More explorations
            </p>

            <h2 className="mt-2 text-xl font-semibold text-slate-900">
              Other projects
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
              A quick overview of the projects and experiments currently
              included in my digital workspace.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <article
                key={project.number}
                className="group rounded-2xl border border-slate-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40 sm:p-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-7 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white">
                    <project.icon size={21} />
                  </div>

                  <span className="text-xs text-slate-400">
                    {project.number}
                  </span>
                </div>

                <p className="text-xs text-slate-400">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {project.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-xs text-slate-400">
                    {project.status}
                  </span>

                  <div className="flex items-center gap-1 text-xs text-slate-500 transition-all group-hover:gap-2 group-hover:text-slate-900">
                    Explore project
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPLORATIONS */}
        <section className="mt-20">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 sm:p-12">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Beyond the projects
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                What I&apos;m exploring.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Technology is a constantly evolving field. These are some of
                the areas I am currently curious about and working to
                understand better.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {explorations.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                    <item.icon size={19} className="text-slate-600" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 border-t border-slate-200 pt-12">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Have something in mind?
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                Let&apos;s create something meaningful.
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
                I&apos;m always open to ideas, collaborations, and opportunities
                to learn something new.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-xl bg-slate-900 px-6 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-slate-700"
            >
              Get in touch
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 flex flex-col justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-400">
            Designed & built with curiosity.
          </p>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Lintang Maharani
          </p>
        </footer>
      </div>

      {/* ANIMATIONS */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  );
}
