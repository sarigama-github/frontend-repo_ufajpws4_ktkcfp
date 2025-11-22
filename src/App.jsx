import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Portfolio from './components/Portfolio'
import Testimonial from './components/Testimonial'
import Numbers from './components/Numbers'
import Blog from './components/Blog'
import Awards from './components/Awards'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Portfolio />
        <Testimonial />
        <Numbers />
        <Blog />
        <Awards />
      </main>
      <Footer />
    </div>
  )
}

export default App
