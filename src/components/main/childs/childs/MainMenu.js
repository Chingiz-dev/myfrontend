import React from 'react';
import { NavLink } from 'react-router-dom';

export const MainMenu = ({color}) => {
  return (
      <div className='header__middle__main_menu'>
        <ul className='header__middle__main_menu__ul'>
          <li>
            <NavLink
                exact
                activeClassName='header__middle__main_menu__ul__nav_link_active'
                className={`header__middle__main_menu__ul__nav_link ${color}`}
                to="/">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
                activeClassName='header__middle__main_menu__ul__nav_link_active'
                className={`header__middle__main_menu__ul__nav_link ${color}`}
                to="/catalog">
              Каталог
            </NavLink>
          </li>
          <li>
            <NavLink
                activeClassName='header__middle__main_menu__ul__nav_link_active'
                className={`header__middle__main_menu__ul__nav_link ${color}`}
                to="/news">
              Новости
            </NavLink>
          </li>
          <li>
            <NavLink
                activeClassName='header__middle__main_menu__ul__nav_link_active'
                className={`header__middle__main_menu__ul__nav_link ${color}`}
                to="/contacts">
              Контакты
            </NavLink>
          </li>
        </ul>
      </div>
  );
}