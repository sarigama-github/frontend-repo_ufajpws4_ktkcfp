import React from 'react'

export default function FocusedPortfolio() {
  return (
    <section id="focused-portfolio" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Showcasing Our Finest Work: Custom Solutions We Delivered</h2>
        <p className="mt-2 text-slate-300">From concept to reality, we bring your ideas to life.</p>
        <div className="mt-8">
          <a href="#portfolio" className="inline-flex items-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300">Know More</a>
        </div>
      </div>
    </section>
  )
}
