import React from 'react'
import { Portfolio } from '../../utils'
import c from './cases.module.scss'
import { FaChevronRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Cases = ({CasesRef}) => {
  return (
    <div className={c.cases} ref={CasesRef}>
      <h1>Портфолио</h1>
      <div className={c.cards}>
        {
          Portfolio.map(item => (
            <div className={c.card} style={{background: `url(${item.image2}) center / cover`}} key={item.id}>
              <div className={c.up}>
                <p>
                  Case
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
    </div>
  )
}

export default Cases