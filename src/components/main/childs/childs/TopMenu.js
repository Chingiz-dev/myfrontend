import React from 'react';
import {FaRegHeart} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const TopMenu = ({color}) => {
   return (
       <div className='header__top_menu'>
         <div className="header__top_menu__left"><p className={`header__middle__main_menu__ul__nav_link ${color}`}>Ваш регион: Россия</p></div>
         <div className="header__top_menu__right">
            <ul className='header__top_menu__ul'>
              <li>
                <NavLink
                    activeClassName='header__middle__main_menu__ul__nav_link_active'
                    className={`header__middle__main_menu__ul__nav_link ${color}`}
                    to="/favorite">
                  <FaRegHeart/>
                </NavLink>
              </li>
              <li>
                <NavLink
                    activeClassName='header__middle__main_menu__ul__nav_link_active'
                    className={`header__middle__main_menu__ul__nav_link ${color}`}
                    to="/signIn">
                  Вход
                </NavLink>
              </li>
              <li>
                <NavLink
                    activeClassName='header__middle__main_menu__ul__nav_link_active'
                    className={`header__middle__main_menu__ul__nav_link ${color}`}
                    to="/signUp">
                  Регистрация
                </NavLink>
              </li>
            </ul>
         </div>
       </div>
   )
}