import React from 'react'
import c from './navbar.module.scss'

const Navbar = () => {
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
          <li className={c.services}>
            <div>
              <img 
                src="/icons/arrow down.svg" 
                alt="down"
              />
            </div>
            Услуги  
          </li>
          <li>
            <span>
              Кейсы
              <li>Кейсы</li>
            </span>
          </li>
          <li>
            <span>
              О студии
              <li>О студии</li>
            </span>
          </li>
          <li>
            <span>
              Контакты
              <li>Контакты</li>
            </span>
          </li>
        </ul>
        <div className={c.getInTouch}>
          <li>
            Связаться с нами
          </li>
        </div>
        <div className={c.bars}>
          <img 
            src="/icons/bars.svg" 
            alt="bars icon"
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar