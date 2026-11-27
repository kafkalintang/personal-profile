"use client";

import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Sparkles,
  Heart,
  Star,
  User,
} from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    setMessage("Login interface is ready. Authentication is not connected yet.");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white px-5 py-10 text-black">
      {/* =========================================
          BACKGROUND DESIGN (HANYA INI YANG DIUBAH)
          ========================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        
        {/* Animated Gradient Blobs */}
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#BAE6FD]/60 to-[#E0F2FE]/40 blur-3xl animate-blob-1" />
        <div className="absolute -bottom-40 -right-24 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-[#7DD3FC]/40 to-[#F0F9FF]/60 blur-3xl animate-blob-2" />
        <div className="absolute left-1/2 top-1/4 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#E0F2FE]/50 to-[#BAE6FD]/30 blur-3xl animate-blob-3" />

        {/* Soft Glowing Orbs */}
        <div className="absolute left-[15%] top-[20%] h-64 w-64 rounded-full bg-[#7DD3FC]/20 blur-[100px] animate-pulse-soft" />
        <div className="absolute right-[20%] bottom-[25%] h-72 w-72 rounded-full bg-[#BAE6FD]/25 blur-[120px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute right-[40%] top-[10%] h-48 w-48 rounded-full bg-[#E0F2FE]/40 blur-[80px] animate-pulse-soft" style={{ animationDelay: '4s' }} />

        {/* Floating Translucent Bubbles (Kaca / Light) */}
        <div className="absolute left-[8%] top-[25%] h-16 w-16 rounded-full border border-[#BAE6FD]/60 bg-gradient-to-br from-white/80 to-[#E0F2FE]/30 shadow-[0_8px_32px_rgba(186,230,253,0.3)] backdrop-blur-md animate-float-bubble-1" />
        <div className="absolute right-[15%] top-[15%] h-24 w-24 rounded-full border border-[#BAE6FD]/50 bg-gradient-to-br from-white/80 to-[#BAE6FD]/20 shadow-[0_8px_32px_rgba(186,230,253,0.2)] backdrop-blur-md animate-float-bubble-2" />
        <div className="absolute bottom-[20%] left-[20%] h-12 w-12 rounded-full border border-[#BAE6FD]/60 bg-gradient-to-br from-white/80 to-[#E0F2FE]/30 shadow-[0_8px_32px_rgba(186,230,253,0.3)] backdrop-blur-md animate-float-bubble-3" />
        <div className="absolute bottom-[30%] right-[10%] h-20 w-20 rounded-full border border-[#BAE6FD]/50 bg-gradient-to-br from-white/80 to-[#BAE6FD]/20 shadow-[0_8px_32px_rgba(186,230,253,0.2)] backdrop-blur-md animate-float-bubble-1" style={{ animationDelay: '1.5s' }} />

        {/* Drifting Light Particles (Titik Cahaya) */}
        <div className="absolute left-[35%] top-[20%] h-3 w-3 rounded-full bg-[#7DD3FC] shadow-[0_0_12px_#7DD3FC] animate-drift-1" />
        <div className="absolute right-[30%] top-[40%] h-2 w-2 rounded-full bg-[#BAE6FD] shadow-[0_0_10px_#BAE6FD] animate-drift-2" />
        <div className="absolute bottom-[15%] left-[45%] h-4 w-4 rounded-full bg-[#E0F2FE] shadow-[0_0_15px_#E0F2FE] animate-drift-3" />
        <div className="absolute left-[60%] top-[10%] h-2 w-2 rounded-full bg-[#7DD3FC] shadow-[0_0_10px_#7DD3FC] animate-drift-2" style={{ animationDelay: '3s' }} />
      </div>

      {/* =========================================
          KONTEN LOGIN (TIDAK DIUBAH SAMA SEKALI)
          ========================================= */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center justify-center">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-20">
          
          {/* Left illustration section */}
          <section className="relative hidden min-h-[560px] items-center justify-center lg:flex">
            <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-br from-sky-300/50 to-blue-300/40 blur-3xl" />

            <div className="relative w-full max-w-md [perspective:1400px]">
              <div className="animate-card-float">
                <div className="[transform:rotateY(-7deg)_rotateX(3deg)]">
                  {/* Main illustration card */}
                  <div className="relative overflow-hidden rounded-[32px] border border-white/90 bg-gradient-to-br from-white/95 via-white/85 to-sky-100/80 p-8 shadow-[0_35px_90px_rgba(2,132,199,0.22)] backdrop-blur-xl">
                    {/* top shine */}
                    <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-sky-200/50 blur-3xl" />

                    <div className="relative mb-10 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-black shadow-sm">
                          <User size={19} strokeWidth={1.5} />
                        </div>
                        <span className="font-semibold tracking-tight text-black">
                          Personal Space
                        </span>
                      </div>

                      <div className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-md shadow-sky-400/60" />
                    </div>

                    <div className="relative space-y-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-black">
                          WELCOME TO YOUR SPACE
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-black">
                          Your journey,
                          <br />
                          <span className="text-black">
                            your own story.
                          </span>
                        </h2>
                        <p className="mt-3 max-w-xs text-sm leading-6 text-black">
                          A little space to keep your ideas, memories, and
                          everything that makes you who you are.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-4">
                        <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                          <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-slate-200 text-black">
                            <Sparkles size={17} strokeWidth={1.5} />
                          </div>
                          <p className="text-xs text-black">Your ideas</p>
                          <p className="mt-1 text-sm font-semibold text-black">
                            Keep creating
                          </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                          <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-slate-200 text-black">
                            <LockKeyhole size={17} strokeWidth={1.5} />
                          </div>
                          <p className="text-xs text-black">Your space</p>
                          <p className="mt-1 text-sm font-semibold text-black">
                            Stay personal
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="relative mt-8 flex items-center justify-between border-t border-slate-200 pt-5">
                      <p className="text-xs text-black">
                        Made for your journey
                      </p>
                      <div className="flex gap-1.5">
                        <span className="h-1.5 w-5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600" />
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating mini card */}
              <div className="absolute -right-9 top-20 rounded-2xl border border-white/90 bg-white/95 p-4 shadow-2xl shadow-sky-500/20 backdrop-blur-md animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-black">
                    <Star size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs text-black">A new chapter</p>
                    <p className="text-sm font-semibold text-black">
                      Keep growing
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating bottom card */}
              <div className="absolute -bottom-8 -left-8 rounded-2xl border border-white/90 bg-white/95 px-5 py-4 shadow-2xl shadow-blue-500/20 backdrop-blur-md animate-float">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-slate-200 text-black">
                    <Heart size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs text-black">Little reminder</p>
                    <p className="text-sm font-semibold text-black">
                      You are doing great.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Login section */}
          <section className="flex w-full justify-center lg:justify-end">
            <div className="w-full max-w-[440px] animate-login-appear">
              <div className="mb-8 text-center lg:text-left">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-slate-200 text-black shadow-sm ring-4 ring-white/70">
                  <Sparkles size={24} strokeWidth={1.5} />
                </div>

                <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-black">
                  PERSONAL PROFILE
                </p>

                <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  Welcome{" "}
                  <span className="text-black">
                    back.
                  </span>
                </h1>

                <p className="mt-3 text-sm leading-6 text-black">
                  Sign in to continue exploring your personal space.
                </p>
              </div>

              <div className="relative rounded-[28px] border border-white/90 bg-white/90 p-7 shadow-[0_30px_90px_rgba(2,132,199,0.20)] backdrop-blur-xl sm:p-9">
                {/* gradient top line */}
                <div className="absolute inset-x-10 top-0 h-[3px] rounded-full bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-black"
                    >
                      Email address
                    </label>

                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-black"
                      />
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full rounded-xl border border-slate-200 bg-sky-50/50 py-3.5 pl-11 pr-4 text-sm text-black outline-none transition placeholder:text-black focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-medium text-black"
                    >
                      Password
                    </label>

                    <div className="relative">
                      <LockKeyhole
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-black"
                      />

                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full rounded-xl border border-slate-200 bg-sky-50/50 py-3.5 pl-11 pr-12 text-sm text-black outline-none transition placeholder:text-black focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-black transition hover:text-slate-600"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-black">
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                        className="h-4 w-4 rounded border-black accent-black"
                      />
                      Remember me
                    </label>

                    <a
                      href="/forgot-password"
                      className="text-sm font-medium text-black transition hover:text-slate-600"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="btn-shine group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 py-3.5 text-sm font-semibold text-black shadow-lg shadow-sky-500/40 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/50 active:translate-y-0"
                  >
                    Sign in
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  {message && (
                    <p className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-xs leading-5 text-black">
                      {message}
                    </p>
                  )}
                </form>

                <div className="my-7 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-300" />
                  <span className="text-xs font-medium text-black">OR</span>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-300" />
                </div>

                <p className="text-center text-sm text-black">
                  Don&apos;t have an account?{" "}
                  <a
                    href="/register"
                    className="font-semibold text-black underline underline-offset-4 transition hover:text-slate-600"
                  >
                    Create account
                  </a>
                </p>
              </div>

              <p className="mt-7 text-center text-xs text-black">
                © 2026 Lintang Maharani. All rights reserved.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* =========================================
          ANIMASI BACKGROUND (CSS)
          ========================================= */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-13px) rotate(12deg); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-17px); }
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes loginAppear {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shine {
          0% { transform: translateX(-120%) skewX(-20deg); }
          60%, 100% { transform: translateX(260%) skewX(-20deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: floatSlow 7s ease-in-out infinite; }
        .animate-card-float { animation: cardFloat 6s ease-in-out infinite; }
        .animate-login-appear { animation: loginAppear 0.8s ease-out both; }
        .btn-shine::after {
          content: ""; position: absolute; top: 0; left: 0; height: 100%; width: 40%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
          transform: translateX(-120%) skewX(-20deg); animation: shine 3.5s ease-in-out infinite; pointer-events: none;
        }

        /* --- ANIMASI KHUSUS BACKGROUND BARU --- */
        @keyframes blob-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes blob-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 40px) scale(0.9); }
          66% { transform: translate(20px, -20px) scale(1.05); }
        }
        @keyframes blob-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 30px) scale(1.1); }
        }
        .animate-blob-1 { animation: blob-1 15s ease-in-out infinite; }
        .animate-blob-2 { animation: blob-2 18s ease-in-out infinite; }
        .animate-blob-3 { animation: blob-3 20s ease-in-out infinite; }

        @keyframes pulse-soft {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-pulse-soft { animation: pulse-soft 8s ease-in-out infinite; }

        @keyframes float-bubble-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -30px); }
        }
        @keyframes float-bubble-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 20px); }
        }
        @keyframes float-bubble-3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, 25px); }
        }
        .animate-float-bubble-1 { animation: float-bubble-1 10s ease-in-out infinite; }
        .animate-float-bubble-2 { animation: float-bubble-2 12s ease-in-out infinite; }
        .animate-float-bubble-3 { animation: float-bubble-3 14s ease-in-out infinite; }

        @keyframes drift-1 {
          0%, 100% { transform: translate(0, 0); opacity: 0.8; }
          50% { transform: translate(10px, -20px); opacity: 1; }
        }
        @keyframes drift-2 {
          0%, 100% { transform: translate(0, 0); opacity: 0.5; }
          50% { transform: translate(-15px, 15px); opacity: 1; }
        }
        @keyframes drift-3 {
          0%, 100% { transform: translate(0, 0); opacity: 0.7; }
          50% { transform: translate(5px, 20px); opacity: 1; }
        }
        .animate-drift-1 { animation: drift-1 9s ease-in-out infinite; }
        .animate-drift-2 { animation: drift-2 11s ease-in-out infinite; }
        .animate-drift-3 { animation: drift-3 13s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .animate-float, .animate-float-slow, .animate-card-float, .animate-login-appear, .btn-shine::after,
          .animate-blob-1, .animate-blob-2, .animate-blob-3, .animate-pulse-soft,
          .animate-float-bubble-1, .animate-float-bubble-2, .animate-float-bubble-3,
          .animate-drift-1, .animate-drift-2, .animate-drift-3 {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}