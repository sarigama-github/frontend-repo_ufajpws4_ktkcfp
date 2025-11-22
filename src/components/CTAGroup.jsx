import React from 'react'

export default function CTAGroup() {
  return (
    <section id="ctas" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8">
          <div className="text-xs uppercase tracking-wide text-blue-300">App Development</div>
          <h3 className="mt-2 text-2xl font-bold">Custom App Development for Your Business’s Custom Needs</h3>
          <p className="mt-2 text-slate-300">We made the finest app for our clients with AI integrations across multiple industries.</p>
          <a href="#contact" className="mt-6 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-400">Schedule a call</a>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8">
          <div className="text-xs uppercase tracking-wide text-blue-300">E‑Commerce</div>
          <h3 className="mt-2 text-2xl font-bold">Transform Your Online Business with Our Ecommerce Expertise</h3>
          <p className="mt-2 text-slate-300">Creating smooth shopping experiences for your customers.</p>
          <a href="#contact" className="mt-6 inline-block rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15">Know More</a>
        </div>
      </div>
    </section>
  )
}
