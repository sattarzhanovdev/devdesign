import React from 'react'
import { Components } from './components'
import './App.scss'

function App() {
  return (
    <div>
      <header>
        <Components.Navbar />
      </header>
      <main>
        <Components.Banner />
      </main>
    </div>
  )
}

export default App