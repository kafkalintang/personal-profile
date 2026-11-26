
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Send,
  MapPin,
  MessageSquare,
  Code2,
  BriefcaseBusiness,
  Globe,
  Copy,
  Check,
} from "lucide-react";

const EMAIL = "maharanilintang83@gmail.com";

const socialLinks = [
  {
    name: "LinkedIn",
    handle: "Connect professionally",
    href: "https://www.linkedin.com/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    handle: "Explore my repositories",
    href: "https://github.com/",
    icon: "github",
  },
  {
    name: "Instagram",
    handle: "Follow my journey",
    href: "https://www.instagram.com/",
    icon: "instagram",
  },
  {
    name: "X",
    handle: "Thoughts & updates",
    href: "https://x.com/",
    icon: "x",
  },
  {
    name: "TikTok",
    handle: "Creative moments",
    href: "https://www.tiktok.com/",
    icon: "tiktok",
  },
  {
    name: "Discord",
    handle: "Let's connect",
    href: "https://discord.com/",
    icon: "discord",
  },
];

function SocialIcon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  switch (name) {
    case "linkedin":
      return (
        <svg {...common}>
          <path
            d="M20.45 2H3.55C2.7 2 2 2.68 2 3.53v16.94C2 21.32 2.7 22 3.55 22h16.9c.85 0 1.55-.68 1.55-1.53V3.53C22 2.68 21.3 2 20.45 2ZM8.08 18.5H5.1V9.4h2.98v9.1ZM6.59 8.15a1.73 1.73 0 1 1 0-3.46 1.73 1.73 0 0 1 0 3.46ZM18.9 18.5h-2.97v-4.43c0-1.06-.02-2.42-1.48-2.42-1.48 0-1.7 1.15-1.7 2.34v4.51H9.78V9.4h2.85v1.24h.04c.4-.72 1.36-1.48 2.8-1.48 3 0 3.53 1.97 3.53 4.53v4.81Z"
            fill="currentColor"
          />
        </svg>
      );

    case "github":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path
            d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.75-1.31-3.75-1.31-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.62 1.22 3.26.93.1-.73.39-1.22.71-1.5-2.48-.28-5.09-1.25-5.09-5.54 0-1.23.44-2.23 1.16-3.01-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.73 10.73 0 0 1 5.63 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.78 1.16 1.78 1.16 3.01 0 4.3-2.61 5.26-5.1 5.54.4.34.76 1.02.76 2.06v3.07c0 .3.2.64.77.53A11.2 11.2 0 0 0 12 .8Z"
            fill="currentColor"
          />
        </svg>
      );

    case "instagram":
      return (
        <svg {...common}>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
        </svg>
      );

    case "x":
      return (
        <svg {...common}>
          <path
            d="M18.9 2H22l-6.8 7.77L23 22h-6.1l-4.78-6.25L6.66 22H3.5l7.25-8.29L2.9 2h6.25l4.32 5.7L18.9 2Zm-1.08 18h1.72L8.05 3.9H6.2L17.82 20Z"
            fill="currentColor"
          />
        </svg>
      );

    case "tiktok":
      return (
        <svg {...common}>
          <path
            d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.98V2h-3.4v14.67a2.9 2.9 0 1 1-2.9-2.9c.31 0 .62.05.91.14v-3.48a6.34 6.34 0 1 0 5.39 6.26V9.32a8.18 8.18 0 0 0 4.78 1.53V7.46c-.35 0-.7-.03-1.01-.08Z"
            fill="currentColor"
          />
        </svg>
      );

    case "discord":
      return (
        <svg {...common}>
          <path
            d="M20.32 4.37a19.8 19.8 0 0 0-4.92-1.51.07.07 0 0 0-.08.04c-.21.37-.45.86-.62 1.24a18.27 18.27 0 0 0-5.4 0c-.18-.39-.42-.87-.63-1.24a.08.08 0 0 0-.08-.04 19.73 19.73 0 0 0-4.92 1.51.08.08 0 0 0-.04.03C.5 8.77-.36 13.03.08 17.23c0 .02.02.04.04.06a19.88 19.88 0 0 0 6.05 3.05.08.08 0 0 0 .09-.03c.47-.65.88-1.34 1.23-2.07a.08.08 0 0 0-.04-.11 13.12 13.12 0 0 1-1.89-.9.08.08 0 0 1 0-.14c.13-.1.26-.2.39-.3a.08.08 0 0 1 .08-.01 14.26 14.26 0 0 0 12.92 0 .08.08 0 0 1 .08.01c.13.1.26.2.39.3a.08.08 0 0 1 0 .14c-.6.35-1.23.65-1.89.9a.08.08 0 0 0-.04.11c.35.73.76 1.42 1.23 2.07a.08.08 0 0 0 .09.03 19.88 19.88 0 0 0 6.05-3.05.08.08 0 0 0 .04-.06c.53-4.85-.82-9.07-3.57-12.83a.08.08 0 0 0-.04-.03ZM8.02 14.72c-1.15 0-2.1-1.05-2.1-2.34 0-1.29.93-2.34 2.1-2.34 1.18 0 2.12 1.06 2.1 2.34 0 1.29-.93 2.34-2.1 2.34Zm7.96 0c-1.15 0-2.1-1.05-2.1-2.34 0-1.29.93-2.34 2.1-2.34 1.18 0 2.12 1.06 2.1 2.34 0 1.29-.93 2.34-2.1 2.34Z"
            fill="currentColor"
          />
        </svg>
      );

    default:
      return <Globe size={22} />;
  }
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      form.subject || `Message from ${form.name}`
    );

    const body = encodeURIComponent(
      `Hello Lintang,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 mb-6">
            <MessageSquare size={15} />
            Get in touch
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight text-slate-950">
            Let's talk
            <span className="text-slate-400">.</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-slate-500 leading-8 max-w-2xl">
            Have an idea, opportunity, project, or simply want to connect?
            My inbox is always open for meaningful conversations.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* CONTACT INFORMATION */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Contact information
              </p>

              <h2 className="text-2xl font-semibold tracking-tight mt-4">
                Find me here.
              </h2>

              <p className="text-sm text-slate-500 leading-7 mt-4">
                Feel free to reach out through email or connect with me
                on professional platforms.
              </p>

              {/* EMAIL */}
              <div className="mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <Mail size={19} className="text-slate-700" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900">
                      Email
                    </p>

                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-sm text-slate-500 hover:text-slate-900 transition break-all mt-2 block"
                    >
                      {EMAIL}
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-900 transition mt-3"
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                      {copied ? "Copied!" : "Copy email"}
                    </button>
                  </div>
                </div>
              </div>

              {/* LOCATION */}
              <div className="mt-7">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <MapPin size={19} className="text-slate-700" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      Location
                    </p>

                    <p className="text-sm text-slate-500 mt-2">
                      Batam, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Social profiles
                </p>

                <h2 className="text-2xl font-semibold tracking-tight mt-4">
                  Let's connect.
                </h2>

                <p className="text-sm text-slate-500 leading-7 mt-3">
                  Find me across different platforms. I'm always happy
                  to connect, share ideas, and meet new people.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 border border-slate-200 rounded-2xl hover:border-slate-400 hover:bg-slate-50 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shrink-0">
                      <SocialIcon name={social.icon} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900">
                        {social.name}
                      </p>

                      <p className="text-xs text-slate-400 mt-1 truncate">
                        {social.handle}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition shrink-0"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* AVAILABILITY */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full" />

                <p className="text-xs tracking-wide text-slate-300">
                  OPEN TO OPPORTUNITIES
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-5">
                Let's create something meaningful.
              </h3>

              <p className="text-sm text-slate-400 leading-7 mt-4">
                Open to collaborations, projects, learning opportunities,
                and conversations around technology and innovation.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {["Collaboration", "Projects", "Technology", "Networking"].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full border border-slate-700 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10">

            {/* FORM HEADER */}
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Send a message
              </p>

              <h2 className="text-2xl font-semibold tracking-tight mt-4">
                I'd love to hear from you.
              </h2>

              <p className="text-sm text-slate-500 mt-3 leading-7">
                Fill out the form below and your email application
                will open with the message prepared.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  rows={6}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition resize-y"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white rounded-xl px-6 py-4 text-sm font-medium hover:bg-slate-700 transition-all"
              >
                Send message
                <Send size={16} />
              </button>

              {/* NOTE */}
              <p className="text-xs text-slate-400 leading-6 text-center">
                This form uses your email application to send a message.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* BOTTOM SECTION */}
      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400">
                A little reminder
              </p>

              <h2 className="text-2xl font-semibold tracking-tight mt-3">
                Good things start with a conversation.
              </h2>
            </div>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-500 transition"
            >
              Email me directly
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
