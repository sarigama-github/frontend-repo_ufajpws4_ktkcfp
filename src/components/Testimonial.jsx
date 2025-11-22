import React from 'react'

const testimonials = [
  {
    quote: 'They helped us ship in weeks what used to take months. The results were immediate.',
    author: 'Alex Rivera',
    role: 'VP Product, NovaTech'
  },
  {
    quote: 'A partner you can trust. Design, code, and strategy all in one place.',
    author: 'Priya K.',
    role: 'Founder, Lumen Labs'
  },
  {
    quote: 'Beautiful work and reliable execution. Our KPIs keep trending up.',
    author: 'Daniel Chen',
    role: 'Growth Lead, Cirrus'
  }
]

export default function Testimonial() {
  return (
    <section id="testimonials" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">What clients say</h2>
        <p className="mt-2 text-slate-300">Outcomes, not just output.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.author} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
              <blockquote className="text-slate-300">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium">{t.author} <span className="text-slate-400 font-normal">— {t.role}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
