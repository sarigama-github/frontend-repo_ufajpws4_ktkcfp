import React from 'react'

export default function WebDev() {
  return (
    <section id="webdev" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Looking for the finest custom website development for your business?</h2>
          <p className="mt-3 text-slate-300">We have delivered the finest websites for multiple sectors. Efficient, reliable, secure, and packed with the latest technologies.</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#contact" className="inline-flex items-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300">Schedule a free call</a>
            <a href="#portfolio" className="inline-flex items-center rounded-lg bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30">Explore More</a>
          </div>
        </div>
      </div>
    </section>
  )
}
