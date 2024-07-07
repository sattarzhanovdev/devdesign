import React from 'react'
import './App.scss'
import { Components } from './components'

function App() {
  return (
    <div>
      <header>
        <Components.Navbar />
      </header>

      <main>
        <Components.LastCases /> 
        <Components.About /> 
      </main>
    </div>
  )
}

export default App