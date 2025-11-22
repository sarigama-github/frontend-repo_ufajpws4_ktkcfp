import React from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-950/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="text-lg font-semibold">BlueWorks</a>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#products" className="hover:text-white">Products</a>
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#testimonials" className="hover:text-white">Testimonials</a>
          <a href="#blog" className="hover:text-white">Blog</a>
          <a href="#awards" className="hover:text-white">Awards</a>
          <a href="#contact" className="rounded-md bg-blue-500 px-3 py-2 font-medium text-white hover:bg-blue-400">Contact</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-200"><Menu /></button>
      </div>

      {open && (
        <div className="mx-auto max-w-7xl px-6 pb-4 md:hidden">
          <div className="grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
            <a onClick={() => setOpen(false)} href="#services" className="hover:text-white">Services</a>
            <a onClick={() => setOpen(false)} href="#products" className="hover:text-white">Products</a>
            <a onClick={() => setOpen(false)} href="#portfolio" className="hover:text-white">Portfolio</a>
            <a onClick={() => setOpen(false)} href="#testimonials" className="hover:text-white">Testimonials</a>
            <a onClick={() => setOpen(false)} href="#blog" className="hover:text-white">Blog</a>
            <a onClick={() => setOpen(false)} href="#awards" className="hover:text-white">Awards</a>
            <a onClick={() => setOpen(false)} href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
