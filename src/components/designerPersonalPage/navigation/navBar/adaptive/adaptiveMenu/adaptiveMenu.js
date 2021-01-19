import React from 'react';
import style from './adaptiveMenu.module.css'
import {NavLink} from 'react-router-dom';

const items = [
  {title: 'Главное', link: '/main'},
  {title: 'Товары', link: '/listOfProducts'},
  {title: 'Заказы', link: '/orders'},
  {title: 'Финансы', link: '/finance'},
  {title: 'Помощь', link: '/'},
]

const AdaptiveMenu = ({hideMenuHandler}) => {

  const renderMenu = () => {
    return items.map((item, index) => {
      return (
          <li onClick={hideMenuHandler} key={index}>
            <NavLink to={item.link} className={style.item}>
              {item.title}
            </NavLink>
          </li>
      )
    })
  }

  return (
      <div className={style.menu}>
        <ul className={style.list}>
          {renderMenu()}
        </ul>
      </div>
  );
};

export default AdaptiveMenu;