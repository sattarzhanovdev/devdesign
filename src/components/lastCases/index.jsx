import React from 'react'
import c from './lastCases.module.scss'
import { FaChevronRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Portfolio } from '../../utils';

const LastCases = () => {
  return (
    <div className={c.lastCases}>
      <div className={c.cards}>
        {
          Portfolio.slice(0, 4).map(item => (
            <div className={c.card} style={{background: `url(${item.image})`}} key={item.id}>
              <div className={c.up}>
                <p>
                  New case
                </p>

                <div>
                  {
                    item.stacks.map((value, i) => (
                      <p key={i}>
                        {value}
                      </p>
                    ))
                  }
                </div>
              </div>

              <Link to={item.link}>
                <div className={c.down}>
                  <h2>{item.title}</h2>
                  <li>
                    <FaChevronRight />
                  </li>
                </div>
              </Link>
            </div>
          ))
        }
      </div>

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

export default LastCases