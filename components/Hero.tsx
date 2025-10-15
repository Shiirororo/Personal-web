'use client'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(1000px_500px_at_10%_-10%,rgba(99,68,245,0.25),transparent),radial-gradient(800px_400px_at_90%_10%,rgba(24,204,252,0.18),transparent)] p-8 sm:p-12">
      <div className="relative z-10 max-w-5xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
          Welcome to my website
        </h1>
        <p className="mt-4 text-neutral-300 max-w-xl">
          Hi, I'm <span className="font-semibold">Nhân</span>, a sophomore at
          <span className="font-semibold"> Hanoi University of Science and Technology</span>.
          I focus on Cloud services (eg. AWS).
        </p>
        <div className="mt-6 flex items-center gap-3">
          <Link
            href="/About"
            className="inline-flex items-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition"
          >
            About me
          </Link>
          <Link
            href="/Blog"
            className="inline-flex items-center rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition"
          >
            Read blog
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-0 opacity-60">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/30 blur-3xl" />
      </div>
    </section>
  )
}


