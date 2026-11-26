"use client";

export default function CopyrightYear() {
  return <span>{new Date().getFullYear()}</span>;
}