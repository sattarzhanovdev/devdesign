import React from 'react'
import c from './banner.module.scss'
import AOS from 'aos'

const Banner = () => {
  AOS.init()
  return (
    <div className={c.banner}>
      <div className={c.text}>
        <div className={c.up}>
          <h1
            data-aos="fade-up"
          >
            Мы команда разработчиков
          </h1>
        </div>
        <div>
          <h1
            data-aos="fade-up"
          >
            которые делают свои работы
          </h1>
        </div>
        <div>
          <h1
            data-aos="fade-up"
          >
            с удовольствием
          </h1>
        </div>
      </div>
      <p>
        Работая с нами получите хорошое удовольствие и качественный результат!
      </p>
    </div>
  )
}

export default Banner