import React from 'react'
import '../../../assets/styles/App.scss'
import {Logo} from './childs/Logo';
import {MainMenu} from './childs/MainMenu';
import {Search} from './childs/Search';
import {TopMenu} from './childs/TopMenu';
import { NavLink, useLocation } from 'react-router-dom';

export const Header = () => {
  let location = useLocation();
  return (
      <div className={location.pathname === '/home' ? 'header with_image' : 'header'}>
        <div className="header__top">
          <TopMenu color={location.pathname === '/home' ? 'white' : 'black'}/>
        </div>
        <div className="header__middle">
          <Logo/>
          <MainMenu color={location.pathname === '/home' ? 'white' : 'black'} />
          <Search color={location.pathname === '/home' ? 'white' : 'black'}/>
        </div>
        { location.pathname === '/home' &&
          <div className="header__footer">
            <h1 className='header__footer__title'>Fit For You</h1>
            <p className='header__footer__description'>Одежда, которая подойдёт только вам</p>

              <NavLink className='header__middle__main_menu__ul__nav_link btn' to="/catalog">
                <div className="button header_btn white">
                  Купить
                </div>
                </NavLink>

          </div>
        }
      </div>
  );
}


