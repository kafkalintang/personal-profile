import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Profile",
  description: "Website personal profile saya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 flex flex-col min-h-screen`}>
        
        {/* --- NAVBAR GLOBAL --- */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              Personal Profile
            </Link>
            <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
              <li><Link href="/about" className="hover:text-blue-600 transition">About</Link></li>
              <li><Link href="/education" className="hover:text-blue-600 transition">Education</Link></li>
              <li><Link href="/experience" className="hover:text-blue-600 transition">Experience</Link></li>
              <li><Link href="/skills" className="hover:text-blue-600 transition">Skills</Link></li>
              <li><Link href="/projects" className="hover:text-blue-600 transition">Projects</Link></li>
              <li><Link href="/achievements" className="hover:text-blue-600 transition">Achievements</Link></li>
              <li><Link href="/interests" className="hover:text-blue-600 transition">Interests</Link></li>
              <li><Link href="/goals" className="hover:text-blue-600 transition">Goals</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
            </ul>
          </div>
        </nav>

        {/* --- KONTEN HALAMAN --- */}
        <div className="flex-grow">
          {children}
        </div>

        {/* --- FOOTER GLOBAL --- */}
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© {new Date().getFullYear()} Personal Profile. All rights reserved.</p>
            <Link
              href="/login"
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg transition font-medium shadow-md"
            >
              Login Admin
            </Link>
          </div>
        </footer>

      </body>
    </html>
  );
}