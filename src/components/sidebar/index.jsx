import React from 'react'
import c from './sidebar.module.scss'
import { Link } from 'react-router-dom'

const Sidebar = ({active, setActive}) => {
  const toServices = () => {
    const services = document.getElementById('services');
    services.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
    setActive(!active)
  }

  const toCases = () => {
    const cases = document.getElementById('cases');
    cases.scrollIntoView({behavior: "smooth", inline: "center"})
    setActive(!active)
  }
  
  const toAbout = () => {
    const about = document.getElementById('about');
    about.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
    setActive(!active)
  }

  const toContact = () => {
    const contact = document.getElementById('contact');
    contact.scrollIntoView({behavior: "smooth"})
    setActive(!active)
  }

  return (
    <div className={c.sidebar_container}>
      <div className={active ? c.sidebar : c.sidebar_dis}>
        <div className={c.up}>
          <img 
            src="/images/logo.png" 
            alt="logo"
          />
          <li onClick={() => setActive(!active)}>
            <img 
              src='/icons/close.svg'
              alt='close'
            />
          </li>
        </div>
        <ul className={c.list}>
          <li onClick={() => toServices()}>
            Услуги
          </li>
          <li onClick={() => toCases()}>
            Кейсы
          </li>
          <li onClick={() => toAbout()}>
            О компании
          </li>
          <li onClick={() => toContact()}>
            Контакты
          </li>
        </ul>
        <div className={c.footer}>
          <div className={c.contacts}>
            <li>
              <Link to={'tel:+996222121217'}>
                +996 (222) 12-12-17
              </Link>
            </li>
            <li>
              <Link to={'mailto:devdesign.kg@gmail.com'}>
                devdesign.kg@gmail.com
              </Link>
            </li>
          </div>
          <div className={c.line}></div>
          <div className={c.socials}>
            <Link to={'https://t.me/devdesignkg'}>
              <div>
                <img 
                  src="/icons/telegram.svg" 
                  alt="telegram"
                />
              </div>
            </Link>
            <Link to={'https://instagram.com/devdesign.kg'}>
              <div>
                <img 
                  src="/icons/instagram.svg" 
                  alt="instagram"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar