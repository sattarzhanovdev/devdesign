import React from 'react'
import c from './navbar.module.scss'
import { Link } from 'react-router-dom'
import { Images } from '../../images'
import { NavList } from '../../utils'
import { RiInstagramLine } from "react-icons/ri";
import { FaBars } from 'react-icons/fa'
import Sidebar from '../sidebar'

const Navbar = () => {
  const [ active, setActive ] = React.useState(true)

  return (
    <div className={c.navbar}>
      <div className={c.logo}>
        <Link to={'/'}>
          <img src={Images.logo} alt="DevDesign" />
        </Link>
      </div>
      <ul className={c.list}>
        {
          NavList.map(item => (
            <li key={item.id}>
              <Link to={item.path}>
                {item.title}
              </Link>
            </li>
          ))
        }
      </ul>

      <div className={c.bar}>
        <li onClick={() => setActive(!active)}>
          <FaBars />
        </li>
      </div>
      <div className={c.nav_right}>
        <ul className={c.right__nav}>
          <li>
            <Link to={'/tarif/'}>
              Тарифы
            </Link>
          </li>
          <li>
            <Link to={'/news/'}>
              Новости
            </Link>
          </li>
          <li>
            <Link to={'/istorii/'}>
              Истории
            </Link>
          </li>
        </ul>
        <span></span>
        <li>
          <Link to={'tel:+996222121217'}>
            +996 (222) 12-12-17
          </Link>
        </li>
        <li>
          <Link to={'https://instagram.com/devdesign.kg/'} className={c.icon}>
            <RiInstagramLine />
          </Link>
        </li>
      </div>

      <Sidebar active={active} setActive={setActive}/>
    </div>
  )
}

export default Navbar