import React from 'react'
import c from './services.module.scss'

const Services = () => {
  return (
    <div className={c.services} id='services'>
      <div className={c.left}>
        <h1>Услуги</h1>
      </div>
      <div className={c.right}>
        <div className={c.service} data-aos="fade-down-left" data-aos-delay="300" data-aos-duration="1000">
          <div className={c.left_side}>
            <p>
              01
            </p>
            <h1>Создание сайтов</h1>
            <p>
              От 20 000 ₽
            </p>
          </div>
          <div className={c.right_side}>
            <img 
              src="/icons/arrow.svg" 
              alt="arrow"
            />
          </div>
        </div>
        <div className={c.service} data-aos="fade-down-left" data-aos-delay="300" data-aos-duration="1000">
          <div className={c.left_side}>
            <p>
              02
            </p>
            <h1>Веб-дизайны</h1>
            <p>
              От 10 000 ₽
            </p>
          </div>
          <div className={c.right_side}>
            <img 
              src="/icons/arrow.svg" 
              alt="arrow"
            />
          </div>
        </div>
        <div className={c.service} data-aos="fade-down-left" data-aos-delay="300" data-aos-duration="1000">
          <div className={c.left_side}>
            <p>
              03
            </p>
            <h1>Графический дизайн</h1>
            <p>
              От 10 000 ₽
            </p>
          </div>
          <div className={c.right_side}>
            <img 
              src="/icons/arrow.svg" 
              alt="arrow"
            />
          </div>
        </div>
        <div className={c.service} data-aos="fade-down-left" data-aos-delay="300" data-aos-duration="1000">
          <div className={c.left_side}>
            <p>
              04
            </p>
            <h1>SEO оптимизация</h1>
            <p>
              От 5000 ₽
            </p>
          </div>
          <div className={c.right_side}>
            <img 
              src="/icons/arrow.svg" 
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services