import React from 'react'
import c from './about.module.scss'

const About = () => {
  return (
    <div className={c.about} id='about'>
      <div className={c.left}>
        <img 
          src="/images/logo.png" 
          alt="logo" 
        />
      </div>
      <div className={c.right}>
        <div data-aos="zoom-in-up" >
          <p>Проектов выполнено</p>
          <h1>5+</h1>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="1000">
          <p>Опыт работы</p>
          <h1>2 года</h1>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="1000">
          <p>Специалистов</p>
          <h1>10+</h1>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="1000"> 
          <p>Разработчики на React</p>
          <h1>2</h1>
        </div>
      </div>
    </div>
  )
}

export default About