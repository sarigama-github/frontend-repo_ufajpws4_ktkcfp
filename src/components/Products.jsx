import React from 'react'
import { Package, Layers, Plug } from 'lucide-react'

const products = [
  { icon: Package, name: 'Starter Kit', desc: 'A curated bundle to kickstart your web presence.' },
  { icon: Layers, name: 'Pro Suite', desc: 'Advanced components and templates for rapid delivery.' },
  { icon: Plug, name: 'Integrations', desc: 'Ready-made connectors for your favorite tools.' }
]

export default function Products() {
  return (
    <section id="products" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Products</h2>
          <p className="mt-2 text-slate-300">Reusable, flexible, and built for modern teams.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-300 ring-1 ring-inset ring-blue-500/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
