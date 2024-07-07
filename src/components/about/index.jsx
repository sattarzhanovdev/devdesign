import React from 'react'
import c from './about.module.scss'
import star from '../../icons/Star.svg'

const About = ({AboutRef}) => {
  return (
    <div className={c.about} ref={AboutRef}>
      <div className={c.left}>
        <div className={c.up}>
          <p>О нас</p>
          <h1>Сату́рн — шестая планета по удалённости от Солнца и вторая</h1>
        </div>
        <div className={c.down}>
          <div className={c.card}>
            <h1>Цель</h1>
            <p>
              Наша цель состоит в том, чтобы стать ведущей компанией в Кыргызстане, предоставляя высококачественные цифровые услуги и инновационные решения для наших клиентов. Мы стремимся обеспечить полное удовлетворение потребностей клиентов в области веб-разработки, маркетинга, дизайна и продвижения в интернете.
            </p>
          </div>
          <div className={c.card}>
            <h1>Философия</h1>
            <p>
              Наша философия заключается в том, чтобы быть ведущими в своей области, предоставляя инновационные и эффективные решения, которые помогут нашим клиентам достичь успеха в цифровой эпохе и достойно представить свои бренды и идеи в онлайн-среде.            
            </p>
          </div>
        </div>
      </div>
      <div className={c.right}>
        <div className={c.up}>
          <div>
            <h1>10</h1>
            <p>Выполненных работ</p>
          </div>
          <div>
            <h1>1</h1>
            <p>Год открытия компании</p>
          </div>
          <div>
            <h1>5</h1>
            <p>Сотрудников</p>
          </div>
          <div>
            <h1>2</h1>
            <p>Проекта в процессе</p>
          </div>
        </div>
        <div className={c.down}>
          <div className={c.stars}>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <p>1 отзыв</p>
          </div>
          <span></span>
          <p>Мы всегда находимся в курсе последних тенденций и передовых технологий в сфере цифрового маркетинга и веб-разработки. Мы стремимся применять новые идеи и инновационные подходы для достижения оптимальных результатов для наших клиентов.</p>
        </div>
      </div>
    </div>
  )
}

export default About