import React from 'react'
import './App.scss'
import { Components } from './components'
import { useLocation } from 'react-router-dom'
import { SEOKeys } from './utils'

function App() {
  const path = useLocation().pathname
  const AboutRef = React.useRef()
  const ServicesRef = React.useRef()
  const CasesRef = React.useRef()


  React.useEffect(() => {
    if(path === '/about/'){
      window.scrollTo({
        top: AboutRef.current.offsetTop,
        behavior: 'smooth'
      })
    }else if(path === '/stacks/'){
      window.scrollTo({
        top: ServicesRef.current.offsetTop,
        behavior: 'smooth'
      })
    }else if(path === '/portfolio/'){
      window.scrollTo({
        top: CasesRef.current.offsetTop,
        behavior: 'smooth'
      })
    }
  }, [path])

  return (
    <div>
      <h1>
        Ведутся технические работы
      </h1>
    </div>
  )
}

export default App
