import React from 'react'
import { Cog, ShieldCheck, Rocket } from 'lucide-react'

const services = [
  {
    icon: Cog,
    title: 'Strategy & Discovery',
    desc: 'Workshops, research, and roadmapping to align stakeholders and uncover opportunities.'
  },
  {
    icon: ShieldCheck,
    title: 'Design & Build',
    desc: 'Product design, engineering, and integrations delivered with quality and speed.'
  },
  {
    icon: Rocket,
    title: 'Scale & Optimize',
    desc: 'Growth experiments, performance, and reliability improvements for scale.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_20%,rgba(59,130,246,0.15),transparent)]"></div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Services</h2>
            <p className="mt-2 text-slate-300">Everything you need to launch and grow a modern service business.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-blue-500/30 hover:bg-white/10">
              <div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-300 ring-1 ring-inset ring-blue-500/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
