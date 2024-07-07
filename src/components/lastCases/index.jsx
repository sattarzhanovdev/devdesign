import React from 'react'
import c from './lastCases.module.scss'
import { FaChevronRight } from "react-icons/fa6";

const LastCases = () => {
  return (
    <div className={c.lastCases}>
      <div className={c.cards}>
        <div className={c.card}>
          <div className={c.up}>
            <p>
              New case
            </p>

            <div>
              <p>
                Web-design
              </p>
              <p>
                Frontend
              </p>
              <p>
                Backend
              </p>
            </div>
          </div>

          <div className={c.down}>
            <h2>TechnoFoods</h2>
            <li>
              <FaChevronRight />
            </li>
          </div>
        </div>
        <div className={c.card}>
          <div className={c.up}>
            <p>
              New case
            </p>

            <div>
              <p>
                Web-design
              </p>
              <p>
                Frontend
              </p>
              <p>
                Backend
              </p>
            </div>
          </div>

          <div className={c.down}>
            <h2>TechnoFoods</h2>
            <li>
              <FaChevronRight />
            </li>
          </div>
        </div>
        <div className={c.card}>
          <div className={c.up}>
            <p>
              New case
            </p>

            <div>
              <p>
                Web-design
              </p>
              <p>
                Frontend
              </p>
              <p>
                Backend
              </p>
            </div>
          </div>

          <div className={c.down}>
            <h2>TechnoFoods</h2>
            <li>
              <FaChevronRight />
            </li>
          </div>
        </div>
        <div className={c.card}>
          <div className={c.up}>
            <p>
              New case
            </p>

            <div>
              <p>
                Web-design
              </p>
              <p>
                Frontend
              </p>
              <p>
                Backend
              </p>
            </div>
          </div>

          <div className={c.down}>
            <h2>TechnoFoods</h2>
            <li>
              <FaChevronRight />
            </li>
          </div>
        </div>
      </div>

      <div className={c.info}>
        <h1>
          Сату́рн — шестая планета по удалённости от Солнца и вторая
        </h1>

        <p>
          Великобрита́ния (русское название происходит от англ. Great Britain), или Соединённое Короле́вство (United Kingdom, сокр. UK)[19], полная официальная форма — Соединённое Короле́вство Великобрита́нии и Се́верной Ирла́ндии
        </p>

        <button>
          Обсудить проект
        </button>
      </div>
    </div>
  )
}

export default LastCases