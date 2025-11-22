import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <div className="text-lg font-semibold">BlueWorks</div>
            <p className="mt-1 text-sm text-slate-400">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <nav className="flex gap-6 text-slate-300">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#blog" className="hover:text-white">Blog</a>
          </nav>
          <div className="flex gap-3 text-slate-300">
            <a aria-label="Twitter" href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a aria-label="LinkedIn" href="#" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
            <a aria-label="Instagram" href="#" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
            <a aria-label="Facebook" href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
