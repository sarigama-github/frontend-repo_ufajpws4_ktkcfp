import React from 'react'

const items = [
  { title: 'Fintech Dashboard', tag: 'UI/UX', img: 'https://images.unsplash.com/photo-1551281044-8a5d6b503e45?q=80&w=1400&auto=format&fit=crop' },
  { title: 'E-commerce Redesign', tag: 'Web', img: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1400&auto=format&fit=crop' },
  { title: 'SaaS Marketing', tag: 'Brand', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop' },
  { title: 'Analytics Platform', tag: 'Product', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Portfolio</h2>
            <p className="mt-2 text-slate-300">Selected work across industries.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <span className="text-xs text-blue-300">{it.tag}</span>
                <h3 className="mt-1 text-base font-semibold">{it.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
