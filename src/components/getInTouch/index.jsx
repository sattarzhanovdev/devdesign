import React from 'react'
import c from './getInTouch.module.scss'
import { Link } from 'react-router-dom'

const GetInTouch = () => {
  return (
    <div className={c.getInTouch}>
      <div className={c.info}>
        <h1>
          Свяжитесь с нами      
        </h1>

        <h3>
          Приглашаем к сотрудничеству всех, кто готов вносить новшества и вместе торжественный высок
        </h3>

        <Link to={'https://t.me/sattarzanov'}>
          <button>
            Обсудить проект
          </button>
        </Link>
      </div>
    </div>
  )
}

export default GetInTouch