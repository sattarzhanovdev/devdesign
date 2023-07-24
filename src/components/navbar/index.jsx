import React from 'react'
import c from './navbar.module.scss'
import { Link } from 'react-router-dom'
import { Components } from '..'

const Navbar = () => {
  const [ active, setActive ] = React.useState(false)

  const toServices = () => {
    const services = document.getElementById('services');
    services.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
  }

  const toCases = () => {
    const cases = document.getElementById('cases');
    cases.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
  }
  
  const toAbout = () => {
    const about = document.getElementById('about');
    about.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
  }

  const toContact = () => {
    const contact = document.getElementById('contact');
    contact.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className={c.navbar_container}>
      <div className={c.navbar}>
        <div className={c.logo}>
          <img 
            src="/images/logo.png" 
            alt="logo"
          />
        </div>
        <ul className={c.list}>
          <li className={c.services} onClick={() => toServices()}>
            <div onClick={() => setActive(!active)}>
              <img 
                src="/icons/arrow down.svg" 
                alt="down"
              />
            </div>
            Услуги  
          </li>
          <li onClick={() => toCases()}>
            <span>
              Кейсы
              <li>Кейсы</li>
            </span>
          </li>
          <li onClick={() => toAbout()}>
            <span>
              О студии
              <li>О студии</li>
            </span>
          </li>
          <li onClick={() => toContact()}>
            <span>
              Контакты
              <li>Контакты</li>
            </span>
          </li>
        </ul>
        <div className={c.getInTouch}>
          <li>
            <Link to={'tel:+996222121217'}>
              Связаться с нами
            </Link>
          </li>
        </div>
        <div className={c.bars} onClick={() => setActive(!active)}>
          <img 
            src="/icons/bars.svg" 
            alt="bars icon"
          />
        </div>
      </div>
      <Components.Sidebar active={active} setActive={setActive} />
    </div>
  )
}

export default Navbar