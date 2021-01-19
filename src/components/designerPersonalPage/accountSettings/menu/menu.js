import React from 'react';
import style from './menu.module.css'
import './style.css'
import {Link, NavLink} from 'react-router-dom';

const links = [
  {title: 'Личные данные', path: 'data'},
  {title: 'Уведомления', path: 'notifications'},
  {title: 'Информация о компании', path: 'aboutCompany'},
  {title: 'Информация о реквизитах', path: 'requisites'},
  {title: 'Договор', path: 'contract'},
]

const Menu = () => {

  const renderLinks = () => {
    return links.map((item, index) => {
      return(
          <li className={style.link} key={index}>
            <NavLink to={`/account/${item.path}`}>
              {item.title}
            </NavLink>
          </li>
      )
    })
  }

  return (
      <div className={style.menu}>
        <ul>
          {renderLinks()}
        </ul>
      </div>
  );
};

export default Menu;