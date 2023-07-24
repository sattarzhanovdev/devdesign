import React from 'react'
import c from './banner.module.scss'

const Banner = () => {
  return (
    <div className={c.banner}>
      <h1>
        <span>Мы команда разработчиков</span> <br />
        которые делают свои работы <br />
        с удовольствием
      </h1>
      <p>
        Работая с нами получите хорошое удовольствие и качественный результат!
      </p>
    </div>
  )
}

export default Banner