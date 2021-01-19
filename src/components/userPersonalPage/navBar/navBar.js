import React, {useState} from 'react';
import style from './navBar.module.css'
import Link from './link/link';
import Search from '../../../fields/search/search';
import Menu from '../menu/menu';

const links = ['Каталог', 'Новости', 'Контакты']

const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  const renderLinks = () => {
    return links.map((item, index) => {
      return(
          <Link
            title={item}
            key={index}
          />
      )
    })
  }

  const clickBurgerMenu = () => {
    setToggleMenu(prevState => !prevState)
  }

  const hideBurgerMenu = () => {
    setToggleMenu(false)
  }

  return (
      <div className={style.nav}>
        <div onClick={clickBurgerMenu} className={style.burger}>
            <img src={require('../../../assets/img/burger_icon.svg')}/>
        </div>
        <img className={style.logo} src={require('../../../assets/img/main_logo_black.svg')}/>
        <div className={style.blockLinks}>
          <ul className={style.links}>
            {renderLinks()}
          </ul>
        </div>
        <div className={style.search}>
          <Search placeholder={'Поиск'}/>
        </div>
        <div className={style.icons}>
          <img src={require('../../../assets/img/ring_icon.svg')}/>
          <img src={require('../../../assets/img/help-circle.svg')}/>
          <img src={require('../../../assets/img/log-out.svg')}/>
        </div>
        <div className={style.adaptiveIcons}>
          <img src={require('../../../assets/img/search.svg')}/>
          <img src={require('../../../assets/img/briefcase.svg')}/>
        </div>

        {toggleMenu ?
          <Menu onClickHandler={hideBurgerMenu}/> : null
        }

      </div>
  );
};

export default NavBar;