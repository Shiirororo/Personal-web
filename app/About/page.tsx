// app/about/page.tsx
'use client'

import React from "react"
import About from "@/app/About/About"
export default function AboutPage() {
  return (
    <>
      {/* Nền cố định */}


      {/* Nội dung chính */}
      <main className="relative min-h-screen flex items-center justify-center px-6 sm:px-16">
        <section
          id="about"
          className="relative z-10 w-full max-w-5xl text-foreground flex justify-center sm:justify-start mt-24 sm:mt-0"
        >
          <About />
        </section>
      </main>
    </>
  );
}
