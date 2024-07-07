import React from 'react'
import c from './sidebar.module.scss'
import { Images } from '../../images'
import { IoMdClose } from "react-icons/io";
import { NavList } from '../../utils';
import { Link } from 'react-router-dom';
import { RiInstagramLine, RiTelegramLine } from "react-icons/ri";

const Sidebar = ({active, setActive}) => {
  return (
    <div className={active ? c.sidebar : c.sidebar_none}>
      <div className={c.up}>
        <img src={Images.logo} alt="DevDesign" />
        <li onClick={() => setActive(!active)}>
          <IoMdClose />
        </li>
      </div>

      <ul className={c.list}>
        {
          NavList.map(item => (
            <li key={item.id} onClick={() => setActive(!active)}>
              <Link to={item.path}>
                {item.title}
              </Link>
            </li>
          ))
        }
        <li onClick={() => setActive(!active)}>
          <Link to={'/tarif/'}>
            Тарифы
          </Link>
        </li>
        <li onClick={() => setActive(!active)}>
          <Link to={'/news/'}>
            Новости
          </Link>
        </li>
        <li onClick={() => setActive(!active)}>
          <Link to={'/istorii/'}>
            Истории
          </Link>
        </li>
      </ul>

      <footer>
        <li className={c.social}>
          <Link to={'https://instagram.com/devdesign.kg'}>
            <RiInstagramLine />
          </Link>
        </li>
        <li className={c.social}>
          <Link to={'https://t.me/sattarzanov'}>
            <RiTelegramLine />
          </Link>
        </li>
        <span></span>
        <li>
          <Link to={'tel:+996222121217'}>
            +996 (222) 12-12-17
          </Link>
        </li>
      </footer>
    </div>
  )
}

export default Sidebar