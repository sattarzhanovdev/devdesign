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
            <div className={c.card} key={item.id}>
              <img src={item.image} alt={item.title + ' Сайт'} />
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

export default LastCases