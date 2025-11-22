import React from 'react'

export default function CRM() {
  return (
    <section id="crm" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">We offer a custom CRM solution for all your manual operations.</h2>
          <p className="mt-3 text-slate-300">Don’t let manual work slow down your business. Choose the best-in-class custom CRM solutions today.</p>
          <div className="mt-8">
            <a href="#contact" className="inline-flex items-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300">Schedule a call</a>
          </div>
        </div>
      </div>
    </section>
  )
}
