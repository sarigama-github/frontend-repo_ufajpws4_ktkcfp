import React from 'react'

const stats = [
  { label: 'Projects Delivered', value: '120+' },
  { label: 'Client NPS', value: '72' },
  { label: 'Avg. Go-Live', value: '6 weeks' },
  { label: 'Team Experience', value: '10+ yrs' },
]

export default function Numbers() {
  return (
    <section id="numbers" className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-2xl font-bold text-blue-300">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
