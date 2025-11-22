import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_120px_60px_rgba(2,6,23,0.9)]"></div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center md:pt-36 lg:pb-32">
        <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300 ring-1 ring-inset ring-blue-400/20">
          Futuristic Service Business
        </span>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">
          Build trust with a modern, 3D-powered presence
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-slate-300 sm:text-lg">
          We design, build, and scale digital products and services for ambitious teams. Minimal, corporate, and absolutely focused on outcomes.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#services" className="rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300">Explore Services</a>
          <a href="#contact" className="rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30">Get in touch</a>
        </div>
      </div>
    </section>
  )
}
