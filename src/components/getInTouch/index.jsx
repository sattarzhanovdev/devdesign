import React from 'react'
import c from './getInTouch.module.scss'
import { Link } from 'react-router-dom'

const GetInTouch = () => {
  return (
    <div className={c.getInTouch}>
      <div className={c.info}>
        <h1>
          Сату́рн — шестая планета по удалённости от Солнца и вторая
        </h1>

        <p>
          Великобрита́ния (русское название происходит от англ. Great Britain), или Соединённое Короле́вство (United Kingdom, сокр. UK)[19], полная официальная форма — Соединённое Короле́вство Великобрита́нии и Се́верной Ирла́ндии
        </p>

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