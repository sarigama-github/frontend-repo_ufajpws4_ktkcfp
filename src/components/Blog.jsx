import React from 'react'

const posts = [
  { title: 'Design systems that scale', date: 'Oct 12, 2025', excerpt: 'How to balance consistency and creativity across products.' },
  { title: 'Shipping velocity playbook', date: 'Sep 22, 2025', excerpt: 'Frameworks and rituals we use to keep momentum high.' },
  { title: 'Bridging design and code', date: 'Aug 30, 2025', excerpt: 'Practical tips for tighter collaboration.' },
]

export default function Blog() {
  return (
    <section id="blog" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Insights</h2>
          <p className="mt-2 text-slate-300">Notes on building better products and services.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs text-slate-400">{p.date}</div>
              <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.excerpt}</p>
              <a href="#" className="mt-4 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
