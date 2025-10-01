// app/about/page.tsx
'use client'

import React from "react"
import About from "@/app/About/About"
export default function AboutPage() {
  return (
    <>
    <main className="relative h-screen pt-8 sm:pt-16 ">
      <div className="hidden sm:block absolute inset-0 z-0 bg-neutral-950">
        
      </div>
    <section id="about" className="flex items-center justify-start pl-16">
      <About />
    </section>
    </main>
    
    </>
  );
}
