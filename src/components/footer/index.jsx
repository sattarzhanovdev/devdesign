import React from 'react'
import c from './footer.module.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={c.footer} id='contact'>
      <div className={c.left}>
        <div className={c.up}>
          <h1>
            Свяжитесь с нами
          </h1>
          <div className={c.contact}>
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
        </div>
        <div className={c.down}>
          <Link to={'tel:+996222121217'}>
            <button>
              Связаться
            </button>
          </Link>
          <div className={c.socials}>
            <Link to={'https://t.me/devdesignkg'}>
              <div>
                <img src="/icons/telegram.svg" alt="telegram" />
              </div>
            </Link>
            <Link to={'https://instagram.com/devdesign.kg'}>
              <div>
                <img src="/icons/instagram.svg" alt="instagram" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={c.line}></div>
      <div className={c.right}>
        <h1>Обсудить проект</h1>
        <p>Вы можете написать нам в телеграм или в инстаграм или же в почту</p>
      </div>
    </div>
  )
}

export default Footer