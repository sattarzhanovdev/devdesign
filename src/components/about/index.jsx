import React from 'react'
import c from './about.module.scss'
import star from '../../icons/Star.svg'

const About = ({AboutRef}) => {
  return (
    <div className={c.about} ref={AboutRef}>
      <div className={c.left}>
        <div className={c.up}>
          <h2>О нас</h2>
          <h1>Познакомьтесь с нашей командой</h1>
        </div>
        <div className={c.down}>
          <div className={c.card}>
            <h1>Цель</h1>
            <h2>
              Наша цель состоит в том, чтобы стать ведущей компанией в Кыргызстане, предоставляя высококачественные цифровые услуги и инновационные решения для наших клиентов. Мы стремимся обеспечить полное удовлетворение потребностей клиентов в области веб-разработки, маркетинга, дизайна и продвижения в интернете.
            </h2>
          </div>
          <div className={c.card}>
            <h1>Философия</h1>
            <h2>
              Наша философия заключается в том, чтобы быть ведущими в своей области, предоставляя инновационные и эффективные решения, которые помогут нашим клиентам достичь успеха в цифровой эпохе и достойно представить свои бренды и идеи в онлайн-среде.            
            </h2>
          </div>
        </div>
      </div>
      <div className={c.right}>
        <div className={c.up}>
          <div>
            <h1>10</h1>
            <h2>Выполненных работ</h2>
          </div>
          <div>
            <h1>1</h1>
            <h2>Год открытия компании</h2>
          </div>
          <div>
            <h1>5</h1>
            <h2>Сотрудников</h2>
          </div>
          <div>
            <h1>2</h1>
            <h2>Проекта в процессе</h2>
          </div>
        </div>
        <div className={c.down}>
          <div className={c.stars}>
            <img src={star} alt="devdesign" />
            <img src={star} alt="devdesign" />
            <img src={star} alt="devdesign" />
            <img src={star} alt="devdesign" />
            <img src={star} alt="devdesign" />
            <p>1 отзыв</p>
          </div>
          <span></span>
          <h2>Мы всегда находимся в курсе последних тенденций и передовых технологий в сфере цифрового маркетинга и веб-разработки. Мы стремимся применять новые идеи и инновационные подходы для достижения оптимальных результатов для наших клиентов.</h2>
        </div>
      </div>
    </div>
  )
}

export default About