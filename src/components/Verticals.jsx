import React from 'react'

const items = [
  {
    slug: 'app-dev',
    eyebrow: 'App Development',
    title: "Custom App Development for Your Business's Unique Needs",
    sub: 'Making Tailored Solutions with AI Integrations Across Industries',
  },
  {
    slug: 'common-services',
    eyebrow: 'Common Services',
    title: 'Simplified Solutions for Common Challenges',
    sub: 'Perfect Services to Boost Your Business',
  },
  {
    slug: 'ecommerce',
    eyebrow: 'E‑Commerce',
    title: 'Transform Your Online Business with Our Ecommerce Expertise',
    sub: 'Creating Smooth Shopping Experiences for Your Customers',
  },
]

export default function Verticals() {
  return (
    <section id="verticals" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">What we build</h2>
          <p className="mt-2 text-slate-300">Focused solutions for your biggest opportunities.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.slug} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs uppercase tracking-wide text-blue-300">{it.eyebrow}</div>
              <h3 className="mt-2 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{it.sub}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">Know More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
