import React from 'react'
import { Components } from './components'
import './App.scss'
import Lenis from '@studio-freight/lenis'

function App() {
  const lenis = new Lenis()
 
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  raf(10000)
  return (
    <div>
      <header>
        <Components.Navbar />
      </header>
      <main>
        <Components.Banner />
        <Components.Services />
        <Components.About />
        <Components.Cases />
      </main>
      <footer>
        <Components.Footer />
      </footer>
    </div>
  )
}

export default App