import React from 'react'
import c from './services.module.scss'
import { Link } from 'react-router-dom'

const Services = ({ServicesRef}) => {
  return (
    <div className={c.services} ref={ServicesRef}>
      <div className={c.title}>
        <h1>Сату́рн — шестая планета по удалённости от Солнца и вторая</h1>
        <p>Великобрита́ния (русское название происходит от англ. Great Britain), или Соединённое</p>
      </div>
      <div className={c.cards}>
        <div className={c.card}>
          <h1>
            Design
          </h1>
          <p>
            Великобрита́ния (русское название происходит от англ. Great Britain), или Соединённое Короле́вство (United Kingdom, сокр. UK)[19], полная официальная форма — Соединённое Короле́вство Великобрита́нии и Се́верной Ирла́ндии
          </p>
          <div>
            <h1>
              8
            </h1>
            <p>Проектов</p>
          </div>
          <Link to={'https://t.me/sattarzanov'}>
            <button>
              Обсудить проект
            </button>
          </Link>
        </div>
        <div className={c.card}>
          <h1>
            Frontend
          </h1>
          <p>
            Великобрита́ния (русское название происходит от англ. Great Britain), или Соединённое Короле́вство (United Kingdom, сокр. UK)[19], полная официальная форма — Соединённое Короле́вство Великобрита́нии и Се́верной Ирла́ндии
          </p>
          <div>
            <h1>
              10
            </h1>
            <p>Проектов</p>
          </div>
          <Link to={'https://t.me/sattarzanov'}>
            <button>
              Обсудить проект
            </button>
          </Link>
        </div>
        <div className={c.card}>
          <h1>
            Backend
          </h1>
          <p>
            Великобрита́ния (русское название происходит от англ. Great Britain), или Соединённое Короле́вство (United Kingdom, сокр. UK)[19], полная официальная форма — Соединённое Короле́вство Великобрита́нии и Се́верной Ирла́ндии
          </p>
          <div>
            <h1>
              6
            </h1>
            <p>Проектов</p>
          </div>
          <Link to={'https://t.me/sattarzanov'}>
            <button>
              Обсудить проект
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services