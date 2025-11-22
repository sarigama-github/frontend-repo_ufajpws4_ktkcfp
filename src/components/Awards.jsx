import React from 'react'
import { Trophy, Medal, Award } from 'lucide-react'

const awards = [
  { icon: Trophy, title: 'Awwwards Honorable', year: '2024' },
  { icon: Medal, title: 'CSS Design Awards', year: '2023' },
  { icon: Award, title: 'Dribbble Top Team', year: '2022' },
]

export default function Awards() {
  return (
    <section id="awards" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Awards</h2>
        <p className="mt-2 text-slate-300">Recognition for quality and craft.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {awards.map(({ icon: Icon, title, year }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mx-auto mb-3 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-300 ring-1 ring-inset ring-blue-500/20">
                <Icon className="h-6 w-6" />
              </div>
              <div className="font-semibold">{title}</div>
              <div className="text-xs text-slate-400">{year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
