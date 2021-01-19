import React, {useState} from 'react';
import style from './nav-bar.module.css';
import './navBar.css'
import AdaptiveMenu from './adaptive/adaptiveMenu/adaptiveMenu';
import InvisibleBackDrop from '../../UI/invisibleBackDrop/invisibleBackDrop';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {

  const [toggle, setToggle] = useState(false)

  const [userToggle, setUserToggle] = useState(false)


  const hideMenu = () => {
    setToggle(false)
  }

  const showMenu = () => {
    setToggle(true)
  }

  const showUserMenu = () => {
    setUserToggle(true)
  }

  const hideUserMenu = () => {
    setUserToggle(false)
  }

  let cls = ''
  if(userToggle){
    cls = style.showUserMenu
  }else {
    cls = style.hideUserMenu
  }

  return (
      <div className={style.navBar}>
        <div className={style.logoAndBurger}>
          <div onClick={showMenu} className={style.burger}>
            <img src={require('../../../../assets/img/burger_icon.svg')}/>
          </div>
          <div className={style.logo}>
            <a href={'#'}>
              <img src={require('../../../../assets/img/main_logo_black.svg')}
                   alt={'Fit for you'}/>
            </a>
          </div>
        </div>
        <div className={style.listLinks}>
          <ul className={style.links}>
            <li>
              <NavLink className={style.link} to={'/main'}>Главное</NavLink>
            </li>
            <li>
              <NavLink className={style.link} to={'/listOfProducts'}>Товары</NavLink>
            </li>
            <li>
              <NavLink className={style.link} to={'/orders'}>Заказы</NavLink>
            </li>
            <li>
              <NavLink className={style.link} to={'/finance'}>Финансы</NavLink>
            </li>
            <li>
              <a className={style.link} href={'#'}>Помощь</a>
            </li>
          </ul>
        </div>

        <div>
          <div>
            <span onClick={showUserMenu} className={style.userIcon} href={'#'}>
              <img style={{marginRight: '34px'}}
                   src={require('../../../../assets/img/user_icon.svg')}/>
            </span>
            <a href={'#'}>
              <img src={require('../../../../assets/img/ring_icon.svg')}/>
            </a>
          </div>
        </div>

        {toggle ? <AdaptiveMenu hideMenuHandler={hideMenu}/> : null}


        {userToggle ? <><InvisibleBackDrop onClickHandler={hideUserMenu}/>
        <div className={cls}>
          <div className={style.userMenu}>
            <div onClick={hideUserMenu}>
              <Link to={'/account/data'}>
                Настройки
              </Link>
            </div>
            <div>Выход</div>
          </div>
        </div>
        </> : null}

      </div>
  );
};

export default NavBar;