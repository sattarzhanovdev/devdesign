import React from 'react'
import c from './cases.module.scss'
import { cases_base } from '../../utils'
import { Link } from 'react-router-dom'

const Cases = () => {
  return (
    <div className={c.cases} id='cases'>
      <div className={c.title}>
        <h1>
          Кейсы
        </h1>
      </div>
      <div className={c.cards}>
        {
          cases_base.map(item => (
            <div 
              key={item.id} 
              className={c.card}
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div className={c.left}>
                <div className={c.up}>
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>
                </div>
                <div className={c.stacks}>
                  {
                    item.stacks.map((stack, i) => (
                      <p key={i}>{stack}</p>
                    ))
                  }
                </div>
                <p>{item.type}</p>
              </div>
              <div className={c.right}>
                <Link to={item.url}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                  />
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cases