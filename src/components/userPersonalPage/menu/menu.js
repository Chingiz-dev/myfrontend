import React from 'react';
import Link from './link/link';
import style from './menu.module.css'
import Info from './info/info';

const links = [
  {title: 'Корзина', img: require('../../../assets/img/briefcase.svg'), url: '/basket'},
  {title: 'Заказы', img: require('../../../assets/img/box.svg'), url: '/userPage/orders'},
  {title: 'Избранное', img: require('../../../assets/img/heart.svg'),  url: '/userPage/favorites'},
]
const links2 = [
  {title: 'Личные данные', img: require('../../../assets/img/user-check.svg'), url: '/userPage/personalData'},
  {title: 'Мерка', img: require('../../../assets/img/file-text.svg'), url: '/userPage/measure'},
]


const Menu = ({onClickHandler}) => {

  const renderLinks = () => {
    return links.map((item, index) => {
      return(
          <Link
            title={item.title}
            key={index}
            img={item.img}
            url={item.url}
          />
      )
    })
  }

  const renderLinks2 = () => {
    return links2.map((item, index) => {
      return(
          <Link
              title={item.title}
              key={index}
              img={item.img}
              url={item.url}
          />
      )
    })
  }

  return (
      <div className={style.menu}>
        <Info name={'name'} surname={'surname'} email={'email'}/>
        <div className={style.topMenu}>
          <ul onClick={onClickHandler}>
            {renderLinks()}
          </ul>
        </div>
        <ul onClick={onClickHandler}>
          {renderLinks2()}
        </ul>
      </div>
  );
};

export default Menu;