
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteShell from "./components/SiteShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Personal Profile | Lintang Maharani",
    template: "%s | Lintang Maharani",
  },
  description:
    "Personal website of Lintang Maharani, showcasing her profile, education, experiences, skills, projects, achievements, interests, goals, blog, mading, and literary works.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteShell>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
